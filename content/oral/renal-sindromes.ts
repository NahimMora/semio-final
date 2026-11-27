import type { ApunteUnidad } from './tipos';

/*
 * Síndromes renales e insuficiencia renal — apunte para el oral.
 * Base: apunte de Ortega («Insuficiencia renal» pp. 429–439, «Síndrome nefrótico» pp. 440–444) y clases de Ortega
 * (nefrítico; insuficiencia renal; pizarra de AEIOU), contrastados con Argente cap. 48-1, 48-2 y 48-4.
 */
export const apunte: ApunteUnidad = {
  unidad: 'renal-sindromes',
  intro: {
    titulo: 'Nefrótico vs nefrítico',
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'Síndrome nefrótico', 'Síndrome nefrítico'],
        filas: [
          ['**Qué falla**', 'El filtro deja pasar **proteínas**', 'El capilar glomerular **se inflama y se rompe**'],
          ['**Proteinuria**', '**> 3,5 g/24 h**', '< 3,5 g/24 h'],
          ['**Hematuria**', 'No (o mínima)', '**Sí**: dismórfica, **cilindros hemáticos**'],
          ['**Edema**', '**Intenso**, blando, declive → anasarca', 'Leve, **periorbitario**'],
          ['**HTA**', 'Poco frecuente', '**Sí**'],
          ['**Función renal**', 'En general conservada', '**Oliguria, hiperazoemia**'],
          ['**Otros**', '**Hipoalbuminemia < 3**, **hiperlipidemia**, trombosis', 'Antecedente de **faringitis** 1–2 semanas antes'],
          ['**Causa típica**', 'Niño: **cambios mínimos** · adulto: **membranosa** · secundaria: **diabetes**', '**Glomerulonefritis postestreptocócica**'],
        ],
      },
    ],
  },
  temas: [
    {
      tema: 'nefrotico',
      titulo: 'Síndrome nefrótico',
      porque: [
        'El glomérulo deja escapar **proteínas** → **hipoalbuminemia** → baja la presión oncótica y el agua **sale al intersticio** (edema).',
        'Como baja el volumen dentro de los vasos, se activa el **SRAA**: el riñón **retiene sodio y agua**, que vuelve a salir al intersticio. Así se llega a la **anasarca**. Se agrega **hiperlipidemia** (Ortega aclara que su mecanismo todavía no se conoce bien).',
      ],
      bloques: [
        { t: 'def', text: 'Aumento de la permeabilidad del capilar glomerular a las proteínas: **edema**, **proteinuria > 3,5 g/24 h**, **hipoalbuminemia < 3 g/dl** e **hiperlipidemia** con o sin lipiduria.' },
        {
          t: 'cuadro',
          titulo: 'Causas',
          head: ['', 'Ejemplos'],
          filas: [
            ['**Primarias**', '**Cambios mínimos** (la más frecuente en **niños**), **membranosa** (la más frecuente en **adultos**), glomeruloesclerosis focal y segmentaria'],
            ['**Secundarias**', '**Diabetes** (la más frecuente), **LES**, **amiloidosis** (ancianos), infecciones, neoplasias, fármacos (AINE, captopril, sales de oro)'],
          ],
        },
        { t: 'paso', titulo: 'Clínica y estudios', text: 'Edema **blando, con fóvea**, que empieza en párpados y zonas declives y progresa a **anasarca** (ascitis, derrame pleural); orina **espumosa**. Laboratorio: proteinuria de 24 h, albúmina, colesterol; sedimento con **cuerpos ovales grasos** y lipiduria. **Complicaciones**: **trombosis** (venosa renal), infecciones, hiperlipidemia.' },
      ],
      oral: '«El síndrome nefrótico es el aumento de la permeabilidad del capilar glomerular a las proteínas, que se manifiesta por edema, proteinuria mayor de 3,5 gramos en 24 horas, hipoalbuminemia menor de 3 gramos por decilitro e hiperlipidemia. La pérdida de albúmina baja la presión oncótica, el líquido pasa al intersticio y la hipovolemia activa el sistema renina-angiotensina-aldosterona, que retiene sodio y agua y agrava el edema hasta la anasarca. Sus causas primarias son los cambios mínimos, la más frecuente en niños, y la glomerulonefritis membranosa, la más frecuente en adultos; la secundaria más frecuente es la diabetes. El edema es blando, con fóvea y declive; la orina es espumosa y el sedimento muestra cuerpos ovales grasos. Se complica con trombosis e infecciones.»',
      repreguntas: [
        { q: '¿Cuáles son los criterios del síndrome nefrótico?', a: 'Proteinuria > 3,5 g/24 h, hipoalbuminemia < 3 g/dl, edema e hiperlipidemia.' },
        { q: '¿Cuál es la causa más frecuente en niños? ¿Y en adultos?', a: 'Niños: cambios mínimos. Adultos: membranosa (secundaria: diabetes).' },
        { q: '¿Qué complicaciones tiene?', a: 'Infecciones (peritonitis, celulitis) y trombosis.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 440–444 · Argente-Álvarez, cap. 48-1.',
    },
    {
      tema: 'nefritico',
      titulo: 'Síndrome nefrítico',
      porque: [
        'Los **inmunocomplejos** (tras una infección por estreptococo) se depositan en el glomérulo y lo **inflaman**: los capilares se rompen y pasan **glóbulos rojos** (hematuria) y el filtrado **cae**.',
        'Con menos filtrado, el riñón **retiene sodio y agua** (oliguria, edema, **HTA**) y **urea y creatinina** (hiperazoemia).',
      ],
      bloques: [
        { t: 'def', text: 'Inflamación glomerular aguda que se manifiesta por **hematuria**, **HTA** e **hiperazoemia** (las «**3 H**»), con **oliguria** y **edema** leve.' },
        {
          t: 'cuadro',
          titulo: 'Glomerulonefritis postestreptocócica (la causa más frecuente)',
          head: ['Momento', 'Qué pasa'],
          filas: [
            ['Día 0', '**Faringitis** o **impétigo** por estreptococo beta hemolítico del grupo A'],
            ['**1–2 semanas** después', 'Inmunocomplejos depositados en los capilares glomerulares'],
            ['Clínica', '**Orina oscura**, **edema palpebral**, **HTA**, **oliguria**'],
            ['Laboratorio', '**Hematuria dismórfica** y **cilindros hemáticos**; proteinuria < 3,5 g; urea y creatinina ↑; **ASTO ↑**, **C3 ↓**'],
            ['Evolución', 'En general **autolimitada**; vigilar IRA, encefalopatía hipertensiva, insuficiencia cardíaca'],
          ],
        },
      ],
      oral: '«El síndrome nefrítico es una inflamación glomerular aguda que se manifiesta con las tres H —hematuria, hipertensión e hiperazoemia— con oliguria y edema leve periorbitario. La causa más frecuente es la glomerulonefritis postestreptocócica: una a dos semanas después de una faringitis o un impétigo por estreptococo del grupo A, los inmunocomplejos se depositan en el glomérulo. La orina es oscura, el sedimento muestra hematuria dismórfica y cilindros hemáticos y la proteinuria es menor de 3,5 gramos; las antiestreptolisinas están elevadas y el complemento C3, bajo. En general es autolimitada, pero puede complicarse con insuficiencia renal aguda o encefalopatía hipertensiva.»',
      repreguntas: [
        { q: '¿Cuáles son las «3 H» del nefrítico?', a: 'Hematuria, hipertensión e hiperazoemia.' },
        { q: '¿Qué antecedente buscás?', a: 'Faringitis o impétigo 1–2 semanas antes (estreptococo del grupo A).' },
        { q: '¿Qué hallazgo del sedimento es característico?', a: 'Cilindros hemáticos y hematíes dismórficos.' },
      ],
      fuentes: 'Clase de Ortega, síndrome nefrítico · Argente-Álvarez, cap. 48-2.',
    },
    {
      tema: 'ira',
      titulo: 'Insuficiencia renal aguda',
      porque: [
        'Pensá el riñón como una **canilla**: puede fallar **antes** (no le llega sangre: **prerrenal**), **en el riñón mismo** (se dañan los túbulos: **renal**, sobre todo necrosis tubular) o **después** (la orina no sale: **posrenal**).',
        'En la **prerrenal** el túbulo está **sano** y, como «cree» que falta volumen, **reabsorbe todo el sodio**: sodio urinario **bajo**. En la **necrosis tubular** el túbulo está roto y **pierde sodio**: sodio urinario **alto**.',
      ],
      bloques: [
        { t: 'def', text: 'Deterioro **agudo** (horas a días) y **potencialmente reversible** de la función renal: aumento de la creatinina o caída de la diuresis (< 0,5 ml/kg/h por 6 h), con retención nitrogenada y alteraciones hidroelectrolíticas y ácido-base.' },
        {
          t: 'cuadro',
          titulo: 'RIFLE',
          head: ['Grado', 'Creatinina o filtrado'],
          filas: [
            ['**R**iesgo', 'Creatinina × 1,5 o FG ↓ > 25 %'],
            ['**I**njuria (lesión)', 'Creatinina × 2 o FG ↓ > 50 %'],
            ['**F**alla (insuficiencia)', 'Creatinina × 3 o FG ↓ > 75 %'],
            ['**L**oss (pérdida)', 'IRA que persiste **> 4 semanas**'],
            ['**E**SRD (terminal)', '**> 3 meses**'],
          ],
        },
        { t: 'ojo', text: '**AKIN** la estadifica de 1 a 3 con la creatinina (aumento ≥ 50 % o ≥ 0,3 mg/dl) y la **diuresis por hora** (< 0,5 ml/kg/h por 6 h).' },
        {
          t: 'cuadro',
          titulo: 'Causas',
          head: ['Tipo', 'Frecuencia', 'Causas'],
          filas: [
            ['**Prerrenal**', '**La más frecuente** (55 %)', '**Hipovolemia** (hemorragia, vómitos, diarrea, diuréticos), **insuficiencia cardíaca**, sepsis, AINE'],
            ['**Renal**', '40 %', '**Necrosis tubular aguda** (isquemia prolongada, **aminoglucósidos**, contraste), nefritis intersticial, glomerulonefritis'],
            ['**Posrenal**', '5 %', '**Obstrucción**: hipertrofia prostática, litiasis bilateral, tumores pelvianos'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Prerrenal vs necrosis tubular',
          head: ['', 'Prerrenal', 'NTA'],
          filas: [
            ['**Sodio urinario**', '**< 20 mEq/l**', '**> 40 mEq/l**'],
            ['FENa', '< 1 %', '> 2 %'],
            ['Sedimento', 'Normal', 'Cilindros granulosos y epiteliales'],
          ],
        },
        { t: 'paso', titulo: 'Clínica', text: '**Oligoanuria** (< 500 ml/día; la **anuria** sugiere obstrucción), signos de **deshidratación** (prerrenal) o de **sobrecarga** (edema, crepitantes, HTA), **síndrome urémico** (náuseas, vómitos, asterixis, encefalopatía, pericarditis), **acidosis** (Kussmaul) e **hiperpotasemia** (T picudas, arritmias).' },
      ],
      oral: '«La insuficiencia renal aguda es el deterioro agudo y potencialmente reversible de la función renal, con aumento de la creatinina o caída de la diuresis por debajo de 0,5 mililitros por kilo por hora durante 6 horas. Se clasifica con RIFLE: riesgo, creatinina por 1,5; injuria, por 2; falla, por 3; pérdida, más de 4 semanas; y terminal, más de 3 meses; o con los estadios AKIN. Las causas son prerrenales, las más frecuentes, por hipovolemia o insuficiencia cardíaca; renales, sobre todo la necrosis tubular aguda por isquemia o tóxicos como los aminoglucósidos; y posrenales, por obstrucción. En la prerrenal el túbulo está sano y retiene sodio: sodio urinario menor de 20; en la necrosis tubular lo pierde: mayor de 40, con cilindros. Clínicamente hay oliguria, sobrecarga de volumen, síndrome urémico, acidosis e hiperpotasemia.»',
      repreguntas: [
        { q: '¿Por qué el sodio urinario es bajo en la IRA prerrenal?', a: 'El túbulo está sano y reabsorbe todo el sodio para compensar la hipoperfusión.' },
        { q: '¿Qué te hace pensar en una causa posrenal?', a: 'Anuria brusca, globo vesical, hipertrofia prostática.' },
        { q: '¿Qué significa la L de RIFLE?', a: 'Pérdida de función: IRA que persiste más de 4 semanas.' },
        { q: '¿Cuál es la complicación más peligrosa?', a: 'La hiperpotasemia: arritmias ventriculares y paro.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 429–433 · Clases de Ortega, insuficiencia renal · Argente-Álvarez, cap. 48-4.',
    },
    {
      tema: 'erc',
      titulo: 'Enfermedad renal crónica e indicaciones de diálisis',
      porque: [
        'En la ERC se van perdiendo **nefronas**. Las que quedan **trabajan de más** (hiperfiltración) y eso termina dañándolas también: el proceso es **progresivo e irreversible**.',
        'Cuando quedan pocas, el riñón deja de **excretar** (urea, potasio, ácido), de **concentrar** (isostenuria, nicturia) y de **fabricar** (eritropoyetina → **anemia**; vitamina D → **hipocalcemia**).',
      ],
      bloques: [
        { t: 'def', text: 'Pérdida **progresiva e irreversible** de la función renal: daño renal o filtrado disminuido durante **más de 3 meses**. Causas principales: **diabetes**, **HTA** (nefroangioesclerosis), glomerulopatías, poliquistosis.' },
        {
          t: 'cuadro',
          titulo: 'Estadios por filtrado (ml/min/1,73 m²)',
          head: ['Estadio', 'Filtrado', ''],
          filas: [
            ['**G1**', '**≥ 90**', 'Daño con filtrado normal'],
            ['**G2**', '60–89', 'Descenso leve'],
            ['**G3**', '30–59', 'Moderado'],
            ['**G4**', '15–29', 'Severo'],
            ['**G5**', '**< 15**', '**Falla renal**: síndrome urémico, diálisis o trasplante'],
          ],
          marca: 4,
        },
        { t: 'paso', titulo: 'Clínica', text: '**Poliuria y nicturia** (no concentra) → oligoanuria; **anemia** (eritropoyetina); **HTA**; edemas; **acidosis** (Kussmaul); **hipocalcemia e hiperfosfatemia** (hiperparatiroidismo secundario); prurito, piel pálida amarillenta; **síndrome urémico** (náuseas, aliento urémico, pericarditis, encefalopatía, sangrado). **Ecografía**: **riñones chicos (< 10 cm)** — la diferencia con la aguda.' },
        { t: 'clave', titulo: 'Indicaciones de diálisis: AEIOU (pizarra de Ortega)', items: ['**A**cidosis grave: pH < 7,1 o bicarbonato < 15.', '**E**lectrolitos: **potasio > 7** (en la bibliografía, > 6,5 o refractario con cambios en el ECG).', '**I**ntoxicaciones dializables: metanol, litio, salicilatos.', '**O**verload: sobrecarga de volumen que no responde a diuréticos.', '**U**remia: urea > 200 o síntomas (encefalopatía, pericarditis).', 'Con **un** criterio alcanza. La oliguria sola, sin otro criterio, no es indicación.'] },
      ],
      oral: '«La enfermedad renal crónica es la pérdida progresiva e irreversible de la función renal, con daño o filtrado disminuido por más de 3 meses; sus causas principales son la diabetes y la hipertensión. Se estadifica por el filtrado: G1 mayor o igual a 90, G2 60 a 89, G3 30 a 59, G4 15 a 29 y G5 menor de 15, que es la falla renal con indicación de diálisis o trasplante. Clínicamente hay poliuria y nicturia por pérdida de la capacidad de concentrar, anemia por falta de eritropoyetina, hipertensión, acidosis, hipocalcemia e hiperfosfatemia, y en el estadio final el síndrome urémico. La ecografía muestra riñones chicos, lo que la diferencia de la aguda. Las indicaciones de diálisis se recuerdan con AEIOU: acidosis, electrolitos —hiperpotasemia—, intoxicaciones, sobrecarga de volumen y uremia.»',
      repreguntas: [
        { q: '¿Qué filtrado define el estadio G5?', a: 'Menor de 15 ml/min/1,73 m².' },
        { q: '¿Por qué el paciente con ERC tiene anemia?', a: 'Por déficit de eritropoyetina (normocítica normocrómica).' },
        { q: '¿Cómo diferenciás IRA de ERC en la ecografía?', a: 'En la crónica los riñones son chicos (< 10 cm).' },
        { q: '¿Cuáles son las indicaciones de diálisis?', a: 'AEIOU: acidosis, electrolitos (K), intoxicaciones, sobrecarga, uremia.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 436–439 · Clase de Ortega, insuficiencia renal (pizarra AEIOU, 18:10) · Argente-Álvarez, cap. 48-4.',
    },
  ],
  noOlvidar: [
    { q: 'Nefrótico', a: 'Proteinuria > 3,5 g, albúmina < 3, edema, hiperlipidemia. Niño: cambios mínimos; adulto: membranosa; secundaria: diabetes.' },
    { q: 'Nefrítico', a: '3 H: hematuria, HTA, hiperazoemia. Postestreptocócica: 1–2 semanas, cilindros hemáticos, ASTO ↑, C3 ↓.' },
    { q: 'RIFLE', a: '× 1,5 · × 2 · × 3 · > 4 semanas · > 3 meses.' },
    { q: 'IRA: causas', a: 'Prerrenal (55 %), renal (NTA), posrenal (5 %).' },
    { q: 'Sodio urinario', a: 'Prerrenal < 20 · NTA > 40.' },
    { q: 'ERC: estadios', a: 'G1 ≥ 90 · G2 60–89 · G3 30–59 · G4 15–29 · G5 < 15.' },
    { q: 'ERC: claves', a: 'Anemia, poliuria-nicturia, hipocalcemia, riñones chicos.' },
    { q: 'AEIOU', a: 'Acidosis, electrolitos (K > 7), intoxicaciones, overload, uremia.' },
  ],
};
