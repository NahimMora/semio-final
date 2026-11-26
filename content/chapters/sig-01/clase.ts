import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * sig-01 · «Para entenderlo»: dolor, fiebre, disnea, cianosis y edema.
 * Por qué aparece cada síntoma. Fuentes: apunte de Ortega (pp. 2–9, 18–23), Merlín, Argente cap. 8–12.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });
const A = (p: string): SourceRef => ({ src: 'argente-libro', p });

const diapos: Diapositiva[] = [
  /* ── DOLOR ── */
  {
    id: 's-via',
    sec: 'dolor',
    titulo: 'Dolor: del estímulo a la corteza',
    fig: { f: 'via-dolor' },
    anchoFig: 'grande',
    bloques: [
      {
        t: 'lista',
        items: [
          '**Nociceptor**: terminación nerviosa libre (estímulo mecánico, térmico o químico).',
          '**Asta dorsal**: la 1.ª neurona libera **sustancia P y glutamato**.',
          'La 2.ª neurona **cruza** y sube por la **vía espinotalámica**.',
          '**Tálamo → corteza**: recién ahí se percibe.',
        ],
      },
    ],
    voz: [
      'Empecemos por el dolor. Todo arranca en el nociceptor, una terminación nerviosa libre que responde a estímulos mecánicos, térmicos o químicos que dañan o amenazan con dañar un tejido.',
      'La primera neurona tiene su cuerpo en el ganglio de la raíz posterior y en el asta dorsal de la médula libera sustancia P y glutamato.',
      'La segunda neurona cruza al lado opuesto y sube por la vía espinotalámica.',
      'Llega al tálamo y de ahí a la corteza. Recién ahí el estímulo se convierte en dolor, y por eso el dolor es siempre subjetivo.',
    ],
    refs: [L('2'), A('62–64')],
  },
  {
    id: 's-fibras',
    sec: 'dolor',
    titulo: 'Somático y visceral: dos fibras distintas',
    fig: { f: 'fibras' },
    anchoFig: 'grande',
    bloques: [
      { t: 'def', term: 'Somático · fibras Aδ', tono: 'rose', text: 'Mielínicas, rápidas: dolor **agudo, punzante, bien localizado**. Piel, músculo, hueso.' },
      { t: 'def', term: 'Visceral · fibras C', tono: 'sky', en: 1, text: 'Amielínicas, lentas: dolor **sordo, vago, mal localizado**, con náuseas y sudoración. Distensión, isquemia, inflamación.' },
    ],
    voz: [
      'El dolor viaja por dos tipos de fibras. Las A delta tienen mielina y conducen rápido: dan el dolor somático, el de la piel, los músculos y los huesos, que es agudo, punzante y se señala con un dedo.',
      'Las fibras C no tienen mielina y son unas diez veces más lentas. Predominan en las vísceras: por eso el dolor visceral es sordo, vago, tardío, mal localizado, y suele venir con náuseas y sudoración. Lo producen la distensión, como en un cólico, la isquemia y la inflamación.',
    ],
    refs: [L('2'), A('63')],
  },
  {
    id: 's-referido',
    sec: 'dolor',
    titulo: 'Dolor referido: la convergencia',
    fig: { f: 'convergencia' },
    anchoFig: 'grande',
    bloques: [
      { t: 'texto', text: 'La víscera y la piel del mismo segmento llegan a la **misma neurona** del asta dorsal: el cerebro lo **proyecta a la piel**.' },
      { t: 'clave', en: 1, text: 'Infarto de cara inferior → **epigastrio** · vesícula → **hombro derecho**.', tono: 'rose' },
    ],
    voz: [
      'El dolor referido se siente lejos del órgano enfermo. La razón es una convergencia: en el asta dorsal, las fibras que vienen de una víscera y las que vienen de la piel de ese mismo segmento terminan en la misma neurona. El cerebro no sabe de dónde vino la señal y la proyecta a la piel, que es lo que está acostumbrado a sentir.',
      'Por eso un infarto de cara inferior puede doler en el epigastrio, y la vesícula puede doler en el hombro derecho.',
    ],
    refs: [A('65')],
  },
  {
    id: 's-alicia',
    sec: 'dolor',
    titulo: 'Cómo se interroga: ALICIA',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        items: [
          { ico: 'reloj', t: 'Antigüedad', d: 'Agudo < 4 sem · crónico > 4 meses', tono: 'sky' },
          { ico: 'mano', t: 'Localización', d: 'Un dedo o la mano', tono: 'sky' },
          { ico: 'dolor', t: 'Irradiación', d: '¿Se corre?', tono: 'rose' },
          { ico: 'pregunta', t: 'Carácter', d: 'Opresivo, cólico, urente…', tono: 'rose' },
          { ico: 'fuego', t: 'Intensidad', d: '0 a 10', tono: 'lilac' },
          { ico: 'vaso', t: 'Atenuantes y agravantes', d: '+ desencadenantes y acompañantes', tono: 'lilac' },
        ],
      },
    ],
    voz: [
      'Para interrogar cualquier dolor se usa ALICIA. Antigüedad: desde cuándo; agudo es hasta cuatro semanas y crónico, más de cuatro meses. Localización: dónde, que el paciente lo señale.',
      'Irradiación: si se corre hacia otro lado, como el cólico renal hacia los genitales. Carácter: cómo es; opresivo como en la angina, cólico como en la vesícula, urente como en la úlcera, transfixiante como en la pancreatitis.',
      'Intensidad, del cero al diez. Y atenuantes y agravantes: qué lo calma y qué lo empeora. A eso sumale qué lo desencadenó y qué síntomas lo acompañan.',
    ],
    refs: [L('3–4')],
  },
  /* ── FIEBRE ── */
  {
    id: 's-fiebre',
    sec: 'fiebre',
    titulo: 'Fiebre: el termostato sube',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'normal', text: 'El **hipotálamo anterior** fija la temperatura (≈ 37 °C).' },
          { k: 'alteracion', text: 'Un **pirógeno exógeno** activa los macrófagos → **pirógenos endógenos** (IL-1, IL-6, TNF).' },
          { k: 'mecanismo', text: 'En el hipotálamo inducen **PGE2** → sube el **punto de ajuste**.' },
          { k: 'signo', text: 'El cuerpo «siente frío»: **escalofríos**, vasoconstricción, abrigo → **fiebre**.' },
        ],
      },
    ],
    voz: [
      'La fiebre es como un termostato al que le subieron la temperatura. Normalmente el hipotálamo anterior la fija alrededor de treinta y siete grados.',
      'Un pirógeno exógeno, por ejemplo una bacteria, activa a los macrófagos, que liberan pirógenos endógenos: interleucina uno, interleucina seis y factor de necrosis tumoral.',
      'Esas citocinas llegan al hipotálamo y estimulan la producción de prostaglandina E dos, que sube el punto de ajuste.',
      'Con el termostato más alto, el cuerpo siente frío aunque esté normal: tiembla con escalofríos, cierra los vasos de la piel y busca abrigo, hasta alcanzar el nuevo valor. Eso es la fiebre: una elevación regulada.',
    ],
    refs: [L('21')],
  },
  {
    id: 's-hipertermia',
    sec: 'fiebre',
    titulo: 'Fiebre o hipertermia',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Fiebre', tono: 'rose', items: ['Termostato **alto**', 'El cuerpo genera calor a propósito', 'Infecciones, neoplasias', '**Sirven** los antitérmicos'] },
          { titulo: 'Hipertermia', tono: 'sky', items: ['Termostato **normal**', 'Entra o se produce más calor del que sale', 'Golpe de calor, tirotoxicosis', '**No sirven** los antitérmicos'] },
        ],
      },
      { t: 'texto', en: 1, text: 'Fiebre: **> 37,2 °C** a la mañana o **> 37,7 °C** a la tarde · hiperpirexia **> 41,5 °C**.' },
    ],
    voz: [
      'La diferencia con la hipertermia es fundamental. En la fiebre el termostato está alto y el cuerpo genera calor a propósito; por eso los antitérmicos, que bajan la prostaglandina, funcionan. En la hipertermia el termostato está normal, pero el cuerpo produce o recibe más calor del que puede eliminar, como en un golpe de calor: ahí los antitérmicos no sirven.',
      'Como la temperatura varía en el día, se considera fiebre más de treinta y siete coma dos a la mañana o más de treinta y siete coma siete a la tarde.',
    ],
    refs: [L('21–22')],
  },
  /* ── DISNEA ── */
  {
    id: 's-disnea',
    sec: 'disnea',
    titulo: 'Disnea: por qué falta el aire',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['Mecanismo', 'Ejemplos'],
        filas: [
          ['Necesita **ventilar más**', 'Ejercicio, anemia, acidosis'],
          ['Cuesta **mover** el aire', 'Asma, EPOC'],
          ['Cuesta **expandir** el pulmón', 'Edema de pulmón, derrame, fibrosis'],
          ['Los **músculos** no alcanzan', 'Miastenia, Guillain-Barré'],
          ['**Psicógena**', 'Ansiedad'],
        ],
      },
    ],
    voz: [
      'La disnea es la sensación de falta de aire: respirar se vuelve consciente y trabajoso. Aparece cuando el esfuerzo para respirar supera lo que el paciente siente como normal, y eso pasa por cinco caminos.',
      'Porque necesita ventilar más, como en la anemia o la acidosis; porque al aire le cuesta pasar, como en el asma; porque al pulmón le cuesta expandirse, como en el edema o el derrame; porque los músculos no alcanzan; o por causas psicógenas, como la ansiedad.',
    ],
    refs: [L('5')],
  },
  {
    id: 's-ortopnea',
    sec: 'disnea',
    titulo: 'Ortopnea y disnea paroxística nocturna',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'Ventrículo izquierdo que falla.' },
          { k: 'mecanismo', text: '**Acostado** vuelve más sangre de las piernas al tórax.' },
          { k: 'mecanismo', text: 'Sube la **presión capilar pulmonar** → congestión.' },
          { k: 'signo', text: '**Ortopnea**: mejora sentado. De noche, al reabsorberse el edema: **disnea paroxística nocturna**.' },
        ],
      },
    ],
    voz: [
      'Dos disneas típicas del corazón. Imaginá un ventrículo izquierdo que falla.',
      'Cuando el paciente se acuesta, la sangre de las piernas vuelve al tórax.',
      'Ese volumen extra sube la presión en los capilares del pulmón, y el pulmón se congestiona.',
      'Por eso le falta el aire acostado y mejora sentado: es la ortopnea. Y de noche, cuando se reabsorbe el edema de las piernas, la congestión aumenta y lo despierta ahogado: es la disnea paroxística nocturna.',
    ],
    refs: [L('5–6')],
  },
  /* ── CIANOSIS ── */
  {
    id: 's-cianosis',
    sec: 'cianosis',
    titulo: 'Cianosis: ¿dónde se pierde el oxígeno?',
    amplio: true,
    bloques: [
      { t: 'texto', text: 'Azul = **hemoglobina reducida ≥ 5 g/dL** en los capilares.' },
      {
        t: 'comparar',
        en: 1,
        cols: [
          { titulo: 'Central', tono: 'lilac', items: ['La sangre **sale del pulmón** ya desaturada', 'Generalizada, **con lengua**', 'Caliente · **mejora con oxígeno**'] },
          { titulo: 'Periférica', tono: 'sky', items: ['Sale bien, pero **circula lento**', 'Acral, **sin lengua**', 'Fría · **mejora con calor**'] },
        ],
      },
    ],
    voz: [
      'La cianosis es el color azulado que da la hemoglobina sin oxígeno, cuando en los capilares supera los cinco gramos por decilitro. La pregunta clave es dónde se perdió el oxígeno.',
      'Si la sangre ya sale del pulmón mal oxigenada, por una neumonía o un cortocircuito, toda la sangre arterial está desaturada: la cianosis es central, generalizada, incluye la lengua, la piel está caliente y mejora con oxígeno. Si la sangre sale bien pero circula lenta por la periferia, los tejidos le sacan más oxígeno: la cianosis es periférica, en manos, pies y orejas, no toca la lengua, la piel está fría y mejora con calor.',
    ],
    refs: [L('8'), A('cap. 11')],
  },
  /* ── EDEMA ── */
  {
    id: 's-starling',
    sec: 'edema',
    titulo: 'Edema: las fuerzas de Starling',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'normal', text: 'La **presión hidrostática** empuja agua **afuera**; la **oncótica** (albúmina) la trae **adentro**; la **linfa** saca lo que sobra.' },
          { k: 'alteracion', text: '↑ hidrostática (IC) · ↓ oncótica (nefrótico, cirrosis) · ↑ permeabilidad (inflamación) · falla linfática.' },
          { k: 'signo', text: 'Líquido en el intersticio: **edema**. Generalizado si el riñón además **retiene sodio y agua**.' },
        ],
      },
    ],
    voz: [
      'El edema se entiende con las fuerzas de Starling. En el capilar, la presión hidrostática empuja el agua hacia afuera; la presión oncótica, que dan las proteínas como la albúmina, la trae de vuelta; y lo que sobra lo saca la linfa.',
      'Hay edema cuando sube la hidrostática, como en la insuficiencia cardíaca; cuando baja la oncótica, como en el síndrome nefrótico o la cirrosis; cuando el capilar se vuelve permeable, como en la inflamación; o cuando falla el drenaje linfático.',
      'El líquido queda en el intersticio. Y para que el edema se generalice, el riñón tiene que retener sodio y agua; si no, el líquido se agotaría.',
    ],
    refs: [L('18')],
  },
  {
    id: 's-edemas',
    sec: 'edema',
    titulo: 'Cardíaco o renal: dónde y cuándo',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Circulatorio (cardíaco)', tono: 'rose', items: ['↑ hidrostática', '**Declive**: tobillos, sacro', '**Vespertino**', 'Frío, cianótico'] },
          { titulo: 'Discrásico (renal)', tono: 'sky', items: ['↓ oncótica', '**Párpados**, zonas laxas', '**Matinal**', 'Blando, pálido'] },
          { titulo: 'Inflamatorio', tono: 'gold', items: ['↑ permeabilidad', 'Localizado', 'Brusco', '**Caliente, rojo, doloroso**'] },
        ],
      },
      { t: 'clave', en: 1, text: '**Signo de Godet**: presionar contra un plano óseo (maléolo interno, tibia, sacro) y ver si queda la **fóvea**.', tono: 'sky' },
    ],
    voz: [
      'El mecanismo explica la forma. El edema cardíaco depende de la gravedad: aparece en las zonas de declive, los tobillos o el sacro si está en cama, y empeora a la tarde. El renal, por baja oncótica, aparece en zonas laxas como los párpados y se nota a la mañana. El inflamatorio es localizado, caliente, rojo y doloroso.',
      'Para buscarlo se hace el signo de Godet: se presiona con el pulgar unos segundos contra un plano óseo, detrás del maléolo interno o en el sacro, y se mira si queda la fóvea.',
    ],
    refs: [L('19–20')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'dolor', label: 'Dolor' },
    { id: 'fiebre', label: 'Fiebre' },
    { id: 'disnea', label: 'Disnea' },
    { id: 'cianosis', label: 'Cianosis' },
    { id: 'edema', label: 'Edema' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'signos', label: 'Signos y síntomas', tone: 'rose', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
