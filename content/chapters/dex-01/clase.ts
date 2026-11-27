import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * dex-01 · «Para entenderlo»: examen físico del abdomen.
 * Fuentes: apunte de Ortega pp. 356–367, Merlín, Argente cap. 41.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'dx-orden',
    sec: 'orden',
    titulo: 'En el abdomen, palpar es lo último',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'ojo', t: 'Inspección', d: 'Forma, piel, ombligo, latidos', tono: 'sky' },
          { ico: 'oreja', t: 'Auscultación', d: 'Ruidos **espontáneos** · 5–30/min', tono: 'lilac' },
          { ico: 'mano', t: 'Percusión', d: 'Timpanismo vs **matidez**', tono: 'sky' },
          { ico: 'mano', t: 'Palpación', d: 'Superficial y profunda', tono: 'rose' },
        ],
      },
      { t: 'clave', en: 1, text: 'Si palpo antes, **provoco** ruidos y ya no sé cuáles son del paciente.', tono: 'lilac' },
    ],
    voz: [
      'En el abdomen se cambia el orden del examen. Primero la inspección: forma, piel, ombligo, latidos.',
      'Después la auscultación, antes de tocar, porque si palpo o percuto provoco ruidos intestinales y ya no sé cuáles son espontáneos. Los ruidos hidroaéreos normales son de cinco a treinta por minuto.',
      'Después la percusión, que distingue el aire, timpánico, de lo macizo, mate.',
      'Y al final la palpación, que es la que más información da.',
    ],
    refs: [L('356–358')],
  },
  {
    id: 'dx-ruidos',
    sec: 'orden',
    titulo: 'Lo que dicen los ruidos',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Ruidos de lucha', tono: 'sky', items: ['El intestino empuja contra un **obstáculo**', 'Intensos, con cólico', '**Íleo mecánico**'] },
          { titulo: 'Silencio abdominal', tono: 'rose', items: ['El intestino **se paraliza**', 'Peritoneo inflamado', '**Íleo paralítico**: peritonitis'] },
        ],
      },
    ],
    voz: [
      'Los ruidos te cuentan qué hace el intestino. Si hay un obstáculo, el intestino lucha para vencerlo: los ruidos se vuelven intensos, metálicos, acompañados de cólico. Es el íleo mecánico, la obstrucción.',
      'Si el peritoneo está inflamado, el intestino se paraliza y deja de sonar: el silencio abdominal del íleo paralítico es una señal de alarma de peritonitis.',
    ],
    refs: [L('358')],
  },
  {
    id: 'dx-peritoneo',
    sec: 'palpacion',
    titulo: 'Cuando el peritoneo se irrita',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'Una víscera inflamada irrita su **peritoneo**.' },
          { k: 'signo', text: '**Punto doloroso** en su proyección: McBurney (apéndice), Murphy (vesícula).' },
          { k: 'signo', text: '**Defensa**: la pared se contrae para proteger.' },
          { k: 'signo', text: '**Blumberg**: duele al **soltar** · abdomen **en tabla** si es generalizado.' },
        ],
      },
    ],
    voz: [
      'Cuando una víscera se inflama, irrita el peritoneo que la cubre.',
      'Al presionar con un dedo el punto donde se proyecta en la pared, duele: McBurney para el apéndice, Murphy para la vesícula.',
      'La pared se contrae para proteger esa zona: es la defensa.',
      'Y al soltar bruscamente la presión, el peritoneo se mueve y duele más: es el signo de Blumberg. Si toda la cavidad está inflamada, el abdomen queda duro, en tabla: es la peritonitis.',
    ],
    refs: [L('360–361')],
  },
  {
    id: 'dx-visceras',
    sec: 'palpacion',
    titulo: 'Hígado y bazo bajan con la inspiración',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Hígado', tono: 'sky', items: ['Límite superior: **5.º espacio** (percusión)', 'Borde ≤ **1 cm** bajo el reborde', 'Hepatometría **9–12 cm**'] },
          { titulo: 'Bazo', tono: 'rose', items: ['Normalmente **no se palpa**', 'Crece hacia la **FID**: empezar abajo', '**Castell** y Traube mates · **Schuster**'] },
        ],
      },
    ],
    voz: [
      'El hígado y el bazo están debajo de las costillas, y el diafragma los empuja hacia abajo en cada inspiración: por eso se palpan pidiendo al paciente que inspire hondo y esperando que el borde llegue a los dedos.',
      'El hígado se mide sumando dos datos: el límite superior por percusión, en el quinto espacio, y el borde inferior por palpación, que no pasa más de un centímetro el reborde. Entre los dos hay de nueve a doce centímetros.',
      'El bazo normal no se palpa. Cuando crece lo hace hacia abajo y adelante, hacia la fosa ilíaca derecha, así que la palpación empieza abajo. Se ayuda con la percusión del punto de Castell y la posición de Schuster.',
    ],
    refs: [L('365–367')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'orden', label: 'Orden y auscultación' },
    { id: 'palpacion', label: 'Palpación' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'dx', label: 'Examen del abdomen', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
