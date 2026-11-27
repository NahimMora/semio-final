/**
 * UNIDADES DE ESTUDIO: agrupan los temas del bolillero en bloques manejables.
 * Una unidad = una página («Para entenderlo» + «Para el oral») y un bloque del cronograma.
 * Los temas siguen siendo la base central (temas.ts): el bolillero enlaza a unidad#tema.
 *
 * `clases`: capítulos cuya clase visual (diapositivas + video de Tomás) es el «Para entenderlo».
 * `oral`: módulo del apunte para el oral (content/oral/<id>.ts). Sin módulo → «en preparación».
 * `anterior`: capítulos del proyecto anterior que se pueden consultar mientras se escribe el apunte nuevo.
 */
import type { SistemaId } from './temas';

export interface Unidad {
  id: string;
  era: 1 | 2;
  sistema: SistemaId;
  titulo: string;
  /** Lo que tenés que poder contestar, en una línea. */
  bajada: string;
  temas: string[];
  clases: string[];
  anterior?: string[];
}

export const UNIDADES: Unidad[] = [
  // ─── PRIMERA ERA ───
  { id: 'hc', era: 1, sistema: 'hc', titulo: 'Historia clínica', bajada: 'Definición, partes en orden y qué va en cada una.', temas: ['hc'], clases: ['hc-01'] },
  { id: 'signos', era: 1, sistema: 'signos', titulo: 'Signos y síntomas generales', bajada: 'Dolor, fiebre, disnea, cianosis y edema: mecanismo, tipos y cómo se interrogan.', temas: ['dolor', 'fiebre', 'disnea', 'cianosis', 'edema'], clases: ['sig-01'] },
  { id: 'vitales', era: 1, sistema: 'vitales', titulo: 'Examen general y signos vitales', bajada: 'Impresión general y la toma de TA, pulso, FR, temperatura y saturación.', temas: ['examen-general', 'signos-vitales'], clases: ['gen-01'] },
  { id: 'cabeza-cuello', era: 1, sistema: 'cyc', titulo: 'Cabeza y cuello', bajada: 'Cráneo, ojos (ojo rojo), oído, nariz, boca, TCS, ganglios, cuello y tiroides.', temas: ['ef-cabeza', 'ojo-rojo', 'ef-tcs-ganglios', 'ef-cuello-tiroides'], clases: ['cyc-01'] },
  { id: 'resp-examen', era: 1, sistema: 'resp', titulo: 'Respiratorio: motivos de consulta y examen del tórax', bajada: 'Tos, expectoración, hemoptisis; inspección, palpación, percusión, auscultación y ruidos.', temas: ['mc-resp', 'hemoptisis', 'ef-torax', 'ruidos-agregados'], clases: ['res-01'] },
  { id: 'resp-sindromes', era: 1, sistema: 'resp', titulo: 'Síndromes respiratorios', bajada: 'Obstructivos, parenquimatosos, pleurales e insuficiencia respiratoria, en un solo cuadro.', temas: ['asma', 'bronquitis-epoc', 'sx-condensacion', 'sx-atelectasia', 'sx-derrame', 'liquido-pleural', 'neumotorax', 'insuf-resp'], clases: [] },
  { id: 'cardio-mc', era: 1, sistema: 'cardio', titulo: 'Cardiovascular: motivos de consulta', bajada: 'Ángor, disnea y asma cardíaca, palpitaciones, síncope, edema y cianosis periférica.', temas: ['angor', 'mc-cardio', 'sincope'], clases: [] },
  { id: 'cardio-examen', era: 1, sistema: 'cardio', titulo: 'Examen cardiovascular: pulsos, ruidos y soplos', bajada: 'Choque de punta, pulso arterial y venoso, R1–R4 y caracteres de los soplos.', temas: ['ef-cardio', 'pulso-arterial', 'pulso-venoso', 'ruidos-r1r2', 'ruidos-r3r4', 'soplos'], clases: [] },
  { id: 'valvulopatias', era: 1, sistema: 'cardio', titulo: 'Valvulopatías', bajada: 'Estenosis e insuficiencia mitral y aórtica: mecanismo, signos y soplo.', temas: ['estenosis-mitral', 'insuf-mitral', 'estenosis-aortica', 'insuf-aortica'], clases: [] },
  { id: 'hta-ic', era: 1, sistema: 'cardio', titulo: 'Hipertensión arterial e insuficiencia cardíaca', bajada: 'Clasificación de la HTA; IC izquierda y derecha, NYHA y Framingham.', temas: ['hta', 'ic'], clases: [] },
  { id: 'anemia', era: 1, sistema: 'comp', titulo: 'Síndrome anémico e índices hematimétricos', bajada: 'Clínica, mecanismos compensadores, VCM, HCM, CHCM y clasificación.', temas: ['sx-anemico'], clases: [] },
  // ─── SEGUNDA ERA ───
  { id: 'dig-examen', era: 2, sistema: 'digestivo', titulo: 'Examen físico del abdomen', bajada: 'Orden del examen, pared, puntos dolorosos, hernias, intestino, hígado y bazo.', temas: ['ef-abdomen', 'pared-abdominal', 'ef-intestino', 'ef-higado', 'ef-bazo'], clases: ['dig-05'], anterior: ['dig-05'] },
  { id: 'dig-alto', era: 2, sistema: 'digestivo', titulo: 'Digestivo alto y hemorragia digestiva', bajada: 'Disfagia, vómitos, síndromes esofágico, ulceroso y pilórico; HDA y HDB.', temas: ['disfagia', 'vomitos', 'digestivo-alto', 'ulcera-gastritis', 'hd'], clases: ['dig-01', 'dig-06', 'dig-07', 'dig-08', 'dig-12'], anterior: ['dig-01', 'dig-06', 'dig-07', 'dig-08', 'dig-12'] },
  { id: 'abdomen-agudo', era: 2, sistema: 'digestivo', titulo: 'Abdomen agudo y peritonitis', bajada: 'Tipos de dolor, los cinco abdómenes agudos, signos peritoneales y peritonitis.', temas: ['abdomen-agudo', 'peritonitis'], clases: ['dig-02', 'dig-10'], anterior: ['dig-02', 'dig-10', 'dig-15'] },
  { id: 'constipacion', era: 2, sistema: 'digestivo', titulo: 'Constipación', bajada: 'Definición por Roma, causas, Bristol y signos de alarma.', temas: ['constipacion'], clases: ['dig-03'], anterior: ['dig-03'] },
  { id: 'higado', era: 2, sistema: 'digestivo', titulo: 'Ictericia, cirrosis, hipertensión portal y ascitis', bajada: 'Bilirrubina y tipos de ictericia; cirrosis y Child-Pugh; HTP; ascitis y su líquido.', temas: ['ictericia', 'cirrosis', 'htp', 'ascitis', 'liquido-ascitico'], clases: ['dig-04', 'dig-13', 'dig-14'], anterior: ['dig-04', 'dig-13', 'dig-14'] },
  { id: 'renal-examen', era: 2, sistema: 'renal', titulo: 'Examen renal, orina e infección urinaria', bajada: 'Maniobras renales, análisis de orina, ITU alta y baja.', temas: ['ef-renal', 'orina', 'itu'], clases: ['ren-01', 'ren-02', 'ren-06'], anterior: ['ren-01', 'ren-02', 'ren-06'] },
  { id: 'renal-sindromes', era: 2, sistema: 'renal', titulo: 'Síndromes renales e insuficiencia renal', bajada: 'Nefrótico vs nefrítico; IRA (RIFLE, AKIN, pre/renal/pos) y ERC (KDIGO, AEIOU).', temas: ['nefrotico', 'nefritico', 'ira', 'erc'], clases: ['ren-03', 'ren-04', 'ren-05'], anterior: ['ren-03', 'ren-04', 'ren-05'] },
  { id: 'neuro-examen', era: 2, sistema: 'neuro', titulo: 'Examen neurológico', bajada: 'El mapa del examen: conciencia y Glasgow, fuerza, tono, reflejos, sensibilidad, taxia, gnosias, praxias y marcha.', temas: ['conciencia-glasgow', 'fuerza', 'tono', 'reflejos-profundos', 'reflejos-superficiales', 'sens-superficial', 'sens-profunda', 'taxia', 'gnosias-praxias', 'postura-marcha'], clases: ['neu-02', 'neu-06'], anterior: ['neu-02', 'neu-05', 'neu-06'] },
  { id: 'pares', era: 2, sistema: 'neuro', titulo: 'Pares craneales', bajada: 'Los doce pares: qué hace cada uno, cómo se explora y qué se encuentra.', temas: ['pc-I', 'pc-II', 'pc-oculomotores', 'pc-V', 'pc-VII', 'pc-VIII', 'pc-IX-X', 'pc-XI', 'pc-XII'], clases: ['neu-03', 'neu-04'], anterior: ['neu-03', 'neu-04'] },
  { id: 'neuro-sindromes', era: 2, sistema: 'neuro', titulo: 'Síndromes motores', bajada: 'Piramidal, segunda motoneurona, extrapiramidal (Parkinson) y cerebeloso en un cuadro.', temas: ['sx-piramidal', 'segunda-motoneurona', 'parkinson', 'sx-cerebeloso'], clases: ['neu-05'], anterior: ['neu-05'] },
  { id: 'meninges', era: 2, sistema: 'neuro', titulo: 'Síndrome meníngeo, HTE, LCR y cefaleas', bajada: 'Signos meníngeos, tríada de HTE, punción lumbar y patrones de LCR; cefaleas.', temas: ['sx-meningeo', 'hte', 'lcr', 'cefaleas'], clases: ['neu-06', 'neu-01'], anterior: ['neu-06', 'neu-01'] },
  { id: 'soma', era: 2, sistema: 'soma', titulo: 'SOMA: exploración articular', bajada: 'Sistemática del examen articular y las maniobras por articulación.', temas: ['ef-articulaciones'], clases: [] },
];

export const UNIDAD_POR_ID: Record<string, Unidad> = Object.fromEntries(UNIDADES.map((u) => [u.id, u]));

/** Unidad a la que pertenece cada tema. */
export const UNIDAD_DE_TEMA: Record<string, string> = Object.fromEntries(UNIDADES.flatMap((u) => u.temas.map((t) => [t, u.id])));
