import type { ApunteUnidad } from './tipos';

/*
 * Síndromes respiratorios — apunte para el oral.
 * Base: apunte de Ortega («Síndromes de las vías aéreas» pp. 101–108; «Síndromes parenquimatosos» pp. 109–113;
 * «Síndromes pleurales» pp. 115–122; «Insuficiencia respiratoria» p. 96) y Merlín (PDF 5–11), contrastados con Argente cap. 36.
 */
export const apunte: ApunteUnidad = {
  unidad: 'resp-sindromes',
  intro: {
    titulo: 'Los síndromes en un solo cuadro',
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'Inspección', 'Expansión', 'Vibraciones vocales', 'Percusión', 'Auscultación'],
        filas: [
          ['**Obstructivo** (asma, EPOC)', 'Tórax hiperinsuflado (tonel), tiraje, músculos accesorios', '↓', '↓', '**Hipersonoridad**', 'MV ↓, **espiración prolongada**, **sibilancias** y roncus'],
          ['**Condensación** (neumonía)', 'Taquipnea; hemitórax normal', '↓ del lado enfermo', '**↑**', '**Matidez**', '**Soplo tubario**, **crepitantes**, broncofonía'],
          ['**Atelectasia**', '**Retracción** del hemitórax', '↓ o abolida', '**↓ o abolidas**', '**Matidez**', '**Silencio auscultatorio**'],
          ['**Derrame pleural**', '**Abovedamiento** (si es grande)', '↓', '**Abolidas** (↑ en el borde superior)', '**Matidez** de concavidad superior; signo del desnivel', 'MV abolido; **soplo pleurítico** y **egofonía** en el borde'],
          ['**Neumotórax**', 'Abovedamiento', '↓', '**↓ o abolidas**', '**Hipersonoridad** o timpanismo', 'MV abolido; **soplo anfórico**'],
        ],
      },
      { t: 'ojo', text: 'Las dos que se confunden: **condensación** (bronquio **abierto**: vibraciones **aumentadas** y soplo tubario) y **atelectasia** (bronquio **tapado**: vibraciones **abolidas** y silencio). Y **derrame** (matidez) vs **neumotórax** (hipersonoridad): ambos abolen vibraciones y murmullo; los separa la **percusión**.' },
    ],
  },
  temas: [
    {
      tema: 'asma',
      titulo: 'Asma bronquial y broncoespasmo (síndrome bronquial)',
      porque: [
        'En un predispuesto, el alérgeno dispara una **inflamación crónica** (mastocitos, eosinófilos, IgE) que deja el bronquio **hiperreactivo**: ante un desencadenante se **contrae el músculo liso**, se **edematiza la mucosa** y aumenta el **moco**.',
        'El bronquio se cierra más en la **espiración** (la presión del tórax lo comprime): el aire **queda atrapado** → tórax hiperinsuflado, **hipersonoridad**, **espiración prolongada** y **sibilancias** espiratorias.',
        'Es **reversible**: los **β2 adrenérgicos** (salbutamol) abren el bronquio. Esa reversibilidad la diferencia de la EPOC.',
      ],
      bloques: [
        { t: 'def', text: 'Enfermedad **inflamatoria crónica** de la vía aérea con **hiperreactividad bronquial**, que produce episodios de **obstrucción reversible** (espontáneamente o con tratamiento).' },
        { t: 'clave', titulo: 'Tríada', items: ['**Disnea** (espiratoria, paroxística, nocturna o de madrugada) · **tos** · **sibilancias**', '+ **opresión torácica**.'] },
        { t: 'paso', titulo: 'Desencadenantes', text: 'Alérgenos (ácaros, pelos, hongos), infecciones virales, humo, frío, **ejercicio**, emociones, reflujo, fármacos (**β bloqueantes**, aspirina).' },
        {
          t: 'paso',
          titulo: 'Examen físico en la crisis',
          items: [
            '**Inspección**: facies disneica, posición **semisentada**, tórax hiperinsuflado, **tiraje** y músculos accesorios, taquipnea; cianosis si es grave.',
            '**Palpación**: expansión y elasticidad ↓, vibraciones ↓, roncus palpable.',
            '**Percusión**: **hipersonoridad**, excursión de las bases ↓.',
            '**Auscultación**: **espiración prolongada**, **sibilancias** (a veces audibles a distancia), roncus. Si el tórax está **silencioso**, es gravísimo: no pasa aire.',
          ],
        },
        { t: 'clave', titulo: 'Signos de gravedad', items: ['Disnea de reposo, **no puede hablar** (frases cortas)', 'FC **> 120**, FR **> 30**', '**Pulso paradójico > 20 mmHg**', 'Uso de músculos accesorios, cianosis, **tórax silencioso**'] },
        { t: 'paso', titulo: 'Estudios', text: '**Espirometría**: patrón **obstructivo reversible** (VEF1 y Tiffeneau ↓; mejora ≥ 15 % con broncodilatador). Eosinofilia, IgE; en el esputo, **espirales de Curschmann** y **cristales de Charcot-Leyden**.' },
      ],
      oral: '«El asma es una enfermedad inflamatoria crónica de la vía aérea con hiperreactividad bronquial que produce episodios de obstrucción reversible. Su tríada es disnea, tos y sibilancias, con opresión torácica. Ante un desencadenante —alérgenos, infecciones, frío, ejercicio, fármacos como los betabloqueantes— se contrae el músculo liso, se edematiza la mucosa y aumenta el moco; el aire queda atrapado. En el examen encuentro un tórax hiperinsuflado con tiraje, expansión y vibraciones disminuidas, hipersonoridad y, a la auscultación, espiración prolongada con sibilancias. Son signos de gravedad no poder hablar, frecuencia cardíaca mayor de 120, respiratoria mayor de 30, pulso paradójico mayor de 20 y el tórax silencioso. La espirometría muestra un patrón obstructivo reversible.»',
      repreguntas: [
        { q: '¿Por qué las sibilancias son espiratorias?', a: 'En la espiración la presión intratorácica comprime el bronquio ya estrechado: el aire pasa más turbulento.' },
        { q: '¿Qué significa un tórax silencioso en una crisis?', a: 'Que casi no entra aire: es un signo de gravedad extrema, no de mejoría.' },
        { q: '¿Qué diferencia al asma de la EPOC?', a: 'La reversibilidad de la obstrucción (con broncodilatadores) y la base inflamatoria alérgica; la EPOC es progresiva e irreversible, ligada al tabaco.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 105–108 · Instituto Merlín, PDF 5 «Asma» y PDF 7 «Síndromes obstructivos» · Argente-Álvarez, cap. 36-1.',
    },
    {
      tema: 'bronquitis-epoc',
      titulo: 'Bronquitis crónica y enfisema (EPOC)',
      porque: [
        'El **tabaco** irrita el bronquio (hiperplasia de glándulas, **más moco**, inflamación) y además activa proteasas que **destruyen las paredes alveolares**; normalmente la **α1-antitripsina** las frena.',
        'Si predomina el bronquio: **bronquitis crónica** (tos y moco, hipoxemia temprana, cianosis). Si predomina la destrucción del alvéolo: **enfisema** (el pulmón pierde su elasticidad y el aire queda atrapado).',
      ],
      bloques: [
        { t: 'def', text: '**EPOC**: obstrucción crónica, **progresiva e irreversible** al flujo aéreo, ligada sobre todo al **tabaquismo**. **Bronquitis crónica** (definición clínica): **tos y expectoración al menos 3 meses por año durante 2 años consecutivos**, sin otra causa. **Enfisema** (definición anatómica): agrandamiento permanente de los espacios aéreos distales al bronquiolo terminal con **destrucción de sus paredes**.' },
        {
          t: 'cuadro',
          titulo: 'Abotagado azul vs soplador rosado',
          head: ['', 'Bronquitis crónica', 'Enfisema'],
          filas: [
            ['Aspecto', '«**Abotagado azul**»: obeso, **cianótico**, edemas', '«**Soplador rosado**»: delgado, rosado, espira con **labios fruncidos**'],
            ['Síntoma principal', '**Tos y expectoración** abundante, matinal', '**Disnea** de esfuerzo'],
            ['Tórax', 'Normal o hiperinflado', '**En tonel**, músculos accesorios, tiraje'],
            ['Percusión', 'Normal o hipersonoro', '**Hipersonoridad**, descenso de las bases'],
            ['Auscultación', 'MV ↓, **roncus, sibilancias, subcrepitantes**', '**MV muy ↓**, sin ruidos agregados'],
            ['Gases', '**Hipoxemia e hipercapnia precoces**, poliglobulia', 'Normales o hipoxemia tardía'],
            ['Complicación', '**Cor pulmonale** temprano', 'Cor pulmonale tardío'],
          ],
        },
      ],
      oral: '«La EPOC es una obstrucción crónica, progresiva e irreversible al flujo aéreo, ligada sobre todo al tabaquismo; comprende la bronquitis crónica y el enfisema. La bronquitis crónica se define clínicamente por tos y expectoración al menos 3 meses por año durante 2 años consecutivos; el paciente es el abotagado azul, con cianosis, edemas, roncus y sibilancias, hipoxemia e hipercapnia tempranas y cor pulmonale precoz. El enfisema se define anatómicamente como el agrandamiento permanente de los espacios aéreos distales al bronquiolo terminal con destrucción de sus paredes; el paciente es el soplador rosado, delgado, con disnea, tórax en tonel, hipersonoridad y murmullo muy disminuido.»',
      repreguntas: [
        { q: '¿Cómo se define la bronquitis crónica?', a: 'Tos y expectoración al menos 3 meses por año durante 2 años consecutivos, sin otra causa.' },
        { q: '¿Qué es el cor pulmonale?', a: 'Sobrecarga del ventrículo derecho por hipertensión pulmonar secundaria a la vasoconstricción hipóxica.' },
        { q: '¿Qué déficit genético da enfisema?', a: 'El de α1-antitripsina, que deja sin freno a las elastasas.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 101–105 · Instituto Merlín, PDF 6 «EPOC» · Argente-Álvarez, cap. 36-1.',
    },
    {
      tema: 'sx-condensacion',
      titulo: 'Síndrome de condensación pulmonar (neumonía)',
      porque: [
        'El alvéolo se **llena** de exudado (células, líquido, gérmenes) pero el **bronquio sigue abierto**. Un pulmón sólido **transmite mejor** la voz y el ruido de la tráquea.',
        'Por eso: vibraciones **aumentadas**, **matidez**, **soplo tubario** (el ruido bronquial llega a la pared) y **crepitantes** (alvéolos que se despegan).',
      ],
      bloques: [
        { t: 'def', text: '**Condensación**: el aire del alvéolo es **reemplazado** por otro elemento con el bronquio permeable. **Neumonía**: inflamación del parénquima pulmonar, más allá de los bronquiolos terminales, con exudado y microorganismos.' },
        {
          t: 'cuadro',
          titulo: 'Neumonía típica vs atípica',
          head: ['', 'Típica', 'Atípica'],
          filas: [
            ['Germen', '**Neumococo**, H. influenzae', 'Mycoplasma, Chlamydia, Legionella, virus'],
            ['Comienzo', '**Brusco**', 'Insidioso, tras un cuadro gripal'],
            ['Fiebre', '**39–40 °C con escalofríos**', '37,5–38 °C, sin escalofríos'],
            ['Tos', 'Productiva, esputo **herrumbroso**', 'Seca, persistente'],
            ['Dolor', '**Puntada de costado** (pleurítico)', 'Retroesternal'],
            ['Examen', '**Síndrome de condensación** completo', 'Examen casi normal'],
            ['Radiografía', 'Opacidad **lobar** con **broncograma aéreo**', 'Patrón **intersticial**'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Examen físico (síndrome de condensación)',
          items: [
            '**Inspección**: taquipnea, facies neumónica (rubicundez y herpes labial del lado afectado).',
            '**Palpación**: expansión ↓ del lado enfermo; **vibraciones vocales aumentadas**.',
            '**Percusión**: **matidez** o submatidez en el área.',
            '**Auscultación**: **soplo tubario**, **crepitantes**, **broncofonía** y pectoriloquia.',
          ],
        },
        { t: 'maniobras', ids: ['vibraciones-vocales', 'torax-auscultacion'] },
      ],
      oral: '«El síndrome de condensación es el reemplazo del aire alveolar por otro elemento con el bronquio permeable; su causa típica es la neumonía, la inflamación del parénquima más allá de los bronquiolos terminales. La neumonía típica, por neumococo, tiene comienzo brusco con fiebre alta y escalofríos, tos con esputo herrumbroso y puntada de costado; la atípica, por Mycoplasma o virus, es insidiosa, con tos seca y examen casi normal. En el examen del síndrome de condensación encuentro expansión disminuida del lado enfermo, vibraciones vocales aumentadas, matidez y, a la auscultación, soplo tubario, crepitantes y broncofonía, porque el pulmón sólido con el bronquio abierto conduce mejor el sonido. La radiografía muestra una opacidad con broncograma aéreo.»',
      repreguntas: [
        { q: '¿Por qué aumentan las vibraciones vocales en la neumonía?', a: 'Porque el pulmón condensado con el bronquio permeable conduce mejor la vibración que el pulmón aireado.' },
        { q: '¿Qué es el broncograma aéreo?', a: 'El bronquio con aire (negro) dentro de la opacidad del alvéolo lleno (blanco): prueba que el bronquio está permeable.' },
        { q: '¿Qué complicaciones tiene la neumonía?', a: 'Absceso, empiema (derrame infectado) y bacteriemia.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 109–111 · Instituto Merlín, PDF 8 «Neumonía» · Argente-Álvarez, cap. 36-2.',
    },
    {
      tema: 'sx-atelectasia',
      titulo: 'Síndrome atelectásico',
      porque: [
        'Si se **tapa el bronquio**, el aire que quedó en los alvéolos **se reabsorbe** y el pulmón se **colapsa**: pierde volumen y **tira** del mediastino y del hemitórax hacia ese lado.',
        'Con el bronquio tapado no pasa ni la voz ni el aire: **vibraciones abolidas** y **silencio auscultatorio**, aunque el pulmón esté sólido. Es lo que la diferencia de la neumonía.',
      ],
      bloques: [
        { t: 'def', text: 'Pérdida del volumen de un segmento, lóbulo o pulmón por **colapso de los alvéolos**, generalmente por **obstrucción bronquial** con reabsorción del aire.' },
        { t: 'paso', titulo: 'Causas', items: ['**Obstructiva** (la típica): tumor endobronquial, **tapón mucoso**, cuerpo extraño; compresión extrínseca (ganglios).', 'Por **relajación**: derrame o neumotórax que comprimen el pulmón.', 'Cicatrizal (TBC) · adhesiva (falta de surfactante en el prematuro).'] },
        {
          t: 'paso',
          titulo: 'Examen físico',
          items: ['**Inspección**: **retracción** del hemitórax, tiraje, taquipnea.', '**Palpación**: expansión ↓ o abolida, **vibraciones abolidas**.', '**Percusión**: **matidez**.', '**Auscultación**: **silencio auscultatorio** (murmullo abolido, sin soplo).'],
        },
        { t: 'paso', titulo: 'Radiografía', text: 'Opacidad **sin broncograma aéreo**, **mediastino y tráquea desviados hacia el lado** de la atelectasia, hemidiafragma elevado, espacios intercostales retraídos.' },
      ],
      oral: '«La atelectasia es la pérdida de volumen de un segmento, lóbulo o pulmón por colapso alveolar, en general porque un tumor, un tapón mucoso o un cuerpo extraño obstruye el bronquio y el aire se reabsorbe. Al examen hay retracción del hemitórax, expansión disminuida, vibraciones vocales abolidas, matidez y silencio auscultatorio. Se diferencia de la condensación porque el bronquio está tapado: no hay soplo tubario ni vibraciones aumentadas. En la radiografía, opacidad sin broncograma con el mediastino desviado hacia el mismo lado.»',
      repreguntas: [
        { q: '¿Hacia dónde se desvía el mediastino en la atelectasia y en el derrame?', a: 'En la atelectasia, hacia el lado enfermo (el pulmón tira). En el derrame grande o el neumotórax a tensión, hacia el lado opuesto (empujan).' },
        { q: '¿Por qué hay silencio auscultatorio y no soplo tubario?', a: 'Porque el bronquio está obstruido: el sonido de la vía aérea no llega al parénquima.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 111–112 · Instituto Merlín, PDF 9 «Atelectasia» · Argente-Álvarez, cap. 36-2.',
    },
    {
      tema: 'sx-derrame',
      titulo: 'Síndrome de derrame pleural',
      porque: [
        'Entre las pleuras hay normalmente unos pocos mL de líquido: se **forma** en la parietal y se **reabsorbe** en la visceral y la linfa. Si sube la hidrostática, baja la oncótica, se inflama la pleura o falla el drenaje linfático, se **acumula**.',
        'El líquido se ubica en la parte **declive** y **separa el pulmón de la pared**: abole vibraciones y murmullo y da **matidez**. En su borde superior el pulmón está comprimido: ahí aparecen el **soplo pleurítico** y la **egofonía**.',
      ],
      bloques: [
        { t: 'def', text: 'Acumulación anormal de **líquido en el espacio pleural** (más de lo normal; se detecta al examen con varios cientos de mL).' },
        { t: 'paso', titulo: 'Clínica', items: ['**Disnea** (según el tamaño), **tos seca**.', '**Dolor pleurítico** al comienzo (pleuritis): **desaparece cuando se instala el líquido** porque las hojas dejan de rozar.'] },
        {
          t: 'paso',
          titulo: 'Examen físico',
          items: [
            '**Inspección**: decúbito primero sobre el **lado sano** (dolor) y después sobre el **lado enfermo** (deja libre el pulmón sano); abovedamiento si es grande.',
            '**Palpación**: expansión ↓, **vibraciones abolidas** en la zona del derrame (**aumentadas en su borde superior**); frote si es pequeño.',
            '**Percusión**: **matidez** con límite superior **cóncavo** (curva de **Damoiseau**); **signo del desnivel** (la matidez cambia con la posición si el derrame es libre).',
            '**Auscultación**: **murmullo abolido**; en el borde superior, **soplo pleurítico** y **egofonía**.',
          ],
        },
        { t: 'ojo', text: 'Por radiografía: opacidad homogénea con línea de **concavidad superior** (Damoiseau) y **mediastino desplazado al lado opuesto** si es grande.' },
        { t: 'maniobras', ids: ['torax-percusion'] },
      ],
      oral: '«El derrame pleural es la acumulación anormal de líquido en el espacio pleural, por aumento de la presión hidrostática, descenso de la oncótica, inflamación de la pleura o falla del drenaje linfático. Da disnea, tos seca y dolor pleurítico que desaparece cuando se instala el líquido. Al examen el paciente se acuesta primero sobre el lado sano y después sobre el enfermo; hay expansión disminuida, vibraciones vocales abolidas en la zona del derrame y aumentadas en su borde, matidez de límite superior cóncavo con signo del desnivel, murmullo vesicular abolido y, en el borde superior, soplo pleurítico y egofonía. Se confirma con radiografía y se estudia el líquido por toracocentesis.»',
      repreguntas: [
        { q: '¿Por qué desaparece el dolor cuando aparece el derrame?', a: 'Porque el líquido separa las hojas pleurales y dejan de rozar.' },
        { q: '¿Qué es la egofonía?', a: 'Voz temblorosa, «de cabra», en el borde superior del derrame, donde el pulmón está comprimido.' },
        { q: '¿Qué es el signo del desnivel?', a: 'La matidez cambia de lugar con la posición del paciente: el derrame está libre.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 117–120 · Instituto Merlín, PDF 10 «Derrame pleural» · Argente-Álvarez, cap. 36-3.',
    },
    {
      tema: 'liquido-pleural',
      titulo: 'Líquido pleural: trasudado vs exudado',
      porque: [
        '**Trasudado**: la pleura está **sana**; el líquido pasa **pasivamente** por un problema de presiones (sube la hidrostática o baja la oncótica). Tiene **pocas proteínas**.',
        '**Exudado**: la pleura está **enferma** (inflamada, infectada, con tumor) y se vuelve permeable: pasa líquido **rico en proteínas, LDH y células**.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Toracocentesis', text: 'Punción en el sitio más declive: **línea axilar posterior, 7.º–8.º espacio intercostal**, paciente **sentado inclinado hacia adelante**; la aguja entra por el **borde superior de la costilla** inferior para no lesionar el paquete vasculonervioso.' },
        { t: 'clave', titulo: 'Criterios de Light (exudado si cumple al menos uno)', items: ['Proteínas pleurales / séricas **> 0,5**', 'LDH pleural / sérica **> 0,6**', 'LDH pleural **> 2/3 del límite superior normal** sérico (> 200 UI)'] },
        {
          t: 'cuadro',
          titulo: 'Trasudado vs exudado',
          head: ['', 'Trasudado', 'Exudado'],
          filas: [
            ['Mecanismo', 'Pasivo: ↑ hidrostática o ↓ oncótica', 'Activo: pleura inflamada o bloqueo linfático'],
            ['Proteínas', '< 2 g/dL', '> 3 g/dL'],
            ['Light', 'Ninguno', 'Al menos uno'],
            ['Causas', '**Insuficiencia cardíaca** (el derrame más frecuente), cirrosis, nefrótico', '**Paraneumónico** (el exudado más frecuente), **TBC**, cáncer, TEP, colagenopatías'],
          ],
        },
        { t: 'paso', titulo: 'Otros datos del líquido', items: ['**Empiema**: pus; pH < 7,10, glucosa < 40, leucocitos > 25.000.', '**Hemotórax**: hematocrito > 50 % del sanguíneo (trauma). **Quilotórax**: triglicéridos > 115 (linfa).', 'Sanguinolento: pensar en las **tres T**: **tumor, TEP, trauma**. **ADA > 50** orienta a TBC.'] },
      ],
      oral: '«El líquido pleural se obtiene por toracocentesis, en el séptimo u octavo espacio intercostal de la línea axilar posterior, pasando por el borde superior de la costilla. Se clasifica en trasudado, cuando la pleura está sana y el líquido pasa pasivamente por aumento de la presión hidrostática o descenso de la oncótica, como en la insuficiencia cardíaca, que es la causa más frecuente de derrame, la cirrosis o el nefrótico; y exudado, cuando la pleura está enferma, como en el derrame paraneumónico, la tuberculosis o el cáncer. Se diferencian con los criterios de Light: es exudado si el cociente de proteínas pleural sobre sérico es mayor de 0,5, el de LDH mayor de 0,6 o la LDH pleural supera los dos tercios del límite normal. Además se estudian el aspecto, el pH, la glucosa, las células, el cultivo y la citología.»',
      repreguntas: [
        { q: '¿Cuáles son los criterios de Light?', a: 'Proteínas P/S > 0,5; LDH P/S > 0,6; LDH pleural > 2/3 del límite superior normal. Uno alcanza para exudado.' },
        { q: '¿Cuál es la causa más frecuente de derrame pleural?', a: 'La insuficiencia cardíaca (trasudado). El exudado más frecuente es el paraneumónico.' },
        { q: '¿Por qué la aguja entra por el borde superior de la costilla?', a: 'Porque el paquete vasculonervioso intercostal corre por el borde inferior.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 118–122 · Instituto Merlín, PDF 10.',
    },
    {
      tema: 'neumotorax',
      titulo: 'Neumotórax',
      porque: [
        'La pleura tiene **presión negativa** que mantiene el pulmón pegado a la pared. Si entra **aire**, el pulmón **colapsa** hacia el hilio.',
        'Aire entre el pulmón y la pared: la vibración no llega (**vibraciones abolidas**), suena **hipersonoro** y no se oye el murmullo.',
        'En el **hipertensivo** el aire entra y no sale (válvula): la presión sube, **empuja el mediastino** al otro lado, cae el retorno venoso → **shock**. Es una emergencia.',
      ],
      bloques: [
        { t: 'def', text: 'Presencia de **aire en el espacio pleural**, con colapso parcial o total del pulmón.' },
        { t: 'paso', titulo: 'Clasificación', items: ['**Espontáneo primario**: joven, **longilíneo**, fumador, por ruptura de una bulla subpleural.', '**Espontáneo secundario**: con enfermedad pulmonar (EPOC, TBC, neumonía).', '**Traumático**: heridas, fracturas costales; **iatrogénico** (vía central, toracocentesis, ventilación mecánica).'] },
        { t: 'paso', titulo: 'Clínica', text: '**Dolor pleurítico brusco** y **disnea** (según el tamaño y la reserva del paciente); tos seca.' },
        { t: 'clave', titulo: 'Tríada de Galliard', items: ['**Vibraciones vocales disminuidas o abolidas** · **hipersonoridad** · **murmullo vesicular disminuido o abolido**', '+ **soplo anfórico** en el neumotórax completo.'] },
        { t: 'ojo', text: '**Neumotórax hipertensivo**: tríada de Galliard + dificultad respiratoria grave, **taquicardia, hipotensión**, ingurgitación yugular y **desviación de la tráquea al lado opuesto**. Se descomprime de urgencia.' },
      ],
      oral: '«El neumotórax es la presencia de aire en el espacio pleural con colapso parcial o total del pulmón. Puede ser espontáneo primario, típico del joven longilíneo y fumador por ruptura de una bulla; secundario a una enfermedad pulmonar; o traumático e iatrogénico. Da dolor pleurítico brusco y disnea. Al examen encuentro la tríada de Galliard: vibraciones vocales abolidas, hipersonoridad y murmullo vesicular abolido, con soplo anfórico si es completo. Su complicación más grave es el hipertensivo: el aire entra y no sale, desplaza el mediastino, cae el retorno venoso y el paciente entra en shock, con hipotensión e ingurgitación yugular; es una emergencia.»',
      repreguntas: [
        { q: '¿Cuál es la tríada de Galliard?', a: 'Vibraciones vocales abolidas, hipersonoridad y murmullo vesicular abolido.' },
        { q: '¿Cómo diferenciás un neumotórax de un derrame al examen?', a: 'Por la percusión: hipersonoridad en el neumotórax, matidez en el derrame.' },
        { q: '¿Por qué el hipertensivo da shock?', a: 'La presión intratorácica comprime el mediastino y cae el retorno venoso al corazón.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 115–117 · Instituto Merlín, PDF 11 «Neumotórax» · Argente-Álvarez, cap. 36-3.',
    },
    {
      tema: 'insuf-resp',
      titulo: 'Insuficiencia respiratoria',
      porque: [
        'El sistema respiratorio tiene dos tareas: **meter oxígeno** y **sacar CO2**. Si falla la primera hay **hipoxemia**; si además falla la ventilación, se acumula **CO2** (hipercapnia).',
        'Mecanismos de hipoxemia: **alteración ventilación/perfusión** (el más frecuente), **shunt** (sangre que pasa por alvéolos sin aire), **hipoventilación**, trastorno de la **difusión** y **baja presión de O2 inspirada** (altura).',
      ],
      bloques: [
        { t: 'def', text: 'Incapacidad del sistema respiratorio para mantener un intercambio gaseoso adecuado: **PaO2 < 60 mmHg** respirando aire ambiente a nivel del mar, **con o sin PaCO2 > 45 mmHg**.' },
        {
          t: 'cuadro',
          titulo: 'Clasificación',
          head: ['', 'Tipo I (hipoxémica, parcial)', 'Tipo II (hipercápnica, global)'],
          filas: [
            ['Gases', 'PaO2 < 60 con **PaCO2 normal o baja**', 'PaO2 < 60 con **PaCO2 > 45**'],
            ['Falla', 'Oxigenación', '**Ventilación** (la «bomba»)'],
            ['Ejemplos', 'Neumonía, edema de pulmón, TEP, distrés', 'EPOC, sedantes, enfermedades neuromusculares, deformidades torácicas'],
          ],
        },
        { t: 'paso', titulo: 'Según el tiempo', text: '**Aguda** (minutos a días, sin compensación) · **crónica** (el riñón compensa la acidosis reteniendo bicarbonato) · **crónica agudizada**.' },
        { t: 'paso', titulo: 'Clínica', items: ['Hipoxemia: **disnea**, taquipnea, **cianosis central**, taquicardia, **confusión**, agitación.', 'Hipercapnia: **somnolencia**, cefalea, confusión, hasta el **coma**.'] },
      ],
      oral: '«La insuficiencia respiratoria es la incapacidad del sistema respiratorio para mantener un intercambio gaseoso adecuado: PaO2 menor de 60 milímetros de mercurio respirando aire ambiente a nivel del mar, con o sin PaCO2 mayor de 45. Se clasifica en tipo I o hipoxémica, con CO2 normal o bajo, por falla de la oxigenación, como en la neumonía o el edema de pulmón; y tipo II o hipercápnica, por falla de la ventilación, como en la EPOC, los sedantes o las enfermedades neuromusculares. Según el tiempo es aguda, crónica o crónica agudizada. La hipoxemia da disnea, cianosis central, taquicardia y confusión; la hipercapnia, somnolencia, cefalea y puede llegar al coma.»',
      repreguntas: [
        { q: '¿Qué valores definen la insuficiencia respiratoria?', a: 'PaO2 < 60 mmHg, con o sin PaCO2 > 45, respirando aire ambiente a nivel del mar.' },
        { q: '¿Cuál es el mecanismo de hipoxemia más frecuente?', a: 'La alteración de la relación ventilación/perfusión.' },
        { q: '¿Qué da la hipercapnia?', a: 'Somnolencia, cefalea, confusión y, si progresa, coma.' },
      ],
      fuentes: 'Apunte de Ortega, «Gases arteriales» e «Insuficiencia respiratoria», pp. 95–100 · Argente-Álvarez, cap. 36-7.',
    },
  ],
  noOlvidar: [
    { q: 'Condensación vs atelectasia', a: 'Condensación: bronquio abierto, VV ↑, soplo tubario. Atelectasia: bronquio tapado, VV abolidas, silencio, retracción.' },
    { q: 'Derrame vs neumotórax', a: 'Ambos abolen VV y murmullo: derrame matidez, neumotórax hipersonoridad.' },
    { q: 'Tríada del asma', a: 'Disnea, tos, sibilancias (+ opresión torácica).' },
    { q: 'Gravedad del asma', a: 'No puede hablar, FC > 120, FR > 30, pulso paradójico > 20, tórax silencioso.' },
    { q: 'Bronquitis crónica', a: 'Tos y expectoración ≥ 3 meses por año, 2 años consecutivos.' },
    { q: 'Abotagado azul vs soplador rosado', a: 'Bronquitis crónica (cianosis, edemas, hipercapnia) vs enfisema (delgado, tonel, disnea).' },
    { q: 'Neumonía típica', a: 'Neumococo, brusca, fiebre alta con escalofríos, esputo herrumbroso, puntada de costado, broncograma aéreo.' },
    { q: 'Tríada de Galliard', a: 'Neumotórax: VV abolidas, hipersonoridad, MV abolido.' },
    { q: 'Derrame: signos', a: 'Matidez cóncava (Damoiseau), signo del desnivel, soplo pleurítico y egofonía en el borde.' },
    { q: 'Criterios de Light', a: 'Proteínas P/S > 0,5 · LDH P/S > 0,6 · LDH > 2/3 del normal: exudado.' },
    { q: 'Derrame más frecuente', a: 'Insuficiencia cardíaca (trasudado); exudado más frecuente: paraneumónico.' },
    { q: 'Toracocentesis', a: '7.º–8.º espacio, línea axilar posterior, borde superior de la costilla.' },
    { q: 'Insuficiencia respiratoria', a: 'PaO2 < 60 ± PaCO2 > 45. Tipo I hipoxémica · tipo II hipercápnica.' },
  ],
};
