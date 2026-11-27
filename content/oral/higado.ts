import type { ApunteUnidad } from './tipos';

/*
 * Ictericia, cirrosis, hipertensión portal y ascitis — apunte para el oral.
 * Base: Merlín («Ictericia», «Cirrosis», «Hipertensión portal») y apunte de Ortega («Cirrosis e hipertensión portal»
 * pp. 393–401), con las clases de Ortega (cirrosis 2, HTP 2), contrastados con Argente cap. 13 y 42-13.
 */
export const apunte: ApunteUnidad = {
  unidad: 'higado',
  temas: [
    {
      tema: 'ictericia',
      titulo: 'Ictericia',
      porque: [
        'La bilirrubina sale de la **hemoglobina**. La **indirecta** (no conjugada) viaja pegada a la albúmina, **no se filtra** por el riñón; el hígado la **conjuga** y la vuelve **directa** (hidrosoluble), que se excreta por la bilis y **sí pasa a la orina**.',
        'Entonces: si sobra **indirecta** (hemólisis) no hay coluria. Si sube la **directa** (hígado enfermo u obstrucción), aparece **coluria**; y si la bilis no llega al intestino, la materia fecal queda **blanca** (acolia).',
      ],
      bloques: [
        { t: 'def', text: 'Coloración **amarilla** de piel, mucosas y **escleróticas** cuando la bilirrubina supera **2 mg/dl** (normal: total ≈ 1, directa ≈ 0,4, indirecta ≈ 0,9). Se busca en **escleróticas**, paladar blando y frenillo lingual. **Seudoictericia**: carotenos (no tiñe escleróticas).' },
        {
          t: 'cuadro',
          titulo: 'Clasificación',
          head: ['', 'Prehepática', 'Hepática (hepatocelular)', 'Poshepática (obstructiva)'],
          filas: [
            ['Bilirrubina', '**Indirecta**', 'Mixta / directa', '**Directa**'],
            ['Causas', '**Hemólisis**; Gilbert (captación)', '**Hepatitis**, cirrosis, fármacos, alcohol', '**Coledocolitiasis**, **cáncer de cabeza de páncreas**, vías biliares'],
            ['Orina', 'Normal (sin coluria)', '**Coluria**', '**Coluria**'],
            ['Heces', '**Hipercólicas**', 'Normocólicas', '**Acólicas** (masilla)'],
            ['Otros', 'Anemia, esplenomegalia', 'Compromiso del estado general', '**Prurito**, pérdida de peso (cáncer)'],
            ['Tono (Merlín)', '**Flavínica** (amarillo pálido)', '**Rubínica** (amarillo rojizo)', '**Verdínica** · melánica si es crónica'],
          ],
        },
        { t: 'clave', titulo: 'Ley de Courvoisier-Terrier', items: ['**Ictericia progresiva + pérdida de peso + vesícula palpable no dolorosa** → obstrucción **neoplásica** (cabeza de páncreas), no litiásica.'] },
        { t: 'paso', titulo: 'Anamnesis y examen', text: 'Edad y sexo, comienzo (brusco: hepatitis, colecistitis; insidioso: cirrosis, cáncer), alcohol, fármacos, hábitos sexuales, fiebre, dolor, **prurito**, **color de orina y heces**. Examen: escleróticas, lesiones de rascado, **estigmas de cirrosis**, hígado, bazo, vesícula, ganglio de Virchow.' },
      ],
      oral: '«La ictericia es la coloración amarilla de piel, mucosas y escleróticas cuando la bilirrubina supera 2 miligramos por decilitro. La bilirrubina indirecta viaja unida a la albúmina y no se filtra; el hígado la conjuga en directa, que es hidrosoluble y pasa a la orina. Se clasifica en prehepática, por hemólisis, con bilirrubina indirecta, sin coluria y con heces hipercólicas; hepática o hepatocelular, por hepatitis, cirrosis o fármacos, con coluria; y poshepática u obstructiva, por litiasis o cáncer de páncreas, con bilirrubina directa, coluria, acolia y prurito. La ley de Courvoisier-Terrier dice que una ictericia progresiva con vesícula palpable e indolora sugiere un cáncer de cabeza de páncreas. En la anamnesis busco edad, comienzo, alcohol, fármacos, prurito y el color de la orina y las heces.»',
      repreguntas: [
        { q: '¿Por qué en la ictericia hemolítica no hay coluria?', a: 'Porque sobra bilirrubina indirecta, que viaja unida a la albúmina y no se filtra.' },
        { q: '¿Qué es la acolia y qué indica?', a: 'Heces blancas, color masilla: la bilis no llega al intestino (obstrucción).' },
        { q: '¿Qué dice la ley de Courvoisier-Terrier?', a: 'Ictericia progresiva con vesícula palpable no dolorosa: obstrucción neoplásica (cabeza de páncreas).' },
      ],
      fuentes: 'Instituto Merlín, «Ictericia» · Argente-Álvarez, cap. 13.',
    },
    {
      tema: 'cirrosis',
      titulo: 'Cirrosis',
      porque: [
        'Una agresión crónica (alcohol, virus) destruye hepatocitos; el hígado se repara con **fibrosis** y **nódulos de regeneración** que deforman su arquitectura.',
        'De ahí salen dos problemas: el hígado **funciona menos** (insuficiencia: ictericia, poca albúmina, poca coagulación, encefalopatía) y la sangre **no pasa bien** a través de él (**hipertensión portal**).',
      ],
      bloques: [
        { t: 'def', text: 'Proceso **crónico y progresivo** de **fibrosis** del parénquima con **nódulos de regeneración** que distorsionan la arquitectura, con alteración de la circulación portal e **insuficiencia** del hepatocito.' },
        { t: 'paso', titulo: 'Causas', text: '**Alcohol** (cirrosis de Laennec) y **hepatitis B y C** (las principales), hígado graso no alcohólico, autoinmunes (cirrosis biliar primaria, hepatitis autoinmune), metabólicas (**hemocromatosis**, **Wilson**, déficit de alfa-1 antitripsina), congestivas (insuficiencia cardíaca, Budd-Chiari), criptogénica.' },
        {
          t: 'cuadro',
          titulo: 'Clínica',
          head: ['', 'Hallazgos'],
          filas: [
            ['**Compensada**', 'Asintomática o inespecífica: astenia, anorexia'],
            ['**Estigmas** (examen)', '**Arañas vasculares**, **eritema palmar**, **ginecomastia**, atrofia testicular, vello ginecoide, **hipertrofia parotídea**, **Dupuytren**, uñas blancas, hígado **firme de borde filoso**'],
            ['**Descompensada**', '**Ascitis**, **várices** (hemorragia), **encefalopatía** (asterixis, confusión), **ictericia**, PBE, síndrome hepatorrenal'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Child-Pugh (BATEA)',
          head: ['', '1 punto', '2 puntos', '3 puntos'],
          filas: [
            ['**B**ilirrubina (mg/dl)', '< 2', '2–3', '> 3'],
            ['**A**lbúmina (g/dl)', '> 3,5', '2,8–3,5', '< 2,8'],
            ['**T**iempo de Quick (%)', '> 70', '40–70', '< 40'],
            ['**E**ncefalopatía', 'Ausente', 'I–II', 'III–IV'],
            ['**A**scitis', 'Ausente', 'Leve', 'Moderada'],
          ],
          marca: 0,
        },
        { t: 'clave', titulo: 'Interpretación', items: ['**A** ≤ 6 puntos: compensada · **B** 7–9: descompensada reversible · **C** 10–15: indicación de **trasplante**.', 'Ortega lo marca en clase como lo que hay que saber «como el Padre Nuestro», junto con el GASA.'] },
      ],
      oral: '«La cirrosis es un proceso crónico y progresivo de fibrosis del parénquima con nódulos de regeneración que distorsionan la arquitectura del hígado, y lleva a la insuficiencia hepática y a la hipertensión portal. Sus causas principales son el alcohol y las hepatitis B y C; también el hígado graso, las autoinmunes y las metabólicas como la hemocromatosis y el Wilson. Puede ser compensada, casi asintomática, o descompensada, con ascitis, várices, encefalopatía e ictericia. Al examen busco los estigmas: arañas vasculares, eritema palmar, ginecomastia, atrofia testicular, hipertrofia parotídea y un hígado firme de borde filoso. Se estadifica con el Child-Pugh, con la regla BATEA: bilirrubina, albúmina, tiempo de protrombina, encefalopatía y ascitis; A hasta 6 puntos, B de 7 a 9 y C de 10 a 15, que indica trasplante.»',
      repreguntas: [
        { q: '¿Qué evalúa el Child-Pugh?', a: 'BATEA: bilirrubina, albúmina, tiempo de protrombina, encefalopatía y ascitis.' },
        { q: '¿Qué significa un Child C?', a: '10–15 puntos: cirrosis descompensada con indicación de trasplante.' },
        { q: '¿Por qué un cirrótico tiene ginecomastia y arañas vasculares?', a: 'El hígado no degrada los estrógenos (hiperestrogenismo).' },
      ],
      fuentes: 'Instituto Merlín, «Cirrosis» · Apunte de Ortega, pp. 393–396 · Clase de Ortega, cirrosis 2 (07:04) · Argente-Álvarez, cap. 42-13.',
    },
    {
      tema: 'htp',
      titulo: 'Síndrome de hipertensión portal',
      porque: [
        'La sangre del intestino y el bazo pasa por la **vena porta** al hígado. Si encuentra resistencia (la cirrosis es la causa más común), la presión sube **hacia atrás**: el **bazo** se agranda y se abren **atajos** hacia las venas cavas, que se dilatan como **várices**.',
        'Los atajos están donde el sistema porta toca al sistema cava: **esófago** (várices esofágicas), **ombligo** (cabeza de medusa) y **recto**.',
      ],
      bloques: [
        { t: 'def', text: 'Aumento sostenido de la presión portal **> 12 mmHg** (normal **8–10**). La causa más frecuente es la **cirrosis**.' },
        {
          t: 'cuadro',
          titulo: 'Clasificación por el sitio del obstáculo',
          head: ['Tipo', 'Ejemplos'],
          filas: [
            ['**Prehepática**', '**Trombosis de la vena porta** o esplénica'],
            ['**Intrahepática**', '**Cirrosis** (la más común)'],
            ['**Poshepática**', '**Budd-Chiari** (venas suprahepáticas), insuficiencia cardíaca derecha, pericarditis constrictiva'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Manifestaciones',
          head: ['', 'Qué es'],
          filas: [
            ['**Circulación colateral**', 'Venas de la pared abdominal; **cabeza de medusa** periumbilical'],
            ['**Várices esofágicas**', 'Riesgo de **hemorragia digestiva alta** (la complicación más grave)'],
            ['**Esplenomegalia**', 'Con **hiperesplenismo**: pancitopenia'],
            ['**Ascitis**', 'Con GASA ≥ 1,1'],
            ['**Encefalopatía**', 'Sustancias que evitan el hígado por los atajos'],
          ],
        },
      ],
      oral: '«La hipertensión portal es el aumento sostenido de la presión de la vena porta por encima de 12 milímetros de mercurio; lo normal es 8 a 10. Se clasifica según dónde está el obstáculo en prehepática, como la trombosis portal; intrahepática, la cirrosis, que es la causa más común; y poshepática, como el Budd-Chiari o la insuficiencia cardíaca derecha. La presión se transmite hacia atrás y se abren anastomosis portosistémicas: aparecen circulación colateral en la pared, con cabeza de medusa, várices esofágicas que pueden sangrar, esplenomegalia con hiperesplenismo, ascitis y encefalopatía.»',
      repreguntas: [
        { q: '¿Cuál es el valor de la hipertensión portal?', a: 'Presión portal > 12 mmHg (normal 8–10).' },
        { q: '¿Por qué aparecen várices esofágicas?', a: 'Se dilatan las anastomosis portosistémicas del esófago para descomprimir la porta.' },
        { q: '¿Qué es el hiperesplenismo?', a: 'El bazo agrandado secuestra células: pancitopenia.' },
      ],
      fuentes: 'Instituto Merlín, «Hipertensión portal» · Apunte de Ortega, pp. 397–398 · Clase de Ortega, HTP 2 · Argente-Álvarez, cap. 42-13.',
    },
    {
      tema: 'ascitis',
      titulo: 'Ascitis',
      porque: [
        'En la cirrosis, la presión de los **sinusoides** empuja líquido fuera del hígado más rápido de lo que la linfa lo drena, y cae a la cavidad. Además se **dilatan las arterias esplácnicas**: el riñón «cree» que falta volumen y **retiene sodio y agua**, que alimenta la ascitis.',
        'El líquido **pesa y se va a lo más bajo**: por eso hay matidez en los flancos que **se desplaza** al cambiar de lado.',
      ],
      bloques: [
        { t: 'def', text: 'Acumulación patológica de líquido en la cavidad peritoneal (**> 100 ml**). El **80 %** se debe a **hipertensión portal** (cirrosis); el resto, a enfermedades del peritoneo (cáncer, tuberculosis), insuficiencia cardíaca, síndrome nefrótico, pancreatitis.' },
        {
          t: 'cuadro',
          titulo: 'Examen',
          head: ['Paso', 'Hallazgo'],
          filas: [
            ['Inspección', 'Abdomen distendido, **flancos abombados** (en batracio), **ombligo evertido**, circulación colateral, estigmas'],
            ['Percusión', 'Matidez con **concavidad superior**; **matidez desplazable** en decúbito lateral'],
            ['**Onda ascítica**', 'Golpe en un flanco, se percibe en el otro (una mano bloquea la pared)'],
            ['**Témpano**', 'Depresión brusca: la víscera rebota como hielo en un vaso'],
          ],
        },
      ],
      oral: '«La ascitis es la acumulación patológica de líquido en la cavidad peritoneal, más de 100 mililitros. El 80 % se debe a hipertensión portal por cirrosis: la presión sinusoidal hace que el líquido escape y la vasodilatación esplácnica hace que el riñón retenga sodio y agua. Al examen el abdomen está distendido, con flancos abombados u ombligo evertido; a la percusión hay matidez de concavidad superior que se desplaza al cambiar de decúbito; y la confirmo con la onda ascítica y el signo del témpano. Busco además estigmas de cirrosis y edemas.»',
      repreguntas: [
        { q: '¿Cómo diferenciás ascitis de un quiste de ovario gigante por percusión?', a: 'Ascitis: matidez cóncava hacia arriba y desplazable. Quiste o globo vesical: matidez convexa.' },
        { q: '¿Qué es la matidez desplazable?', a: 'La matidez de los flancos se mueve al rotar al paciente: el líquido libre se desplaza.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 358–359 y 398–399 · Instituto Merlín, «Hipertensión portal».',
    },
    {
      tema: 'liquido-ascitico',
      titulo: 'Examen del líquido ascítico',
      porque: [
        'El **GASA** compara la albúmina de la sangre con la del líquido. Si el líquido salió **empujado por presión** (porta), sale **pobre en albúmina**: la diferencia es grande (≥ 1,1). Si salió por un peritoneo **inflamado o tumoral**, sale **rico en proteínas**: la diferencia es chica.',
      ],
      bloques: [
        { t: 'paso', titulo: 'Paracentesis', text: 'Punción en la **FII** (punto de **Monro**: mitad de la línea umbilicoespinal izquierda). Se pide **aspecto**, **recuento celular**, **albúmina** (con la sérica del mismo día), proteínas, cultivo y citológico.' },
        {
          t: 'cuadro',
          head: ['Dato', 'Interpretación'],
          filas: [
            ['**GASA ≥ 1,1 g/dl**', '**Hipertensión portal** (cirrosis, cardíaca)'],
            ['**GASA < 1,1 g/dl**', '**Otra causa**: carcinomatosis, tuberculosis, pancreatitis, nefrótico'],
            ['**PMN ≥ 250/mm³**', '**Peritonitis bacteriana espontánea**'],
            ['Predominio linfocitario', 'Tuberculosis o carcinomatosis'],
            ['Aspecto', 'Transparente (normal) · turbio (infección) · **lechoso** (quilosa: triglicéridos > 200) · hemático (neoplasia, trauma)'],
          ],
        },
        { t: 'ojo', text: 'El **GASA** es, con el Child-Pugh, lo que Ortega más insiste en que hay que saber en el final.' },
      ],
      oral: '«El líquido ascítico se obtiene por paracentesis, en general en la fosa ilíaca izquierda, y se estudia su aspecto, el recuento celular, la albúmina, las proteínas, el cultivo y la citología. El dato clave es el gradiente de albúmina sérica-ascítica, el GASA: si es mayor o igual a 1,1 la ascitis se debe a hipertensión portal; si es menor, a otra causa, como carcinomatosis o tuberculosis. Un recuento de polimorfonucleares mayor o igual a 250 por milímetro cúbico indica peritonitis bacteriana espontánea. El aspecto lechoso corresponde a una ascitis quilosa y el hemático sugiere neoplasia o trauma.»',
      repreguntas: [
        { q: '¿Qué significa un GASA de 1,5?', a: 'Ascitis por hipertensión portal.' },
        { q: '¿Con qué valor diagnosticás una PBE?', a: 'PMN ≥ 250/mm³ en el líquido ascítico.' },
        { q: '¿Por qué el GASA es alto en la hipertensión portal?', a: 'El líquido sale por presión y es pobre en albúmina: la diferencia con la sangre es grande.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 399–400 · Clase de Ortega, HTP 2 (18:49) · Instituto Merlín, «Hipertensión portal».',
    },
  ],
  noOlvidar: [
    { q: 'Ictericia', a: 'Bilirrubina > 2. Pre (indirecta, sin coluria) · hepática · pos (directa, coluria, acolia, prurito).' },
    { q: 'Courvoisier-Terrier', a: 'Ictericia + vesícula palpable indolora = cáncer de cabeza de páncreas.' },
    { q: 'Cirrosis', a: 'Fibrosis + nódulos de regeneración. Alcohol y virus B y C.' },
    { q: 'Estigmas', a: 'Arañas, eritema palmar, ginecomastia, atrofia testicular, parótidas, Dupuytren.' },
    { q: 'Child-Pugh', a: 'BATEA. A ≤ 6 · B 7–9 · C 10–15 (trasplante).' },
    { q: 'HTP', a: '> 12 mmHg. Pre, intra (cirrosis), poshepática (Budd-Chiari).' },
    { q: 'Consecuencias de la HTP', a: 'Colaterales (cabeza de medusa), várices, esplenomegalia, ascitis, encefalopatía.' },
    { q: 'Ascitis: examen', a: 'Matidez cóncava y desplazable, onda ascítica, témpano.' },
    { q: 'GASA', a: '≥ 1,1 = hipertensión portal · < 1,1 = otra causa.' },
    { q: 'PBE', a: 'PMN ≥ 250/mm³.' },
  ],
};
