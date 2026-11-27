/**
 * BASE CENTRAL DE TEMAS DEL FINAL.
 * Cada tema existe una sola vez. El bolillero, el cronograma, la matriz de cobertura, el progreso
 * y las fichas para ChatGPT apuntan a estos ids: no se duplica contenido.
 *
 * Colores (se derivan, no se escriben a mano):
 *  - ROJO   = el tema figura en el bolillero oficial (bolillero.ts).
 *  - NARANJA = hay evidencia documentada de que se pregunta (campo `frecuente`, con fuente).
 *  - AZUL   = complementario: no está en el bolillero pero hace falta para entender o para las repreguntas.
 */

export type SistemaId =
  | 'hc'
  | 'signos'
  | 'vitales'
  | 'cyc'
  | 'resp'
  | 'cardio'
  | 'digestivo'
  | 'renal'
  | 'neuro'
  | 'soma'
  | 'comp';

export interface SistemaFinal {
  id: SistemaId;
  era: 1 | 2;
  titulo: string;
  corto: string;
  tone: 'rose' | 'sky' | 'lilac' | 'mint' | 'peach' | 'gold';
  icon: string;
  /** Apunte PDF del sistema (cuando existe). */
  pdf?: string;
}

export const SISTEMAS_FINAL: SistemaFinal[] = [
  { id: 'hc', era: 1, titulo: 'Historia clínica', corto: 'HC', tone: 'sky', icon: 'book' },
  { id: 'signos', era: 1, titulo: 'Signos y síntomas generales', corto: 'Signos y síntomas', tone: 'rose', icon: 'pulse' },
  { id: 'vitales', era: 1, titulo: 'Examen general y signos vitales', corto: 'Signos vitales', tone: 'sky', icon: 'heart' },
  { id: 'cyc', era: 1, titulo: 'Cabeza y cuello', corto: 'Cabeza y cuello', tone: 'lilac', icon: 'eye' },
  { id: 'resp', era: 1, titulo: 'Aparato respiratorio', corto: 'Respiratorio', tone: 'sky', icon: 'lungs' },
  { id: 'cardio', era: 1, titulo: 'Aparato cardiovascular', corto: 'Cardiovascular', tone: 'rose', icon: 'heart' },
  { id: 'digestivo', era: 2, titulo: 'Aparato digestivo', corto: 'Digestivo', tone: 'rose', icon: 'stomach', pdf: 'pdf/manual-digestivo.pdf' },
  { id: 'renal', era: 2, titulo: 'Aparato nefrourológico', corto: 'Renal', tone: 'sky', icon: 'kidney', pdf: 'pdf/manual-renal.pdf' },
  { id: 'neuro', era: 2, titulo: 'Sistema nervioso', corto: 'Neurología', tone: 'lilac', icon: 'brain', pdf: 'pdf/manual-neuro.pdf' },
  { id: 'soma', era: 2, titulo: 'SOMA (osteoarticular)', corto: 'SOMA', tone: 'peach', icon: 'bone' },
  { id: 'comp', era: 1, titulo: 'Contenidos complementarios', corto: 'Complementarios', tone: 'gold', icon: 'drop' },
];

/** Evidencia de que un tema se pregunta. Nunca se inventa: siempre con fuente verificable. */
export interface Evidencia {
  quien: 'ortega' | 'merlin' | 'otro-docente' | 'oral-companeras';
  nota: string;
  fuente: string;
}

/** Estado de DESARROLLO del contenido en la plataforma (no confundir con el progreso de estudio). */
export type EstadoDesarrollo = 'listo' | 'parcial' | 'pendiente';

export interface Tema {
  id: string;
  titulo: string;
  sistema: SistemaId;
  /** Qué abarca, en una línea. */
  resumen: string;
  /** Dónde se estudia: capítulos de la plataforma (id) y, si hace falta, qué parte. */
  capitulos: { id: string; parte?: string }[];
  /** Maniobras de la biblioteca (content/maneuvers). */
  maniobras?: string[];
  frecuente?: Evidencia[];
  estado: EstadoDesarrollo;
  /** Lo que todavía falta, dicho con honestidad. */
  falta?: string;
}


