
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * con-01 · «Para entenderlo»: constipación.
 * Fuentes: Merlín (Constipación), clase de Ortega MC digestivo parte 6.
 */

const diapos: Diapositiva[] = [
  {
    id: 'cn-mecanismo',
    sec: 'mecanismo',
    titulo: 'Tres pasos para evacuar',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'gota', t: 'Consistencia', d: 'Dieta con **fibra** y agua', tono: 'sky' },
          { ico: 'nudo', t: 'Propulsión', d: 'El **colon** empuja', tono: 'lilac' },
          { ico: 'mano', t: 'Evacuación', d: 'Recto y **piso pelviano**', tono: 'rose' },
        ],
      },
      { t: 'clave', en: 1, text: 'Más tiempo en el colon = **más agua absorbida** = heces duras (Bristol 1–2).', tono: 'sky' },
    ],
    voz: [
      'Para evacuar normalmente hacen falta tres cosas: una materia fecal de buena consistencia, que depende de la fibra y el agua; un colon que la empuje; y un recto y un piso pelviano que la expulsen.',
      'Si falla cualquiera de los tres, aparece la constipación. Y cuanto más tiempo pasa la materia fecal en el colon, más agua le absorbe: sale dura, en bolitas, los tipos uno y dos de la escala de Bristol.',
    ],
    refs: [{ src: 'merlin', p: 'Constipación' }],
  },
  {
    id: 'cn-alarma',
    sec: 'alarma',
    titulo: 'Lo que no se puede pasar por alto',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Lo más frecuente', tono: 'sky', items: ['**Dieta** pobre en fibra', 'Fármacos (**opioides**), hipotiroidismo', 'Funcional'] },
          { titulo: 'Signos de alarma', tono: 'rose', items: ['**> 50 años**', '**Pérdida de peso**, **anemia**, **sangre**', '→ **colonoscopia** (cáncer de colon)'] },
        ],
      },
    ],
    voz: [
      'La mayoría de las constipaciones son por una dieta pobre en fibra, por fármacos como los opioides, por hipotiroidismo o funcionales.',
      'Pero hay que buscar siempre los signos de alarma: más de cincuenta años, pérdida de peso, anemia o sangre. Con cualquiera de ellos se pide una colonoscopia, para no pasar por alto un cáncer de colon.',
    ],
    refs: [{ src: 'mc-dig-6', t: '02:07' }],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'mecanismo', label: 'Mecanismo' },
    { id: 'alarma', label: 'Causas y alarma' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'cn', label: 'Constipación', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
