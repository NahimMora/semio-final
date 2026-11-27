import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * res-01 · «Para entenderlo»: tos, hemoptisis y examen del tórax.
 * Fuentes: apunte de Ortega pp. 72–89, Merlín PDF 4, Califano cap. 3, Argente cap. 33 y 35.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'r-tos',
    sec: 'tos',
    titulo: 'La tos: un reflejo de defensa',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'normal', text: 'Receptores en **faringe, laringe y tráquea** (V, IX, X) → **centro tusígeno** del bulbo.' },
          { k: 'mecanismo', text: 'Inspiración → **cierre de la glotis** → contracción espiratoria: sube la presión.' },
          { k: 'signo', text: 'La glotis se **abre de golpe**: el aire sale a ~100 m/s y arrastra secreciones y cuerpos extraños.' },
        ],
      },
      { t: 'clave', en: 2, text: 'El **parénquima no tiene** receptores de tos ni de dolor: una lesión pulmonar duele solo si llega a la **pleura parietal**.', tono: 'rose' },
    ],
    voz: [
      'La tos es un reflejo de defensa. Los receptores están en la faringe, la laringe y la tráquea, y mandan la señal por el quinto, el noveno y el décimo par al centro de la tos, en el bulbo.',
      'El centro ordena una inspiración, cierra la glotis y contrae los músculos espiratorios contra esa glotis cerrada: la presión dentro del tórax sube mucho.',
      'De golpe se abre la glotis y el aire sale a unos cien metros por segundo, arrastrando secreciones y cuerpos extraños. Un dato importante: el tejido pulmonar en sí no tiene receptores de tos ni de dolor; por eso una neumonía duele recién cuando llega a la pleura parietal.',
    ],
    refs: [L('72'), L('76')],
  },
  {
    id: 'r-hemoptisis',
    sec: 'hemoptisis',
    titulo: 'Hemoptisis o hematemesis',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Hemoptisis', tono: 'rose', items: ['Con **tos**', '**Roja, rutilante, espumosa**', '**Alcalina**, sin alimento', 'Viene del pulmón'] },
          { titulo: 'Hematemesis', tono: 'gold', items: ['Con **vómito**', 'Oscura (hematina ácida)', '**Ácida**, con alimento', 'Después: **melena**'] },
        ],
      },
    ],
    voz: [
      'La hemoptisis es sangre que viene del pulmón. Como sale por la vía aérea, sale con la tos, mezclada con aire: roja, rutilante y espumosa, y de reacción alcalina, sin restos de comida.',
      'La hematemesis viene del tubo digestivo: sale con el vómito, el ácido del estómago la oscurece y la vuelve ácida, trae restos de alimento, y en los días siguientes aparece melena. Ese cuadrito se pregunta siempre.',
    ],
    refs: [L('75')],
  },
  {
    id: 'r-metodo',
    sec: 'examen',
    titulo: 'Qué hay debajo de la pared',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['Debajo hay…', 'Vibraciones vocales', 'Percusión', 'Auscultación'],
        filas: [
          ['**Pulmón normal** (aire en esponja)', 'Normales', 'Sonoridad', 'Murmullo vesicular'],
          ['**Pulmón sólido**, bronquio abierto', '**Aumentadas**', 'Matidez', '**Soplo tubario**, crepitantes'],
          ['**Líquido** en la pleura', '**Abolidas**', 'Matidez', 'Murmullo abolido'],
          ['**Aire** en la pleura', '**Abolidas**', '**Hipersonoridad**', 'Murmullo abolido'],
        ],
      },
    ],
    voz: [
      'Toda la exploración del tórax responde una sola pregunta: qué hay debajo de la pared. El pulmón normal es aire dentro de una esponja: transmite bien la voz, suena sonoro y se escucha el murmullo vesicular.',
      'Si el pulmón se vuelve sólido pero el bronquio sigue abierto, como en la neumonía, conduce mejor la voz: las vibraciones aumentan, suena mate y se oye un soplo tubario. Si hay líquido o aire entre el pulmón y la pared, la vibración no llega: se abolen. El líquido suena mate, y el aire, hipersonoro.',
    ],
    refs: [L('84–88')],
  },
  {
    id: 'r-vibraciones',
    sec: 'examen',
    titulo: 'Vibraciones vocales: «treinta y tres»',
    amplio: true,
    bloques: [
      {
        t: 'lista',
        items: [
          'Palmas de las manos, **comparando** ambos lados, de arriba abajo, mientras dice **«33»**.',
          '**Aumentan**: condensación + **bronquio permeable** + contacto con la pared (neumonía).',
          '**Disminuyen o se abolen**: bronquio tapado (**atelectasia**), aire o líquido en la pleura (**neumotórax, derrame**), enfisema, obesidad.',
        ],
      },
    ],
    voz: [
      'Las vibraciones vocales se exploran con las palmas, comparando los dos lados de arriba hacia abajo, mientras el paciente dice treinta y tres. La voz nace en las cuerdas vocales, baja por la columna de aire y llega a la pared.',
      'Aumentan cuando hay una condensación con el bronquio abierto y en contacto con la pared: la neumonía.',
      'Disminuyen o desaparecen cuando algo corta el camino: un bronquio tapado, como en la atelectasia, o aire o líquido entre el pulmón y la pared, como en el neumotórax o el derrame.',
    ],
    refs: [L('84')],
  },
  {
    id: 'r-ruidos',
    sec: 'ruidos',
    titulo: 'Ruidos agregados: secos y húmedos',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Secos (continuos)', tono: 'sky', items: ['**Bronquio estrechado**', '**Sibilancias**: agudas, espiratorias → asma', '**Roncus**: graves, cambian con la tos'] },
          { titulo: 'Húmedos (discontinuos)', tono: 'rose', items: ['**Líquido o alvéolos que se abren**', '**Crepitantes**: fin de inspiración, no cambian con la tos → neumonía, IC', '**Subcrepitantes**: burbuja, cambian con la tos'] },
          { titulo: 'Pleural', tono: 'gold', items: ['**Frote pleural**', 'Ambas fases, superficial', 'Desaparece en apnea y con derrame'] },
        ],
      },
    ],
    voz: [
      'Los ruidos agregados se entienden por su origen. Los secos son continuos y musicales: aire que pasa por un bronquio estrechado. Si el bronquio es fino suena agudo, la sibilancia del asma; si es grueso, grave, el roncus, que cambia al toser.',
      'Los húmedos son discontinuos. Los crepitantes son alvéolos que se despegan al final de la inspiración, como en la neumonía o la insuficiencia cardíaca, y no cambian con la tos; los subcrepitantes son burbujas de secreción en los bronquios. Y el frote pleural es el roce de las dos pleuras inflamadas: se oye en las dos fases y desaparece si aparece líquido.',
    ],
    refs: [L('88–89')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'tos', label: 'Tos' },
    { id: 'hemoptisis', label: 'Hemoptisis' },
    { id: 'examen', label: 'Examen del tórax' },
    { id: 'ruidos', label: 'Ruidos' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'resp', label: 'Respiratorio', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
