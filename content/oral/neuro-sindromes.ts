import type { ApunteUnidad } from './tipos';

/*
 * Síndromes motores — apunte para el oral.
 * Base: apunte de Ortega («Síndrome piramidal» pp. 489–492, «Síndrome extrapiramidal» pp. 493–496,
 * «Síndrome de la segunda neurona motora» pp. 507–509, «Taxia» p. 488) y clases de Ortega
 * (Síndromes del SN 1–4 y reunión del 24/10), con Merlín («Semiología del sistema nervioso»).
 */
export const apunte: ApunteUnidad = {
  unidad: 'neuro-sindromes',
  intro: {
    titulo: 'Los cuatro síndromes motores en un cuadro',
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'Piramidal (1.ª)', '2.ª motoneurona', 'Extrapiramidal (Parkinson)', 'Cerebeloso'],
        filas: [
          ['**Fuerza**', 'Paresia / plejía', 'Paresia / plejía', 'Conservada (bradicinesia)', 'Conservada'],
          ['**Tono**', '**Espasticidad** (navaja)', '**Hipotonía**', '**Rigidez** (rueda dentada)', '**Hipotonía**'],
          ['**Trofismo**', 'Conservado (desuso)', '**Atrofia**, **fasciculaciones**', 'Conservado', 'Conservado'],
          ['**Reflejos**', '**Hiperreflexia**, clonus', '**Arreflexia**', 'Normales', 'Normales o pendulares'],
          ['**Babinski**', '**Sí**', 'No', 'No', 'No'],
          ['**Movimientos**', 'Sincinesias', 'Fasciculaciones', '**Temblor de reposo**', '**Temblor intencional**, dismetría'],
          ['**Marcha**', 'En guadaña', 'Steppage', 'Pequeños pasos', 'De ebrio'],
        ],
      },
    ],
  },
  temas: [
    {
      tema: 'sx-piramidal',
      titulo: 'Síndrome piramidal (primera motoneurona)',
      porque: [
        'La vía piramidal **manda** el movimiento voluntario y **frena** los reflejos. Al lesionarse se pierde la fuerza y se **liberan** los reflejos: hiperreflexia, clonus, Babinski y espasticidad.',
        'La vía **se cruza en el bulbo**: una lesión **arriba** del cruce da hemiplejía **contralateral**. En el **tronco** se lesiona además el núcleo de un par del **mismo lado**: hemiplejía **alterna**.',
      ],
      bloques: [
        { t: 'def', text: 'Lesión de la **neurona motora superior** en cualquier punto de su recorrido. Causas: **ACV** (isquémico o hemorrágico), tumores, traumatismos.' },
        {
          t: 'cuadro',
          titulo: 'Clínica',
          head: ['', 'Hallazgo'],
          filas: [
            ['Fuerza', '**Paresia o plejía contralateral** (hemiplejía faciobraquiocrural)'],
            ['Tono', '**Espasticidad en navaja** (al principio **fláccida**)'],
            ['Reflejos', '**Hiperreflexia** profunda, **abolición de los cutaneoabdominales** y cremasteriano, **Babinski** y sucedáneos'],
            ['Otros', '**Clonus**, sincinesias; **sin atrofia** (solo por desuso)'],
          ],
        },
        { t: 'paso', titulo: 'Evolución de la hemiplejía', text: '**Fláccida** (período inicial: hipotonía, arreflexia, Babinski) → **espástica**: brazo en **flexión** y pierna en **extensión**, **marcha en guadaña**, **parálisis facial central**.' },
        {
          t: 'cuadro',
          titulo: 'Topografía',
          head: ['Tipo', 'Lesión', 'Ejemplo'],
          filas: [
            ['**Directa**', 'Hemisferio: cara, brazo y pierna del **mismo lado** (contralateral a la lesión)', 'ACV capsular: faciobraquiocrural proporcionada'],
            ['**Alterna**', '**Tronco**: par craneal **homolateral** + hemiplejía **contralateral**', '**Weber** (mesencéfalo: III) · **Millard-Gubler** (protuberancia: VII y VI)'],
          ],
        },
        { t: 'ojo', text: 'Ortega: «Si yo le pregunto el examen físico de un paciente con síndrome piramidal, me tienen que decir todo eso», y la **hemiplejía alterna** (lesión en el tronco) «es pregunta de examen».' },
      ],
      oral: '«El síndrome piramidal es la lesión de la primera motoneurona en cualquier punto de su recorrido, sobre todo por ACV, tumores o traumatismos. Se caracteriza por paresia o plejía contralateral, espasticidad con signo de la navaja —al principio es fláccida—, hiperreflexia profunda con clonus, abolición de los reflejos cutaneoabdominales y cremasteriano, signo de Babinski y sincinesias, sin atrofia salvo por desuso. La hemiplejía espástica tiene el brazo en flexión, la pierna en extensión, marcha en guadaña y parálisis facial central. Si es directa, la lesión es hemisférica; si es alterna —un par craneal del mismo lado y hemiplejía del lado opuesto, como el síndrome de Weber o el de Millard-Gubler— la lesión está en el tronco encefálico.»',
      repreguntas: [
        { q: '¿Por qué la hemiplejía es contralateral?', a: 'Porque la vía piramidal se cruza en el bulbo (decusación).' },
        { q: '¿Qué es una hemiplejía alterna?', a: 'Par craneal homolateral + hemiplejía contralateral: lesión del tronco (Weber, Millard-Gubler).' },
        { q: '¿Cómo es el tono al principio de un ACV?', a: 'Fláccido; después se vuelve espástico.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 489–492 · Clase de Ortega, reunión del 24/10 (13:57, 33:12).',
    },
    {
      tema: 'segunda-motoneurona',
      titulo: 'Síndrome de segunda motoneurona',
      porque: [
        'La 2.ª motoneurona es **la última vía** hacia el músculo y parte del **arco reflejo**. Si se lesiona, el músculo queda **sin orden, sin tono y sin trofismo**: la «**triple A**».',
      ],
      bloques: [
        { t: 'def', text: 'Lesión de la neurona motora del **asta anterior** de la médula, del núcleo de un par craneal, de la raíz o del nervio periférico.' },
        { t: 'clave', titulo: 'Clínica', items: ['Parálisis **fláccida** en el territorio afectado.', '**Atonía, arreflexia y atrofia** (triple A).', '**Fasciculaciones** (lesión del asta anterior).', '**Sin Babinski**.'] },
        { t: 'paso', titulo: 'Causas', text: 'Poliomielitis, **ELA** (mezcla 1.ª y 2.ª), mielitis, compresiones radiculares, **polineuropatías** (diabetes, alcohol), **Guillain-Barré**.' },
      ],
      oral: '«El síndrome de la segunda motoneurona es la lesión de la neurona del asta anterior, de los núcleos de los pares craneales, de la raíz o del nervio. Produce una parálisis fláccida en el territorio afectado con la triple A: atonía, arreflexia y atrofia, más fasciculaciones, y sin signo de Babinski. Se ve en la poliomielitis, la ELA, las radiculopatías, las polineuropatías y el Guillain-Barré. Se diferencia del piramidal, que tiene espasticidad, hiperreflexia, Babinski y no tiene atrofia.»',
      repreguntas: [{ q: '¿Qué es la triple A?', a: 'Atonía, arreflexia y atrofia: segunda motoneurona.' }],
      fuentes: 'Apunte de Ortega, pp. 507–509.',
    },
    {
      tema: 'parkinson',
      titulo: 'Síndrome extrapiramidal hipertónico-hipocinético (Parkinson)',
      porque: [
        'En la **sustancia negra** mueren las neuronas que fabrican **dopamina**; en los núcleos de la base predomina la **acetilcolina**. Resultado: movimientos **lentos y pobres** (hipocinesia), **rigidez** y **temblor**.',
      ],
      bloques: [
        { t: 'def', text: 'Enfermedad **neurodegenerativa**, crónica y progresiva: pérdida de neuronas de la **sustancia negra** (pars compacta, > 80 %) con **cuerpos de Lewy** (alfa-sinucleína).' },
        { t: 'clave', titulo: 'Tríada', items: ['**Bradicinesia**: lentitud, dificultad para iniciar (freezing), hipomimia, **micrografía**, pérdida del balanceo de los brazos.', '**Rigidez** en **rueda dentada**.', '**Temblor de reposo**: 4–6 Hz, asimétrico, empieza en un miembro; **desaparece con el sueño** y aumenta con las emociones.', 'Más: **inestabilidad postural** (cae en bloque ante un empujón), marcha a **pequeños pasos**, facies **inexpresiva**.'] },
        { t: 'paso', titulo: 'No motores', text: '**Hiposmia** (temprana), depresión, constipación, hipotensión ortostática, trastornos del sueño, seborrea, sialorrea.' },
        { t: 'ojo', text: 'Ortega: «Siempre pregunto cuál es la **tríada de Parkinson**… no me saben tríadas del Parkinson, es para bochazo», y **qué núcleo de la base** está lesionado (la sustancia negra).' },
      ],
      oral: '«La enfermedad de Parkinson es un síndrome extrapiramidal hipertónico-hipocinético, neurodegenerativo y progresivo, por pérdida de las neuronas dopaminérgicas de la sustancia negra, con cuerpos de Lewy. Su tríada es bradicinesia —lentitud, dificultad para iniciar el movimiento, hipomimia y micrografía—, rigidez en rueda dentada y temblor de reposo, de 4 a 6 hertz, asimétrico, que desaparece con el sueño. Se agregan inestabilidad postural, marcha a pequeños pasos y facies inexpresiva, y síntomas no motores como hiposmia, depresión, constipación e hipotensión ortostática. La fuerza y los reflejos son normales.»',
      repreguntas: [
        { q: '¿Cuál es la tríada del Parkinson?', a: 'Bradicinesia, rigidez en rueda dentada y temblor de reposo.' },
        { q: '¿Qué estructura se lesiona?', a: 'La sustancia negra (pars compacta): falta dopamina.' },
        { q: '¿Cómo diferenciás el temblor parkinsoniano del cerebeloso?', a: 'Parkinson: de reposo. Cerebeloso: intencional (al moverse).' },
      ],
      fuentes: 'Apunte de Ortega, pp. 493–496 · Clase de Ortega, reunión del 24/10 (1:02:37).',
    },
    {
      tema: 'sx-cerebeloso',
      titulo: 'Síndrome cerebeloso',
      porque: [
        'El cerebelo **mide y coordina** el movimiento y regula el tono. Si falla, el movimiento sale **mal medido** (dismetría), **descompuesto** (asinergia) y **temblando al acercarse al objetivo** (temblor intencional), con **hipotonía**.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Funciones del cerebelo', text: 'Eumetría, isostenia, sinergia, diadococinesia, regulación del **tono** y del **equilibrio**.' },
        {
          t: 'cuadro',
          titulo: 'Signos',
          head: ['Signo', 'Qué es', 'Cómo lo busco'],
          filas: [
            ['**Ataxia** con **Romberg negativo**', 'Inestable ya con los ojos abiertos', 'Romberg, marcha'],
            ['**Dismetría**', 'Se pasa o no llega', '**Índice-nariz**, talón-rodilla'],
            ['**Adiadococinesia**', 'No alterna movimientos rápidos', 'Marionetas'],
            ['**Asinergia**', 'Descompone el movimiento', '—'],
            ['**Temblor intencional**', 'Aumenta al acercarse al objetivo', 'Índice-nariz'],
            ['**Hipotonía**', 'Reflejos pendulares', 'Balanceo'],
            ['Otros', '**Marcha de ebrio**, **palabra escandida**, **nistagmo**, megalografía', ''],
          ],
        },
        { t: 'ojo', text: 'Ortega da como tríada del síndrome cerebeloso: **vértigo de tipo central, cefalea holocraneana y vómitos** (causas frecuentes: hemorragias y tumores). Lo que más marca: **temblor de actitud** e **hipotonía**.' },
        { t: 'maniobras', ids: ['indice-nariz', 'talon-rodilla'] },
      ],
      oral: '«El síndrome cerebeloso es la alteración de las funciones del cerebelo: medir, coordinar y regular el tono y el equilibrio. Se manifiesta por ataxia con Romberg negativo, porque el paciente ya es inestable con los ojos abiertos; dismetría, que busco con índice-nariz y talón-rodilla; adiadococinesia; asinergia; temblor intencional; hipotonía con reflejos pendulares; marcha de ebrio; palabra escandida y nistagmo. Como tríada, Ortega da vértigo central, cefalea holocraneana y vómitos, y sus causas más frecuentes son las hemorragias y los tumores.»',
      repreguntas: [
        { q: '¿Cómo es el Romberg en el cerebeloso?', a: 'Negativo: ya es inestable con los ojos abiertos.' },
        { q: '¿Qué es la dismetría?', a: 'Error en la medida del movimiento: se pasa o no llega (índice-nariz).' },
      ],
      fuentes: 'Apunte de Ortega, p. 488 · Clases de Ortega, Síndromes del SN 4 (18:21) y reunión del 24/10.',
    },
  ],
  noOlvidar: [
    { q: 'Piramidal', a: 'Paresia contralateral, navaja, hiperreflexia, clonus, Babinski, sin atrofia.' },
    { q: 'Hemiplejía alterna', a: 'Par homolateral + hemiplejía contralateral = tronco (Weber, Millard-Gubler).' },
    { q: '2.ª motoneurona', a: 'Triple A (atonía, arreflexia, atrofia) + fasciculaciones, sin Babinski.' },
    { q: 'Parkinson', a: 'Tríada: bradicinesia, rigidez en rueda dentada, temblor de reposo. Sustancia negra.' },
    { q: 'Cerebeloso', a: 'Romberg negativo, dismetría, adiadococinesia, temblor intencional, hipotonía, marcha de ebrio.' },
  ],
};
