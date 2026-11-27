import type { ApunteUnidad } from './tipos';

/*
 * Examen general y signos vitales — apunte para el oral.
 * Base: Merlín («Signos vitales», «Pulso arterial y venoso», «Historia clínica» p. 7) y apunte de Ortega («Examen físico» pp. 30–46,
 * «Estados de nutrición» pp. 24–29), contrastados con Califano (cap. 10 Esfigmomanometría y termometría) y Argente (cap. 9 y 11).
 */
export const apunte: ApunteUnidad = {
  unidad: 'vitales',
  temas: [
    {
      tema: 'signos-vitales',
      titulo: 'Toma de los signos vitales',
      porque: [
        'Son **objetivos y medibles**, y de ellos depende la vida: muestran en un minuto si el paciente está estable, mejora o empeora.',
        '**PA = gasto cardíaco × resistencia periférica.** La **sistólica** depende sobre todo de la fuerza de eyección y la distensibilidad de las arterias; la **diastólica**, de la resistencia periférica y la duración de la diástole.',
        'Al desinflar el manguito, la sangre pasa en forma **turbulenta** por la arteria parcialmente comprimida: esos son los **ruidos de Korotkoff**. El primero marca la sistólica; cuando la arteria queda libre, el flujo vuelve a ser laminar y los ruidos **desaparecen**: diastólica.',
      ],
      bloques: [
        { t: 'def', text: 'Manifestaciones **objetivas, medibles y cuantificables** de cuya integridad depende la vida: **presión arterial, pulso (frecuencia cardíaca), frecuencia respiratoria y temperatura**; se suma la **saturación de oxígeno**.' },
        {
          t: 'cuadro',
          titulo: 'Valores normales en el adulto',
          head: ['Signo', 'Normal', 'Alteraciones'],
          filas: [
            ['**Presión arterial**', '< **130/85** mmHg', 'Limítrofe 130–139/85–89 · **HTA ≥ 140/90** · hipotensión'],
            ['**Frecuencia cardíaca**', '**60–100** lpm', '**Taquicardia** > 100 · **bradicardia** < 60 (en el pulso: taquifigmia y bradifigmia)'],
            ['**Frecuencia respiratoria**', '**12–20** rpm (varía según la fuente)', 'Taquipnea · bradipnea · apnea'],
            ['**Temperatura axilar**', '≈ 36–37 °C', 'Febrícula · fiebre (> 37,2 matinal, > 37,7 vespertina) · hipotermia < 35 °C'],
            ['**Saturación de O2**', '≈ **97 %**', '**< 90 %**: hipoxemia importante'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Presión arterial: preparación',
          items: [
            'Material: **tensiómetro** (aneroide, de mercurio o digital) con manguito del **tamaño adecuado** y estetoscopio.',
            'Paciente **sentado 5 minutos**, espalda apoyada, **piernas sin cruzar**, sin hablar; sin café, mate, tabaco ni ejercicio en los 30 minutos previos.',
            'Brazo **descubierto, apoyado a la altura del corazón**. Manguito **2–3 cm por encima del pliegue del codo**, centrado sobre la arteria braquial.',
          ],
        },
        {
          t: 'paso',
          titulo: 'Presión arterial: técnica (método auscultatorio)',
          ordenada: true,
          items: [
            '**Método palpatorio primero**: palpar el pulso radial e inflar hasta que **desaparezca** (estima la sistólica y evita el agujero auscultatorio).',
            'Apoyar la **membrana** sobre la arteria braquial (sin meterla bajo el manguito) e inflar **20–30 mmHg por encima** de ese valor.',
            'Desinflar a **2–3 mmHg por segundo**.',
            '**Primer ruido** (fase I de Korotkoff) = **sistólica**. **Desaparición** de los ruidos (fase V) = **diastólica**.',
            'La primera vez, medir **en ambos brazos** (diferencia normal hasta 10 mmHg; > 15–20 es patológica) y registrar el mayor. Repetir y **promediar**.',
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Clasificación de la presión arterial (en consultorio, mayores de 16 años)',
          head: ['Categoría', 'Sistólica', 'Diastólica'],
          filas: [
            ['Normal', '< 130', '< 85'],
            ['Limítrofe', '130–139', '85–89'],
            ['**HTA nivel 1**', '140–159', '90–99'],
            ['**HTA nivel 2**', '160–179', '100–109'],
            ['**HTA nivel 3**', '≥ 180', '≥ 110'],
            ['**Sistólica aislada**', '≥ 140', '< 90'],
          ],
        },
        { t: 'ojo', text: '**Agujero (pozo) auscultatorio**: los ruidos desaparecen y reaparecen entre las fases II y III (hipertensos, estenosis aórtica). Si no se palpó antes la sistólica, se la **subestima**. Si los ruidos no desaparecen nunca, la diastólica se toma en la **fase IV** (atenuación).' },
        {
          t: 'paso',
          titulo: 'Pulso y frecuencia cardíaca',
          items: [
            'Con los **dedos índice y medio** (nunca el pulgar), sobre la **arteria radial**, contando **un minuto** (o 30 s × 2 si es regular).',
            'Se evalúa: **frecuencia, ritmo, amplitud, tensión, forma** y **simetría** (comparar ambos lados).',
            'Si el pulso es irregular, contar la frecuencia **auscultando el corazón** (foco aórtico): en la fibrilación auricular hay **déficit de pulso**.',
          ],
        },
        {
          t: 'paso',
          titulo: 'Frecuencia respiratoria',
          items: [
            'Contarla **sin avisarle** al paciente (si no, la modifica), como si se siguiera tomando el pulso.',
            'Una respiración = inspiración + espiración; contar **un minuto**. Observar también **tipo** (costoabdominal en el hombre, costal superior en la mujer), **ritmo** y **profundidad**.',
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Temperatura: dónde se toma',
          head: ['Sitio', 'Cómo', 'Ojo'],
          filas: [
            ['**Axilar**', 'Axila **seca**; brazo contra el tórax, 3–5 min (mercurio)', 'La más usada; la más baja'],
            ['**Bucal**', 'Bajo la lengua, boca cerrada', 'Alterada por comidas y bebidas'],
            ['**Rectal**', 'Decúbito lateral, bulbo lubricado', '**La más confiable**: ≈ 0,5 °C más alta'],
            ['Ótica, inguinal', 'Conducto auditivo · pliegue inguinal (niños)', '—'],
          ],
        },
        { t: 'paso', titulo: 'Saturación de oxígeno', text: 'Con el **oxímetro de pulso** en un dedo (sin esmalte, bien perfundido). Normal ≈ **97 %**; **< 90 %** orienta a hipoxemia significativa y obliga a pedir gases en sangre.' },
        { t: 'maniobras', ids: ['pulso-radial-afratif', 'tension-arterial', 'maniobra-osler', 'hipotension-ortostatica', 'torax-inspeccion-dinamica'] },
      ],
      oral: '«Los signos vitales son manifestaciones objetivas, medibles, de cuya integridad depende la vida: presión arterial, pulso o frecuencia cardíaca, frecuencia respiratoria y temperatura, y se agrega la saturación de oxígeno. Para la presión arterial el paciente está sentado cinco minutos, con la espalda apoyada, las piernas sin cruzar y el brazo a la altura del corazón; coloco el manguito dos o tres centímetros por encima del codo, primero palpo el pulso radial e inflo hasta que desaparece, después apoyo la membrana sobre la braquial, inflo veinte o treinta milímetros por encima y desinflo de a dos o tres por segundo: el primer ruido de Korotkoff es la sistólica y la desaparición de los ruidos, la diastólica. Lo normal es menos de 130/85 e hipertensión desde 140/90. El pulso lo tomo en la radial con índice y medio durante un minuto, evaluando frecuencia —normal 60 a 100—, ritmo, amplitud y simetría. La frecuencia respiratoria la cuento sin que el paciente lo sepa, normal 12 a 20. La temperatura axilar normal es de 36 a 37 grados, y la saturación normal ronda el 97 por ciento.»',
      repreguntas: [
        { q: '¿Por qué se palpa primero la radial antes de auscultar?', a: 'Para estimar la sistólica y no subestimarla si hay un agujero auscultatorio.' },
        { q: '¿Qué pasa si el manguito es chico para el brazo?', a: 'Sobrestima la presión (en obesos hay que usar uno más grande).' },
        { q: '¿Qué son los ruidos de Korotkoff?', a: 'Los ruidos de la sangre pasando en forma turbulenta por la arteria parcialmente comprimida al desinflar el manguito: fase I sistólica, fase V diastólica.' },
        { q: '¿Qué es el déficit de pulso?', a: 'Diferencia entre la frecuencia auscultada en el corazón y la palpada en la radial: algunos latidos no llegan a la periferia (fibrilación auricular).' },
        { q: '¿Cuánto sube la frecuencia cardíaca con la fiebre?', a: 'Alrededor de 10 latidos por cada grado por encima de 37 °C (la fiebre tifoidea da bradicardia relativa).' },
      ],
      fuentes: 'Instituto Merlín, «Signos vitales» y «Pulso arterial y venoso» · Baré-Califano, cap. 10 · Argente-Álvarez, cap. 9 y 11 · apunte de Ortega, p. 21.',
    },
    {
      tema: 'examen-general',
      titulo: 'Examen físico general (impresión general)',
      porque: [
        'Es la **inspección** del paciente completo antes de ir por regiones: en segundos orienta si está grave, qué aparato está en juego y cómo vive su enfermedad.',
        'Muchas posturas son **defensas**: el paciente elige la posición que le alivia el dolor o la falta de aire (ortopnea, plegaria mahometana, gatillo de fusil).',
      ],
      bloques: [
        { t: 'def', text: 'Evaluación del paciente **en su conjunto** antes del examen por regiones: **conciencia, actitud, decúbito, facies, marcha, hábito constitucional, estado de nutrición e hidratación**, más piel y faneras, TCS, ganglios y SOMA.' },
        {
          t: 'cuadro',
          titulo: 'Qué se evalúa, en orden',
          head: ['', 'Qué es', 'Ejemplos de hallazgos'],
          filas: [
            ['**Conciencia**', 'Nivel (despierto) y contenido (orientado en tiempo, espacio y persona)', 'Lúcido · confuso · somnoliento · obnubilado · estupor · coma'],
            ['**Actitud**', 'Relación de los segmentos del cuerpo entre sí', 'Hemipléjica, parkinsoniana, cerebelosa, tabética, miopática'],
            ['**Decúbito**', 'Posición que adopta acostado', 'Activo **indiferente** (normal) · activo **preferencial** · activo **obligado** · **pasivo**'],
            ['**Facies**', 'Expresión, forma y color de la cara', 'Ver abajo'],
            ['**Marcha**', 'Cómo camina', 'Hemipléjica (en guadaña), parkinsoniana, atáxica, cerebelosa (de ebrio), en steppage, de pato'],
            ['**Hábito**', 'Proporciones del cuerpo', '**Longilíneo** (asténico) · **mediolíneo** · **brevilíneo** (pícnico)'],
            ['**Nutrición**', 'IMC = peso / talla²', 'Normal 18,5–24,9 · sobrepeso 25–29,9 · **obesidad ≥ 30** · desnutrición < 18,5'],
            ['**Hidratación**', 'Mucosas, piel, pliegue', 'Mucosas secas, **signo del pliegue**, ojos hundidos, sed, oliguria'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Decúbitos que orientan',
          head: ['Decúbito', 'Cuándo'],
          filas: [
            ['**Ortopneico** (sentado, obligado)', 'Insuficiencia cardíaca izquierda, edema agudo de pulmón, asma grave'],
            ['**Genupectoral** (plegaria mahometana)', 'Derrame pericárdico'],
            ['**Gatillo de fusil**', '**Síndrome meníngeo**'],
            ['**Lateral** sobre el lado **sano**', 'Pleuritis seca (no apoyar lo que duele)'],
            ['**Lateral** sobre el lado **enfermo**', 'Derrame pleural grande (deja libre el pulmón sano)'],
            ['**Ventral**', 'Cólicos, úlcera, pancreatitis'],
            ['**Pasivo** (dorsal)', 'Coma, caquexia, shock, parálisis'],
            ['**Opistótonos**', 'Tétanos'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Facies para reconocer',
          head: ['Facies', 'Cómo es', 'Pensar en'],
          filas: [
            ['**Hipocrática**', 'Pálida, sudor frío, ojos y sienes hundidos, nariz afilada', 'Peritonitis, estado preagónico'],
            ['**Cushingoide**', 'Cara de **luna llena**, rubicunda', 'Síndrome de Cushing, corticoides'],
            ['**Hipertiroidea**', 'Ojos brillantes, **exoftalmos**, mirada fija', 'Enfermedad de Graves'],
            ['**Mixedematosa**', 'Abotagada, pálida, párpados edematosos, cejas ralas', 'Hipotiroidismo'],
            ['**Acromegálica**', 'Rasgos toscos, mandíbula y nariz grandes', 'Acromegalia'],
            ['**Parkinsoniana**', 'Inexpresiva, «de póker», sin parpadeo', 'Parkinson'],
            ['**Mitral**', 'Mejillas rojo-violáceas', 'Estenosis mitral'],
            ['**Abotagada**', 'Párpados edematosos, pálida', 'Síndrome nefrótico'],
            ['**Leonina**', 'Nódulos y pliegues engrosados', 'Lepra'],
          ],
        },
      ],
      oral: '«El examen físico general es la evaluación del paciente en su conjunto antes de examinarlo por regiones. Evalúo la conciencia, en su nivel y su contenido; la actitud, que es la relación de los segmentos entre sí; el decúbito, que puede ser activo indiferente, preferencial u obligado, o pasivo; la facies; la marcha; el hábito constitucional, longilíneo, mediolíneo o brevilíneo; el estado de nutrición con el índice de masa corporal, normal entre 18,5 y 24,9; y el de hidratación, por las mucosas y el signo del pliegue. Además piel y faneras, tejido celular subcutáneo, ganglios y SOMA, y los signos vitales.»',
      repreguntas: [
        { q: '¿Qué decúbito adopta un paciente con meningitis?', a: 'En gatillo de fusil: lateral, con la columna en hiperextensión y los muslos flexionados sobre el abdomen.' },
        { q: '¿Qué es un decúbito activo obligado? Dame un ejemplo.', a: 'El único en el que el paciente puede estar por su enfermedad: el ortopneico en la insuficiencia cardíaca o la plegaria mahometana en el derrame pericárdico.' },
        { q: '¿Cómo es la facies hipocrática?', a: 'Pálida, con sudor frío, ojos y sienes hundidos y nariz afilada: peritonitis grave o estado preagónico.' },
      ],
      fuentes: 'Apunte de Ortega, «Examen físico» pp. 30–46 y «Estados de nutrición» pp. 24–29 · Instituto Merlín, «Historia clínica» p. 7.',
    },
  ],
  noOlvidar: [
    { q: 'Los signos vitales', a: 'Presión arterial, pulso/frecuencia cardíaca, frecuencia respiratoria, temperatura (+ saturación).' },
    { q: 'Valores normales', a: 'PA < 130/85 · FC 60–100 · FR 12–20 · T axilar 36–37 °C · SatO2 ≈ 97 %.' },
    { q: 'HTA', a: '≥ 140/90. Nivel 1: 140–159/90–99 · nivel 2: 160–179/100–109 · nivel 3: ≥ 180/≥ 110.' },
    { q: 'Técnica de la PA en una frase', a: 'Sentado 5 min, brazo a la altura del corazón, palpatorio primero, inflar 20–30 por encima, desinflar 2–3 mmHg/s: fase I sistólica, fase V diastólica.' },
    { q: 'Agujero auscultatorio', a: 'Silencio entre las fases II y III: se evita palpando la sistólica primero.' },
    { q: 'Pulso', a: 'Índice y medio en la radial, 1 minuto: frecuencia, ritmo, amplitud, tensión, forma, simetría.' },
    { q: 'Temperatura más confiable', a: 'Rectal (≈ 0,5 °C más alta que la axilar).' },
    { q: 'Decúbitos clave', a: 'Ortopneico (IC) · plegaria mahometana (derrame pericárdico) · gatillo de fusil (meníngeo).' },
    { q: 'IMC', a: 'Peso/talla²: normal 18,5–24,9; obesidad ≥ 30.' },
  ],
};
