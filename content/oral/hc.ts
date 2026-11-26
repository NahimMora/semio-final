import type { ApunteUnidad } from './tipos';

/*
 * Historia clínica — apunte para el oral.
 * Base: Merlín (PDF 1 «Historia clínica», PDF 2 «Generalidades»), contrastado con Argente cap. 6 (pp. 47–55) y cap. 7 (pp. 57–59).
 * La división anamnesis próxima / remota / sistémica es la de Merlín; el contenido de cada parte coincide con Argente.
 */
export const apunte: ApunteUnidad = {
  unidad: 'hc',
  temas: [
    {
      tema: 'hc',
      titulo: 'Historia clínica',
      porque: [
        'Es el **razonamiento del médico escrito en orden**: junto datos (anamnesis y examen), me quedo con los positivos, los agrupo en síndromes y llego a un diagnóstico.',
        'Por eso la **anamnesis** pesa tanto: sola orienta el diagnóstico en más de la mitad de los casos; los estudios confirman, no reemplazan.',
        'Cada parte tiene una **función**: el motivo de consulta orienta al aparato, la enfermedad actual cuenta la historia, los antecedentes dan el terreno y las consideraciones diagnósticas piensan.',
      ],
      bloques: [
        {
          t: 'def',
          text: 'Narración **ordenada y detallada** de los acontecimientos **psicofísicos y sociales, pasados y presentes**, de una persona, que surge de la **anamnesis**, el **examen físico** y la **elaboración intelectual del médico**, y permite emitir un **diagnóstico de salud o enfermedad**.',
        },
        {
          t: 'paso',
          titulo: 'Características',
          text: 'Es un documento **médico, científico, legal, económico y humano**. Debe ser objetiva, completa, ordenada, legible y coherente. **Pertenece al paciente**; el médico y la institución son sus guardianes.',
        },
        { t: 'ilustracion', id: 'hc-estructura' },
        {
          t: 'cuadro',
          titulo: 'Estructura, en orden',
          head: ['Parte', 'Qué contiene'],
          filas: [
            ['**1. Anamnesis**', '**Próxima**: datos personales · motivo de consulta · enfermedad actual y sus antecedentes. **Remota**: antecedentes personales (fisiológicos, patológicos, de medio, hábitos) · heredofamiliares. **Sistémica**: interrogatorio por aparatos.'],
            ['**2. Examen físico**', '**General** (signos vitales, impresión general, piel, TCS, ganglios, SOMA) y **segmentario** (cabeza y cuello, tórax, abdomen, genitales, neurológico).'],
            ['**3. Resumen semiológico**', 'Solo los **datos positivos** de la anamnesis y del examen.'],
            ['**4. Consideraciones diagnósticas**', '**Síndromes** → **diferenciales** → **presuntivo**; plan de estudios y de tratamiento.'],
            ['**5. Evolución diaria**', 'Datos mensurables (temperatura, peso, diuresis, pulso, TA, FR), cambios del examen, resultados, tratamiento.'],
            ['**6. Epicrisis**', 'El cierre, **al alta o al fallecimiento**: diagnóstico de alta, pronóstico y plan.'],
          ],
          marca: 0,
        },
        {
          t: 'paso',
          titulo: 'Anamnesis',
          text: 'Indagación **por medio de preguntas** sobre la enfermedad y los antecedentes. La hace el médico, en un ambiente tranquilo y con orden. Interrogatorio **directo** (el paciente), **indirecto** (un familiar) o **mixto**; se consigna si es **confiable**.',
        },
        {
          t: 'cuadro',
          titulo: 'Anamnesis próxima',
          head: ['', 'Qué va', 'Ejemplo'],
          filas: [
            ['**Datos personales**', 'Nombre, **edad, sexo**, nacionalidad, estado civil, **ocupación**, **domicilio**. Orientan: edad y sexo (qué enfermedades), domicilio (patología geográfica), ocupación (enfermedades laborales).', 'Varón, 62 años, minero (neumoconiosis), vive en el norte (chagas).'],
            ['**Motivo de consulta**', 'En **pocas palabras**, el **síntoma o signo** principal **y su tiempo de evolución**. Orienta al aparato afectado. **Nunca un diagnóstico.**', '«Dolor retroesternal de 2 horas de evolución.»'],
            ['**Enfermedad actual**', 'Relato **cronológico** desde el primer síntoma: primero **libre**, después **dirigido** (caracterizo cada síntoma: el dolor con ALICIA). Incluye consultas, estudios, diagnósticos y tratamientos previos. Los antecedentes relacionados van **al principio**.', '«Paciente hipertenso, diabético y tabaquista que hace 2 horas presenta dolor opresivo retroesternal…»'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Anamnesis remota',
          head: ['', 'Qué va'],
          filas: [
            ['**Fisiológicos**', 'Nacimiento, crecimiento y desarrollo. En la mujer: menarca, ritmo menstrual, **FUM**, inicio de relaciones sexuales, embarazos, partos, abortos, lactancia.'],
            ['**Patológicos**', 'Enfermedades de la **infancia** (por sus secuelas) · enfermedades **médicas** · **alérgicos** (a fármacos: se **resaltan en la carátula**) · **quirúrgicos y traumáticos** (fecha, institución, cirujano; fracturas, pérdidas de conocimiento).'],
            ['**De medio**', 'Lugar de nacimiento y residencias · vivienda (servicios, agua, animales) · escolaridad · ocupación · núcleo familiar.'],
            ['**Hábitos**', 'Alimentación, apetito, catarsis, diuresis, sueño · **tabaco** (paquetes/año) · alcohol · infusiones · drogas · medicamentos · sexuales · actividad física.'],
            ['**Heredofamiliares**', 'Padres, hermanos, hijos: edad, salud, **edad y causa de muerte**. Diabetes, HTA, coronaria, neoplasias, TBC. Genograma.'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Anamnesis sistémica',
          text: 'Interrogatorio **por aparatos y sistemas** para no omitir síntomas que el paciente no relacionó: respiratorio, cardiovascular, digestivo, nefrourológico, endocrino, hematológico, nervioso, ginecológico.',
        },
        {
          t: 'cuadro',
          titulo: 'Examen físico: los cuatro métodos',
          head: ['Método', 'Qué es', 'Qué aporta'],
          filas: [
            ['**Inspección**', 'Observar. Empieza **cuando el paciente entra** y sigue en todo el examen. Con buena luz y respetando el pudor.', '**Estática** (paciente quieto) y **dinámica** (espontánea: marcha, movimientos; u ordenada: lo que le pido que haga).'],
            ['**Palpación**', 'Con las manos templadas, primero **superficial** y después **profunda**.', 'Sensibilidad (dolor), **temperatura**, **forma, tamaño, consistencia y situación** (su fin principal), movimientos: vibraciones y latidos.'],
            ['**Percusión**', '**Dígito-digital**: el dedo percutor golpea en martillo sobre el **dedo plexímetro** apoyado de plano.', '**Sonoridad** (pulmón) · **matidez** (sólido o líquido) · **timpanismo** (aire en víscera hueca) · submatidez · hipersonoridad.'],
            ['**Auscultación**', 'Con el estetoscopio (mediata) en ambiente silencioso.', '**Campana**: bajas frecuencias (ruidos cardíacos, algunos soplos). **Membrana**: altas frecuencias.'],
          ],
        },
        {
          t: 'paso',
          titulo: 'Examen físico: orden',
          items: [
            'De **lo general a lo particular** y con **criterio topográfico**: cabeza, cuello, tórax, abdomen, extremidades; comparando simetrías.',
            '**Examen general**: signos vitales, peso, talla e IMC; **inspección general** (nivel y contenido de la conciencia, actitud, decúbito, facies, hábito constitucional, nutrición e hidratación); piel y faneras, TCS, ganglios, SOMA.',
            'En el **abdomen** el orden cambia: se **ausculta antes de palpar** para no modificar los ruidos hidroaéreos.',
          ],
        },
        {
          t: 'clave',
          titulo: 'Valores que te pueden preguntar',
          items: [
            '**Paquetes/año** = cigarrillos por día × años fumando ÷ 20.',
            '**Diuresis** normal ≈ 1,5 L/día · **oliguria** < 500 mL · **poliuria** > 3000 mL · **anuria**: ausencia de orina.',
            '**Catarsis** normal: de 1–2 por día a 2 por semana.',
          ],
        },
        {
          t: 'paso',
          titulo: 'Elaboración: lo que piensa el médico',
          items: [
            '**Resumen semiológico**: datos positivos; es una HC abreviada y la base de lo que sigue.',
            '**Consideraciones diagnósticas**: la **parte más importante**. Agrupo en **síndromes**, planteo **diferenciales** y llego a un **presuntivo** (anatómico, funcional o etiológico) que orienta estudios y tratamiento hasta el definitivo.',
            '**Evolución diaria** y **epicrisis** al alta o al fallecimiento.',
          ],
        },
        {
          t: 'ojo',
          text: 'Errores típicos: poner un **diagnóstico** en el motivo de consulta («neumonía») o «derivado por el Dr. X»; mezclar los **antecedentes de la enfermedad actual** (estudios y tratamientos de este problema) con los **antecedentes personales**; olvidarse del **resumen semiológico** y de la **epicrisis** al recitar la estructura.',
        },
      ],
      oral: '«La historia clínica es la narración ordenada y detallada de los acontecimientos psicofísicos y sociales, pasados y presentes, de una persona, que surge de la anamnesis, el examen físico y la elaboración intelectual del médico, y permite llegar a un diagnóstico de salud o enfermedad. Es un documento médico, científico, legal, económico y humano, y pertenece al paciente. Tiene seis partes: anamnesis, examen físico, resumen semiológico, consideraciones diagnósticas, evolución y epicrisis. La anamnesis se divide en próxima, que tiene los datos personales, el motivo de consulta —el síntoma principal con su tiempo de evolución, nunca un diagnóstico— y la enfermedad actual, que es el relato cronológico; remota, con los antecedentes personales fisiológicos, patológicos, de medio y hábitos, y los heredofamiliares; y sistémica, el interrogatorio por aparatos. Después hago el examen físico general y segmentario, resumo los datos positivos y en las consideraciones diagnósticas, que son la parte más importante, agrupo en síndromes, planteo diferenciales y llego a un presuntivo.»',
      repreguntas: [
        { q: '¿Qué diferencia hay entre síntoma, signo y síndrome?', a: 'Síntoma: lo que refiere el paciente. Signo: lo que encuentra el médico. Síndrome: conjunto de síntomas y signos con un mecanismo común, que puede tener varias causas.' },
        { q: '¿Motivo de consulta y motivo de internación son lo mismo?', a: 'No siempre. El de internación es una elaboración del médico: consulta por astenia y se interna por una hepatomegalia pétrea hallada al examinarlo.' },
        { q: '¿Qué es la epicrisis y cuándo se hace?', a: 'El cierre de la HC, al alta o al fallecimiento: diagnóstico de alta, tratamiento y resultados, pronóstico y plan.' },
        { q: '¿Por qué preguntás por TBC en los familiares si no es hereditaria?', a: 'Por el contagio en los convivientes: es un antecedente familiar aunque no hereditario.' },
        { q: '¿De quién es la historia clínica?', a: 'Del paciente; el médico y la institución son sus guardianes legales.' },
        { q: '¿Qué diferencia hay entre los sonidos de percusión?', a: 'Sonoridad: fuerte, tono bajo, prolongada (pulmón). Matidez: escasa intensidad, tono alto, breve (sólido o líquido). Timpanismo: musical (aire en víscera hueca).' },
        { q: '¿Qué es la historia clínica orientada al problema?', a: 'La de Weed, usada en consultorio: base de datos, lista de problemas (lo más importante) y notas de evolución con formato SOAP: subjetivo, objetivo, análisis y plan.' },
        { q: '¿Qué tenés en cuenta en la HC del anciano?', a: 'El deterioro de la memoria y de los sentidos (se completa con interrogatorio indirecto), el contexto social (con quién vive, quién lo cuida) y la polifarmacia.' },
      ],
      fuentes: 'Instituto Merlín, «Historia clínica» y «Generalidades» · Argente-Álvarez, Semiología Médica, cap. 6 (pp. 47–55) y cap. 7 (pp. 57–59) · Baré-Califano, Semiotecnia, cap. 1.',
    },
  ],
  noOlvidar: [
    { q: 'Definición', a: 'Narración ordenada y detallada de los acontecimientos psicofísicos y sociales, pasados y presentes; anamnesis + examen + elaboración → diagnóstico.' },
    { q: 'Las seis partes', a: 'Anamnesis · examen físico · resumen semiológico · consideraciones diagnósticas · evolución · epicrisis.' },
    { q: 'Las cinco características', a: 'Médico, científico, legal, económico, humano.' },
    { q: 'Anamnesis próxima', a: 'Datos personales · motivo de consulta · enfermedad actual.' },
    { q: 'Anamnesis remota', a: 'Antecedentes personales (fisiológicos, patológicos, de medio, hábitos) y heredofamiliares.' },
    { q: 'Anamnesis sistémica', a: 'Interrogatorio por aparatos y sistemas.' },
    { q: 'Motivo de consulta bien escrito', a: 'Síntoma + tiempo de evolución, sin diagnóstico.' },
    { q: 'La parte más importante', a: 'Las consideraciones diagnósticas.' },
    { q: 'Paquetes/año', a: 'Cigarrillos/día × años ÷ 20.' },
    { q: 'Los cuatro métodos del examen', a: 'Inspección, palpación, percusión (dígito-digital) y auscultación; en abdomen se ausculta antes de palpar.' },
    { q: 'Sonidos de percusión', a: 'Sonoridad, matidez, timpanismo; submatidez e hipersonoridad.' },
  ],
};
