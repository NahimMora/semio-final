import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * gen-01 · «Para entenderlo»: signos vitales y examen general.
 * Fuentes: Merlín («Signos vitales», «Pulso arterial y venoso»), Califano cap. 10, Argente cap. 9 y 11, apunte de Ortega pp. 30–46.
 */
const M = (p: string): SourceRef => ({ src: 'merlin', p });
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'g-que-son',
    sec: 'vitales',
    titulo: 'Los signos vitales',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        items: [
          { ico: 'corazon', t: 'Presión arterial', d: '< 130/85 mmHg', tono: 'rose' },
          { ico: 'mano', t: 'Pulso', d: '60–100 lpm', tono: 'rose' },
          { ico: 'aire', t: 'Frecuencia respiratoria', d: '12–20 rpm', tono: 'sky' },
          { ico: 'fiebre', t: 'Temperatura', d: 'Axilar 36–37 °C', tono: 'gold' },
          { ico: 'gota', t: 'Saturación', d: '≈ 97 %', tono: 'lilac' },
        ],
      },
    ],
    voz: [
      'Los signos vitales son manifestaciones objetivas y medibles de cuya integridad depende la vida. En un minuto te dicen si el paciente está estable, si mejora o si empeora.',
      'Son cuatro clásicos: la presión arterial, normal por debajo de ciento treinta y ochenta y cinco; el pulso, entre sesenta y cien; la frecuencia respiratoria, alrededor de doce a veinte; y la temperatura axilar, entre treinta y seis y treinta y siete grados. Hoy se suma la saturación de oxígeno, normal cerca del noventa y siete por ciento.',
    ],
    refs: [M('«Signos vitales», p. 2')],
  },
  {
    id: 'g-pa',
    sec: 'presion',
    titulo: 'De qué depende la presión arterial',
    amplio: true,
    bloques: [
      { t: 'clave', text: '**PA = gasto cardíaco × resistencia periférica**', tono: 'rose' },
      {
        t: 'comparar',
        en: 1,
        cols: [
          { titulo: 'Sistólica', tono: 'rose', items: ['Cuando el ventrículo **eyecta**', 'Depende del **gasto** y de la **distensibilidad** de las arterias', 'Sube con la rigidez arterial (ancianos)'] },
          { titulo: 'Diastólica', tono: 'sky', items: ['Cuando el corazón se **llena**', 'Depende de la **resistencia periférica** y de la duración de la diástole'] },
        ],
      },
    ],
    voz: [
      'La presión arterial resulta de dos cosas: cuánta sangre manda el corazón por minuto, el gasto cardíaco, y cuánto le cuesta a esa sangre avanzar por las arterias, la resistencia periférica.',
      'La sistólica es la presión cuando el ventrículo eyecta: depende del gasto y de qué tan elásticas son las arterias; por eso en el anciano, con arterias rígidas, sube la sistólica. La diastólica es la que queda mientras el corazón se llena, y depende sobre todo de la resistencia periférica.',
    ],
    refs: [M('«Signos vitales», p. 3')],
  },
  {
    id: 'g-korotkoff',
    sec: 'presion',
    titulo: 'Por qué se oyen los ruidos de Korotkoff',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'normal', text: 'Manguito inflado por encima de la sistólica: la arteria está **cerrada** → silencio.' },
          { k: 'alteracion', text: 'Al desinflar, la sangre **se abre paso** en cada sístole por una arteria parcialmente comprimida.' },
          { k: 'mecanismo', text: 'Flujo **turbulento** → ruido: **fase I = sistólica**.' },
          { k: 'signo', text: 'Arteria libre: flujo **laminar** → los ruidos **desaparecen**: **fase V = diastólica**.' },
        ],
      },
    ],
    voz: [
      'Cuando inflás el manguito por encima de la sistólica, la arteria braquial queda cerrada y no se escucha nada.',
      'Al desinflar, llega un punto en que la presión de la sangre en la sístole supera la del manguito y la sangre se abre paso por una arteria todavía parcialmente apretada.',
      'Ese chorro es turbulento, y lo turbulento suena: el primer ruido que aparece marca la presión sistólica.',
      'Cuando el manguito ya no comprime, la sangre vuelve a fluir en forma laminar, silenciosa, y los ruidos desaparecen: ese momento es la diastólica.',
    ],
    refs: [M('«Signos vitales», p. 6')],
  },
  {
    id: 'g-tecnica',
    sec: 'presion',
    titulo: 'La técnica, paso a paso',
    amplio: true,
    bloques: [
      {
        t: 'lista',
        items: [
          '**Sentado 5 minutos**, espalda apoyada, piernas sin cruzar, **brazo a la altura del corazón**.',
          'Manguito **2–3 cm por encima del codo**, sobre la braquial.',
          '**Palpatorio primero**: inflar hasta que desaparezca el pulso radial.',
          'Membrana sobre la braquial, inflar **20–30 mmHg más** y desinflar **2–3 mmHg/s**.',
          'Primer ruido: **sistólica** · desaparición: **diastólica**. La primera vez, **ambos brazos**.',
        ],
      },
    ],
    voz: [
      'La técnica tiene un orden. El paciente sentado al menos cinco minutos, con la espalda apoyada, las piernas sin cruzar y el brazo apoyado a la altura del corazón.',
      'El manguito va dos o tres centímetros por encima del pliegue del codo, centrado sobre la arteria braquial.',
      'Primero el método palpatorio: palpás el pulso radial e inflás hasta que desaparece. Eso te da una idea de la sistólica y evita que te engañe el agujero auscultatorio.',
      'Después apoyás la membrana sobre la braquial, inflás veinte o treinta milímetros por encima de ese valor y desinflás despacio, dos o tres milímetros por segundo.',
      'El primer ruido es la sistólica, la desaparición de los ruidos es la diastólica. Y la primera vez se mide en los dos brazos.',
    ],
    refs: [M('«Signos vitales», pp. 5–6'), { src: 'califano', p: 'cap. 10' }],
  },
  {
    id: 'g-pulso-fr',
    sec: 'otros',
    titulo: 'Pulso, respiración, temperatura y saturación',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['Signo', 'Cómo', 'Clave'],
        filas: [
          ['**Pulso**', 'Índice y medio en la **radial**, 1 minuto', 'Frecuencia, ritmo, amplitud, simetría'],
          ['**Frecuencia respiratoria**', 'Contar **sin avisar**, 1 minuto', 'Si sabe que lo mirás, la cambia'],
          ['**Temperatura**', 'Axilar seca, 3–5 min', 'La **rectal** es la más confiable'],
          ['**Saturación**', 'Oxímetro en un dedo', '**< 90 %**: hipoxemia importante'],
        ],
      },
    ],
    voz: [
      'El pulso se toma con el índice y el medio sobre la arteria radial, contando un minuto, y además de la frecuencia mirás el ritmo, la amplitud y si es igual de los dos lados. Nunca con el pulgar, porque sentirías tu propio pulso.',
      'La frecuencia respiratoria se cuenta sin avisarle al paciente, como si siguieras tomando el pulso, porque si sabe que lo mirás respira distinto. La temperatura axilar se toma con la axila seca; la rectal es la más confiable. Y la saturación, con el oxímetro: por debajo de noventa por ciento hay una hipoxemia importante.',
    ],
    refs: [M('«Signos vitales», pp. 8–17'), { src: 'argente-libro', p: 'cap. 11' }],
  },
  {
    id: 'g-general',
    sec: 'general',
    titulo: 'La impresión general',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        items: [
          { ico: 'cerebro', t: 'Conciencia', d: 'Nivel y contenido', tono: 'lilac' },
          { ico: 'ojo', t: 'Facies', d: 'Hipocrática, cushingoide…', tono: 'rose' },
          { ico: 'mano', t: 'Actitud y decúbito', d: 'Ortopneico, gatillo de fusil', tono: 'sky' },
          { ico: 'reloj', t: 'Marcha', d: 'Hemipléjica, parkinsoniana', tono: 'sky' },
          { ico: 'gota', t: 'Nutrición e hidratación', d: 'IMC · pliegue', tono: 'gold' },
        ],
      },
      { t: 'clave', en: 1, text: 'El paciente **elige la posición que le alivia**: ortopneico en la IC, **plegaria mahometana** en el derrame pericárdico, **gatillo de fusil** en la meningitis.', tono: 'sky' },
    ],
    voz: [
      'Antes de examinar por regiones, mirás al paciente completo: cómo está su conciencia, qué facies tiene, en qué actitud y decúbito está, cómo camina, y su estado de nutrición e hidratación.',
      'Muchas posturas son defensas: el paciente adopta la posición que le alivia. El cardíaco se sienta para respirar, es el decúbito ortopneico; el que tiene un derrame pericárdico se arrodilla inclinado hacia adelante, la plegaria mahometana; y el que tiene meningitis se acuesta de costado con las piernas flexionadas, en gatillo de fusil.',
    ],
    refs: [L('30–46')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'vitales', label: 'Qué son' },
    { id: 'presion', label: 'Presión arterial' },
    { id: 'otros', label: 'Pulso, FR, T°, SatO2' },
    { id: 'general', label: 'Examen general' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'vitales', label: 'Signos vitales', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
