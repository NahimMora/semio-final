/**
 * CRONOGRAMA DE SEMIOLOGÍA (26/11 → 14/12/2026), tomado del itinerario de finales de la usuaria.
 * Solo gestiona Semiología: 3 h 15 min por día (195 min, con 25 min de repaso incluidos) y bloques de 90 min como máximo.
 * Los temas de cada bloque apuntan a la base central (temas.ts).
 *
 * Ajustes respecto del itinerario (propuestos, la usuaria puede aprobarlos o moverlos desde la página Cronograma):
 *  - Signos y síntomas generales repartidos: dolor el 26/11 (va con la anamnesis), fiebre el 27/11 (con temperatura),
 *    disnea y cianosis el 28/11 (respiratorio), edema el 30/11 (cardiovascular), ictericia el 04/12 (digestivo).
 *  - Síndrome anémico el 02/12 (cierre de ERA 1: es contenido de la primera mitad del apunte de Ortega).
 *  - SOMA el 06/12 (día de «renal: síndromes y pendientes», el más liviano de la segunda era).
 *  - Examen neurológico integrador (conciencia, Glasgow, taxia, gnosias, praxias) el 07/12.
 */

export type TipoBloque = 'nuevo' | 'recuerdo' | 'repaso' | 'simulacro' | 'errores' | 'debiles' | 'examen';

export interface Bloque {
  id: string;
  min: number;
  tipo: TipoBloque;
  titulo: string;
  temas: string[];
  /** Para repasos: fecha (dd/mm) de lo que se repasa. Los temas se toman de ese día. */
  repasa?: string[];
  nota?: string;
}

export interface Dia {
  fecha: string; // ISO yyyy-mm-dd
  corto: string; // dd/mm
  vuelta: 1 | 2;
  titulo: string;
  minutos: number;
  bloques: Bloque[];
  /** Control de avance del itinerario. */
  control?: string;
}

const RECUERDO = (id: string, nota = 'Recordá en 5 minutos lo de ayer sin mirar; después explicá en voz alta lo de hoy.'): Bloque => ({
  id,
  min: 25,
  tipo: 'recuerdo',
  titulo: 'Recuerdo rápido y explicar sin mirar',
  temas: [],
  nota,
});

const REPASO = (id: string, fechas: string[], min = 25): Bloque => ({
  id,
  min,
  tipo: 'repaso',
  titulo: `Repaso espaciado del ${fechas.join(' y del ')}`,
  temas: [],
  repasa: fechas,
  nota: 'Preguntas abiertas de una en una (o «Repasar con ChatGPT»). Lo que falle va al banco de errores.',
});

