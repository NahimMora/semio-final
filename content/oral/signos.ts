import type { ApunteUnidad } from './tipos';

/*
 * Signos y síntomas generales — apunte para el oral.
 * Base: apunte de Ortega (Dolor pp. 2–4 · Disnea pp. 5–7 · Cianosis pp. 8–9 · Edema pp. 18–20 · Fiebre pp. 21–23) y Merlín
 * («Dolor», «Disnea cardíaca», «Signos vitales»), contrastados con Argente cap. 8–12 (Dolor desde p. 61).
 */
export const apunte: ApunteUnidad = {
  unidad: 'signos',
  temas: [
    /* ═════════ DOLOR ═════════ */
    {
      tema: 'dolor',
      titulo: 'Dolor',
      porque: [
        'El **nociceptor** (terminación libre) capta el estímulo → **1.ª neurona** en el ganglio de la raíz posterior → en el asta dorsal libera **sustancia P y glutamato** → la 2.ª neurona **cruza** y sube por la **vía espinotalámica** → tálamo → corteza.',
        'Dos cables: las fibras **Aδ** (mielínicas, rápidas) dan el dolor **somático**: agudo, punzante, bien localizado. Las **C** (amielínicas, lentas) dan el **visceral**: sordo, vago, tardío, mal localizado.',
        'El **referido** se explica por **convergencia**: la víscera y la piel del mismo segmento llegan a la misma neurona del asta dorsal, y el cerebro lo proyecta a la piel.',
      ],
      bloques: [
        { t: 'def', text: 'Sensación **molesta o aflictiva** de una parte del cuerpo, por causa interior o exterior, asociada a un **daño tisular real o potencial**. Es **subjetiva** y funciona como **mecanismo de defensa**.' },
        {
          t: 'cuadro',
          titulo: 'Clasificación',
          head: ['Tipo', 'Fibras y origen', 'Cómo es', 'Mecanismo / ejemplo'],
          filas: [
            ['**Somático**', 'Aδ · piel (superficial), músculo, hueso, articulación (profundo)', 'Agudo, punzante, **bien localizado**, empieza y termina rápido', 'Traumatismo, temperatura extrema, inflamación'],
            ['**Visceral**', 'C · órganos internos', 'Sordo, **vago**, tardío, **mal localizado**, con síntomas autonómicos (náuseas, sudoración)', '**Distensión** (cólico), **isquemia**, inflamación'],
            ['**Referido**', 'Convergencia en el asta dorsal', 'Se siente en piel **alejada** del órgano', 'Infarto inferior → epigastrio; vesícula → hombro derecho'],
            ['**Neuropático**', 'Lesión del propio sistema nervioso', 'Crónico, quemante, **sin estímulo** externo; no responde a AINE', 'Dolor fantasma, talámico, polineuritis'],
            ['**Psicógeno**', 'Sin lesión demostrable', 'Esporádico, se relaciona con perturbaciones mentales', 'Hipocondría, neurosis'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Cómo se interroga: ALICIA (+ desencadenantes y acompañantes)',
          head: ['', 'Qué pregunto'],
          filas: [
            ['**A**ntigüedad', '¿Desde cuándo? **Agudo** (minutos a 4 semanas, con hiperactividad simpática) · subagudo (hasta 4 meses) · **crónico** (> 4 meses).'],
            ['**L**ocalización', '¿Dónde? Que lo señale con un dedo (somático) o con la mano (visceral).'],
            ['**I**rradiación', '¿Se corre? Cólico renal → genitales; angina → brazo izquierdo y mandíbula; pancreatitis → en cinturón.'],
            ['**C**arácter', '¿Cómo es? Ver el cuadro de abajo.'],
            ['**I**ntensidad', 'Escala del **0 al 10**; caritas en niños; leve, moderado, intenso.'],
            ['**A**tenuantes y agravantes', 'Qué lo alivia o lo empeora (posición, comidas, fármacos). Además: **desencadenantes** y **síntomas acompañantes**.'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Carácter del dolor',
          head: ['Carácter', 'Como si…', 'Ejemplo'],
          filas: [
            ['**Opresivo** (constrictivo)', 'le apretaran', 'Angina, infarto'],
            ['**Urente** (quemante)', 'le quemara', 'Úlcera, herpes zóster'],
            ['**Cólico**', 'retorcijón que va y viene', 'Cólico biliar, renal, intestinal'],
            ['**Transfixiante**', 'lo atravesara', 'Pancreatitis aguda'],
            ['**Pulsátil**', 'latiera', 'Absceso, forúnculo'],
            ['**Punzante** (lancinante)', 'puntada', 'Pleuritis, neumonía'],
            ['**Gravativo**', 'peso', 'Hepatomegalia'],
            ['**Terebrante**', 'taladro', 'Dolor dental'],
            ['**Desgarrante**', 'se rompiera', 'Aneurisma disecante'],
            ['**Fulgurante**', 'descarga eléctrica', 'Neuralgia, polineuritis'],
          ],
        },
        {
          t: 'clave',
          titulo: 'Términos',
          items: [
            '**Alodinia**: dolor ante un estímulo que normalmente **no** duele.',
            '**Hiperalgesia**: umbral **bajo**: un estímulo doloroso duele más.',
            '**Hiperpatía**: umbral **alto**, pero una vez superado el dolor es máximo.',
            '**Analgesia**: no duele ante un estímulo doloroso · **hipoalgesia**: duele menos · **neuralgia**: dolor en el territorio de un nervio.',
          ],
        },
      ],
      oral: '«El dolor es una sensación molesta o aflictiva de una parte del cuerpo, por causa interna o externa, asociada a un daño tisular real o potencial; es subjetivo y cumple una función de defensa. Se conduce desde el nociceptor por fibras A delta, rápidas, que dan el dolor somático, agudo y bien localizado, y por fibras C, lentas, que dan el visceral, sordo y mal localizado; la segunda neurona cruza y sube por la vía espinotalámica hasta el tálamo y la corteza. Se clasifica en somático, visceral, referido —por convergencia en el asta dorsal—, neuropático y psicógeno. Para interrogarlo uso ALICIA: antigüedad, localización, irradiación, carácter, intensidad, y atenuantes o agravantes, y además pregunto desencadenantes y síntomas acompañantes.»',
      repreguntas: [
        { q: '¿Por qué el dolor visceral se localiza mal?', a: 'Porque va por fibras C, lentas, con pocas terminaciones y por vías multisinápticas; además las vísceras se originan en la línea media y arrastran su inervación.' },
        { q: '¿Qué es el dolor referido? Dame un ejemplo.', a: 'Dolor que se siente en piel alejada del órgano porque la víscera y ese dermatoma convergen en la misma neurona del asta dorsal. El infarto inferior duele en el epigastrio.' },
        { q: '¿Qué diferencia al dolor neuropático?', a: 'Nace de la lesión del sistema nervioso, persiste sin estímulo, es crónico, no responde a AINE y se acompaña de alodinia o hiperpatía.' },
        { q: '¿Cuándo es crónico?', a: 'Cuando dura más de 4 meses (agudo hasta 4 semanas).' },
      ],
      fuentes: 'Apunte de Ortega, «Dolor», pp. 2–4 · Instituto Merlín, «Dolor» · Argente-Álvarez, cap. 8 (pp. 61–72).',
    },

    /* ═════════ FIEBRE ═════════ */
    {
      tema: 'fiebre',
      titulo: 'Fiebre',
      porque: [
        'Un **pirógeno exógeno** (germen, toxina) activa macrófagos y monocitos → liberan **pirógenos endógenos** (IL-1, IL-6, TNF) → en el hipotálamo anterior inducen **PGE2** → sube el **termostato** (punto de ajuste).',
        'Con el termostato más alto, el cuerpo «siente frío»: **escalofríos**, vasoconstricción y abrigo hasta llegar al nuevo valor. Cuando el estímulo cede, el termostato baja: **sudoración** y vasodilatación.',
        'En la **hipertermia** el termostato está normal: el cuerpo produce o recibe más calor del que puede disipar. Por eso **los antitérmicos no sirven**.',
      ],
      bloques: [
        { t: 'def', text: 'Elevación **regulada** de la temperatura corporal por encima de lo normal, por **reprogramación del centro termorregulador del hipotálamo** mediada por citocinas ante un estímulo pirogénico.' },
        {
          t: 'clave',
          titulo: 'Valores',
          items: [
            'Normal: bucal **36,8 ± 0,4 °C**; rectal ≈ 0,5 °C más; axilar más baja.',
            'Fiebre: **> 37,2 °C a la mañana** o **> 37,7 °C a la tarde** (ritmo circadiano).',
            'Febrícula 37–37,5 · leve 37,5–38 · moderada 38–39 · alta > 39 · **hiperpirexia > 41,5 °C**.',
            '**Hipotermia** < 35 °C (central).',
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Fiebre vs hipertermia',
          head: ['', 'Fiebre', 'Hipertermia'],
          filas: [
            ['Termostato', '**Elevado** (pirógenos, PGE2)', '**Normal**'],
            ['Mecanismo', 'El cuerpo genera y conserva calor a propósito', 'Exceso de producción o falla en disipar calor, o daño del centro'],
            ['Ejemplos', 'Infecciones, neoplasias, colagenopatías, fármacos', 'Golpe de calor, ejercicio intenso, tirotoxicosis, síndrome neuroléptico maligno'],
            ['Antitérmicos', 'Sirven', '**No sirven**: enfriamiento físico'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Etapas',
          ordenada: true,
          items: [
            '**Ascenso**: frío, **escalofríos**, piloerección, vasoconstricción (piel pálida y fría).',
            '**Fastigio** (meseta): calor, facies rubicunda, sed, taquicardia, cefalea, mialgias.',
            '**Descenso**: **en crisis** (brusco, con sudoración: neumonía) o **en lisis** (gradual: fiebre tifoidea).',
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Curvas térmicas',
          head: ['Tipo', 'Cómo es', 'Ejemplo'],
          filas: [
            ['**Continua**', 'Siempre alta; oscila **< 1 °C** por día', 'Neumonía, fiebre tifoidea'],
            ['**Remitente**', 'Oscila **> 1 °C** pero **nunca vuelve a lo normal**', 'Supuraciones, bronconeumonía'],
            ['**Intermitente** (séptica, héctica)', 'Picos que **vuelven a lo normal** cada día', 'Abscesos, TBC miliar, sepsis'],
            ['**Recurrente**', 'Días de fiebre alternando con **días sin fiebre**', 'Paludismo (terciana, cuartana), Pel-Ebstein (Hodgkin), en dromedario'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Fiebre de origen desconocido',
          text: '**≥ 38,3 °C** en varias tomas · más de **3 semanas** · sin diagnóstico tras **una semana de estudio** internado. Causas: **infecciones** (TBC, endocarditis), **neoplasias** (linfomas), **colagenopatías**.',
        },
        { t: 'ojo', text: '**Síndrome febril** no es solo la temperatura: se acompaña de taquicardia (≈ 10 lpm por grado), taquipnea, escalofríos, sed, oliguria, anorexia, astenia y cefalea. Excepción: la fiebre tifoidea da **bradicardia relativa**.' },
      ],
      oral: '«La fiebre es una elevación regulada de la temperatura por encima de lo normal, por reprogramación del centro termorregulador del hipotálamo. Un pirógeno exógeno activa a los macrófagos, que liberan pirógenos endógenos —interleucina 1, 6 y TNF—; en el hipotálamo se produce prostaglandina E2 y sube el punto de ajuste. Se considera fiebre más de 37,2 a la mañana o 37,7 a la tarde. Tiene tres etapas: ascenso con escalofríos, fastigio y descenso, en crisis o en lisis. Por su curva puede ser continua, remitente, intermitente o recurrente. Se diferencia de la hipertermia, donde el termostato es normal y falla la pérdida de calor, por eso no responde a antitérmicos.»',
      repreguntas: [
        { q: '¿Por qué el paciente tiene escalofríos si tiene fiebre?', a: 'Porque el termostato subió: con la temperatura todavía por debajo del nuevo valor, el cuerpo genera calor temblando y cierra los vasos de la piel.' },
        { q: '¿Qué diferencia hay entre remitente e intermitente?', a: 'En la remitente la temperatura oscila pero nunca vuelve a lo normal; en la intermitente vuelve a lo normal cada día.' },
        { q: '¿Qué es la fiebre de origen desconocido?', a: '≥ 38,3 °C durante más de 3 semanas sin diagnóstico tras una semana de estudio internado.' },
      ],
      fuentes: 'Apunte de Ortega, «Fiebre», pp. 21–23 · Argente-Álvarez, cap. 9 (taquicardia de 10 lpm por grado, bradicardia relativa).',
    },

    /* ═════════ DISNEA ═════════ */
    {
      tema: 'disnea',
      titulo: 'Disnea',
      porque: [
        'Aparece cuando el **trabajo respiratorio** que hace falta supera lo que el paciente percibe como normal: o necesita **ventilar más**, o le cuesta **mover el aire**, o le cuesta **expandir** el pulmón, o los **músculos** no alcanzan.',
        '**Ortopnea**: acostado vuelve sangre de las piernas al tórax → **congestión pulmonar** (insuficiencia cardíaca izquierda) y el diafragma sube. Sentado mejora.',
        '**Disnea paroxística nocturna**: de noche se reabsorbe el edema de las piernas → aumenta el volumen → la presión capilar pulmonar sube y lo **despierta** con falta de aire.',
      ],
      bloques: [
        { t: 'def', text: 'Sensación **subjetiva** de falta de aire: respiración **consciente, desagradable y trabajosa**. Componente subjetivo (lo que siente) y objetivo (uso de músculos accesorios, taquipnea, tiraje).' },
        {
          t: 'cuadro',
          titulo: 'Mecanismos (causas)',
          head: ['Mecanismo', 'Ejemplos'],
          filas: [
            ['↑ **Requerimientos** ventilatorios', 'Ejercicio, hipoxemia, acidosis (Kussmaul), anemia, TEP'],
            ['↑ **Resistencia** de la vía aérea', 'Asma, EPOC, cuerpo extraño'],
            ['↓ **Distensibilidad** del pulmón o del tórax', 'Edema de pulmón, fibrosis, derrame, neumotórax, cifoescoliosis'],
            ['Falla **neuromuscular**', 'Miastenia, Guillain-Barré, lesión medular'],
            ['**Psicógena**', 'Ansiedad, pánico (hiperventilación → hipocapnia)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Clasificación',
          head: ['Según', 'Tipos'],
          filas: [
            ['**Forma**', '**Aguda** (minutos a horas: neumotórax, TEP, asma, edema agudo de pulmón) · **crónica** (semanas a meses: EPOC, IC, anemia, obesidad)'],
            ['**Clase funcional**', '**I** grandes esfuerzos · **II** medianos (caminar) · **III** pequeños (vestirse) · **IV** en reposo'],
            ['**Posición**', '**Ortopnea** (acostado: IC izquierda) · **trepopnea** (decúbito lateral: derrame) · **platipnea** (de pie, mejora acostado: síndrome hepatopulmonar)'],
            ['**Momento**', '**Disnea paroxística nocturna**: lo despierta, mejora sentado (IC). Con sibilancias: **asma cardíaca**'],
            ['**Tiempo respiratorio**', '**Inspiratoria** (obstrucción alta: estridor o cornaje, tiraje) · **espiratoria** (asma, EPOC)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Ritmos respiratorios patológicos',
          head: ['Ritmo', 'Cómo es', 'Cuándo'],
          filas: [
            ['**Cheyne-Stokes**', 'Respiraciones que crecen y decrecen en amplitud y terminan en **apnea**', 'IC grave, lesiones neurológicas'],
            ['**Biot**', 'Respiraciones **irregulares** con apneas de duración variable', 'Daño bulbar, meningitis'],
            ['**Kussmaul**', 'Respiraciones **amplias, profundas** y regulares', '**Acidosis metabólica** (cetoacidosis, uremia)'],
          ],
        },
        { t: 'ojo', text: 'La **frecuencia respiratoria normal** varía según el texto: Merlín 12–16, Califano 16–20, el apunte de Ortega 16–24 rpm. En el oral decí **12 a 20** y aclará que el límite cambia según la fuente. **Taquipnea** es FR aumentada; **disnea** es la sensación: un paciente puede estar taquipneico sin disnea.' },
        { t: 'ojo', text: 'Clase funcional: el apunte de Ortega agrega un grado **V** (edema agudo de pulmón, según Hodara). La clasificación de la **NYHA** tiene **cuatro** clases: es la que conviene decir.' },
      ],
      oral: '«La disnea es la sensación subjetiva de falta de aire, una respiración consciente, desagradable y trabajosa; tiene un componente subjetivo y uno objetivo, como el uso de músculos accesorios. Se produce por aumento de los requerimientos ventilatorios, aumento de la resistencia de la vía aérea, disminución de la distensibilidad del pulmón o la caja torácica, falla neuromuscular o causas psicógenas. Se clasifica por su forma en aguda o crónica; por clase funcional de I a IV según el esfuerzo que la desencadena; y por la posición: ortopnea, típica de la insuficiencia cardíaca izquierda, trepopnea en el derrame y platipnea. La disnea paroxística nocturna despierta al paciente y mejora sentado. Según el tiempo respiratorio puede ser inspiratoria, por obstrucción alta, o espiratoria, como en el asma.»',
      repreguntas: [
        { q: '¿Por qué el cardíaco tiene ortopnea?', a: 'Acostado aumenta el retorno venoso al tórax y sube la presión capilar pulmonar en un ventrículo izquierdo que no lo puede manejar: congestión.' },
        { q: '¿Qué es el asma cardíaca?', a: 'Disnea paroxística nocturna con sibilancias, por edema de la pared bronquial en la insuficiencia cardíaca izquierda.' },
        { q: '¿Qué es la respiración de Kussmaul y por qué ocurre?', a: 'Respiraciones amplias y profundas en la acidosis metabólica: el cuerpo elimina CO2 para compensar el pH.' },
        { q: '¿Disnea inspiratoria o espiratoria en el asma?', a: 'Espiratoria: el bronquio se cierra en la espiración y el aire queda atrapado.' },
      ],
      fuentes: 'Apunte de Ortega, «Disnea», pp. 5–7 · Instituto Merlín, «Disnea cardíaca» y «Signos vitales» · Califano, cap. 10 · Argente-Álvarez, cap. 10.',
    },

    /* ═════════ CIANOSIS ═════════ */
    {
      tema: 'cianosis',
      titulo: 'Cianosis',
      porque: [
        'El color azul lo da la **hemoglobina reducida** (sin oxígeno) en los capilares: se ve cuando supera **5 g/dL**. Por eso se busca donde la piel es fina y muy vascularizada: labios, lengua, lechos ungueales, orejas.',
        'Si la sangre **sale del pulmón** ya mal oxigenada (pulmón o corazón con cortocircuito), toda la sangre arterial está insaturada: cianosis **central**, que se ve también en la lengua.',
        'Si la sangre sale bien oxigenada pero **circula lento** por la periferia, los tejidos le sacan más oxígeno: cianosis **periférica**, en zonas frías y distales, sin tocar la lengua.',
      ],
      bloques: [
        { t: 'def', text: 'Coloración **azulada** de piel y mucosas por aumento de la **hemoglobina reducida** en sangre capilar, **≥ 5 g/dL**.' },
        {
          t: 'cuadro',
          titulo: 'Central vs periférica',
          head: ['', 'Central (caliente)', 'Periférica (fría)'],
          filas: [
            ['Causa', '**Desaturación arterial**: el problema está en el pulmón o en un cortocircuito', '**Flujo lento**: sangre arterial bien saturada, mayor extracción en los tejidos'],
            ['Dónde', 'Generalizada, **incluye mucosas** (lengua, labios)', 'Acral: manos, pies, orejas, nariz; **no** compromete la lengua'],
            ['Piel', '**Caliente**', '**Fría**'],
            ['Con oxígeno', '**Mejora**', 'No mejora'],
            ['Con calor o masaje', 'No mejora', '**Mejora**'],
            ['Asociados', 'Hipocratismo digital, poliglobulia (crónica)', '—'],
            ['Ejemplos', 'Neumonía, EPOC, asma grave; **metahemoglobinemia**', 'Generalizada: IC, shock. Localizada: trombosis, frío, Raynaud'],
          ],
        },
        { t: 'paso', titulo: 'Mixta', text: 'Central y periférica a la vez: **cortocircuitos de derecha a izquierda** (Fallot, Eisenmenger) o insuficiencia cardíaca con congestión pulmonar.' },
        {
          t: 'paso',
          titulo: 'Examen y diferencial',
          items: [
            'Inspección de cara, labios, **lengua**, manos, uñas; temperatura de la piel.',
            '**Vitropresión**: al presionar con un vidrio o el dedo, la cianosis **desaparece**; los pigmentos (**argiria**: sales de plata) **no**.',
            'Buscar **hipocratismo digital** (dedos en palillo de tambor, uñas en vidrio de reloj) en la hipoxemia crónica.',
          ],
        },
        { t: 'ojo', text: 'La anemia **dificulta** ver la cianosis (cuesta llegar a 5 g/dL de Hb reducida) y la poliglobulia la **facilita**.' },
      ],
      oral: '«La cianosis es la coloración azulada de piel y mucosas por aumento de la hemoglobina reducida en los capilares, por encima de 5 gramos por decilitro. Se clasifica en central, cuando la sangre arterial ya sale desaturada por una enfermedad pulmonar o un cortocircuito: es generalizada, caliente, compromete la lengua y mejora con oxígeno; y periférica, cuando la sangre arterial está bien saturada pero circula lento y los tejidos extraen más oxígeno: es acral, fría, no compromete la lengua y mejora con calor. La mixta combina ambas. Con la vitropresión la cianosis desaparece, a diferencia de la argiria.»',
      repreguntas: [
        { q: '¿Por qué un anémico grave puede no tener cianosis aunque esté hipoxémico?', a: 'Porque tiene poca hemoglobina total y es difícil llegar a 5 g/dL de hemoglobina reducida.' },
        { q: '¿Cómo diferenciás central de periférica en la cama?', a: 'Lengua y mucosas (solo en la central), temperatura (caliente vs fría) y respuesta al oxígeno o al calor.' },
        { q: '¿Qué es la metahemoglobinemia?', a: 'Oxidación del hierro de ferroso a férrico: la hemoglobina no entrega oxígeno; da cianosis central que no mejora con oxígeno (fármacos, nitritos).' },
      ],
      fuentes: 'Apunte de Ortega, «Cianosis», pp. 8–9 · Argente-Álvarez, cap. 11.',
    },

    /* ═════════ EDEMA ═════════ */
    {
      tema: 'edema',
      titulo: 'Edema',
      porque: [
        'En el capilar, el agua **sale** empujada por la **presión hidrostática** y **vuelve** atraída por la **presión oncótica** (albúmina); lo que sobra lo saca la **linfa** (fuerzas de Starling).',
        'Hay edema si **sube la hidrostática** (insuficiencia cardíaca, trombosis), **baja la oncótica** (nefrótico, cirrosis, desnutrición), **aumenta la permeabilidad** (inflamación, alergia) o **falla el drenaje linfático**.',
        'Para que sea **generalizado** además el riñón tiene que **retener sodio y agua**: si no, el líquido se agotaría.',
      ],
      bloques: [
        { t: 'def', text: 'Acumulación excesiva de **líquido en el intersticio**, que el paciente refiere como «hinchazón». Si es generalizado y con líquido en las serosas (pleura, pericardio, peritoneo): **anasarca**.' },
        {
          t: 'cuadro',
          titulo: 'Los cuatro edemas que se comparan',
          head: ['', 'Circulatorio (cardíaco)', 'Discrásico (renal, hepático)', 'Inflamatorio', 'Angioneurótico'],
          filas: [
            ['Mecanismo', '↑ presión **hidrostática**', '↓ presión **oncótica**', '↑ **permeabilidad**', '↑ **permeabilidad** (alergia)'],
            ['Dónde', '**Declive**: tobillos y piernas; sacro si está en cama; asciende', '**Cara, párpados**, zonas laxas, genitales', 'Donde está la inflamación', 'Cara, labios, glotis'],
            ['Cuándo', '**Vespertino**: empeora al final del día', '**Matinal**: al levantarse', 'Brusco', 'Brusco y fugaz'],
            ['Piel', '**Fría**, cianótica', 'Pálida, blanda', '**Caliente, roja, dolorosa**', 'Normal o rosada'],
            ['Fóvea', 'Sí', 'Sí (blando)', 'Dura', 'No'],
            ['Ejemplo', 'IC derecha, trombosis venosa', 'Síndrome nefrótico, cirrosis, desnutrición', 'Celulitis', 'Edema de Quincke'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Otros que no dejan fóvea',
          items: ['**Linfedema**: duro, crónico, piel en cáscara de naranja (cirugía de mama, filariasis).', '**Mixedema**: hipotiroidismo; mucopolisacáridos, pretibial, piel seca y fría.'],
        },
        {
          t: 'paso',
          titulo: 'Examen físico',
          items: [
            '**Inspección**: aumento del diámetro, pérdida de los relieves (retromaleolar), piel tensa y brillante.',
            '**Signo de Godet (fóvea)**: presionar con el pulgar unos segundos contra un plano óseo (detrás del **maléolo interno**, tibia; **sacro** en el paciente en cama) y ver si queda la depresión.',
            '**Peso**: detecta el edema **oculto**, que todavía no deja fóvea.',
          ],
        },
        {
          t: 'clave',
          titulo: 'Graduación de la fóvea',
          items: ['**+** leve, desaparece enseguida · **++** ≈ 4 mm, ≈ 15 s · **+++** ≈ 6 mm, hasta 1 min · **++++** ≈ 1 cm, 3–5 min.', 'Por extensión: tobillo → rodilla → muslo y genitales → abdomen → **anasarca**.'],
        },
      ],
      oral: '«El edema es la acumulación excesiva de líquido en el intersticio; generalizado y con líquido en las serosas se llama anasarca. Se produce por alteración de las fuerzas de Starling: aumento de la presión hidrostática, disminución de la oncótica, aumento de la permeabilidad capilar o falla del drenaje linfático, y para que sea generalizado hace falta que el riñón retenga sodio y agua. Se clasifica en circulatorio, por hidrostática, que es de declive, vespertino y frío, como en la insuficiencia cardíaca; discrásico, por baja oncótica, en párpados y matinal, como en el nefrótico; inflamatorio, caliente, rojo y doloroso; y angioneurótico, brusco, en la cara. Se explora con el signo de Godet o fóvea, presionando contra un plano óseo detrás del maléolo interno o en el sacro.»',
      repreguntas: [
        { q: '¿Por qué el edema cardíaco es vespertino y el renal matinal?', a: 'El cardíaco depende de la gravedad: se acumula en las piernas durante el día. El renal es por baja oncótica: de noche, acostado, se acumula en zonas laxas como los párpados.' },
        { q: '¿Dónde buscás edema en un paciente postrado?', a: 'En el sacro y la región lumbar, que son las zonas de declive en decúbito.' },
        { q: '¿Qué edemas no dejan fóvea?', a: 'El linfedema crónico y el mixedema.' },
      ],
      fuentes: 'Apunte de Ortega, «Edema», pp. 18–20 · Argente-Álvarez, cap. 12.',
    },
  ],
  noOlvidar: [
    { q: 'Dolor: definición', a: 'Sensación molesta o aflictiva asociada a daño tisular real o potencial; subjetiva; función de defensa.' },
    { q: 'Somático vs visceral', a: 'Somático: Aδ, agudo, bien localizado. Visceral: C, sordo, mal localizado, con síntomas autonómicos.' },
    { q: 'ALICIA', a: 'Antigüedad, Localización, Irradiación, Carácter, Intensidad, Atenuantes/agravantes (+ desencadenantes y acompañantes).' },
    { q: 'Dolor crónico', a: 'Más de 4 meses (agudo: hasta 4 semanas).' },
    { q: 'Fiebre: valores', a: '> 37,2 °C matinal o > 37,7 °C vespertina; hiperpirexia > 41,5 °C.' },
    { q: 'Fiebre vs hipertermia', a: 'Fiebre: termostato alto (pirógenos, PGE2), sirven los antitérmicos. Hipertermia: termostato normal, no sirven.' },
    { q: 'Curvas térmicas', a: 'Continua (< 1 °C) · remitente (no vuelve a lo normal) · intermitente (vuelve a lo normal cada día) · recurrente (días sin fiebre).' },
    { q: 'FOD', a: '≥ 38,3 °C, > 3 semanas, sin diagnóstico tras 1 semana de estudio internado.' },
    { q: 'Disnea: mecanismos', a: '↑ requerimientos · ↑ resistencia · ↓ distensibilidad · neuromuscular · psicógena.' },
    { q: 'Ortopnea · trepopnea · platipnea', a: 'Acostado (IC izquierda) · decúbito lateral (derrame) · de pie (síndrome hepatopulmonar).' },
    { q: 'Cheyne-Stokes · Biot · Kussmaul', a: 'Crece-decrece-apnea · irregular con apneas · amplia y profunda (acidosis metabólica).' },
    { q: 'Cianosis', a: 'Hb reducida ≥ 5 g/dL. Central: caliente, con lengua, mejora con O2. Periférica: fría, acral, mejora con calor.' },
    { q: 'Edema: Starling', a: '↑ hidrostática · ↓ oncótica · ↑ permeabilidad · falla linfática; generalizado = + retención renal de Na y agua.' },
    { q: 'Edema cardíaco vs renal', a: 'Cardíaco: declive, vespertino, frío. Renal: párpados, matinal, blando y pálido.' },
  ],
};
