import { useEffect, useState } from 'react';
import type { ApunteUnidad, BloqueOral, ApunteTema } from '@content/oral/tipos';
import { MANEUVERS } from '@content/maneuvers';
import { plain } from '@/lib/text';
import { loadChapter } from '@/lib/useChapter';
import type { PlanClase } from '@/clase/tipos';

/** Clases visuales nuevas (solo «Para entenderlo», sin capítulo largo). */
const CLASES_NUEVAS: Record<string, { titulo: string; cargar: () => Promise<{ clase: PlanClase }> }> = {
  'men-01': { titulo: "Síndrome meníngeo, HTE y LCR", cargar: () => import('@content/chapters/men-01/clase') },
  'nsx-01': { titulo: "Síndromes motores", cargar: () => import('@content/chapters/nsx-01/clase') },
  'par-01': { titulo: "Pares craneales", cargar: () => import('@content/chapters/par-01/clase') },
  'nex-01': { titulo: "Examen neurológico", cargar: () => import('@content/chapters/nex-01/clase') },
  'som-01': { titulo: "SOMA: exploración articular", cargar: () => import('@content/chapters/som-01/clase') },
  'rsx-01': { titulo: "Síndromes renales e insuficiencia renal", cargar: () => import('@content/chapters/rsx-01/clase') },
  'rex-01': { titulo: "Examen renal, orina e infección urinaria", cargar: () => import('@content/chapters/rex-01/clase') },
  'hig-01': { titulo: "Ictericia, cirrosis, hipertensión portal y ascitis", cargar: () => import('@content/chapters/hig-01/clase') },
  'con-01': { titulo: "Constipación", cargar: () => import('@content/chapters/con-01/clase') },
  'aba-01': { titulo: "Abdomen agudo y peritonitis", cargar: () => import('@content/chapters/aba-01/clase') },
  'dal-01': { titulo: "Digestivo alto y hemorragia digestiva", cargar: () => import('@content/chapters/dal-01/clase') },
  'dex-01': { titulo: "Examen físico del abdomen", cargar: () => import('@content/chapters/dex-01/clase') },
  'com-01': { titulo: "Síndrome anémico", cargar: () => import('@content/chapters/com-01/clase') },
  'car-04': { titulo: "Hipertensión arterial e insuficiencia cardíaca", cargar: () => import('@content/chapters/car-04/clase') },
  'car-03': { titulo: "Valvulopatías", cargar: () => import('@content/chapters/car-03/clase') },
  'car-02': { titulo: "Examen cardiovascular: pulsos, ruidos y soplos", cargar: () => import('@content/chapters/car-02/clase') },
  'car-01': { titulo: "Cardiovascular: motivos de consulta", cargar: () => import('@content/chapters/car-01/clase') },
  'res-02': { titulo: "Síndromes respiratorios", cargar: () => import('@content/chapters/res-02/clase') },
  'res-01': { titulo: "Respiratorio: motivos de consulta y examen del tórax", cargar: () => import('@content/chapters/res-01/clase') },
  'cyc-01': { titulo: "Cabeza y cuello", cargar: () => import('@content/chapters/cyc-01/clase') },
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
  meninges: () => import('@content/oral/meninges'),
  'neuro-sindromes': () => import('@content/oral/neuro-sindromes'),
  pares: () => import('@content/oral/pares'),
  'neuro-examen': () => import('@content/oral/neuro-examen'),
  soma: () => import('@content/oral/soma'),
  'renal-sindromes': () => import('@content/oral/renal-sindromes'),
  'renal-examen': () => import('@content/oral/renal-examen'),
  higado: () => import('@content/oral/higado'),
  constipacion: () => import('@content/oral/constipacion'),
  'abdomen-agudo': () => import('@content/oral/abdomen-agudo'),
  'dig-alto': () => import('@content/oral/dig-alto'),
  'dig-examen': () => import('@content/oral/dig-examen'),
  'anemia': () => import('@content/oral/anemia'),
  'hta-ic': () => import('@content/oral/hta-ic'),
  valvulopatias: () => import('@content/oral/valvulopatias'),
  'cardio-examen': () => import('@content/oral/cardio-examen'),
  'cardio-mc': () => import('@content/oral/cardio-mc'),
  'resp-sindromes': () => import('@content/oral/resp-sindromes'),
  'resp-examen': () => import('@content/oral/resp-examen'),
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