export const TEMAS: Tema[] = [
  /* ─────────────── PRIMERA ERA ─────────────── */
  // Historia clínica
  { id: 'hc', titulo: 'Historia clínica', sistema: 'hc', resumen: 'Definición, características, estructura completa, anamnesis (próxima, remota, sistémica), motivo de consulta, enfermedad actual, antecedentes y cómo se presenta en el oral.', capitulos: [{ id: 'hc-01' }], estado: 'listo' },

  // Signos y síntomas generales
  { id: 'dolor', titulo: 'Dolor', sistema: 'signos', resumen: 'Vías del dolor, tipos (somático, visceral, referido, neuropático) y semiología completa del dolor (ALICIA).', capitulos: [{ id: 'sig-01' }], estado: 'listo' },
  { id: 'fiebre', titulo: 'Fiebre', sistema: 'signos', resumen: 'Termorregulación, pirógenos, períodos, curvas térmicas, fiebre de origen desconocido, hipertermia.', capitulos: [{ id: 'sig-01' }], estado: 'listo' },
  { id: 'disnea', titulo: 'Disnea', sistema: 'signos', resumen: 'Mecanismos, clasificación (NYHA/mMRC), disnea respiratoria vs cardíaca, ortopnea, DPN, trepopnea, platipnea.', capitulos: [{ id: 'sig-02' }], estado: 'listo' },
  { id: 'cianosis', titulo: 'Cianosis', sistema: 'signos', resumen: 'Hemoglobina reducida > 5 g/dL; central, periférica y mixta; cómo distinguirlas; falsas cianosis.', capitulos: [{ id: 'sig-02' }], estado: 'listo' },
  { id: 'edema', titulo: 'Edema', sistema: 'signos', resumen: 'Fuerzas de Starling, edema cardíaco, renal, hepático, carencial, linfático; fóvea; edema circulatorio.', capitulos: [{ id: 'sig-02' }, { id: 'ren-01', parte: 'edema renal' }], estado: 'listo' },
  { id: 'ictericia', titulo: 'Ictericia', sistema: 'signos', resumen: 'Metabolismo de la bilirrubina; prehepática, hepática y poshepática; síndrome colestásico; diferencial.', capitulos: [{ id: 'dig-04' }], estado: 'listo' },

  // Examen general y signos vitales
  { id: 'signos-vitales', titulo: 'Toma de los signos vitales', sistema: 'vitales', resumen: 'Presión arterial, frecuencia cardíaca, frecuencia respiratoria, temperatura y saturación: técnica, valores normales y alteraciones.', capitulos: [{ id: 'gen-01' }], estado: 'listo' },
  { id: 'examen-general', titulo: 'Examen físico general', sistema: 'vitales', resumen: 'Impresión general: conciencia, facies, actitud, decúbito, marcha, constitución, estado nutricional e hidratación, piel y faneras.', capitulos: [{ id: 'gen-01' }], estado: 'listo' },

  // Cabeza y cuello
  { id: 'ef-cabeza', titulo: 'Exploración física del cráneo, ojos, oído, nariz y boca', sistema: 'cyc', resumen: 'Cráneo, ojos (y síndrome de ojo rojo), oídos, nariz, boca y orofaringe: técnica y hallazgos.', capitulos: [{ id: 'cyc-01' }], maniobras: ['boca-orofaringe', 'reflejos-pupilares', 'fondo-de-ojo'], estado: 'listo' },
  { id: 'ojo-rojo', titulo: 'Síndrome de ojo rojo', sistema: 'cyc', resumen: 'Conjuntivitis, queratitis, uveítis, glaucoma agudo, hemorragia subconjuntival: inyección conjuntival vs ciliar y signos de alarma.', capitulos: [{ id: 'cyc-01' }], estado: 'listo' },
  { id: 'ef-tcs-ganglios', titulo: 'Exploración del tejido celular subcutáneo y los ganglios linfáticos', sistema: 'cyc', resumen: 'TCS (distribución, edema, nódulos, enfisema) y ganglios: grupos, técnica, caracteres semiológicos (tamaño, consistencia, dolor, movilidad) y significado.', capitulos: [{ id: 'cyc-02' }], maniobras: ['ganglios-supraclaviculares'], estado: 'listo' },
  { id: 'ef-cuello-tiroides', titulo: 'Exploración física del cuello y la glándula tiroides', sistema: 'cyc', resumen: 'Inspección y palpación del cuello, pulsos y yugulares, tiroides (abordaje anterior y posterior, deglución), bocio y nódulos.', capitulos: [{ id: 'cyc-02' }], estado: 'listo' },

  // Respiratorio
  { id: 'mc-resp', titulo: 'Motivos de consulta respiratorios', sistema: 'resp', resumen: 'Tos, expectoración (tipos), disnea, dolor torácico (pleurítico vs otros), hemoptisis.', capitulos: [{ id: 'res-01' }], estado: 'listo' },
  { id: 'hemoptisis', titulo: 'Hemoptisis', sistema: 'resp', resumen: 'Definición, causas, magnitud y diferencia con hematemesis y epistaxis deglutida.', capitulos: [{ id: 'res-01' }, { id: 'dig-01', parte: 'hematemesis vs hemoptisis' }], estado: 'listo' },
  { id: 'ef-torax', titulo: 'Exploración física del tórax', sistema: 'resp', resumen: 'Topografía, inspección estática y dinámica, palpación (expansión, vibraciones vocales), percusión y auscultación.', capitulos: [{ id: 'res-02' }], estado: 'listo' },
  { id: 'ruidos-agregados', titulo: 'Ruidos respiratorios normales y agregados', sistema: 'resp', resumen: 'Murmullo vesicular, soplo laringotraqueal; rales crepitantes, subcrepitantes, sibilancias, roncus, frote pleural; soplos patológicos.', capitulos: [{ id: 'res-02' }], estado: 'listo' },
  { id: 'asma', titulo: 'Asma bronquial y broncoespasmo (síndrome bronquial)', sistema: 'resp', resumen: 'Fisiopatología de la obstrucción reversible, tríada, crisis, signos de gravedad, examen físico.', capitulos: [{ id: 'res-03' }], estado: 'listo' },
  { id: 'bronquitis-epoc', titulo: 'Bronquitis crónica y EPOC', sistema: 'resp', resumen: 'Definición de bronquitis crónica (3 meses, 2 años), enfisema, «abotagado azul» vs «soplador rosado».', capitulos: [{ id: 'res-03' }], estado: 'listo' },
  { id: 'sx-condensacion', titulo: 'Síndrome de condensación pulmonar (neumonía)', sistema: 'resp', resumen: 'Alvéolos ocupados con bronquio permeable: matidez, vibraciones aumentadas, soplo tubario, crepitantes; neumonía típica y atípica.', capitulos: [{ id: 'res-04' }], estado: 'listo' },
  { id: 'sx-atelectasia', titulo: 'Síndrome atelectásico', sistema: 'resp', resumen: 'Colapso alveolar por obstrucción bronquial: retracción, vibraciones abolidas, matidez, silencio auscultatorio.', capitulos: [{ id: 'res-04' }], estado: 'listo' },
  { id: 'sx-derrame', titulo: 'Síndrome de derrame pleural', sistema: 'resp', resumen: 'Líquido en la pleura: matidez de concavidad superior (Damoiseau), Garland, Grocco, soplo pleurítico, egofonía.', capitulos: [{ id: 'res-05' }], estado: 'listo' },
  { id: 'liquido-pleural', titulo: 'Líquido pleural (trasudado vs exudado)', sistema: 'resp', resumen: 'Toracocentesis, aspecto, criterios de Light, causas de trasudado y exudado.', capitulos: [{ id: 'res-05' }], estado: 'listo' },
  { id: 'neumotorax', titulo: 'Neumotórax', sistema: 'resp', resumen: 'Aire en la pleura: espontáneo, traumático, hipertensivo; timpanismo, abolición de vibraciones y murmullo.', capitulos: [{ id: 'res-05' }], estado: 'listo' },
  { id: 'insuf-resp', titulo: 'Insuficiencia respiratoria', sistema: 'resp', resumen: 'PaO2 < 60 mmHg (± PaCO2 > 50): tipo I y II, aguda y crónica, mecanismos y clínica.', capitulos: [{ id: 'res-06' }], estado: 'listo' },

  // Cardiovascular
  { id: 'angor', titulo: 'Ángor (angina de pecho)', sistema: 'cardio', resumen: 'Isquemia por desbalance oferta/demanda; características del dolor; estable, inestable, IAM.', capitulos: [{ id: 'car-01' }], estado: 'listo' },
  { id: 'mc-cardio', titulo: 'Motivos de consulta cardiovasculares', sistema: 'cardio', resumen: 'Disnea cardíaca y asma cardíaca, palpitaciones, edema circulatorio, cianosis periférica.', capitulos: [{ id: 'car-01' }], estado: 'listo' },
  { id: 'sincope', titulo: 'Síncope', sistema: 'cardio', resumen: 'Hipoperfusión cerebral global transitoria: reflejo (vasovagal), ortostático, cardíaco; lipotimia; diferencial con convulsión.', capitulos: [{ id: 'car-01' }], estado: 'listo' },
  { id: 'ef-cardio', titulo: 'Examen físico cardiovascular', sistema: 'cardio', resumen: 'Inspección y palpación del precordio (choque de punta), focos de auscultación.', capitulos: [{ id: 'car-02' }], estado: 'listo' },
  { id: 'pulso-arterial', titulo: 'Semiología del pulso arterial', sistema: 'cardio', resumen: 'Técnica, caracteres (frecuencia, ritmo, amplitud, forma, tensión), pulsos patológicos (magnus, parvus et tardus, paradojal, alternante, bisferiens).', capitulos: [{ id: 'car-02' }], estado: 'listo' },
  { id: 'pulso-venoso', titulo: 'Semiología del pulso venoso', sistema: 'cardio', resumen: 'Ondas a, c, v y senos x, y; presión venosa yugular, reflujo hepatoyugular, Kussmaul, ingurgitación.', capitulos: [{ id: 'car-02' }], estado: 'listo' },
  { id: 'ruidos-r1r2', titulo: 'Ruidos cardíacos 1 y 2', sistema: 'cardio', resumen: 'Génesis, focos, intensidad, desdoblamientos fisiológicos y patológicos.', capitulos: [{ id: 'car-03' }], estado: 'listo' },
  { id: 'ruidos-r3r4', titulo: 'Ruidos cardíacos 3 y 4', sistema: 'cardio', resumen: 'R3 (llenado rápido, sobrecarga de volumen) y R4 (contracción auricular, ventrículo rígido); galopes.', capitulos: [{ id: 'car-03' }], estado: 'listo' },
  { id: 'soplos', titulo: 'Soplos cardíacos', sistema: 'cardio', resumen: 'Mecanismo, caracteres (momento, foco, irradiación, intensidad, forma, timbre), sistólicos vs diastólicos, inocentes.', capitulos: [{ id: 'car-03' }], estado: 'listo' },
  { id: 'estenosis-mitral', titulo: 'Estenosis mitral', sistema: 'cardio', resumen: 'Fiebre reumática, gradiente AI-VI, congestión pulmonar, R1 intenso, chasquido de apertura, rolido diastólico.', capitulos: [{ id: 'car-04' }], estado: 'listo' },
  { id: 'insuf-mitral', titulo: 'Insuficiencia mitral', sistema: 'cardio', resumen: 'Regurgitación sistólica al AI, soplo holosistólico en ápex irradiado a axila, R3.', capitulos: [{ id: 'car-04' }], estado: 'listo' },
  { id: 'estenosis-aortica', titulo: 'Estenosis aórtica', sistema: 'cardio', resumen: 'Tríada (ángor, síncope, disnea), pulso parvus et tardus, soplo eyectivo irradiado a cuello.', capitulos: [{ id: 'car-04' }], estado: 'listo' },
  { id: 'insuf-aortica', titulo: 'Insuficiencia aórtica', sistema: 'cardio', resumen: 'Pulso magnus celer, presión diferencial amplia, signos periféricos (Musset, Quincke, Corrigan…), soplo diastólico aspirativo.', capitulos: [{ id: 'car-04' }], estado: 'listo' },
  { id: 'hta', titulo: 'Hipertensión arterial', sistema: 'cardio', resumen: 'Definición, clasificación, primaria vs secundaria, daño de órgano blanco, toma correcta.', capitulos: [{ id: 'car-05' }], estado: 'listo' },
  { id: 'ic', titulo: 'Síndrome de insuficiencia cardíaca', sistema: 'cardio', resumen: 'Fisiopatología, izquierda vs derecha, sistólica vs diastólica, NYHA, estadios, criterios de Framingham.', capitulos: [{ id: 'car-06' }], estado: 'listo' },

  // Complementarios
  { id: 'sx-anemico', titulo: 'Síndrome anémico e índices hematimétricos', sistema: 'comp', resumen: 'Definición, mecanismos compensadores, clínica, VCM/HCM/CHCM/ADE, clasificación morfológica y por reticulocitos.', capitulos: [{ id: 'com-01' }], estado: 'listo' },

  /* ─────────────── SEGUNDA ERA ─────────────── */
  // Digestivo
  { id: 'disfagia', titulo: 'Disfagia', sistema: 'digestivo', resumen: 'Orofaríngea vs esofágica, mecánica vs motora, odinofagia; síndrome esofágico.', capitulos: [{ id: 'dig-01' }, { id: 'dig-06' }], estado: 'listo' },
  { id: 'vomitos', titulo: 'Náuseas y vómitos', sistema: 'digestivo', resumen: 'Definiciones, clasificación por contenido y horario, mecanismo, complicaciones (Mallory-Weiss), hematemesis.', capitulos: [{ id: 'dig-01' }], estado: 'listo' },
  { id: 'digestivo-alto', titulo: 'Síntomas y signos digestivos altos', sistema: 'digestivo', resumen: 'Disfagia, pirosis, regurgitación, dispepsia, náuseas y vómitos, hematemesis; síndromes esofágico, ulceroso y pilórico.', capitulos: [{ id: 'dig-01' }, { id: 'dig-06' }, { id: 'dig-07' }, { id: 'dig-08' }], estado: 'listo' },
  { id: 'ulcera-gastritis', titulo: 'Úlcera péptica y gastritis', sistema: 'digestivo', resumen: 'Síndrome ulceroso, H. pylori y AINE, complicaciones; gastritis A vs B.', capitulos: [{ id: 'dig-07' }], estado: 'listo' },
  { id: 'constipacion', titulo: 'Constipación', sistema: 'digestivo', resumen: 'Definición y criterios de Roma, causas (funcional, orgánica, fármacos), Bristol, signos de alarma.', capitulos: [{ id: 'dig-03' }], estado: 'listo' },
  { id: 'abdomen-agudo', titulo: 'Paciente con dolor abdominal agudo', sistema: 'digestivo', resumen: 'Dolor visceral, somático y referido; los cinco abdómenes agudos; Murphy, Blumberg, Cullen, Grey-Turner.', capitulos: [{ id: 'dig-02' }, { id: 'dig-15', parte: 'pancreatitis aguda (diferencial)' }], maniobras: ['descompresion-blumberg', 'puntos-dolorosos-abdomen'], estado: 'listo' },
  { id: 'peritonitis', titulo: 'Peritonitis', sistema: 'digestivo', resumen: 'Primaria (PBE), secundaria y terciaria; vientre en tabla; paracentesis.', capitulos: [{ id: 'dig-10' }], estado: 'listo' },
  { id: 'hd', titulo: 'Hemorragia digestiva alta y baja', sistema: 'digestivo', resumen: 'Ángulo de Treitz, hematemesis, melena, hematoquecia, clases de shock hemorrágico, causas.', capitulos: [{ id: 'dig-12' }], estado: 'listo' },
  { id: 'cirrosis', titulo: 'Cirrosis', sistema: 'digestivo', resumen: 'Fibrosis y nódulos de regeneración; estigmas; Child-Pugh (BATEA).', capitulos: [{ id: 'dig-13' }, { id: 'dig-14' }], estado: 'listo' },
  { id: 'htp', titulo: 'Síndrome de hipertensión portal', sistema: 'digestivo', resumen: 'Pre, intra y poshepática; circulación colateral, várices, esplenomegalia, ascitis; GASA.', capitulos: [{ id: 'dig-13' }], estado: 'listo' },
  { id: 'ascitis', titulo: 'Ascitis', sistema: 'digestivo', resumen: 'Mecanismo, etiologías, maniobras (matidez desplazable, onda ascítica, témpano), grados.', capitulos: [{ id: 'dig-13' }, { id: 'dig-05', parte: 'ascitis' }], maniobras: ['ascitis-maniobras'], estado: 'listo' },
  { id: 'liquido-ascitico', titulo: 'Examen del líquido ascítico', sistema: 'digestivo', resumen: 'Paracentesis, aspecto, GASA (≥ 1,1 vs < 1,1), proteínas, neutrófilos > 250 (PBE), citológico y cultivo.', capitulos: [{ id: 'dig-13' }, { id: 'dig-10' }], estado: 'listo', falta: 'Integrar en una sola ficha GASA + proteínas + recuento (hoy está repartido entre dig-10 y dig-13).' },
  { id: 'ef-abdomen', titulo: 'Exploración física del abdomen', sistema: 'digestivo', resumen: 'Topografía (9 regiones), inspección, auscultación, percusión, palpación superficial y profunda.', capitulos: [{ id: 'dig-05' }], maniobras: ['abd-inspeccion-estatica-dinamica', 'abd-auscultacion-rha', 'abd-percusion-traube', 'palpacion-superficial-tension', 'visceras-huecas-glenard'], estado: 'listo' },
  { id: 'ef-higado', titulo: 'Exploración física del hígado', sistema: 'digestivo', resumen: 'Hepatometría, palpación monomanual, en cuchara, bimanual (Chauffard), enganche (Mathieu), Gilbert.', capitulos: [{ id: 'dig-05', parte: 'hígado' }], maniobras: ['hepatometria', 'higado-monomanual-cuchara', 'higado-bimanual'], estado: 'listo' },
  { id: 'ef-bazo', titulo: 'Exploración física del bazo', sistema: 'digestivo', resumen: 'Percusión (Traube, Castell), palpación en decúbito dorsal y en Schuster (Naegeli, Merlo), grados de esplenomegalia.', capitulos: [{ id: 'dig-05', parte: 'bazo' }], maniobras: ['abd-percusion-traube', 'bazo-decubito-dorsal', 'bazo-schuster'], estado: 'listo' },
  { id: 'ef-intestino', titulo: 'Exploración física del intestino', sistema: 'digestivo', resumen: 'Palpación por deslizamiento de ciego, colon y sigmoides (Glenard), ruidos hidroaéreos, tacto rectal.', capitulos: [{ id: 'dig-05', parte: 'vísceras huecas' }], maniobras: ['visceras-huecas-glenard', 'abd-auscultacion-rha', 'tacto-rectal'], estado: 'listo', falta: 'Ficha propia de «intestino» con ciego, colon transverso y sigmoides paso a paso.' },
  { id: 'pared-abdominal', titulo: 'Pared abdominal: puntos dolorosos y hernias', sistema: 'digestivo', resumen: 'Puntos (McBurney, Murphy, ureterales…), hernias (inguinal, crural, umbilical, epigástrica, eventración) y maniobra del esfuerzo.', capitulos: [{ id: 'dig-05' }, { id: 'dig-02' }], maniobras: ['puntos-dolorosos-abdomen', 'palpacion-superficial-tension'], estado: 'listo', falta: 'Hernias de la pared con su exploración (inguinal directa vs indirecta, crural) en ficha propia.' },

  // Renal
  { id: 'ef-renal', titulo: 'Examen físico renal', sistema: 'renal', resumen: 'Guyon, Montenegro, Israel, Glenard, puñopercusión y puntos renoureterales.', capitulos: [{ id: 'ren-02' }], maniobras: ['rinon-guyon', 'rinon-montenegro', 'rinon-israel', 'rinon-glenard', 'punopercusion-lumbar', 'puntos-renoureterales'], estado: 'listo' },
  { id: 'itu', titulo: 'Infecciones urinarias altas y bajas (manifestaciones clínicas)', sistema: 'renal', resumen: 'Vía ascendente, gérmenes; cistitis (síndrome miccional) vs pielonefritis (fiebre, dolor lumbar, Giordano).', capitulos: [{ id: 'ren-06' }], estado: 'listo' },
  { id: 'orina', titulo: 'Análisis de la orina', sistema: 'renal', resumen: 'Físico (color, densidad), químico (proteínas, glucosa, nitritos) y sedimento (hematíes dismórficos, cilindros, leucocitos).', capitulos: [{ id: 'ren-01' }, { id: 'ren-02' }], estado: 'listo', falta: 'Ficha integradora del sedimento (cilindros: hialinos, hemáticos, leucocitarios, granulosos, céreos) con su significado.' },
  { id: 'nefrotico', titulo: 'Síndrome nefrótico', sistema: 'renal', resumen: 'Proteinuria > 3,5 g/día, hipoalbuminemia, edema, hiperlipidemia; causas por edad; complicaciones.', capitulos: [{ id: 'ren-04' }], estado: 'listo' },
  { id: 'nefritico', titulo: 'Síndrome nefrítico', sistema: 'renal', resumen: 'Hematuria, HTA, edema, oliguria, hiperazoemia; postestreptocócico.', capitulos: [{ id: 'ren-03' }], estado: 'listo' },
  { id: 'ira', titulo: 'Insuficiencia renal aguda (RIFLE, AKIN; pre, renal y posrenal)', sistema: 'renal', resumen: 'Criterios RIFLE y AKIN, causas prerrenales, renales y posrenales, sodio urinario, AEIOU.', capitulos: [{ id: 'ren-05' }], estado: 'listo' },
  { id: 'erc', titulo: 'Enfermedad renal crónica (KDIGO) e indicaciones de diálisis', sistema: 'renal', resumen: 'Estadios por filtrado (G1–G5) y albuminuria, síndrome urémico, AEIOU.', capitulos: [{ id: 'ren-05' }], estado: 'listo' },

  // Neurología
  { id: 'cefaleas', titulo: 'Cefaleas', sistema: 'neuro', resumen: 'Primarias (migraña, tensional, en racimos) y secundarias; signos de alarma; neuralgia del trigémino.', capitulos: [{ id: 'neu-01' }], estado: 'listo' },
  { id: 'conciencia-glasgow', titulo: 'Valoración de la orientación (tiempo, espacio y persona) y escala de Glasgow', sistema: 'neuro', resumen: 'Estado de conciencia (vigil, obnubilación, estupor, coma), orientación T-E-P y Glasgow (ocular, verbal, motora).', capitulos: [{ id: 'neu-07' }, { id: 'neu-01' }], estado: 'listo', falta: 'Capítulo «Examen neurológico integrador» (neu-07) en preparación.' },
  { id: 'pc-I', titulo: 'Par craneal I (olfatorio)', sistema: 'neuro', resumen: 'Técnica con sustancias no irritantes, anosmia, hiposmia, parosmia.', capitulos: [{ id: 'neu-03' }], maniobras: ['par-olfatorio'], estado: 'listo' },
  { id: 'pc-II', titulo: 'Par craneal II (óptico)', sistema: 'neuro', resumen: 'Agudeza visual, campo visual por confrontación, fondo de ojo, vía óptica y hemianopsias.', capitulos: [{ id: 'neu-03' }], maniobras: ['campo-visual-confrontacion', 'fondo-de-ojo', 'reflejos-pupilares'], estado: 'listo' },
  { id: 'pc-oculomotores', titulo: 'Pares craneales III, IV y VI (oculomotores)', sistema: 'neuro', resumen: 'Motilidad ocular extrínseca, pupilas, ptosis, estrabismo, diplopía, nistagmo.', capitulos: [{ id: 'neu-03' }], maniobras: ['motilidad-ocular', 'reflejos-pupilares'], estado: 'listo' },
  { id: 'pc-V', titulo: 'Par craneal V (trigémino)', sistema: 'neuro', resumen: 'Sensibilidad de la cara (V1, V2, V3), masticación, reflejo corneano y maseterino.', capitulos: [{ id: 'neu-04' }], maniobras: ['trigemino-sensibilidad', 'reflejo-corneano'], estado: 'listo' },
  { id: 'pc-VII', titulo: 'Par craneal VII (facial)', sistema: 'neuro', resumen: 'Mímica, gusto 2/3 anteriores, parálisis facial central vs periférica (Bell).', capitulos: [{ id: 'neu-04' }], maniobras: ['facial-mimica'], estado: 'listo' },
  { id: 'pc-VIII', titulo: 'Par craneal VIII (vestibulococlear)', sistema: 'neuro', resumen: 'Coclear (Weber, Rinne, Schwabach) y vestibular (Romberg, nistagmo, marcha, índices).', capitulos: [{ id: 'neu-04' }], maniobras: ['weber-rinne', 'romberg'], estado: 'listo' },
  { id: 'pc-IX-X', titulo: 'Pares craneales IX y X (glosofaríngeo y vago)', sistema: 'neuro', resumen: 'Velo del paladar, signo de la cortina, reflejo nauseoso, deglución, fonación.', capitulos: [{ id: 'neu-04' }], maniobras: ['glosofaringeo-vago'], estado: 'listo' },
  { id: 'pc-XI', titulo: 'Par craneal XI (espinal)', sistema: 'neuro', resumen: 'Esternocleidomastoideo y trapecio contra resistencia.', capitulos: [{ id: 'neu-04' }], maniobras: ['espinal'], estado: 'listo' },
  { id: 'pc-XII', titulo: 'Par craneal XII (hipogloso)', sistema: 'neuro', resumen: 'Lengua en reposo y protruida: desvía hacia el lado lesionado (periférica), atrofia, fasciculaciones.', capitulos: [{ id: 'neu-04' }], maniobras: ['hipogloso'], estado: 'listo' },
  { id: 'fuerza', titulo: 'Fuerza muscular: exploración y alteraciones', sistema: 'neuro', resumen: 'Escala 0–5, maniobras deficitarias (Mingazzini, Barré), paresia vs plejía, distribución (hemi, para, cuadri, mono).', capitulos: [{ id: 'neu-02' }, { id: 'neu-05' }, { id: 'neu-07' }], maniobras: ['fuerza-mingazzini'], estado: 'listo', falta: 'Integración en neu-07 (examen neurológico completo).' },
  { id: 'tono', titulo: 'Tono muscular: exploración y alteraciones', sistema: 'neuro', resumen: 'Hipotonía, hipertonía espástica (navaja) vs rígida (caño de plomo, rueda dentada), trofismo.', capitulos: [{ id: 'neu-05' }, { id: 'neu-07' }], maniobras: ['trofismo-tono'], estado: 'listo', falta: 'Integración en neu-07 (examen neurológico completo).' },
  { id: 'postura-marcha', titulo: 'Alteraciones de la postura y la marcha', sistema: 'neuro', resumen: 'Marchas: hemipléjica (segador), parkinsoniana, atáxica cerebelosa, tabética, en steppage, de pato, en tijeras.', capitulos: [{ id: 'neu-05' }, { id: 'neu-07' }], estado: 'listo', falta: 'Cuadro comparativo de marchas con animación (neu-07).' },
  { id: 'reflejos-profundos', titulo: 'Reflejos profundos (osteotendinosos)', sistema: 'neuro', resumen: 'Bicipital, tricipital, estilorradial, rotuliano, aquiliano: raíces, técnica, graduación, clonus.', capitulos: [{ id: 'neu-05' }, { id: 'neu-07' }], maniobras: ['reflejos-osteotendinosos', 'clonus'], estado: 'listo', falta: 'Tabla reflejo → raíz → técnica en neu-07.' },
  { id: 'reflejos-superficiales', titulo: 'Reflejos superficiales y Babinski', sistema: 'neuro', resumen: 'Cutáneo-abdominales, cremasteriano, cutáneo plantar (flexor normal, extensor = Babinski) y sucedáneos.', capitulos: [{ id: 'neu-05' }, { id: 'neu-07' }], maniobras: ['reflejo-plantar-babinski'], estado: 'listo', falta: 'Integración en neu-07.' },
  { id: 'sens-superficial', titulo: 'Exploración de la sensibilidad superficial', sistema: 'neuro', resumen: 'Táctil, dolorosa y térmica: técnica, vías (espinotalámica), alteraciones (anestesia, hipoestesia, disociación).', capitulos: [{ id: 'neu-06' }], maniobras: ['sensibilidad-superficial'], estado: 'listo' },
  { id: 'sens-profunda', titulo: 'Exploración de la sensibilidad profunda y mixta', sistema: 'neuro', resumen: 'Vibratoria (palestesia), posicional (batiestesia), barognosia; mixtas: estereognosia, grafestesia, discriminación de dos puntos.', capitulos: [{ id: 'neu-06' }, { id: 'neu-07' }], maniobras: ['sensibilidad-profunda'], estado: 'listo', falta: 'Sensibilidad mixta (cortical) explicada junto con las gnosias en neu-07.' },
  { id: 'taxia', titulo: 'Exploración física de la taxia (coordinación)', sistema: 'neuro', resumen: 'Taxia estática (Romberg) y dinámica (índice-nariz, talón-rodilla, diadococinesia); ataxia cerebelosa, sensitiva y vestibular.', capitulos: [{ id: 'neu-07' }, { id: 'neu-05' }], maniobras: ['romberg', 'indice-nariz', 'talon-rodilla'], estado: 'listo', falta: 'Desarrollo propio de taxia como parte del examen neurológico (neu-07).' },
  { id: 'gnosias-praxias', titulo: 'Gnosias y praxias (funciones corticales superiores)', sistema: 'neuro', resumen: 'Qué son, cómo se exploran, agnosias y apraxias, y en qué se diferencian de la taxia y de la sensibilidad.', capitulos: [{ id: 'neu-07' }], estado: 'listo', falta: 'Capítulo neu-07 en preparación (pedido especial).' },
  { id: 'sx-piramidal', titulo: 'Síndrome piramidal (primera motoneurona)', sistema: 'neuro', resumen: 'Paresia, espasticidad, hiperreflexia, Babinski, clonus; topografía (cortical, capsular, troncal, medular); hemiplejías alternas.', capitulos: [{ id: 'neu-05' }], estado: 'listo' },
  { id: 'segunda-motoneurona', titulo: 'Síndrome de segunda motoneurona', sistema: 'neuro', resumen: 'Atrofia, arreflexia, atonía, fasciculaciones; comparación con la primera motoneurona.', capitulos: [{ id: 'neu-05' }, { id: 'neu-02' }], estado: 'listo' },
  { id: 'parkinson', titulo: 'Síndrome extrapiramidal hipertónico-hipocinético (Parkinson)', sistema: 'neuro', resumen: 'Tríada: temblor de reposo, rigidez en rueda dentada, bradicinesia; marcha festinante; facies.', capitulos: [{ id: 'neu-05' }], estado: 'listo' },
  { id: 'sx-cerebeloso', titulo: 'Síndrome cerebeloso', sistema: 'neuro', resumen: 'Ataxia, dismetría, adiadococinesia, temblor intencional, hipotonía, nistagmo, marcha ebriosa; vermiano vs hemisférico.', capitulos: [{ id: 'neu-05' }], maniobras: ['indice-nariz', 'talon-rodilla'], estado: 'listo' },
  { id: 'sx-meningeo', titulo: 'Síndrome meníngeo', sistema: 'neuro', resumen: 'Cefalea, vómitos, fiebre, rigidez de nuca, Kernig y Brudzinski; meningitis vs meningismo vs reacción meníngea.', capitulos: [{ id: 'neu-06' }], maniobras: ['rigidez-nuca', 'kernig-brudzinski'], estado: 'listo' },
  { id: 'hte', titulo: 'Hipertensión endocraneana', sistema: 'neuro', resumen: 'Monro-Kellie, tríada (cefalea, vómito en chorro, edema de papila), VI par, Cushing, hernias.', capitulos: [{ id: 'neu-06' }], estado: 'listo' },
  { id: 'lcr', titulo: 'Examen del líquido cefalorraquídeo', sistema: 'neuro', resumen: 'Punción lumbar (indicaciones y contraindicaciones), LCR normal y patrones bacteriano, viral y tuberculoso.', capitulos: [{ id: 'neu-06' }], estado: 'listo' },

  // SOMA
  { id: 'ef-articulaciones', titulo: 'Exploración física de las articulaciones', sistema: 'soma', resumen: 'Inspección, palpación, movilidad activa y pasiva, maniobras por articulación (columna, hombro, codo, muñeca, cadera, rodilla, tobillo).', capitulos: [{ id: 'soma-01' }], maniobras: ['spurling', 'lasegue', 'patrick-fabere', 'cajon-rodilla', 'bostezo-rodilla', 'choque-rotuliano', 'phalen', 'tinel', 'mcmurray', 'thompson'], estado: 'listo', falta: 'Ficha «sistemática general del examen articular» (inspección, palpación, movilidad, signos de artritis) antes de las maniobras.' },
];

