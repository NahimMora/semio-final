import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * par-01 · «Para entenderlo»: pares craneales.
 * Fuentes: apunte de Ortega pp. 461–480; clases de Ortega (pares 1–5).
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'pa-optica',
    sec: 'optico',
    titulo: 'La vía óptica: dónde se cruza',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'ojo', t: 'Nervio óptico', d: '**Ceguera** de ese ojo', tono: 'sky' },
          { ico: 'cerebro', t: 'Quiasma', d: 'Cruzan las fibras nasales: **bitemporal** (hipófisis)', tono: 'rose' },
          { ico: 'cerebro', t: 'Detrás del quiasma', d: '**Homónima contralateral**', tono: 'lilac' },
        ],
      },
    ],
    voz: [
      'Ortega dice que la vía óptica hay que saberla como el Padre Nuestro. La clave es el quiasma. Antes del quiasma, una lesión del nervio óptico deja ciego ese ojo.',
      'En el quiasma se cruzan solo las fibras nasales de la retina, que son las que ven el campo temporal. Por eso un tumor de hipófisis, que aprieta el quiasma desde abajo, borra los dos campos temporales: hemianopsia bitemporal.',
      'Y detrás del quiasma, cada cintilla lleva la mitad del campo del lado opuesto de los dos ojos: la lesión da una hemianopsia homónima contralateral.',
    ],
    refs: [L('463–465')],
  },
  {
    id: 'pa-facial',
    sec: 'facial',
    titulo: 'Facial: ¿se salva la frente?',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Central (ACV)', tono: 'sky', items: ['La frente recibe **los dos hemisferios**', 'Solo la **mitad inferior**', '**Contralateral**', 'La frente **se salva**'] },
          { titulo: 'Periférica (Bell)', tono: 'rose', items: ['Se corta **el nervio**', '**Toda la hemicara**', '**Homolateral**', 'No cierra el ojo: **signo de Bell**'] },
        ],
      },
    ],
    voz: [
      'La parálisis facial es otra pregunta segura. El núcleo del facial que maneja la frente recibe órdenes de los dos hemisferios; el de la mitad de abajo, solo del hemisferio opuesto.',
      'Entonces, si la lesión es central, como un ACV, se paraliza solo la mitad inferior de la cara del lado opuesto, y la frente se salva porque el otro hemisferio la sigue mandando.',
      'Si la lesión es periférica, del nervio, como la parálisis de Bell, se paraliza toda la hemicara del mismo lado: no arruga la frente ni puede cerrar el ojo, y queda a la vista la esclerótica.',
    ],
    refs: [L('472')],
  },
  {
    id: 'pa-weber',
    sec: 'auditivo',
    titulo: 'Weber y Rinne: ¿conducción o percepción?',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'Weber', 'Rinne'],
        filas: [
          ['**Conducción** (oído externo y medio)', 'Va al oído **enfermo**', '**Negativo** (ósea > aérea)'],
          ['**Percepción** (oído interno, nervio)', 'Va al oído **sano**', 'Positivo'],
        ],
      },
    ],
    voz: [
      'Con el diapasón separás las dos hipoacusias. En la de conducción, el problema está en el oído externo o medio. El Weber va al oído enfermo y el Rinne es negativo, porque la vía ósea gana a la aérea.',
      'En la de percepción, el oído interno o el nervio no funcionan: el Weber se va al oído sano y el Rinne sigue positivo.',
    ],
    refs: [L('474–475')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'optico', label: 'Óptico' },
    { id: 'facial', label: 'Facial' },
    { id: 'auditivo', label: 'Auditivo' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'pa', label: 'Pares craneales', tone: 'lilac', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
