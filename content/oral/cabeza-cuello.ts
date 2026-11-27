import type { ApunteUnidad } from './tipos';

/*
 * Cabeza y cuello — apunte para el oral.
 * Base: Califano cap. 2 «Semiotecnia de cabeza y cuello», Merlín «Historia clínica» p. 8, apunte de Ortega «Tiroides» pp. 323–325;
 * contrastados con Argente cap. 20 (TCS), 22 (Sistema linfático, pp. 195–196) y 25 (Cabeza: ojo rojo, cuadro 25-2).
 */
export const apunte: ApunteUnidad = {
  unidad: 'cabeza-cuello',
  temas: [
    {
      tema: 'ef-cabeza',
      titulo: 'Exploración física del cráneo, ojos, oído, nariz y boca',
      porque: [
        'Se examina con los **cuatro métodos** como cualquier región: se mira, se palpa, se percute y se ausculta. La clave es saber **qué buscar** en cada estructura.',
        'Los **puntos dolorosos** de los senos se exploran comparando ambos lados: es positivo si el dolor es **desproporcionado** a la presión.',
      ],
      bloques: [
        {
          t: 'cuadro',
          titulo: 'Qué se busca en cada parte',
          head: ['Región', 'Inspección', 'Palpación, percusión y auscultación'],
          filas: [
            ['**Cráneo**', 'Forma, tamaño, deformidades, implantación del pelo, alopecias', 'Protrusiones, depresiones, **suturas**, consistencia; percusión (dolor); soplos'],
            ['**Cara**', 'Forma, **simetría**, piel, circulación, **facies**', 'Arteria **temporal**, puntos dolorosos (**senos**, supraorbitario, trigeminales), **articulación temporomandibular**, **parótida**'],
            ['**Ojos**', 'Párpados, **conjuntivas** (palidez, ictericia en la esclerótica), córnea, **pupilas** (2–4 mm, iguales, redondas)', '**Tensión endoocular**; reflejos pupilares; fondo de ojo (II par)'],
            ['**Oído**', 'Forma e implantación del pabellón', '**Punto preauricular** (trago); percusión de la **mastoides**; Weber y Rinne (VIII par)'],
            ['**Nariz**', 'Forma, tamaño, fosas nasales, **aleteo nasal**', 'Puntos de los senos **maxilares y frontales**'],
            ['**Boca**', 'Labios, **lengua**, dientes, mucosa yugal, encías, **amígdalas**, velo del paladar, orofaringe', 'Conductos de **Stenon** y **Wharton** (cálculos), piso de la boca; percusión dentaria'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Maniobras de Califano',
          head: ['Maniobra', 'Cómo', 'Positiva'],
          filas: [
            ['**Punto sinomaxilar**', 'Presionar con un dedo debajo de la órbita, al costado de la nariz, comparando ambos lados', 'Dolor desproporcionado: **sinusitis maxilar**'],
            ['**Punto preauricular**', 'Presionar delante del **trago**', 'Dolor (o llanto en el niño): **otitis**'],
            ['**Tensión endoocular**', 'Ojos cerrados mirando hacia abajo: deprimir el globo con ambos índices', 'Muy duro: **glaucoma**'],
            ['**Conducto de Stenon**', 'Índice dentro de la boca y pulgar afuera, un través de dedo debajo del arco cigomático', 'Cálculo salival (parótida)'],
            ['**Conducto de Wharton**', 'Índice en el piso de la boca y pulgar por fuera', 'Cálculo salival (submaxilar)'],
            ['**Arteria temporal**', 'Pulpejos sobre su trayecto, del preauricular a la región supraorbitaria', 'Dura, dolorosa, sin pulso: arteritis'],
          ],
        },
        { t: 'maniobras', ids: ['boca-orofaringe', 'reflejos-pupilares', 'fondo-de-ojo'] },
      ],
      oral: '«El examen de la cabeza se hace con inspección, palpación, percusión y auscultación, región por región. En el cráneo miro forma, tamaño y deformidades y palpo las suturas. En la cara evalúo la simetría y la facies, palpo la arteria temporal, la articulación temporomandibular, la parótida y los puntos dolorosos de los senos, comparando ambos lados. En los ojos miro párpados, conjuntivas —palidez en la anemia, ictericia en la esclerótica—, córnea y pupilas, que normalmente miden 2 a 4 milímetros y son iguales; exploro la tensión endoocular y los reflejos pupilares. En el oído, el pabellón, el punto preauricular y la mastoides. En la nariz, la forma, las fosas y el aleteo nasal. Y en la boca, labios, lengua, dientes, mucosas, amígdalas y orofaringe, y palpo los conductos de Stenon y Wharton.»',
      repreguntas: [
        { q: '¿Dónde buscás la ictericia y dónde la palidez en el ojo?', a: 'La ictericia en la esclerótica; la palidez de la anemia en la conjuntiva tarsal (bajando el párpado inferior).' },
        { q: '¿Cómo explorás un seno maxilar?', a: 'Presionando debajo de la órbita, al costado de la nariz, comparando con el otro lado: positivo si el dolor es desproporcionado.' },
        { q: '¿Qué es la anisocoria?', a: 'Pupilas de distinto tamaño.' },
      ],
      fuentes: 'Baré-Califano, cap. 2 · Argente-Álvarez, cap. 25.',
    },
    {
      tema: 'ojo-rojo',
      titulo: 'Síndrome de ojo rojo',
      porque: [
        'El rojo es la **dilatación de los vasos** del ojo. Donde está la inyección dice qué tan profundo es el problema: **periférica** (conjuntival) = superficial; **alrededor del iris** (periquerática o ciliar) = profundo.',
        'Lo superficial (conjuntivitis) **no toca la visión ni la pupila**. Lo profundo (iridociclitis, glaucoma) da **dolor, baja de la visión y pupila alterada**: esos son los que no se pueden pasar por alto.',
      ],
      bloques: [
        { t: 'def', text: 'Enrojecimiento del ojo por dilatación vascular o sangrado; uno de los motivos de consulta más frecuentes. Importa diferenciar lo **leve** (conjuntivitis, hemorragia subconjuntival) de lo **grave** (glaucoma agudo, iridociclitis).' },
        {
          t: 'cuadro',
          titulo: 'Diagnóstico diferencial',
          head: ['', 'Conjuntivitis', 'Iridociclitis (uveítis anterior)', 'Glaucoma agudo', 'Hemorragia subconjuntival'],
          filas: [
            ['**Dolor**', 'No (ardor, picazón)', 'Moderado', '**Intenso**', 'No'],
            ['**Secreción**', '**Sí** (serosa a mucopurulenta)', 'No', 'No', 'No'],
            ['**Visión**', 'Normal', 'Regular o mala', '**Mala**', 'Normal'],
            ['**Pupila**', 'Normal', '**Miosis**', '**Midriasis**', 'Normal'],
            ['**Inyección**', '**Periférica** (conjuntival)', 'Alrededor del iris', 'Alrededor del iris', 'Mancha roja homogénea, bien delimitada'],
            ['**Otros**', 'Ganglio preauricular (viral)', 'Hipopion (pus en cámara anterior)', '**Náuseas y vómitos**, córnea turbia, ojo duro', 'Asintomática, se reabsorbe sola'],
          ],
          marca: 3,
        },
        { t: 'ojo', text: 'Las dos **graves** son el **glaucoma agudo** (dolor intenso, midriasis, ojo duro, vómitos) y la **iridociclitis** (dolor, miosis): requieren derivación urgente al oftalmólogo.' },
      ],
      oral: '«El síndrome de ojo rojo es el enrojecimiento del ojo por dilatación vascular o sangrado. Lo importante es diferenciar lo leve de lo grave. La conjuntivitis da inyección periférica, con secreción y ardor, sin dolor, con visión y pupila normales. La hemorragia subconjuntival es una mancha roja bien delimitada, asintomática. En cambio, la iridociclitis da dolor moderado, inyección alrededor del iris, baja de la visión y miosis; y el glaucoma agudo da dolor intenso, visión mala, midriasis, ojo duro a la palpación y náuseas y vómitos. Inyección periférica indica un proceso superficial; alrededor del iris, uno profundo.»',
      repreguntas: [
        { q: '¿Qué te hace pensar que un ojo rojo es grave?', a: 'Dolor intenso, baja de la visión, pupila alterada (miosis o midriasis) e inyección alrededor del iris.' },
      ],
      fuentes: 'Argente-Álvarez, cap. 25 (cuadro 25-2).',
    },
    {
      tema: 'ef-tcs-ganglios',
      titulo: 'Exploración del tejido celular subcutáneo y los ganglios linfáticos',
      porque: [
        'El **TCS** es la grasa debajo de la piel: aísla, es reserva de energía y deja que la piel se deslice. Se altera su **cantidad** (obesidad, caquexia), se **llena de líquido** (edema), de **aire** (enfisema) o aparecen **nódulos**.',
        'Un ganglio normal es chico, blando, móvil e indoloro. Si está **duro, fijo y grande** el proceso **rompió la cápsula**: pensar en **neoplasia**. Si está **doloroso**, se distendió rápido la cápsula: pensar en **infección**.',
      ],
      bloques: [
        {
          t: 'paso',
          titulo: 'Tejido celular subcutáneo',
          items: [
            'Se explora con **inspección y palpación**: **trofismo y distribución** (obesidad, adelgazamiento, caquexia; giba dorsal del Cushing), **signos de inflamación** (celulitis), **edema** (Godet), **nódulos** (lipoma, eritema nudoso: nódulos rojos, calientes y dolorosos en la cara anterior de las piernas) y **enfisema subcutáneo**.',
            '**Enfisema subcutáneo**: aire en el TCS; a la palpación da **crepitación** (como pisar nieve). Por herida, **neumotórax** o gangrena gaseosa.',
          ],
        },
        {
          t: 'paso',
          titulo: 'Grupos ganglionares',
          text: 'Cabeza y cuello: **occipitales, pre y retroauriculares, submentonianos, submaxilares, cadena yugular (anterior) y espinal (posterior), supraclaviculares** · **axilares** · **epitrocleares** · **inguinales**.',
        },
        {
          t: 'paso',
          titulo: 'Técnica',
          items: [
            'Paciente **sentado**; el examinador por **detrás** (o adelante). Pulpejos de índice, medio y anular, con **presión suave** y **movimientos circulares**.',
            'Con una mano se **flexiona la cabeza** hacia el lado que se palpa para relajar los músculos.',
            '**Valsalva** ayuda a palpar los supraclaviculares. Los **epitrocleares palpables** suelen ser patológicos.',
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Caracteres semiológicos',
          head: ['', 'Normal', 'Patológico'],
          filas: [
            ['**Tamaño y forma**', 'Ovoides, **0,5–1 cm** (inguinales hasta 2 cm)', '**> 2 cm**, redondos; masa > 10 cm'],
            ['**Consistencia**', '**Blanda, elástica**', '**Pétrea** (metástasis) · **firme, «goma de borrar»** (linfoma)'],
            ['**Sensibilidad**', 'Indoloros', '**Dolorosos**: infección (o crecimiento rápido)'],
            ['**Movilidad**', '**Móviles**', '**Adheridos** entre sí, a la piel o a planos profundos: neoplasia'],
            ['**Piel**', 'Normal', 'Roja, edema, supuración, fístula'],
          ],
        },
        { t: 'ojo', text: 'Siempre buscar también **hígado y bazo**: adenopatías + **esplenomegalia** orientan a mononucleosis, linfoma o leucemia. El **ganglio de Virchow** (supraclavicular izquierdo) sugiere un cáncer abdominal.' },
        { t: 'maniobras', ids: ['ganglios-supraclaviculares'] },
      ],
      oral: '«El tejido celular subcutáneo se explora con inspección y palpación: su trofismo y distribución, signos de inflamación, edema con la fóvea, nódulos y enfisema subcutáneo, que da crepitación. Los ganglios se palpan con el paciente sentado y el examinador por detrás, con los pulpejos y movimientos circulares, recorriendo los grupos: occipitales, pre y retroauriculares, submentonianos, submaxilares, cadenas yugular y espinal, supraclaviculares, axilares, epitrocleares e inguinales. De cada uno describo tamaño, consistencia, sensibilidad, movilidad y la piel. El ganglio normal mide 0,5 a 1 centímetro, es blando, indoloro y móvil. Un ganglio doloroso sugiere infección; duro, pétreo y adherido, neoplasia.»',
      repreguntas: [
        { q: '¿Qué sugiere un ganglio duro, adherido e indoloro?', a: 'Metástasis: el proceso superó la cápsula del ganglio.' },
        { q: '¿Qué es el ganglio de Virchow?', a: 'Un ganglio supraclavicular izquierdo agrandado, que sugiere una neoplasia abdominal (gástrica).' },
        { q: '¿Cómo reconocés un enfisema subcutáneo?', a: 'A la palpación crepita, como pisar nieve: aire en el TCS (neumotórax, trauma, gangrena gaseosa).' },
      ],
      fuentes: 'Argente-Álvarez, cap. 20 y cap. 22 (pp. 195–196) · Baré-Califano, cap. 2 · Instituto Merlín, «Historia clínica» p. 8.',
    },
    {
      tema: 'ef-cuello-tiroides',
      titulo: 'Exploración física del cuello y la glándula tiroides',
      porque: [
        'La tiroides **asciende al tragar** porque está unida a la laringe: por eso se palpa **haciendo tragar** al paciente, y así se distingue de otras masas del cuello.',
        'Normalmente **no se ve ni se palpa** con claridad. Si se agranda es un **bocio** (difuso o nodular); su consistencia orienta a la causa.',
      ],
      bloques: [
        {
          t: 'paso',
          titulo: 'Cuello: qué se evalúa',
          items: [
            '**Inspección**: forma, simetría, movimientos, **latidos arteriales** y **pulso venoso** (ingurgitación yugular), tráquea en la línea media, masas.',
            '**Palpación**: ganglios, glándulas salivales, **tiroides**, tráquea, **carótidas** (una por vez, comparando), hueco supraesternal.',
            '**Auscultación**: **carótidas** (soplos), tiroides, hueco supraesternal.',
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Tiroides: cómo se explora',
          head: ['Paso', 'Cómo', 'Qué busco'],
          filas: [
            ['**Inspección**', 'Sentado, cuello en leve **hiperextensión**, médico adelante; **hacerle tragar**', 'Bocio, asimetría, nódulos; ingurgitación al levantar los brazos (**signo de Pemberton**: bocio que ocupa el estrecho torácico)'],
            ['**Palpación posterior** (De Quervain)', 'Médico **por detrás**: pulgares en la nuca, dedos sobre los lóbulos; **hacer tragar** (sorbos de agua)', 'Forma, **tamaño**, **consistencia**, superficie, **movilidad**, dolor'],
            ['**Palpación anterior** (Lahey, Crile)', 'Por **delante**: se desplaza la tráquea con una mano y se palpa el lóbulo con la otra', 'Cada lóbulo por separado'],
            ['**Auscultación**', 'Campana sobre los lóbulos', '**Soplo** y frémito: hiperfunción (**Graves-Basedow**)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Consistencia de la tiroides',
          head: ['Consistencia', 'Pensar en'],
          filas: [
            ['Blanda, elástica', 'Normal; bocio simple, Graves'],
            ['Semidura', 'Nodular; Hashimoto'],
            ['Muy dura o **pétrea**', '**Cáncer**, tiroiditis de Riedel'],
            ['**Dolorosa**', 'Tiroiditis aguda o subaguda; hemorragia de un nódulo'],
          ],
        },
        { t: 'ojo', text: 'Lo que **asciende al tragar** es tiroides (o un nódulo del **conducto tirogloso**, en la línea media, a veces en la región submandibular). Un ganglio no se mueve con la deglución.' },
      ],
      oral: '«En el cuello evalúo por inspección forma, simetría, latidos arteriales, el pulso venoso y la posición de la tráquea; palpo ganglios, glándulas salivales, tiroides, tráquea y las carótidas de a una, y ausculto las carótidas. La tiroides se inspecciona con el cuello en leve hiperextensión pidiéndole que trague, porque asciende con la deglución. Para palparla me ubico por detrás, maniobra de De Quervain, con los pulgares en la nuca y los dedos sobre los lóbulos, y le hago tragar; o por delante, con las maniobras de Lahey o Crile, desplazando la tráquea para palpar cada lóbulo. Describo forma, tamaño, consistencia, superficie, movilidad y dolor, y ausculto buscando soplos, que indican hiperfunción como en el Graves-Basedow.»',
      repreguntas: [
        { q: '¿Por qué hacés tragar al paciente?', a: 'Porque la tiroides está unida a la laringe y asciende con la deglución: así se la identifica y se la diferencia de otras masas.' },
        { q: '¿Qué es el signo de Pemberton?', a: 'Ingurgitación yugular y congestión facial al levantar ambos brazos, por un bocio que ocupa el estrecho superior del tórax.' },
        { q: '¿Qué significa un soplo tiroideo?', a: 'Aumento del flujo sanguíneo por hiperfunción, como en la enfermedad de Graves-Basedow.' },
      ],
      fuentes: 'Apunte de Ortega, «Tiroides» pp. 323–325 · Baré-Califano, cap. 2 (fig. 2-11).',
    },
  ],
  noOlvidar: [
    { q: 'Pupilas normales', a: '2–4 mm, centradas, redondas, iguales; reaccionan a la luz y a la acomodación.' },
    { q: 'Ictericia y palidez en el ojo', a: 'Ictericia: esclerótica. Palidez: conjuntiva tarsal.' },
    { q: 'Ojo rojo grave', a: 'Glaucoma agudo (dolor intenso, midriasis, ojo duro, vómitos) e iridociclitis (dolor, miosis).' },
    { q: 'Inyección periférica vs periquerática', a: 'Periférica (conjuntival): superficial. Alrededor del iris: profundo.' },
    { q: 'Ganglio normal', a: '0,5–1 cm, blando, indoloro, móvil.' },
    { q: 'Ganglio neoplásico', a: 'Duro o pétreo, adherido, indoloro, > 2 cm.' },
    { q: 'Ganglio de Virchow', a: 'Supraclavicular izquierdo: neoplasia abdominal.' },
    { q: 'Enfisema subcutáneo', a: 'Crepitación a la palpación: aire en el TCS.' },
    { q: 'Tiroides', a: 'Asciende al tragar. De Quervain (posterior), Lahey y Crile (anterior). Pemberton. Soplo = hiperfunción.' },
    { q: 'Tiroides pétrea', a: 'Cáncer o tiroiditis de Riedel.' },
  ],
};
