import type { ApunteUnidad } from './tipos';

/*
 * Digestivo alto y hemorragia digestiva — apunte para el oral.
 * Base: Merlín («Disfagia», «Náuseas y vómitos», «Síndrome esofágico», «Síndrome pilórico», «Síndrome ulceroso»,
 * «Gastritis», «Dispepsia», «Hemorragia digestiva») y apunte de Ortega («Síndromes del aparato digestivo» pp. 368–376
 * y «Hemorragias digestivas» pp. 389–392), contrastados con Argente cap. 39 y 42.
 */
export const apunte: ApunteUnidad = {
  unidad: 'dig-alto',
  intro: {
    titulo: 'Motivos de consulta digestivos',
    bloques: [
      {
        t: 'cuadro',
        titulo: 'Motivos de consulta (clase de Ortega y Merlín)',
        head: ['Motivo', '¿Bolillero?', 'Dónde / lo mínimo'],
        marca: 1,
        filas: [
          ['**Disfagia**', '**Sí**', 'En esta unidad.'],
          ['Dispepsia y pirosis', 'No (entra en «síntomas digestivos altos»)', '**Dispepsia**: dolor o malestar del abdomen **superior** (del ombligo hacia arriba). **Pirosis**: **ardor retroesternal**.'],
          ['**Náuseas y vómitos**', '**Sí**', 'En esta unidad.'],
          ['**Síntomas y signos digestivos altos**', '**Sí**', 'En esta unidad.'],
          ['**Dolor abdominal agudo**', '**Sí**', 'Unidad **Abdomen agudo y peritonitis**.'],
          ['Diarrea', 'No', '**Aguda** < 2 semanas (casi siempre intoxicación alimentaria), **persistente** 2–4 semanas, **crónica** > 4 semanas.'],
          ['**Constipación**', '**Sí**', 'Unidad **Constipación**.'],
          ['Anorrectales', 'No', 'Merlín: dolor, hemorragia, secreción, **prurito**, **pujo**, **tenesmo**, incontinencia.'],
          ['**Ictericia**', '**Sí**', 'Unidad **Ictericia, cirrosis, HTP y ascitis**. Ortega: «no me saben ictericia… lo van a bochar».'],
        ],
      },
    ],
  },
  temas: [
    {
      tema: 'disfagia',
      titulo: 'Disfagia',
      porque: [
        'Tragar tiene dos tiempos: la **transferencia** (boca y faringe → esófago, voluntaria y rápida) y el **transporte** (a lo largo del esófago, por peristaltismo). Si falla el primero, el alimento se va a la **vía aérea**: tos y aspiración. Si falla el segundo, el bolo **se traba en el pecho**.',
        'Un **obstáculo** (tumor, estenosis) deja pasar los líquidos y traba los **sólidos**, cada vez más. Un problema **motor** (acalasia) traba **sólidos y líquidos** desde el principio.',
      ],
      bloques: [
        { t: 'def', text: 'Dificultad para trasladar los alimentos sólidos o líquidos **de la boca al estómago**. Es un síntoma de causa orgánica: no se desestima.' },
        {
          t: 'cuadro',
          head: ['', 'Orofaríngea (alta, de transferencia)', 'Esofágica (baja, de transporte)'],
          filas: [
            ['Cuándo', 'Al **iniciar** la deglución', '**Después** de iniciarla'],
            ['Dónde la siente', 'Garganta', '**Hueco supraesternal**, retroesternal o epigastrio'],
            ['Acompaña', '**Tos**, atragantamiento, **regurgitación nasal**, disfonía; **neumonía aspirativa**', 'Dolor torácico, regurgitación tardía, odinofagia'],
            ['Causas', '**Neuromusculares**: ACV, Parkinson, ELA, miastenia; Zenker', 'Obstructivas o motoras (abajo)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Disfagia esofágica',
          head: ['', 'Obstructiva (mecánica)', 'Motora (funcional)'],
          filas: [
            ['Alimentos', '**Sólidos**', '**Sólidos y líquidos** desde el comienzo'],
            ['Evolución', '**Progresiva**, continua', 'Intermitente, impredecible'],
            ['Causas', '**Cáncer de esófago**, estenosis péptica, anillo de Schatzki, compresión extrínseca', '**Acalasia**, espasmo esofágico difuso, **esclerodermia**'],
          ],
        },
        { t: 'ojo', text: '**Odinofagia** = dolor al tragar (inflamación: esofagitis, cándida). **Globo histérico** = sensación de garganta ocupada **sin relación con la ingesta**: no es disfagia.' },
      ],
      oral: '«La disfagia es la dificultad para trasladar los alimentos de la boca al estómago. Se clasifica en orofaríngea o de transferencia, que aparece al iniciar la deglución, con tos, atragantamiento y regurgitación nasal, y puede dar neumonía aspirativa, por causas neuromusculares como el ACV, el Parkinson o la miastenia; y esofágica o de transporte, que aparece después de iniciada la deglución y se siente retroesternal. La esofágica puede ser obstructiva, para sólidos y progresiva, como en el cáncer de esófago o la estenosis péptica, o motora, para sólidos y líquidos desde el comienzo, como en la acalasia. Se diferencia de la odinofagia, que es dolor al tragar, y del globo histérico.»',
      repreguntas: [
        { q: '¿Qué te orienta a una disfagia orofaríngea?', a: 'Aparece al iniciar la deglución, con tos, atragantamiento o regurgitación nasal.' },
        { q: 'Disfagia progresiva para sólidos en un hombre mayor fumador: ¿qué pensás?', a: 'Obstructiva: cáncer de esófago.' },
        { q: '¿Qué disfagia es para líquidos y sólidos desde el principio?', a: 'La motora: acalasia.' },
      ],
      fuentes: 'Instituto Merlín, «Disfagia» · Apunte de Ortega, p. 368 · Argente-Álvarez, cap. 39.',
    },
    {
      tema: 'vomitos',
      titulo: 'Náuseas y vómitos',
      porque: [
        'El vómito es un **reflejo** coordinado por el centro del vómito del tronco: lo pueden disparar el **tubo digestivo**, el **oído interno**, el **SNC** (hipertensión endocraneana), tóxicos y fármacos. Por eso hay que buscar la causa también **fuera del abdomen**.',
        'El **contenido** y el **horario** dicen hasta dónde llegó la comida: sin digerir (esófago), digerido horas después (píloro), bilioso (más allá del píloro), fecaloide (obstrucción baja).',
      ],
      bloques: [
        {
          t: 'cuadro',
          titulo: 'Definiciones',
          head: ['Término', 'Qué es'],
          filas: [
            ['**Vómito**', 'Expulsión **violenta** del contenido gástrico por la boca'],
            ['**Náusea**', 'Deseo inminente de vomitar'],
            ['**Arcadas**', 'Contracciones que preceden al vómito **sin expulsión**'],
            ['**Regurgitación**', 'Retorno a la boca **sin esfuerzo ni náuseas**'],
            ['**Rumiación**', 'Regurgitación seguida de nueva masticación y deglución'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Clasificación',
          head: ['Según', 'Tipos'],
          filas: [
            ['**Contenido**', '**Alimenticio** (sin digerir: esófago; parcialmente digerido: **pilórico**) · **bilioso** · **hemático** (hematemesis, «borra de café») · **fecaloide** (obstrucción baja)'],
            ['**Horario**', '**Matinal** (embarazo, uremia, alcohol, **HTE en chorro**) · posprandial inmediato · **horas después** (**obstrucción pilórica**)'],
          ],
        },
        { t: 'paso', titulo: 'Complicaciones', items: ['**Mallory-Weiss**: desgarro de la unión esofagogástrica → **hematemesis** tras vómitos intensos (alcohólicos).', '**Boerhaave**: **rotura** del esófago → mediastinitis.', '**Aspiración** (neumonía), **deshidratación**, **hipopotasemia** y alcalosis.'] },
      ],
      oral: '«El vómito es la expulsión violenta del contenido gástrico por la boca; la náusea es el deseo inminente de vomitar. Se diferencia de la regurgitación, que es sin esfuerzo ni náuseas, y de la rumiación. Lo clasifico por su contenido —alimenticio, bilioso, hemático o fecaloide— y por su horario —matinal en el embarazo, la uremia o la hipertensión endocraneana, que es en chorro, y tardío en la obstrucción pilórica—. Busco síntomas asociados que orienten la causa, que puede ser digestiva, del sistema nervioso, vestibular, tóxica o metabólica. Sus complicaciones son el Mallory-Weiss, el Boerhaave, la aspiración, la deshidratación y la hipopotasemia.»',
      repreguntas: [
        { q: '¿Qué diferencia el vómito de la regurgitación?', a: 'El vómito es violento y con náuseas; la regurgitación es sin esfuerzo.' },
        { q: '¿Qué es el síndrome de Mallory-Weiss?', a: 'Desgarro de la mucosa de la unión esofagogástrica por vómitos intensos: hematemesis.' },
        { q: '¿Qué vómito es típico de la hipertensión endocraneana?', a: 'En chorro, sin náuseas previas, a menudo matinal.' },
      ],
      fuentes: 'Instituto Merlín, «Náuseas y vómitos» · Argente-Álvarez, cap. 39.',
    },
    {
      tema: 'digestivo-alto',
      titulo: 'Síntomas digestivos altos y síndromes esofágico y pilórico',
      porque: [
        'El **esfínter esofágico inferior** impide que el ácido suba. Si se relaja (o hay hernia hiatal), el ácido quema el esófago: **pirosis**; empeora **acostado** y después de comer, porque se pierde el efecto de la gravedad.',
        'Si el **píloro** se cierra, el estómago no se vacía: se llena, lucha (peristaltismo visible), se agota (chapoteo) y termina vomitando la comida **horas después**.',
      ],
      bloques: [
        {
          t: 'cuadro',
          titulo: 'Síntomas',
          head: ['Síntoma', 'Qué es'],
          filas: [
            ['**Pirosis**', 'Ardor **retroesternal** que asciende desde el epigastrio; empeora con comidas y decúbito, mejora con antiácidos (**ERGE**)'],
            ['**Regurgitación**', 'Contenido gástrico a la boca sin esfuerzo'],
            ['**Dispepsia**', 'Dolor o malestar en el **epigastrio**: plenitud posprandial, saciedad precoz'],
            ['**Hematemesis**', 'Vómito de sangre: **sangrado alto**'],
          ],
        },
        { t: 'paso', titulo: 'Síndrome esofágico', text: 'Cinco síntomas: **disfagia, pirosis, dolor torácico, regurgitación y odinofagia**. Causas: **ERGE** (la pirosis es el síntoma más común), esofagitis, **acalasia** (disfagia motora, regurgitación), **cáncer de esófago** (disfagia progresiva), várices.' },
        { t: 'paso', titulo: 'Síndrome pilórico', items: ['Obstrucción del píloro que impide el vaciamiento gástrico. Causa principal: **úlcera péptica** (cicatrización); también tumores.', '**Vómitos** de alimentos de comidas anteriores (4–6 h después), saciedad precoz, pérdida de peso.', 'Examen: **peristaltismo gástrico visible** (al principio) y **chapoteo o bazuqueo** en ayunas (atonía).', 'Se confirma con un residuo gástrico aumentado por sonda y **endoscopia**.'] },
      ],
      oral: '«Los síntomas digestivos altos son la disfagia, la pirosis —ardor retroesternal que empeora con las comidas y el decúbito y es típico del reflujo—, la regurgitación, la dispepsia, las náuseas y vómitos y la hematemesis. El síndrome esofágico reúne disfagia, pirosis, dolor torácico, regurgitación y odinofagia; sus causas son el reflujo, la esofagitis, la acalasia y el cáncer. El síndrome pilórico es la obstrucción del píloro, sobre todo por úlcera péptica: el estómago no se vacía y aparecen vómitos de alimentos ingeridos horas antes, saciedad precoz y pérdida de peso; al examen hay peristaltismo gástrico visible y chapoteo en ayunas.»',
      repreguntas: [
        { q: '¿Por qué la pirosis empeora acostado?', a: 'Se pierde el efecto de la gravedad que mantiene el ácido en el estómago.' },
        { q: '¿Cuál es la causa más frecuente del síndrome pilórico?', a: 'La úlcera péptica (estenosis cicatrizal).' },
        { q: '¿Qué es el chapoteo gástrico y qué indica en ayunas?', a: 'Ruido de líquido al deprimir el epigastrio: estómago que retiene contenido (síndrome pilórico, atonía).' },
      ],
      fuentes: 'Instituto Merlín, «Síndrome esofágico», «Síndrome pilórico» y «Dispepsia» · Apunte de Ortega, pp. 368–369 y 375–376 · Argente-Álvarez, cap. 42-1 y 42-3.',
    },
    {
      tema: 'ulcera-gastritis',
      titulo: 'Úlcera péptica y gastritis',
      porque: [
        'La mucosa resiste el ácido gracias a una **barrera** (moco, bicarbonato, flujo sanguíneo, **prostaglandinas**). La úlcera aparece cuando se rompe el equilibrio: **más agresión** (ácido) o **menos defensa**.',
        'Los dos grandes culpables: **Helicobacter pylori** (inflama el antro y aumenta el ácido) y los **AINE/aspirina** (bloquean las prostaglandinas que protegen la mucosa).',
      ],
      bloques: [
        { t: 'def', text: '**Úlcera**: pérdida de sustancia que **supera la muscular de la mucosa**. Más frecuente en el **duodeno** (1.ª porción) que en el estómago (curvatura menor del antro).' },
        {
          t: 'cuadro',
          titulo: 'Clínica',
          head: ['', 'Úlcera duodenal', 'Úlcera gástrica'],
          filas: [
            ['Dolor', '**Epigástrico** urente, «hambre dolorosa»; **calma con la comida** y antiácidos; **nocturno**', 'Menos relacionado con la comida; puede empeorar al comer'],
            ['Otros', 'Pacientes más jóvenes', 'Mayores; **anorexia y pérdida de peso**'],
          ],
        },
        { t: 'paso', titulo: 'Diagnóstico', text: 'El examen físico aporta poco (punto epigástrico). **Endoscopia** con biopsia (elección). H. pylori: **test de ureasa** en la biopsia, histología; **prueba del aliento** (para controlar la erradicación), serología.' },
        { t: 'clave', titulo: 'Complicaciones', items: ['**Hemorragia** (la más frecuente y grave): hematemesis, melena.', '**Perforación**: dolor epigástrico brusco, **abdomen en tabla**, **Jobert** (pérdida de la matidez hepática), neumoperitoneo.', '**Síndrome pilórico** (estenosis).'] },
        {
          t: 'cuadro',
          titulo: 'Gastritis',
          head: ['Tipo', 'Características'],
          filas: [
            ['**Erosiva** (aguda)', '**AINE**, aspirina, alcohol, estrés grave: puede sangrar'],
            ['**Tipo A** (fúndica, autoinmune)', 'Cuerpo y fondo; **atrófica**, **anemia perniciosa**, aclorhidria; riesgo de cáncer'],
            ['**Tipo B** (antral)', '**H. pylori**; antro; en general asintomática o con dispepsia'],
          ],
        },
      ],
      oral: '«La úlcera péptica es una pérdida de sustancia que supera la muscular de la mucosa, por desequilibrio entre los factores agresivos, como el ácido, y los defensivos, como el moco, el bicarbonato y las prostaglandinas. Sus causas principales son el Helicobacter pylori y los AINE. Es más frecuente en el duodeno. Se manifiesta con dolor epigástrico urente, que en la duodenal calma con la comida y es nocturno, y en la gástrica se acompaña de anorexia y pérdida de peso. El diagnóstico es por endoscopia con biopsia, y el Helicobacter se busca con ureasa o prueba del aliento. Sus complicaciones son la hemorragia, la perforación, con abdomen en tabla y signo de Jobert, y la estenosis pilórica. La gastritis es la inflamación de la mucosa: erosiva por AINE o alcohol, tipo A autoinmune del cuerpo con anemia perniciosa, y tipo B antral por Helicobacter.»',
      repreguntas: [
        { q: '¿Por qué los AINE producen úlcera?', a: 'Inhiben la ciclooxigenasa y bajan las prostaglandinas que protegen la mucosa (y dañan en forma local).' },
        { q: '¿Cómo se manifiesta una úlcera perforada?', a: 'Dolor epigástrico brusco intenso, abdomen en tabla, signo de Jobert y neumoperitoneo.' },
        { q: '¿Qué gastritis se asocia con anemia perniciosa?', a: 'La tipo A, autoinmune, del cuerpo y fondo.' },
      ],
      fuentes: 'Instituto Merlín, «Síndrome ulceroso» y «Gastritis» · Apunte de Ortega, pp. 370–374 · Argente-Álvarez, cap. 42-2.',
    },
    {
      tema: 'hd',
      titulo: 'Hemorragia digestiva alta y baja',
      porque: [
        'El **ángulo de Treitz** separa la alta de la baja. La sangre que pasa tiempo en el intestino es **digerida por las bacterias** y se vuelve **negra** (melena): por eso la melena orienta a un sangrado **alto**, y la sangre roja por el ano a uno **bajo**.',
        'Lo primero no es dónde sangra sino **cuánto**: los signos vitales estiman la pérdida. El hematocrito **tarda horas** en bajar, porque al principio se pierden plasma y glóbulos rojos en igual proporción.',
      ],
      bloques: [
        {
          t: 'cuadro',
          titulo: 'Cómo se manifiesta',
          head: ['Signo', 'Qué es', 'Origen'],
          filas: [
            ['**Hematemesis**', 'Vómito de sangre roja o «en **borra de café**»', 'Siempre **alto**'],
            ['**Melena**', 'Heces **negras**, alquitranadas, fétidas (> 50 ml)', '**Alto** en el 85 %'],
            ['**Hematoquecia** / proctorragia', 'Sangre roja por el ano, sola o con heces', '**Bajo** (alto si es masiva)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Gravedad (pérdida estimada)',
          head: ['Clase', 'Pérdida', 'FC', 'PA', 'Diuresis · mental'],
          filas: [
            ['**I** leve', '< 750 ml (< 15 %)', '< 100', 'Normal', '> 30 ml/h · normal'],
            ['**II** moderada', '750–1500 ml (15–30 %)', '100–119', 'Normal o ↓', '20–30 · ansioso'],
            ['**III** grave', '1500–2000 ml (30–40 %)', '120–139', '**↓** (PAS < 100)', '5–20 · confuso'],
            ['**IV** masiva', '> 2000 ml (> 40 %)', '> 140', '↓↓', 'Nula · confuso'],
          ],
        },
        {
          t: 'cuadro',
          head: ['', 'HD alta', 'HD baja'],
          filas: [
            ['Límite', '**Por encima del Treitz** (esófago, estómago, duodeno)', '**Por debajo del Treitz**'],
            ['Causas', '**Úlcera péptica** (la más frecuente), gastritis, **várices esofágicas**, **Mallory-Weiss**, cáncer', '**Divertículos** y **angiodisplasia** (> 60 años), hemorroides y fisuras, EII, cáncer, colitis isquémica'],
            ['Estudio', '**Endoscopia alta** en las primeras 24 h', '**Colonoscopia** (estable)'],
          ],
        },
        { t: 'ojo', text: 'Hipotensión **ortostática** (PAS cae > 20 mmHg o FC sube > 30 lpm al pararse) indica hipovolemia significativa. Siempre **tacto rectal**.' },
      ],
      oral: '«La hemorragia digestiva se divide por el ángulo de Treitz en alta y baja. Se manifiesta como hematemesis, siempre alta; melena, heces negras y fétidas que en general indican sangrado alto; y hematoquecia, sangre roja por el ano, de origen bajo. Lo primero es evaluar la gravedad con los signos vitales: frecuencia cardíaca, presión, ortostatismo, diuresis y estado mental, que la clasifican en clases I a IV; el hematocrito tarda horas en bajar. La alta se debe sobre todo a úlcera péptica, gastritis, várices y Mallory-Weiss, y se estudia con endoscopia en las primeras 24 horas. La baja, a divertículos y angiodisplasia en mayores, hemorroides, fisuras, enfermedad inflamatoria y cáncer, y se estudia con colonoscopia. Siempre hago tacto rectal.»',
      repreguntas: [
        { q: '¿Por qué la melena es negra?', a: 'Las bacterias degradan la hemoglobina durante el tránsito: indica sangrado alto en general.' },
        { q: '¿Por qué el hematocrito inicial no refleja la pérdida?', a: 'Se pierden plasma y glóbulos rojos en igual proporción; baja a las 8–24 h por hemodilución.' },
        { q: '¿Cuál es la causa más frecuente de HDA?', a: 'La úlcera péptica.' },
        { q: '¿Qué datos indican una hemorragia grave?', a: 'FC ≥ 120, PAS < 100, oliguria, confusión, ortostatismo.' },
      ],
      fuentes: 'Instituto Merlín, «Hemorragia digestiva» · Apunte de Ortega, pp. 389–392 · Argente-Álvarez, cap. 42-9.',
    },
  ],
  noOlvidar: [
    { q: 'Disfagia orofaríngea vs esofágica', a: 'Al iniciar, con tos y aspiración (neuromuscular) vs después, retroesternal.' },
    { q: 'Obstructiva vs motora', a: 'Sólidos y progresiva (cáncer) vs sólidos y líquidos desde el inicio (acalasia).' },
    { q: 'Vómito vs regurgitación', a: 'Violento con náuseas vs sin esfuerzo.' },
    { q: 'Vómito pilórico', a: 'Alimentos de horas antes; chapoteo en ayunas, peristaltismo visible.' },
    { q: 'Mallory-Weiss', a: 'Desgarro esofagogástrico por vómitos → hematemesis.' },
    { q: 'Úlcera', a: 'H. pylori y AINE. Duodenal: calma con la comida. Complicaciones: hemorragia, perforación (Jobert), estenosis.' },
    { q: 'Gastritis A vs B', a: 'A autoinmune del cuerpo (anemia perniciosa) · B antral por H. pylori.' },
    { q: 'HD', a: 'Treitz. Hematemesis y melena: alta. Hematoquecia: baja. Primero la gravedad (signos vitales).' },
    { q: 'Causas', a: 'HDA: úlcera. HDB: divertículos y angiodisplasia en mayores.' },
  ],
};
