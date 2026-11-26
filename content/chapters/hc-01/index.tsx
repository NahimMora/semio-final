import type { Chapter, SourceRef } from '@/types';
import { clase } from './clase';

/*
 * hc-01 — Historia clínica. Está en 19 de las 20 bolillas (todas menos la 14).
 * Fuentes: Argente-Álvarez cap. 6 «Historia clínica del paciente internado» (M. Martí, pp. 47–55) y cap. 7
 * «Historia clínica del paciente ambulatorio» (pp. 57–59); Instituto Merlín (PDF 1 «Historia clínica» y PDF 2 «Generalidades»).
 * No hay clase grabada de Ortega sobre historia clínica en las carpetas: no se le atribuye nada.
 * Diferencias entre fuentes, señaladas en pantalla:
 *  - Argente: la anamnesis permite el diagnóstico en «más del 50 %» de los casos (p. 48). Merlín (PDF 2, p. 4): anamnesis + examen
 *    físico dan «el 90 %». No se contradicen (una habla solo de la anamnesis), pero en el oral conviene citar el libro.
 *  - Merlín agrega «Consideraciones terapéuticas» como punto propio de la estructura; Argente las incluye dentro de las diagnósticas.
 */
const r = (src: string, p?: string): SourceRef => ({ src, p });
const A = (p: string) => r('argente-libro', p);
const M = (p: string) => r('merlin', p);

