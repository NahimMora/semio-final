import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * nsx-01 · «Para entenderlo»: síndromes motores.
 * Fuentes: apunte de Ortega pp. 488–496 y 507–509; clases de Ortega (reunión del 24/10).
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'ns-dos',
    sec: 'motoneuronas',
    titulo: 'Primera o segunda motoneurona',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Piramidal (1.ª)', tono: 'rose', items: ['Se pierde el **freno**', '**Espasticidad**, **hiperreflexia**, clonus', '**Babinski**', '**Sin atrofia**', 'Contralateral (cruza en el bulbo)'] },
          { titulo: '2.ª motoneurona', tono: 'sky', items: ['Se corta la **última vía**', '**Atonía, arreflexia, atrofia**', '**Fasciculaciones**', 'Sin Babinski'] },
        ],
      },
    ],
    voz: [
      'Los dos grandes síndromes motores se distinguen por qué neurona se lesiona. En el piramidal, la primera motoneurona, se pierde el freno que la corteza ejerce sobre los reflejos: aparecen espasticidad, hiperreflexia, clonus y Babinski, sin atrofia. Y como la vía se cruza en el bulbo, la parálisis es del lado opuesto a la lesión.',
      'En la segunda motoneurona se corta la última vía hacia el músculo: el músculo queda sin orden, sin tono y sin trofismo. Es la triple A: atonía, arreflexia y atrofia, con fasciculaciones y sin Babinski.',
    ],
    refs: [L('489–491')],
  },
  {
    id: 'ns-parkinson',
    sec: 'parkinson',
    titulo: 'Parkinson: falta dopamina',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'Mueren las neuronas de la **sustancia negra**.' },
          { k: 'mecanismo', text: 'Falta **dopamina** en los núcleos de la base.' },
          { k: 'signo', text: 'Tríada: **bradicinesia**, **rigidez en rueda dentada**, **temblor de reposo**.' },
        ],
      },
      { t: 'clave', en: 0, text: '«No me saben la **tríada del Parkinson**, es para bochazo» (Ortega).', tono: 'rose' },
    ],
    voz: [
      'En la enfermedad de Parkinson mueren las neuronas de la sustancia negra.',
      'Esas neuronas fabrican dopamina, y sin dopamina los núcleos de la base frenan el movimiento.',
      'De ahí la tríada que Ortega pregunta siempre: bradicinesia, la lentitud para iniciar y hacer los movimientos; rigidez en rueda dentada; y temblor de reposo, que desaparece al moverse y durante el sueño.',
    ],
    refs: [{ src: 'neu-meet-1024', t: '1:02:37' }],
  },
  {
    id: 'ns-cerebelo',
    sec: 'cerebelo',
    titulo: 'Cerebelo: el que mide el movimiento',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        items: [
          { ico: 'mano', t: 'Dismetría', d: 'Se pasa o no llega', tono: 'sky' },
          { ico: 'reloj', t: 'Adiadococinesia', d: 'No alterna rápido', tono: 'lilac' },
          { ico: 'mano', t: 'Temblor intencional', d: 'Al acercarse al objetivo', tono: 'rose' },
          { ico: 'pregunta', t: 'Romberg negativo', d: 'Ya inestable con ojos abiertos', tono: 'sky' },
        ],
      },
    ],
    voz: [
      'El cerebelo es el que mide y coordina el movimiento. Cuando falla, el movimiento sale mal medido: el dedo se pasa o no llega a la nariz, eso es la dismetría.',
      'No puede alternar movimientos rápidos, la adiadococinesia.',
      'Tiembla al acercarse al objetivo, el temblor intencional, que es lo opuesto al del Parkinson.',
      'Y como el problema no es la información sino la coordinación, ya es inestable con los ojos abiertos: el Romberg es negativo.',
    ],
    refs: [L('488')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'motoneuronas', label: 'Motoneuronas' },
    { id: 'parkinson', label: 'Parkinson' },
    { id: 'cerebelo', label: 'Cerebelo' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'ns', label: 'Síndromes motores', tone: 'lilac', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