export const TEMA_POR_ID: Record<string, Tema> = Object.fromEntries(TEMAS.map((t) => [t.id, t]));

export function sistemaDe(id: SistemaId): SistemaFinal {
  return SISTEMAS_FINAL.find((s) => s.id === id)!;
}

/* ─────────────── EVIDENCIA DE «PREGUNTA FRECUENTE» (NARANJA) ───────────────
 * Solo con fuente verificable. Ortega: transcripciones de sus clases (id de la clase y minuto).
 * Merlín: los únicos dos avisos explícitos de «pregunta de examen» de sus PDF.
 * Los temas de la PRIMERA ERA no tienen clases grabadas de Ortega en las carpetas: no se marcan
 * como frecuentes hasta tener una fuente (ver docs/progress/FUENTES-FINAL.md). */
const O = (nota: string, ref: string): Evidencia => ({ quien: 'ortega', nota, fuente: `Clase de Ortega · ${ref}` });
const M = (nota: string, ref: string): Evidencia => ({ quien: 'merlin', nota, fuente: `Instituto Merlín · ${ref}` });

const EVIDENCIA: Record<string, Evidencia[]> = {
  ictericia: [O('Síndrome coledociano: ictericia, acolia o hipocolia y coluria; avisa que ictericia entra', 'vesic 24:49 · mc-dig-6 16:13')],
  hemoptisis: [O('Diagnóstico diferencial entre hematemesis y hemoptisis («ese cuadrito tienen que sabérselo»)', 'hd-1 08:10')],
  sincope: [O('El síncope', 'mc-neu-1 12:08')],
  disfagia: [O('Características de la disfagia orofaríngea; disfagia intermitente y lentamente progresiva', 'mc-dig-1 04:03 y 21:38')],
  vomitos: [O('Cómo era el vómito y cuándo apareció; complicaciones; ionograma del paciente que vomita', 'mc-dig-2 16:21, 23:19 y 30:46')],
  'digestivo-alto': [O('Síndrome pilórico en el oral (definición, causas, clínica, diagnóstico) y su síntoma cardinal', 'sd-pil 05:04 y 08:59')],
  'ulcera-gastritis': [O('Localización, H. pylori y AINE, complicaciones; gastritis tipo A y B', 'sd-ulc-1 03:00 · sd-ulc-2 15:18 · sd-ulc-3 05:35 y 10:07')],
  constipacion: [O('Definición por criterios de Roma; escala de Bristol; pujo y tenesmo', 'mc-dig-5 29:27 · mc-dig-6 01:43 y 12:52')],
  'abdomen-agudo': [O('Nombrar los cinco abdómenes agudos; signo de Jobert; percusión en perforativo y hemorrágico', 'mc-dig-3 17:02 · mc-dig-4 05:09 y 25:28')],
  peritonitis: [O('«En el parcial, el oral y el final»; plastrón; primaria, secundaria y terciaria', 'perit-1 00:02 y 06:17')],
  hd: [O('Tabla de parámetros vitales por clase; ortostatismo; causa más frecuente de HDA y de HDB', 'hd-1 02:22, 16:28 y 21:05 · hd-2 01:22')],
  cirrosis: [O('«En el oral, el parcial y el final»; clasificación de Child-Pugh', 'cirr-1 00:15 · cirr-2 07:14'), M('Child-Pugh: «pregunta de examen que tienen que saber sí o sí» (BATEA y puntaje)', 'Patologías hepáticas (PDF 18), p. 8')],
  htp: [O('Qué es; circulaciones colaterales; várices; flujo ascendente o descendente', 'htp-1 00:14 a 12:56'), M('GASA: cuándo es por hipertensión portal y cuándo infecciosa', 'Patologías hepáticas (PDF 18), p. 8')],
  ascitis: [O('La ascitis en el examen físico y en la hipertensión portal', 'ef-dig-2 04:10 · htp-1 16:27'), M('Etiologías de la ascitis marcadas como «pregunta de examen»', 'Patologías hepáticas (PDF 18), p. 7')],
  'liquido-ascitico': [O('Gradiente albúmina sero-ascítico; paracentesis y número de neutrófilos', 'htp-2 17:10 · perit-2 04:13')],
  'ef-abdomen': [O('En qué orden se examina el abdomen y por qué difiere del tórax; inspección; soplos abdominales', 'ef-dig-1 01:05 a 29:31')],
  'pared-abdominal': [O('Puntos apendiculares, pancreáticos y biliares; Blumberg y Gueneau de Mussy', 'ef-dig-2 16:50 a 21:06')],
  'ef-renal': [O('Maniobra de Guyon; cómo se valora al paciente con proteinuria', 'ef-ren 24:33 y 29:25')],
  itu: [O('Vía y germen más frecuentes; presentación en la guardia; pielonefritis; ITU complicada; recaída vs reinfección', 'itu-1 14:39 a 23:14 · itu-2 04:32 y 07:09')],
  orina: [O('Interpretar las características de la orina; hematuria isomórfica y dismórfica; tres vasos', 'mc-ren-1 14:54 · mc-ren-2 12:14 y 18:29')],
  nefrotico: [O('Definición y causa más frecuente', 'nefrotico 03:54 y 07:41')],
  nefritico: [O('Tríada característica; causa más frecuente y qué preguntar en la anamnesis', 'nefritico 04:09 y 09:09')],
  ira: [O('Criterios RIFLE y AKIN; causas; por qué la prerrenal elimina menos sodio', 'ir-1 12:23 y 18:23 · ir-2 21:00')],
  erc: [O('Causa más frecuente; hipocalcemia y anemia; ecografía en aguda vs crónica', 'ir-2 11:36 y 27:05 · ir-3 11:53')],
  cefaleas: [O('Cefaleas primarias; sexo en que es más frecuente la migraña', 'mc-neu-1 22:39 · mc-neu-2 03:37')],
  'pc-I': [O('El olfatorio es el único que no hace sinapsis en el tálamo', 'pc-1 14:33')],
  'pc-II': [O('Recorrido del nervio óptico, vía óptica y hemianopsias', 'pc-1 23:53 y 24:42 · pc-2 10:33')],
  'pc-oculomotores': [O('Qué músculo inervan el III, IV y VI; lesión del III; parálisis del IV; nistagmo', 'pc-3 07:57 a 22:14')],
  'pc-VII': [O('El séptimo par; parálisis facial central y periférica', 'pc-4 17:53 y 25:06')],
  'pc-VIII': [O('El VIII par y las pruebas para evaluar la vía auditiva', 'pc-5 01:02 y 11:21')],
  'pc-XII': [O('¿Cómo está inervada la lengua?', 'pc-4 07:02')],
  taxia: [O('Elementos que mantienen el equilibrio; en qué lesiones el Romberg es positivo y en cuál no', 'mc-neu-2 22:14 y 29:56')],
  'sens-profunda': [O('Síndrome cordonal posterior y trastornos del equilibrio', 'sn-1 03:28')],
  'sx-piramidal': [O('Examen físico, signos, topografía, hemiplejía espástica y hemiplejías alternas', 'neu-meet-1024 13:57 a 33:12 · sn-3 04:21')],
  'segunda-motoneurona': [O('Diferencia entre primera y segunda motoneurona; la fasciculación', 'sn-3 16:34 · mc-neu-3 21:06')],
  parkinson: [O('Clínica del síndrome extrapiramidal; tríada del Parkinson y núcleo lesionado', 'sn-4 00:01 · neu-meet-1024 1:07:15')],
  'sx-cerebeloso': [O('Tríada y semiología del síndrome cerebeloso', 'neu-meet-1024 1:17:55')],
  'sx-meningeo': [O('Meningitis vs meningismo vs reacción meníngea; signos de irritación meníngea', 'neu-rec-1026 32:15 · sn-6 33:28')],
  hte: [O('Tríada; fases del edema de papila; par más lesionado y efecto Cushing', 'neu-rec-1026 19:19 y 22:55 · sn-5 26:44')],
  lcr: [O('Tres contraindicaciones de la punción lumbar; LCR bacteriano, viral y tuberculoso', 'neu-rec-1026 31:01 y 41:26')],
  'ef-articulaciones': [O('Cajón, bostezo, Tinel, Phalen y codo de tenista', 'meningeo-osteo 39:46 a 46:17')],
};
for (const t of TEMAS) if (EVIDENCIA[t.id]) t.frecuente = EVIDENCIA[t.id];
