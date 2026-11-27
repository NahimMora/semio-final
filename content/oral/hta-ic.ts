import type { ApunteUnidad } from './tipos';

/*
 * Hipertensión arterial e insuficiencia cardíaca — apunte para el oral.
 * Base: apunte de Ortega («Hipertensión arterial» pp. 176–180, «Insuficiencia cardíaca» pp. 188–195)
 * y Merlín («HTA», «Insuficiencia cardíaca»), contrastados con Argente cap. 30-2.
 */
export const apunte: ApunteUnidad = {
  unidad: 'hta-ic',
  temas: [
    {
      tema: 'hta',
      titulo: 'Hipertensión arterial',
      porque: [
        'La presión depende del **gasto cardíaco × resistencia periférica**. En la HTA, el aumento sostenido de la presión daña de a poco las arterias de los **órganos blancos**: cerebro, corazón, riñón, retina y vasos periféricos.',
        'Al principio **no da síntomas** («asesina silenciosa»): se descubre al medirla, o por el daño que ya causó.',
      ],
      bloques: [
        { t: 'def', text: 'Aumento **sostenido** de la presión arterial sistólica **≥ 140 mmHg** y/o diastólica **≥ 90 mmHg**. No se diagnostica con una sola toma: se confirma con **mediciones repetidas** en distintos días (o con MAPA/AMPA).' },
        {
          t: 'cuadro',
          titulo: 'Clasificación (Merlín)',
          head: ['Categoría', 'PAS (mmHg)', 'PAD (mmHg)'],
          filas: [
            ['Normal', '< 130', '< 85'],
            ['Normal alta', '130–139', '85–89'],
            ['**HTA grado 1**', '140–159', '90–99'],
            ['**HTA grado 2**', '160–179', '100–109'],
            ['**HTA grado 3**', '**≥ 180**', '**≥ 110**'],
          ],
        },
        { t: 'ojo', text: 'El apunte de Ortega usa la clasificación del **JNC 7**: normal < 120/80, prehipertensión 120–139/80–89, estadio I 140–159/90–99, estadio II ≥ 160/≥ 100. En ambas, **HTA = ≥ 140/90**.' },
        {
          t: 'cuadro',
          titulo: 'Clasificación etiológica',
          head: ['', 'Qué es', 'Ejemplos'],
          filas: [
            ['**Primaria** o esencial', '**95 %**: sin causa identificable; multifactorial', 'Herencia, sodio, obesidad, sedentarismo, estrés, alcohol'],
            ['**Secundaria**', '**5 %**: causa conocida', '**Renal** (parenquimatosa, **renovascular**), **endocrina** (Cushing, **hiperaldosteronismo**, **feocromocitoma**, tiroides), **coartación de aorta**, fármacos (ACO, AINE, corticoides), apnea del sueño'],
          ],
        },
        { t: 'paso', titulo: 'Sospechar HTA secundaria', items: ['Comienzo **antes de los 35 o después de los 60** años, comienzo brusco o HTA **resistente**.', '**Soplo abdominal** (renovascular) · **hipopotasemia** (hiperaldosteronismo) · **crisis** con palpitaciones, sudoración y cefalea (feocromocitoma) · **pulsos femorales débiles** y presión baja en las piernas (coartación).'] },
        {
          t: 'cuadro',
          titulo: 'Clínica: daño de órgano blanco',
          head: ['Órgano', 'Qué produce'],
          filas: [
            ['Asintomática', 'Lo más frecuente; síntoma más común: **cefalea** occipital (con cifras muy altas)'],
            ['**Corazón**', '**Hipertrofia ventricular izquierda**, cardiopatía isquémica, **insuficiencia cardíaca**'],
            ['**Cerebro**', '**ACV**, AIT'],
            ['**Riñón**', '**Nefropatía** (nicturia), insuficiencia renal'],
            ['**Retina**', '**Retinopatía hipertensiva** (fondo de ojo)'],
            ['**Arterias**', 'Enfermedad vascular periférica (claudicación intermitente)'],
          ],
        },
        { t: 'paso', titulo: 'Crisis hipertensiva', items: ['**Urgencia**: PAS > 180 o PAD > 120 **sin daño agudo** de órgano blanco → descenso en 24–48 h.', '**Emergencia**: con **daño agudo** de órgano blanco (ACV, edema agudo de pulmón, disección) → descenso **inmediato**.'] },
      ],
      oral: '«La hipertensión arterial es el aumento sostenido de la presión arterial, sistólica igual o mayor a 140 y/o diastólica igual o mayor a 90 milímetros de mercurio, confirmado en mediciones repetidas. Se clasifica por cifras en grados 1, 2 y 3, y por su etiología en primaria o esencial, que es el 95 %, multifactorial, y secundaria, el 5 %, de causa renal, endocrina —como Cushing, hiperaldosteronismo o feocromocitoma—, coartación de aorta o fármacos. Habitualmente es asintomática; el síntoma más frecuente es la cefalea. Su importancia está en el daño de órganos blancos: hipertrofia ventricular izquierda e insuficiencia cardíaca, cardiopatía isquémica, ACV, nefropatía y retinopatía. La crisis hipertensiva es urgencia si no hay daño agudo de órgano blanco y emergencia si lo hay.»',
      repreguntas: [
        { q: '¿Con una toma de 150/95 ya diagnosticás HTA?', a: 'No: hay que confirmarla con mediciones repetidas en distintos días (o MAPA).' },
        { q: '¿Cuándo sospechás una HTA secundaria?', a: 'En jóvenes o después de los 60, comienzo brusco, HTA resistente, hipopotasemia, soplo abdominal, pulsos femorales débiles o crisis adrenérgicas.' },
        { q: '¿Qué diferencia una urgencia de una emergencia hipertensiva?', a: 'La emergencia tiene daño agudo de órgano blanco y requiere descenso inmediato.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 176–180 · Instituto Merlín, «Hipertensión arterial» · Argente-Álvarez, cap. 30-7.',
    },
    {
      tema: 'ic',
      titulo: 'Insuficiencia cardíaca',
      porque: [
        'Cuando el corazón no bombea lo suficiente, el organismo **compensa**: activa el **simpático** (taquicardia, vasoconstricción) y el **SRAA** (retiene sodio y agua). A corto plazo sostiene la presión; a largo plazo **sobrecarga más al corazón** y lo empeora.',
        'La sangre que el ventrículo no puede expulsar **se acumula atrás**: si falla el **izquierdo**, en el **pulmón** (disnea, crepitantes); si falla el **derecho**, en las **venas sistémicas** (yugulares, hígado, edemas). Y **adelante** llega poco: fatiga, oliguria.',
      ],
      bloques: [
        { t: 'def', text: 'Síndrome clínico con **síntomas típicos** (disnea, fatiga) y **signos** (edemas, crepitantes, ingurgitación yugular) causado por una alteración **estructural o funcional** del corazón que reduce el **gasto cardíaco** o eleva las **presiones de llenado**, en reposo o en esfuerzo.' },
        {
          t: 'cuadro',
          titulo: 'Clasificación',
          head: ['Criterio', 'Tipos'],
          filas: [
            ['**Fracción de eyección**', '**Reducida** (< 40 %, falla sistólica: coronaria, miocardiopatía dilatada, Chagas) · **conservada** (falla **diastólica**: hipertrofia por HTA, ventrículo rígido)'],
            ['**Evolución**', '**Aguda** (instalación rápida, edema agudo de pulmón) · **crónica**'],
            ['**Lado**', '**Izquierda** · **derecha** · global'],
            ['**Capacidad funcional (NYHA)**', '**I** sin limitación · **II** síntomas con actividad habitual · **III** con actividad menor que la habitual · **IV** en reposo'],
            ['**Estadios**', '**A** factores de riesgo · **B** cardiopatía estructural sin síntomas · **C** con síntomas · **D** refractaria'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Izquierda vs derecha',
          head: ['', 'IC izquierda', 'IC derecha'],
          filas: [
            ['Dónde se acumula', '**Pulmón**', '**Circulación sistémica**'],
            ['Síntomas', '**Disnea** de esfuerzo → **ortopnea** → **DPN** → **edema agudo de pulmón**; tos', 'Edemas, dolor en hipocondrio derecho, distensión abdominal'],
            ['Signos', '**Crepitantes** bibasales, **R3**, galope, pulso alternante, choque desplazado', '**Ingurgitación yugular**, **reflujo hepatoyugular**, **hepatomegalia**, **edemas** con fóvea, ascitis'],
            ['Causa más frecuente', 'Cardiopatía isquémica, **HTA**, valvulopatías', '**La IC izquierda**; puro: **cor pulmonale** (EPOC, TEP)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Criterios de Framingham',
          head: ['Mayores', 'Menores'],
          filas: [
            ['**Disnea paroxística nocturna**', 'Disnea de esfuerzo'],
            ['**Estertores crepitantes**', '**Edemas** de miembros inferiores'],
            ['**Cardiomegalia** (radiografía)', 'Derrame pleural'],
            ['**Ingurgitación yugular** / presión venosa aumentada', 'Tos nocturna'],
            ['**Reflujo hepatoyugular**', 'Taquicardia (> 120 lpm)'],
            ['**Tercer ruido**', ''],
            ['**Edema agudo de pulmón**', ''],
          ],
        },
        { t: 'clave', titulo: 'Diagnóstico', items: ['Es **clínico**: **2 mayores**, o **1 mayor + 2 menores** (Merlín y Argente agregan **3 menores**).', 'Regla para los mayores: **DECIRTE** — **D**isnea paroxística nocturna, **E**stertores, **C**ardiomegalia, **I**ngurgitación yugular, **R**eflujo hepatoyugular, **T**ercer ruido, **E**dema agudo de pulmón.', 'Estudios: **ECG**, **radiografía** (cardiomegalia, congestión), **ecocardiograma** (fracción de eyección), **BNP / NT-proBNP** elevados.'] },
      ],
      oral: '«La insuficiencia cardíaca es un síndrome clínico con síntomas típicos, como disnea y fatiga, y signos, como edemas y crepitantes, causado por una alteración estructural o funcional del corazón que reduce el gasto o eleva las presiones de llenado. Ante la caída del gasto se activan el simpático y el sistema renina-angiotensina-aldosterona, que compensan al principio y luego empeoran la función. Se clasifica según la fracción de eyección en reducida o conservada, en aguda o crónica, en izquierda o derecha, y funcionalmente por la NYHA en clases I a IV. En la izquierda la sangre se acumula en el pulmón: disnea de esfuerzo, ortopnea, disnea paroxística nocturna, edema agudo de pulmón, crepitantes y R3. En la derecha, en la circulación sistémica: ingurgitación yugular, reflujo hepatoyugular, hepatomegalia y edemas; su causa más frecuente es la izquierda. El diagnóstico es clínico, con los criterios de Framingham: dos mayores, o uno mayor y dos menores.»',
      repreguntas: [
        { q: '¿Cuáles son los criterios mayores de Framingham?', a: 'Disnea paroxística nocturna, estertores, cardiomegalia, ingurgitación yugular, reflujo hepatoyugular, tercer ruido, edema agudo de pulmón.' },
        { q: '¿Cuál es la causa más frecuente de IC derecha?', a: 'La insuficiencia cardíaca izquierda.' },
        { q: '¿Qué es la clase III de la NYHA?', a: 'Síntomas con actividades menores que las habituales; cómodo en reposo.' },
        { q: '¿Qué es el cor pulmonale?', a: 'Insuficiencia derecha por una enfermedad pulmonar con hipertensión pulmonar (EPOC; agudo en el TEP masivo).' },
      ],
      fuentes: 'Apunte de Ortega, pp. 188–195 · Instituto Merlín, «Insuficiencia cardíaca» · Argente-Álvarez, cap. 30-2 (cuadro 30-2-7, Framingham).',
    },
  ],
  noOlvidar: [
    { q: 'HTA', a: '≥ 140/90 sostenida, confirmada en tomas repetidas.' },
    { q: 'Primaria vs secundaria', a: '95 % esencial · 5 % secundaria (renal, endocrina, coartación, fármacos).' },
    { q: 'Órganos blancos', a: 'Corazón (HVI, IC), cerebro (ACV), riñón, retina, arterias.' },
    { q: 'Urgencia vs emergencia', a: 'Emergencia = daño agudo de órgano blanco.' },
    { q: 'IC: mecanismos compensadores', a: 'Simpático y SRAA: compensan y después empeoran.' },
    { q: 'IC izquierda', a: 'Pulmón: disnea, ortopnea, DPN, EAP, crepitantes, R3.' },
    { q: 'IC derecha', a: 'Sistémica: yugulares, reflujo hepatoyugular, hepatomegalia, edemas. Causa: la izquierda.' },
    { q: 'NYHA', a: 'I sin límite · II actividad habitual · III menor que la habitual · IV reposo.' },
    { q: 'Framingham', a: 'DECIRTE (mayores). 2 mayores o 1 mayor + 2 menores.' },
  ],
};
