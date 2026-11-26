import { TEMA_POR_ID } from '@content/final/temas';
import { MANEUVERS } from '@content/maneuvers';
import { CRONOGRAMA, type Dia } from '@content/final/cronograma';
import { UNIDAD_DE_TEMA } from '@content/final/unidades';
import { plain } from '@/lib/text';
import { cargarApunte, temaTexto } from '@/oral/apuntes';
import { preguntasDeTema, textoRespuesta } from './preguntas';
import { textoBolillasDe } from './ui';

export const INSTRUCCIONES = `Actuá como profesor examinador de Semiología de la Fundación Barceló (sede La Rioja) en un examen final ORAL. Usá esta ficha como referencia de lo que tengo que saber.
1. Haceme preguntas abiertas de UNA en una y esperá mi respuesta. No me muestres la respuesta antes de que intente.
2. Después de cada respuesta, corregí brevemente los errores conceptuales y lo que falte de importante (sin interrumpir por detalles menores).
3. Hacé repreguntas como haría un profesor: por qué ocurre, cómo se explora, qué maniobra usarías, con qué lo diferenciás.
4. Priorizá definiciones, orden de la respuesta, fisiopatología básica, maniobras, tríadas, criterios y valores.
5. Al final, decime qué temas domino, cuáles tengo que reforzar y si estoy preparada para rendir estos temas.`;

const corta = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;

export function fechasDeRepaso(d: Dia): string[] {
  const out: string[] = [];
  for (const x of CRONOGRAMA) for (const b of x.bloques) if (b.repasa?.includes(d.corto)) out.push(x.fecha);
  return out;
}

export interface MetaFicha {
  titulo: string;
  fechaEstudio?: string;
  fechaRepaso?: string[];
  nota?: string;
}

/** Ficha autosuficiente en Markdown (la IA no ve la página). */
export async function armarFicha(temaIds: string[], meta: MetaFicha): Promise<string> {
  const temas = temaIds.map((id) => TEMA_POR_ID[id]).filter(Boolean);
  const L: string[] = [`# Ficha para examen oral — ${meta.titulo}`, '', '## Instrucciones para la IA', INSTRUCCIONES, ''];
  if (meta.fechaEstudio) L.push(`- Estudiado el ${corta(meta.fechaEstudio)}${meta.fechaRepaso?.length ? ` · repaso programado: ${meta.fechaRepaso.map(corta).join(' y ')}` : ''}`);
  if (meta.nota) L.push(`- ${meta.nota}`);
  L.push('', '## Temas y respuestas esperadas');

  const noOlvidar: string[] = [];
  const unidadesVistas = new Set<string>();
  for (const t of temas) {
    const u = UNIDAD_DE_TEMA[t.id];
    const ap = u ? await cargarApunte(u) : null;
    const at = ap?.temas.find((x) => x.tema === t.id);
    if (at) {
      L.push(temaTexto(at), `(${textoBolillasDe(t.id)})`, '');
      if (ap && !unidadesVistas.has(u)) {
        unidadesVistas.add(u);
        for (const x of ap.noOlvidar) noOlvidar.push(`- ${plain(x.q)}: ${plain(x.a)}`);
      }
      continue;
    }
    // Sin apunte nuevo todavía: subtemas + preguntas documentadas del material anterior.
    L.push(`### ${t.titulo}`, `(${textoBolillasDe(t.id)})`, `Subtemas: ${t.resumen}`);
    const ps = (await preguntasDeTema(t)).filter((p) => !p.delCapitulo).slice(0, 6);
    for (const p of ps) {
      const r = textoRespuesta(p).replace(/\n+/g, ' ').slice(0, 450);
      L.push(`- Pregunta: ${p.texto}${r ? ` → Respuesta esperada: ${r}` : ''}`);
    }
    const ms = (t.maniobras ?? []).map((id) => MANEUVERS.find((m) => m.id === id)).filter(Boolean);
    if (ms.length) L.push(`- Maniobras: ${ms.map((m) => `${m!.name} (positiva: ${plain(m!.pathologic)})`).join('; ')}`);
    L.push('');
  }
  if (noOlvidar.length) L.push('## Lo que no me puedo olvidar', ...noOlvidar, '');
  L.push('---', 'Empezá ahora con la primera pregunta.');
  return L.join('\n');
}

export async function fichaDelDia(fecha: string): Promise<{ texto: string; titulo: string } | null> {
  const d = CRONOGRAMA.find((x) => x.fecha === fecha);
  if (!d) return null;
  const temas = [...new Set(d.bloques.flatMap((b) => b.temas))];
  const titulo = `${d.corto} · ${d.titulo}`;
  const texto = await armarFicha(temas, { titulo, fechaEstudio: d.fecha, fechaRepaso: fechasDeRepaso(d) });
  return { texto, titulo };
}
