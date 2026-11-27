import type { ApunteUnidad } from './tipos';

/*
 * Examen neurológico — apunte para el oral.
 * Base: apunte de Ortega («Examen físico del sistema nervioso» pp. 461, 481–488) y clases de Ortega
 * (Síndromes del SN 1–4, MC neurología 1–2), con Merlín («Semiología del sistema nervioso») y Argente cap. 23
 * (niveles radiculares de los reflejos).
 */
export const apunte: ApunteUnidad = {
  unidad: 'neuro-examen',
  intro: {
    titulo: 'El mapa del examen neurológico',
    bloques: [
      {
        t: 'paso',
        titulo: 'Orden (Ortega)',
        ordenada: true,
        items: [
          '**Inspección**: facies, actitud y **marcha**.',
          '**Conciencia** y estado mental (orientación, **Glasgow**).',
          '**Pares craneales**.',
          '**Motilidad pasiva** (tono y trofismo) y **activa** (fuerza y reflejos).',
          '**Sensibilidad**, **gnosias**, **praxias**, lenguaje y **taxia**.',
        ],
      },
      {
        t: 'cuadro',
        titulo: 'Qué explora cada parte y qué la altera',
        head: ['Función', 'Vía o estructura', 'Si falla'],
        filas: [
          ['**Fuerza**', 'Vía piramidal (1.ª) y motoneurona del asta anterior (2.ª)', 'Paresia / plejía'],
          ['**Tono**', '1.ª y 2.ª motoneurona, extrapiramidal, cerebelo', 'Espasticidad (navaja) · rigidez (rueda dentada) · hipotonía'],
          ['**Reflejos**', 'Arco reflejo + control piramidal', 'Hiperreflexia y Babinski (1.ª) · arreflexia (2.ª)'],
          ['**Sensibilidad**', 'Superficial: espinotalámica · profunda: **cordones posteriores**', 'Hipoestesia, anestesia; ataxia sensitiva'],
          ['**Taxia**', 'Cerebelo, cordones posteriores, vestíbulo, vista', 'Ataxia'],
          ['**Gnosias y praxias**', '**Corteza** de asociación', 'Agnosias, apraxias'],
        ],
      },
      { t: 'ojo', text: 'Ortega: el examen físico del sistema nervioso «es lo que más preguntan». La taxia es **coordinación**; las gnosias, **reconocer**; las praxias, **hacer gestos aprendidos**; la sensibilidad, **percibir**. No las confundas.' },
    ],
  },
  temas: [
    {
      tema: 'conciencia-glasgow',
      titulo: 'Orientación y escala de Glasgow',
      bloques: [
        { t: 'paso', titulo: 'Orientación', text: 'En **tiempo** (fecha, día), **espacio** (dónde está) y **persona** (quién es, quiénes lo rodean). Se pierde primero la temporal.' },
        { t: 'paso', titulo: 'Niveles de conciencia', text: '**Vigil** → **obnubilación** (somnoliento, responde lento) → **estupor** (despierta solo con estímulos intensos) → **coma** (no despierta).' },
        {
          t: 'cuadro',
          titulo: 'Glasgow (3 a 15)',
          head: ['Apertura ocular (4)', 'Respuesta verbal (5)', 'Respuesta motora (6)'],
          filas: [
            ['4 espontánea', '5 orientado', '6 obedece órdenes'],
            ['3 al estímulo verbal', '4 confuso', '5 localiza el dolor'],
            ['2 al dolor', '3 palabras inapropiadas', '4 retira al dolor'],
            ['1 no abre', '2 sonidos incomprensibles', '3 flexión anormal (**decorticación**)'],
            ['', '1 no responde', '2 extensión (**descerebración**)'],
            ['', '', '1 no responde'],
          ],
        },
        { t: 'clave', titulo: 'Interpretación', items: ['15 normal · **≤ 8 = coma** (proteger la vía aérea) · mínimo 3.'] },
      ],
      oral: '«Evalúo la orientación en tiempo, espacio y persona, y el nivel de conciencia: vigil, obnubilación, estupor y coma. Lo cuantifico con la escala de Glasgow, que suma apertura ocular, de 1 a 4; respuesta verbal, de 1 a 5; y respuesta motora, de 1 a 6. El total va de 3 a 15; 15 es normal y 8 o menos define el coma. En la respuesta motora, la flexión anormal corresponde a la decorticación y la extensión a la descerebración.»',
      repreguntas: [
        { q: '¿Cuánto vale cada componente del Glasgow?', a: 'Ocular 4, verbal 5, motor 6: total 3 a 15.' },
        { q: '¿Qué Glasgow define el coma?', a: '8 o menos.' },
      ],
      fuentes: 'Instituto Merlín, «Semiología del sistema nervioso» (Glasgow) · Apunte de Ortega, p. 461.',
    },
    {
      tema: 'fuerza',
      titulo: 'Fuerza muscular',
      bloques: [
        { t: 'paso', titulo: 'Exploración', items: ['**Segmentaria** contra resistencia, comparando ambos lados.', '**Maniobras deficitarias** para la paresia leve: **Mingazzini** (miembros superiores extendidos con los ojos cerrados; inferiores con muslos y piernas a 90°) y **Barré**: el lado parético **cae**.'] },
        { t: 'cuadro', titulo: 'Escala 0–5', head: ['Grado', 'Qué hace'], filas: [['**5**', 'Normal'], ['**4**', 'Vence algo de resistencia'], ['**3**', 'Vence la gravedad, no la resistencia'], ['**2**', 'Mueve sin gravedad'], ['**1**', 'Contracción sin movimiento'], ['**0**', 'Nada']] },
        { t: 'cuadro', titulo: 'Términos', head: ['', 'Qué es'], filas: [['**Paresia** / **plejía**', 'Disminución / ausencia de fuerza'], ['**Hemi-**', 'Un hemicuerpo (lesión cerebral)'], ['**Para-**', 'Ambos miembros inferiores (médula dorsal)'], ['**Cuadri-**', 'Los cuatro (médula cervical)'], ['**Mono-**', 'Un miembro']] },
        { t: 'maniobras', ids: ['fuerza-mingazzini'] },
      ],
      oral: '«Exploro la fuerza en forma segmentaria contra resistencia, comparando ambos lados, y la gradúo de 0 a 5: 5 es normal, 3 vence la gravedad pero no la resistencia, 1 es contracción sin movimiento y 0 es nada. Para la paresia leve uso las maniobras deficitarias de Mingazzini y Barré, donde el miembro parético cae. La disminución de la fuerza es paresia y su ausencia, plejía, y según la distribución hablo de hemi, para, cuadri o monoparesia.»',
      repreguntas: [
        { q: '¿Qué es un grado 3 de fuerza?', a: 'Vence la gravedad pero no la resistencia.' },
        { q: '¿Para qué sirve el Mingazzini?', a: 'Para detectar paresias leves: el miembro parético cae.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 461 y 489–490 · Instituto Merlín, «Semiología del sistema nervioso».',
    },
    {
      tema: 'tono',
      titulo: 'Tono y trofismo',
      bloques: [
        { t: 'paso', titulo: 'Exploración', text: '**Trofismo**: inspección y palpación comparativa de las masas musculares. **Tono**: movilizar pasivamente codos, muñecas y rodillas, y balancear los miembros.' },
        {
          t: 'cuadro',
          head: ['Alteración', 'Cómo se siente', 'Dónde está la lesión'],
          filas: [
            ['**Espasticidad**', 'Resistencia que cede de golpe: **navaja**; predomina en flexores del brazo y extensores de la pierna', '**Piramidal** (1.ª motoneurona)'],
            ['**Rigidez**', 'Resistencia pareja en todo el movimiento, en **rueda dentada**', '**Extrapiramidal** (Parkinson)'],
            ['**Hipotonía**', 'Miembro blando, balanceo amplio', '**2.ª motoneurona**, **cerebelo**, piramidal agudo'],
            ['**Atrofia**', 'Masa muscular disminuida', '**2.ª motoneurona** (en la 1.ª, solo por desuso)'],
          ],
        },
        { t: 'maniobras', ids: ['trofismo-tono'] },
      ],
      oral: '«El tono es la resistencia del músculo a la movilización pasiva. Lo exploro moviendo pasivamente las articulaciones y balanceando los miembros, y el trofismo por inspección y palpación comparativa. La espasticidad, del síndrome piramidal, es una resistencia que cede de golpe, en navaja; la rigidez, extrapiramidal, es pareja en todo el recorrido, en rueda dentada; y la hipotonía aparece en la segunda motoneurona y el cerebelo. La atrofia es propia de la segunda motoneurona.»',
      repreguntas: [{ q: '¿Qué diferencia la espasticidad de la rigidez?', a: 'Espasticidad: cede de golpe (navaja), piramidal. Rigidez: pareja (rueda dentada), extrapiramidal.' }],
      fuentes: 'Apunte de Ortega, pp. 489 y 494 · Instituto Merlín, «Semiología del sistema nervioso».',
    },
    {
      tema: 'reflejos-profundos',
      titulo: 'Reflejos profundos (osteotendinosos)',
      porque: [
        'El reflejo es un **arco**: el estiramiento del tendón llega por la vía sensitiva a la médula y vuelve por la **2.ª motoneurona**. La **vía piramidal** lo **frena** desde arriba.',
        'Por eso: si se corta el arco (2.ª motoneurona, nervio) → **arreflexia**. Si se pierde el freno (1.ª motoneurona) → **hiperreflexia** y clonus.',
      ],
      bloques: [
        { t: 'cuadro', titulo: 'Reflejos y niveles (Argente)', head: ['Reflejo', 'Nivel'], filas: [['**Bicipital**', '**C5**'], ['**Estilorradial**', '**C6**'], ['**Tricipital**', '**C7**'], ['**Rotuliano** (patelar)', '**L4**'], ['**Aquiliano**', '**S1**']] },
        { t: 'paso', titulo: 'Técnica', text: 'Golpe seco sobre el tendón, comparando ambos lados; si no aparece, reforzar con **Jendrassik**. **Clonus**: estiramiento brusco y sostenido de la rótula o el pie → oscilaciones **sostenidas** (1.ª motoneurona).' },
        { t: 'maniobras', ids: ['reflejos-osteotendinosos', 'clonus'] },
      ],
      oral: '«Los reflejos osteotendinosos son arcos reflejos que se exploran percutiendo el tendón y comparando ambos lados: bicipital, C5; estilorradial, C6; tricipital, C7; rotuliano, L4; y aquiliano, S1. Si no aparecen, los refuerzo con la maniobra de Jendrassik. La vía piramidal los inhibe: su lesión da hiperreflexia con clonus, mientras que la lesión del arco, la segunda motoneurona o el nervio, da arreflexia.»',
      repreguntas: [
        { q: '¿Qué nivel explora el aquiliano?', a: 'S1.' },
        { q: '¿Qué es el clonus y qué indica?', a: 'Oscilaciones sostenidas al estirar bruscamente un músculo: lesión de la 1.ª motoneurona.' },
      ],
      fuentes: 'Argente-Álvarez, cap. 23 (fig. 23-3) · Apunte de Ortega, p. 491.',
    },
    {
      tema: 'reflejos-superficiales',
      titulo: 'Reflejos superficiales y Babinski',
      bloques: [
        { t: 'cuadro', head: ['Reflejo', 'Cómo', 'Normal', 'Patológico'], filas: [['**Cutaneoabdominales**', 'Estimular la piel del abdomen de afuera hacia adentro, 3 niveles', 'Contracción', '**Abolidos** en el piramidal'], ['**Cremasteriano**', 'Cara interna del muslo', 'Ascenso del testículo', 'Abolido en el piramidal'], ['**Cutaneoplantar**', 'Borde externo de la planta, del talón a los dedos', '**Flexión** de los dedos', '**Babinski**: **extensión del dedo gordo** (± abanico)']] },
        { t: 'paso', titulo: 'Sucedáneos de Babinski', text: '**Oppenheim** (deslizar sobre la tibia), **Gordon** (apretar la pantorrilla), **Schaeffer** (apretar el tendón de Aquiles).' },
        { t: 'ojo', text: 'Babinski + abolición de los cutaneoabdominales = **síndrome piramidal**.' },
        { t: 'maniobras', ids: ['reflejo-plantar-babinski'] },
      ],
      oral: '«Los reflejos superficiales o cutáneos son los cutaneoabdominales, el cremasteriano y el cutaneoplantar. El plantar se explora estimulando el borde externo de la planta del talón hacia los dedos: lo normal es la flexión de los dedos, y la extensión del dedo gordo, con o sin abanico, es el signo de Babinski, que indica lesión piramidal. Tiene sucedáneos: Oppenheim, Gordon y Schaeffer. En el síndrome piramidal además se abolen los cutaneoabdominales y el cremasteriano.»',
      repreguntas: [{ q: '¿Qué es el signo de Babinski?', a: 'Extensión del dedo gordo al estimular la planta: lesión piramidal.' }],
      fuentes: 'Apunte de Ortega, pp. 489–491.',
    },
    {
      tema: 'sens-superficial',
      titulo: 'Sensibilidad superficial',
      bloques: [
        { t: 'paso', titulo: 'Exploración', text: 'Ojos cerrados, comparando lados y por dermatomas: **táctil** (algodón), **dolorosa** (toca-pincha), **térmica** (tubos a 5 °C y 45 °C). Vía: **espinotalámica** (anterolateral).' },
        { t: 'cuadro', head: ['Término', 'Qué es'], filas: [['**Anestesia** / **hipoestesia**', 'Ausencia / disminución de la percepción'], ['**Analgesia** / hipoalgesia', 'Sin dolor / menos dolor'], ['**Parestesia**', 'Sensación anómala **sin** estímulo'], ['**Disestesia**', 'Sensación anómala **con** estímulo'], ['**Alodinia**', 'Dolor ante un estímulo no doloroso']] },
        { t: 'paso', titulo: 'Topografía', text: '**Guante y bota**: polineuropatía · **nivel sensitivo**: lesión medular · **hemicuerpo**: tálamo o cápsula · **disociada** (pierde dolor y temperatura, conserva tacto): centromedular.' },
        { t: 'maniobras', ids: ['sensibilidad-superficial'] },
      ],
      oral: '«La sensibilidad superficial comprende la táctil, la dolorosa y la térmica, que viajan por la vía espinotalámica. La exploro con los ojos del paciente cerrados, comparando ambos lados, con algodón, con el toca-pincha y con tubos de agua fría y caliente. Las alteraciones son anestesia, hipoestesia, hiperestesia, analgesia, parestesias, disestesias y alodinia. Su distribución localiza la lesión: en guante y bota, polineuropatía; con nivel sensitivo, médula; en un hemicuerpo, tálamo; y disociada, centromedular.»',
      repreguntas: [{ q: '¿Qué es una anestesia disociada?', a: 'Pérdida del dolor y la temperatura con tacto conservado: lesión centromedular.' }],
      fuentes: 'Apunte de Ortega, pp. 481–483.',
    },
    {
      tema: 'sens-profunda',
      titulo: 'Sensibilidad profunda y combinada',
      bloques: [
        { t: 'paso', titulo: 'Profunda (cordones posteriores de Goll y Burdach)', items: ['**Palestesia**: diapasón sobre salientes óseas.', '**Batiestesia**: posición del dedo gordo; **Romberg**.', '**Barestesia** (presión) y **barognosia** (peso).'] },
        { t: 'paso', titulo: 'Combinadas (corteza parietal)', items: ['**Estereognosia**: reconocer un objeto con la mano.', '**Grafestesia**: reconocer un número dibujado en la piel.', '**Discriminación de dos puntos** y **topognosia** (localizar el estímulo).'] },
        { t: 'clave', titulo: 'Síndrome cordonal posterior', items: ['Pierde palestesia y batiestesia; **ataxia** que empeora con los ojos cerrados; **Romberg positivo**; marcha taloneante mirando el piso; **sin vértigo**.', 'Ortega contó que una docente pregunta «hablame sobre el síndrome cordonal posterior».'] },
        { t: 'maniobras', ids: ['sensibilidad-profunda'] },
      ],
      oral: '«La sensibilidad profunda viaja por los cordones posteriores de Goll y Burdach e incluye la palestesia, que exploro con el diapasón sobre salientes óseas; la batiestesia, el sentido de posición, con el dedo gordo y el Romberg; y la barestesia. Las combinadas dependen de la corteza parietal: estereognosia, grafestesia, discriminación de dos puntos y topognosia. La lesión de los cordones posteriores da el síndrome cordonal posterior: ataxia con Romberg positivo, marcha taloneante y pérdida de la palestesia y la batiestesia, sin vértigo.»',
      repreguntas: [{ q: '¿Cómo es el Romberg en el síndrome cordonal posterior?', a: 'Positivo: cae al cerrar los ojos porque pierde la información de posición.' }],
      fuentes: 'Apunte de Ortega, pp. 481–483 · Clase de Ortega, Síndromes del SN 1 (03:28).',
    },
    {
      tema: 'taxia',
      titulo: 'Taxia (coordinación)',
      porque: [
        'Para estar de pie y moverse coordinado se necesitan cuatro informaciones: la **vista**, el **vestíbulo**, la **sensibilidad profunda** y el **cerebelo**, integradas por la corteza.',
        'El **Romberg** saca la vista. Si el problema es **sensitivo** o **vestibular**, la vista compensaba: al cerrar los ojos **cae** (positivo). Si es **cerebeloso**, ya era inestable con los ojos abiertos: Romberg **negativo**.',
      ],
      bloques: [
        { t: 'def', text: 'Coordinación de agonistas, antagonistas y sinergistas para un movimiento eficaz. **Ataxia**: incoordinación **sin** déficit de fuerza.' },
        { t: 'paso', titulo: 'Exploración', items: ['**Estática**: **Romberg** (y sensibilizado, un pie delante del otro).', '**Dinámica**: **índice-nariz**, talón-rodilla, **diadococinesia** (movimientos alternantes rápidos), marcha.'] },
        {
          t: 'cuadro',
          head: ['Ataxia', 'Romberg', 'Claves'],
          filas: [
            ['**Cordonal posterior** (sensitiva)', '**Positivo** (cae en cualquier dirección)', 'Sin vértigo; pérdida de profunda'],
            ['**Vestibular**', '**Positivo** (cae **hacia un lado**)', 'Vértigo, nistagmo horizontal, marcha en estrella'],
            ['**Cerebelosa**', '**Negativo**', 'Dismetría, adiadococinesia, temblor intencional, marcha de ebrio'],
          ],
        },
        { t: 'ojo', text: 'Ortega: «La prueba de Romberg es positiva en vestibular y cordonal posterior, y es negativa en el cerebeloso. Eso no se olviden, porque es pregunta».' },
        { t: 'maniobras', ids: ['romberg', 'indice-nariz', 'talon-rodilla'] },
      ],
      oral: '«La taxia es la coordinación de los músculos agonistas, antagonistas y sinergistas para lograr un movimiento eficaz; la ataxia es la incoordinación sin déficit de fuerza. Intervienen la vista, el vestíbulo, la sensibilidad profunda y el cerebelo. Exploro la taxia estática con el Romberg y la dinámica con índice-nariz, talón-rodilla, diadococinesia y la marcha. El Romberg es positivo en la ataxia cordonal posterior y en la vestibular, en la que cae hacia un lado, y negativo en la cerebelosa, que ya es inestable con los ojos abiertos y presenta dismetría, adiadococinesia y temblor intencional.»',
      repreguntas: [
        { q: '¿En qué ataxias el Romberg es positivo?', a: 'En la cordonal posterior y la vestibular; negativo en la cerebelosa.' },
        { q: '¿Qué elementos mantienen el equilibrio?', a: 'Vista, vestíbulo, sensibilidad profunda y cerebelo, integrados por la corteza.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 487–488 · Clase de Ortega, MC neurología 2 (29:56).',
    },
    {
      tema: 'gnosias-praxias',
      titulo: 'Gnosias y praxias',
      bloques: [
        { t: 'cuadro', head: ['', 'Gnosia', 'Praxia'], filas: [['Qué es', '**Reconocer** algo por los sentidos', '**Hacer** un gesto aprendido con un fin'], ['Alteración', '**Agnosia**: no reconoce, con el sentido intacto', '**Apraxia**: no puede hacerlo, con fuerza, sensibilidad y comprensión normales'], ['Dónde', 'Corteza de **asociación**', 'Corteza frontoparietal (hemisferio dominante)']] },
        { t: 'cuadro', titulo: 'Agnosias', head: ['Tipo', 'Qué falla'], filas: [['**Astereognosia** (táctil)', 'Reconocer un objeto con la mano · parietal contralateral'], ['**Visual** / **prosopagnosia**', 'Objetos / rostros · occipital'], ['**Auditiva**', 'Sonidos, música (amusia), palabras'], ['**Anosognosia**', 'No reconoce su enfermedad (niega la hemiplejía) · parietal derecho']] },
        { t: 'cuadro', titulo: 'Apraxias', head: ['Tipo', 'Qué falla'], filas: [['**Ideomotora** (la más común)', '**Tiene la idea** pero no la ejecuta a la orden ni por imitación (sí espontáneo)'], ['**Ideatoria**', 'Pierde la **secuencia** (encender un cigarrillo)'], ['**Del vestir**', 'No se viste en orden'], ['**Constructiva**', 'No copia dibujos'], ['**De la marcha**', 'No inicia la marcha (hidrocefalia normotensiva)']] },
        { t: 'ojo', text: 'Se explora **solo si** no hay déficit motor, sensitivo, cerebeloso ni de comprensión: si no, no es apraxia ni agnosia.' },
      ],
      oral: '«La gnosia es el reconocimiento de algo a través de los sentidos y depende de las áreas de asociación de la corteza; su pérdida, con el sentido intacto, es la agnosia: táctil o astereognosia, visual, prosopagnosia para los rostros, auditiva y anosognosia. La praxia es la realización de un gesto aprendido con un fin; su pérdida, con fuerza, sensibilidad y comprensión normales, es la apraxia: ideomotora, la más común, en la que el paciente tiene la idea pero no la ejecuta a la orden; ideatoria, en la que pierde la secuencia; y del vestir, constructiva y de la marcha. Se diferencian de la taxia, que es coordinación, y de la sensibilidad, que es percepción.»',
      repreguntas: [
        { q: '¿Qué es la astereognosia?', a: 'No reconocer un objeto por el tacto con la sensibilidad conservada: lesión parietal contralateral.' },
        { q: '¿Qué diferencia la apraxia ideomotora de la ideatoria?', a: 'Ideomotora: tiene la idea pero no la ejecuta a la orden. Ideatoria: pierde la secuencia del acto.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 484–486.',
    },
    {
      tema: 'postura-marcha',
      titulo: 'Postura y marcha',
      bloques: [
        {
          t: 'cuadro',
          head: ['Marcha', 'Cómo es', 'Pensar en'],
          filas: [
            ['**Hemipléjica** (en guadaña, del segador)', 'La pierna rígida hace un **semicírculo**; brazo flexionado', '**Piramidal** (ACV)'],
            ['**Parkinsoniana**', '**Pequeños pasos**, en bloque, sin balanceo de brazos, festinante', '**Parkinson**'],
            ['**Cerebelosa** (de ebrio)', 'Base amplia, zigzagueante', '**Cerebelo**'],
            ['**Tabética** (taloneante)', 'Golpea con el talón, **mira el piso**; empeora con los ojos cerrados', '**Cordonal posterior**'],
            ['**En estrella** (Babinski)', 'Al caminar adelante y atrás con los ojos cerrados se desvía', '**Vestibular**'],
            ['**En steppage**', 'Levanta mucho la rodilla, **pie caído**', 'Neuropatía periférica (ciático poplíteo externo)'],
            ['**De pato** (miopática)', 'Balanceo de la pelvis', '**Miopatías**'],
            ['**En tijera**', 'Piernas que se cruzan', 'Paraparesia espástica'],
          ],
        },
        { t: 'paso', titulo: 'Actitudes', text: '**Gatillo de fusil** (meníngea), **opistótonos**, **parkinsoniana** (flexión), **hemipléjica** (brazo flexionado, pierna extendida).' },
      ],
      oral: '«La marcha se observa pidiendo al paciente que camine, vuelva y lo haga con los ojos cerrados. Las principales son: la hemipléjica, en guadaña, en la que la pierna describe un semicírculo, del síndrome piramidal; la parkinsoniana, a pequeños pasos, en bloque y sin balanceo de los brazos; la cerebelosa o de ebrio, con base amplia; la tabética o taloneante, del síndrome cordonal posterior, que empeora con los ojos cerrados; la marcha en estrella vestibular; la steppage por pie caído en las neuropatías; la de pato de las miopatías; y la marcha en tijera de la paraparesia espástica.»',
      repreguntas: [{ q: '¿Qué marcha tiene un paciente con un ACV con hemiplejía espástica?', a: 'Hemipléjica, en guadaña o del segador.' }],
      fuentes: 'Apunte de Ortega, pp. 461 y 491 · Instituto Merlín, «Semiología del sistema nervioso».',
    },
  ],
  noOlvidar: [
    { q: 'Orden', a: 'Inspección y marcha, conciencia, pares, motilidad (tono, trofismo, fuerza, reflejos), sensibilidad, gnosias, praxias, taxia.' },
    { q: 'Glasgow', a: 'Ocular 4, verbal 5, motor 6; ≤ 8 coma.' },
    { q: 'Fuerza', a: '0–5; Mingazzini y Barré para paresias leves.' },
    { q: 'Tono', a: 'Navaja: piramidal · rueda dentada: extrapiramidal · hipotonía: 2.ª motoneurona, cerebelo.' },
    { q: 'Reflejos', a: 'Bicipital C5, estilorradial C6, tricipital C7, rotuliano L4, aquiliano S1.' },
    { q: 'Babinski', a: 'Extensión del dedo gordo: piramidal.' },
    { q: 'Sensibilidad', a: 'Superficial: espinotalámica. Profunda: cordones posteriores. Combinadas: parietal.' },
    { q: 'Romberg', a: 'Positivo: vestibular y cordonal posterior. Negativo: cerebeloso.' },
    { q: 'Gnosia vs praxia', a: 'Reconocer vs hacer un gesto aprendido.' },
  ],
};
