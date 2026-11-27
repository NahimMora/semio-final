import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * car-03 · «Para entenderlo»: valvulopatías.
 * Fuentes: apunte de Ortega pp. 196–204, Merlín, Argente cap. 30-4.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'c3-regla',
    sec: 'regla',
    titulo: 'Estrecha o no cierra',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Estenosis', tono: 'sky', items: ['La válvula **no abre bien**', 'Se oye cuando **debería estar abierta**', 'Sobrecarga de **presión** de la cámara de atrás'] },
          { titulo: 'Insuficiencia', tono: 'rose', items: ['La válvula **no cierra bien**', 'Se oye cuando **debería estar cerrada**', 'Sobrecarga de **volumen**: la sangre va y vuelve'] },
        ],
      },
      { t: 'clave', en: 1, text: 'Mitral abierta = **diástole** · aórtica abierta = **sístole**.', tono: 'lilac' },
    ],
    voz: [
      'Las cuatro valvulopatías del oral salen de una sola idea. Una válvula puede estar estrecha, y entonces no abre bien: eso es una estenosis. O puede no cerrar, y la sangre vuelve hacia atrás: eso es una insuficiencia.',
      'La estenosis se oye cuando la válvula debería estar abierta, y la insuficiencia cuando debería estar cerrada. Y acordate: la mitral está abierta en la diástole, y la aórtica en la sístole. Con eso deducís el momento de cada soplo.',
    ],
    refs: [L('196–204')],
  },
  {
    id: 'c3-em',
    sec: 'mitral',
    titulo: 'Estenosis mitral: todo vuelve al pulmón',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'Mitral estrecha (**fiebre reumática**): la aurícula izquierda no se vacía.' },
          { k: 'mecanismo', text: 'Sube la presión de la **AI** → **pulmón** congestivo → hipertensión pulmonar → **VD**.' },
          { k: 'signo', text: '**Disnea, hemoptisis, palpitaciones** (la AI dilatada fibrila) y **embolias**.' },
          { k: 'signo', text: '**R1 intenso**, **chasquido de apertura**, **rolido diastólico** en la punta.' },
        ],
      },
    ],
    voz: [
      'En la estenosis mitral, casi siempre por fiebre reumática, la aurícula izquierda no logra vaciarse en el ventrículo.',
      'Su presión sube y se transmite hacia atrás, al pulmón: congestión, hipertensión pulmonar y al final falla del ventrículo derecho.',
      'De ahí la tríada: disnea, hemoptisis por la rotura de venas bronquiales, y palpitaciones, porque la aurícula dilatada fibrila y forma trombos que embolizan.',
      'Al auscultar, las valvas cierran de golpe y el primer ruido es intenso; al abrirse rígidas dan el chasquido de apertura, y el paso de sangre por el orificio estrecho da un rolido diastólico en la punta, que se busca con la campana en decúbito lateral izquierdo.',
    ],
    refs: [L('196–198')],
  },
  {
    id: 'c3-ea',
    sec: 'aortica',
    titulo: 'Estenosis aórtica: el ventrículo que empuja contra una pared',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'corazon', t: 'Hipertrofia', d: 'Más músculo, más consumo de O₂', tono: 'sky' },
          { ico: 'gota', t: 'Ángor', d: 'El aporte no alcanza · 5 años', tono: 'lilac' },
          { ico: 'reloj', t: 'Síncope de esfuerzo', d: 'El gasto no sube · 3 años', tono: 'lilac' },
          { ico: 'aire', t: 'Disnea', d: 'El VI rígido falla · 2 años', tono: 'rose' },
        ],
      },
      { t: 'clave', en: 1, text: 'Pulso **parvus et tardus** · soplo **sistólico eyectivo** rudo → **cuello**.', tono: 'sky' },
    ],
    voz: [
      'En la estenosis aórtica, la valvulopatía más frecuente, el ventrículo izquierdo tiene que empujar contra una válvula estrecha. Responde engrosándose: hipertrofia concéntrica.',
      'Ese músculo grueso consume más oxígeno del que le llega, y aparece el ángor. Con el esfuerzo el gasto no puede aumentar, cae el flujo cerebral y aparece el síncope. Y cuando el ventrículo rígido falla, la disnea. Cuando aparecen los síntomas, la sobrevida es de cinco, tres y dos años respectivamente.',
      'El pulso sale pequeño y lento, parvus et tardus, y el soplo es sistólico, eyectivo y rudo en el foco aórtico, irradiado al cuello.',
    ],
    refs: [L('200–201')],
  },
  {
    id: 'c3-ia',
    sec: 'aortica',
    titulo: 'Insuficiencia aórtica: la presión diferencial lo explica todo',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'La aórtica no cierra: en la diástole la sangre **vuelve** al VI.' },
          { k: 'mecanismo', text: 'El VI se **dilata** y eyecta un gran volumen: **sistólica alta, diastólica baja**.' },
          { k: 'signo', text: 'Pulso **saltón** (Corrigan), **Musset**, **Quincke**, Müller, Hill.' },
          { k: 'signo', text: 'Soplo **diastólico aspirativo** en el 3.º–4.º EII, sentado e inclinado.' },
        ],
      },
    ],
    voz: [
      'En la insuficiencia aórtica, la válvula no cierra y en cada diástole la sangre vuelve de la aorta al ventrículo.',
      'El ventrículo recibe ese volumen extra, se dilata y eyecta muchísima sangre: la presión sistólica sube y la diastólica cae. La presión diferencial es amplia.',
      'Esa onda enorme explica los signos periféricos: el pulso saltón de Corrigan, la cabeza que se mueve con cada latido, que es el signo de Musset, el pulso capilar de Quincke, el latido de la úvula.',
      'Y el soplo es diastólico, aspirativo y decreciente, en el tercer y cuarto espacio paraesternal izquierdo, mejor con el paciente sentado e inclinado hacia adelante.',
    ],
    refs: [L('202–203')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'regla', label: 'La regla' },
    { id: 'mitral', label: 'Mitral' },
    { id: 'aortica', label: 'Aórtica' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'c3', label: 'Valvulopatías', tone: 'rose', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
