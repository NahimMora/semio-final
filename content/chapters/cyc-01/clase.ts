import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * cyc-01 · «Para entenderlo»: cabeza y cuello.
 * Fuentes: Califano cap. 2, Argente cap. 20, 22 y 25, apunte de Ortega «Tiroides» pp. 323–325.
 */
const A = (p: string): SourceRef => ({ src: 'argente-libro', p });
const C = (p: string): SourceRef => ({ src: 'califano', p });
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'c-cabeza',
    sec: 'cabeza',
    titulo: 'La cabeza, región por región',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        items: [
          { ico: 'cerebro', t: 'Cráneo', d: 'Forma, suturas, soplos', tono: 'lilac' },
          { ico: 'ojo', t: 'Ojos', d: 'Conjuntivas, esclerótica, pupilas', tono: 'sky' },
          { ico: 'oreja', t: 'Oído', d: 'Punto preauricular, mastoides', tono: 'sky' },
          { ico: 'aire', t: 'Nariz', d: 'Fosas, aleteo, senos', tono: 'rose' },
          { ico: 'pregunta', t: 'Boca', d: 'Lengua, amígdalas, Stenon, Wharton', tono: 'rose' },
        ],
      },
      { t: 'clave', en: 1, text: 'En el ojo: **ictericia** en la esclerótica, **palidez** en la conjuntiva tarsal. Pupilas de **2 a 4 mm**, iguales.', tono: 'sky' },
    ],
    voz: [
      'La cabeza se examina con los mismos cuatro métodos que todo el cuerpo, recorriendo cráneo, ojos, oído, nariz y boca. En el cráneo miro la forma y palpo las suturas; en la nariz, las fosas y el aleteo; en la boca, la lengua, los dientes, las amígdalas y los conductos de las glándulas salivales.',
      'En el ojo hay dos datos clave para todo el final: la ictericia se ve primero en la esclerótica, y la palidez de la anemia, en la conjuntiva del párpado inferior. Las pupilas normales miden dos a cuatro milímetros y son iguales.',
    ],
    refs: [C('cap. 2'), A('cap. 25')],
  },
  {
    id: 'c-ojo-rojo',
    sec: 'ojo',
    titulo: 'Ojo rojo: ¿superficial o profundo?',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Superficial · leve', tono: 'sky', items: ['**Conjuntivitis**: inyección periférica, secreción, sin dolor', '**Hemorragia subconjuntival**: mancha roja, asintomática', 'Visión y pupila **normales**'] },
          { titulo: 'Profundo · grave', tono: 'rose', items: ['**Iridociclitis**: dolor, **miosis**', '**Glaucoma agudo**: dolor intenso, **midriasis**, ojo duro, vómitos', 'Inyección **alrededor del iris**, baja la visión'] },
        ],
      },
    ],
    voz: [
      'El ojo rojo es uno de los motivos de consulta más frecuentes, y la pregunta es si es superficial o profundo. La conjuntivitis da enrojecimiento en la periferia, secreción y ardor, pero no duele de verdad, y la visión y la pupila están normales. La hemorragia subconjuntival es una mancha roja bien delimitada que no da síntomas.',
      'Lo grave es lo profundo: el enrojecimiento se concentra alrededor del iris, duele y baja la visión. La iridociclitis da miosis, y el glaucoma agudo, dolor intenso, midriasis, un ojo duro al tacto y náuseas y vómitos. Esos van al oftalmólogo de urgencia.',
    ],
    refs: [A('cap. 25, cuadro 25-2')],
  },
  {
    id: 'c-ganglio',
    sec: 'ganglios',
    titulo: 'Qué dice un ganglio',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'Normal', 'Infección', 'Neoplasia'],
        filas: [
          ['Tamaño', '0,5–1 cm', 'Aumentado', '> 2 cm'],
          ['Consistencia', 'Blanda', 'Blanda', '**Pétrea** (metástasis) · firme (linfoma)'],
          ['Dolor', 'No', '**Sí**', 'No'],
          ['Movilidad', 'Móvil', 'Móvil', '**Adherido**'],
        ],
      },
    ],
    voz: [
      'Un ganglio normal es chico, de medio a un centímetro, blando, indoloro y móvil. Lo que cambia te orienta a la causa.',
      'Cuando duele, es porque la cápsula se estiró rápido, como en una infección. Cuando está duro como una piedra, adherido a la piel o a los planos profundos, el proceso rompió la cápsula: eso es característico de una metástasis. Y el ganglio firme, como una goma de borrar, sugiere un linfoma.',
    ],
    refs: [A('195–196')],
  },
  {
    id: 'c-tiroides',
    sec: 'tiroides',
    titulo: 'La tiroides sube al tragar',
    amplio: true,
    bloques: [
      {
        t: 'lista',
        items: [
          'Inspección con el cuello en leve hiperextensión: **hacer tragar**.',
          '**De Quervain**: por detrás, pulgares en la nuca, dedos sobre los lóbulos, y tragar.',
          '**Lahey y Crile**: por delante, desplazando la tráquea para palpar cada lóbulo.',
          'Auscultar: un **soplo** indica hiperfunción (Graves-Basedow).',
        ],
      },
    ],
    voz: [
      'La tiroides está unida a la laringe, así que sube cuando el paciente traga. Ese es el truco para encontrarla y para distinguirla de otras masas del cuello: siempre se le pide que trague.',
      'Para palparla por detrás se hace la maniobra de De Quervain, con los pulgares en la nuca y los dedos sobre los lóbulos.',
      'Por delante están las maniobras de Lahey y Crile: se desplaza la tráquea con una mano para palpar el lóbulo con la otra.',
      'Y se ausculta: si hay un soplo, la glándula está hiperfuncionante, como en la enfermedad de Graves-Basedow.',
    ],
    refs: [L('324'), C('cap. 2, fig. 2-11')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'cabeza', label: 'Cabeza' },
    { id: 'ojo', label: 'Ojo rojo' },
    { id: 'ganglios', label: 'Ganglios' },
    { id: 'tiroides', label: 'Tiroides' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'cyc', label: 'Cabeza y cuello', tone: 'lilac', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
