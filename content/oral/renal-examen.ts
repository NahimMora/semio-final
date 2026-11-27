import type { ApunteUnidad } from './tipos';

/*
 * Examen renal, orina e infección urinaria — apunte para el oral.
 * Base: apunte de Ortega («Examen físico nefrourológico» pp. 459–460, «Análisis de la orina y sedimento» pp. 415–417,
 * «Infección urinaria» pp. 420–422), contrastado con Argente cap. 47, 48-5 y 49-1. Merlín no tiene clases de renal.
 */
export const apunte: ApunteUnidad = {
  unidad: 'renal-examen',
  temas: [
    {
      tema: 'ef-renal',
      titulo: 'Examen físico renal',
      porque: [
        'Los riñones son **retroperitoneales y profundos**: casi no se ven ni se palpan. Por eso se palpan **entre dos manos**, una adelante y otra en la **fosa lumbar** empujándolos hacia la primera (**peloteo**).',
        'Como están pegados al diafragma, **bajan en la inspiración**: el riñón se palpa esperándolo en la inspiración profunda.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Examen general', text: '**Edemas**: periorbitario leve (**nefrítico**) o blando, con fóvea y declive hasta anasarca (**nefrótico**). Piel pálida-amarillenta, equimosis y rascado (**uremia**). Siempre **presión arterial**.' },
        {
          t: 'cuadro',
          titulo: 'Palpación bimanual',
          head: ['Maniobra', 'Posición', 'Cómo'],
          filas: [
            ['**Guyon** (peloteo)', 'Decúbito dorsal', 'Mano posterior en el **ángulo costomuscular** empuja en forma intermitente; la anterior, por fuera del recto, percibe el **peloteo**'],
            ['**Israel**', 'Decúbito **lateral** contrario al riñón explorado', 'Bimanual, esperando en la inspiración'],
            ['**Montenegro**', 'Decúbito **ventral**', 'La mano anterior empuja hacia arriba; la lumbar percibe el **choque**'],
            ['**Glénard**', 'Decúbito dorsal', 'Pinza bajo el reborde en la inspiración: si queda retenido = **ptosis renal**'],
          ],
        },
        { t: 'paso', titulo: 'Normal', text: 'En delgados puede palparse el **polo inferior del riñón derecho**: elástico, profundo, con **peloteo**, que baja con la inspiración.' },
        { t: 'paso', titulo: 'Percusión y puntos', items: ['**Puñopercusión lumbar** (Murphy con el puño, Giordano con el borde cubital): normalmente indolora; **dolor** en **pielonefritis**, **litiasis**, tumor.', '**Puntos renoureterales**: costovertebral (Guyon) y costomuscular por detrás; ureterales superior, medio e inferior (este por tacto rectal o vaginal).', '**Auscultación**: soplo periumbilical o lumbar = **estenosis de la arteria renal**.'] },
        { t: 'maniobras', ids: ['rinon-guyon', 'rinon-montenegro', 'rinon-israel', 'rinon-glenard', 'punopercusion-lumbar', 'puntos-renoureterales'] },
      ],
      oral: '«El examen renal empieza por el examen general: edemas —periorbitario en el nefrítico, blando y declive hasta la anasarca en el nefrótico—, la piel del urémico y la presión arterial. Los riñones son retroperitoneales y profundos, por eso casi no se inspeccionan y se palpan con maniobras bimanuales: Guyon, en decúbito dorsal, buscando el peloteo desde el ángulo costomuscular; Israel, en decúbito lateral; Montenegro, en decúbito ventral; y Glénard, para la ptosis. Normalmente solo se palpa el polo inferior del derecho en personas delgadas. Hago la puñopercusión lumbar, que duele en la pielonefritis y la litiasis, busco los puntos renoureterales y ausculto soplos de estenosis de la arteria renal.»',
      repreguntas: [
        { q: '¿Qué es el peloteo renal?', a: 'La mano lumbar empuja el riñón hacia la anterior, que lo percibe como un rebote (Guyon).' },
        { q: '¿Qué significa una puñopercusión dolorosa?', a: 'Pielonefritis, litiasis o tumor renal.' },
        { q: '¿Qué riñón se palpa normalmente?', a: 'El polo inferior del derecho, en personas delgadas.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 459–460 · Argente-Álvarez, cap. 47.',
    },
    {
      tema: 'orina',
      titulo: 'Análisis de la orina',
      porque: [
        'El **glomérulo** filtra y el **túbulo** concentra. Por eso la **densidad** mide al túbulo, y lo que aparece en la orina (proteínas, hematíes deformados, cilindros) cuenta **dónde** está el daño.',
        'Un **cilindro** es un molde del túbulo: lo que esté atrapado en él (hematíes, leucocitos) **viene del riñón**, no de la vía urinaria.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Muestra', text: '**Primera orina de la mañana**, con higiene, **chorro medio**, frasco estéril y análisis rápido (los cilindros se destruyen).' },
        {
          t: 'cuadro',
          titulo: 'Examen físico y químico',
          head: ['Dato', 'Normal', 'Alterado'],
          filas: [
            ['**Color**', 'Amarillo ámbar, transparente', 'Rojo (hematuria, hemoglobina, mioglobina) · oscuro (bilirrubina) · turbio (infección)'],
            ['**Densidad**', '**1,001–1,035** (con dieta seca 1,018–1,023)', '**Isostenuria ≈ 1,010** (insuficiencia renal) · < 1,005 (diabetes insípida) · > 1,035 (glucosa, contraste)'],
            ['**pH**', '4–8', 'Alcalino persistente: infección (Proteus), acidosis tubular'],
            ['**Proteínas**', 'Negativas (tira)', 'Proteinuria'],
            ['**Glucosa**', 'Negativa', 'Glucemia > **180 mg/dl** (umbral renal)'],
            ['**Cetonas**', 'Negativas', 'Cetoacidosis, ayuno'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Sedimento',
          head: ['Elemento', 'Normal', 'Significado'],
          filas: [
            ['**Hematíes**', '1–3 por campo', '**Dismórficos** (acantocitos): **glomerulares** · isomórficos: vía urinaria'],
            ['**Leucocitos**', '3–5 por campo', '> 5 (**leucocituria**): **infección**, nefritis intersticial'],
            ['Cilindros **hialinos**', 'Escasos', 'Ejercicio, fiebre'],
            ['Cilindros **hemáticos**', '—', '**Glomerulonefritis** (síndrome nefrítico)'],
            ['Cilindros **leucocitarios**', '—', '**Pielonefritis**, nefritis intersticial'],
            ['Cilindros granulosos y **epiteliales**', '—', '**Necrosis tubular aguda**'],
            ['Cilindros **anchos y céreos**', '—', '**Insuficiencia renal crónica**'],
            ['**Cuerpos ovales grasos**', '—', '**Síndrome nefrótico**'],
          ],
        },
      ],
      oral: '«El análisis de orina se hace con la primera orina de la mañana, chorro medio y frasco estéril. Incluye el examen físico —color y densidad, normal 1,001 a 1,035; la isostenuria de 1,010 indica insuficiencia renal—, el químico —pH, proteínas, glucosa, que aparece con glucemias mayores a 180, cetonas, hemoglobina y nitritos— y el sedimento. En el sedimento normal hay hasta 3 hematíes y 5 leucocitos por campo y algunos cilindros hialinos. Los hematíes dismórficos indican origen glomerular; la leucocituria, infección; y los cilindros dicen el sitio del daño: hemáticos en la glomerulonefritis, leucocitarios en la pielonefritis, epiteliales y granulosos en la necrosis tubular y anchos o céreos en la insuficiencia renal crónica. Los cuerpos ovales grasos son del síndrome nefrótico.»',
      repreguntas: [
        { q: '¿Qué indican los cilindros hemáticos?', a: 'Hematuria glomerular: glomerulonefritis (síndrome nefrítico).' },
        { q: '¿Qué es la isostenuria?', a: 'Densidad fija ≈ 1,010: el riñón no concentra ni diluye (insuficiencia renal avanzada).' },
        { q: '¿Cómo diferenciás hematuria glomerular de la de vía urinaria?', a: 'Glomerular: hematíes dismórficos y cilindros hemáticos. Vía urinaria: isomórficos.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 415–417 · Argente-Álvarez, cap. 49-1.',
    },
    {
      tema: 'itu',
      titulo: 'Infecciones urinarias altas y bajas',
      porque: [
        'Casi siempre la infección **sube**: los gérmenes del intestino (**E. coli**) colonizan la uretra, llegan a la **vejiga** (cistitis) y pueden ascender por el uréter hasta el **riñón** (pielonefritis). La **uretra corta** explica por qué es más frecuente en mujeres jóvenes.',
        'La vejiga inflamada da síntomas **locales al orinar**. El riñón infectado es un órgano lleno de sangre: da **fiebre, escalofríos y dolor lumbar**.',
      ],
      bloques: [
        { t: 'def', text: 'Multiplicación de bacterias en cualquier sector del tracto urinario. **Bacteriuria significativa**: **≥ 10⁵ UFC/ml**; con síntomas bajos y leucocituria, en la mujer alcanza con 10² y en el hombre con 10³. Germen principal: **E. coli** (enterobacterias 90 %); Proteus, Klebsiella, S. saprophyticus.' },
        {
          t: 'cuadro',
          head: ['', 'ITU baja (cistitis)', 'ITU alta (pielonefritis)'],
          filas: [
            ['Dónde', 'Vejiga, uretra, próstata', 'Pelvis y parénquima renal'],
            ['Síntomas', '**Síndrome miccional**: **disuria** (cardinal), **polaquiuria**, **tenesmo vesical**, urgencia, dolor suprapúbico, hematuria', '**Fiebre > 38 °C**, **escalofríos**, **dolor lumbar**; a veces síntomas bajos'],
            ['Estado general', 'Bueno, **sin fiebre**', 'Comprometido; leucocitosis, hemocultivos +'],
            ['Examen', 'Dolor suprapúbico', '**Puñopercusión positiva**'],
          ],
        },
        { t: 'paso', titulo: 'Diagnóstico', text: 'Orina completa (**leucocituria**, nitritos, piocitos, cilindros leucocitarios en la pielonefritis) y **urocultivo** con antibiograma. **Bacteriuria asintomática**: ≥ 10⁵ en dos urocultivos, sin síntomas ni leucocituria; se trata solo en grupos de riesgo (**embarazadas**).' },
        { t: 'paso', titulo: 'Factores predisponentes', text: 'Sexo femenino (uretra corta), relaciones sexuales, embarazo, menopausia, **obstrucción** (litiasis, próstata), **reflujo vesicoureteral**, sonda vesical, diabetes.' },
      ],
      oral: '«La infección urinaria es la multiplicación de bacterias en el tracto urinario; se confirma con una bacteriuria significativa de 10⁵ unidades formadoras de colonias por mililitro, o menos si hay síntomas y leucocituria. La vía más frecuente es la ascendente y el germen principal, la Escherichia coli. Es más frecuente en la mujer por la uretra corta, y la favorecen la obstrucción, el reflujo, el embarazo y la sonda. La baja o cistitis se manifiesta con síndrome miccional —disuria, polaquiuria, tenesmo vesical, urgencia y dolor suprapúbico— sin fiebre. La alta o pielonefritis da fiebre mayor de 38, escalofríos, dolor lumbar y puñopercusión positiva, con leucocitosis. Se diagnostica con la orina completa, que muestra leucocituria y nitritos, y el urocultivo con antibiograma.»',
      repreguntas: [
        { q: '¿Qué diferencia clínica separa una cistitis de una pielonefritis?', a: 'La pielonefritis da fiebre, escalofríos, dolor lumbar y puñopercusión positiva; la cistitis, síndrome miccional sin fiebre.' },
        { q: '¿Cuál es la bacteriuria significativa?', a: '≥ 10⁵ UFC/ml.' },
        { q: '¿Cuándo se trata una bacteriuria asintomática?', a: 'En grupos de riesgo, sobre todo embarazadas.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 420–422 · Argente-Álvarez, cap. 48-5.',
    },
  ],
  noOlvidar: [
    { q: 'Maniobras renales', a: 'Guyon (dorsal, peloteo), Israel (lateral), Montenegro (ventral), Glénard (ptosis).' },
    { q: 'Puñopercusión', a: 'Dolor: pielonefritis, litiasis, tumor.' },
    { q: 'Densidad', a: '1,001–1,035; isostenuria 1,010 = insuficiencia renal.' },
    { q: 'Sedimento normal', a: '≤ 3 hematíes y ≤ 5 leucocitos por campo; cilindros hialinos.' },
    { q: 'Cilindros', a: 'Hemáticos: GN · leucocitarios: pielonefritis · epiteliales: NTA · céreos: IRC.' },
    { q: 'ITU', a: '≥ 10⁵ UFC/ml; E. coli; vía ascendente.' },
    { q: 'Baja vs alta', a: 'Disuria, polaquiuria, tenesmo sin fiebre vs fiebre, escalofríos, dolor lumbar.' },
  ],
};
