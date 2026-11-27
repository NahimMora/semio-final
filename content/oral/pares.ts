import type { ApunteUnidad } from './tipos';

/*
 * Pares craneales — apunte para el oral.
 * Base: apunte de Ortega («Examen físico del sistema nervioso», pares craneales, pp. 461–480)
 * y Merlín («Semiología del sistema nervioso»), contrastados con Argente (parte de neurología).
 */
export const apunte: ApunteUnidad = {
  unidad: 'pares',
  intro: {
    titulo: 'Los doce pares en un cuadro',
    bloques: [
      {
        t: 'cuadro',
        head: ['Par', 'Tipo', 'Función', 'Cómo lo exploro'],
        filas: [
          ['**I** olfatorio', 'Sensorial', 'Olfato', 'Sustancias **no irritantes**, cada narina por separado'],
          ['**II** óptico', 'Sensorial', 'Visión', 'Agudeza (Snellen), colores, **campo por confrontación**, **fondo de ojo**'],
          ['**III** motor ocular común', 'Motor (+ parasimpático)', 'Mirada arriba, abajo, adentro; **párpado**; **miosis**', 'Seguir el dedo en «**H**»; **reflejos pupilares**'],
          ['**IV** patético', 'Motor', 'Oblicuo mayor: **abajo y adentro**', 'Ídem'],
          ['**V** trigémino', 'Mixto', 'Sensibilidad de la **cara**; **masticación**', 'Sensibilidad V1–V3, maseteros, **reflejo corneano**'],
          ['**VI** motor ocular externo', 'Motor', 'Recto externo: **afuera**', 'Ídem'],
          ['**VII** facial', 'Mixto (+ parasimpático)', '**Mímica**; gusto 2/3 anteriores', 'Arrugar la frente, cerrar los ojos, mostrar los dientes, silbar'],
          ['**VIII** vestibulococlear', 'Sensorial', '**Audición** y **equilibrio**', '**Weber**, **Rinne**, Schwabach; **Romberg**, índices, nistagmo'],
          ['**IX** glosofaríngeo', 'Mixto (+ parasimpático)', 'Faringe; gusto 1/3 posterior', '«A»: **signo de la cortina**; reflejo nauseoso'],
          ['**X** vago', 'Mixto (+ parasimpático)', 'Velo del paladar, laringe (voz); vísceras', '«A»: elevación del velo; voz'],
          ['**XI** espinal', 'Motor', '**ECM** y **trapecio**', 'Rotar la cabeza y elevar los hombros **contra resistencia**'],
          ['**XII** hipogloso', 'Motor', '**Lengua**', 'Protrusión, atrofia, fasciculaciones'],
        ],
      },
      { t: 'ojo', text: 'Motores: III, IV, VI, XI y XII · sensoriales: I, II y VIII · mixtos: V, VII, IX y X. Llevan parasimpático: **III, VII, IX y X**.' },
      { t: 'clave', titulo: 'Lo que Ortega marcó en clase', items: ['La **vía óptica** «como el Padre Nuestro» y las **hemianopsias**.', '**Qué músculo** inervan el III, el IV y el VI.', '**Parálisis facial central vs periférica**: «no me pueden no saber eso».', '**Weber**: «la prueba que más tienen que conocer».', '**Cómo está inervada la lengua**.', 'El olfatorio es el único sensorial que **no hace escala en el tálamo**.'] },
    ],
  },
  temas: [
    {
      tema: 'pc-I',
      titulo: 'Par I (olfatorio)',
      bloques: [
        { t: 'paso', titulo: 'Exploración', text: 'Ojos cerrados, **cada narina por separado**, con sustancias **no irritantes** (café, menta, chocolate, vainilla; no perfumes).' },
        { t: 'cuadro', head: ['Alteración', 'Qué es'], filas: [['**Anosmia** / **hiposmia**', 'Pérdida / disminución del olfato'], ['**Parosmia**', 'Olores distorsionados'], ['**Cacosmia**', 'Percibe malos olores'], ['Alucinaciones olfatorias', 'Crisis **uncinadas** (epilepsia)']] },
        { t: 'paso', titulo: 'Causas', text: 'Resfrío (la más frecuente), traumatismo de cráneo (lámina cribosa), tumores (meningioma), Parkinson.' },
      ],
      oral: '«El primer par es el olfatorio, sensorial, encargado del olfato. Lo exploro con el paciente con los ojos cerrados, en cada narina por separado, con sustancias no irritantes como café o menta, no perfumes. Las alteraciones son la anosmia, la hiposmia, la parosmia, la cacosmia y las alucinaciones olfatorias de las crisis uncinadas. Las causas más frecuentes son el resfrío, los traumatismos de cráneo y los tumores.»',
      repreguntas: [{ q: '¿Qué es la cacosmia?', a: 'La percepción de malos olores.' }],
      fuentes: 'Apunte de Ortega, p. 462 · Instituto Merlín, «Semiología del sistema nervioso».',
    },
    {
      tema: 'pc-II',
      titulo: 'Par II (óptico)',
      porque: [
        'En el **quiasma** se cruzan solo las fibras **nasales** de la retina, que ven el campo **temporal**. Por eso un tumor de **hipófisis**, que aprieta el quiasma desde abajo, quita los dos campos temporales: **hemianopsia bitemporal**.',
        'Detrás del quiasma cada cintilla lleva **la mitad del campo del lado opuesto** de ambos ojos: una lesión ahí da **hemianopsia homónima contralateral**.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Exploración', ordenada: true, items: ['**Agudeza visual**: Snellen (lejos), Jaeger (cerca), cada ojo; si no lee: cuenta dedos, visión bulto, visión luz, amaurosis.', '**Visión de colores**: Ishihara.', '**Campo visual por confrontación**: enfrentados a 50 cm, tapando ojos opuestos.', '**Fondo de ojo**: papila, vasos, hemorragias, exudados, **edema de papila**.'] },
        {
          t: 'cuadro',
          titulo: 'Lesión según el sitio',
          head: ['Sitio', 'Defecto'],
          filas: [
            ['**Nervio óptico** (prequiasmático)', '**Amaurosis** del mismo ojo'],
            ['**Quiasma** (tumor de hipófisis)', '**Hemianopsia bitemporal** (heterónima)'],
            ['**Retroquiasmático** (cintilla, radiaciones, occipital)', '**Hemianopsia homónima contralateral**'],
          ],
        },
      ],
      oral: '«El segundo par es el óptico, sensorial. Exploro la agudeza visual con la tabla de Snellen, cada ojo por separado; la visión de colores con Ishihara; el campo visual por confrontación, sentado frente al paciente a 50 centímetros; y el fondo de ojo. Según dónde está la lesión: en el nervio óptico produce amaurosis de ese ojo; en el quiasma, típicamente por un tumor de hipófisis, hemianopsia bitemporal, porque se cruzan las fibras nasales que ven el campo temporal; y detrás del quiasma, hemianopsia homónima contralateral.»',
      repreguntas: [
        { q: '¿Qué defecto produce un tumor de hipófisis?', a: 'Hemianopsia bitemporal (compresión del quiasma).' },
        { q: 'Lesión del lóbulo occipital derecho: ¿qué campo se pierde?', a: 'Hemianopsia homónima izquierda.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 462–465.',
    },
    {
      tema: 'pc-oculomotores',
      titulo: 'Pares III, IV y VI (oculomotores)',
      porque: [
        'Cada par mueve el ojo en una dirección; si se paraliza, el ojo queda tirado por el músculo **opuesto** sano y aparece **diplopía** al mirar hacia el lado del músculo débil.',
        'El **III** además **levanta el párpado** y **cierra la pupila** (parasimpático): su parálisis completa da **ptosis**, ojo **abajo y afuera** y **midriasis**.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Exploración', text: 'Inspección (ptosis, estrabismo, posición de la cabeza); seguir el dedo en «**H**» preguntando por **diplopía** y buscando **nistagmo**; **pupilas**: forma, tamaño (normal **2–4 mm**), simetría, **reflejo fotomotor**, **consensual** y de **acomodación-convergencia**.' },
        {
          t: 'cuadro',
          titulo: 'Parálisis',
          head: ['Par', 'Hallazgo'],
          filas: [
            ['**III** completa', '**Ptosis**, ojo **abajo y afuera**, **midriasis** arreactiva, diplopía · incompleta: respeta la pupila'],
            ['**IV**', 'No puede mirar **abajo y adentro**: diplopía vertical al bajar escaleras; inclina la cabeza al lado opuesto'],
            ['**VI**', 'Ojo **desviado hacia adentro**, no abduce; diplopía horizontal (diabetes, tumores, HTE)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Pupilas',
          head: ['', 'Causas'],
          filas: [
            ['**Midriasis** (> 4 mm)', 'Parálisis del III, **hernia del uncus**'],
            ['**Miosis** (< 2 mm)', 'Opiáceos, uremia, lesiones protuberanciales; unilateral: **Claude Bernard-Horner** (ptosis, miosis, enoftalmos)'],
            ['**Anisocoria**', 'Pupilas desiguales'],
          ],
        },
        { t: 'maniobras', ids: ['motilidad-ocular', 'reflejos-pupilares'] },
      ],
      oral: '«Los pares III, IV y VI son motores y se encargan de la motilidad ocular: el III, o motor ocular común, mueve el ojo hacia arriba, abajo y adentro, eleva el párpado y produce la miosis; el IV, o patético, lleva el ojo abajo y adentro; y el VI, o motor ocular externo, hacia afuera. Exploro la inspección, la motilidad pidiendo que siga mi dedo en forma de H, buscando diplopía y nistagmo, y las pupilas con los reflejos fotomotor, consensual y de acomodación. La parálisis completa del III da ptosis, ojo desviado hacia abajo y afuera y midriasis; la del IV, diplopía al mirar abajo; la del VI, ojo desviado hacia adentro que no abduce. La miosis unilateral con ptosis es el síndrome de Claude Bernard-Horner.»',
      repreguntas: [
        { q: '¿Cómo queda el ojo en una parálisis completa del III?', a: 'Ptosis, desviado abajo y afuera, con midriasis arreactiva.' },
        { q: '¿Qué es el reflejo consensual?', a: 'La pupila contraria se contrae al iluminar un ojo.' },
        { q: '¿Qué tríada tiene el Claude Bernard-Horner?', a: 'Ptosis, miosis y enoftalmos (lesión del simpático).' },
      ],
      fuentes: 'Apunte de Ortega, pp. 465–468.',
    },
    {
      tema: 'pc-V',
      titulo: 'Par V (trigémino)',
      bloques: [
        { t: 'paso', titulo: 'Funciones', text: '**Sensitivo**: cara por sus tres ramas — **V1 oftálmica** (frente, párpado superior, **córnea**, dorso nasal), **V2 maxilar** (mejilla, labio superior), **V3 mandibular** (mentón, labio inferior, 2/3 anteriores de la lengua). **Motor**: músculos de la **masticación** (maseteros, temporales, pterigoideos).' },
        { t: 'paso', titulo: 'Exploración', items: ['**Sensibilidad** táctil, dolorosa y térmica en las tres ramas, comparando lados.', '**Motor**: palpar **maseteros y temporales** al apretar los dientes; abrir la boca.', '**Reflejo corneano** (aferencia V, eferencia VII) y **maseterino**.'] },
        { t: 'paso', titulo: 'Alteraciones', text: 'Lesión completa: **anestesia de la hemicara**, atrofia de maseteros y la **mandíbula se desvía hacia el lado enfermo** al abrir la boca. **Neuralgia del trigémino**: dolor **lancinante, paroxístico**, en el territorio de una rama, desencadenado por **zonas gatillo**.' },
        { t: 'maniobras', ids: ['trigemino-sensibilidad', 'reflejo-corneano'] },
      ],
      oral: '«El quinto par, el trigémino, es mixto. Su parte sensitiva inerva la cara por tres ramas: oftálmica, que incluye la córnea; maxilar; y mandibular, que incluye los dos tercios anteriores de la lengua; su parte motora inerva los músculos de la masticación. Lo exploro con la sensibilidad de las tres ramas comparando ambos lados, palpando maseteros y temporales al apretar los dientes, y con los reflejos corneano y maseterino. Su lesión da anestesia de la hemicara y desviación de la mandíbula hacia el lado enfermo. La neuralgia del trigémino es un dolor lancinante y paroxístico en el territorio de una rama, desencadenado por zonas gatillo.»',
      repreguntas: [
        { q: '¿Qué pares participan del reflejo corneano?', a: 'Aferencia por el V (oftálmica) y eferencia por el VII.' },
        { q: '¿Hacia dónde se desvía la mandíbula en una lesión del V?', a: 'Hacia el lado enfermo.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 469–470 · Instituto Merlín, «Semiología del sistema nervioso».',
    },
    {
      tema: 'pc-VII',
      titulo: 'Par VII (facial)',
      porque: [
        'El núcleo del facial que maneja la **frente** recibe órdenes de **los dos hemisferios**; el de la **mitad inferior**, solo del hemisferio **opuesto**.',
        'Entonces: una lesión **central** (cortical, ACV) deja sin órdenes solo la **mitad inferior contralateral** — la frente se salva. Una lesión **periférica** (núcleo o nervio) paraliza **toda la hemicara del mismo lado**, frente incluida.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Exploración', text: 'Inspección (arrugas frontales, cierre palpebral, **surco nasogeniano**, comisura) y pedir: **arrugar la frente**, fruncir el ceño, **cerrar fuerte los ojos**, **mostrar los dientes**, silbar, inflar las mejillas. Gusto de los **2/3 anteriores** de la lengua.' },
        {
          t: 'cuadro',
          head: ['', 'Parálisis central', 'Parálisis periférica'],
          filas: [
            ['Sitio', 'Corteza o vía corticonuclear (**ACV**)', 'Núcleo o nervio (**Bell**, idiopática)'],
            ['Lado', '**Contralateral** a la lesión', '**Homolateral**'],
            ['Territorio', 'Solo la **mitad inferior** de la cara (la **frente se conserva**)', '**Toda la hemicara**, frente incluida'],
            ['Signos', 'Comisura caída, «fumador de pipa»; suele acompañar a una hemiplejía', 'No arruga la frente; **signo de Bell**: no puede cerrar el ojo y queda a la vista la esclerótica'],
          ],
        },
        { t: 'maniobras', ids: ['facial-mimica'] },
      ],
      oral: '«El séptimo par, el facial, es mixto: inerva la mímica y lleva el gusto de los dos tercios anteriores de la lengua. Lo exploro observando la simetría de la cara y pidiendo que arrugue la frente, cierre los ojos con fuerza, muestre los dientes, silbe e infle las mejillas. Hay que diferenciar la parálisis central de la periférica: la central, por una lesión cortical como un ACV, es contralateral y afecta solo la mitad inferior de la cara, porque la frente recibe inervación de ambos hemisferios; la periférica, como la de Bell, es homolateral y afecta toda la hemicara, el paciente no arruga la frente ni cierra el ojo y aparece el signo de Bell.»',
      repreguntas: [
        { q: '¿Por qué en la parálisis facial central se conserva la frente?', a: 'Porque el núcleo de la parte superior recibe inervación de ambos hemisferios.' },
        { q: '¿Qué es el signo de Bell?', a: 'Del lado paralizado el paciente no puede cerrar el ojo y queda a la vista la esclerótica (parálisis periférica).' },
      ],
      fuentes: 'Apunte de Ortega, pp. 471–473 · Instituto Merlín, «Semiología del sistema nervioso».',
    },
    {
      tema: 'pc-VIII',
      titulo: 'Par VIII (vestibulococlear)',
      bloques: [
        { t: 'paso', titulo: 'Rama coclear (audición)', text: 'Voz cuchicheada o reloj a 60 cm. Si hay hipoacusia, diferencio **conducción** (oído externo y medio) de **percepción** (oído interno, nervio) con el diapasón.' },
        {
          t: 'cuadro',
          head: ['Prueba', 'Normal', 'Conducción', 'Percepción'],
          filas: [
            ['**Weber** (diapasón en el vértex)', 'No lateraliza', 'Lateraliza al **oído enfermo**', 'Lateraliza al **oído sano**'],
            ['**Rinne** (mastoides → frente al conducto)', '**Positivo** (aérea > ósea)', '**Negativo** (ósea > aérea)', 'Positivo'],
            ['**Schwabach** (mastoides)', '16–20 s', '**Alargado**', '**Acortado**'],
          ],
        },
        { t: 'paso', titulo: 'Rama vestibular (equilibrio)', text: 'Interrogar **vértigo**. **Romberg** (laberíntico: cae **hacia un lado**, el del laberinto enfermo), **prueba de los índices** (se desvían al lado afectado), marcha (en estrella), **nistagmo**.' },
        { t: 'maniobras', ids: ['weber-rinne', 'romberg'] },
      ],
      oral: '«El octavo par tiene una rama coclear, para la audición, y una vestibular, para el equilibrio. La coclear la exploro con la voz cuchicheada y, si hay hipoacusia, con el diapasón: en el Weber, con el diapasón en el vértex, la hipoacusia de conducción lateraliza hacia el oído enfermo y la de percepción hacia el sano; el Rinne es normalmente positivo, porque la vía aérea dura más que la ósea, y se hace negativo en la de conducción; el Schwabach se alarga en la de conducción y se acorta en la de percepción. La vestibular la exploro interrogando el vértigo, con el Romberg, en el que el paciente cae hacia el lado del laberinto enfermo, la prueba de los índices, la marcha y el nistagmo.»',
      repreguntas: [
        { q: 'Weber lateralizado a la derecha y Rinne negativo a la derecha: ¿qué hipoacusia es?', a: 'De conducción del oído derecho.' },
        { q: '¿Cómo es el Romberg laberíntico?', a: 'El paciente se inclina o cae siempre hacia el mismo lado (el del laberinto enfermo).' },
      ],
      fuentes: 'Apunte de Ortega, pp. 473–476.',
    },
    {
      tema: 'pc-IX-X',
      titulo: 'Pares IX y X (glosofaríngeo y vago)',
      bloques: [
        { t: 'paso', titulo: 'Exploración', items: ['Pedir que diga «**A**» prolongada: el **velo del paladar** se eleva simétrico y la **úvula** queda en la línea media.', '**Reflejo nauseoso** (faríngeo) y **velopalatino** con un bajalengua.', '**Voz** y **deglución**; gusto del **1/3 posterior** de la lengua (IX).'] },
        {
          t: 'cuadro',
          head: ['Alteración', 'Hallazgo'],
          filas: [
            ['**Signo de la cortina** (Vernet)', 'Al decir «A», la pared faríngea se desplaza hacia el **lado sano**'],
            ['Parálisis unilateral del velo (X)', 'La **úvula se desvía hacia el lado sano**'],
            ['Parálisis bilateral', 'Voz nasal, **disfagia** con regurgitación nasal, abolición del reflejo nauseoso'],
            ['Recurrente', '**Disfonía**, voz bitonal'],
          ],
        },
        { t: 'maniobras', ids: ['glosofaringeo-vago'] },
      ],
      oral: '«El noveno y el décimo par se exploran juntos. Pido que abra la boca y diga «A» prolongada: normalmente el velo del paladar se eleva en forma simétrica y la úvula queda en la línea media. Exploro el reflejo nauseoso, la voz y la deglución, y el gusto del tercio posterior de la lengua para el glosofaríngeo. En la parálisis unilateral aparece el signo de la cortina, con desplazamiento de la pared faríngea hacia el lado sano, y la úvula se desvía hacia el lado sano. La parálisis bilateral da voz nasal, disfagia y regurgitación nasal, y la del recurrente, disfonía.»',
      repreguntas: [{ q: '¿Hacia dónde se desvía la úvula en una parálisis unilateral del vago?', a: 'Hacia el lado sano.' }],
      fuentes: 'Apunte de Ortega, pp. 477–478.',
    },
    {
      tema: 'pc-XI',
      titulo: 'Par XI (espinal)',
      bloques: [
        { t: 'paso', titulo: 'Exploración', items: ['**Esternocleidomastoideo**: rotar la cabeza **hacia el lado opuesto** contra la resistencia de la mano en el mentón, palpando el músculo.', '**Trapecio**: **elevar los hombros** contra resistencia.'] },
        { t: 'paso', titulo: 'Alteraciones', text: 'No se forma el relieve del ECM, atrofia; **caída del hombro** hacia adelante y abajo, escápula desplazada, no abduce el brazo por encima de la horizontal.' },
        { t: 'maniobras', ids: ['espinal'] },
      ],
      oral: '«El undécimo par, el espinal, es motor e inerva el esternocleidomastoideo y el trapecio. Exploro el esternocleidomastoideo pidiendo que rote la cabeza hacia el lado opuesto contra la resistencia de mi mano, y el trapecio pidiendo que eleve los hombros contra resistencia. Su lesión da atrofia del esternocleidomastoideo y caída del hombro.»',
      repreguntas: [{ q: '¿Cómo explorás el ECM derecho?', a: 'Pidiendo que rote la cabeza hacia la izquierda contra resistencia, palpando el ECM derecho.' }],
      fuentes: 'Apunte de Ortega, p. 479.',
    },
    {
      tema: 'pc-XII',
      titulo: 'Par XII (hipogloso)',
      porque: [
        'Cada mitad de la lengua **empuja hacia el lado opuesto**. Si una mitad está paralizada, la sana la empuja sin oposición: la lengua protruida **se desvía hacia el lado de la lesión**.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Exploración', text: 'Lengua en reposo dentro de la boca (**atrofia**, **fasciculaciones**), **protrusión**, movimientos laterales y empujar la mejilla contra resistencia.' },
        {
          t: 'cuadro',
          head: ['Lesión', 'Hallazgo'],
          filas: [
            ['**Periférica** unilateral', 'Hemilengua **atrófica, blanda, con fasciculaciones**; al sacarla **se desvía hacia el lado lesionado**'],
            ['Bilateral', 'No puede sacar la lengua; **disartria**, disfagia'],
            ['**Supranuclear**', '**Sin atrofia**; bilateral: parálisis pseudobulbar'],
          ],
        },
        { t: 'maniobras', ids: ['hipogloso'] },
      ],
      oral: '«El duodécimo par, el hipogloso, es el motor de la lengua. La exploro en reposo buscando atrofia y fasciculaciones, pidiendo que la saque y la mueva, y que empuje la mejilla contra resistencia. En la lesión periférica unilateral la hemilengua está atrófica, blanda y con fasciculaciones, y al sacarla se desvía hacia el lado lesionado, porque la mitad sana la empuja; en la lesión supranuclear no hay atrofia.»',
      repreguntas: [{ q: '¿Hacia dónde se desvía la lengua en una lesión del XII?', a: 'Hacia el lado de la lesión (periférica).' }],
      fuentes: 'Apunte de Ortega, pp. 479–480.',
    },
  ],
  noOlvidar: [
    { q: 'Clasificación', a: 'Motores III, IV, VI, XI, XII · sensoriales I, II, VIII · mixtos V, VII, IX, X.' },
    { q: 'Óptico', a: 'Nervio: amaurosis · quiasma: bitemporal (hipófisis) · retroquiasmático: homónima contralateral.' },
    { q: 'III completo', a: 'Ptosis, ojo abajo y afuera, midriasis.' },
    { q: 'VI', a: 'Ojo hacia adentro, no abduce.' },
    { q: 'Trigémino', a: 'V1, V2, V3; masticación; corneano (V → VII); mandíbula al lado enfermo.' },
    { q: 'Facial central vs periférica', a: 'Central: mitad inferior contralateral (respeta la frente). Periférica: hemicara homolateral, Bell.' },
    { q: 'Weber y Rinne', a: 'Conducción: Weber al enfermo, Rinne negativo. Percepción: Weber al sano, Rinne positivo.' },
    { q: 'IX–X', a: 'Cortina y úvula hacia el lado sano.' },
    { q: 'XII', a: 'Lengua hacia el lado lesionado.' },
  ],
};
