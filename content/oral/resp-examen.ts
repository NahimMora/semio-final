import type { ApunteUnidad } from './tipos';

/*
 * Respiratorio: motivos de consulta y examen físico — apunte para el oral.
 * Base: apunte de Ortega («Motivos de consulta del aparato respiratorio» pp. 72–77; «Examen físico del aparato respiratorio» pp. 78–89)
 * y Merlín (PDF 4 «Semiología del aparato respiratorio»), contrastados con Califano cap. 3 y Argente cap. 33 y 35.
 */
export const apunte: ApunteUnidad = {
  unidad: 'resp-examen',
  temas: [
    {
      tema: 'mc-resp',
      titulo: 'Motivos de consulta respiratorios: tos y expectoración',
      porque: [
        'La **tos** es un **reflejo de defensa**: receptores de la faringe, laringe y tráquea (V, IX y X) → **centro tusígeno** del bulbo → inspiración, **cierre de la glotis**, contracción espiratoria con la glotis cerrada (sube la presión) y apertura brusca: el aire sale a ~100 m/s arrastrando lo que hay.',
        'El **parénquima pulmonar no produce tos ni dolor**: no tiene esos receptores. Por eso una lesión pulmonar duele solo cuando llega a la **pleura parietal**.',
        'La **expectoración** muestra qué hay en el árbol bronquial: su **aspecto** orienta a la causa.',
      ],
      bloques: [
        { t: 'def', text: '**Tos**: espiración brusca y explosiva, a glotis primero cerrada, que **libera la vía aérea** de secreciones y cuerpos extraños; reflejo defensivo. **Expectoración**: expulsión por la boca, mediante la tos, de las secreciones de la vía aérea inferior (el material es el **esputo**).' },
        {
          t: 'cuadro',
          titulo: 'Tos: clasificación',
          head: ['Según', 'Tipos'],
          filas: [
            ['**Secreciones**', '**Seca** (irritativa: pleuritis, inicio de la bronquitis) · **húmeda**: productiva (con expectoración: neumonía, bronquiectasias) o no productiva'],
            ['**Tiempo**', '**Aguda < 3 semanas** · subaguda 3–8 · **crónica > 8 semanas**'],
            ['**Características**', '**Quintosa** (coqueluche: accesos con inspiración ruidosa) · **ronca o perruna** (laringitis) · **bitonal** (parálisis de una cuerda vocal por compresión del recurrente) · **emetizante** (provoca vómitos)'],
            ['**Momento**', 'Matinal (bronquitis crónica, goteo posnasal) · **nocturna** (asma, reflujo, insuficiencia cardíaca izquierda)'],
          ],
        },
        { t: 'clave', titulo: 'Causas de tos crónica', items: ['**Tabaquismo**: la causa más frecuente; un **cambio de la tos en un fumador** obliga a pensar en **cáncer de pulmón**.', 'En no fumadores: **goteo posnasal**, asma, **reflujo gastroesofágico**; fármacos (**IECA**).'] },
        {
          t: 'cuadro',
          titulo: 'Expectoración: tipos',
          head: ['Tipo', 'Cómo es', 'Pensar en'],
          filas: [
            ['**Serosa**', 'Clara, espumosa, rosada («**asalmonada**»)', '**Edema agudo de pulmón**'],
            ['**Mucosa**', 'Incolora, transparente, viscosa', 'Bronquitis crónica, inicio de la bronquitis aguda'],
            ['**Mucopurulenta o purulenta**', 'Amarilla o verdosa, opaca', 'Infección: bronquitis, neumonía, bronquiectasias'],
            ['**Perlada**', 'Pequeños grumos (cristales de Leyden)', '**Crisis asmática**'],
            ['**Herrumbrosa**', 'Purulenta teñida de sangre, color óxido', '**Neumonía neumocócica**'],
            ['**Hemoptoica** (estrías de sangre)', 'Forma mínima de hemoptisis', 'Sospechar **cáncer de pulmón**'],
            ['**Vómica**', 'Expulsión brusca de **> 300 mL** de pus o líquido', 'Absceso, quiste hidatídico («agua de roca»), empiema'],
          ],
        },
        { t: 'paso', titulo: 'Dolor torácico respiratorio', text: '**Puntada de costado**: punzante, intenso, que **aumenta con la inspiración y la tos**. Aparece cuando la lesión llega a la **pleura parietal** (neumonía, pleuritis, neumotórax, infarto pulmonar por TEP).' },
      ],
      oral: '«Los motivos de consulta respiratorios son la tos, la expectoración, la hemoptisis, la disnea y el dolor torácico. La tos es una espiración brusca a glotis cerrada que libera la vía aérea; es un reflejo con receptores en faringe, laringe y tráquea y centro en el bulbo. Se clasifica en seca o húmeda —productiva o no productiva—, en aguda si dura menos de 3 semanas y crónica si dura más de 8, y por sus características: quintosa, perruna, bitonal o emetizante. La causa más frecuente de tos crónica es el tabaquismo. La expectoración es la expulsión del esputo, y su aspecto orienta: serosa asalmonada en el edema agudo de pulmón, mucosa en la bronquitis crónica, purulenta en las infecciones, perlada en el asma, herrumbrosa en la neumonía neumocócica, y la vómica es la expulsión brusca de más de 300 mililitros. El dolor respiratorio es la puntada de costado, porque solo duele la pleura parietal.»',
      repreguntas: [
        { q: '¿Por qué una neumonía puede no doler?', a: 'Porque el parénquima no tiene inervación dolorosa: duele solo si llega a la pleura parietal.' },
        { q: '¿Qué es la tos bitonal?', a: 'Tos de dos tonos por parálisis de una cuerda vocal, por compresión del nervio recurrente (tumor de mediastino).' },
        { q: '¿Qué esputo da la neumonía neumocócica?', a: 'Herrumbroso: purulento teñido de sangre, color óxido.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 72–76 · Instituto Merlín, PDF 4 · Argente-Álvarez, cap. 33.',
    },
    {
      tema: 'hemoptisis',
      titulo: 'Hemoptisis',
      porque: [
        'La sangre viene del **árbol respiratorio**, por eso sale **con tos**, **roja, rutilante y espumosa** (mezclada con aire) y **alcalina**.',
        'En la **hematemesis** viene del tubo digestivo: sale **con vómito**, oscura (la **hematina ácida** del estómago la oscurece), con **restos de alimento**, y días después aparece **melena**.',
      ],
      bloques: [
        { t: 'def', text: 'Expulsión **por la boca, con la tos**, de **sangre** proveniente de las **vías respiratorias inferiores** o el pulmón.' },
        {
          t: 'cuadro',
          titulo: 'Hemoptisis vs hematemesis',
          head: ['', 'Hemoptisis', 'Hematemesis'],
          filas: [
            ['Cómo sale', 'Con **tos**, precedida de cosquilleo', 'Con **vómito**, precedida de náuseas'],
            ['Color', '**Roja, rutilante, espumosa**', 'Oscura (en «borra de café») o roja'],
            ['Contenido', 'Sin alimento', '**Restos de alimento**, coágulos'],
            ['Reacción', '**Alcalina**', '**Ácida**'],
            ['Después', 'Esputos hemoptoicos', '**Melena**'],
            ['Antecedentes', 'Respiratorios, tabaquismo, TBC', 'Úlcera, AINE, alcohol, cirrosis'],
          ],
          marca: 1,
        },
        { t: 'ojo', text: 'Descartar también la **epistaxis** posterior y la **gingivorragia** (sangre de la nariz o las encías que se escupe o se traga).' },
        {
          t: 'cuadro',
          titulo: 'Magnitud',
          head: ['Grado', 'Volumen'],
          filas: [
            ['Leve', 'Hasta 250 mL (esputos teñidos o estrías)'],
            ['Moderada', '250–500 mL'],
            ['Grave', '500–600 mL en 24–48 h'],
            ['**Masiva**', '**> 600 mL**: riesgo de muerte por **asfixia** o shock'],
          ],
        },
        { t: 'clave', titulo: 'Causas más frecuentes (en nuestro medio)', items: ['**1. Tuberculosis · 2. Bronquitis crónica · 3. Cáncer de pulmón · 4. Bronquiectasias.**', 'Extrapulmonares: **estenosis mitral**, insuficiencia cardíaca, **TEP**, trastornos de la coagulación.'] },
      ],
      oral: '«La hemoptisis es la expulsión por la boca, con la tos, de sangre proveniente de las vías respiratorias inferiores o del pulmón. Es roja, rutilante, espumosa y alcalina, sin restos de alimento. Se diferencia de la hematemesis, que sale con el vómito, es oscura por la hematina ácida, con restos de alimento, de reacción ácida, y se sigue de melena; y también de la epistaxis y la gingivorragia. Según el volumen va de leve, hasta 250 mililitros, a masiva, más de 600, que puede matar por asfixia. Las causas más frecuentes en nuestro medio son la tuberculosis, la bronquitis crónica, el cáncer de pulmón y las bronquiectasias; entre las extrapulmonares, la estenosis mitral y el TEP.»',
      repreguntas: [
        { q: '¿Cómo diferenciás hemoptisis de hematemesis?', a: 'Hemoptisis: con tos, roja espumosa, alcalina, sin alimento. Hematemesis: con vómito, oscura, ácida, con alimento, luego melena.' },
        { q: '¿Por qué la hemoptisis masiva mata?', a: 'Sobre todo por asfixia (la sangre inunda la vía aérea), además del shock.' },
        { q: '¿Qué causa cardíaca da hemoptisis?', a: 'La estenosis mitral, por hipertensión venocapilar pulmonar.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 75–76 · Instituto Merlín, PDF 4 · Clase de Ortega hd-1 08:10 («ese cuadrito tienen que sabérselo»).',
    },
    {
      tema: 'ef-torax',
      titulo: 'Exploración física del tórax',
      porque: [
        'Cada método detecta **qué hay debajo de la pared**: aire, líquido o tejido sólido. El pulmón normal es **aire en una esponja**: vibra bien, suena **sonoro** y se escucha el **murmullo vesicular**.',
        'Las **vibraciones vocales** viajan por la columna de aire y el tejido: **aumentan** si el pulmón se vuelve sólido con el **bronquio abierto** (neumonía); **disminuyen o se abolen** si algo las bloquea: un bronquio tapado (atelectasia), aire o líquido entre el pulmón y la pared (neumotórax, derrame).',
      ],
      bloques: [
        {
          t: 'paso',
          titulo: 'Antes de empezar: los reparos',
          items: [
            '**Ángulo de Louis**: inserción del **2.º cartílago costal**; debajo está el 2.º espacio intercostal (**maniobra para contar costillas**). Mamilas: 4.º espacio. **C7**: apófisis prominente.',
            'Por **delante** se exploran sobre todo los **lóbulos superiores**; por **detrás**, los **inferiores**.',
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Los cuatro tiempos',
          head: ['Método', 'Qué evalúo', 'Hallazgos clave'],
          filas: [
            ['**Inspección estática**', 'Forma (normal cilíndrico, transverso > anteroposterior 2:1), simetría, piel', '**Tonel** (enfisema), paralítico, pectus excavatum o carinatum, cifoescoliosis; **abovedamiento** (derrame, neumotórax) o **retracción** (atelectasia)'],
            ['**Inspección dinámica**', 'Tipo, **frecuencia**, amplitud y ritmo respiratorios; signos de dificultad', '**Tiraje**, aleteo nasal, músculos accesorios, respiración en balancín; Cheyne-Stokes, Biot, Kussmaul'],
            ['**Palpación**', 'Partes blandas, **elasticidad**, **expansión** (vértices: **Ruault**; infraclavicular: **Loewenberg**; bases) y **vibraciones vocales** («33», con la palma, comparando)', 'Expansión ↓ del lado enfermo; VV ↑ en la condensación, ↓ o abolidas en derrame, neumotórax, atelectasia'],
            ['**Percusión**', 'Dígito-digital de arriba abajo, comparando; **campos de Kronig** (vértices); **excursión de las bases** (4–6 cm)', 'Sonoridad normal · **matidez** (neumonía, atelectasia, derrame) · **hipersonoridad** (enfisema, asma, neumotórax)'],
            ['**Auscultación**', 'Membrana, boca entreabierta, arriba abajo, comparando; voz «33»', 'Murmullo vesicular ↑/↓; soplos; **ruidos agregados**; broncofonía, pectoriloquia, egofonía'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Vibraciones vocales',
          head: ['', 'Por qué', 'Ejemplos'],
          filas: [
            ['**Aumentadas**', 'Pulmón **condensado** + **bronquio permeable** + en contacto con la pared', '**Neumonía**, caverna'],
            ['**Disminuidas o abolidas**', 'Algo **bloquea** la transmisión', 'Atelectasia (bronquio tapado), enfisema, **derrame**, **neumotórax**, obesidad'],
          ],
        },
        { t: 'ojo', text: 'Normalmente hay **matidez hepática** desde el 5.º–6.º espacio derecho y **timpanismo** en el espacio semilunar de **Traube** (izquierda). Si **desaparece la matidez hepática** hay aire libre en el peritoneo (**signo de Jobert**: perforación).' },
      ],
      oral: '«El examen del tórax se hace con inspección, palpación, percusión y auscultación, comparando siempre ambos lados, con el paciente sentado. Primero ubico los reparos: el ángulo de Louis marca el segundo cartílago costal y desde ahí cuento los espacios. En la inspección estática veo la forma —normal cilíndrico, con el diámetro transverso mayor que el anteroposterior— y deformaciones como el tórax en tonel; en la dinámica, tipo, frecuencia, amplitud y ritmo respiratorios y signos de dificultad como el tiraje. En la palpación evalúo elasticidad, expansión de vértices con la maniobra de Ruault y de bases, y vibraciones vocales haciéndole decir 33. En la percusión dígito-digital, la sonoridad pulmonar, los campos de Kronig y la excursión de las bases. Y en la auscultación, el murmullo vesicular, los soplos, los ruidos agregados y la voz.»',
      repreguntas: [
        { q: '¿Cuándo aumentan las vibraciones vocales?', a: 'Cuando el pulmón está condensado, con el bronquio permeable y en contacto con la pared: neumonía.' },
        { q: '¿Por qué un derrame abole las vibraciones vocales?', a: 'El líquido entre el pulmón y la pared bloquea la transmisión de la vibración.' },
        { q: '¿Qué es la maniobra de Ruault?', a: 'Evaluación de la expansión de los vértices: por detrás, manos sobre los trapecios con los dedos en las fosas infraclaviculares.' },
        { q: '¿Cuánto desciende normalmente la base pulmonar en inspiración?', a: 'Entre 4 y 6 cm (excursión de las bases).' },
      ],
      fuentes: 'Apunte de Ortega, pp. 78–89 · Baré-Califano, cap. 3 · Argente-Álvarez, cap. 35.',
    },
    {
      tema: 'ruidos-agregados',
      titulo: 'Ruidos respiratorios normales y agregados',
      porque: [
        'Los ruidos **normales** nacen del aire: turbulento en la tráquea (**soplo laringotraqueal**: áspero, agudo) y alvéolos que se distienden (**murmullo vesicular**: suave, grave, inspiratorio). El pulmón aireado **filtra** los agudos: por eso en la periferia solo se oye el murmullo.',
        'Si el pulmón se **condensa** con el bronquio abierto, transmite el ruido de la tráquea: se oye un **soplo tubario** donde no debería.',
        '**Secos** (continuos, musicales): aire por un bronquio **estrechado**. **Húmedos** (discontinuos): aire que atraviesa **líquido** o alvéolos que se abren.',
      ],
      bloques: [
        {
          t: 'cuadro',
          titulo: 'Ruidos normales',
          head: ['Ruido', 'Dónde', 'Cómo es'],
          filas: [
            ['**Laringotraqueal** (soplo glótico)', 'Cuello (tráquea)', 'Áspero, **agudo**, inspiración y espiración (espiración más larga)'],
            ['**Broncovesicular**', 'Sobre grandes bronquios (manubrio, interescapular)', 'Intermedio'],
            ['**Murmullo vesicular**', 'Todo el pulmón en contacto con la pared', 'Suave, **grave**, **inspiratorio** (4:1)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Soplos patológicos (reemplazan al murmullo)',
          head: ['Soplo', 'Cómo es', 'Dónde'],
          filas: [
            ['**Tubario**', 'Como el laringotraqueal pero más agudo', '**Neumonía** (condensación con bronquio permeable)'],
            ['**Cavitario**', 'Suave, grave, espiratorio', 'Caverna (TBC), absceso'],
            ['**Pleurítico**', 'Suave, espiratorio, en «E»', '**Borde superior de un derrame**'],
            ['**Anfórico**', 'Metálico, como soplar una botella', '**Neumotórax**, grandes cavidades'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Ruidos agregados',
          head: ['Ruido', 'Cómo es', 'Origen', 'Ejemplo'],
          filas: [
            ['**Sibilancias**', 'Silbido agudo, **espiratorio**, continuo', 'Bronquios **finos** estrechados', '**Asma** (polifónicas); tumor o cuerpo extraño (monofónica fija)'],
            ['**Roncus**', 'Grave, como ronquido; **se modifica con la tos**', 'Bronquios **gruesos** con secreciones', 'Bronquitis'],
            ['**Estertores crepitantes**', 'Finos, **al final de la inspiración**, como frotar un mechón de pelo; **no se modifican con la tos**', '**Alvéolos** que se despegan', '**Neumonía** inicial, **IC** (bases), fibrosis («velcro»)'],
            ['**Subcrepitantes** (de burbuja)', 'Burbujeo en ambas fases; **se modifican con la tos**', 'Bronquios con secreciones', 'Bronconeumonía, bronquiectasias, edema'],
            ['**Frote pleural**', 'Superficial, como frotar cuero; **ambas fases**, no cambia con la tos, **desaparece en apnea**', 'Pleuras inflamadas que rozan', '**Pleuritis** seca (desaparece si aparece derrame)'],
            ['**Estridor y cornaje**', 'Audible a distancia, **inspiratorio**', 'Obstrucción **alta** (laringe, tráquea)', 'Niño: estridor · adulto: cornaje'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Auscultación de la voz («33»)',
          head: ['Hallazgo', 'Qué se oye', 'Dónde'],
          filas: [
            ['**Broncofonía**', 'Voz más resonante, sin nitidez', 'Condensación (neumonía)'],
            ['**Pectoriloquia** (y áfona)', 'La voz (o el cuchicheo) se entiende clara', 'Condensación, cavernas; encima de derrames'],
            ['**Egofonía**', 'Voz temblorosa, «de cabra»', '**Borde superior del derrame**'],
            ['**Disminución**', 'Voz apagada', 'Derrame, neumotórax, atelectasia, enfisema'],
          ],
        },
      ],
      oral: '«Los ruidos normales son el soplo laringotraqueal, áspero y agudo, en la tráquea; el broncovesicular sobre los grandes bronquios; y el murmullo vesicular, suave, grave y predominantemente inspiratorio, en todo el pulmón. Los agregados se dividen en secos, continuos y musicales, por estrechez bronquial: sibilancias, agudas y espiratorias, típicas del asma, y roncus, graves, que cambian con la tos; y húmedos o discontinuos: estertores crepitantes, alveolares, al final de la inspiración, que no cambian con la tos, como en la neumonía o la insuficiencia cardíaca, y subcrepitantes, bronquiales, que sí cambian con la tos. Además el frote pleural, superficial, en ambas fases, que desaparece en apnea. También pueden aparecer soplos patológicos: tubario en la neumonía, pleurítico por encima del derrame y anfórico en el neumotórax.»',
      repreguntas: [
        { q: '¿Cómo diferenciás crepitantes de frote pleural?', a: 'Crepitantes: al final de la inspiración, alveolares. Frote: superficial, en ambas fases, desaparece en apnea y con el derrame.' },
        { q: '¿Qué ruido agregado se modifica con la tos?', a: 'Los roncus y los subcrepitantes (secreciones bronquiales); los crepitantes no.' },
        { q: '¿Qué es la egofonía y dónde se oye?', a: 'Voz temblorosa «de cabra», en el borde superior de un derrame pleural.' },
        { q: '¿Qué significa una sibilancia monofónica fija?', a: 'Obstrucción parcial de un bronquio por un tumor o un cuerpo extraño.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 87–89 · Argente-Álvarez, cap. 35.',
    },
  ],
  noOlvidar: [
    { q: 'Tos crónica', a: '> 8 semanas; causa más frecuente: tabaquismo (cambio de la tos en un fumador → cáncer).' },
    { q: 'Esputos', a: 'Asalmonado: edema de pulmón · herrumbroso: neumonía neumocócica · perlado: asma · vómica > 300 mL.' },
    { q: 'Hemoptisis vs hematemesis', a: 'Tos, roja espumosa, alcalina, sin alimento vs vómito, oscura, ácida, con alimento, melena.' },
    { q: 'Hemoptisis masiva', a: '> 600 mL; mata por asfixia.' },
    { q: 'Causas de hemoptisis', a: 'TBC, bronquitis crónica, cáncer de pulmón, bronquiectasias; estenosis mitral, TEP.' },
    { q: 'Ángulo de Louis', a: '2.º cartílago costal: desde ahí se cuentan los espacios.' },
    { q: 'VV aumentadas', a: 'Condensación + bronquio permeable + contacto con la pared (neumonía).' },
    { q: 'VV abolidas', a: 'Derrame, neumotórax, atelectasia.' },
    { q: 'Percusión', a: 'Matidez: neumonía, atelectasia, derrame · hipersonoridad: enfisema, asma, neumotórax.' },
    { q: 'Crepitantes', a: 'Alveolares, fin de inspiración, no cambian con la tos (neumonía, IC).' },
    { q: 'Sibilancias', a: 'Agudas, espiratorias, bronquios finos (asma).' },
    { q: 'Frote pleural', a: 'Ambas fases, superficial, desaparece en apnea y con el derrame.' },
    { q: 'Soplos', a: 'Tubario: neumonía · pleurítico y egofonía: borde del derrame · anfórico: neumotórax.' },
  ],
};
