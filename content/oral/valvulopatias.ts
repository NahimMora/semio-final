import type { ApunteUnidad } from './tipos';

/*
 * Valvulopatías — apunte para el oral.
 * Base: apunte de Ortega («Valvulopatías» pp. 196–206) y Merlín («Valvulopatías», «Soplos»),
 * contrastados con Argente cap. 30-4.
 */
export const apunte: ApunteUnidad = {
  unidad: 'valvulopatias',
  intro: {
    titulo: 'Las cuatro valvulopatías en un cuadro',
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'Estenosis mitral', 'Insuficiencia mitral', 'Estenosis aórtica', 'Insuficiencia aórtica'],
        filas: [
          ['**Sobrecarga**', 'Aurícula izquierda → **pulmón** (presión)', 'AI y VI de **volumen**', 'VI de **presión** (hipertrofia concéntrica)', 'VI de **volumen** (dilatación)'],
          ['**Causa principal**', '**Fiebre reumática**', 'Prolapso, reumática, isquémica', '**Degenerativa** (ancianos), **bicúspide** (jóvenes), reumática', 'Reumática, raíz aórtica, endocarditis'],
          ['**Síntoma clave**', 'Disnea, **hemoptisis**, palpitaciones (FA)', 'Disnea, fatiga', '**Ángor, síncope, disnea**', 'Disnea; **signos periféricos**'],
          ['**Pulso**', 'Normal (irregular si FA)', 'Celer y parvus', '**Parvus et tardus**', '**Saltón** (magnus et celer)'],
          ['**Choque de la punta**', 'En resorte', 'Desplazado, amplio, breve', '**Sostenido**, no desplazado', '**Desplazado abajo y afuera**, amplio'],
          ['**Ruidos**', '**R1 intenso**, **chasquido de apertura**', 'R1 ↓, R3', 'R2 ↓ (A2), **R4**', 'R1 y R2 ↓, R3'],
          ['**Soplo**', '**Diastólico**: **rolido** grave en la punta (campana)', '**Sistólico** holosistólico en la punta → **axila**', '**Sistólico** eyectivo romboidal, foco aórtico → **cuello**', '**Diastólico aspirativo**, decreciente, 3.º–4.º EII (sentado inclinado)'],
        ],
      },
      { t: 'ojo', text: 'Regla para no confundirse: **la estenosis se oye cuando la válvula debería estar abierta** (mitral: diástole; aórtica: sístole) y **la insuficiencia, cuando debería estar cerrada** (mitral: sístole; aórtica: diástole).' },
    ],
  },
  temas: [
    {
      tema: 'estenosis-mitral',
      titulo: 'Estenosis mitral',
      porque: [
        'La mitral estrecha (en general por **fiebre reumática**) dificulta el paso de la aurícula al ventrículo en la **diástole**: la **aurícula izquierda** sube su presión y se **dilata**.',
        'Esa presión se transmite **hacia atrás**: **congestión pulmonar** (disnea), venas bronquiales que se rompen (**hemoptisis**), **hipertensión pulmonar** y falla del VD. La aurícula dilatada fibrila (**FA**) y forma **trombos** (embolias).',
        'Las valvas quedan muy abiertas al final de la diástole y cierran «de un portazo»: **R1 intenso**; al abrirse rígidas, **chasquido de apertura**; el chorro por el orificio estrecho, **rolido**.',
      ],
      bloques: [
        { t: 'def', text: 'Obstrucción al **llenado del ventrículo izquierdo** por una alteración estructural de la válvula mitral. Área normal **4–6 cm²**; severa **< 1 cm²**.' },
        { t: 'clave', titulo: 'Tríada', items: ['**Disnea · hemoptisis · palpitaciones** (fibrilación auricular).', 'Además: **embolias** (sobre todo con FA), fatiga, signos de insuficiencia derecha.'] },
        { t: 'paso', titulo: 'Examen físico', items: ['**Facies mitral**: mejillas rubicundas y labios cianóticos.', 'Pulso normal (irregular si hay FA). Choque de la punta «**en resorte**», **R1 palpable**; frémito diastólico.', '**Auscultación**: **R1 intenso**, **chasquido de apertura** después del R2, **rolido diastólico** en la punta con **campana** en **Pachón**, con **refuerzo presistólico** (si hay ritmo sinusal). Con hipertensión pulmonar, **P2 aumentado**.'] },
        { t: 'paso', titulo: 'Estudios', text: 'ECG: **onda P mitral** (bífida, > 0,10 s), FA. Rx: agrandamiento de la **aurícula izquierda**, congestión, **líneas B de Kerley**. **Ecocardiograma**: confirma y mide el área.' },
      ],
      oral: '«La estenosis mitral es la obstrucción al llenado del ventrículo izquierdo por una alteración de la válvula, casi siempre por fiebre reumática, más frecuente en mujeres jóvenes. La presión de la aurícula izquierda sube y se transmite al pulmón: congestión, hipertensión pulmonar y finalmente falla del ventrículo derecho; la aurícula dilatada fibrila y forma trombos. Su tríada es disnea, hemoptisis y palpitaciones, con riesgo de embolias. Al examen hay facies mitral, R1 intenso, chasquido de apertura y un rolido diastólico en la punta que se oye con la campana en decúbito lateral izquierdo, con refuerzo presistólico. El ECG muestra onda P mitral y el ecocardiograma confirma el diagnóstico.»',
      repreguntas: [
        { q: '¿Por qué la estenosis mitral da hemoptisis?', a: 'Por la hipertensión venocapilar pulmonar: se rompen venas bronquiales dilatadas.' },
        { q: '¿Qué es el chasquido de apertura?', a: 'El ruido de la mitral rígida al abrirse, poco después del R2.' },
        { q: '¿Por qué el refuerzo presistólico desaparece en la fibrilación auricular?', a: 'Porque se debe a la contracción auricular, que en la FA no existe.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 196–198 · Instituto Merlín, «Valvulopatías» · Argente-Álvarez, cap. 30-4.',
    },
    {
      tema: 'insuf-mitral',
      titulo: 'Insuficiencia mitral',
      porque: [
        'La mitral no cierra en la **sístole**: parte de la sangre del VI **vuelve a la aurícula** en vez de ir a la aorta. Hay una **sobrecarga de volumen** de la aurícula y del ventrículo izquierdos, que se **dilatan**.',
        'Mientras el ventrículo se adapta, el paciente está **asintomático** años; cuando claudica, aparecen fatiga y disnea. La forma **aguda** (rotura de cuerda o de músculo papilar) da **edema agudo de pulmón** de golpe.',
      ],
      bloques: [
        { t: 'def', text: 'Incompetencia del aparato valvular mitral (anillo, valvas, cuerdas, músculos papilares) que permite el **reflujo de sangre del VI a la AI durante la sístole**.' },
        { t: 'paso', titulo: 'Causas', text: '**Prolapso valvular** (la más frecuente), **fiebre reumática**, calcificación del anillo, **endocarditis**, rotura de cuerdas o músculo papilar (**infarto**), dilatación del VI (miocardiopatía dilatada).' },
        { t: 'paso', titulo: 'Examen físico', items: ['Pulso **celer y parvus**.', 'Choque de la punta **amplio, desplazado** hacia afuera, **breve**; frémito sistólico en la punta en las formas graves.', '**Auscultación**: **R1 disminuido**, **R3**, **soplo holosistólico** en la punta, en meseta, irradiado a la **axila**.'] },
      ],
      oral: '«La insuficiencia mitral es la incompetencia del aparato valvular mitral que permite el reflujo de sangre del ventrículo a la aurícula izquierda durante la sístole. Las causas son el prolapso, la fiebre reumática, la endocarditis, la rotura de cuerdas o del músculo papilar en el infarto y la dilatación del ventrículo. Produce una sobrecarga de volumen que dilata la aurícula y el ventrículo izquierdos; la forma crónica es asintomática durante años hasta que aparecen fatiga y disnea, y la aguda da edema agudo de pulmón. Al examen el choque de la punta está desplazado y es amplio, el R1 está disminuido, puede haber R3 y se ausculta un soplo holosistólico en la punta irradiado a la axila.»',
      repreguntas: [
        { q: '¿Hacia dónde se irradia el soplo de la insuficiencia mitral?', a: 'Hacia la axila.' },
        { q: '¿Qué causa una insuficiencia mitral aguda?', a: 'Rotura de una cuerda tendinosa o de un músculo papilar (infarto) o endocarditis: da edema agudo de pulmón.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 198–200 · Instituto Merlín, «Valvulopatías» y «Soplos» · Argente-Álvarez, cap. 30-4.',
    },
    {
      tema: 'estenosis-aortica',
      titulo: 'Estenosis aórtica',
      porque: [
        'La aórtica estrecha obliga al VI a generar **más presión** para eyectar: **sobrecarga de presión** → **hipertrofia concéntrica**. Un músculo más grueso consume más oxígeno y recibe menos: **ángor**.',
        'El gasto no puede aumentar con el **esfuerzo**: cae la perfusión cerebral → **síncope de esfuerzo**. Cuando el ventrículo hipertrofiado y rígido falla: **disnea**.',
        'La onda de pulso sale por un orificio chico: **parvus et tardus**; el chorro turbulento hacia la aorta: **soplo sistólico eyectivo** que sube al **cuello**.',
      ],
      bloques: [
        { t: 'def', text: 'Obstrucción a la **eyección del ventrículo izquierdo** (valvular, subvalvular o supravalvular). Es la **valvulopatía más frecuente**.' },
        { t: 'paso', titulo: 'Causas', text: '**Degenerativa** por calcificación (ancianos; factores de riesgo: dislipidemia, diabetes) · **válvula bicúspide** congénita (jóvenes) · fiebre reumática.' },
        { t: 'clave', titulo: 'Tríada (y pronóstico)', items: ['**Ángor · síncope de esfuerzo · disnea**.', 'Sobrevida promedio una vez que aparecen: **ángor 5 años · síncope 3 · disnea 2**. Los síntomas indican el **reemplazo valvular**.'] },
        { t: 'paso', titulo: 'Examen físico', items: ['Pulso **parvus et tardus**; presión diferencial disminuida.', 'Choque de la punta **sostenido**, en general **no desplazado** (hipertrofia concéntrica); frémito sistólico en el 2.º EID.', '**Auscultación**: **soplo sistólico eyectivo, romboidal, rudo**, en el **foco aórtico**, irradiado al **cuello**; **A2 disminuido**, desdoblamiento paradójico; **R4**.'] },
      ],
      oral: '«La estenosis aórtica es la obstrucción a la eyección del ventrículo izquierdo; es la valvulopatía más frecuente, en general degenerativa en ancianos o por válvula bicúspide en jóvenes. Produce una sobrecarga de presión con hipertrofia concéntrica. Su tríada es ángor, síncope de esfuerzo y disnea; cuando aparecen los síntomas la sobrevida es de cinco años con angina, tres con síncope y dos con disnea, y está indicado el reemplazo valvular. Al examen el pulso es parvus et tardus, el choque de la punta es sostenido, el segundo ruido está disminuido, hay R4 y un soplo sistólico eyectivo, romboidal y rudo en el foco aórtico que se irradia al cuello.»',
      repreguntas: [
        { q: '¿Cuál es la tríada de la estenosis aórtica?', a: 'Ángor, síncope de esfuerzo y disnea.' },
        { q: '¿Por qué da ángor si las coronarias son normales?', a: 'La hipertrofia aumenta el consumo de oxígeno y el aporte no alcanza.' },
        { q: '¿Por qué el síncope aparece con el esfuerzo?', a: 'El orificio fijo impide aumentar el gasto: cae la perfusión cerebral.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 200–201 · Instituto Merlín, «Valvulopatías» · Argente-Álvarez, cap. 30-4.',
    },
    {
      tema: 'insuf-aortica',
      titulo: 'Insuficiencia aórtica',
      porque: [
        'La aórtica no cierra en la **diástole**: la sangre **vuelve de la aorta al VI**. El ventrículo recibe el volumen normal **más el que regurgita**: **sobrecarga de volumen**, se dilata y eyecta un volumen enorme.',
        'Por eso la **sistólica sube** (mucho volumen eyectado) y la **diastólica baja** (la aorta se vacía hacia atrás): **presión diferencial amplia**. De ahí salen todos los **signos periféricos**: pulsos saltones, la cabeza que se mueve, el pulso capilar.',
      ],
      bloques: [
        { t: 'def', text: '**Reflujo de sangre desde la aorta al ventrículo izquierdo en la diástole** a través de una válvula incompetente, por lesión de las valvas o de la **raíz aórtica**.' },
        { t: 'paso', titulo: 'Causas', text: '**Fiebre reumática**, válvula bicúspide, **endocarditis** (aguda), dilatación de la raíz aórtica (**Marfan**, HTA, aortitis sifilítica), **disección aórtica** (aguda).' },
        {
          t: 'cuadro',
          titulo: 'Signos periféricos (por la presión diferencial amplia)',
          head: ['Signo', 'Qué es'],
          filas: [
            ['**Corrigan**', 'Pulso **saltón**, «martillo de agua»; **baile arterial** carotídeo'],
            ['**Musset**', 'La **cabeza se mueve** con cada latido'],
            ['**Quincke**', '**Pulso capilar** en el lecho ungueal'],
            ['**Müller**', 'Latido de la **úvula**'],
            ['**Landolfi**', 'La **pupila** se dilata en cada sístole'],
            ['**Hill**', 'Sistólica en las piernas **≥ 30 mmHg mayor** que en los brazos'],
          ],
        },
        { t: 'paso', titulo: 'Examen cardíaco', items: ['Choque de la punta **desplazado abajo y a la izquierda**, amplio (latido diagonal).', '**Soplo diastólico aspirativo**, de alta frecuencia, decreciente, en el **3.º–4.º espacio paraesternal izquierdo**; se oye mejor **sentado e inclinado hacia adelante, en espiración** (Azoulay).', 'Soplo de **Austin Flint**: rolido en la punta por estenosis mitral relativa (insuficiencia aórtica grave).'] },
      ],
      oral: '«La insuficiencia aórtica es el reflujo de sangre de la aorta al ventrículo izquierdo durante la diástole, por lesión de las valvas —fiebre reumática, válvula bicúspide, endocarditis— o de la raíz aórtica —Marfan, HTA, disección—. Produce una sobrecarga de volumen que dilata el ventrículo; eyecta mucho volumen, sube la sistólica y baja la diastólica, con presión diferencial amplia. Eso explica los signos periféricos: el pulso saltón de Corrigan, el signo de Musset, el pulso capilar de Quincke, el de Müller en la úvula y el de Hill. El choque de la punta está desplazado abajo y a la izquierda y se ausculta un soplo diastólico aspirativo, decreciente, en el tercer y cuarto espacio paraesternal izquierdo, mejor con el paciente sentado e inclinado hacia adelante. Puede haber un soplo de Austin Flint.»',
      repreguntas: [
        { q: '¿Por qué la presión diferencial es amplia?', a: 'Sube la sistólica (mucho volumen eyectado) y baja la diastólica (la aorta se vacía hacia el ventrículo).' },
        { q: '¿Qué es el signo de Musset? ¿Y el de Quincke?', a: 'Musset: la cabeza se mueve con cada latido. Quincke: pulso capilar ungueal.' },
        { q: '¿Qué es el soplo de Austin Flint?', a: 'Un rolido en la punta por estenosis mitral relativa: el chorro regurgitante impide abrir bien la mitral.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 202–204 · Instituto Merlín, «Valvulopatías» · Argente-Álvarez, cap. 30-4.',
    },
  ],
  noOlvidar: [
    { q: 'Estenosis vs insuficiencia', a: 'La estenosis suena cuando la válvula debería estar abierta; la insuficiencia, cuando debería estar cerrada.' },
    { q: 'Tríada de la estenosis mitral', a: 'Disnea, hemoptisis, palpitaciones (FA).' },
    { q: 'Estenosis mitral: auscultación', a: 'R1 intenso, chasquido de apertura, rolido diastólico en la punta (campana, Pachón), refuerzo presistólico.' },
    { q: 'Insuficiencia mitral', a: 'Soplo holosistólico en la punta → axila; R1 ↓; R3.' },
    { q: 'Tríada de la estenosis aórtica', a: 'Ángor, síncope de esfuerzo, disnea (sobrevida 5, 3 y 2 años).' },
    { q: 'Estenosis aórtica: examen', a: 'Pulso parvus et tardus, punta sostenida, soplo sistólico eyectivo rudo → cuello, R4.' },
    { q: 'Insuficiencia aórtica: signos', a: 'Corrigan, Musset, Quincke, Müller, Landolfi, Hill; presión diferencial amplia.' },
    { q: 'Insuficiencia aórtica: soplo', a: 'Diastólico aspirativo decreciente, 3.º–4.º EII, sentado inclinado; Austin Flint.' },
    { q: 'Causa principal', a: 'Estenosis mitral: reumática · estenosis aórtica: degenerativa/bicúspide.' },
  ],
};
