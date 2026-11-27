import type { ApunteUnidad } from './tipos';

/*
 * Cardiovascular: motivos de consulta — apunte para el oral.
 * Base: apunte de Ortega («Motivos de consulta del aparato cardiovascular» pp. 129–141) y Merlín
 * («Disnea cardíaca», «Dolor cardíaco», «Palpitaciones, síncope y lipotimia»), contrastados con Argente cap. 27 y 32.
 */
export const apunte: ApunteUnidad = {
  unidad: 'cardio-mc',
  temas: [
    {
      tema: 'angor',
      titulo: 'Ángor (angina de pecho)',
      porque: [
        'Hay **isquemia** cuando el miocardio **necesita más oxígeno del que le llega**. Casi siempre por una placa de **aterosclerosis** que estrecha la coronaria: en reposo alcanza, en el **esfuerzo** no.',
        'Por eso el dolor aparece con lo que **aumenta el trabajo del corazón** (esfuerzo, emoción, frío, comidas copiosas) y **cede con el reposo y la nitroglicerina**, que bajan el consumo.',
        'Si la oclusión es **completa y prolongada** (más de 30 minutos), el músculo se necrosa: **infarto**.',
      ],
      bloques: [
        { t: 'def', text: 'Dolor torácico por **isquemia miocárdica transitoria**: desequilibrio entre el **aporte** y la **demanda** de oxígeno del miocardio.' },
        {
          t: 'cuadro',
          titulo: 'El dolor anginoso típico',
          head: ['', 'Característica'],
          filas: [
            ['**Localización**', '**Retroesternal**, en un área (no un punto); el paciente apoya el **puño cerrado** en el pecho (**signo de Levine**)'],
            ['**Irradiación**', '**Brazo izquierdo** (borde cubital), cuello, **mandíbula**, hombros, espalda, epigastrio'],
            ['**Carácter**', '**Opresivo**, constrictivo («un peso», «me aprietan»)'],
            ['**Duración**', '**3–10 minutos**; > 30 min (**período de alarma de Gallavardin**) → pensar en **infarto**; segundos → funcional'],
            ['**Desencadenantes**', '**Esfuerzo**, emociones, frío, comidas copiosas'],
            ['**Atenuantes**', '**Reposo** y **nitroglicerina**; **no cambia con la posición ni con la respiración**'],
            ['**Acompañantes**', 'Sudoración, disnea, náuseas y vómitos (cara inferior), palpitaciones, mareo'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Angina estable, inestable e infarto',
          head: ['', 'Duración', 'Cuándo aparece', 'Nitroglicerina'],
          filas: [
            ['**Estable**', 'Minutos', 'Siempre con el **mismo esfuerzo** (sin cambios en los últimos 3 meses)', 'Cede'],
            ['**Inestable**', 'Más larga', '**De reciente comienzo**, **progresiva** (con menos esfuerzo) o **de reposo**', 'Cede parcialmente'],
            ['**Infarto**', '**> 30 min**', 'Con frecuencia en **reposo**; sensación de muerte inminente', '**No cede**'],
          ],
        },
        { t: 'paso', titulo: 'Otras formas', items: ['**Prinzmetal** (variante): en reposo o de noche, por **espasmo coronario**, con esfuerzos bien tolerados.', '**De decúbito** (Vázquez): al acostarse, por más retorno venoso.', 'Hoy se agrupan como **síndrome coronario agudo** con o sin elevación del ST.'] },
        {
          t: 'cuadro',
          titulo: 'Diferencial del dolor torácico',
          head: ['Origen', 'Cómo es'],
          filas: [
            ['**Pericarditis**', 'Punzante, **empeora con la inspiración, la tos y los movimientos**, **mejora inclinado hacia adelante**'],
            ['**Disección aórtica**', '**Desgarrante**, máximo desde el inicio, **migra** hacia la espalda y el abdomen'],
            ['**Pleural**', '**Puntada de costado**, aumenta con la respiración y la tos'],
          ],
        },
      ],
      oral: '«El ángor o angina de pecho es el dolor torácico por isquemia miocárdica transitoria, cuando la demanda de oxígeno supera al aporte, en general por una placa de aterosclerosis. Es retroesternal, opresivo, el paciente apoya el puño en el pecho —el signo de Levine—, se irradia al brazo izquierdo, cuello y mandíbula, dura de 3 a 10 minutos, lo desencadenan el esfuerzo, las emociones, el frío o las comidas copiosas y cede con el reposo y la nitroglicerina; no cambia con la posición ni con la respiración. Se acompaña de sudoración, disnea o náuseas. La angina estable aparece siempre con el mismo esfuerzo; la inestable es de reciente comienzo, progresiva o de reposo; y si el dolor dura más de 30 minutos y no cede con nitritos hay que pensar en un infarto. Se diferencia del dolor pericárdico, que mejora inclinándose hacia adelante, y de la disección aórtica, desgarrante y migratoria.»',
      repreguntas: [
        { q: '¿Qué es el signo de Levine?', a: 'El paciente señala el dolor apoyando el puño cerrado en el centro del pecho: típico de la angina.' },
        { q: '¿Qué es el período de alarma de Gallavardin?', a: 'Un dolor anginoso que dura más de 30 minutos: hace pensar en necrosis (infarto).' },
        { q: '¿Qué diferencia la angina inestable de la estable?', a: 'La inestable es de reciente comienzo, progresiva o aparece en reposo; la estable no cambia en los últimos tres meses.' },
        { q: '¿Por qué el infarto inferior da náuseas y vómitos?', a: 'Porque la isquemia de la cara diafragmática estimula el vago.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 132–136 · Instituto Merlín, «Dolor cardíaco» y «Cardiopatía isquémica» · Argente-Álvarez, cap. 27-2 y 32-1.',
    },
    {
      tema: 'mc-cardio',
      titulo: 'Disnea cardíaca, asma cardíaca, palpitaciones, edema y cianosis',
      porque: [
        'La **disnea cardíaca** es por **congestión pulmonar**: si el ventrículo izquierdo falla, la sangre se acumula en el pulmón y sube la presión capilar. Primero aparece con **esfuerzos cada vez menores**, después al **acostarse** y de noche.',
        'Las **palpitaciones** son la percepción del propio latido: aparecen cuando **cambia bruscamente el ritmo** o cuando el umbral de percepción baja (ansiedad).',
      ],
      bloques: [
        {
          t: 'cuadro',
          titulo: 'Disnea cardíaca',
          head: ['Forma', 'Qué es'],
          filas: [
            ['**De esfuerzo**', 'La primera manifestación de la insuficiencia izquierda; aparece con **esfuerzos cada vez menores** (clase funcional I a IV)'],
            ['**Ortopnea**', 'Al acostarse; duerme con varias almohadas o sentado'],
            ['**Paroxística nocturna**', 'Lo **despierta**, se sienta o se levanta a «tomar aire»; por reabsorción de los edemas al acostarse'],
            ['**Asma cardíaca**', 'Disnea paroxística nocturna **con sibilancias**, por congestión de la pared bronquial'],
            ['**Edema agudo de pulmón**', 'La forma máxima: disnea de reposo, **crepitantes**, tos con **esputo asalmonado**, sudoración fría'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Palpitaciones',
          text: 'Percepción **consciente y desagradable** de los latidos. Causas **cardíacas** (arritmias, valvulopatías), **psiquiátricas** (ansiedad, pánico), **fármacos** (cafeína, β agonistas, cocaína) y otras (anemia, fiebre, **tirotoxicosis**, embarazo).',
          items: [
            'Preguntar: **cómo son** (rápidas o lentas, **regulares o irregulares**), cómo **empiezan y terminan** (bruscas o graduales), qué las desencadena y qué las acompaña (**síncope**, angina, disnea).',
            'Rápidas e **irregulares**: fibrilación auricular. Rápidas y regulares, de comienzo y fin bruscos: taquicardia paroxística.',
          ],
        },
        { t: 'paso', titulo: 'Edema circulatorio y cianosis periférica', items: ['**Edema cardíaco**: de **declive** (tobillos; sacro en cama), **vespertino**, frío, con fóvea; por insuficiencia derecha (↑ presión hidrostática).', '**Cianosis periférica**: por **bajo gasto** (flujo lento): acral, fría, sin lengua, mejora con calor. Detalle en la unidad de signos y síntomas.'] },
      ],
      oral: '«Los motivos de consulta cardiovasculares son el dolor —el ángor—, la disnea, las palpitaciones, el síncope, el edema y la cianosis. La disnea cardíaca se debe a la congestión pulmonar por falla del ventrículo izquierdo: empieza de esfuerzo, ante esfuerzos cada vez menores, después aparece ortopnea y disnea paroxística nocturna, que despierta al paciente y mejora al sentarse; si se acompaña de sibilancias es el asma cardíaca, y la forma extrema es el edema agudo de pulmón, con esputo asalmonado. Las palpitaciones son la percepción consciente de los latidos; interesa si son regulares o irregulares y si empiezan y terminan en forma brusca. El edema cardíaco es de declive y vespertino, y la cianosis de origen cardíaco por bajo gasto es periférica.»',
      repreguntas: [
        { q: '¿Qué es el asma cardíaca?', a: 'Disnea paroxística nocturna con sibilancias por congestión de la pared bronquial en la insuficiencia ventricular izquierda.' },
        { q: '¿Por qué la disnea paroxística aparece de noche?', a: 'Al acostarse se reabsorben los edemas de las piernas, aumenta el retorno venoso y la congestión pulmonar.' },
        { q: '¿Qué palpitaciones sugieren fibrilación auricular?', a: 'Rápidas e irregulares.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 129–131 y 138–139 · Instituto Merlín, «Disnea cardíaca» y «Palpitaciones» · Argente-Álvarez, cap. 27.',
    },
    {
      tema: 'sincope',
      titulo: 'Síncope',
      porque: [
        'El cerebro necesita un **flujo constante**: si la presión cae unos segundos (cae el gasto o cae la resistencia periférica), hay **hipoperfusión cerebral global** y se pierde la conciencia y el tono postural.',
        'Al caer al piso, la cabeza queda a la altura del corazón y el flujo **se recupera solo**: por eso la recuperación es **espontánea, rápida y completa**.',
      ],
      bloques: [
        { t: 'def', text: 'Pérdida **súbita y transitoria** de la conciencia con **pérdida del tono postural** y **recuperación espontánea, rápida y completa**, por **hipoperfusión cerebral global transitoria**. **Lipotimia**: déficit fugaz de la circulación cerebral con pródromos (visión borrosa, sudoración, palidez), con o sin pérdida completa del conocimiento.' },
        {
          t: 'cuadro',
          titulo: 'Causas',
          head: ['Tipo', 'Mecanismo', 'Pistas'],
          filas: [
            ['**Reflejo** (vasovagal, el más frecuente)', 'Bradicardia + vasodilatación', 'Emoción, dolor, venopunción, estar de pie; **pródromos**; joven'],
            ['**Situacional**', 'Reflejo', 'Tos, micción, defecación, deglución'],
            ['**Seno carotídeo**', 'Reflejo', 'Afeitarse, corbata ajustada, girar el cuello'],
            ['**Ortostático**', 'Hipotensión al pararse', 'Al ponerse de pie; deshidratación, fármacos, neuropatía diabética, Parkinson'],
            ['**Cardíaco**', 'Cae el gasto', '**Con el esfuerzo** (estenosis aórtica, miocardiopatía hipertrófica) o **sin pródromos** (arritmias: bradi y taquiarritmias)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Síncope vs convulsión',
          head: ['', 'Síncope', 'Convulsión'],
          filas: [
            ['Inicio', 'Con pródromos (vasovagal) o brusco', 'Brusco, a veces aura'],
            ['Durante', 'Flácido, pálido', '**Movimientos tónico-clónicos**, **mordedura de lengua**, incontinencia'],
            ['Después', '**Recuperación rápida y completa**', '**Confusión posictal** prolongada'],
          ],
        },
        { t: 'ojo', text: 'Síncope **con el esfuerzo** o **sin pródromos** obliga a pensar en causa **cardíaca** (estenosis aórtica, arritmias): es el de peor pronóstico.' },
      ],
      oral: '«El síncope es la pérdida súbita y transitoria de la conciencia con pérdida del tono postural y recuperación espontánea, rápida y completa, por hipoperfusión cerebral global transitoria. La lipotimia es un déficit fugaz con pródromos, que puede no llegar a la pérdida completa del conocimiento. Las causas son reflejas —el vasovagal, el más frecuente, desencadenado por emociones o dolor, con pródromos; el situacional y el del seno carotídeo—, ortostáticas, al ponerse de pie, y cardíacas: obstructivas, como la estenosis aórtica, típicamente con el esfuerzo, y arrítmicas, sin pródromos, que son las de peor pronóstico. Se diferencia de la convulsión porque en ésta hay movimientos tónico-clónicos, mordedura de lengua y confusión posictal.»',
      repreguntas: [
        { q: '¿Qué diferencia un síncope de una crisis convulsiva?', a: 'La convulsión tiene movimientos tónico-clónicos, mordedura de lengua e incontinencia y confusión posictal; el síncope se recupera rápido y completo.' },
        { q: '¿Qué síncope es de peor pronóstico?', a: 'El cardíaco: con el esfuerzo (estenosis aórtica) o sin pródromos (arritmias).' },
        { q: '¿Qué es el síncope situacional?', a: 'El que aparece con la tos, la micción, la defecación o la deglución.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 139–141 · Instituto Merlín, «Palpitaciones, síncope y lipotimia» · Argente-Álvarez, cap. 27-4 y 32-2 · Clase de Ortega mc-neu-1 12:08.',
    },
  ],
  noOlvidar: [
    { q: 'Ángor típico', a: 'Retroesternal, opresivo, irradiado a brazo izquierdo y mandíbula, 3–10 min, con el esfuerzo, cede con reposo y nitroglicerina.' },
    { q: 'Signo de Levine', a: 'Puño cerrado sobre el pecho.' },
    { q: 'Gallavardin', a: 'Dolor > 30 min: pensar en infarto.' },
    { q: 'Estable vs inestable', a: 'Estable: igual en 3 meses. Inestable: reciente, progresiva o de reposo.' },
    { q: 'Dolor pericárdico', a: 'Mejora inclinado hacia adelante; empeora con la inspiración.' },
    { q: 'Disnea cardíaca', a: 'De esfuerzo progresiva → ortopnea → paroxística nocturna → edema agudo de pulmón.' },
    { q: 'Asma cardíaca', a: 'Disnea paroxística nocturna con sibilancias.' },
    { q: 'Síncope', a: 'Pérdida súbita y transitoria de conciencia y tono, recuperación espontánea, rápida y completa; hipoperfusión cerebral global.' },
    { q: 'Síncope más frecuente', a: 'Vasovagal (reflejo).' },
    { q: 'Síncope grave', a: 'Con el esfuerzo (estenosis aórtica) o sin pródromos (arritmia).' },
  ],
};
