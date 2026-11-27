import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * car-01 · «Para entenderlo»: ángor, disnea cardíaca, palpitaciones y síncope.
 * Fuentes: apunte de Ortega pp. 129–141, Merlín, Argente cap. 27 y 32.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'c1-isquemia',
    sec: 'angor',
    titulo: 'Ángor: oferta y demanda de oxígeno',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'normal', text: 'La coronaria lleva el oxígeno que el miocardio **necesita**.' },
          { k: 'alteracion', text: 'Una **placa** la estrecha: en reposo alcanza; en el **esfuerzo**, no.' },
          { k: 'mecanismo', text: '**Isquemia** transitoria: dolor **opresivo retroesternal**.' },
          { k: 'signo', text: 'Cede con **reposo** y **nitroglicerina** (bajan la demanda). **> 30 min**: necrosis, **infarto**.' },
        ],
      },
    ],
    voz: [
      'El ángor es un problema de oferta y demanda. Las coronarias llevan el oxígeno que el músculo cardíaco necesita.',
      'Si una placa de aterosclerosis estrecha la arteria, en reposo todavía alcanza, pero cuando el corazón trabaja más, con el esfuerzo, la emoción o el frío, ya no.',
      'El músculo queda en isquemia, y aparece el dolor: opresivo, detrás del esternón, irradiado al brazo izquierdo o la mandíbula.',
      'Por eso cede con el reposo y la nitroglicerina, que bajan el consumo. Si el dolor dura más de treinta minutos y no cede, el músculo ya se está necrosando: es un infarto.',
    ],
    refs: [L('133–135')],
  },
  {
    id: 'c1-tipos',
    sec: 'angor',
    titulo: 'Estable, inestable e infarto',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'Cuándo', 'Dura', 'Nitroglicerina'],
        filas: [
          ['**Estable**', 'Mismo esfuerzo, igual hace 3 meses', 'Minutos', 'Cede'],
          ['**Inestable**', 'Reciente, progresiva o **en reposo**', 'Más', 'Parcial'],
          ['**Infarto**', 'Con frecuencia en reposo', '**> 30 min**', '**No cede**'],
        ],
      },
    ],
    voz: [
      'Según cómo se comporta, la angina es estable si aparece siempre con el mismo esfuerzo y no cambió en los últimos tres meses; es inestable si es de reciente comienzo, si aparece con esfuerzos cada vez menores o en reposo. Y si dura más de treinta minutos y la nitroglicerina no la calma, es un infarto. La inestable es la que más internaciones genera, porque puede terminar en infarto.',
    ],
    refs: [L('135')],
  },
  {
    id: 'c1-disnea',
    sec: 'disnea',
    titulo: 'La disnea del corazón izquierdo',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'corazon', t: 'De esfuerzo', d: 'Cada vez con menos', tono: 'sky' },
          { ico: 'aire', t: 'Ortopnea', d: 'Al acostarse', tono: 'sky' },
          { ico: 'reloj', t: 'Paroxística nocturna', d: 'Lo despierta', tono: 'lilac' },
          { ico: 'gota', t: 'Edema agudo de pulmón', d: 'Esputo asalmonado', tono: 'rose' },
        ],
      },
      { t: 'clave', en: 1, text: '**Asma cardíaca** = disnea paroxística nocturna **con sibilancias**.', tono: 'lilac' },
    ],
    voz: [
      'La disnea cardíaca sigue una progresión. Cuando el ventrículo izquierdo falla, la sangre se acumula en el pulmón. Primero falta el aire con el esfuerzo, y con esfuerzos cada vez menores; después al acostarse, que es la ortopnea; después de noche, de golpe, despertándolo: la disnea paroxística nocturna; y la forma extrema es el edema agudo de pulmón, con espuma rosada.',
      'Cuando esa disnea nocturna viene con sibilancias, porque la congestión también hincha la pared de los bronquios, se llama asma cardíaca.',
    ],
    refs: [L('129–131')],
  },
  {
    id: 'c1-sincope',
    sec: 'sincope',
    titulo: 'Síncope: el cerebro se queda sin flujo',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'Cae el **gasto** o la **resistencia periférica** → cae la presión.' },
          { k: 'mecanismo', text: '**Hipoperfusión cerebral global**: pierde la conciencia y el tono.' },
          { k: 'signo', text: 'En el piso se recupera el flujo: **recuperación espontánea, rápida y completa**.' },
        ],
      },
      {
        t: 'comparar',
        en: 2,
        cols: [
          { titulo: 'Vasovagal (el más frecuente)', tono: 'sky', items: ['Emoción, dolor, estar de pie', 'Con pródromos', 'Benigno'] },
          { titulo: 'Cardíaco (el grave)', tono: 'rose', items: ['**Con el esfuerzo** (estenosis aórtica)', '**Sin pródromos** (arritmia)', 'Peor pronóstico'] },
        ],
      },
    ],
    voz: [
      'El síncope es una pérdida breve de la conciencia. Empieza porque cae la presión arterial, ya sea porque baja el gasto del corazón o porque se dilatan los vasos.',
      'El cerebro se queda sin flujo de golpe, en forma global, y el paciente pierde la conciencia y el tono: se cae.',
      'Al quedar acostado, la sangre vuelve a llegar al cerebro y se recupera solo, rápido y por completo. El más frecuente es el vasovagal, con emoción o dolor y con aviso previo. El que preocupa es el cardíaco: el que aparece con el esfuerzo, como en la estenosis aórtica, o el que llega sin aviso, por una arritmia.',
    ],
    refs: [L('139–140')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'angor', label: 'Ángor' },
    { id: 'disnea', label: 'Disnea cardíaca' },
    { id: 'sincope', label: 'Síncope' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'c1', label: 'Cardio: motivos de consulta', tone: 'rose', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