export const CRONOGRAMA: Dia[] = [
  {
    fecha: '2026-11-26', corto: '26/11', vuelta: 1, titulo: 'Historia clínica y anamnesis', minutos: 140,
    bloques: [
      { id: '26-1', min: 90, tipo: 'nuevo', titulo: 'Historia clínica: estructura, anamnesis, motivo de consulta, enfermedad actual y antecedentes', temas: ['hc'] },
      { id: '26-2', min: 50, tipo: 'nuevo', titulo: 'Dolor: cómo se interroga (es el corazón de la enfermedad actual)', temas: ['dolor'], nota: 'Día reducido (empezás de tarde). Cerrá explicando la HC en voz alta sin mirar.' },
    ],
  },
  {
    fecha: '2026-11-27', corto: '27/11', vuelta: 1, titulo: 'Examen general, signos vitales; cabeza y cuello', minutos: 195,
    bloques: [
      { id: '27-1', min: 90, tipo: 'nuevo', titulo: 'Examen físico general, signos vitales y fiebre', temas: ['examen-general', 'signos-vitales', 'fiebre'] },
      { id: '27-2', min: 80, tipo: 'nuevo', titulo: 'Cabeza y cuello: cráneo, ojos (ojo rojo), oído, nariz, boca, TCS, ganglios, cuello y tiroides', temas: ['ef-cabeza', 'ojo-rojo', 'ef-tcs-ganglios', 'ef-cuello-tiroides'] },
      RECUERDO('27-3'),
    ],
  },
  {
    fecha: '2026-11-28', corto: '28/11', vuelta: 1, titulo: 'Respiratorio: síntomas y examen físico', minutos: 195,
    bloques: [
      { id: '28-1', min: 90, tipo: 'nuevo', titulo: 'Motivos de consulta respiratorios: tos, expectoración, hemoptisis, disnea y cianosis', temas: ['mc-resp', 'hemoptisis', 'disnea', 'cianosis'] },
      { id: '28-2', min: 80, tipo: 'nuevo', titulo: 'Examen físico del tórax y ruidos respiratorios', temas: ['ef-torax', 'ruidos-agregados'] },
      RECUERDO('28-3'),
    ],
  },
  {
    fecha: '2026-11-29', corto: '29/11', vuelta: 1, titulo: 'Síndromes respiratorios', minutos: 195,
    bloques: [
      { id: '29-1', min: 90, tipo: 'nuevo', titulo: 'Obstructivos (asma, bronquitis/EPOC) y parenquimatosos (condensación, atelectasia)', temas: ['asma', 'bronquitis-epoc', 'sx-condensacion', 'sx-atelectasia'] },
      { id: '29-2', min: 80, tipo: 'nuevo', titulo: 'Pleurales (derrame, líquido pleural, neumotórax) e insuficiencia respiratoria', temas: ['sx-derrame', 'liquido-pleural', 'neumotorax', 'insuf-resp'] },
      RECUERDO('29-3'),
    ],
  },
  {
    fecha: '2026-11-30', corto: '30/11', vuelta: 1, titulo: 'Cardiovascular: síntomas y examen físico', minutos: 195,
    bloques: [
      { id: '30-1', min: 90, tipo: 'nuevo', titulo: 'Motivos de consulta: ángor, asma cardíaca, palpitaciones, síncope, edema y cianosis periférica', temas: ['angor', 'mc-cardio', 'sincope', 'edema'] },
      { id: '30-2', min: 80, tipo: 'nuevo', titulo: 'Examen físico cardiovascular, pulso arterial y pulso venoso', temas: ['ef-cardio', 'pulso-arterial', 'pulso-venoso'] },
      REPASO('30-3', ['26/11']),
    ],
  },
  {
    fecha: '2026-12-01', corto: '01/12', vuelta: 1, titulo: 'Soplos, valvulopatías e HTA', minutos: 195,
    bloques: [
      { id: '01-1', min: 90, tipo: 'nuevo', titulo: 'Ruidos cardíacos (R1–R4) y soplos', temas: ['ruidos-r1r2', 'ruidos-r3r4', 'soplos'] },
      { id: '01-2', min: 80, tipo: 'nuevo', titulo: 'Estenosis e insuficiencia mitral y aórtica; HTA', temas: ['estenosis-mitral', 'insuf-mitral', 'estenosis-aortica', 'insuf-aortica', 'hta'] },
      REPASO('01-3', ['27/11']),
    ],
  },
  {
    fecha: '2026-12-02', corto: '02/12', vuelta: 1, titulo: 'Insuficiencia cardíaca; cerrar ERA 1', minutos: 195,
    control: 'Control de avance: Semio ERA 1 cerrada.',
    bloques: [
      { id: '02-1', min: 90, tipo: 'nuevo', titulo: 'Insuficiencia cardíaca y síndrome anémico', temas: ['ic', 'sx-anemico'] },
      { id: '02-2', min: 60, tipo: 'debiles', titulo: 'Cierre de ERA 1: lo que quedó pendiente y cuadros comparativos', temas: [] },
      REPASO('02-3', ['28/11', '29/11'], 45),
    ],
  },
  {
    fecha: '2026-12-03', corto: '03/12', vuelta: 1, titulo: 'Digestivo: examen físico y maniobras', minutos: 195,
    bloques: [
      { id: '03-1', min: 90, tipo: 'nuevo', titulo: 'Abdomen: topografía, inspección, auscultación, percusión, palpación; pared, puntos dolorosos y hernias; intestino', temas: ['ef-abdomen', 'pared-abdominal', 'ef-intestino'] },
      { id: '03-2', min: 80, tipo: 'nuevo', titulo: 'Hígado, bazo y ascitis: maniobras', temas: ['ef-higado', 'ef-bazo', 'ascitis'] },
      REPASO('03-3', ['30/11']),
    ],
  },
  {
    fecha: '2026-12-04', corto: '04/12', vuelta: 1, titulo: 'Digestivo: síndromes', minutos: 195,
    bloques: [
      { id: '04-1', min: 90, tipo: 'nuevo', titulo: 'Digestivo alto: disfagia, vómitos, úlcera y gastritis, hemorragia digestiva, abdomen agudo', temas: ['disfagia', 'vomitos', 'digestivo-alto', 'ulcera-gastritis', 'hd', 'abdomen-agudo'] },
      { id: '04-2', min: 80, tipo: 'nuevo', titulo: 'Ictericia, cirrosis, hipertensión portal, líquido ascítico, peritonitis y constipación', temas: ['ictericia', 'cirrosis', 'htp', 'liquido-ascitico', 'peritonitis', 'constipacion'] },
      REPASO('04-3', ['01/12']),
    ],
  },
  {
    fecha: '2026-12-05', corto: '05/12', vuelta: 1, titulo: 'Renal: IRA y ERC', minutos: 195,
    bloques: [
      { id: '05-1', min: 90, tipo: 'nuevo', titulo: 'Insuficiencia renal aguda (RIFLE, AKIN, pre/renal/pos) y crónica (KDIGO, AEIOU)', temas: ['ira', 'erc'] },
      { id: '05-2', min: 80, tipo: 'nuevo', titulo: 'Examen físico renal, análisis de orina e infección urinaria', temas: ['ef-renal', 'orina', 'itu'] },
      REPASO('05-3', ['02/12']),
    ],
  },
  {
    fecha: '2026-12-06', corto: '06/12', vuelta: 1, titulo: 'Renal: síndromes y pendientes (+ SOMA)', minutos: 195,
    control: 'Control de avance: 7 de 10 preguntas sin mirar.',
    bloques: [
      { id: '06-1', min: 80, tipo: 'nuevo', titulo: 'Síndromes nefrótico y nefrítico', temas: ['nefrotico', 'nefritico'] },
      { id: '06-2', min: 70, tipo: 'nuevo', titulo: 'SOMA: exploración de las articulaciones y maniobras', temas: ['ef-articulaciones'] },
      REPASO('06-3', ['03/12', '04/12'], 45),
    ],
  },
  {
    fecha: '2026-12-07', corto: '07/12', vuelta: 1, titulo: 'Neuro: examen físico y pares craneales', minutos: 195,
    bloques: [
      { id: '07-1', min: 90, tipo: 'nuevo', titulo: 'Conciencia, orientación y Glasgow; los doce pares craneales', temas: ['conciencia-glasgow', 'pc-I', 'pc-II', 'pc-oculomotores', 'pc-V', 'pc-VII', 'pc-VIII', 'pc-IX-X', 'pc-XI', 'pc-XII'] },
      { id: '07-2', min: 80, tipo: 'nuevo', titulo: 'Fuerza, tono, reflejos, sensibilidad, taxia, gnosias, praxias, postura y marcha', temas: ['fuerza', 'tono', 'reflejos-profundos', 'reflejos-superficiales', 'sens-superficial', 'sens-profunda', 'taxia', 'gnosias-praxias', 'postura-marcha'] },
      REPASO('07-3', ['05/12']),
    ],
  },
  {
    fecha: '2026-12-08', corto: '08/12', vuelta: 1, titulo: 'Neuro: síndromes; cerrar ERA 2', minutos: 195,
    control: 'Control de avance: primera vuelta completa.',
    bloques: [
      { id: '08-1', min: 90, tipo: 'nuevo', titulo: 'Piramidal, segunda motoneurona, extrapiramidal (Parkinson) y cerebeloso', temas: ['sx-piramidal', 'segunda-motoneurona', 'parkinson', 'sx-cerebeloso'] },
      { id: '08-2', min: 80, tipo: 'nuevo', titulo: 'Meníngeo, hipertensión endocraneana, LCR y cefaleas', temas: ['sx-meningeo', 'hte', 'lcr', 'cefaleas'] },
      REPASO('08-3', ['06/12']),
    ],
  },
  // SEGUNDA VUELTA: recuperación activa, simulacros y errores (nada de releer apuntes completos)
  {
    fecha: '2026-12-09', corto: '09/12', vuelta: 2, titulo: 'Repaso ERA 1: respiratorio y cardiovascular', minutos: 195,
    bloques: [
      { id: '09-1', min: 85, tipo: 'repaso', titulo: 'Respiratorio sin mirar: cuadro comparativo de síndromes desde cero, después preguntas', temas: ['ef-torax', 'ruidos-agregados', 'asma', 'sx-condensacion', 'sx-atelectasia', 'sx-derrame', 'liquido-pleural', 'neumotorax', 'insuf-resp', 'hemoptisis'] },
      { id: '09-2', min: 85, tipo: 'repaso', titulo: 'Cardiovascular sin mirar: pulsos, ruidos, soplos, valvulopatías, IC', temas: ['pulso-arterial', 'pulso-venoso', 'ruidos-r1r2', 'ruidos-r3r4', 'soplos', 'estenosis-mitral', 'insuf-mitral', 'estenosis-aortica', 'insuf-aortica', 'ic', 'angor', 'sincope'] },
      REPASO('09-3', ['07/12']),
    ],
  },
  {
    fecha: '2026-12-10', corto: '10/12', vuelta: 2, titulo: 'Repaso ERA 2: digestivo, renal y neuro', minutos: 195,
    bloques: [
      { id: '10-1', min: 85, tipo: 'repaso', titulo: 'Digestivo y renal sin mirar', temas: ['ef-abdomen', 'ef-higado', 'ef-bazo', 'ictericia', 'hd', 'htp', 'ascitis', 'liquido-ascitico', 'nefrotico', 'nefritico', 'ira', 'erc', 'itu', 'orina'] },
      { id: '10-2', min: 85, tipo: 'repaso', titulo: 'Neurología sin mirar: examen completo y síndromes', temas: ['pc-I', 'pc-II', 'pc-VII', 'pc-VIII', 'taxia', 'sx-piramidal', 'parkinson', 'sx-cerebeloso', 'sx-meningeo', 'lcr'] },
      REPASO('10-3', ['08/12']),
    ],
  },
  {
    fecha: '2026-12-11', corto: '11/12', vuelta: 2, titulo: 'Simulacro oral y corrección de errores', minutos: 195,
    bloques: [
      { id: '11-1', min: 90, tipo: 'simulacro', titulo: 'Simulacro: sorteá 2 bolillas y respondé todo en voz alta', temas: [] },
      { id: '11-2', min: 80, tipo: 'errores', titulo: 'Corrección: banco de errores del simulacro', temas: [] },
      { id: '11-3', min: 25, tipo: 'errores', titulo: 'Errores pendientes de días anteriores', temas: [] },
    ],
  },
  {
    fecha: '2026-12-12', corto: '12/12', vuelta: 2, titulo: 'Temas débiles y maniobras', minutos: 195,
    bloques: [
      { id: '12-1', min: 90, tipo: 'debiles', titulo: 'Los temas que todavía no podés explicar sin mirar', temas: [] },
      { id: '12-2', min: 80, tipo: 'debiles', titulo: 'Maniobras: hacelas y explicalas en voz alta (con el video)', temas: [] },
      { id: '12-3', min: 25, tipo: 'errores', titulo: 'Errores de las tres materias: solo los de Semio acá', temas: [] },
    ],
  },
  {
    fecha: '2026-12-13', corto: '13/12', vuelta: 2, titulo: 'Simulacro final; repaso breve', minutos: 195,
    bloques: [
      { id: '13-1', min: 90, tipo: 'simulacro', titulo: 'Simulacro final: bolilla sorteada + repreguntas', temas: [] },
      { id: '13-2', min: 80, tipo: 'repaso', titulo: 'Memoria rápida: tríadas, criterios, valores y clasificaciones', temas: [] },
      { id: '13-3', min: 25, tipo: 'errores', titulo: 'Último repaso de lo que falla', temas: [] },
    ],
  },
  {
    fecha: '2026-12-14', corto: '14/12', vuelta: 2, titulo: 'FINAL DE SEMIOLOGÍA', minutos: 0,
    bloques: [{ id: '14-1', min: 0, tipo: 'examen', titulo: 'Examen final oral. Sin contenido nuevo.', temas: [] }],
  },
];

export const FECHA_FINAL = '2026-12-14';

export function diaPorCorto(c: string): Dia | undefined {
  return CRONOGRAMA.find((d) => d.corto === c);
}

/** Temas de los días que se repasan en un bloque de repaso. */
export function temasDeRepaso(b: Bloque): string[] {
  if (!b.repasa) return b.temas;
  const out: string[] = [];
  for (const c of b.repasa) for (const bl of diaPorCorto(c)?.bloques ?? []) for (const t of bl.temas) if (!out.includes(t)) out.push(t);
  return out;
}

/** Todos los temas «nuevos» de un día. */
export function temasDelDia(d: Dia): string[] {
  const out: string[] = [];
  for (const b of d.bloques) for (const t of b.temas) if (!out.includes(t)) out.push(t);
  return out;
}
