import type { ApunteUnidad } from './tipos';

/*
 * Síndrome meníngeo, HTE, LCR y cefaleas — apunte para el oral.
 * Base: apunte de Ortega («Síndrome de hipertensión endocraneana» pp. 498–501, «Síndrome meníngeo» pp. 502–503)
 * y clases de Ortega (Síndromes del SN 5–7, repaso del 26/10, MC neurología 1–2), con Merlín
 * («Semiología del sistema nervioso»: signos de alarma de las cefaleas).
 */
export const apunte: ApunteUnidad = {
  unidad: 'meninges',
  temas: [
    {
      tema: 'sx-meningeo',
      titulo: 'Síndrome meníngeo',
      porque: [
        'Las meninges inflamadas **duelen al estirarse**. Flexionar la nuca o la pierna estira las raíces y las meninges: el paciente se **defiende contrayendo** los músculos (rigidez de nuca) o **flexionando las rodillas** para aflojarlas (Kernig, Brudzinski).',
      ],
      bloques: [
        { t: 'def', text: 'Conjunto de síntomas y signos por **irritación de las meninges** (infección, hemorragia subaracnoidea, tumores).' },
        { t: 'paso', titulo: 'Clínica', items: ['**Cefalea** intensa, holocraneana, con **fotofobia**; **vómitos**; **fiebre** si es infecciosa.', '**Contracturas**: **rigidez de nuca** (Lewinsohn: abre la boca para tocar el pecho con el mentón), rigidez del raquis (**trípode**), **gatillo de fusil**, vientre en batea.', 'Tríada de la meningitis en el adulto: **fiebre, rigidez de nuca y cefalea** (o alteración del sensorio); en el niño, convulsiones; en el anciano, caída de la conciencia.'] },
        {
          t: 'cuadro',
          titulo: 'Signos de irritación meníngea',
          head: ['Signo', 'Cómo', 'Positivo'],
          filas: [
            ['**Kernig**', 'Sentar al paciente con las rodillas sostenidas, o elevar la pierna extendida', '**Flexiona las rodillas**'],
            ['**Brudzinski**', 'Flexionar la **nuca** contra el pecho', '**Flexión de las rodillas**'],
            ['Brudzinski contralateral', 'Flexionar un miembro inferior', 'Se flexiona el otro'],
          ],
        },
        { t: 'cuadro', titulo: 'Meningitis, meningismo y reacción meníngea', head: ['', 'Clínica', 'LCR'], filas: [['**Meningitis**', 'Sí', '**Alterado**'], ['**Meningismo**', 'Sí', '**Normal**'], ['**Reacción meníngea**', 'No', '**Alterado**']] },
        { t: 'ojo', text: 'Ortega: «Siempre pregunto: ¿cuál es la diferencia entre meningitis, meningismo y reacción meníngea?», y las maniobras de **Kernig y Brudzinski** «como el Padre Nuestro».' },
        { t: 'maniobras', ids: ['rigidez-nuca', 'kernig-brudzinski'] },
      ],
      oral: '«El síndrome meníngeo es el conjunto de signos y síntomas por irritación de las meninges, por infección, hemorragia subaracnoidea o tumores. Se manifiesta con cefalea intensa con fotofobia, vómitos y, si es infeccioso, fiebre; la tríada de la meningitis en el adulto es fiebre, rigidez de nuca y cefalea. Al examen hay contracturas —rigidez de nuca, trípode, actitud en gatillo de fusil— y signos de irritación meníngea: Kernig, el paciente flexiona las rodillas al sentarlo, y Brudzinski, flexiona las rodillas al flexionarle la nuca. La meningitis tiene clínica y LCR alterado; el meningismo, clínica con LCR normal; y la reacción meníngea, LCR alterado sin clínica.»',
      repreguntas: [
        { q: '¿Qué diferencia meningismo de meningitis?', a: 'El meningismo tiene la clínica pero el LCR es normal.' },
        { q: '¿Cómo se explora el Brudzinski?', a: 'Flexionando la nuca: es positivo si flexiona las rodillas.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 502–503 · Clases de Ortega, repaso del 26/10 (32:15) y Síndromes del SN 6 (33:28).',
    },
    {
      tema: 'hte',
      titulo: 'Hipertensión endocraneana',
      porque: [
        'El cráneo es una **caja rígida** con tres contenidos: **cerebro (80 %), sangre (10 %) y LCR (10 %)** (Monro-Kellie). Si uno crece (tumor, hemorragia, edema), los otros deben achicarse; cuando ya no pueden, **sube la presión**.',
        'La presión se transmite a la **vaina del nervio óptico** (edema de papila) y estira el **VI par**, que tiene un recorrido largo (diplopía). Si sigue subiendo, el cerebro **se hernia**.',
      ],
      bloques: [
        { t: 'def', text: 'Aumento de la presión intracraneal **> 15 mmHg** (20 cm H2O; normal 5–15). Causas: **tumores**, hemorragias, abscesos, edema, **hidrocefalia**.' },
        {
          t: 'cuadro',
          titulo: 'Tríada',
          head: ['Signo', 'Características'],
          filas: [
            ['**Cefalea**', 'La más frecuente; holocraneana, continua, **matinal** o nocturna, **empeora con la tos, el esfuerzo y los cambios de posición**; no calma con AINE'],
            ['**Vómito en chorro**', 'Brusco, **sin náuseas** previas, proyectado'],
            ['**Edema de papila**', 'El hallazgo **más importante**; **bilateral**; fases **hiperémica**, **edematosa** y **atrófica**'],
          ],
        },
        { t: 'paso', titulo: 'Otros signos', items: ['**VI par**: el par más lesionado → diplopía, ojo hacia adentro.', '**Efecto Cushing**: **HTA + bradicardia + alteraciones respiratorias** (HTE grave; no es el síndrome de Cushing).', 'Deterioro de la conciencia.'] },
        { t: 'paso', titulo: 'Hernias', text: '**Subfalcina** · **uncal** o transtentorial (la más frecuente: **midriasis** homolateral por compresión del III) · **amigdalina** (bulbo en el agujero occipital: **paro cardiorrespiratorio**).' },
        { t: 'ojo', text: 'Ortega: «La pregunta de examen que siempre suelo preguntar es ¿cuál es la **tríada de hipertensión endocraneana**?». Y «¿cuál es el par más lesionado? **El sexto**», y **qué es el efecto Cushing**.' },
      ],
      oral: '«La hipertensión endocraneana es el aumento de la presión intracraneal por encima de 15 milímetros de mercurio. Según la doctrina de Monro-Kellie, el cráneo contiene cerebro, sangre y LCR; si uno aumenta y los otros no compensan, sube la presión. Sus causas son tumores, hemorragias, abscesos, edema e hidrocefalia. Su tríada es cefalea, holocraneana, matinal, que empeora con la tos y el esfuerzo; vómito en chorro sin náuseas; y edema de papila bilateral, el hallazgo más importante, con fases hiperémica, edematosa y atrófica. El par más afectado es el sexto. En la HTE grave aparece el efecto Cushing: hipertensión arterial, bradicardia y alteraciones respiratorias. Su complicación son las hernias: subfalcina, uncal, con midriasis, y amigdalina, que lleva al paro cardiorrespiratorio.»',
      repreguntas: [
        { q: '¿Cuál es la tríada de la HTE?', a: 'Cefalea, vómito en chorro y edema de papila.' },
        { q: '¿Qué es el efecto Cushing?', a: 'HTA + bradicardia + alteraciones respiratorias en la HTE grave.' },
        { q: '¿Qué par se lesiona más?', a: 'El VI (motor ocular externo).' },
      ],
      fuentes: 'Apunte de Ortega, pp. 498–501 · Clases de Ortega, repaso del 26/10 (19:19) y Síndromes del SN 5 (21:44).',
    },
    {
      tema: 'lcr',
      titulo: 'Examen del líquido cefalorraquídeo',
      bloques: [
        { t: 'paso', titulo: 'Punción lumbar', text: '**Antes** de punzar: **fondo de ojo** para descartar edema de papila.' },
        { t: 'clave', titulo: 'Contraindicaciones', items: ['**HTE con edema de papila** (riesgo de enclavamiento).', '**Lesión expansiva de fosa posterior**, signos de foco.', '**Infección cutánea** en el sitio de punción.', '**Diátesis hemorrágica** o plaquetopenia.'] },
        {
          t: 'cuadro',
          titulo: 'Patrones',
          head: ['', 'Aspecto', 'Células', 'Glucosa', 'Proteínas'],
          filas: [
            ['**Normal**', 'Cristal de roca', 'Escasas', 'Normal', 'Normales'],
            ['**Bacteriana**', '**Turbio**', '**Neutrófilos**', '**Baja**', '**Altas**'],
            ['**Viral**', 'Claro', '**Linfocitos**', '**Normal**', 'Normales o algo altas'],
            ['**Tuberculosa**', 'Claro', '**Linfocitos**', '**Baja**', '**Altas**; **cloruros bajos**'],
          ],
        },
        { t: 'ojo', text: 'Ortega: «Decirme **tres contraindicaciones** para hacer una punción lumbar» y «cómo se ve el LCR en una meningitis **supurada, viral y tuberculosa**: lo tienen que saber como el Padre Nuestro».' },
      ],
      oral: '«El LCR se obtiene por punción lumbar, previo fondo de ojo. Está contraindicada en la hipertensión endocraneana con edema de papila por el riesgo de enclavamiento, en las lesiones de fosa posterior, con infección de la piel en el sitio de punción y con trastornos de la coagulación. El LCR normal es claro, como cristal de roca. En la meningitis bacteriana es turbio, con neutrófilos, glucosa baja y proteínas altas; en la viral es claro, con linfocitos y glucosa normal; y en la tuberculosa es claro, con linfocitos, glucosa baja, proteínas altas y cloruros bajos.»',
      repreguntas: [
        { q: 'Decime tres contraindicaciones de la punción lumbar.', a: 'HTE con edema de papila, infección cutánea en el sitio, diátesis hemorrágica (o lesión de fosa posterior).' },
        { q: 'LCR claro, linfocitos, glucosa baja y cloruros bajos: ¿qué meningitis?', a: 'Tuberculosa.' },
      ],
      fuentes: 'Clases de Ortega, repaso del 26/10 (31:01, 41:26) y Síndromes del SN 7 (03:29).',
    },
    {
      tema: 'cefaleas',
      titulo: 'Cefaleas',
      bloques: [
        { t: 'paso', titulo: 'Clasificación', text: '**Primarias** (no hay una causa estructural): migraña, tensional, en racimos. **Secundarias** (hay una causa): HTE, meningitis, hemorragia, tumores; y la **neuralgia del trigémino**.' },
        {
          t: 'cuadro',
          head: ['', 'Migraña', 'Tensional', 'En racimos (Horton)'],
          filas: [
            ['Quién', '**Mujeres**, antecedente familiar', 'Episódica o crónica (≥ 15 días por mes)', '**Hombres**'],
            ['Dónde', '**Hemicraneal**', '**Bilateral, en vincha**', '**Periorbitaria** unilateral'],
            ['Cómo', '**Pulsátil**, moderada a severa, empeora con la actividad', '**Opresiva**, leve a moderada', 'Muy intensa, nocturna, hasta 3 h'],
            ['Acompaña', 'Náuseas, vómitos, **foto y sonofobia**; con o sin **aura** (5–60 min)', 'Sin vegetativos', '**Ojo rojo, lagrimeo, rinorrea**, ptosis y miosis'],
          ],
        },
        { t: 'clave', titulo: 'Signos de alarma (Merlín)', items: ['Cefalea **nueva** o que **cambia**, «la **peor** de su vida», primera después de los **50 años**.', 'Desencadenada por **esfuerzo** o tos.', 'Con **fiebre**, somnolencia, confusión, **déficit neurológico**, trastornos visuales.', 'Examen anormal: alteración de la conciencia, **edema de papila**, anisocoria.'] },
        { t: 'ojo', text: 'Ortega marca las **primarias** («las que deben conocer») y que la migraña «es más frecuente en mujeres»; el aura dura **más de 5 minutos**.' },
      ],
      oral: '«Las cefaleas se clasifican en primarias, sin causa estructural, y secundarias, con una causa como la HTE, la meningitis o una hemorragia; la neuralgia del trigémino es una de las secundarias que hay que conocer. Entre las primarias, la migraña es más frecuente en mujeres, hemicraneal, pulsátil, empeora con la actividad, con náuseas, vómitos, fotofobia y sonofobia, y puede tener aura de 5 a 60 minutos; la tensional es bilateral, en vincha, opresiva, sin síntomas vegetativos; y la cefalea en racimos es de hombres, periorbitaria, nocturna, con ojo rojo, lagrimeo y rinorrea. Los signos de alarma son una cefalea nueva o que cambia, la peor de su vida, después de los 50 años, desencadenada por esfuerzo, con fiebre o déficit neurológico, o con edema de papila al examen.»',
      repreguntas: [
        { q: '¿Cuánto dura el aura de la migraña?', a: 'Más de 5 minutos (de 5 a 60).' },
        { q: 'Nombrá tres signos de alarma de una cefalea.', a: 'Peor de su vida, comienzo después de los 50, con fiebre o déficit neurológico (también edema de papila).' },
      ],
      fuentes: 'Clases de Ortega, MC neurología 1 (22:39) y 2 (02:45, 03:37) · Instituto Merlín, «Semiología del sistema nervioso» (signos de alarma).',
    },
  ],
  noOlvidar: [
    { q: 'Signos meníngeos', a: 'Rigidez de nuca, Kernig, Brudzinski; gatillo de fusil.' },
    { q: 'Meningitis / meningismo / reacción', a: 'Clínica + LCR · clínica sola · LCR solo.' },
    { q: 'Tríada de HTE', a: 'Cefalea, vómito en chorro, edema de papila.' },
    { q: 'HTE: par y Cushing', a: 'VI par. Cushing: HTA + bradicardia + alteración respiratoria.' },
    { q: 'Contraindicaciones de la PL', a: 'HTE con edema de papila, fosa posterior, infección local, coagulopatía.' },
    { q: 'LCR', a: 'Bacteriana: turbio, PMN, glucosa ↓. Viral: claro, linfocitos, glucosa normal. TBC: linfocitos, glucosa ↓, cloruros ↓.' },
    { q: 'Cefaleas primarias', a: 'Migraña (mujer, hemicraneal, pulsátil, aura) · tensional (vincha) · racimos (hombre, periorbitaria).' },
  ],
};
