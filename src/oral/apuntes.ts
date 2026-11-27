import { useEffect, useState } from 'react';
import type { ApunteUnidad, BloqueOral, ApunteTema } from '@content/oral/tipos';
import { MANEUVERS } from '@content/maneuvers';
import { plain } from '@/lib/text';
import { loadChapter } from '@/lib/useChapter';
import type { PlanClase } from '@/clase/tipos';

/** Clases visuales nuevas (solo «Para entenderlo», sin capítulo largo). */
const CLASES_NUEVAS: Record<string, { titulo: string; cargar: () => Promise<{ clase: PlanClase }> }> = {
  'gen-01': { titulo: "Examen general y signos vitales", cargar: () => import('@content/chapters/gen-01/clase') },
  'sig-01': { titulo: 'Signos y síntomas generales', cargar: () => import('@content/chapters/sig-01/clase') },
};

/** Diapositivas y video de una clase: nueva o de un capítulo existente. */
export async function cargarClase(id: string): Promise<{ id: string; title: string; clase: PlanClase } | null> {
  const n = CLASES_NUEVAS[id];
  if (n) return { id, title: n.titulo, clase: (await n.cargar()).clase };
  const c = await loadChapter(id);
  return c?.clase ? { id, title: c.title, clase: c.clase } : null;
}

/** Apuntes para el oral escritos con el método nuevo. Agregar acá cada unidad terminada. */
const CARGAR: Record<string, () => Promise<{ apunte: ApunteUnidad }>> = {
  'cabeza-cuello': () => import('@content/oral/cabeza-cuello'),
  vitales: () => import('@content/oral/vitales'),
  hc: () => import('@content/oral/hc'),
  signos: () => import('@content/oral/signos'),
};

export const tieneApunte = (unidad: string) => unidad in CARGAR;

const cache = new Map<string, ApunteUnidad>();
export async function cargarApunte(unidad: string): Promise<ApunteUnidad | null> {
  if (!CARGAR[unidad]) return null;
  if (!cache.has(unidad)) cache.set(unidad, (await CARGAR[unidad]()).apunte);
  return cache.get(unidad)!;
}

export function useApunte(unidad: string | undefined): ApunteUnidad | null | undefined {
  const [a, setA] = useState<ApunteUnidad | null | undefined>(undefined);
  useEffect(() => {
    setA(undefined);
    if (unidad) void cargarApunte(unidad).then(setA);
  }, [unidad]);
  return a;
}

/** Texto plano de un bloque, para las fichas de la IA. */
export function bloqueTexto(b: BloqueOral): string {
  switch (b.t) {
    case 'def':
      return `Definición: ${plain(b.text)}`;
    case 'paso':
      return [`${b.titulo}:${b.text ? ' ' + plain(b.text) : ''}`, ...(b.items ?? []).map((x) => `- ${plain(x)}`)].join('\n');
    case 'cuadro':
      return [b.titulo ? `${b.titulo}:` : '', `| ${b.head.join(' | ')} |`, ...b.filas.map((f) => `| ${f.map(plain).join(' | ')} |`)].filter(Boolean).join('\n');
    case 'clave':
      return [`${b.titulo}:`, ...b.items.map((x) => `- ${plain(x)}`)].join('\n');
    case 'ojo':
      return `Atención: ${plain(b.text)}`;
    case 'ejemplo':
      return `Ejemplo: ${plain(b.text)}`;
    case 'maniobras':
      return 'Maniobras: ' + b.ids.map((id) => MANEUVERS.find((m) => m.id === id)?.name ?? id).join('; ');
    case 'ilustracion':
      return '';
  }
}

export function temaTexto(t: ApunteTema): string {
  const L = [`### ${t.titulo}`];
  for (const b of t.bloques) {
    const s = bloqueTexto(b);
    if (s) L.push(s);
  }
  L.push(`Respuesta esperada (1 minuto): ${plain(t.oral)}`);
  if (t.repreguntas?.length) {
    L.push('Repreguntas probables:');
    for (const r of t.repreguntas) L.push(`- ${plain(r.q)} → ${plain(r.a)}`);
  }
  return L.join('\n');
}
