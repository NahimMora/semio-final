import type { Chapter, ChapterMeta, SystemMeta } from '@/types';

/**
 * Programa completo de la plataforma. El orden sigue la secuencia pedagógica de las clases.
 * `status: 'published'` solo se usa cuando el capítulo está completo, probado y desplegado.
 * Los capítulos se cargan de forma diferida desde content/chapters/<id>/index.tsx.
 */
const ch = (
  systemId: string,
  id: string,
  title: string,
  short: string,
  blurb: string,
  sourcesLabel: string,
  status: ChapterMeta['status'] = 'soon',
): ChapterMeta => ({ id, systemId, title, short, blurb, sourcesLabel, status });

export const SYSTEMS: SystemMeta[] = [
  // ═════════════ PRIMERA ERA ═════════════
  {
    id: 'hc', era: 1,
    title: 'Historia clínica',
    subtitle: 'Estructura, anamnesis, motivo de consulta, enfermedad actual y antecedentes',
    tone: 'sky',
    icon: 'book',
    description: 'El tema que aparece en 19 de las 20 bolillas: definición, estructura completa, anamnesis y elaboración diagnóstica.',
    chapters: [
      ch('hc', 'hc-01', 'Historia clínica', 'Todas las bolillas menos la 14', 'Definición, las cinco características, la estructura en orden, cada parte de la anamnesis con ejemplos y la respuesta modelo para el oral.', 'Argente cap. 6–7 · Merlín', 'published'),
    ],
  },
  {
    id: 'signos', era: 1,
    title: 'Signos y síntomas generales',
    subtitle: 'Dolor, fiebre, disnea, cianosis, edema e ictericia',
    tone: 'rose',
    icon: 'pulse',
    description: 'Los síntomas cardinales: por qué aparecen, cómo se interrogan y cómo se clasifican.',
    chapters: [
      ch('signos', 'sig-01', 'Dolor y fiebre', 'Bolillas 3 y 11', 'Vías del dolor, tipos y ALICIA; termorregulación, curvas febriles y fiebre de origen desconocido.', 'Argente cap. 8–9 · Apunte de Ortega p2–4 y p21–23'),
      ch('signos', 'sig-02', 'Disnea, cianosis y edema', 'Bolillas 3, 4, 8, 13, 14, 16 y 18', 'Mecanismos de la disnea y su clase funcional; cianosis central y periférica; fuerzas de Starling y tipos de edema.', 'Argente cap. 10–12 · Apunte de Ortega p5–9 y p18–20'),
      { ...ch('signos', 'ictericia-link', 'Ictericia (desarrollada en Digestivo)', 'Bolillas 7, 12, 16 y 17', 'Metabolismo de la bilirrubina e ictericias pre, intra y poshepáticas.', 'Apunte de Ortega p10–15'), link: '/capitulo/dig-04' },
    ],
  },
  {
    id: 'vitales', era: 1,
    title: 'Examen general y signos vitales',
    subtitle: 'Impresión general, presión arterial, pulso, frecuencia respiratoria, temperatura y saturación',
    tone: 'sky',
    icon: 'heart',
    description: 'Técnica, valores normales y alteraciones de los signos vitales; impresión general del paciente.',
    chapters: [
      ch('vitales', 'gen-01', 'Examen físico general y signos vitales', 'Bolilla 12', 'Facies, actitud, decúbito, constitución; toma de TA, FC, FR, temperatura y saturación paso a paso.', 'Argente cap. 16–17 · Califano cap. 10 · Merlín'),
    ],
  },
  {
    id: 'cyc', era: 1,
    title: 'Cabeza y cuello',
    subtitle: 'Cráneo, ojos, oídos, nariz, boca, TCS, ganglios, cuello y tiroides',
    tone: 'lilac',
    icon: 'eye',
    description: 'Exploración de la cabeza (con síndrome de ojo rojo), del tejido celular subcutáneo, los ganglios, el cuello y la tiroides.',
    chapters: [
      ch('cyc', 'cyc-01', 'Cráneo, ojos, oído, nariz y boca', 'Bolilla 17', 'Exploración de la cabeza y síndrome de ojo rojo.', 'Argente cap. 25 · Califano cap. 2'),
      ch('cyc', 'cyc-02', 'TCS, ganglios, cuello y tiroides', 'Bolillas 4, 5 y 16', 'Tejido celular subcutáneo, grupos ganglionares y sus caracteres, cuello y palpación tiroidea.', 'Argente cap. 20, 22 y 26 · Califano cap. 2'),
    ],
  },
  {
    id: 'resp', era: 1,
    title: 'Aparato respiratorio',
    subtitle: 'Motivos de consulta, examen del tórax y síndromes',
    tone: 'sky',
    icon: 'lungs',
    description: 'Tos, expectoración y hemoptisis; examen del tórax y ruidos; síndromes obstructivos, parenquimatosos y pleurales; insuficiencia respiratoria.',
    chapters: [
      ch('resp', 'res-01', 'Motivos de consulta respiratorios', 'Bolilla 20', 'Tos, expectoración, hemoptisis, disnea y dolor torácico.', 'Argente cap. 33 · Apunte de Ortega p72–77 · Merlín'),
      ch('resp', 'res-02', 'Examen físico del tórax y ruidos respiratorios', 'Bolillas 3, 6 y 14', 'Inspección, palpación, percusión y auscultación; ruidos normales y agregados.', 'Argente cap. 35 · Califano cap. 3 · Apunte de Ortega p78–89'),
      ch('resp', 'res-03', 'Síndromes obstructivos: asma, bronquitis y EPOC', 'Bolillas 13 y 20', 'Broncoespasmo, tríada del asma, crisis y gravedad; bronquitis crónica y enfisema.', 'Argente cap. 36-1 · Apunte de Ortega p101–108 · Merlín'),
      ch('resp', 'res-04', 'Síndromes parenquimatosos: condensación y atelectasia', 'Bolillas 1, 7 y 15', 'Neumonía típica y atípica, condensación vs atelectasia.', 'Argente cap. 36-2 · Apunte de Ortega p109–114 · Merlín'),
      ch('resp', 'res-05', 'Síndromes pleurales: derrame, líquido pleural y neumotórax', 'Bolillas 2, 6, 10 y 19', 'Derrame pleural, criterios de Light, neumotórax simple e hipertensivo.', 'Argente cap. 36-3 · Apunte de Ortega p115–122 · Merlín'),
      ch('resp', 'res-06', 'Insuficiencia respiratoria', 'Bolilla 18', 'Tipos I y II, aguda y crónica, gases en sangre.', 'Argente cap. 36-7 · Apunte de Ortega p95–100'),
    ],
  },
  {
    id: 'cardio', era: 1,
    title: 'Aparato cardiovascular',
    subtitle: 'Motivos de consulta, pulsos, ruidos, soplos, valvulopatías, HTA e insuficiencia cardíaca',
    tone: 'rose',
    icon: 'heart',
    description: 'Ángor, síncope y palpitaciones; pulso arterial y venoso; R1 a R4 y soplos; valvulopatías; HTA; insuficiencia cardíaca.',
    chapters: [
      ch('cardio', 'car-01', 'Motivos de consulta: ángor, síncope, palpitaciones', 'Bolillas 7 y 12', 'Ángor, asma cardíaca, palpitaciones, síncope, edema circulatorio y cianosis periférica.', 'Argente cap. 27 · Apunte de Ortega p129–141 · Merlín'),
      ch('cardio', 'car-02', 'Examen cardiovascular, pulso arterial y venoso', 'Bolillas 3, 4 y 19', 'Precordio y choque de punta; caracteres del pulso; ondas del pulso venoso y PVY.', 'Argente cap. 29 · Califano cap. 4–6 · Apunte de Ortega p142–175'),
      ch('cardio', 'car-03', 'Ruidos cardíacos y soplos', 'Bolillas 2, 9 y 17', 'R1, R2, desdoblamientos, R3 y R4; caracteres de los soplos.', 'Argente cap. 29 · Apunte de Ortega p142–162 · Merlín'),
      ch('cardio', 'car-04', 'Valvulopatías', 'Bolillas 1, 6, 9, 11, 15 y 18', 'Estenosis e insuficiencia mitral y aórtica: fisiopatología, signos y soplos.', 'Argente cap. 30-4 · Apunte de Ortega p196–206 · Merlín'),
      ch('cardio', 'car-05', 'Hipertensión arterial', 'Complementario', 'Definición, clasificación, toma correcta y daño de órgano blanco.', 'Argente cap. 30-7 · Apunte de Ortega p176–181 · Merlín'),
      ch('cardio', 'car-06', 'Insuficiencia cardíaca', 'Bolilla 14', 'Fisiopatología, izquierda y derecha, NYHA, estadios y Framingham.', 'Argente cap. 30-2 · Apunte de Ortega p188–195 · Merlín'),
    ],
  },
  {
    id: 'comp', era: 1,
    title: 'Contenidos complementarios',
    subtitle: 'Síndrome anémico e índices hematimétricos',
    tone: 'gold',
    icon: 'drop',
    description: 'Lo que el bolillero pide y no entra en los bloques anteriores.',
    chapters: [
      ch('comp', 'com-01', 'Síndrome anémico e índices hematimétricos', 'Bolilla 5', 'Mecanismos compensadores, clínica, VCM, HCM, CHCM, ADE y reticulocitos.', 'Apunte de Ortega p290–295'),
    ],
  },
  // ═════════════ SEGUNDA ERA ═════════════
  {
    id: 'digestivo', era: 2,
    title: 'Sistema digestivo',
    subtitle: 'Motivos de consulta, examen físico y grandes síndromes',
    tone: 'rose',
    icon: 'stomach',
    description:
      'La unidad que el profesor define como una de las más preguntadas en parciales y finales: motivos de consulta, examen físico, síndromes del tubo digestivo, hígado, páncreas, vías biliares y emergencias.',
    pdf: 'pdf/manual-digestivo.pdf',
    chapters: [
      ch('digestivo', 'dig-01', 'Vómitos, disfagia y dispepsia', 'MC I · Tubo digestivo alto', 'Tipos de vómito, hematemesis vs hemoptisis, Mallory-Weiss, acalasia y signos de alarma: lo que toma el profe.', 'MC Digestivo 1–2 · Hemorragias 1 · Libro', 'published'),
      ch('digestivo', 'dig-02', 'Dolor abdominal y abdomen agudo', 'MC II · Dolor abdominal', 'Dolor visceral, somático y referido; los cinco abdómenes agudos quirúrgicos, Murphy, Jobert, Cullen y Grey-Turner.', 'MC Digestivo 2–4', 'published'),
      ch('digestivo', 'dig-03', 'Diarrea, constipación y trastornos anorrectales', 'MC III · Tubo digestivo bajo', 'Diarrea alta y baja, síndrome disentérico, criterios de Roma, escala de Bristol, pujo y tenesmo.', 'MC Digestivo 5–6', 'published'),
      ch('digestivo', 'dig-04', 'Ictericia', 'Repaso clave', 'Metabolismo de la bilirrubina e ictericias pre, intra y poshepáticas: el profesor insiste en repasarla.', 'MC Digestivo 6 · Libro p10–15', 'published'),
      ch('digestivo', 'dig-05', 'Examen físico del aparato digestivo', 'Examen físico', 'Topografía, inspección, auscultación, percusión y palpación; ascitis, puntos dolorosos, hígado, bazo y vesícula con video.', 'EF Digestivo 1–2 · Pizarras · Video Argente', 'published'),
      ch('digestivo', 'dig-06', 'Síndrome esofágico', 'Tubo digestivo', 'Los cinco síntomas, etiologías, ERGE y Barrett, acalasia, cáncer y cómo se estudia el esófago.', 'Clase Sd. esofágico · Libro p368–369', 'published'),
      ch('digestivo', 'dig-07', 'Síndrome ulceroso y gastritis', 'Tubo digestivo', 'Úlcera péptica, Helicobacter pylori y AINE, complicaciones y gastritis A vs B.', 'Clases Sd. ulceroso 1–3 · Libro p370–372', 'published'),
      ch('digestivo', 'dig-08', 'Síndrome pilórico e íleo', 'Tubo digestivo', 'Obstrucción del vaciamiento gástrico (vómito, bazuqueo, SNG, VEDA) e íleo paralítico vs mecánico.', 'Clases Sd. pilórico · Íleo · Libro p375–377', 'published'),
      ch('digestivo', 'dig-09', 'Malabsorción e intestino irritable', 'Tubo digestivo', 'Fases de la malabsorción, esteatorrea, Van de Kamer y D-xilosa; intestino irritable y criterios de Roma.', 'Clases Malabsorción 1–2 · SII · Libro p378–382', 'published'),
      ch('digestivo', 'dig-10', 'Peritonitis', 'Emergencias', 'Plastrón, peritonitis primaria (PBE), secundaria y terciaria; paracentesis y más de 250 neutrófilos.', 'Clases Peritonitis 1–2 · Libro p383', 'published'),
      ch('digestivo', 'dig-11', 'Síndromes vesiculares', 'Vías biliares', 'El viaje del cálculo: litiasis, cólico, colecistitis, Mirizzi, coledocolitiasis, Charcot y pancreatitis biliar.', 'Clase Síndromes vesiculares · Libro p385–387', 'published'),
      ch('digestivo', 'dig-12', 'Hemorragias digestivas', 'Emergencias', 'Clases I a IV, ortostatismo, alta vs baja (úlcera vs hemorroides), melena, hematoquecia y estudios.', 'Clases Hemorragias 1–2 · Libro p389–390', 'published'),
      ch('digestivo', 'dig-13', 'Cirrosis e hipertensión portal', 'Hígado', 'Cirrosis, estigmas y Child-Pugh (BATEA); hipertensión portal, colaterales, ascitis y GASA.', 'Clases Cirrosis 1–2 · HTP 1–2', 'published'),
      ch('digestivo', 'dig-14', 'Insuficiencia hepática', 'Hígado', 'Qué deja de hacer el hígado, O’Grady, encefalopatía hepática (amoníaco, asterixis) y aguda vs crónica.', 'Clase Insuficiencia hepática', 'published'),
      ch('digestivo', 'dig-15', 'Pancreatitis aguda', 'Páncreas', 'La bilis que vuelve: causas, hemicinturón, Cullen y Grey-Turner, hemoconcentración, Ranson y Balthazar.', 'Clases Pancreatitis 1–2', 'published'),
    ],
  },
  {
    id: 'renal', era: 2,
    title: 'Sistema nefrourológico',
    subtitle: 'Motivos de consulta, examen físico y síndromes renales',
    tone: 'sky',
    icon: 'kidney',
    description: 'Del motivo de consulta al síndrome: edema, alteraciones de la orina, síndromes nefrítico y nefrótico, insuficiencia renal, infección urinaria y litiasis.',
    pdf: 'pdf/manual-renal.pdf',
    chapters: [
      ch('renal', 'ren-01', 'Motivos de consulta nefrourológicos', 'Motivos de consulta', 'Edema renal, obstrucción urinaria, poliuria, hematuria (dismórfica vs isomórfica, tres vasos) y trastornos de la micción.', 'MC Renal 1–2 · Libro p445–454', 'published'),
      ch('renal', 'ren-02', 'Examen físico nefrourológico', 'Examen físico', 'El paciente con proteinuria, los colores de la orina y el examen: Guyon, Montenegro, Israel, Glenard, puñopercusión y puntos ureterales.', 'MC Renal 3 · Libro p459–460', 'published'),
      ch('renal', 'ren-03', 'Síndrome nefrítico', 'Síndromes', 'Capilares que se rompen: las 3 H (hematuria, HTA, hiperazoemia), postestreptocócica y complicaciones.', 'Clase Sd. nefrítico · Libro p442–444', 'published'),
      ch('renal', 'ren-04', 'Síndrome nefrótico', 'Síndromes', 'Membrana basal permeable: proteinuria > 3,5 g, hipoalbuminemia, edema e hiperlipidemia; causas por edad y el círculo del edema.', 'Clase Sd. nefrótico · Libro p440–442', 'published'),
      ch('renal', 'ren-05', 'Insuficiencia renal', 'Síndromes', 'Aguda (RIFLE/AKIN, prerrenal/renal/posrenal, sodio urinario) y crónica (hiperfiltración, estadios, síndrome urémico).', 'Clases IR 1–3 · Libro p429–439', 'published'),
      ch('renal', 'ren-06', 'Infección urinaria', 'Síndromes', 'Vía ascendente, gérmenes (E. coli, Proteus, Pseudomonas), cistitis vs pielonefritis, ITU complicada, recaída vs reinfección.', 'Clases ITU 1–2', 'published'),
      ch('renal', 'ren-07', 'Litiasis renoureteral', 'Síndromes', 'Cómo se forma (magnesio y citrato), tipos de cálculos (oxalato, úrico, estruvita), el cólico y el diagnóstico.', 'Clases Litiasis 1–2', 'published'),
    ],
  },
  {
    id: 'neuro', era: 2,
    title: 'Sistema nervioso',
    subtitle: 'Motivos de consulta, pares craneales y síndromes neurológicos',
    tone: 'lilac',
    icon: 'brain',
    description: 'Motivos de consulta neurológicos, examen de los pares craneales y los grandes síndromes: piramidal, segunda motoneurona, extrapiramidal, cerebeloso, meníngeo e hipertensión endocraneana.',
    pdf: 'pdf/manual-neuro.pdf',
    chapters: [
      ch('neuro', 'neu-01', 'Motivos de consulta neurológicos I', 'Motivos de consulta', 'Deterioro cognitivo, pérdida del conocimiento, cefaleas (vía del trigémino, tálamo, primarias y neuralgia) y mareo, vértigo y equilibrio.', 'Clases MC Neurología 1–2', 'published'),
      ch('neuro', 'neu-02', 'Motivos de consulta neurológicos II', 'Motivos de consulta', 'Movimientos involuntarios (temblor, corea, fasciculaciones), debilidad (motoneuronas, neuropatías, Guillain-Barré, miopatías), convulsiones y sueño.', 'Clases MC Neurología 3–4', 'published'),
      ch('neuro', 'neu-03', 'Pares craneales I', 'Pares craneales', 'Clasificación y origen; olfatorio; óptico (vía óptica, hemianopsias); oculomotores III, IV y VI, pupila y nistagmo.', 'Clases Pares craneales 1–3', 'published'),
      ch('neuro', 'neu-04', 'Pares craneales II', 'Pares craneales', 'Trigémino, facial (central y periférica), vestibulococlear (Weber y Rinne), IX a XII y la inervación de la lengua.', 'Clases Pares craneales 4–6', 'published'),
      ch('neuro', 'neu-05', 'Motilidad y síndromes motores', 'Síndromes', 'Ataxia vestibular, cerebelosa y cordonal; piramidal (1.ª y 2.ª motoneurona, alternas); Parkinson y cerebeloso con sus tríadas.', 'Clases Síndromes del SN 1–4 · Meet 24/10 · Libro p493–505', 'published'),
      ch('neuro', 'neu-07', 'Examen neurológico integrador: conciencia, taxia, gnosias y praxias', 'Bolillas 9, 11, 14, 16 y 19', 'Orientación y Glasgow; el examen neurológico completo en orden; taxia, gnosias y praxias explicadas desde cero; fuerza, tono, reflejos y marcha.', 'Argente · Califano cap. 8 · Apunte de Ortega p461–488'),
      ch('neuro', 'neu-07', 'Examen neurológico integrador: conciencia, taxia, gnosias y praxias', 'Bolillas 9, 11, 14, 16 y 19', 'Orientación y Glasgow; el examen neurológico completo en orden; taxia, gnosias y praxias explicadas desde cero; fuerza, tono, reflejos y marcha.', 'Argente · Califano cap. 8 · Apunte de Ortega p461–488'),
      ch('neuro', 'neu-06', 'Otros síndromes neurológicos', 'Síndromes', 'Sensibilidad, hipertensión endocraneana (tríada, papila, VI par, Cushing, hernias), punción lumbar y LCR, síndrome meníngeo.', 'Clases Síndromes del SN 5–7 · REC 26/10 · Meníngeo y osteo', 'published'),
    ],
  },
  {
    id: 'maniobras', era: 2,
    title: 'Examen físico y maniobras',
    subtitle: 'Biblioteca práctica: cada maniobra en su fragmento exacto de video',
    tone: 'mint',
    icon: 'hand',
    description: 'Maniobras organizadas por aparato, región y objetivo, con el fragmento exacto del video de referencia, técnica, hallazgos e interpretación.',
    pdf: 'pdf/guia-maniobras.pdf',
    chapters: [
      { ...ch('maniobras', 'man-dig', 'Maniobras del examen digestivo', 'Digestivo', 'En la biblioteca: inspección, auscultación, percusión y palpación del abdomen; hígado, bazo y vesícula.', 'Video Argente 19–27 · EF Digestivo'), link: '/maniobras?sistema=digestivo' },
      { ...ch('maniobras', 'man-ren', 'Maniobras del examen renal', 'Renal', 'En la biblioteca: palpación renal (Guyon, Montenegro, Israel, Glenard), puñopercusión y puntos renoureterales.', 'Video Argente 28 · MC Renal 3'), link: '/maniobras?sistema=renal' },
      { ...ch('maniobras', 'man-neu', 'Maniobras del examen neurológico', 'Neurología', 'En la biblioteca: 25 maniobras con su fragmento del video (pares craneales, motilidad, reflejos, sensibilidad, taxia y signos meníngeos).', 'Video Argente 30–35 · Clases de Ortega'), link: '/maniobras?sistema=neuro' },
    ],
  },
  {
    id: 'soma', era: 2,
    title: 'Soma',
    subtitle: 'Examen osteoarticulomuscular práctico',
    tone: 'peach',
    icon: 'bone',
    description: 'Enfoque esencialmente práctico: técnica, ejecución e interpretación de las maniobras osteoarticulares.',
    chapters: [
      { ...ch('soma', 'soma-01', 'Maniobras osteoarticulares', 'Soma', 'En la biblioteca: 18 maniobras de columna, hombro, codo, muñeca, cadera, rodilla y tobillo (12 con su fragmento del video).', 'Video Argente 4 · Clase meníngeo y osteo · Libro p60–63'), link: '/maniobras?sistema=soma' },
    ],
  },
];

