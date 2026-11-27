import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * car-04 · «Para entenderlo»: hipertensión arterial e insuficiencia cardíaca.
 * Fuentes: apunte de Ortega pp. 176–195, Merlín, Argente cap. 30-2.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'c4-hta',
    sec: 'hta',
    titulo: 'HTA: la asesina silenciosa',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'normal', text: 'Presión = **gasto cardíaco × resistencia periférica**.' },
          { k: 'alteracion', text: '**≥ 140/90** sostenida: 95 % **esencial**, 5 % secundaria.' },
          { k: 'mecanismo', text: 'Años de presión alta **dañan las arterias** y sobrecargan el VI.' },
          { k: 'signo', text: '**Órganos blancos**: HVI e IC, ACV, riñón, retina. Antes, **sin síntomas**.' },
        ],
      },
    ],
    voz: [
      'La presión arterial es el producto del gasto cardíaco por la resistencia periférica.',
      'Hablamos de hipertensión cuando está en ciento cuarenta sobre noventa o más, en forma sostenida y confirmada en varias tomas. En el noventa y cinco por ciento de los casos es esencial, sin una causa única; en el cinco por ciento es secundaria, de causa renal, endocrina o por coartación de aorta.',
      'El problema es que durante años no da síntomas, mientras va dañando las arterias y obliga al ventrículo izquierdo a trabajar contra más presión.',
      'Por eso se la llama la asesina silenciosa: muchas veces se descubre por el daño de los órganos blancos, la hipertrofia ventricular y la insuficiencia cardíaca, el ACV, el riñón o la retina.',
    ],
    refs: [L('176–178')],
  },
  {
    id: 'c4-compensa',
    sec: 'ic',
    titulo: 'IC: compensar para después empeorar',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'corazon', t: 'Cae el gasto', d: 'El corazón no bombea lo suficiente', tono: 'rose' },
          { ico: 'reloj', t: 'Simpático', d: 'Taquicardia y vasoconstricción', tono: 'lilac' },
          { ico: 'gota', t: 'SRAA', d: 'Retiene **sodio y agua**', tono: 'sky' },
          { ico: 'corazon', t: 'Más carga', d: 'El corazón se agota: **círculo vicioso**', tono: 'rose' },
        ],
      },
    ],
    voz: [
      'En la insuficiencia cardíaca, el corazón no logra bombear lo que el cuerpo necesita, o lo logra solo con presiones de llenado altas.',
      'El organismo lo interpreta como falta de volumen y activa el simpático: sube la frecuencia y se contraen los vasos.',
      'También activa el sistema renina-angiotensina-aldosterona, que retiene sodio y agua.',
      'Al principio esto sostiene la presión, pero a la larga le da más trabajo a un corazón que ya falla: es un círculo vicioso.',
    ],
    refs: [L('191–192')],
  },
  {
    id: 'c4-lados',
    sec: 'ic',
    titulo: 'La sangre se acumula detrás del ventrículo que falla',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Falla el izquierdo → pulmón', tono: 'sky', items: ['Disnea → **ortopnea** → **DPN** → **EAP**', '**Crepitantes**, **R3**'] },
          { titulo: 'Falla el derecho → venas sistémicas', tono: 'rose', items: ['**Ingurgitación yugular**, **reflujo hepatoyugular**', '**Hepatomegalia**, **edemas**'] },
        ],
      },
      { t: 'clave', en: 1, text: 'La causa más frecuente de IC derecha es **la IC izquierda**.', tono: 'lilac' },
    ],
    voz: [
      'Para entender la clínica, pensá dónde se acumula la sangre. Si falla el ventrículo izquierdo, se acumula detrás, en el pulmón: disnea de esfuerzo, ortopnea, disnea paroxística nocturna y, en el extremo, edema agudo de pulmón; al auscultar, crepitantes y tercer ruido.',
      'Si falla el derecho, se acumula en las venas del cuerpo: yugulares ingurgitadas, reflujo hepatoyugular, hígado grande y edemas. Y la causa más frecuente de falla derecha es la izquierda, porque la congestión del pulmón termina sobrecargando al ventrículo derecho.',
    ],
    refs: [L('193')],
  },
  {
    id: 'c4-framingham',
    sec: 'ic',
    titulo: 'Framingham: DECIRTE',
    amplio: true,
    bloques: [
      {
        t: 'lista',
        items: [
          '**D**isnea paroxística nocturna',
          '**E**stertores crepitantes',
          '**C**ardiomegalia',
          '**I**ngurgitación yugular',
          '**R**eflujo hepatoyugular',
          '**T**ercer ruido',
          '**E**dema agudo de pulmón',
        ],
      },
      { t: 'clave', en: 0, text: 'Diagnóstico: **2 mayores** o **1 mayor + 2 menores** (edemas, disnea de esfuerzo, derrame pleural, tos nocturna, taquicardia > 120).', tono: 'rose' },
    ],
    voz: [
      'El diagnóstico de insuficiencia cardíaca es clínico, con los criterios de Framingham. Los mayores se recuerdan con la palabra DECIRTE: disnea paroxística nocturna, estertores crepitantes, cardiomegalia, ingurgitación yugular, reflujo hepatoyugular, tercer ruido y edema agudo de pulmón.',
      'Alcanza con dos mayores, o uno mayor y dos menores, como los edemas, la disnea de esfuerzo, el derrame pleural, la tos nocturna o la taquicardia de más de ciento veinte.',
    ],
    refs: [L('194')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'hta', label: 'HTA' },
    { id: 'ic', label: 'Insuficiencia cardíaca' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'c4', label: 'HTA e IC', tone: 'rose', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
