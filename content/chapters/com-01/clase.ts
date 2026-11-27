import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * com-01 · «Para entenderlo»: síndrome anémico e índices hematimétricos.
 * Fuentes: apunte de Ortega pp. 290–294, Argente cap. 61-1 y 76.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'a-compensa',
    sec: 'clinica',
    titulo: 'Menos hemoglobina, menos oxígeno',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'Baja la **hemoglobina**: llega menos O₂ a los tejidos.' },
          { k: 'mecanismo', text: 'Los tejidos **extraen más O₂** (25 % → 60 %) y el corazón **late más y eyecta más**.' },
          { k: 'signo', text: '**Palidez, astenia, disnea de esfuerzo, taquicardia, palpitaciones**, soplo funcional.' },
        ],
      },
      { t: 'clave', en: 1, text: 'Lenta se tolera; **brusca** (hemorragia) da síntomas enseguida.', tono: 'lilac' },
    ],
    voz: [
      'La anemia es la disminución de la hemoglobina: menos de trece en el hombre y menos de doce en la mujer. Con menos hemoglobina llega menos oxígeno a los tejidos.',
      'El cuerpo compensa de dos formas: los tejidos extraen más oxígeno de cada glóbulo rojo, y el corazón late más rápido y eyecta más volumen.',
      'De ahí la clínica: palidez, cansancio, falta de aire con el esfuerzo, taquicardia y palpitaciones, y a veces un soplo funcional por el hiperflujo. Si la anemia se instala lento se tolera bastante; si es brusca, como en una hemorragia, los síntomas aparecen enseguida.',
    ],
    refs: [L('290–291')],
  },
  {
    id: 'a-mecanismos',
    sec: 'clinica',
    titulo: 'Tres maneras de quedarse sin glóbulos rojos',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'No se fabrican', tono: 'sky', items: ['Falta **hierro, B12, folato** o eritropoyetina', 'Médula que falla', 'Reticulocitos **bajos**'] },
          { titulo: 'Se destruyen', tono: 'lilac', items: ['**Hemólisis**', 'Ictericia sin coluria', 'Reticulocitos **altos**'] },
          { titulo: 'Se pierden', tono: 'rose', items: ['**La más frecuente**', 'Digestivas y ginecológicas', 'Crónica → **ferropenia**'] },
        ],
      },
    ],
    voz: [
      'Hay tres maneras de quedarse sin glóbulos rojos. Que no se fabriquen, porque falta hierro, vitamina B12, ácido fólico o eritropoyetina, o porque la médula falla: ahí los reticulocitos están bajos.',
      'Que se destruyan antes de tiempo, que es la hemólisis: la médula responde y los reticulocitos suben, y aparece ictericia.',
      'O que se pierdan, que es la causa más frecuente: sangrados digestivos o ginecológicos, que cuando son crónicos terminan en una ferropenia.',
    ],
    refs: [L('290–291')],
  },
  {
    id: 'a-vcm',
    sec: 'indices',
    titulo: 'El tamaño del glóbulo rojo cuenta la causa',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        items: [
          { ico: 'gota', t: 'Microcítica · < 80', d: '**Ferropénica**, talasemia', tono: 'sky' },
          { ico: 'gota', t: 'Normocítica · 80–100', d: 'Trastornos crónicos, renal, **hemorragia aguda**, hemólisis', tono: 'lilac' },
          { ico: 'gota', t: 'Macrocítica · > 100', d: 'Déficit de **B12** o **folato**', tono: 'rose' },
        ],
      },
      { t: 'clave', en: 1, text: 'Ferropénica: **ferritina baja**, transferrina alta, RDW alto.', tono: 'sky' },
    ],
    voz: [
      'El volumen corpuscular medio, el tamaño del glóbulo rojo, orienta la causa. Si falta hierro, la célula no tiene hemoglobina suficiente y queda chica: anemia microcítica, menos de ochenta femtolitros, como la ferropénica o la talasemia.',
      'Si el tamaño es normal, entre ochenta y cien, pensá en trastornos crónicos, insuficiencia renal, hemorragia aguda o hemólisis. Y si falta B12 o folato, el núcleo no madura y la célula queda grande: macrocítica, más de cien.',
      'La ferropénica se confirma con la ferritina baja, que es el mejor parámetro, la transferrina alta y un RDW alto.',
    ],
    refs: [L('292–294')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'clinica', label: 'Mecanismo y clínica' },
    { id: 'indices', label: 'Índices' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'a', label: 'Síndrome anémico', tone: 'rose', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