const loaders = import.meta.glob<{ default: Chapter }>('./chapters/*/index.tsx');

export function chapterLoader(id: string): (() => Promise<{ default: Chapter }>) | undefined {
  return loaders[`./chapters/${id}/index.tsx`];
}

export const ALL_CHAPTERS: ChapterMeta[] = SYSTEMS.flatMap((s) => s.chapters);

export function findChapter(id: string): ChapterMeta | undefined {
  return ALL_CHAPTERS.find((c) => c.id === id);
}

export function findSystem(id: string): SystemMeta | undefined {
  return SYSTEMS.find((s) => s.id === id);
}

/** Un capítulo solo se ofrece como disponible si está marcado como publicado y su contenido existe. */
export function isAvailable(c: ChapterMeta): boolean {
  return c.status === 'published' && Boolean(chapterLoader(c.id));
}

export function publishedChapters(): ChapterMeta[] {
  return ALL_CHAPTERS.filter(isAvailable);
}

export function neighbours(id: string): { prev?: ChapterMeta; next?: ChapterMeta } {
  const list = ALL_CHAPTERS;
  const i = list.findIndex((c) => c.id === id);
  return { prev: i > 0 ? list[i - 1] : undefined, next: i >= 0 && i < list.length - 1 ? list[i + 1] : undefined };
}
