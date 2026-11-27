import type { ApunteUnidad } from './tipos';

/*
 * Abdomen agudo y peritonitis — apunte para el oral.
 * Base: Merlín («Dolor», «Dolor abdominal», «Apendicitis», «Íleo, SMA y peritonitis») y apunte de Ortega
 * («Peritonitis» pp. 383–384, «Íleo» p. 376), contrastados con Argente cap. 39-4, 42-4, 42-10 y 44-1.
 */
export const apunte: ApunteUnidad = {
  unidad: 'abdomen-agudo',
  temas: [
    {
      tema: 'abdomen-agudo',
      titulo: 'Paciente con dolor abdominal agudo',
      porque: [
        'Hay tres dolores. El **visceral** viene del órgano (distensión, isquemia, inflamación): llega por fibras C, es **vago, mal localizado, en la línea media**, con náuseas y sudoración. El **somático** viene del **peritoneo parietal**: es **preciso, localizado** y empeora al moverse. El **referido** se siente lejos del órgano porque sus nervios entran al mismo segmento medular.',
        'La **apendicitis** lo muestra entero: empieza **periumbilical** (visceral: el apéndice se distiende) y después **migra a la FID** (somático: se inflama el peritoneo vecino).',
      ],
      bloques: [
        { t: 'def', text: '**Abdomen agudo**: cuadro cuyo síntoma principal es un **dolor abdominal agudo**, que muchas veces requiere una decisión rápida (médico o **quirúrgico**).' },
        {
          t: 'cuadro',
          titulo: 'Tipos de dolor',
          head: ['', 'Visceral', 'Somático (parietal)'],
          filas: [
            ['Origen', 'Órgano: **distensión** (cólico), isquemia, inflamación', '**Peritoneo parietal**'],
            ['Cómo es', '**Difuso**, mal localizado, sordo o cólico', '**Localizado**, agudo, constante'],
            ['Movimiento', 'Inquieto, cambia de posición', '**Inmóvil**: duele al moverse y toser'],
            ['Acompaña', 'Náuseas, sudoración (autonómico)', 'Defensa, Blumberg'],
          ],
        },
        {
          t: 'cuadro',
          titulo: 'Los cinco abdómenes agudos',
          head: ['Tipo', 'Causas', 'Dolor', 'Examen'],
          filas: [
            ['**Inflamatorio**', '**Apendicitis**, **colecistitis** (Murphy), **pancreatitis** (hemicinturón), diverticulitis, EPI', 'Somático, continuo, localizado', 'Blumberg; fiebre'],
            ['**Obstructivo**', '**Bridas**, **hernias**, vólvulo; biliar y urinario (litiasis)', '**Cólico**, intermitente', '**Distendido**, **RHA de lucha**, falta de gases y heces, vómitos'],
            ['**Perforativo**', '**Úlcera** perforada, apendicitis, diverticulitis', 'Brusco, intenso, **generalizado**', '**Abdomen en tabla**, **RHA ausentes**, **Jobert** y neumoperitoneo'],
            ['**Hemorrágico**', '**Embarazo ectópico roto**, aneurisma de aorta, rotura de bazo, trauma', 'Brusco', '**Hipovolemia** (palidez, taquicardia, hipotensión), matidez'],
            ['**Vascular** (isquémico)', '**Isquemia mesentérica**, estrangulación, torsiones', 'Intenso, **desproporcionado al examen**', 'Al principio abdomen blando; después peritonitis'],
          ],
        },
        { t: 'paso', titulo: 'Abordaje', items: ['**Anamnesis**: ALICIA del dolor, edad, cirugías previas (bridas), alcohol, AINE, fecha de la última menstruación, síntomas acompañantes.', '**Examen**: signos vitales, inspección, auscultación, percusión, palpación (defensa, Blumberg, puntos), **orificios herniarios**, **tacto rectal**.', 'Estudios: hemograma, amilasa/lipasa, **prueba de embarazo**, orina, radiografía (neumoperitoneo, niveles), ecografía, TC.', 'Causas **extraabdominales**: infarto inferior, neumonía basal, cetoacidosis.'] },
        { t: 'clave', titulo: 'Apendicitis: score de Alvarado (Merlín)', items: ['**Migración** del dolor 1 · **anorexia** 1 · náuseas o vómitos 1 · **dolor en FID 2** · **Blumberg** 1 · fiebre 1 · **leucocitosis 2** · desviación a la izquierda 1 = **10**.', '≥ 7: apendicitis probable.'] },
        { t: 'maniobras', ids: ['descompresion-blumberg', 'puntos-dolorosos-abdomen'] },
      ],
      oral: '«El abdomen agudo es un cuadro cuyo síntoma principal es un dolor abdominal agudo y que muchas veces exige una decisión quirúrgica. El dolor puede ser visceral, difuso y mal localizado, por distensión, isquemia o inflamación del órgano; somático, localizado y que empeora con el movimiento, por irritación del peritoneo parietal; o referido. Hay cinco tipos: inflamatorio, como la apendicitis, la colecistitis o la pancreatitis; obstructivo, por bridas o hernias, con dolor cólico, distensión, ruidos de lucha y falta de eliminación de gases; perforativo, como la úlcera perforada, con abdomen en tabla, silencio y signo de Jobert; hemorrágico, como el embarazo ectópico roto, con hipovolemia; y vascular, la isquemia mesentérica, con dolor desproporcionado al examen. Lo estudio con la anamnesis del dolor, el examen completo con tacto rectal y orificios herniarios, laboratorio, prueba de embarazo e imágenes.»',
      repreguntas: [
        { q: '¿Por qué el dolor de la apendicitis empieza en el ombligo y migra a la FID?', a: 'Empieza visceral (distensión del apéndice, mal localizado) y se vuelve somático al inflamarse el peritoneo parietal de la FID.' },
        { q: '¿Qué abdomen agudo sospechás con dolor intenso y un abdomen blando?', a: 'El vascular: isquemia mesentérica (dolor desproporcionado al examen).' },
        { q: '¿Qué pedís siempre en una mujer en edad fértil con dolor abdominal?', a: 'Prueba de embarazo (embarazo ectópico).' },
      ],
      fuentes: 'Instituto Merlín, «Dolor», «Dolor abdominal» y «Apendicitis» · Argente-Álvarez, cap. 39-4 y 44-1.',
    },
    {
      tema: 'peritonitis',
      titulo: 'Peritonitis',
      porque: [
        'El peritoneo es **estéril**. Cuando una víscera se perfora o se inflama, llegan gérmenes; el peritoneo responde con **inflamación y exudado**, y el intestino se **paraliza** (íleo paralítico: silencio).',
        'Al estar inflamada la serosa parietal, **cualquier movimiento** la estira y duele: el paciente se queda quieto, la pared se contrae para protegerla (**defensa**, abdomen **en tabla**) y duele más al **soltar** (Blumberg).',
      ],
      bloques: [
        { t: 'def', text: 'Inflamación de la **serosa peritoneal**, cualquiera sea su causa (en la práctica, casi siempre infecciosa). **Plastrón**: peritonitis **localizada** en contacto con la pared anterior.' },
        {
          t: 'cuadro',
          titulo: 'Clasificación',
          head: ['Tipo', 'Qué es', 'Características'],
          filas: [
            ['**Primaria** (PBE)', '**Sin foco** intraabdominal evidente', '**Cirrosis con ascitis**; **monomicrobiana**; tratamiento **clínico**; dolor escaso, RHA presentes'],
            ['**Secundaria**', 'Por **perforación** o inflamación de una víscera (apendicitis, úlcera, colecistitis)', '**La más frecuente**; **polimicrobiana**; tratamiento **quirúrgico**'],
            ['**Terciaria**', 'Persistente o recurrente tras tratar una secundaria (Merlín)', 'Inmunosuprimidos, reoperados'],
          ],
        },
        { t: 'ojo', text: 'Ortega define la **terciaria** de otra forma: el germen llega **desde el exterior** (posquirúrgica, heridas o traumatismos abiertos). Si te la preguntan, mencioná las dos.' },
        {
          t: 'cuadro',
          titulo: 'Clínica y examen',
          head: ['', 'Hallazgos'],
          filas: [
            ['Síntomas', '**Dolor** intenso que empeora con movimientos, tos y estornudo; **fiebre** (80 %), náuseas y vómitos'],
            ['General', 'Facies dolorosa, piernas flexionadas, **taquicardia**, deshidratación, hipotensión'],
            ['Inspección', 'Abdomen plano **en tabla** o distendido, **sin movimientos respiratorios**'],
            ['Auscultación', '**Silencio abdominal** (íleo paralítico)'],
            ['Palpación', '**Defensa**, contractura; **Blumberg** (localizada) · **Gueneau de Mussy** (generalizada)'],
            ['Laboratorio', '**Leucocitosis > 15 000** con desviación a la izquierda; en la PBE, **paracentesis**'],
          ],
        },
      ],
      oral: '«La peritonitis es la inflamación de la serosa peritoneal, en general infecciosa; el plastrón es la peritonitis localizada contra la pared. Se clasifica en primaria o peritonitis bacteriana espontánea, sin foco evidente, típica del cirrótico con ascitis, monomicrobiana y de tratamiento clínico; secundaria, la más frecuente, por perforación o inflamación de una víscera, polimicrobiana y quirúrgica; y terciaria, persistente después de tratar una secundaria. Se manifiesta con dolor intenso que empeora con el movimiento y la tos, fiebre, náuseas y vómitos. Al examen el paciente está quieto, taquicárdico, con abdomen en tabla que no se mueve con la respiración, silencio abdominal, defensa y dolor a la descompresión, localizado —Blumberg— o generalizado —Gueneau de Mussy—. Hay leucocitosis con desviación a la izquierda.»',
      repreguntas: [
        { q: '¿Qué diferencia la peritonitis primaria de la secundaria?', a: 'La primaria no tiene foco (cirrótico con ascitis), es monomicrobiana y clínica; la secundaria tiene foco (perforación), es polimicrobiana y quirúrgica.' },
        { q: '¿Por qué hay silencio abdominal?', a: 'La inflamación del peritoneo paraliza el intestino: íleo paralítico.' },
        { q: '¿Qué es el signo de Gueneau de Mussy?', a: 'Dolor a la descompresión en todo el abdomen: peritonitis generalizada.' },
      ],
      fuentes: 'Apunte de Ortega, pp. 383–384 · Instituto Merlín, «Íleo, SMA y peritonitis» · Argente-Álvarez, cap. 42-10.',
    },
  ],
  noOlvidar: [
    { q: 'Visceral vs somático', a: 'Difuso, mal localizado (órgano) vs localizado, empeora al moverse (peritoneo parietal).' },
    { q: 'Cinco abdómenes agudos', a: 'Inflamatorio, obstructivo, perforativo, hemorrágico, vascular.' },
    { q: 'Obstructivo', a: 'Cólico, distensión, RHA de lucha, sin gases ni heces, vómitos.' },
    { q: 'Perforativo', a: 'Tabla, silencio, Jobert, neumoperitoneo.' },
    { q: 'Vascular', a: 'Dolor desproporcionado a un abdomen blando.' },
    { q: 'Alvarado', a: 'Migración, anorexia, náuseas, FID (2), Blumberg, fiebre, leucocitosis (2), desviación. ≥ 7 probable.' },
    { q: 'Peritonitis', a: 'Primaria (PBE, cirrótico, clínica) · secundaria (perforación, quirúrgica, la más frecuente) · terciaria.' },
    { q: 'Signos peritoneales', a: 'Defensa, tabla, Blumberg, Gueneau de Mussy, silencio abdominal.' },
  ],
};
