import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * nex-01 · «Para entenderlo»: examen neurológico.
 * Fuentes: apunte de Ortega pp. 461, 481–491; clases de Ortega (MC neurología 2); Argente cap. 23.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'nx-mapa',
    sec: 'mapa',
    titulo: 'El mapa del examen neurológico',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'ojo', t: 'Inspección', d: 'Facies, actitud, **marcha**', tono: 'sky' },
          { ico: 'cerebro', t: 'Conciencia', d: 'Orientación, **Glasgow**', tono: 'lilac' },
          { ico: 'oreja', t: 'Pares craneales', d: 'Del I al XII', tono: 'sky' },
          { ico: 'mano', t: 'Motilidad', d: 'Tono, trofismo, **fuerza**, **reflejos**', tono: 'rose' },
          { ico: 'piel', t: 'Sensibilidad y más', d: 'Gnosias, praxias, **taxia**', tono: 'lilac' },
        ],
      },
    ],
    voz: [
      'El examen neurológico sigue un mapa. Primero la inspección: facies, actitud y marcha. Después la conciencia: orientación y escala de Glasgow.',
      'Después los doce pares craneales. Después la motilidad: tono y trofismo, fuerza y reflejos.',
      'Y al final la sensibilidad, las gnosias, las praxias y la taxia. Tenelo en este orden y en el oral no te vas a perder.',
    ],
    refs: [L('461')],
  },
  {
    id: 'nx-reflejo',
    sec: 'motilidad',
    titulo: 'El reflejo: un arco con un freno arriba',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Se corta el arco (2.ª motoneurona)', tono: 'sky', items: ['**Arreflexia**', '**Hipotonía**, **atrofia**', 'Fasciculaciones'] },
          { titulo: 'Se pierde el freno (1.ª motoneurona)', tono: 'rose', items: ['**Hiperreflexia**, **clonus**', '**Espasticidad** (navaja)', '**Babinski**'] },
        ],
      },
      { t: 'clave', en: 1, text: 'Bicipital **C5** · estilorradial **C6** · tricipital **C7** · rotuliano **L4** · aquiliano **S1**.', tono: 'lilac' },
    ],
    voz: [
      'Para entender los reflejos, imaginá un arco: el golpe en el tendón entra a la médula y vuelve por la segunda motoneurona al músculo. Y desde arriba, la vía piramidal funciona como un freno.',
      'Si se corta el arco, por una lesión de la segunda motoneurona o del nervio, el reflejo desaparece y el músculo queda blando y atrófico. Si se pierde el freno, por una lesión piramidal, los reflejos se exageran, aparece el clonus, la espasticidad y el signo de Babinski.',
    ],
    refs: [{ src: 'argente-libro', p: 'cap. 23' }],
  },
  {
    id: 'nx-romberg',
    sec: 'taxia',
    titulo: 'Romberg: ¿qué pasa cuando saco la vista?',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['Ataxia', 'Ojos abiertos', 'Ojos cerrados', 'Romberg'],
        filas: [
          ['**Cordonal posterior**', 'Estable (la vista compensa)', 'Cae', '**Positivo**'],
          ['**Vestibular**', 'Estable', 'Cae **hacia un lado**', '**Positivo**'],
          ['**Cerebelosa**', '**Ya inestable**', 'Igual', '**Negativo**'],
        ],
      },
    ],
    voz: [
      'El equilibrio usa cuatro informaciones: la vista, el vestíbulo, la sensibilidad profunda y el cerebelo. El Romberg le saca la vista al paciente.',
      'Si el problema es de la sensibilidad profunda o del vestíbulo, la vista estaba compensando: al cerrar los ojos, el paciente cae. Romberg positivo; en el vestibular, siempre hacia el mismo lado.',
      'Si el problema es el cerebelo, el paciente ya es inestable con los ojos abiertos, y cerrarlos no cambia nada: Romberg negativo. Ortega lo marca como pregunta segura.',
    ],
    refs: [{ src: 'mc-neu-2', t: '29:56' }],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'mapa', label: 'Mapa' },
    { id: 'motilidad', label: 'Reflejos' },
    { id: 'taxia', label: 'Taxia' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'nx', label: 'Examen neurológico', tone: 'lilac', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
