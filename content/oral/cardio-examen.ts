import type { ApunteUnidad } from './tipos';

/*
 * Examen cardiovascular: pulsos, ruidos y soplos — apunte para el oral.
 * Base: apunte de Ortega («Examen físico cardiovascular normal» pp. 142–148, «patológico» pp. 149–162, «Pulso arterial» pp. 163–168,
 * «Pulso y presión venosa» pp. 171–175) y Merlín («Examen físico», «Pulso arterial y venoso», «Soplos»),
 * contrastados con Califano cap. 4–6 y Argente cap. 29.
 */
export const apunte: ApunteUnidad = {
  unidad: 'cardio-examen',
  temas: [
    {
      tema: 'ef-cardio',
      titulo: 'Examen físico cardiovascular',
      porque: [
        'El **choque de la punta** es la punta del ventrículo izquierdo golpeando la pared en cada sístole: dice **dónde está** y **cómo trabaja** el ventrículo izquierdo. Si el VI crece, se desplaza **hacia abajo y afuera**.',
        'Los **focos** no están sobre las válvulas: están donde mejor **se oye** cada una, siguiendo la dirección de la sangre.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Posición', text: 'Paciente en **decúbito dorsal** con el tórax levemente elevado, torso descubierto; examinador a la **derecha**. Inspección con luz tangencial, en espiración.' },
        {
          t: 'cuadro',
          titulo: 'Inspección y palpación del precordio',
          head: ['Hallazgo', 'Qué es', 'Patológico'],
          filas: [
            ['**Choque de la punta**', '**5.º espacio intercostal izquierdo**, en o por dentro de la línea **hemiclavicular**, ≤ 2 cm; el único latido normal', 'Desplazado **abajo y afuera** (agrandamiento del VI); **en cúpula** de Bard (hipertrofia); sostenido (estenosis aórtica, HTA)'],
            ['Si no se palpa', 'Llevar al paciente a **decúbito lateral izquierdo** (posición de **Pachón**)', 'Obesos, enfisema, derrame pericárdico'],
            ['**Otros latidos**', 'Normalmente no hay', 'Paraesternal izquierdo (VD: **maniobra de Dressler** con el talón de la mano)'],
            ['**Frémitos**', 'Vibración palpable de un soplo intenso (≥ 4/6)', 'Valvulopatía orgánica o shunt'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Focos de auscultación',
          head: ['Foco', 'Dónde'],
          filas: [
            ['**Aórtico**', '**2.º espacio intercostal derecho**, paraesternal'],
            ['**Pulmonar**', '**2.º espacio intercostal izquierdo**, paraesternal'],
            ['**Accesorio aórtico** (Erb)', '**3.º espacio intercostal izquierdo**, paraesternal'],
            ['**Tricuspídeo**', 'Base del **apéndice xifoides**'],
            ['**Mitral**', '**Choque de la punta** (5.º espacio, línea hemiclavicular)'],
          ],
        },
        { t: 'paso', titulo: 'Maniobras que ayudan', items: ['**Pachón** (decúbito lateral izquierdo): para el **foco mitral** (soplos mitrales, R3, R4).', '**Azoulay** (sentado, inclinado hacia adelante, en espiración): para la **base** (soplos aórticos).'] },
      ],
      oral: '«El examen cardiovascular se hace con el paciente en decúbito dorsal, levemente elevado, y el examinador a su derecha. En la inspección y palpación del precordio busco el choque de la punta, el único latido normal: está en el quinto espacio intercostal izquierdo, en o por dentro de la línea hemiclavicular, y no supera los dos centímetros; si no lo encuentro, uso el decúbito lateral izquierdo o posición de Pachón. Se desplaza hacia abajo y afuera cuando crece el ventrículo izquierdo. Busco también otros latidos y frémitos. Después ausculto los focos: aórtico en el segundo espacio derecho, pulmonar en el segundo izquierdo, accesorio aórtico en el tercero izquierdo, tricuspídeo en el xifoides y mitral en la punta, con las posiciones de Pachón para la punta y Azoulay para la base.»',
      repreguntas: [
        { q: '¿Dónde está el choque de la punta y qué significa si se desplaza?', a: '5.º espacio intercostal izquierdo, línea hemiclavicular. Abajo y afuera: agrandamiento del ventrículo izquierdo.' },
        { q: '¿Qué es la posición de Pachón?', a: 'Decúbito lateral izquierdo: acerca la punta a la pared para palparla y auscultar el foco mitral.' },
        { q: '¿Qué es un frémito?', a: 'La vibración palpable de un soplo intenso (≥ 4/6).' },
      ],
      fuentes: 'Apunte de Ortega, pp. 142–151 · Instituto Merlín, «Examen físico» · Baré-Califano, cap. 4.',
    },
    {
      tema: 'pulso-arterial',
      titulo: 'Semiología del pulso arterial',
      porque: [
        'El pulso es la **onda de presión** que genera cada sístole del VI y viaja por las arterias. Su **forma** refleja cómo eyecta el ventrículo y cómo es la válvula aórtica.',
        'Si la válvula aórtica está **estrecha**, la onda sale **pequeña y lenta** (parvus et tardus). Si **no cierra**, el ventrículo eyecta mucho volumen y la aorta se vacía hacia atrás: pulso **amplio y rápido** (magnus et celer).',
      ],
      bloques: [
        { t: 'def', text: 'Onda de presión y expansión que se transmite a las arterias desde el ventrículo izquierdo en cada sístole, percibida al palpar una arteria superficial.' },
        { t: 'paso', titulo: 'Técnica', text: '**Radial**: con **índice, medio y anular** (nunca el pulgar), muñeca levemente flexionada, comparando ambos lados. Pulsos a explorar: temporal, **carotídeo** (de a uno), humeral, radial, femoral, poplíteo, tibial posterior y pedio.' },
        {
          t: 'cuadro',
          titulo: 'Qué se analiza: AFRATIFS',
          head: ['', 'Normal', 'Alterado'],
          filas: [
            ['**A**rteria', 'Lisa, blanda, recta', 'Dura, en cuerda o «tráquea de pollo» (aterosclerosis)'],
            ['**F**recuencia', '**60–100** lpm', 'Taquifigmia > 100 · bradifigmia < 60 · **déficit de pulso**'],
            ['**R**itmo', 'Regular (salvo arritmia respiratoria: más rápido en inspiración)', 'Irregular: **fibrilación auricular**, extrasístoles; bigeminado'],
            ['**A**mplitud', 'Normal', '**Magnus** (insuficiencia aórtica) · **parvus** (estenosis aórtica)'],
            ['**T**ensión', 'Normal', 'Duro (HTA) · blando (hipotensión)'],
            ['**I**gualdad', 'Ondas iguales', '**Paradójico** · **alternante**'],
            ['**F**orma', 'Ascenso rápido, descenso lento', '**Celer** (rápido) · **tardus** (lento) · **bisferiens** (doble onda)'],
            ['**S**imetría', 'Iguales de ambos lados', 'Asimetría: obstrucción arterial, disección'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Pulsos patológicos',
          head: ['Pulso', 'Cómo es', 'Pensar en'],
          filas: [
            ['**Saltón** o de Corrigan (magnus et celer)', 'Amplio, sube y cae rápido; «martillo de agua»', '**Insuficiencia aórtica**'],
            ['**Parvus et tardus**', 'Pequeño y lento en subir', '**Estenosis aórtica** grave'],
            ['**Bisferiens**', 'Doble onda en la sístole', 'Insuficiencia aórtica grave (doble lesión)'],
            ['**Paradójico** (Kussmaul)', 'Disminuye **> 10 mmHg en la inspiración**', '**Taponamiento cardíaco**, pericarditis constrictiva, asma grave'],
            ['**Alternante** (Traube)', 'Una onda fuerte, una débil, con ritmo regular', '**Insuficiencia ventricular izquierda**'],
            ['**Dícroto**', 'Doble onda por onda dícrota exagerada', 'Fiebre (tifoidea)'],
          ],
        },
      ],
      oral: '«El pulso arterial es la onda de presión que genera cada sístole del ventrículo izquierdo. Se palpa con índice, medio y anular, en la radial y en los demás pulsos, comparando ambos lados. Analizo con AFRATIFS: anatomía de la arteria, frecuencia —normal 60 a 100—, ritmo, amplitud, tensión, igualdad, forma y simetría. Los pulsos patológicos más importantes son el saltón o de Corrigan, amplio y rápido, de la insuficiencia aórtica; el parvus et tardus, pequeño y lento, de la estenosis aórtica; el paradójico, que disminuye más de 10 milímetros en la inspiración, del taponamiento cardíaco; y el alternante, de la insuficiencia ventricular izquierda.»',
      repreguntas: [
        { q: '¿Qué es el pulso paradójico y cuándo aparece?', a: 'Una caída de más de 10 mmHg de la sistólica en la inspiración (exageración de lo normal): taponamiento, pericarditis constrictiva, asma grave.' },
        { q: '¿Qué pulso tiene la estenosis aórtica?', a: 'Parvus et tardus: pequeño y de ascenso lento.' },
        { q: '¿Qué es el déficit de pulso?', a: 'Más latidos auscultados que pulsaciones palpadas: algunas sístoles no llegan a la periferia (fibrilación auricular, extrasístoles).' },
      ],
      fuentes: 'Apunte de Ortega, pp. 163–168 · Instituto Merlín, «Pulso arterial y venoso» · Baré-Califano, cap. 6 · Argente-Álvarez, cap. 29.',
    },
    {
      tema: 'pulso-venoso',
      titulo: 'Semiología del pulso venoso',
      porque: [
        'Las yugulares no tienen válvulas y están pegadas a la **aurícula derecha**: lo que pasa en el corazón derecho se ve en el cuello. La **altura** de la columna dice la **presión venosa**; las **ondas**, el ciclo de la aurícula.',
        'Si el corazón derecho no evacua la sangre (insuficiencia derecha, taponamiento), la columna sube: **ingurgitación yugular**.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Técnica', text: 'Decúbito dorsal con la cabecera a **30–45°**, cabeza levemente rotada al lado opuesto, luz tangencial. Se mira la **yugular interna** (y externa). La altura del menisco por encima del ángulo de Louis estima la presión venosa (normal **8–12 cm H2O**).' },
        {
          t: 'cuadro',
          titulo: 'Ondas del pulso venoso',
          head: ['Onda', 'Qué es', 'Alteración'],
          filas: [
            ['**a**', '**Contracción auricular** (antes de R1)', '**Gigante**: estenosis tricuspídea, hipertensión pulmonar · **en cañón**: bloqueo AV completo · **ausente**: **fibrilación auricular**'],
            ['**c**', 'Cierre de la tricúspide (poco visible)', '—'],
            ['**x** (valle)', 'Descenso: relajación auricular', 'Profundo en el taponamiento'],
            ['**v**', 'Llenado de la aurícula con la tricúspide cerrada', '**Gigante**: **insuficiencia tricuspídea**'],
            ['**y** (valle)', 'Apertura de la tricúspide, vaciado auricular', 'Profundo y rápido en la pericarditis constrictiva'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Maniobras y signos',
          items: [
            '**Reflujo hepatoyugular**: presionar el **hipocondrio derecho** firme 10 s mirando la yugular: es positivo si **se ingurgita y se mantiene** (insuficiencia cardíaca derecha).',
            '**Signo de Kussmaul**: la yugular **se ingurgita en la inspiración** en vez de colapsarse (pericarditis constrictiva, taponamiento).',
            'Ingurgitación **sin latidos** y bilateral: obstrucción de la **vena cava superior** (edema en esclavina).',
          ],
        },
        { t: 'ojo', text: 'Cómo distinguirlo del pulso **carotídeo**: el venoso **no se palpa**, tiene **dos o tres ondas** por latido, **cambia con la posición y la respiración** y **desaparece al comprimir** la base del cuello.' },
      ],
      oral: '«El pulso venoso refleja la actividad de la aurícula derecha y se examina en la yugular interna, con el paciente a 30 a 45 grados. Evalúo la presión venosa, por la altura de la columna —normal 8 a 12 centímetros de agua—, y las ondas: la onda a, contracción auricular, que es gigante en la estenosis tricuspídea o la hipertensión pulmonar, en cañón en el bloqueo AV completo y desaparece en la fibrilación auricular; el valle x; la onda v, llenado auricular, gigante en la insuficiencia tricuspídea; y el valle y. Hago el reflujo hepatoyugular, comprimiendo el hipocondrio derecho, positivo en la insuficiencia cardíaca derecha, y busco el signo de Kussmaul, la ingurgitación inspiratoria de la pericarditis constrictiva. Se diferencia del pulso carotídeo porque no se palpa, tiene varias ondas y varía con la posición y la respiración.»',
      repreguntas: [
        { q: '¿Qué onda desaparece en la fibrilación auricular y por qué?', a: 'La onda a: la aurícula no se contrae.' },
        { q: '¿Qué es el reflujo hepatoyugular?', a: 'Ingurgitación yugular sostenida al comprimir el hígado: el corazón derecho no puede recibir el volumen extra (insuficiencia derecha).' },
        { q: '¿Qué es el signo de Kussmaul?', a: 'Ingurgitación yugular en la inspiración (normalmente colapsa): pericarditis constrictiva o taponamiento.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 171–175 · Instituto Merlín, «Pulso arterial y venoso» · Argente-Álvarez, cap. 29-4.',
    },
    {
      tema: 'ruidos-r1r2',
      titulo: 'Ruidos cardíacos 1 y 2',
      porque: [
        'Los ruidos son el **cierre de las válvulas**: **R1** = cierre de las **auriculoventriculares** (mitral y tricúspide) al empezar la **sístole**; **R2** = cierre de las **sigmoideas** (aórtica y pulmonar) al empezar la **diástole**.',
        'Si la válvula queda **muy abierta** al momento de cerrar (estenosis mitral), se cierra «de un portazo»: R1 **intenso**. Si **no cierra bien** (insuficiencia mitral), R1 **débil**.',
      ],
      bloques: [
        {
          t: 'cuadro',
          titulo: 'R1 y R2',
          head: ['', 'R1 («tum»)', 'R2 («ta»)'],
          filas: [
            ['Origen', 'Cierre **mitral y tricúspide**', 'Cierre **aórtico y pulmonar** (A2 antes que P2)'],
            ['Marca', 'Comienzo de la **sístole**', 'Comienzo de la **diástole**'],
            ['Dónde se oye mejor', '**Punta** (foco mitral)', '**Base** (focos aórtico y pulmonar)'],
            ['Tono', 'Más **grave** y largo', 'Más **agudo** y breve'],
            ['Pulso', '**Coincide con el pulso carotídeo**', 'Después del pulso'],
          ],
        },
        { t: 'paso', titulo: 'Silencios', text: '**Pequeño silencio** (entre R1 y R2) = **sístole** · **gran silencio** (entre R2 y el siguiente R1) = **diástole**.' },
        {
          t: 'cuadro',
          titulo: 'Alteraciones',
          head: ['', 'Aumentado', 'Disminuido'],
          filas: [
            ['**R1**', '**Estenosis mitral**, estados hipercinéticos; **en cañón** intermitente: bloqueo AV completo; variable: fibrilación auricular', '**Insuficiencia mitral**, mala contracción (infarto), derrame pericárdico, enfisema'],
            ['**R2**', 'A2: **HTA**; P2: **hipertensión pulmonar**', '**Estenosis aórtica** (válvula rígida)'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Desdoblamiento del R2',
          items: [
            '**Fisiológico**: en la **inspiración** se separan A2 y P2 (llega más sangre al VD y la pulmonar cierra más tarde); en espiración se funden.',
            '**Amplio**: bloqueo de rama derecha. **Fijo** (no cambia con la respiración): **comunicación interauricular**. **Paradójico** (se desdobla en espiración): bloqueo de rama izquierda, estenosis aórtica.',
          ],
        },
      ],
      oral: '«El primer ruido es el cierre de las válvulas auriculoventriculares, mitral y tricúspide; marca el comienzo de la sístole, se oye mejor en la punta, es más grave y coincide con el pulso carotídeo. El segundo es el cierre de las sigmoideas, aórtica y pulmonar; marca el comienzo de la diástole, se oye mejor en la base y es más agudo. Entre ambos está el pequeño silencio, la sístole, y después el gran silencio, la diástole. El R1 está aumentado en la estenosis mitral y disminuido en la insuficiencia mitral; el R2 está aumentado en la hipertensión arterial o pulmonar y disminuido en la estenosis aórtica. El R2 se desdobla fisiológicamente en la inspiración; el desdoblamiento fijo sugiere una comunicación interauricular y el paradójico, un bloqueo de rama izquierda.»',
      repreguntas: [
        { q: '¿Cómo identificás el R1 si la frecuencia es alta?', a: 'Palpando el pulso carotídeo: el R1 coincide con él.' },
        { q: '¿Por qué el R1 es intenso en la estenosis mitral?', a: 'Porque las valvas quedan muy abiertas al final de la diástole y se cierran de golpe, «como un portazo».' },
        { q: '¿Por qué se desdobla el R2 en la inspiración?', a: 'Aumenta el retorno al ventrículo derecho, su sístole se prolonga y la pulmonar cierra más tarde.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 147 y 152–154 · Instituto Merlín, «Examen físico» · Argente-Álvarez, cap. 29.',
    },
    {
      tema: 'ruidos-r3r4',
      titulo: 'Ruidos cardíacos 3 y 4',
      porque: [
        '**R3**: al abrirse la mitral entra sangre rápido y el ventrículo **frena bruscamente** al distenderse. Si llega **mucho volumen** a un ventrículo **dilatado**, vibra: R3 (sobrecarga de **volumen**, insuficiencia cardíaca).',
        '**R4**: al final de la diástole la **aurícula se contrae** contra un ventrículo **rígido** que no se deja llenar: R4 (hipertrofia, HTA, isquemia). Por eso **no hay R4 en la fibrilación auricular**.',
      ],
      bloques: [
        {
          t: 'cuadro',
          titulo: 'R3 vs R4',
          head: ['', 'R3', 'R4'],
          filas: [
            ['Momento', '**Protodiástole** (después del R2)', '**Telediástole** (presístole, antes del R1)'],
            ['Mecanismo', '**Llenado rápido** en un ventrículo dilatado', '**Contracción auricular** contra un ventrículo rígido'],
            ['Normal', 'Sí en **niños y jóvenes**, estados hipercinéticos', '**Casi siempre patológico**'],
            ['Patológico en', '**Insuficiencia cardíaca**, insuficiencia mitral (sobrecarga de volumen)', '**HTA**, estenosis aórtica, **hipertrofia**, cardiopatía isquémica'],
            ['Cómo oírlo', '**Campana**, en la **punta**, **Pachón**', '**Campana**, en la punta, Pachón'],
            ['Ritmo', '**Galope protodiastólico**', '**Galope presistólico**'],
          ],
        },
        { t: 'ojo', text: 'El R4 depende de la **contracción auricular**: **no existe en la fibrilación auricular**. Ambos son **graves**: se oyen con la **campana** apoyada suavemente.' },
      ],
      oral: '«El tercer ruido aparece en la protodiástole, después del segundo, por el llenado ventricular rápido en un ventrículo dilatado; es normal en niños y jóvenes y en estados hipercinéticos, y patológico en la insuficiencia cardíaca y la insuficiencia mitral, como galope protodiastólico. El cuarto ruido aparece en la telediástole, antes del primero, por la contracción auricular contra un ventrículo rígido; casi siempre es patológico, en la hipertensión, la estenosis aórtica, la hipertrofia o la isquemia, y no existe en la fibrilación auricular. Ambos son graves y se oyen con la campana en la punta, en posición de Pachón.»',
      repreguntas: [
        { q: '¿Por qué no hay R4 en la fibrilación auricular?', a: 'Porque el R4 se produce por la contracción auricular, que en la fibrilación no existe.' },
        { q: '¿Qué significa un R3 en un adulto?', a: 'Sobrecarga de volumen en un ventrículo dilatado: insuficiencia cardíaca, insuficiencia mitral.' },
        { q: '¿Con qué parte del estetoscopio los buscás?', a: 'Con la campana, apoyada suavemente: son de baja frecuencia.' },
      ],
      fuentes: 'Apunte de Ortega, p. 147 · Instituto Merlín, «Examen físico» · Argente-Álvarez, cap. 29.',
    },
    {
      tema: 'soplos',
      titulo: 'Soplos cardíacos',
      porque: [
        'Un soplo es **sangre turbulenta**: pasa por un **orificio estrecho** (estenosis), **vuelve hacia atrás** (insuficiencia) o hay **mucho flujo** por un orificio normal (anemia, fiebre: soplo funcional).',
        'El **momento** dice qué válvula falla: en la **sístole** la sangre sale por las sigmoideas (estenosis aórtica) o vuelve por las AV (insuficiencia mitral); en la **diástole** entra por las AV (estenosis mitral) o vuelve por las sigmoideas (insuficiencia aórtica).',
      ],
      bloques: [
        { t: 'def', text: 'Ruido producido por el **flujo turbulento** de la sangre en el corazón o los grandes vasos, de mayor duración que un ruido cardíaco.' },
        {
          t: 'cuadro',
          titulo: 'Cómo se describe un soplo',
          head: ['Carácter', 'Qué digo'],
          filas: [
            ['**Momento**', '**Sistólico** (entre R1 y R2), **diastólico** (después de R2) o **continuo**'],
            ['**Foco**', 'Dónde es más intenso'],
            ['**Irradiación**', 'Hacia dónde se propaga (cuello, axila)'],
            ['**Intensidad**', '**1/6** (dudoso) a **6/6** (se oye sin apoyar el estetoscopio); desde **4/6** se acompaña de **frémito**'],
            ['**Forma**', 'Romboidal (eyectivo), en meseta (holosistólico), decreciente'],
            ['**Timbre**', 'Rudo, aspirativo, musical'],
            ['**Variación**', 'Con la respiración (los derechos aumentan en inspiración: **Rivero-Carvallo**), la posición, maniobras'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Los cuatro soplos clave',
          head: ['Valvulopatía', 'Momento', 'Foco e irradiación', 'Características'],
          filas: [
            ['**Estenosis aórtica**', '**Sistólico** eyectivo', 'Aórtico → **cuello** (carótidas)', 'Romboidal, rudo'],
            ['**Insuficiencia mitral**', '**Sistólico** (holosistólico)', 'Mitral → **axila**', 'En meseta, regurgitante'],
            ['**Estenosis mitral**', '**Diastólico**', 'Mitral (localizado)', '**Rolido** grave, con **chasquido de apertura** y R1 intenso; campana, Pachón'],
            ['**Insuficiencia aórtica**', '**Diastólico**', 'Aórtico y **accesorio aórtico** (Erb)', '**Aspirativo**, decreciente; sentado inclinado (Azoulay)'],
          ],
        },
        { t: 'ojo', text: '**Soplo inocente o funcional**: **sistólico**, suave (≤ 2/6), sin frémito, sin irradiación ni otros hallazgos; en niños, embarazo, fiebre, anemia. **Todo soplo diastólico es patológico.**' },
      ],
      oral: '«Un soplo es un ruido producido por el flujo turbulento de la sangre: cuando pasa por un orificio estrecho, cuando vuelve hacia atrás por una válvula que no cierra o cuando hay hiperflujo. Se describe por su momento —sistólico, diastólico o continuo—, foco, irradiación, intensidad de 1 a 6 sobre 6, forma, timbre y variación con la respiración y la posición. Los clave son: el sistólico eyectivo de la estenosis aórtica, en el foco aórtico irradiado al cuello; el holosistólico de la insuficiencia mitral, en la punta irradiado a la axila; el diastólico de la estenosis mitral, un rolido grave con chasquido de apertura; y el diastólico aspirativo de la insuficiencia aórtica, en el foco accesorio. Los soplos inocentes son sistólicos y suaves; todo soplo diastólico es patológico.»',
      repreguntas: [
        { q: '¿Qué soplo se irradia al cuello y cuál a la axila?', a: 'Al cuello, el de la estenosis aórtica; a la axila, el de la insuficiencia mitral.' },
        { q: '¿Qué significa un soplo diastólico?', a: 'Siempre es patológico: estenosis mitral o insuficiencia aórtica.' },
        { q: '¿Qué es el signo de Rivero-Carvallo?', a: 'Los soplos de las válvulas derechas aumentan en la inspiración (más retorno al corazón derecho).' },
        { q: '¿Desde qué intensidad hay frémito?', a: 'Desde 4/6.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 155–162 · Instituto Merlín, «Soplos» y «Valvulopatías» · Argente-Álvarez, cap. 29-3.',
    },
  ],
  noOlvidar: [
    { q: 'Choque de la punta', a: '5.º espacio intercostal izquierdo, línea hemiclavicular, ≤ 2 cm; desplazado abajo y afuera = VI grande.' },
    { q: 'Focos', a: 'Aórtico 2.º EID · pulmonar 2.º EII · accesorio aórtico 3.º EII · tricuspídeo xifoides · mitral punta.' },
    { q: 'AFRATIFS', a: 'Arteria, Frecuencia, Ritmo, Amplitud, Tensión, Igualdad, Forma, Simetría.' },
    { q: 'Pulsos clave', a: 'Saltón/Corrigan: insuficiencia aórtica · parvus et tardus: estenosis aórtica · paradójico: taponamiento · alternante: IVI.' },
    { q: 'Pulso paradójico', a: 'Caída > 10 mmHg de la sistólica en inspiración.' },
    { q: 'Ondas del pulso venoso', a: 'a (contracción auricular; no hay en FA; cañón en BAV completo) · x · v (gigante en insuficiencia tricuspídea) · y.' },
    { q: 'Reflujo hepatoyugular y Kussmaul', a: 'Reflujo: IC derecha. Kussmaul (ingurgitación inspiratoria): pericarditis constrictiva.' },
    { q: 'R1 y R2', a: 'R1: cierre AV, punta, con el pulso. R2: cierre sigmoideo, base. Pequeño silencio = sístole.' },
    { q: 'Desdoblamiento del R2', a: 'Fisiológico en inspiración · fijo: CIA · paradójico: bloqueo de rama izquierda.' },
    { q: 'R3 vs R4', a: 'R3: llenado rápido, ventrículo dilatado (IC). R4: contracción auricular, ventrículo rígido (HTA); no hay en FA.' },
    { q: 'Soplos', a: 'EAo sistólico → cuello · IM sistólico → axila · EM diastólico (rolido, chasquido) · IAo diastólico aspirativo (Erb).' },
    { q: 'Inocente', a: 'Sistólico, suave, sin frémito. Todo diastólico es patológico.' },
  ],
};
