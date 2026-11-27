import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * rex-01 · «Para entenderlo»: examen renal, orina e infección urinaria.
 * Fuentes: apunte de Ortega pp. 415–422 y 459–460.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'rx-peloteo',
    sec: 'examen',
    titulo: 'Un órgano profundo se palpa entre dos manos',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'normal', text: 'Riñones **retroperitoneales**, en la fosa lumbar: casi no se ven ni se palpan.' },
          { k: 'mecanismo', text: 'Una mano lumbar **empuja**, la otra anterior **recibe**: el **peloteo** (Guyon).' },
          { k: 'signo', text: 'Otras posiciones: **Israel** (lateral), **Montenegro** (ventral), **Glénard** (ptosis).' },
          { k: 'signo', text: '**Puñopercusión** dolorosa: pielonefritis, litiasis.' },
        ],
      },
    ],
    voz: [
      'Los riñones están detrás del peritoneo, en lo profundo de la fosa lumbar, así que casi no se ven ni se palpan.',
      'Por eso se exploran entre dos manos: una en la región lumbar empuja el riñón hacia adelante y la otra, apoyada en el abdomen, lo recibe como un rebote. Es el peloteo de la maniobra de Guyon.',
      'Se completa en otras posiciones: Israel en decúbito lateral, Montenegro boca abajo y Glénard para buscar la ptosis.',
      'Y la puñopercusión lumbar, que normalmente no duele, se vuelve dolorosa en la pielonefritis o la litiasis.',
    ],
    refs: [L('459–460')],
  },
  {
    id: 'rx-cilindros',
    sec: 'orina',
    titulo: 'El cilindro es un molde del túbulo',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        items: [
          { ico: 'gota', t: 'Hemáticos', d: '**Glomerulonefritis**', tono: 'rose' },
          { ico: 'fiebre', t: 'Leucocitarios', d: '**Pielonefritis**', tono: 'lilac' },
          { ico: 'rinon', t: 'Epiteliales', d: '**Necrosis tubular**', tono: 'sky' },
          { ico: 'reloj', t: 'Céreos y anchos', d: '**IRC**', tono: 'sky' },
        ],
      },
      { t: 'clave', en: 0, text: 'Lo que viene **dentro de un cilindro** viene **del riñón**, no de la vía urinaria.', tono: 'lilac' },
    ],
    voz: [
      'Un cilindro se forma dentro del túbulo, como un molde de gelatina. Lo que quede atrapado adentro viene sí o sí del riñón, no de la vejiga ni de la uretra.',
      'Por eso los cilindros hemáticos indican sangre que sale del glomérulo, una glomerulonefritis; los leucocitarios, una infección del riñón, la pielonefritis; los epiteliales, células del túbulo que se desprenden en la necrosis tubular; y los anchos y céreos, túbulos dilatados de un riñón crónico.',
    ],
    refs: [L('416–417')],
  },
  {
    id: 'rx-itu',
    sec: 'itu',
    titulo: 'La infección sube',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Cistitis (baja)', tono: 'sky', items: ['La vejiga inflamada molesta **al orinar**', '**Disuria**, polaquiuria, tenesmo', '**Sin fiebre**'] },
          { titulo: 'Pielonefritis (alta)', tono: 'rose', items: ['El germen sube al **riñón**', '**Fiebre**, escalofríos, **dolor lumbar**', '**Puñopercusión** positiva'] },
        ],
      },
      { t: 'clave', en: 1, text: '**E. coli**, vía ascendente; más en mujeres por la **uretra corta**. Bacteriuria significativa **≥ 10⁵ UFC/ml**.', tono: 'lilac' },
    ],
    voz: [
      'Casi todas las infecciones urinarias suben desde abajo: gérmenes del intestino, sobre todo Escherichia coli, colonizan la uretra y llegan a la vejiga. La mujer, con una uretra corta, tiene más riesgo.',
      'Si se queda en la vejiga es una cistitis: la vejiga inflamada molesta al orinar, con disuria, polaquiuria y tenesmo, y sin fiebre. Si sube al riñón es una pielonefritis: fiebre alta, escalofríos, dolor lumbar y puñopercusión positiva.',
    ],
    refs: [L('420–421')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'examen', label: 'Examen' },
    { id: 'orina', label: 'Orina' },
    { id: 'itu', label: 'ITU' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'rx', label: 'Examen renal y orina', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
