import type { ApunteUnidad } from './tipos';

/*
 * Constipación — apunte para el oral.
 * Base: Merlín («Constipación») y clases de Ortega (MC digestivo, parte 6: Bristol y signos de alarma),
 * contrastados con Argente cap. 39.
 */
export const apunte: ApunteUnidad = {
  unidad: 'constipacion',
  temas: [
    {
      tema: 'constipacion',
      titulo: 'Constipación',
      porque: [
        'Defecar requiere tres cosas: materia fecal de **buena consistencia**, un colon que la **empuje** y un recto y piso pelviano que la **evacuen**. La constipación aparece cuando falla cualquiera de las tres.',
        'Cuanto más tiempo queda la materia fecal en el colon, **más agua le absorbe**: sale dura y en bolitas (Bristol 1–2).',
      ],
      bloques: [
        { t: 'def', text: 'Impresión del paciente de una alteración de la función intestinal al evacuar. **Criterios de Roma** (constipación funcional): **dos o más** de — evacuaciones **forzadas**, materia fecal **dura**, sensación de **evacuación incompleta**, **menos de 3 evacuaciones por semana** —, con heces blandas raras sin laxantes y sin criterios de intestino irritable; en los **últimos 3 meses**, con comienzo **al menos 6 meses** antes.' },
        {
          t: 'cuadro',
          titulo: 'Clasificación',
          head: ['Tipo', 'Qué es', 'Ejemplos'],
          filas: [
            ['**Aguda**', 'Benigna y autolimitada', 'Cambio de dieta, viaje, fármacos'],
            ['**Funcional** (primaria)', 'Sin causa orgánica', 'Tránsito normal, **tránsito lento**, **disfunción del piso pelviano**'],
            ['**Secundaria** (extracolónica)', 'Colon sano; causa sistémica', '**Dieta pobre en fibra** (la más frecuente), **fármacos** (opioides, anticolinérgicos), **hipotiroidismo**, neurológicas, embarazo'],
            ['**Mecánica** (estructural)', 'Obstrucción física', '**Cáncer de colon**, estenosis, lesiones anorrectales'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Escala de Bristol',
          head: ['Tipo', 'Aspecto', 'Significa'],
          filas: [
            ['**1**', 'Bolitas duras separadas', '**Constipación** (tránsito muy lento)'],
            ['**2**', 'Salchicha con grumos', '**Constipación**'],
            ['**3**', 'Salchicha con grietas', 'Normal'],
            ['**4**', 'Salchicha lisa y blanda', 'Normal (ideal)'],
            ['**5**', 'Trozos blandos de bordes definidos', 'Tendencia a diarrea'],
            ['**6**', 'Pastosa, bordes deshechos', 'Diarrea'],
            ['**7**', 'Líquida', 'Diarrea'],
          ],
        },
        { t: 'clave', titulo: 'Signos de alarma → colonoscopia', items: ['**Mayor de 50 años**.', '**Pérdida de peso**, **anemia**, **sangre** en la materia fecal.', 'Buscar un **cáncer de colon**.'] },
        { t: 'paso', titulo: 'Examen', text: 'Palpación abdominal (**fecaloma**: empastamiento en la FII), inspección anal y **tacto rectal** (fisuras, hemorroides, masas, tono del esfínter, ampolla).' },
      ],
      oral: '«La constipación es la impresión del paciente de una alteración en la evacuación intestinal. Según los criterios de Roma, la funcional exige dos o más de: evacuaciones forzadas, heces duras, sensación de evacuación incompleta o menos de tres deposiciones por semana, durante los últimos tres meses con comienzo seis meses antes. Se clasifica en aguda; funcional o primaria, por tránsito lento o disfunción del piso pelviano; secundaria o extracolónica, por dieta pobre en fibra —la más frecuente—, fármacos como los opioides o hipotiroidismo; y mecánica, por obstrucción, como el cáncer de colon. La consistencia se describe con la escala de Bristol: los tipos 1 y 2 son constipación, 3 y 4 normales, y 5 a 7 diarrea. Los signos de alarma —más de 50 años, pérdida de peso, anemia o sangre— obligan a una colonoscopia. Al examen palpo el abdomen y hago tacto rectal.»',
      repreguntas: [
        { q: '¿Qué tipos de Bristol corresponden a constipación?', a: 'El 1 (bolitas duras) y el 2 (salchicha con grumos).' },
        { q: '¿Cuál es la causa más frecuente de constipación?', a: 'La dieta pobre en fibra (secundaria).' },
        { q: '¿Cuándo pedís una colonoscopia?', a: 'Con signos de alarma: más de 50 años, pérdida de peso, anemia o sangre.' },
        { q: 'Nombrá dos fármacos que constipan.', a: 'Opioides y anticolinérgicos.' },
      ],
      fuentes: 'Instituto Merlín, «Constipación» · Clase de Ortega, MC digestivo (parte 6) · Argente-Álvarez, cap. 39.',
    },
  ],
  noOlvidar: [
    { q: 'Roma', a: '≥ 2: forzada, dura, incompleta, < 3 por semana. 3 meses, comienzo 6 meses antes.' },
    { q: 'Tipos', a: 'Aguda · funcional (tránsito lento, piso pelviano) · secundaria (dieta, fármacos, hipotiroidismo) · mecánica (cáncer).' },
    { q: 'Bristol', a: '1–2 constipación · 3–4 normal · 5–7 diarrea.' },
    { q: 'Alarma', a: '> 50 años, pérdida de peso, anemia, sangre → colonoscopia.' },
  ],
};
