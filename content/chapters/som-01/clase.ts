import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * som-01 · «Para entenderlo»: exploración articular.
 * Fuentes: Argente cap. 23 y video 4; clase de Ortega (meníngeo y osteoarticular, 46:17).
 */
const diapos: Diapositiva[] = [
  {
    id: 'so-activa',
    sec: 'sistematica',
    titulo: 'Activa contra pasiva',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Ambas limitadas', tono: 'sky', items: ['La **articulación** está trabada', 'Artritis, artrosis, derrame'] },
          { titulo: 'Activa perdida, pasiva normal', tono: 'rose', items: ['La articulación está bien; falla **quien la mueve**', '**Paresia** o **tendón roto** (manguito rotador)'] },
        ],
      },
    ],
    voz: [
      'La exploración de una articulación sigue siempre el mismo orden: inspección comparando con el otro lado, palpación, movilidad y maniobras.',
      'Y hay un truco clave: comparar la movilidad activa, la que hace el paciente, con la pasiva, la que hace el médico. Si las dos están limitadas, el problema es de la articulación misma. Si el paciente no puede moverla pero vos sí, la articulación está bien: falla el que la mueve, un nervio o un tendón roto.',
    ],
    refs: [{ src: 'argente-libro', p: 'cap. 23' }],
  },
  {
    id: 'so-rodilla',
    sec: 'rodilla',
    titulo: 'La rodilla: lo que más preguntan',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['Maniobra', 'Qué se tensa', 'Lesión'],
        filas: [
          ['**Cajón** anterior / posterior', 'La tibia se desliza', '**Ligamentos cruzados**'],
          ['**Bostezo** en valgo / varo', 'La articulación se abre', '**Colaterales**'],
          ['**McMurray**', 'Rotación y extensión', '**Meniscos**'],
          ['**Choque rotuliano**', 'La rótula rebota', '**Derrame**'],
        ],
      },
    ],
    voz: [
      'Ortega avisó que las maniobras de rodilla son las que más preguntan. Cada una tensa una estructura distinta. En el cajón, si la tibia se desliza hacia adelante o hacia atrás, están rotos los ligamentos cruzados. En el bostezo, si la articulación se abre al forzar el valgo o el varo, están rotos los colaterales.',
      'McMurray, rotando y extendiendo la rodilla, explora los meniscos. Y en el choque rotuliano, si la rótula se hunde y rebota, hay líquido: un derrame.',
    ],
    refs: [{ src: 'meningeo-osteo', t: '46:17' }],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'sistematica', label: 'Sistemática' },
    { id: 'rodilla', label: 'Rodilla' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'so', label: 'SOMA', tone: 'peach', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
