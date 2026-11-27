import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * men-01 · «Para entenderlo»: HTE, síndrome meníngeo y LCR.
 * Fuentes: apunte de Ortega pp. 498–503; clases de Ortega (repaso del 26/10).
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'mn-caja',
    sec: 'hte',
    titulo: 'El cráneo es una caja rígida',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'normal', text: 'Cerebro 80 % · sangre 10 % · LCR 10 % (**Monro-Kellie**).' },
          { k: 'alteracion', text: 'Un **tumor** o una **hemorragia** ocupa lugar; los otros ya no compensan.' },
          { k: 'mecanismo', text: 'Sube la **presión** (> 15 mmHg).' },
          { k: 'signo', text: 'Tríada: **cefalea**, **vómito en chorro**, **edema de papila**. Par más lesionado: **VI**.' },
        ],
      },
    ],
    voz: [
      'El cráneo es una caja rígida con tres contenidos: el cerebro, la sangre y el líquido cefalorraquídeo.',
      'Si algo ocupa lugar, como un tumor o una hemorragia, los otros dos se achican para compensar, hasta que ya no pueden.',
      'Entonces la presión sube.',
      'Y aparece la tríada que Ortega pregunta siempre: cefalea, vómito en chorro sin náuseas y edema de papila. El par que más se lesiona es el sexto. Y si la presión es muy alta, el efecto Cushing: hipertensión, bradicardia y alteraciones respiratorias.',
    ],
    refs: [L('498–500')],
  },
  {
    id: 'mn-meninges',
    sec: 'meningeo',
    titulo: 'Meninges inflamadas: no las estires',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Kernig', tono: 'sky', items: ['Sentarlo o elevar la pierna extendida', 'Flexiona las **rodillas** para no estirar'] },
          { titulo: 'Brudzinski', tono: 'rose', items: ['Flexionar la **nuca**', 'Flexiona las **rodillas**'] },
        ],
      },
      { t: 'clave', en: 1, text: 'Meningitis: clínica + LCR · **meningismo**: clínica, LCR normal · **reacción meníngea**: LCR sin clínica.', tono: 'lilac' },
    ],
    voz: [
      'Cuando las meninges están inflamadas, duelen al estirarse. Flexionar la nuca o la pierna estira las meninges y las raíces, y el paciente se defiende: contrae la nuca, que queda rígida, o flexiona las rodillas para aflojar. Eso son el Kernig y el Brudzinski.',
      'Y la pregunta que Ortega hace siempre: meningitis es clínica más líquido alterado; meningismo, clínica con líquido normal; y reacción meníngea, líquido alterado sin clínica.',
    ],
    refs: [L('502–503')],
  },
  {
    id: 'mn-lcr',
    sec: 'lcr',
    titulo: 'El LCR en tres meningitis',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'Aspecto', 'Células', 'Glucosa'],
        filas: [
          ['**Bacteriana**', '**Turbio**', 'Neutrófilos', '**Baja**'],
          ['**Viral**', 'Claro', 'Linfocitos', 'Normal'],
          ['**Tuberculosa**', 'Claro', 'Linfocitos', '**Baja** + cloruros bajos'],
        ],
      },
      { t: 'clave', en: 0, text: 'Antes de punzar: **fondo de ojo**. Con edema de papila, **no**.', tono: 'rose' },
    ],
    voz: [
      'En la meningitis bacteriana el líquido es turbio, con neutrófilos y glucosa baja.',
      'La viral es la más benigna: líquido claro, linfocitos y glucosa normal. Y la tuberculosa es la trampa: claro y con linfocitos como la viral, pero con glucosa baja y cloruros bajos.',
      'Y antes de punzar, siempre fondo de ojo: con edema de papila la punción está contraindicada, por riesgo de enclavamiento.',
    ],
    refs: [{ src: 'neu-rec-1026', t: '41:26' }],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'hte', label: 'HTE' },
    { id: 'meningeo', label: 'Meníngeo' },
    { id: 'lcr', label: 'LCR' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'mn', label: 'Meninges y HTE', tone: 'lilac', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
