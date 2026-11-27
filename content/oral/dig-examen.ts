import type { ApunteUnidad } from './tipos';

/*
 * Examen físico del abdomen — apunte para el oral.
 * Base: apunte de Ortega («Examen físico del aparato digestivo» pp. 356–367) y Merlín («Práctico: hígado y vesícula», «Bazo», «Dolor abdominal»),
 * contrastados con Argente cap. 41.
 */
export const apunte: ApunteUnidad = {
  unidad: 'dig-examen',
  temas: [
    {
      tema: 'ef-abdomen',
      titulo: 'Exploración física del abdomen',
      porque: [
        'En el abdomen se **cambia el orden**: inspección, **auscultación**, percusión y **palpación al final**. Si palpo o percuto antes, **provoco** ruidos intestinales y ya no oigo los espontáneos.',
        'La **percusión** distingue **aire** (timpanismo: intestino) de **órganos macizos, líquido o tumores** (matidez). La **palpación** es el paso que más información da.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Posición y topografía', text: 'Decúbito dorsal, cabeza en una almohada, brazos al costado; examinador a la **derecha**, luz tangencial. **Nueve regiones** (dos líneas horizontales: subcostal y biilíaca; dos verticales) o **cuatro cuadrantes** por el ombligo.' },
        { t: 'paso', titulo: 'Orden', ordenada: true, items: ['**Inspección** (estática y dinámica)', '**Auscultación**', '**Percusión**', '**Palpación** (superficial y profunda)'] },
        {
          t: 'cuadro',
          titulo: 'Inspección',
          head: ['Qué miro', 'Hallazgos'],
          filas: [
            ['**Forma**', '**Globoso** (obesidad, meteorismo, ascitis con ombligo evertido) · **en batracio** (ascitis antigua) · **excavado** (desnutrición) · **en tabla** (peritonitis)'],
            ['**Piel**', '**Circulación colateral**, cicatrices, **estrías**; **Cullen** (periumbilical) y **Grey-Turner** (flancos): pancreatitis, embarazo ectópico roto'],
            ['**Ombligo**', 'Hernia; nódulo de la **hermana María José** (metástasis)'],
            ['**Latidos y peristaltismo**', 'Aorta en el epigastrio (aneurisma); ondas peristálticas visibles: **obstrucción**'],
            ['**Dinámica**', '«Inflar» y «hundir» el abdomen, levantar la cabeza: **hernias**, eventraciones, **diastasis de los rectos**'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Auscultación (membrana, más de 5 minutos)',
          head: ['Hallazgo', 'Significado'],
          filas: [
            ['**Ruidos hidroaéreos** normales', '**5 a 30 por minuto**, suaves, sin dolor'],
            ['**Aumentados** («de lucha»)', '**Íleo mecánico** (obstrucción)'],
            ['**Ausentes** («silencio abdominal»)', '**Íleo paralítico**: **peritonitis**'],
            ['**Soplos**', 'Aorta (**aneurisma**), arterias renales (**HTA renovascular**)'],
            ['Murmullo venoso umbilical', '**Hipertensión portal**'],
          ],
        },
        { t: 'paso', titulo: 'Percusión', text: 'Golpe único, sin rebote, en forma radiada desde el xifoides. **Timpanismo** = gas; **matidez** = órgano macizo, líquido o tumor. **Espacio de Traube** (hipocondrio izquierdo): normalmente timpánico; **mate** en esplenomegalia o derrame pleural izquierdo. Ascitis: matidez **cóncava** hacia arriba y **desplazable**; globo vesical, quiste o embarazo: **convexa**.' },
        {
          t: 'paso',
          titulo: 'Palpación',
          items: [
            '**Superficial**: **mano de escultor de Merlo** (relaja la pared), **tensión** abdominal comparando ambos lados, **maniobra del esfuerzo** (¿el bulto es de la pared o de la cavidad?), puntos dolorosos.',
            '**Defensa** = contractura con dolor (irritación peritoneal). **Blumberg**: dolor a la **descompresión** localizado; **Gueneau de Mussy**: generalizado (peritonitis).',
            '**Profunda**: vísceras huecas (**deslizamiento de Glénard**), hígado, bazo, riñón, **latido aórtico**, masas.',
          ],
        },
        { t: 'maniobras', ids: ['abd-inspeccion-estatica-dinamica', 'abd-auscultacion-rha', 'abd-percusion-traube', 'palpacion-superficial-tension'] },
      ],
      oral: '«Para examinar el abdomen el paciente está en decúbito dorsal y yo a su derecha. Lo divido en nueve regiones o cuatro cuadrantes. El orden cambia: inspección, auscultación, percusión y palpación al final, para no provocar ruidos. En la inspección evalúo forma —globoso, en batracio, excavado o en tabla—, piel —circulación colateral, estrías, Cullen y Grey-Turner—, ombligo, latidos y peristaltismo, y la inspección dinámica para hernias y diastasis. En la auscultación, los ruidos hidroaéreos normales son de 5 a 30 por minuto; están aumentados en el íleo mecánico y ausentes en el paralítico; busco soplos. Percuto buscando timpanismo o matidez y el espacio de Traube. Por último palpo: superficial, con la mano de Merlo, la tensión y los puntos dolorosos, buscando defensa y Blumberg; y profunda, para las vísceras y masas.»',
      repreguntas: [
        { q: '¿Por qué en el abdomen se ausculta antes de palpar?', a: 'Para oír los ruidos espontáneos: la palpación y la percusión los provocan.' },
        { q: '¿Qué significa un silencio abdominal?', a: 'Íleo paralítico: abdomen agudo inflamatorio o perforado (peritonitis).' },
        { q: '¿Qué es el espacio de Traube y cuándo se vuelve mate?', a: 'Zona timpánica del hipocondrio izquierdo (estómago); mate en esplenomegalia, derrame pleural izquierdo o lóbulo izquierdo hepático grande.' },
        { q: '¿Qué es el signo de Blumberg?', a: 'Dolor a la descompresión brusca localizado: irritación peritoneal.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 356–360 · Argente-Álvarez, cap. 41.',
    },
    {
      tema: 'pared-abdominal',
      titulo: 'Pared abdominal: puntos dolorosos y hernias',
      porque: [
        'Un **punto doloroso** es la proyección en la pared de una víscera inflamada: cuando el peritoneo visceral se irrita, la presión con un dedo en ese lugar duele. Puede ser el comienzo de una peritonitis localizada.',
        'Una **hernia** sale por un orificio **que ya existía** (inguinal, crural, umbilical); una **eventración**, por uno **que se formó** (una cicatriz).',
      ],
      bloques: [
        {
          t: 'cuadro',
          titulo: 'Puntos dolorosos más preguntados',
          head: ['Punto o signo', 'Dónde', 'Pensar en'],
          filas: [
            ['**McBurney**', 'Línea umbilicoespinal derecha, unión de los **2/3 internos con el 1/3 externo**', '**Apendicitis**'],
            ['**Rovsing** · **psoas**', 'Presionar la FII duele en la FID · flexionar el muslo derecho duele', 'Apendicitis'],
            ['**Murphy**', 'Bajo el reborde costal derecho; duele o **corta la inspiración** al palpar', '**Colecistitis**'],
            ['**Epigástrico**', 'Línea xifoumbilical', 'Gastritis, úlcera, pancreatitis'],
            ['**Zona de Chauffard**', 'Ángulo superior derecho del ombligo (bisectriz)', 'Colédoco, cabeza del páncreas'],
            ['**Hemicinturón de Katsch**', 'Del epigastrio hacia la izquierda', '**Pancreatitis**'],
            ['**Ureterales** (superior, medio)', 'A los lados del ombligo · en la línea biilíaca, por fuera de los rectos', '**Litiasis** ureteral'],
            ['**Costovertebral** (Guyon)', 'Ángulo de la 12.ª costilla con la columna', 'Riñón'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Hernias y eventraciones',
          head: ['', 'Qué es'],
          filas: [
            ['**Hernia**', 'Salida de peritoneo parietal (± vísceras) por un orificio **anatómico**: inguinal, crural, umbilical, epigástrica'],
            ['**Reductible**', 'Vuelve a la cavidad con la presión manual (coercible si se queda, incoercible si vuelve a salir)'],
            ['**Atascada** / **estrangulada**', 'No se reduce / con **compromiso vascular**: **urgencia quirúrgica** (dolor, obstrucción)'],
            ['**Eventración**', 'Salida por un orificio **patológico** (cicatriz), sin peritoneo parietal'],
          ],
        },
        { t: 'maniobras', ids: ['puntos-dolorosos-abdomen'] },
      ],
      oral: '«Los puntos dolorosos son lugares de la pared donde la presión con un dedo produce dolor porque se irrita el peritoneo de una víscera inflamada. Los principales son el de McBurney, en la unión de los dos tercios internos con el tercio externo de la línea umbilicoespinal derecha, para la apendicitis, con los signos de Rovsing y del psoas; el de Murphy, bajo el reborde costal derecho, para la colecistitis; el epigástrico; la zona de Chauffard para colédoco y páncreas; el hemicinturón de Katsch en la pancreatitis; y los ureterales y renales. Una hernia es la salida de peritoneo, con o sin vísceras, por un orificio anatómico; puede ser reductible, atascada o estrangulada, que es una urgencia. La eventración sale por un orificio patológico, como una cicatriz.»',
      repreguntas: [
        { q: '¿Dónde está el punto de McBurney?', a: 'En la línea umbilicoespinal derecha, unión de los 2/3 internos con el 1/3 externo.' },
        { q: '¿Qué diferencia una hernia de una eventración?', a: 'La hernia sale por un orificio anatómico; la eventración por uno patológico (cicatriz).' },
        { q: '¿Qué es una hernia estrangulada?', a: 'Irreductible con compromiso vascular: urgencia quirúrgica.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 360–363 · Instituto Merlín, «Dolor abdominal» · Argente-Álvarez, cap. 41.',
    },
    {
      tema: 'ef-intestino',
      titulo: 'Exploración física del intestino',
      porque: [
        'El intestino delgado **no se palpa**. Del grueso se palpan normalmente el **ciego** y el **sigmoides**, porque están fijos y cerca de la pared, en las fosas ilíacas.',
      ],
      bloques: [
        {
          t: 'cuadro',
          head: ['Segmento', 'Cómo', 'Normal'],
          filas: [
            ['**Ciego**', '**Deslizamiento de Glénard** en la FID (o monomanual); facilitan Galambos y Obrastzow', 'Elástico, móvil, indoloro, con **gorgoteo**'],
            ['**Sigmoides**', 'Monomanual o bimanual en la FII, perpendicular a su eje', 'Cilindro móvil, indoloro; **fecaloma**: empastamiento'],
            ['Colon ascendente, transverso, descendente', '—', 'Normalmente **no se palpan**'],
            ['Intestino delgado', '—', '**No se palpa**'],
          ],
        },
        { t: 'paso', titulo: 'Completan el examen', items: ['**Auscultación** de los ruidos hidroaéreos.', '**Tacto rectal**: esfínter, ampolla, próstata, masas, **dolor** (fondo de saco de Douglas en la peritonitis) y el **color de la materia fecal** (melena, sangre).'] },
        { t: 'maniobras', ids: ['visceras-huecas-glenard', 'tacto-rectal'] },
      ],
      oral: '«El intestino delgado no se palpa. Del grueso se palpan el ciego en la fosa ilíaca derecha, con la maniobra de deslizamiento de Glénard, elástico, móvil, indoloro y con gorgoteo, y el sigmoides en la fosa ilíaca izquierda, como un cilindro móvil; el resto del colon normalmente no se palpa. El examen se completa con la auscultación de los ruidos hidroaéreos y el tacto rectal, donde evalúo el esfínter, la ampolla, la próstata, el dolor en el fondo de saco y la materia fecal.»',
      repreguntas: [
        { q: '¿Qué partes del intestino se palpan normalmente?', a: 'El ciego y el sigmoides.' },
        { q: '¿Qué te aporta el tacto rectal en el abdomen agudo?', a: 'Dolor en el fondo de saco de Douglas (peritonitis pelviana) y sangre o melena.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 363–364 · Instituto Merlín, «Colon sigmoideo» · Argente-Álvarez, cap. 41.',
    },
    {
      tema: 'ef-higado',
      titulo: 'Exploración física del hígado',
      porque: [
        'El hígado está bajo las costillas derechas y **baja con la inspiración** porque lo empuja el diafragma: por eso se palpa pidiendo que el paciente **inspire hondo**, esperando su borde.',
        'Su **tamaño** se mide combinando dos datos: el **límite superior** (por percusión) y el **borde inferior** (por palpación).',
      ],
      bloques: [
        { t: 'paso', titulo: 'Percusión: hepatometría', text: 'En la **línea hemiclavicular**, de arriba abajo: el límite superior está en el **5.º espacio**. Entre el límite superior y el borde inferior hay normalmente **9 a 12 cm**. La matidez desaparece con aire libre (**signo de Jobert**: perforación).' },
        {
          t: 'cuadro',
          titulo: 'Palpación',
          head: ['Maniobra', 'Cómo'],
          filas: [
            ['**Monomanual**', 'Mano derecha desde la FID hacia el reborde, por la línea hemiclavicular; en el reborde, **inspiración profunda**'],
            ['**Mano en cuchara**', 'Dedos en gancho bajo el reborde costal; el borde se desliza en la inspiración'],
            ['**Chauffard** (peloteo)', 'Bimanual: la mano izquierda empuja desde la región lumbar'],
            ['**Gilbert**', 'Manos en ángulo recto: **hígados blandos** (graso)'],
            ['**Enganche de Mathieu**', 'Mirando hacia los pies, «engancha» el borde'],
          ],
        },
        { t: 'paso', titulo: 'Qué describo', text: 'Borde normal: **no más de 1 cm** bajo el reborde, **romo, liso, blando, indoloro**. Describo **cuánto sobrepasa** el reborde, **borde** (romo o cortante), **superficie** (lisa o nodular), **consistencia** y **dolor**. Vesícula: **Murphy**.' },
        { t: 'maniobras', ids: ['hepatometria', 'higado-monomanual-cuchara', 'higado-bimanual'] },
      ],
      oral: '«El hígado se explora con percusión y palpación. Por percusión, en la línea hemiclavicular, busco el límite superior en el quinto espacio intercostal; la distancia hasta el borde inferior palpatorio es normalmente de 9 a 12 centímetros. Lo palpo con maniobras monomanuales —simple desde la fosa ilíaca derecha o en cuchara— y bimanuales —Chauffard, Gilbert y el enganche de Mathieu—, siempre pidiendo una inspiración profunda para que el borde descienda. Normalmente no sobrepasa más de un centímetro el reborde y es romo, liso, blando e indoloro. Describo cuánto sobrepasa el reborde, el borde, la superficie, la consistencia y el dolor.»',
      repreguntas: [
        { q: '¿Cuál es la hepatometría normal?', a: '9 a 12 cm en la línea hemiclavicular.' },
        { q: '¿Por qué pedís una inspiración profunda?', a: 'Porque el diafragma empuja el hígado hacia abajo y el borde llega a los dedos.' },
        { q: '¿Qué es el signo de Jobert?', a: 'Desaparición de la matidez hepática por aire libre: perforación de una víscera hueca.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 365–366 · Instituto Merlín, «Práctico: hígado y vesícula biliar» · Argente-Álvarez, cap. 41.',
    },
    {
      tema: 'ef-bazo',
      titulo: 'Exploración física del bazo',
      porque: [
        'El bazo normal **no se palpa**: está profundo, bajo las últimas costillas izquierdas. Cuando crece, lo hace **hacia abajo y hacia adelante**, hacia la fosa ilíaca **derecha**: por eso la palpación **empieza abajo** y sube hacia él.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Percusión', items: ['**Espacio de Traube** mate.', '**Punto de Castell**: último espacio intercostal en la línea axilar anterior; normalmente sonoro, **mate = esplenomegalia**.', 'En Schuster, matidez normal entre la **9.ª y 11.ª costilla**, línea axilar media.'] },
        {
          t: 'cuadro',
          titulo: 'Palpación',
          head: ['Posición', 'Maniobra'],
          filas: [
            ['**Decúbito dorsal**', '**Bimanual a la derecha** del paciente: mano izquierda levanta la parrilla costal; la derecha avanza desde la **FID** hacia el hipocondrio izquierdo, esperando el borde en la inspiración'],
            ['', '**Mano en cuchara** a la izquierda (variante de **Middleton**)'],
            ['**Schuster** (decúbito lateral derecho a 45°)', '**Naegeli**: mano en cuchara bajo el reborde · **Merlo**: sentado detrás del paciente, con Galambos'],
          ],
        },
        { t: 'ojo', text: 'Se palpa normalmente solo en la **ptosis**, el **posparto** o la **esplenomegalia**. Si se palpa, describo cuánto sobrepasa el reborde, la **escotadura**, consistencia y dolor.' },
        { t: 'maniobras', ids: ['bazo-decubito-dorsal', 'bazo-schuster'] },
      ],
      oral: '«El bazo está profundo en el hipocondrio izquierdo y normalmente no se palpa. Lo exploro primero por percusión: el espacio de Traube mate y la matidez en el punto de Castell, el último espacio intercostal en la línea axilar anterior, indican esplenomegalia. Lo palpo en decúbito dorsal con la maniobra bimanual a la derecha del paciente, empezando desde la fosa ilíaca derecha porque crece hacia abajo y adelante, y con la mano en cuchara; y en posición de Schuster, decúbito lateral derecho a 45 grados, con las maniobras de Naegeli y de Merlo. Se palpa solo en la esplenomegalia, la ptosis o el posparto.»',
      repreguntas: [
        { q: '¿Por qué la palpación del bazo empieza en la fosa ilíaca derecha?', a: 'Porque crece hacia abajo y adelante, hacia la FID: si empiezo cerca, me paso del borde.' },
        { q: '¿Qué es la posición de Schuster?', a: 'Decúbito lateral derecho a 45°, pierna izquierda flexionada: facilita el descenso del bazo.' },
        { q: '¿Qué es el punto de Castell?', a: 'Último espacio intercostal en la línea axilar anterior: mate en la esplenomegalia.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 366–367 · Instituto Merlín, «Bazo» · Argente-Álvarez, cap. 41.',
    },
  ],
  noOlvidar: [
    { q: 'Orden en el abdomen', a: 'Inspección, auscultación, percusión, palpación.' },
    { q: 'Ruidos hidroaéreos', a: '5–30/min. De lucha: íleo mecánico. Silencio: íleo paralítico.' },
    { q: 'Signos de inspección', a: 'Cullen y Grey-Turner (pancreatitis), hermana María José, abdomen en tabla.' },
    { q: 'Irritación peritoneal', a: 'Defensa, Blumberg (localizado), Gueneau de Mussy (generalizado).' },
    { q: 'McBurney · Murphy', a: 'Apendicitis · colecistitis.' },
    { q: 'Hernia vs eventración', a: 'Orificio anatómico vs patológico (cicatriz). Estrangulada = urgencia.' },
    { q: 'Intestino', a: 'Se palpan ciego y sigmoides (Glénard).' },
    { q: 'Hígado', a: 'Hepatometría 9–12 cm; borde ≤ 1 cm bajo el reborde; palpar con inspiración profunda.' },
    { q: 'Bazo', a: 'No se palpa. Castell y Traube; desde la FID; Schuster (Naegeli, Merlo).' },
  ],
};
