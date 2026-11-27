import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * res-02 · «Para entenderlo»: síndromes respiratorios.
 * Fuentes: apunte de Ortega pp. 96–122, Merlín PDF 5–11, Argente cap. 36.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'sr-obstructivo',
    sec: 'obstructivo',
    titulo: 'Obstructivo: el aire entra pero no sale',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'El bronquio se **estrecha**: contracción del músculo liso, edema y moco (asma) o inflamación crónica y destrucción del alvéolo (EPOC).' },
          { k: 'mecanismo', text: 'En la **espiración** el tórax comprime el bronquio: el aire **queda atrapado**.' },
          { k: 'signo', text: 'Tórax **hiperinsuflado**, **hipersonoridad**, **espiración prolongada** y **sibilancias**.' },
        ],
      },
      { t: 'clave', en: 2, text: 'Asma: **reversible** (responde al salbutamol). EPOC: **progresiva e irreversible** (tabaco).', tono: 'sky' },
    ],
    voz: [
      'Empecemos por el síndrome obstructivo. El problema es un bronquio estrecho: en el asma, porque el músculo liso se contrae, la mucosa se hincha y hay más moco; en la EPOC, por la inflamación crónica del tabaco y la destrucción de los alvéolos.',
      'Inspirar se puede, pero en la espiración la presión del tórax aprieta ese bronquio ya estrecho, y el aire queda atrapado adentro.',
      'Por eso el tórax se hiperinsufla, suena hipersonoro, la espiración se alarga y se escuchan sibilancias. La gran diferencia es que el asma es reversible con broncodilatadores, y la EPOC es progresiva e irreversible.',
    ],
    refs: [L('101–107')],
  },
  {
    id: 'sr-epoc',
    sec: 'obstructivo',
    titulo: 'Abotagado azul y soplador rosado',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Bronquitis crónica', tono: 'sky', items: ['Predomina el **bronquio**: tos y moco', 'Tos y expectoración **3 meses por año, 2 años**', 'Cianótico, edemas: **abotagado azul**', 'Hipoxemia e hipercapnia precoces'] },
          { titulo: 'Enfisema', tono: 'rose', items: ['Predomina la **destrucción del alvéolo**', 'Pierde elasticidad: aire atrapado', 'Delgado, labios fruncidos: **soplador rosado**', 'Tórax en tonel, hipersonoridad'] },
        ],
      },
    ],
    voz: [
      'La EPOC tiene dos caras. En la bronquitis crónica predomina el bronquio: tos y expectoración al menos tres meses por año durante dos años. Es el abotagado azul: cianótico, con edemas, y con el oxígeno bajo y el dióxido de carbono alto desde temprano.',
      'En el enfisema predomina la destrucción de las paredes de los alvéolos. El pulmón pierde su elasticidad y el aire queda atrapado: es el soplador rosado, delgado, que espira con los labios fruncidos, con tórax en tonel e hipersonoridad.',
    ],
    refs: [L('103–105')],
  },
  {
    id: 'sr-condensacion',
    sec: 'parenquima',
    titulo: 'Condensación o atelectasia: ¿el bronquio está abierto?',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Condensación (neumonía)', tono: 'gold', items: ['Alvéolo **lleno**, bronquio **abierto**', 'Vibraciones **aumentadas**', 'Matidez · **soplo tubario** · crepitantes', 'Rx: broncograma aéreo'] },
          { titulo: 'Atelectasia', tono: 'lilac', items: ['Bronquio **tapado**: el aire se reabsorbe', 'Vibraciones **abolidas**', 'Matidez · **silencio auscultatorio**', '**Retracción**: el mediastino va hacia ese lado'] },
        ],
      },
    ],
    voz: [
      'En los síndromes del parénquima, la pregunta clave es si el bronquio está abierto. En la neumonía el alvéolo se llena de exudado pero el bronquio sigue permeable: el pulmón sólido conduce mejor la voz, así que las vibraciones aumentan, suena mate, y se oye un soplo tubario con crepitantes.',
      'En la atelectasia el bronquio está tapado, por un tumor o un tapón de moco. El aire que quedó se reabsorbe y el pulmón se colapsa: también suena mate, pero las vibraciones se abolen y hay silencio auscultatorio, y el pulmón que se achica tira del mediastino hacia su lado.',
    ],
    refs: [L('109–112')],
  },
  {
    id: 'sr-pleural',
    sec: 'pleural',
    titulo: 'Líquido o aire entre el pulmón y la pared',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Derrame pleural', tono: 'sky', items: ['**Líquido** en la parte declive', 'Vibraciones y murmullo **abolidos**', '**Matidez** de concavidad superior', 'Borde: **soplo pleurítico y egofonía**'] },
          { titulo: 'Neumotórax', tono: 'rose', items: ['**Aire**: el pulmón colapsa al hilio', 'Vibraciones y murmullo **abolidos**', '**Hipersonoridad**', '**Tríada de Galliard** · soplo anfórico'] },
        ],
      },
      { t: 'clave', en: 1, text: 'Los dos abolen vibraciones y murmullo: los separa la **percusión**.', tono: 'gold' },
    ],
    voz: [
      'En los síndromes pleurales algo se mete entre el pulmón y la pared. Si es líquido, el derrame, se acumula en la parte de abajo, la vibración no llega, el murmullo desaparece y suena mate, con un límite superior cóncavo; en ese borde, donde el pulmón está comprimido, aparecen el soplo pleurítico y la egofonía.',
      'Si es aire, el neumotórax, el pulmón se colapsa hacia el hilio. También se abolen las vibraciones y el murmullo, pero suena hipersonoro: es la tríada de Galliard. Así que los dos se parecen en todo, y los separa la percusión.',
    ],
    refs: [L('115–120')],
  },
  {
    id: 'sr-hipertensivo',
    sec: 'pleural',
    titulo: 'Neumotórax hipertensivo: una válvula',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'La lesión pleural funciona como **válvula**: entra aire en cada inspiración y **no sale**.' },
          { k: 'mecanismo', text: 'Sube la presión: **desplaza el mediastino** al otro lado y aplasta las venas cavas.' },
          { k: 'signo', text: 'Cae el retorno venoso: **taquicardia, hipotensión, ingurgitación yugular → shock**. Emergencia.' },
        ],
      },
    ],
    voz: [
      'La forma más grave es el neumotórax hipertensivo. La lesión de la pleura funciona como una válvula: en cada inspiración entra aire, pero en la espiración no sale.',
      'La presión en ese hemitórax sube y sube, empuja el mediastino hacia el otro lado y aplasta las venas que vuelven al corazón.',
      'Si no vuelve sangre al corazón, cae el gasto: taquicardia, hipotensión, yugulares ingurgitadas y shock. Es una emergencia que se descomprime de inmediato.',
    ],
    refs: [L('116')],
  },
  {
    id: 'sr-ir',
    sec: 'ir',
    titulo: 'Insuficiencia respiratoria: oxigenar o ventilar',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Tipo I · hipoxémica', tono: 'sky', items: ['PaO2 **< 60**, PaCO2 normal o baja', 'Falla la **oxigenación**', 'Neumonía, edema de pulmón, TEP'] },
          { titulo: 'Tipo II · hipercápnica', tono: 'rose', items: ['PaO2 < 60 **y PaCO2 > 45**', 'Falla la **ventilación** (la bomba)', 'EPOC, sedantes, enfermedades neuromusculares'] },
        ],
      },
    ],
    voz: [
      'Todos estos síndromes, si son graves, terminan en insuficiencia respiratoria: una presión arterial de oxígeno menor de sesenta, respirando aire a nivel del mar.',
      'Si solo falla la oxigenación, como en la neumonía o el edema de pulmón, el dióxido de carbono se mantiene normal o baja: es la tipo uno. Si falla la ventilación, la bomba, como en la EPOC avanzada o con sedantes, además se acumula dióxido de carbono por encima de cuarenta y cinco: es la tipo dos.',
    ],
    refs: [L('96')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'obstructivo', label: 'Obstructivos' },
    { id: 'parenquima', label: 'Parénquima' },
    { id: 'pleural', label: 'Pleurales' },
    { id: 'ir', label: 'Insuficiencia respiratoria' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'sr', label: 'Síndromes respiratorios', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
