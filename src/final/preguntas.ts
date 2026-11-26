import citas from '@content/examen/citas.json';
import { TEMA_POR_ID, type Tema } from '@content/final/temas';
import { CLAVES, ALIAS_CITAS } from '@content/final/claves';
import { loadChapter } from '@/lib/useChapter';
import { blocksText, plain } from '@/lib/text';
import type { Block, Chapter, SourceRef } from '@/types';
import type { Item, Resp } from '@/pages/PreguntasPage';

/** Pregunta unificada para el oral: documentada (Ortega / preguntero) o armada para practicar desde un capítulo. */
export interface PreguntaFinal {
  id: string;
  temaId: string;
  chapterId: string;
  tipo: 'ortega' | 'preguntero' | 'practica' | 'integradora' | 'repregunta';
  texto: string;
  cita?: string;
  ref?: SourceRef;
  link: string;
  resp?: Resp[];
  blocks?: Block[];
  claves?: string[];
  /** No coincidió con las claves del tema: es del capítulo en general. */
  delCapitulo?: boolean;
}

type CapCitas = { id: string; title: string; items: Item[] };
const CITAS: CapCitas[] = (citas as unknown as { sistemas: { capitulos: CapCitas[] }[] }).sistemas.flatMap((s) => s.capitulos);

const cache = new Map<string, Chapter | null>();
async function cap(id: string): Promise<Chapter | null> {
  if (!cache.has(id)) cache.set(id, await loadChapter(id));
  return cache.get(id) ?? null;
}

function tipoDev(d: Chapter['developments'][number]): PreguntaFinal['tipo'] {
  if (d.origen === 'clase') return 'ortega';
  if (d.origen === 'preguntero') return 'preguntero';
  if (/^integradora/i.test(d.question)) return 'integradora';
  if (/^repregunta/i.test(d.question)) return 'repregunta';
  return 'practica';
}

/** Todas las preguntas de un tema, primero las documentadas. */
export async function preguntasDeTema(t: Tema): Promise<PreguntaFinal[]> {
  const clave = CLAVES[t.id];
  const salida: PreguntaFinal[] = [];
  const vistos = new Set<string>();
  for (const { id } of t.capitulos) {
    const ids = ALIAS_CITAS[id] ?? [id];
    for (const cid of ids) {
      for (const i of CITAS.find((c) => c.id === cid)?.items ?? []) {
        const texto = plain(i.texto);
        salida.push({ id: i.id, temaId: t.id, chapterId: cid, tipo: i.origen, texto, cita: i.cita, ref: i.ref, link: i.link, resp: i.resp });
        vistos.add(norm2(texto));
      }
    }
    const c = await cap(id);
    for (const d of c?.developments ?? []) {
      const texto = plain(d.question);
      if (vistos.has(norm2(texto))) continue;
      salida.push({ id: `${id}:${d.id}`, temaId: t.id, chapterId: id, tipo: tipoDev(d), texto, cita: d.quote?.text, ref: d.quote?.refs?.[0], link: `/capitulo/${id}`, blocks: d.answer, claves: d.keyPoints?.map(plain) });
    }
  }
  if (!clave || t.capitulos.length === 0) return ordenar(salida);
  const propias = salida.filter((p) => clave.test(p.texto + ' ' + textoRespuesta(p).slice(0, 400)));
  if (propias.length) return ordenar(propias);
  return ordenar(salida.map((p) => ({ ...p, delCapitulo: true })));
}

const RANGO: Record<PreguntaFinal['tipo'], number> = { ortega: 0, preguntero: 1, integradora: 2, practica: 3, repregunta: 4 };
function ordenar(l: PreguntaFinal[]) {
  return [...l].sort((a, b) => RANGO[a.tipo] - RANGO[b.tipo]);
}

function norm2(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, '').trim();
}

export function respText(r: Resp[]): string {
  return r
    .map((b) => {
      switch (b.t) {
        case 'p':
          return plain(b.text);
        case 'ul':
          return b.items.map((x) => `- ${plain(x)}`).join('\n');
        case 'def':
          return `${b.term}: ${plain(b.text)}`;
        case 'tabla':
          return [b.head.join(' | '), ...b.filas.map((f) => f.map(plain).join(' | '))].join('\n');
        case 'cols':
          return b.cols.map((c) => `${c.titulo}: ${c.items.map(plain).join('; ')}`).join('\n');
        case 'cadena':
          return b.pasos.map(plain).join(' → ');
        case 'arbol':
          return b.nodos.map((n) => `${n.t}${n.d ? ': ' + n.d : ''}`).join('; ');
        default:
          return '';
      }
    })
    .join('\n');
}

export function textoRespuesta(p: PreguntaFinal): string {
  if (p.resp) return respText(p.resp);
  if (p.blocks) return blocksText(p.blocks);
  return '';
}

export const TIPO_LABEL: Record<PreguntaFinal['tipo'], string> = {
  ortega: 'Documentada · Ortega',
  preguntero: 'Preguntero de la cátedra',
  practica: 'Para practicar',
  integradora: 'Integradora',
  repregunta: 'Repregunta',
};

export function temaDe(id: string) {
  return TEMA_POR_ID[id];
}
