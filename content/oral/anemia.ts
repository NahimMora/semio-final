import type { ApunteUnidad } from './tipos';

/*
 * Síndrome anémico e índices hematimétricos — apunte para el oral.
 * Base: apunte de Ortega («Síndrome anémico» pp. 290–296), contrastado con Argente
 * (cap. 60-1 «Síndrome anémico», 61-1 «Hemograma» y parte XVIII, laboratorio).
 * Merlín no tiene una clase de anemia.
 */
export const apunte: ApunteUnidad = {
  unidad: 'anemia',
  temas: [
    {
      tema: 'sx-anemico',
      titulo: 'Síndrome anémico e índices hematimétricos',
      porque: [
        'Con menos hemoglobina llega **menos oxígeno** a los tejidos. El organismo compensa: los tejidos **extraen más oxígeno** de la sangre (de un 25 % hasta un 60 %) y el corazón **late más rápido y eyecta más** (taquicardia, soplo funcional).',
        'Por eso una anemia **lenta** puede tolerarse con cifras bajas, y una **brusca** (hemorragia) da síntomas enseguida: falta volumen además de hemoglobina.',
        'El **tamaño** del glóbulo rojo (VCM) cuenta la historia: si falta **hierro**, la célula se divide sin hemoglobina suficiente y queda **chica** (microcítica); si falta **B12 o folato**, el núcleo no madura y la célula queda **grande** (macrocítica).',
        'Los **reticulocitos** (glóbulos rojos jóvenes) dicen si la médula **responde**: altos = la médula produce, el problema es periférico (hemólisis, sangrado); bajos = la médula no produce.',
      ],
      bloques: [
        { t: 'def', text: 'Conjunto de signos y síntomas por la **disminución de la hemoglobina** por debajo de lo normal, con descenso de los glóbulos rojos y del hematocrito: **Hb < 13 g/dL en el hombre** y **< 12 g/dL en la mujer** (Hto < 40 % y < 36 %); **< 11 g/dL en la embarazada**. No es una enfermedad: es siempre **un signo** de otra.' },
        {
          t: 'cuadro',
          titulo: 'Mecanismos (etiopatogenia)',
          head: ['Mecanismo', 'Ejemplos'],
          filas: [
            ['**Falta de producción** (arregenerativa)', 'Déficit de **hierro**, **B12 o folatos**, **eritropoyetina** (insuficiencia renal), enfermedades crónicas, aplasia, infiltración medular'],
            ['**Aumento de la destrucción** (hemólisis)', '**Intracorpusculares**: esferocitosis, déficit de G6PD, talasemias · **extracorpusculares**: inmunológicas, mecánicas, infecciones, fármacos'],
            ['**Pérdidas** (la causa **más frecuente**)', '**Digestivas** y **ginecológicas**; aguda (hipovolemia) o crónica (ferropenia)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Clínica',
          head: ['', 'Qué buscar'],
          filas: [
            ['**General**', '**Palidez** de piel y mucosas, **astenia**, fatiga, **disnea de esfuerzo**, **taquicardia**, palpitaciones, acúfenos, vértigo; confusión en ancianos'],
            ['**Ferropenia**', '**Coiloniquia** (uñas en cuchara), glositis, queilitis, pelo frágil, **pica**'],
            ['**Déficit de B12**', '**Glositis de Hunter** (lengua roja, lisa, dolorosa), **parestesias**, pérdida de la sensibilidad profunda, trastornos de la marcha'],
            ['**Hemólisis**', '**Ictericia** sin coluria, esplenomegalia'],
            ['**Aplasia**', 'Anemia + **infecciones** + **hemorragias** (petequias)'],
            ['**Pérdida aguda**', 'Hipotensión, ortostatismo, síncope, shock'],
          ],
        },
        { t: 'paso', titulo: 'Examen físico', text: 'Piel y mucosas (palidez, ictericia, petequias), uñas y pelo, lengua, **adenomegalias** y **esplenomegalia**, dolor a la percusión del esternón (**signo de Craven**: infiltración por leucemia), **soplo sistólico eyectivo** funcional, abdomen, **tacto rectal** y examen ginecológico (buscar el sangrado), examen neurológico (B12).' },
        {
          t: 'cuadro',
          titulo: 'Índices',
          head: ['Índice', 'Qué mide', 'Para qué sirve'],
          filas: [
            ['**VCM** (volumen corpuscular medio)', 'Tamaño del glóbulo rojo (fL); normal **80–100 fL**', '**Microcítica** < 80 · **normocítica** 80–100 · **macrocítica** > 100'],
            ['**HCM** (hemoglobina corpuscular media)', 'Cantidad de hemoglobina por glóbulo rojo (pg)', '**Hipocrómica** · normocrómica'],
            ['**CHCM** (concentración de Hb corpuscular media)', 'Proporción del glóbulo rojo ocupada por hemoglobina', 'Hipocrómica · normocrómica'],
            ['**RDW** (ADE)', 'Variación del tamaño', 'Alto = **anisocitosis** (ferropenia)'],
            ['**Reticulocitos**', 'Respuesta de la médula', '**Regenerativa** (altos) · **arregenerativa** (normales o bajos)'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Clasificación morfológica',
          head: ['Tipo', 'Causas'],
          filas: [
            ['**Microcítica hipocrómica**', '**Ferropénica** (la más frecuente), **talasemia**, trastornos crónicos, sideroblástica'],
            ['**Normocítica normocrómica**', '**Trastornos crónicos**, **insuficiencia renal**, **hemorragia aguda**, **hemolíticas** (con reticulocitos altos), aplasia'],
            ['**Macrocítica**', '**Déficit de B12** (megaloblástica, anemia perniciosa) y de **ácido fólico**; alcoholismo, hepatopatía, hipotiroidismo'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Ferropénica vs trastornos crónicos',
          head: ['', 'Ferropénica', 'Trastornos crónicos'],
          filas: [
            ['Ferremia', '**Baja**', 'Baja o normal'],
            ['Transferrina', '**Alta**', 'Baja'],
            ['Saturación', '**Baja** (< 16 %)', 'Normal o baja'],
            ['**Ferritina** (el mejor parámetro)', '**Baja**', '**Normal o alta**'],
          ],
        },
        { t: 'ojo', text: 'Patrón típico de la **ferropénica**: microcítica, hipocrómica, **RDW alto**, reticulocitos bajos, **ferritina baja** y **transferrina alta**.' },
      ],
      oral: '«El síndrome anémico es el conjunto de signos y síntomas por la disminución de la hemoglobina por debajo de lo normal: menos de 13 gramos por decilitro en el hombre y de 12 en la mujer. No es una enfermedad sino un signo. Se produce por tres mecanismos: falta de producción, por déficit de hierro, B12, folatos o eritropoyetina, o falla medular; aumento de la destrucción, que son las hemolíticas; y pérdidas, que son la causa más frecuente. El organismo compensa aumentando la extracción de oxígeno y el gasto cardíaco. La clínica general es palidez, astenia, disnea de esfuerzo, taquicardia y palpitaciones, y hay signos según la causa: coiloniquia y glositis en la ferropenia, glositis de Hunter y parestesias en el déficit de B12, ictericia en la hemólisis. Al examen busco además adenomegalias, esplenomegalia, soplo funcional y el origen del sangrado. «Los índices hematimétricos se calculan en el hemograma. El VCM es el tamaño del glóbulo rojo, normal entre 80 y 100 femtolitros; la HCM es la cantidad de hemoglobina por glóbulo rojo y la CHCM su concentración, que definen si es hipocrómica; el RDW mide la variación del tamaño, y los reticulocitos dicen si la médula responde. Así las anemias se clasifican en microcíticas hipocrómicas, como la ferropénica —la más frecuente— y la talasemia; normocíticas normocrómicas, como la de los trastornos crónicos, la insuficiencia renal, la hemorragia aguda y las hemolíticas; y macrocíticas, por déficit de B12 o ácido fólico. Por los reticulocitos son regenerativas, con reticulocitos altos, o arregenerativas. La ferropénica se confirma con ferritina baja y transferrina alta.»',
      repreguntas: [
        { q: '¿Cuál es la causa más frecuente de anemia?', a: 'Las pérdidas de sangre (digestivas y ginecológicas), que llevan a la ferropenia.' },
        { q: '¿Cómo compensa el organismo la anemia?', a: 'Aumentando la extracción tisular de oxígeno y el gasto cardíaco (taquicardia, mayor volumen sistólico).' },
        { q: '¿Qué es la coiloniquia?', a: 'Uñas cóncavas, «en cuchara»: anemia ferropénica.' },
        { q: '¿Qué te indica un VCM de 70 fL?', a: 'Anemia microcítica: ferropénica, talasemia o trastornos crónicos.' },
        { q: '¿Qué te dicen los reticulocitos altos?', a: 'La médula responde: hemólisis o sangrado agudo (regenerativa).' },
        { q: '¿Cuál es el mejor parámetro para la ferropenia?', a: 'La ferritina sérica, baja.' },
        { q: '¿Cómo diferenciás ferropénica de trastornos crónicos?', a: 'Ferritina baja y transferrina alta en la ferropénica; ferritina normal o alta y transferrina baja en la de trastornos crónicos.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 290–294 · Argente-Álvarez, cap. 60-1 y 61-1 (hemograma).',
    },
  ],
  noOlvidar: [
    { q: 'Definición', a: 'Hb < 13 (hombre), < 12 (mujer), < 11 (embarazada). Es un signo, no una enfermedad.' },
    { q: 'Mecanismos', a: 'Falta de producción · destrucción (hemólisis) · pérdidas (la más frecuente).' },
    { q: 'Compensación', a: '↑ extracción de O₂ y ↑ gasto cardíaco.' },
    { q: 'Clínica', a: 'Palidez, astenia, disnea de esfuerzo, taquicardia, palpitaciones, soplo funcional.' },
    { q: 'Signos por causa', a: 'Coiloniquia (hierro) · glositis de Hunter y parestesias (B12) · ictericia (hemólisis).' },
    { q: 'VCM', a: '< 80 micro · 80–100 normo · > 100 macro.' },
    { q: 'Ferropénica', a: 'Micro-hipo, RDW alto, ferritina baja, transferrina alta.' },
    { q: 'Reticulocitos', a: 'Altos = regenerativa (hemólisis, sangrado) · bajos = arregenerativa.' },
  ],
};