const chapter: Chapter = {
  id: 'hc-01',
  systemId: 'hc',
  title: 'Historia clínica',
  subtitle: 'Qué es, para qué sirve y cómo se arma: anamnesis (datos personales, motivo de consulta, enfermedad actual, antecedentes), examen físico, resumen semiológico, consideraciones diagnósticas, evolución y epicrisis.',
  estimatedMinutes: 90,
  sources: [A('cap. 6, pp. 47–55'), A('cap. 7, pp. 57–59'), M('PDF 1 «Historia clínica»; PDF 2 «Generalidades», pp. 2–6')],

  map: {
    center: 'Historia clínica',
    why: 'Es el único tema que aparece en **19 de las 20 bolillas** (todas menos la 14). Casi seguro te la toman: tenés que poder **definirla, decir su estructura completa en orden y explicar cada parte** con un ejemplo.',
    prereqs: [
      { label: 'Síntoma, signo, síndrome y enfermedad', detail: 'El vocabulario con el que se escribe la HC (lo ves en «Para entenderlo»).' },
      { label: 'Semiología del dolor (ALICIA)', detail: 'Es el modelo de cómo se interroga un síntoma dentro de la enfermedad actual.', chapterId: 'sig-01' },
    ],
    branches: [
      { id: 'definicion', label: 'Qué es', tone: 'sky', items: ['Narración ordenada', 'Documento médico, científico, legal, económico y humano', 'Pertenece al paciente'] },
      { id: 'anamnesis', label: 'Anamnesis ★', tone: 'rose', items: ['Datos personales', 'Motivo de consulta', 'Enfermedad actual', 'Antecedentes'] },
      { id: 'examen', label: 'Examen físico', tone: 'lilac', items: ['General', 'Segmentario', 'Inspección · palpación · percusión · auscultación'] },
      { id: 'elaboracion', label: 'Elaboración', tone: 'gold', items: ['Resumen semiológico', 'Consideraciones diagnósticas', 'Evolución', 'Epicrisis'] },
    ],
    outcomes: [
      'Definir la historia clínica con la definición del libro y sus **cinco características** como documento.',
      'Recitar la **estructura completa en orden** sin olvidar ninguna parte.',
      'Distinguir **motivo de consulta** de **enfermedad actual** y explicar qué va (y qué no va) en cada uno.',
      'Ordenar los **antecedentes** (personales fisiológicos, patológicos, de medio, hábitos; heredofamiliares).',
      'Explicar qué son el **resumen semiológico**, las **consideraciones diagnósticas** y la **epicrisis**.',
    ],
  },

  bases: {
    intro: 'Antes de memorizar partes, entendé **para qué existe** la historia clínica: es el lugar donde el médico **piensa por escrito**. Todo lo demás (el orden, las secciones) está al servicio de ese razonamiento.',
    sections: [
      {
        id: 'razonamiento',
        kicker: 'Para entenderlo',
        title: 'Del síntoma al diagnóstico: el camino que ordena la HC',
        priority: 'imprescindible',
        summary: 'Recogés síntomas y signos → los agrupás en síndromes → planteás diagnósticos. La HC sigue exactamente ese orden.',
        blocks: [
          { t: 'lead', text: 'La semiología estudia los **signos y síntomas** y los **métodos para encontrarlos**; con ellos se arman **síndromes** y se orienta el **diagnóstico**. La historia clínica es el registro ordenado de ese proceso.' },
          {
            t: 'cards',
            cols: 4,
            items: [
              { tag: '1', title: 'Síntoma', text: 'Lo que **refiere** el paciente (subjetivo): dolor, disnea, náuseas. Se obtiene en la **anamnesis**.', tone: 'rose' },
              { tag: '2', title: 'Signo', text: 'Lo que **encuentra** el médico (objetivo): matidez, soplo, ictericia. Se obtiene en el **examen físico**.', tone: 'sky' },
              { tag: '3', title: 'Síndrome', text: 'Conjunto de síntomas y signos que **aparecen juntos** con un mecanismo común, de distintas causas (síndrome de Cushing).', tone: 'lilac' },
              { tag: '4', title: 'Enfermedad', text: 'Entidad con **causa** conocida (enfermedad de Cushing, endocarditis infecciosa).', tone: 'gold' },
            ],
          },
          { t: 'def', term: 'Signo patognomónico', text: 'Signo que, por sí solo, **asegura** el diagnóstico de una enfermedad. Merlín da el ejemplo del **signo de Romaña** (chagas agudo).', refs: [M('PDF 2, p. 2')] },
          {
            t: 'flow',
            root: {
              label: 'Paciente',
              tone: 'ink',
              children: [
                { label: 'Anamnesis', note: 'síntomas + antecedentes', tone: 'rose', edge: 'pregunto' },
                { label: 'Examen físico', note: 'signos', tone: 'sky', edge: 'examino' },
                {
                  label: 'Resumen semiológico',
                  note: 'solo los datos positivos',
                  tone: 'lilac',
                  edge: 'selecciono',
                  children: [{ label: 'Consideraciones diagnósticas', note: 'síndromes → diferenciales → presuntivo', tone: 'gold', star: true, children: [{ label: 'Estudios y tratamiento → evolución → epicrisis', tone: 'mint' }] }],
                },
              ],
            },
            caption: 'La historia clínica no es un formulario: es el **razonamiento** del médico escrito en orden.',
          },
          { t: 'callout', kind: 'key', title: 'Por qué la anamnesis vale tanto', text: 'Según Argente, la anamnesis **sola** permite hacer el diagnóstico en **más del 50 %** de los casos; Merlín dice que anamnesis **más** examen físico dan el **90 %** del diagnóstico y los complementarios, el 10 % restante. En el oral citá el libro y aclará que los estudios **confirman**, no reemplazan, a la clínica («más medicina no es mejor medicina»).', refs: [A('p. 48'), M('PDF 2, p. 4')] },
        ],
      },
    ],
  },

  theory: [
    {
      id: 'definicion',
      kicker: 'Definición',
      title: 'Qué es la historia clínica',
      priority: 'imprescindible',
      summary: 'Narración ordenada y detallada de los acontecimientos psicofísicos y sociales, pasados y presentes, de una persona; surge de la anamnesis, el examen físico y la elaboración intelectual del médico.',
      blocks: [
        { t: 'def', term: 'Historia clínica (Argente)', text: 'Es la **narración ordenada y detallada** de los acontecimientos **psicofísicos y sociales, pasados y presentes**, referidos a una persona, que surgen de la **anamnesis**, del **examen físico** y de la **elaboración intelectual del médico**, y que permiten emitir un **diagnóstico de salud o enfermedad**.', refs: [A('p. 47')] },
        { t: 'p', text: 'Fue instituida por **Hipócrates** hace 25 siglos. El libro aclara que, más que recordar una definición textual, hay que entenderla como un **documento** con cinco dimensiones:' },
        {
          t: 'mnemo',
          word: 'MCLEH',
          tone: 'sky',
          items: [
            { l: 'M', t: '**Médico**: describe hallazgos, síndromes, medidas diagnósticas y terapéuticas; de su lectura debe surgir el razonamiento.' },
            { l: 'C', t: '**Científico**: sus observaciones sirven para conocer mejor la enfermedad (la patología nace de muchas historias).' },
            { l: 'L', t: '**Legal**: todo lo escrito es testimonio de la enfermedad y justifica lo que se hizo.' },
            { l: 'E', t: '**Económico**: cada medida tiene un costo que pagan la institución, la obra social o el paciente.' },
            { l: 'H', t: '**Humano**: refleja la relación médico-paciente, cuyo objetivo es curar o aliviar.' },
          ],
          note: 'Regla para recordarlas: «**Mi Clínica Lleva Ética Humana**».',
          refs: [A('p. 47'), M('PDF 2, p. 3')],
        },
        {
          t: 'cards',
          cols: 2,
          items: [
            { tag: 'Requisitos', title: 'Cómo tiene que ser', text: '**Objetiva**, sin omitir información; **completa, ordenada, legible y coherente**. El orden y la buena letra son parte del documento.', tone: 'sky' },
            { tag: 'Propiedad', title: 'De quién es', text: 'La HC **pertenece al paciente**; el médico o la institución son sus **guardianes legales** (Merlín). En la Argentina lo establece la **Ley 26.529** de derechos del paciente: el paciente es el **titular** de su historia clínica.', tone: 'rose' },
          ],
        },
        { t: 'callout', kind: 'bib', title: 'Marco legal (complementario)', text: 'La Ley 26.529 (2009) dedica un capítulo a la historia clínica: titularidad del paciente, inviolabilidad, y que la custodien los establecimientos y profesionales. No figura en las fuentes de la cátedra: sirve solo si te repreguntan «¿de quién es la historia clínica?».', refs: [M('PDF 1, p. 2')] },
        { t: 'callout', kind: 'tip', title: 'Un detalle que suma en el oral', text: 'Argente dice que la HC «**comienza con un apretón de manos**»: testimonio de confianza y, a la vez, primer dato del examen (temperatura, sudoración, fuerza, aspecto general). Mostrá que sabés que **la inspección empieza en cuanto el paciente entra**.', refs: [A('p. 47')] },
      ],
      refs: [A('p. 47'), M('PDF 1, p. 2')],
    },
    {
      id: 'estructura',
      kicker: 'Clave',
      title: 'La estructura completa, en orden',
      priority: 'imprescindible',
      summary: '1 Anamnesis · 2 Examen físico · 3 Resumen semiológico · 4 Consideraciones diagnósticas · 5 Evolución diaria · 6 Epicrisis.',
      blocks: [
        { t: 'lead', text: 'Esta es la columna vertebral de cualquier respuesta sobre historia clínica. Decila **en orden** y después desarrollá cada parte.' },
        {
          t: 'steps',
          title: 'Estructura básica (Argente)',
          items: [
            { title: '1. Anamnesis', text: 'Datos personales · motivo de consulta o internación · enfermedad actual y sus antecedentes · antecedentes personales (fisiológicos, patológicos, de medio, hábitos) · antecedentes hereditarios y familiares.' },
            { title: '2. Examen físico', text: 'General y segmentario, por aparatos.' },
            { title: '3. Resumen semiológico', text: 'Los datos **positivos** de la anamnesis y del examen físico.' },
            { title: '4. Consideraciones diagnósticas', text: 'Síndromes → diagnósticos diferenciales → diagnóstico presuntivo; plan de estudios y de tratamiento.' },
            { title: '5. Evolución diaria', text: 'Lo que pasa con el paciente día a día.' },
            { title: '6. Epicrisis', text: 'El cierre: se hace al alta o al fallecimiento.' },
          ],
        },
        {
          t: 'cuadro',
          title: 'Argente vs Merlín: misma estructura, distinto agrupamiento',
          cols: [
            { t: 'Argente (cap. 6)', tone: 'sky' },
            { t: 'Merlín (PDF 2)', tone: 'rose' },
          ],
          rows: [
            { k: 'Anamnesis', v: ['Datos personales, MC, enfermedad actual, antecedentes', '**Próxima** (datos, MC, enfermedad actual) · **remota** (antecedentes personales y heredofamiliares) · **sistémica** (interrogatorio por aparatos)'] },
            { k: 'Examen físico', v: ['General y por aparatos', 'Examen general (signos vitales, inspección general, piel, TCS, linfático, SOMA) + segmentario'] },
            { k: 'Después', v: ['Resumen semiológico · consideraciones diagnósticas · evolución · epicrisis', 'Igual, pero agrega **consideraciones terapéuticas** como punto propio (7 partes)'] },
          ],
          caption: 'No se contradicen. Si el docente pregunta «la estructura», la de Argente es la de referencia; podés mencionar la división próxima/remota/sistémica de la anamnesis porque muestra orden.',
          refs: [A('p. 47'), M('PDF 2, pp. 3–4')],
        },
      ],
      refs: [A('p. 47'), M('PDF 2, p. 3')],
    },
    {
      id: 'anamnesis',
      kicker: 'Anamnesis',
      title: 'La anamnesis o interrogatorio',
      priority: 'imprescindible',
      summary: 'Indagación por medio de preguntas sobre la enfermedad y los antecedentes. La hace el médico, en un ambiente tranquilo y con orden.',
      blocks: [
        { t: 'def', term: 'Anamnesis', text: 'Es la **indagación por medio de preguntas** acerca de las características de la enfermedad y de los antecedentes del paciente. También se llama **interrogatorio**. Es **obligatorio que la realice el médico**, porque es la base real de la relación médico-paciente.', refs: [A('pp. 47–48')] },
        {
          t: 'compare',
          title: 'Tipos de interrogatorio (según quién responde)',
          cols: [
            { title: 'Directo', tone: 'sky', items: ['Responde el **propio paciente**.', 'Es el ideal.'] },
            { title: 'Indirecto', tone: 'rose', items: ['Responden **familiares o acompañantes**.', 'Niños, pacientes con deterioro de conciencia o cognitivo, ancianos que no recuerdan.'] },
            { title: 'Mixto', tone: 'lilac', items: ['Paciente **y** acompañante.', 'Muy común en ancianos: se reinterroga días después o se recurre a parientes.'] },
          ],
        },
        {
          t: 'scale',
          title: 'Carácter del interrogatorio (confiabilidad)',
          items: [
            { k: '✓', t: 'Confiable (fidedigno)', d: 'Relato coherente, preciso, ubicado.', tone: 'mint' },
            { k: '~', t: 'Poco confiable', d: 'Datos imprecisos u olvidos: hay que reinterrogar.', tone: 'gold' },
            { k: '✗', t: 'No confiable', d: 'No puede usarse sin confirmación (confusión, deterioro, simulación).', tone: 'red' },
          ],
          caption: 'Se consigna en la HC (Merlín, PDF 2, p. 4).',
        },
        {
          t: 'list',
          items: [
            '**Ambiente** tranquilo, sin ruidos ni interrupciones.',
            'Seguir un **orden** (para no olvidar nada), pero **escuchar** si el paciente recuerda algo fuera de orden.',
            'Los **datos positivos** pesan más que los negativos.',
            'Redactar con **lenguaje médico**, pero **hablar con el paciente en su idioma**: no preguntes «¿tuvo úlcera gástrica?», preguntá por sus síntomas.',
            'Buscar **«la mayor cantidad de referencias con el mínimo de inferencias»**: no aceptar sin más la causalidad que propone el paciente («tengo mala digestión porque de chico tuve hepatitis»).',
            'Todo lo que se escribe tiene que tener una **finalidad**: ayudar a comprender la enfermedad.',
          ],
        },
        { t: 'callout', kind: 'clinic', title: 'Ejemplo de inferencia peligrosa', text: 'Si el paciente dice «úlcera gástrica», **no** lo anotes así: preguntá cuándo, qué síntomas tuvo, si le hicieron una endoscopia, qué tratamiento recibió. El diagnóstico lo construís vos.', refs: [A('p. 48')] },
      ],
      refs: [A('pp. 47–48'), M('PDF 2, p. 4')],
    },
    {
      id: 'datos-mc',
      kicker: 'Anamnesis próxima',
      title: 'Datos personales y motivo de consulta',
      priority: 'imprescindible',
      summary: 'Los datos personales orientan (edad, sexo, ocupación, domicilio). El motivo de consulta se escribe en pocas palabras, con síntomas o signos y su tiempo de evolución: nunca un diagnóstico.',
      blocks: [
        {
          t: 'table',
          head: ['Dato personal', 'Para qué sirve'],
          rows: [
            ['Nombre y nacionalidad', 'Orientan al **origen étnico**.'],
            ['Edad y sexo', 'Cada enfermedad tiene **edades y sexo** preferidos.'],
            ['Domicilio (y lugares de residencia)', '**Patología geográfica** (chagas, hidatidosis, bocio endémico).'],
            ['Ocupación', '**Enfermedades laborales** (saturnismo, neumoconiosis, brucelosis).'],
            ['Estado civil y persona responsable', 'Contexto y contacto, sobre todo si el paciente no puede decidir.'],
          ],
          caption: 'Argente, p. 48.',
        },
        { t: 'def', term: 'Motivo de consulta (o de internación)', text: 'Es la **«portada» de la historia clínica**: en **pocas palabras**, orienta hacia el **aparato o sistema afectado** y la **evolución** del padecimiento. Se escriben **síntomas o signos y su cronología**, **no diagnósticos**.', refs: [A('p. 48')] },
        {
          t: 'compare',
          title: '¿Está bien escrito?',
          cols: [
            { title: 'Bien', tone: 'mint', items: ['«**Tos, fiebre y expectoración de 3 días** de evolución» → proceso respiratorio agudo.', '«**Dolor y deformidad de las articulaciones de las manos de 3 años** de evolución» → enfermedad articular crónica.'] },
            { title: 'Mal', tone: 'red', items: ['«Neumonía» (es un **diagnóstico**, no un motivo).', '«Enviado por el Dr. N. N. para diagnóstico y tratamiento» (**no dice el problema**: carece de valor médico).'] },
          ],
        },
        { t: 'callout', kind: 'key', title: 'Motivo de consulta ≠ motivo de internación', text: 'La queja del paciente **no siempre coincide** con el motivo por el que se lo interna, que es una **elaboración del médico** (integra el relato, el examen y los primeros estudios). Ejemplo del libro: consulta por **anorexia y astenia**, pero se lo interna por una **hepatomegalia de dureza pétrea** encontrada al examinarlo, o por una **urea de 250 mg/dL**. A veces se interna para un **procedimiento** (biopsia, quimioterapia): ese es el motivo de internación.', refs: [A('p. 48')] },
      ],
      refs: [A('p. 48')],
    },
    {
      id: 'enfermedad-actual',
      kicker: 'Anamnesis próxima',
      title: 'Enfermedad actual y sus antecedentes',
      priority: 'imprescindible',
      summary: 'Relato preciso y cronológico de todo el padecimiento desde las primeras manifestaciones: primero libre, después dirigido. Incluye estudios, diagnósticos y tratamientos previos.',
      blocks: [
        { t: 'lead', text: 'El motivo de consulta es **sucinto**; la enfermedad actual es su **desarrollo completo**: redacción **precisa y en orden cronológico**, desde las **primeras manifestaciones** hasta hoy.' },
        {
          t: 'timeline',
          title: 'Cómo se toma',
          items: [
            { k: '1', t: 'Relato libre', d: 'Dejás que el paciente cuente **sin interrumpir**, tal como lo vivió.', tone: 'sky' },
            { k: '2', t: 'Interrogatorio dirigido', d: 'Ordenás y **completás** con preguntas (para un dolor: **ALICIA**).', tone: 'lilac' },
            { k: '3', t: 'Todo lo vinculado', d: 'Médicos que lo vieron, **estudios**, **diagnósticos**, **tratamientos** y su resultado, y cómo afectó su **calidad de vida**.', tone: 'rose' },
          ],
        },
        {
          t: 'accordion',
          items: [
            {
              title: 'Las preguntas que ordenan la enfermedad actual (Argente, p. 49)',
              blocks: [
                {
                  t: 'list',
                  ordered: true,
                  items: [
                    '¿**Cuándo** empezó a sentirse enfermo?',
                    '¿**Cómo comenzó**? ¿Con qué síntomas?',
                    '¿Cómo **evolucionaron**?',
                    '¿Es la primera vez? ¿Tuvo algo **parecido antes**?',
                    '¿A qué lo **atribuye**? ¿Qué lo **precedió**?',
                    '¿Consultó? ¿Qué **estudios**, **diagnósticos** y **tratamientos** recibió?',
                    '¿Qué **repercusión general** le provocó?',
                  ],
                },
              ],
            },
          ],
        },
        { t: 'callout', kind: 'tip', title: 'Antecedentes relacionados: van al principio', text: 'Si el paciente tiene antecedentes **claramente vinculados** con lo que le pasa, se escriben al **comienzo** de la enfermedad actual: «Paciente con antecedentes de **hipertensión arterial, diabetes y dislipidemia** que en el día de la fecha presentó **dolor retroesternal**…».', refs: [A('p. 49')] },
        { t: 'callout', kind: 'key', title: 'Conectá con el resto del final', text: 'Cada síntoma de la enfermedad actual se interroga con su **semiología**: el dolor con ALICIA (antigüedad, localización, irradiación, carácter, intensidad, atenuantes/agravantes), la disnea con su clase funcional, la fiebre con su curva. Por eso la HC está en casi todas las bolillas: **es la forma de presentar cualquier tema**.' },
      ],
      refs: [A('pp. 48–49')],
    },
    {
      id: 'antecedentes',
      kicker: 'Anamnesis remota',
      title: 'Antecedentes personales',
      priority: 'imprescindible',
      summary: 'Fisiológicos, patológicos (infancia, médicos, alérgicos, quirúrgicos y traumáticos), de medio y hábitos.',
      blocks: [
        {
          t: 'flow',
          root: {
            label: 'Antecedentes personales',
            tone: 'ink',
            children: [
              { label: 'Fisiológicos', note: 'nacimiento, desarrollo, gineco-obstétricos', tone: 'sky' },
              { label: 'Patológicos', note: 'infancia · médicos · alérgicos · quirúrgicos y traumáticos', tone: 'rose', star: true },
              { label: 'De medio', note: 'residencia · vivienda · escolaridad · ocupación · núcleo familiar', tone: 'lilac' },
              { label: 'Hábitos', note: 'alimentación · catarsis · diuresis · tabaco · alcohol · drogas · medicamentos · sexuales · actividad física', tone: 'gold' },
            ],
          },
        },
        {
          t: 'accordion',
          items: [
            {
              title: 'Fisiológicos',
              blocks: [
                { t: 'p', text: '**Nacimiento** (parto normal o patológico, peso al nacer), **crecimiento y maduración** (lactancia, lenguaje, marcha, dentición). En la mujer: **menarca**, ritmo menstrual, **fecha de la última menstruación (FUM)**, inicio de relaciones sexuales, **embarazos, partos, abortos** y lactancia.' },
              ],
            },
            {
              title: 'Patológicos (con un orden para no olvidar)',
              blocks: [
                { t: 'p', text: 'El paciente tiende a **olvidar lo desagradable**: la anamnesis tiene que ser cuidadosa y **repetida**. Conviene preguntar por **consultas e internaciones** previas y su causa.' },
                {
                  t: 'kv',
                  items: [
                    { k: 'Infancia', v: 'Las más difíciles de recordar; importan por sus **secuelas**: sarampión → bronquiectasias; parotiditis → diabetes o infertilidad; rubéola (vacunar a la mujer antes de la edad fértil); fiebre reumática, meningitis, convulsiones (la epilepsia **se oculta**); asma y bronquitis espasmódica.' },
                    { k: 'Médicos', v: 'Preguntar **por aparatos**: respiratorio, cardiovascular, digestivo, nefrourológico, endocrino, hematológico, nervioso, ginecológico.' },
                    { k: 'Alérgicos', v: 'A **fármacos** sobre todo: si es positivo, **se resalta en la carátula**. También inhalatorios, alimentarios, cutáneos.' },
                    { k: 'Quirúrgicos y traumáticos', v: '«¿Lo operaron alguna vez?»: fecha, institución, cirujano. Traumatismos, fracturas, pérdidas de conocimiento.' },
                  ],
                },
              ],
            },
            {
              title: 'De medio (ambiente)',
              blocks: [
                { t: 'p', text: 'Ambiente **familiar, laboral, social y cultural**: **lugar de nacimiento y residencias** (patología geográfica: bocio lejos del mar, parasitosis sin saneamiento), **vivienda** (servicios, agua, animales, tóxicos), **escolaridad** (cómo le explicás la enfermedad y el tratamiento), **ocupación** (saturnismo en fábricas de baterías, neumoconiosis en mineros, brucelosis en matarifes) y **núcleo familiar** (con quién vive: no es lo mismo un paciente solo que uno acompañado).' },
              ],
            },
            {
              title: 'Hábitos',
              blocks: [
                {
                  t: 'kv',
                  items: [
                    { k: 'Alimentación', v: 'Tipo, calidad, cantidad, horarios; si es variada se consigna «**mixta**». **Intolerancias** (grasas en patología biliar; mate, café, alcohol en la úlcera).' },
                    { k: 'Apetito', v: '**Anorexia** en neoplasias, infecciones y fiebre; **hiperorexia** en diabetes e hipertiroidismo.' },
                    { k: 'Catarsis', v: 'Normal: de **1–2 por día a 2 por semana**. Un **cambio reciente del ritmo** puede ser el primer signo de un carcinoma de colon. Color: **acolia** (coledociano), **melena** (HDA), sangre roja, moco, parásitos. Laxantes.' },
                    { k: 'Diuresis', v: 'Normal **≈ 1,5 L/día**. **Poliuria > 3000 mL**, **oliguria < 500 mL**, **anuria** = ausencia. Polaquiuria, nicturia.' },
                    { k: 'Tabaco', v: 'Tipo, desde cuándo, si dejó. **Paquetes/año = cigarrillos por día × años fumando ÷ 20** (estima el riesgo de EPOC y de cáncer de pulmón).' },
                    { k: 'Alcohol y drogas', v: 'Se **ocultan o niegan**: preguntar con cuidado, sin juzgar. Los que se inyectan: riesgo de HIV y hepatitis B.' },
                    { k: 'Medicamentos', v: 'Cuáles, dosis, desde cuándo (en ancianos: **polifarmacia**). Analgésicos → hemorragia digestiva; laxantes, tranquilizantes.' },
                    { k: 'Sexuales y actividad física', v: 'Parejas, protección, anticoncepción, ITS. Actividad física: cantidad y calidad.' },
                  ],
                },
              ],
            },
          ],
        },
        { t: 'callout', kind: 'warn', title: 'Error frecuente', text: 'Confundir **antecedentes de la enfermedad actual** (estudios y tratamientos de ESTE problema, que van en la enfermedad actual) con **antecedentes personales** (todo lo previo de la vida del paciente).' },
      ],
      refs: [A('pp. 49–52')],
    },
    {
      id: 'heredofamiliares',
      kicker: 'Anamnesis remota',
      title: 'Antecedentes hereditarios y familiares',
      priority: 'muy-importante',
      summary: 'Edad y estado de salud de padres, hermanos e hijos (o edad y causa de muerte); enfermedades con transmisión genética o familiar; genograma.',
      blocks: [
        { t: 'p', text: 'Se busca en la **línea directa** (padres, hermanos, hijos) y en los colaterales principales, con la **edad** y, si fallecieron, la **causa y la edad de muerte**. Argente recomienda dibujar un **genograma**.' },
        {
          t: 'cards',
          cols: 3,
          items: [
            { tag: 'Metabólicas', title: 'Diabetes, obesidad, gota', text: 'Fuerte componente familiar.', tone: 'gold' },
            { tag: 'Cardiovasculares', title: 'HTA, aterosclerosis, coronaria', text: 'Enfermedad coronaria temprana en familiares directos: factor de riesgo.', tone: 'rose' },
            { tag: 'Otras', title: 'Neoplasias, TBC, alergias, colágeno', text: 'Neoplasias (mama, colon), tuberculosis (contagio en convivientes), enfermedades hereditarias.', tone: 'sky' },
          ],
        },
        { t: 'callout', kind: 'tip', title: 'Repregunta posible', text: '«¿Por qué preguntás por la tuberculosis en los familiares si no es hereditaria?» → Porque importa el **contagio** en los **convivientes**: es antecedente **familiar** aunque no **hereditario**. Por eso el apartado se llama «hereditarios **y** familiares».' },
      ],
      refs: [A('p. 52')],
    },
    {
      id: 'interrogatorio-sistemas',
      kicker: 'Anamnesis sistémica',
      title: 'Interrogatorio por aparatos y sistemas',
      priority: 'muy-importante',
      summary: 'Un repaso ordenado de síntomas por aparato para no omitir nada que el paciente no relacionó con su enfermedad.',
      blocks: [
        {
          t: 'table',
          head: ['Aparato', 'Qué se pregunta (ejemplos de Argente)'],
          rows: [
            ['Respiratorio', 'Tos, expectoración, **hemoptisis**, asma, neumonía, pleuresía, tuberculosis.'],
            ['Cardiovascular', 'HTA, **dolor precordial**, infarto, palpitaciones, **disnea**, **edema**, soplos, claudicación intermitente, chagas, fiebre reumática.'],
            ['Digestivo', 'Náuseas, vómitos, epigastralgia, diarrea, constipación, **ictericia**, cólico biliar, **melena**, enterorragia.'],
            ['Nefrourológico', 'Cólico renal, **disuria**, **hematuria**, dolor lumbar, infección urinaria, ITS.'],
            ['Endocrino-metabólico', 'Diabetes, obesidad, gota, tiroides, corticoides.'],
            ['Hematológico', 'Anemia, sangrados, mononucleosis, HIV.'],
            ['Nervioso', 'Cefalea, vértigo, mareo, convulsiones, alteraciones motoras, depresión.'],
            ['Ginecológico', 'Ciclo, amenorrea, menopausia, ginecorragia, partos, abortos, anticonceptivos.'],
          ],
          caption: 'Argente, p. 49. Merlín la llama «anamnesis sistémica».',
        },
      ],
      refs: [A('p. 49'), M('PDF 2, p. 4')],
    },
    {
      id: 'examen-fisico',
      kicker: 'Examen físico',
      title: 'El examen físico dentro de la historia clínica',
      priority: 'muy-importante',
      summary: 'Examen general (signos vitales, impresión general, piel, TCS, linfático, SOMA) y segmentario (cabeza, cuello, tórax, abdomen, genitales, sistema nervioso), con inspección, palpación, percusión y auscultación.',
      blocks: [
        {
          t: 'cards',
          cols: 4,
          items: [
            { tag: '1', title: 'Inspección', text: 'Empieza **cuando el paciente entra**. Estática y dinámica (espontánea u ordenada). Con buena luz, respetando el pudor.', tone: 'sky' },
            { tag: '2', title: 'Palpación', text: 'Con las manos templadas: temperatura, sensibilidad, consistencia, tamaño, movilidad, frémitos.', tone: 'rose' },
            { tag: '3', title: 'Percusión', text: 'Sonoridad, matidez, timpanismo: lo que hay debajo (aire, líquido, sólido).', tone: 'lilac' },
            { tag: '4', title: 'Auscultación', text: 'Ruidos normales y agregados (corazón, pulmón, abdomen, vasos).', tone: 'gold' },
          ],
        },
        { t: 'callout', kind: 'key', title: 'El orden cambia en el abdomen', text: 'En el abdomen se ausculta **antes** de palpar y percutir, para no modificar los ruidos hidroaéreos (es pregunta de Ortega en la segunda era).', refs: [r('ef-dig-1', undefined)] },
        {
          t: 'compare',
          title: 'Examen general y segmentario',
          cols: [
            { title: 'Examen general', tone: 'sky', items: ['**Signos vitales**: TA, FC, FR, temperatura (y saturación), peso, talla, IMC.', '**Impresión general**: conciencia, actitud, decúbito, facies, marcha, constitución, nutrición e hidratación.', 'Piel y faneras, **TCS**, **sistema linfático**, SOMA.'] },
            { title: 'Segmentario', tone: 'rose', items: ['Cabeza y cuello', 'Tórax: respiratorio y cardiovascular', 'Abdomen', 'Genitales y tacto rectal', 'Sistema nervioso: funciones superiores, motilidad, sensibilidad, coordinación, pares craneales'] },
          ],
        },
        { t: 'p', text: 'Cada parte se desarrolla en su capítulo (examen general y signos vitales, cabeza y cuello, tórax, abdomen, neurológico). Acá alcanza con saber **qué lugar ocupa** y en qué **orden**.' },
      ],
      refs: [A('pp. 53–55'), r('califano', 'cap. 1, p. 3'), M('PDF 2, p. 4')],
    },
    {
      id: 'elaboracion',
      kicker: 'Elaboración intelectual',
      title: 'Resumen semiológico, consideraciones diagnósticas, evolución y epicrisis',
      priority: 'imprescindible',
      summary: 'Resumen: los datos positivos. Consideraciones: síndromes, diferenciales y presuntivos (la parte más importante). Evolución: lo que pasa cada día. Epicrisis: el cierre al alta o al fallecimiento.',
      blocks: [
        {
          t: 'kv',
          items: [
            { k: 'Resumen semiológico', v: 'Los **datos positivos** de la anamnesis y del examen físico. Doble finalidad: es una **HC abreviada** de lectura rápida y la **base** de las consideraciones diagnósticas.' },
            { k: 'Consideraciones diagnósticas', v: 'Se fundamentan los **síndromes** que surgen de los síntomas y signos; se discuten los **diagnósticos diferenciales** y se llega a uno o más **diagnósticos presuntivos** (anatómico, funcional o etiológico) que orientan los **estudios** y el **tratamiento** hasta el diagnóstico definitivo.' },
            { k: 'Evolución diaria', v: '**Datos mensurables** (temperatura, peso, diuresis, pulso, TA, FR), cambios del examen, **resultados** de estudios, interconsultas, tratamiento y sus efectos adversos, evolución de los síntomas.' },
            { k: 'Epicrisis', v: '«El momento intelectivo **culminante**»: al **alta o fallecimiento**. Datos del paciente, antecedentes relevantes, motivo de internación, diferenciales y estudios, tratamiento y resultados, evolución, problemas pendientes, **diagnóstico de alta** (etiológico, anatomopatológico y funcional), **pronóstico** y plan posalta.' },
          ],
        },
        { t: 'callout', kind: 'key', title: 'La frase que vale oro', text: 'Las consideraciones diagnósticas son **la parte más importante** de la HC: resumen toda la habilidad del médico. «**Los malos diagnósticos suelen ser buenos razonamientos sobre hechos mal observados**».', refs: [A('p. 55')] },
        {
          t: 'scale',
          title: 'Niveles del diagnóstico (Merlín)',
          items: [
            { k: '1', t: 'Anatómico', d: 'Dónde está la lesión.', tone: 'sky' },
            { k: '2', t: 'Sindrómico', d: 'Qué síndrome configura.', tone: 'lilac' },
            { k: '3', t: 'Diferenciales', d: 'Qué otras causas pueden darlo.', tone: 'rose' },
            { k: '4', t: 'Presuntivo', d: 'El más probable.', tone: 'gold' },
            { k: '5', t: 'Definitivo', d: 'Confirmado por estudios.', tone: 'mint' },
          ],
          ends: ['Clínica', 'Confirmación'],
          caption: 'Merlín, PDF 2, p. 5. Argente agrega que el presuntivo puede ser anatómico, funcional o etiológico.',
        },
      ],
      refs: [A('p. 55'), M('PDF 2, pp. 5–6')],
    },
    {
      id: 'variantes',
      kicker: 'Repreguntas',
      title: 'HC ambulatoria (orientada al problema) y HC del anciano',
      priority: 'complementario',
      summary: 'HCOP de Weed: base de datos, lista de problemas y notas de evolución con formato SOAP. En el anciano: deterioro cognitivo y sensorial, contexto social, polifarmacia.',
      blocks: [
        {
          t: 'steps',
          title: 'Historia clínica orientada al problema (Weed, 1960)',
          items: [
            { title: 'Base de datos', text: 'Filiación, antecedentes relevantes, familiares, **medicamentos** (con dosis y fechas), examen físico preformado, laboratorio.' },
            { title: 'Lista de problemas', text: '**La parte más importante** (primera página). Un problema no tiene por qué ser una enfermedad: puede ser un síntoma, un dato de laboratorio o un factor de riesgo. Activos o inactivos, crónicos o transitorios.' },
            { title: 'Notas de evolución (SOAP)', text: '**S**ubjetivo (lo que refiere) · **O**bjetivo (examen y estudios) · **A**nálisis o evaluación · **P**lan.' },
          ],
        },
        { t: 'callout', kind: 'note', title: 'El paciente anciano', text: 'Dificultan la HC el **deterioro de las funciones cerebrales superiores** (memoria) y la pérdida **sensorial** (audición, visión). Es clave el **contexto social**: si vive solo o con familia, quién lo cuida; y la **polifarmacia**.', refs: [A('p. 55')] },
      ],
      refs: [A('cap. 7, pp. 57–59'), A('p. 55')],
    },
    {
      id: 'oral',
      kicker: 'Examen oral',
      title: 'Cómo responderla en el oral',
      priority: 'imprescindible',
      summary: 'Definición → cinco características → estructura en orden → desarrollo de la anamnesis con ejemplos → elaboración. Dos minutos, sin titubear.',
      blocks: [
        {
          t: 'case',
          title: 'Respuesta modelo (≈ 2 minutos)',
          text: '«La historia clínica es la **narración ordenada y detallada** de los acontecimientos psicofísicos y sociales, pasados y presentes, de una persona, que surge de la **anamnesis, el examen físico y la elaboración intelectual del médico** y permite emitir un diagnóstico de salud o enfermedad. Es un documento **médico, científico, legal, económico y humano**, y pertenece al paciente.\n\nSu estructura es: **anamnesis, examen físico, resumen semiológico, consideraciones diagnósticas, evolución y epicrisis**.\n\nLa anamnesis incluye los **datos personales**; el **motivo de consulta**, que se escribe en pocas palabras con los síntomas y su tiempo de evolución, nunca con un diagnóstico; la **enfermedad actual**, que es el relato cronológico desde el primer síntoma, primero libre y después dirigido, con los estudios y tratamientos previos; los **antecedentes personales** fisiológicos, patológicos, de medio y hábitos; y los **heredofamiliares**.\n\nDespués viene el **examen físico** general y segmentario. Con los datos positivos armo el **resumen semiológico**, y en las **consideraciones diagnósticas**, que son la parte más importante, agrupo en síndromes, planteo diferenciales y llego a un presuntivo que orienta estudios y tratamiento. Por último, la **evolución diaria** y la **epicrisis** al alta.»',
          question: '¿Qué te pueden repreguntar?',
          answer: 'Diferencia entre motivo de consulta y enfermedad actual · qué es un síntoma, un signo y un síndrome · cómo calculás paquetes/año · qué va en el resumen semiológico · qué es la epicrisis y cuándo se hace · tipos de interrogatorio · de quién es la HC.',
        },
        { t: 'callout', kind: 'tip', title: 'Truco para que suene natural', text: 'Usá un **paciente de ejemplo** que te acompañe toda la respuesta: «por ejemplo, un hombre de 60 años que consulta por **dolor retroesternal de 2 horas**…». Te sirve para el motivo de consulta, la enfermedad actual (ALICIA), los antecedentes (HTA, tabaquismo de 30 paquetes/año) y el planteo sindromático.' },
      ],
    },
  ],

  quickRef: [
    {
      title: 'Historia clínica en una tabla',
      head: ['Parte', 'Qué contiene', 'Error típico'],
      rows: [
        ['Datos personales', 'Nombre, edad, sexo, nacionalidad, estado civil, ocupación, domicilio, responsable', 'No usarlos para orientar (edad, ocupación, zona)'],
        ['Motivo de consulta', 'Síntomas/signos + tiempo de evolución, en pocas palabras', 'Poner un diagnóstico o «enviado por el Dr…»'],
        ['Enfermedad actual', 'Relato cronológico, libre y dirigido; estudios, diagnósticos y tratamientos previos', 'Mezclarla con antecedentes personales'],
        ['Antecedentes personales', 'Fisiológicos · patológicos · de medio · hábitos', 'Olvidar alergias (van en la carátula)'],
        ['Heredofamiliares', 'Padres, hermanos, hijos: edad, salud, causa de muerte; genograma', 'Preguntar solo «¿alguien enfermo?»'],
        ['Examen físico', 'General + segmentario', 'Saltear signos vitales'],
        ['Resumen semiológico', 'Solo datos positivos', 'Copiar toda la HC'],
        ['Consideraciones diagnósticas', 'Síndromes → diferenciales → presuntivo; plan', 'Ir directo al diagnóstico sin síndrome'],
        ['Evolución diaria', 'Datos mensurables, cambios, estudios, tratamiento', '—'],
        ['Epicrisis', 'Cierre al alta o fallecimiento: diagnóstico de alta, pronóstico, plan', 'Confundirla con el resumen'],
      ],
    },
  ],

  mcq: [
    { id: 'hc-mc-1', topic: 'Definición', difficulty: 1, stem: '¿Cuál de estas NO es una de las características de la historia clínica como documento según Argente?', options: [
      { text: 'Legal', why: 'Sí lo es: testimonio de la enfermedad y de lo actuado.' },
      { text: 'Económico', why: 'Sí lo es: las medidas tienen costos.' },
      { text: 'Administrativo', why: 'Correcto: las cinco son médico, científico, legal, económico y humano.' },
      { text: 'Humano', why: 'Sí lo es: refleja la relación médico-paciente.' },
    ], answer: 2, refs: [A('p. 47')] },
    { id: 'hc-mc-2', topic: 'Motivo de consulta', difficulty: 1, stem: '¿Cuál es un motivo de consulta bien escrito?', options: [
      { text: '«Neumonía de la base derecha»', why: 'Es un diagnóstico: no va en el motivo de consulta.' },
      { text: '«Tos, fiebre y expectoración de 3 días de evolución»', why: 'Correcto: síntomas en pocas palabras con su tiempo de evolución.' },
      { text: '«Derivado por el Dr. N. N. para estudio»', why: 'Carece de valor médico: no dice el problema.' },
      { text: '«Paciente de 60 años, hipertenso y fumador»', why: 'Son datos personales y antecedentes, no el motivo.' },
    ], answer: 1, refs: [A('p. 48')] },
    { id: 'hc-mc-3', topic: 'Estructura', difficulty: 1, stem: '¿Qué parte de la historia clínica contiene solo los datos positivos de la anamnesis y del examen físico?', options: [
      { text: 'Epicrisis', why: 'La epicrisis es el cierre al alta o fallecimiento.' },
      { text: 'Consideraciones diagnósticas', why: 'Ahí se elaboran síndromes y diagnósticos a partir del resumen.' },
      { text: 'Resumen semiológico', why: 'Correcto: es una HC abreviada y la base de las consideraciones.' },
      { text: 'Evolución diaria', why: 'Registra lo que pasa día a día.' },
    ], answer: 2, refs: [A('p. 55')] },
    { id: 'hc-mc-4', topic: 'Anamnesis', difficulty: 2, stem: 'Una paciente con demencia es interrogada junto a su hija, que completa los datos. El interrogatorio es:', options: [
      { text: 'Directo', why: 'Directo es cuando responde solo el paciente.' },
      { text: 'Indirecto', why: 'Indirecto es cuando responde solo un tercero.' },
      { text: 'Mixto', why: 'Correcto: responden la paciente y la acompañante.' },
      { text: 'Dirigido', why: '«Dirigido» describe cómo se pregunta (después del relato libre), no quién responde.' },
    ], answer: 2, refs: [M('PDF 2, p. 4')] },
    { id: 'hc-mc-5', topic: 'Hábitos', difficulty: 2, stem: 'Un paciente fuma 20 cigarrillos por día desde hace 30 años. ¿Cuántos paquetes/año tiene?', options: [
      { text: '20', why: 'Revisá la fórmula: cigarrillos/día × años ÷ 20.' },
      { text: '30', why: 'Correcto: 20 × 30 ÷ 20 = 30 paquetes/año.' },
      { text: '600', why: 'Falta dividir por 20 (cigarrillos por paquete).' },
      { text: '1,5', why: 'Se divide el producto, no los años.' },
    ], answer: 1, refs: [A('p. 52')] },
    { id: 'hc-mc-6', topic: 'Elaboración', difficulty: 2, stem: '¿Cuándo se confecciona la epicrisis?', options: [
      { text: 'Al ingreso, después del examen físico', why: 'En ese momento se hace el resumen semiológico.' },
      { text: 'Todos los días', why: 'Eso es la evolución diaria.' },
      { text: 'Al alta o al fallecimiento del paciente', why: 'Correcto: es el momento intelectivo culminante de la HC.' },
      { text: 'Cuando se pide un estudio complementario', why: 'Los estudios se fundamentan en las consideraciones diagnósticas.' },
    ], answer: 2, refs: [A('p. 55')] },
    { id: 'hc-mc-7', topic: 'Antecedentes', difficulty: 2, stem: 'La alergia a la penicilina de un paciente:', options: [
      { text: 'Se anota en la enfermedad actual', why: 'No es parte del padecimiento actual.' },
      { text: 'Se anota en antecedentes personales y se resalta en la carátula', why: 'Correcto: los antecedentes alérgicos positivos deben resaltarse.' },
      { text: 'Solo se anota si el paciente está internado', why: 'Se anota siempre.' },
      { text: 'Va en los antecedentes heredofamiliares', why: 'Es un antecedente personal.' },
    ], answer: 1, refs: [A('p. 50')] },
    { id: 'hc-mc-8', topic: 'Bases', difficulty: 1, stem: 'La ictericia que el médico observa en las escleras es:', options: [
      { text: 'Un síntoma', why: 'El síntoma lo refiere el paciente.' },
      { text: 'Un signo', why: 'Correcto: es un hallazgo objetivo del examen.' },
      { text: 'Un síndrome', why: 'Un síndrome es un conjunto de síntomas y signos.' },
      { text: 'Una enfermedad', why: 'La enfermedad tiene una causa determinada.' },
    ], answer: 1 },
    { id: 'hc-mc-9', topic: 'Hábitos', difficulty: 2, stem: 'Según Argente, una diuresis menor de 500 mL/día se llama:', options: [
      { text: 'Anuria', why: 'Anuria es la ausencia de formación o emisión de orina.' },
      { text: 'Oliguria', why: 'Correcto. Poliuria es más de 3000 mL/día.' },
      { text: 'Polaquiuria', why: 'Polaquiuria es aumento de la frecuencia de las micciones.' },
      { text: 'Nicturia', why: 'Nicturia es orinar de noche.' },
    ], answer: 1, refs: [A('p. 51')] },
    { id: 'hc-mc-10', topic: 'Elaboración', difficulty: 3, stem: 'Para Argente, ¿cuál es la parte más importante de la historia clínica?', options: [
      { text: 'El motivo de consulta', why: 'Es la «portada», pero no la más importante.' },
      { text: 'El examen físico', why: 'Es fundamental, pero el libro jerarquiza la elaboración.' },
      { text: 'Las consideraciones diagnósticas', why: 'Correcto: resumen la habilidad del médico y orientan las decisiones.' },
      { text: 'Los antecedentes heredofamiliares', why: 'Son una parte de la anamnesis.' },
    ], answer: 2, refs: [A('p. 55')] },
  ],

  developments: [
    {
      id: 'hc-d-1',
      question: '¿Qué es la historia clínica?',
      priority: 'imprescindible',
      prio: 'P1',
      origen: 'practica',
      ficha: 'definicion',
      answer: [
        { t: 'p', text: 'Es la **narración ordenada y detallada** de los acontecimientos **psicofísicos y sociales, pasados y presentes**, referidos a una persona, que surgen de la **anamnesis**, del **examen físico** y de la **elaboración intelectual del médico**, y que permiten emitir un **diagnóstico de salud o enfermedad**.' },
        { t: 'p', text: 'Es un documento **médico, científico, legal, económico y humano**. Debe ser objetiva, completa, ordenada, legible y coherente. **Pertenece al paciente**; el médico y la institución son sus guardianes.' },
      ],
      keyPoints: ['Narración ordenada y detallada', 'Psicofísicos y sociales, pasados y presentes', 'Anamnesis + examen físico + elaboración', 'Cinco características (MCLEH)'],
      refs: [A('p. 47'), M('PDF 1, p. 2')],
    },
    {
      id: 'hc-d-2',
      question: '¿Cuál es la estructura de la historia clínica?',
      priority: 'imprescindible',
      prio: 'P1',
      origen: 'practica',
      ficha: 'estructura',
      answer: [
        { t: 'list', ordered: true, items: ['**Anamnesis**: datos personales, motivo de consulta, enfermedad actual y sus antecedentes, antecedentes personales (fisiológicos, patológicos, de medio, hábitos) y heredofamiliares.', '**Examen físico**: general y segmentario.', '**Resumen semiológico**.', '**Consideraciones diagnósticas** (y plan de estudios y tratamiento).', '**Evolución diaria**.', '**Epicrisis**.'] },
      ],
      keyPoints: ['Seis partes en orden', 'La anamnesis tiene cinco componentes'],
      refs: [A('p. 47')],
    },
    {
      id: 'hc-d-3',
      question: '¿Qué diferencia hay entre el motivo de consulta y la enfermedad actual?',
      priority: 'imprescindible',
      prio: 'P1',
      origen: 'practica',
      ficha: 'datos-mc',
      answer: [
        { t: 'p', text: 'El **motivo de consulta** es la portada: en **pocas palabras**, los **síntomas o signos** principales con su **tiempo de evolución**, sin diagnósticos («dolor retroesternal de 2 horas de evolución»).' },
        { t: 'p', text: 'La **enfermedad actual** es el **desarrollo completo y cronológico** del padecimiento desde la primera manifestación: primero el relato libre y después el interrogatorio dirigido, con la semiología de cada síntoma, los estudios, diagnósticos y tratamientos previos y la repercusión en la vida del paciente.' },
      ],
      keyPoints: ['MC: sucinto, síntomas + tiempo, sin diagnóstico', 'EA: cronológica, libre → dirigida, estudios y tratamientos'],
      refs: [A('pp. 48–49')],
    },
    {
      id: 'hc-d-4',
      question: '¿Qué antecedentes personales se interrogan?',
      priority: 'imprescindible',
      prio: 'P1',
      origen: 'practica',
      ficha: 'antecedentes',
      answer: [
        { t: 'kv', items: [
          { k: 'Fisiológicos', v: 'Nacimiento, desarrollo; en la mujer menarca, ciclos, FUM, gestas, partos, abortos.' },
          { k: 'Patológicos', v: 'Infancia, enfermedades médicas (por aparatos), alérgicos (se resaltan), quirúrgicos y traumáticos.' },
          { k: 'De medio', v: 'Lugar de nacimiento y residencias, vivienda, escolaridad, ocupación, núcleo familiar.' },
          { k: 'Hábitos', v: 'Alimentación, apetito, catarsis, diuresis, tabaco (paquetes/año), alcohol, drogas, medicamentos, sexuales, actividad física.' },
        ] },
      ],
      keyPoints: ['Cuatro grupos', 'Alergias en la carátula', 'Paquetes/año = cig/día × años ÷ 20'],
      refs: [A('pp. 49–52')],
    },
    {
      id: 'hc-d-5',
      question: '¿Qué es el resumen semiológico y qué son las consideraciones diagnósticas?',
      priority: 'imprescindible',
      prio: 'P1',
      origen: 'practica',
      ficha: 'elaboracion',
      answer: [
        { t: 'p', text: 'El **resumen semiológico** reúne los **datos positivos** de la anamnesis y del examen físico: es una HC abreviada de lectura rápida y la base de las consideraciones diagnósticas.' },
        { t: 'p', text: 'En las **consideraciones diagnósticas** se fundamentan los **síndromes**, se discuten los **diagnósticos diferenciales** y se llega a uno o más **presuntivos** (anatómico, funcional o etiológico) que orientan los **estudios** y el **tratamiento**. Argente las considera **la parte más importante** de la HC: «los malos diagnósticos suelen ser buenos razonamientos sobre hechos mal observados».' },
      ],
      keyPoints: ['Resumen = datos positivos', 'Consideraciones = síndrome → diferenciales → presuntivo', 'La parte más importante'],
      refs: [A('p. 55')],
    },
    {
      id: 'hc-d-6',
      question: '¿Qué es la epicrisis y qué contiene?',
      priority: 'muy-importante',
      prio: 'P1',
      origen: 'practica',
      ficha: 'elaboracion',
      answer: [
        { t: 'p', text: 'Es el **cierre** de la historia clínica, «el momento intelectivo culminante»: se hace **al alta o al fallecimiento**. Contiene datos del paciente, antecedentes relevantes, el motivo de internación, los diferenciales planteados y los estudios, el tratamiento y sus resultados, la evolución y el estado al alta, los problemas pendientes, el **diagnóstico de alta** (etiológico, anatomopatológico y funcional), el **pronóstico** y el plan posalta.' },
      ],
      keyPoints: ['Al alta o fallecimiento', 'Diagnóstico de alta + pronóstico + plan'],
      refs: [A('p. 55')],
    },
    {
      id: 'hc-d-7',
      question: '¿Qué tipos de interrogatorio existen y cómo se valora su confiabilidad?',
      priority: 'muy-importante',
      prio: 'P2',
      origen: 'practica',
      ficha: 'anamnesis',
      answer: [
        { t: 'p', text: 'Según quién responde: **directo** (el paciente), **indirecto** (familiar o acompañante: niños, pacientes con alteración de la conciencia o deterioro cognitivo) y **mixto** (ambos). Según su carácter: **confiable**, **poco confiable** o **no confiable**, y así se consigna.' },
      ],
      keyPoints: ['Directo / indirecto / mixto', 'Confiable / poco confiable / no confiable'],
      refs: [M('PDF 2, p. 4'), A('p. 48')],
    },
    {
      id: 'hc-d-8',
      question: 'Repregunta: ¿qué diferencia hay entre síntoma, signo, síndrome y enfermedad? ¿Qué es un signo patognomónico?',
      priority: 'muy-importante',
      prio: 'P2',
      origen: 'practica',
      answer: [
        { t: 'p', text: '**Síntoma**: lo que el paciente refiere (subjetivo). **Signo**: lo que el médico encuentra (objetivo). **Síndrome**: conjunto de síntomas y signos con un mecanismo común que puede tener distintas causas. **Enfermedad**: entidad con causa determinada. **Patognomónico**: signo que por sí solo asegura el diagnóstico (Merlín cita el signo de Romaña).' },
      ],
      keyPoints: ['Subjetivo vs objetivo', 'Síndrome: varias causas', 'Patognomónico'],
      refs: [M('PDF 2, p. 2')],
    },
    {
      id: 'hc-d-9',
      question: 'Integradora: un hombre de 62 años consulta por dolor en el pecho. Presentá cómo armarías su historia clínica.',
      priority: 'muy-importante',
      prio: 'P2',
      origen: 'practica',
      answer: [
        { t: 'list', ordered: true, items: [
          '**Datos personales**: 62 años, varón, ocupación (¿sedentaria?, ¿expuesto a tóxicos?), domicilio.',
          '**Motivo de consulta**: «dolor retroesternal de 2 horas de evolución» (síntoma + tiempo, sin diagnóstico).',
          '**Enfermedad actual**: empiezo por los antecedentes relacionados («paciente con HTA, diabetes y tabaquismo de 40 paquetes/año que…») y caracterizo el dolor con **ALICIA** (antigüedad, localización retroesternal, irradiación a brazo izquierdo o mandíbula, carácter opresivo, intensidad 8/10, qué lo alivia o agrava), los síntomas acompañantes (sudoración, disnea, náuseas) y si consultó o tomó algo.',
          '**Antecedentes**: personales (HTA, DBT, dislipidemia; quirúrgicos; alergias; hábitos: tabaco, alcohol, sedentarismo, medicamentos) y heredofamiliares (enfermedad coronaria en familiares directos).',
          '**Examen físico**: signos vitales (TA en ambos brazos, FC, FR, temperatura, saturación), impresión general (facies, sudoración), cardiovascular y respiratorio.',
          '**Resumen semiológico** con los positivos y **consideraciones diagnósticas**: síndrome de dolor torácico de probable origen isquémico (ángor), diferenciales (disección aórtica, TEP, pericarditis, neumotórax, esofágico), plan de estudios (ECG, enzimas).',
        ] },
      ],
      keyPoints: ['Usar un paciente de ejemplo', 'Antecedentes relacionados al inicio de la EA', 'ALICIA', 'Síndrome antes que diagnóstico'],
    },
  ],

  memory: [
    {
      id: 'hc-mem-1',
      title: 'Las 6 partes de la HC',
      purpose: 'Recitar la estructura sin olvidar ninguna.',
      evaluates: [{ t: 'list', ordered: true, items: ['Anamnesis', 'Examen físico', 'Resumen semiológico', 'Consideraciones diagnósticas', 'Evolución diaria', 'Epicrisis'] }],
      interpret: 'Las tres primeras **recogen** datos; las tres últimas **piensan** y **siguen** al paciente.',
      mnemonic: { hook: '«A-E-R-C-E-E»: «**A**nte **E**l **R**elato, **C**onsidero, **E**volucion y **E**pilogo»', explain: 'Anamnesis, Examen, Resumen, Consideraciones, Evolución, Epicrisis.' },
      recall: { q: '¿Cuál es la tercera parte de la HC y qué contiene?', a: 'El resumen semiológico: los datos positivos de la anamnesis y del examen físico.' },
    },
    {
      id: 'hc-mem-2',
      title: 'Las 5 características del documento',
      purpose: 'Completar la definición.',
      evaluates: [{ t: 'list', items: ['Médico', 'Científico', 'Legal', 'Económico', 'Humano'] }],
      interpret: 'Cada una responde a «¿para quién sirve la HC?»: para el médico, la ciencia, la justicia, quien paga y el paciente.',
      mnemonic: { hook: 'MCLEH: «Mi Clínica Lleva Ética Humana»', explain: 'Médico, Científico, Legal, Económico, Humano.' },
      recall: { q: '¿Por qué la HC es un documento legal?', a: 'Porque todo lo escrito es testimonio de la enfermedad y justifica las medidas diagnósticas y terapéuticas según las buenas prácticas.' },
    },
    {
      id: 'hc-mem-3',
      title: 'Antecedentes personales',
      purpose: 'Ordenar la anamnesis remota.',
      evaluates: [{ t: 'list', items: ['Fisiológicos', 'Patológicos (infancia, médicos, alérgicos, quirúrgicos/traumáticos)', 'De medio', 'Hábitos'] }],
      interpret: 'Del cuerpo (fisiológicos y patológicos) al entorno (medio) y a las conductas (hábitos).',
      mnemonic: { hook: '«F-P-M-H»: «Fui Paciente Muy Honesta»', explain: 'Fisiológicos, Patológicos, de Medio, Hábitos.' },
      recall: { q: '¿Cómo se calcula el índice paquetes/año?', a: 'Cigarrillos por día × años de fumador ÷ 20.' },
    },
  ],

  maneuvers: undefined,

  closing: {
    map: {
      center: 'Historia clínica',
      nodes: [
        { label: 'Qué es', tone: 'sky', items: ['Narración ordenada', 'MCLEH', 'Del paciente'] },
        { label: 'Anamnesis', tone: 'rose', items: ['Datos', 'MC (sin diagnóstico)', 'EA cronológica', 'Antecedentes'] },
        { label: 'Examen', tone: 'lilac', items: ['General', 'Segmentario'] },
        { label: 'Elaboración', tone: 'gold', items: ['Resumen (positivos)', 'Consideraciones ★', 'Evolución', 'Epicrisis (alta)'] },
      ],
    },
    essentials: [
      'Definición textual de Argente y las **5 características** (médico, científico, legal, económico, humano).',
      'Estructura en orden: **anamnesis → examen físico → resumen semiológico → consideraciones diagnósticas → evolución → epicrisis**.',
      'Motivo de consulta: **síntomas + tiempo, sin diagnóstico**. Enfermedad actual: **cronológica, libre y dirigida**.',
      'Antecedentes personales: **fisiológicos, patológicos, de medio y hábitos**; heredofamiliares con **genograma**.',
      '**Paquetes/año** = cigarrillos/día × años ÷ 20. Oliguria < 500 mL; poliuria > 3000 mL.',
      'Consideraciones diagnósticas = **la parte más importante** (síndrome → diferenciales → presuntivo).',
      'Epicrisis: **al alta o fallecimiento**.',
    ],
    links: [
      { chapterId: 'sig-01', text: 'Cómo se interroga el **dolor** (ALICIA) dentro de la enfermedad actual.' },
      { chapterId: 'gen-01', text: 'El **examen físico general** y los **signos vitales**.' },
    ],
    pitfalls: [
      'Escribir un diagnóstico en el motivo de consulta.',
      'Olvidar el resumen semiológico o la epicrisis al recitar la estructura.',
      'Confundir los antecedentes de la enfermedad actual con los antecedentes personales.',
      'Aceptar la explicación causal del paciente sin interrogar («es por la hepatitis de chico»).',
    ],
    miniExam: [],
  },

  diagrams: {},
  clase,
};

export default chapter;
