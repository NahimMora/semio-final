import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * hc-01 · «Para entenderlo»: diapositivas y video (voz de Tomás).
 * Objetivo: entender POR QUÉ la historia clínica tiene ese orden, no memorizarla (eso está en «Para el oral»).
 * Fuentes: Argente cap. 6 (pp. 47–55) y cap. 7; Merlín PDF 1 y 2.
 */
const A = (p: string): SourceRef => ({ src: 'argente-libro', p });
const M = (p: string): SourceRef => ({ src: 'merlin', p });

const diapos: Diapositiva[] = [
  {
    id: 'e-para-que',
    sec: 'idea',
    titulo: 'Para qué existe la historia clínica',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'pregunta', t: 'Pregunto', d: 'Anamnesis → **síntomas**', tono: 'rose' },
          { ico: 'mano', t: 'Examino', d: 'Examen físico → **signos**', tono: 'sky' },
          { ico: 'nudo', t: 'Agrupo', d: '**Síndromes**', tono: 'lilac' },
          { ico: 'lab', t: 'Confirmo', d: 'Estudios → **diagnóstico**', tono: 'mint' },
        ],
      },
      { t: 'clave', en: 2, text: 'La historia clínica es ese **razonamiento escrito en orden**. Cada parte existe para que el siguiente paso sea posible.', tono: 'sky' },
    ],
    voz: [
      'Antes de memorizar partes, pensemos para qué sirve la historia clínica. Frente a un paciente, el médico hace siempre lo mismo: pregunta, y obtiene síntomas; examina, y encuentra signos.',
      'Después agrupa esos síntomas y signos en síndromes, y recién ahí plantea un diagnóstico, que los estudios complementarios confirman.',
      'La historia clínica es ese razonamiento escrito en orden. Por eso tiene las partes que tiene, y en ese orden: cada una prepara la siguiente.',
    ],
    refs: [A('47'), M('PDF 2, p. 2')],
  },
  {
    id: 'e-sintoma-signo',
    sec: 'idea',
    titulo: 'Síntoma, signo, síndrome',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Síntoma', tono: 'rose', items: ['Lo **refiere** el paciente', 'Subjetivo', 'Ej.: dolor, disnea'] },
          { titulo: 'Signo', tono: 'sky', items: ['Lo **encuentra** el médico', 'Objetivo', 'Ej.: ictericia, soplo'] },
          { titulo: 'Síndrome', tono: 'lilac', items: ['Síntomas y signos **que van juntos**', 'Un mecanismo, **varias causas**', 'Ej.: síndrome de Cushing'] },
        ],
      },
      { t: 'texto', en: 2, text: 'La **enfermedad** tiene una causa concreta (enfermedad de Cushing). Un signo **patognomónico** basta solo para el diagnóstico (signo de Romaña).' },
    ],
    voz: [
      'Tres palabras que vas a usar en todo el final. Síntoma es lo que el paciente refiere: es subjetivo, como el dolor o la falta de aire.',
      'Signo es lo que el médico encuentra al examinar: es objetivo, como la ictericia o un soplo. Y un síndrome es un conjunto de síntomas y signos que aparecen juntos porque comparten un mecanismo, aunque puedan tener distintas causas.',
      'La enfermedad, en cambio, tiene una causa concreta. Y un signo patognomónico es el que, por sí solo, asegura el diagnóstico, como el signo de Romaña en el chagas agudo.',
    ],
    refs: [M('PDF 2, p. 2')],
  },
  {
    id: 'e-estructura',
    sec: 'estructura',
    titulo: 'Seis partes: tres recogen, tres piensan',
    amplio: true,
    bloques: [
      {
        t: 'arbol',
        raiz: {
          t: 'Historia clínica',
          hijos: [
            { t: 'Recoger datos', tono: 'sky', hijos: [{ t: '1. Anamnesis', d: 'lo que cuenta' }, { t: '2. Examen físico', d: 'lo que encuentro' }] },
            { t: 'Pensar', tono: 'lilac', hijos: [{ t: '3. Resumen semiológico', d: 'solo lo positivo' }, { t: '4. Consideraciones diagnósticas', d: 'síndrome → diagnóstico', examen: true }] },
            { t: 'Seguir', tono: 'mint', hijos: [{ t: '5. Evolución diaria' }, { t: '6. Epicrisis', d: 'al alta' }] },
          ],
        },
      },
    ],
    voz: [
      'La estructura tiene seis partes, y se recuerdan mejor de a pares. Las dos primeras recogen datos: la anamnesis, que es lo que el paciente cuenta, y el examen físico, que es lo que vos encontrás.',
      'Las dos siguientes piensan: el resumen semiológico se queda solo con lo positivo, y las consideraciones diagnósticas agrupan esos datos en síndromes y llegan a un diagnóstico. Para el libro, esa es la parte más importante.',
      'Y las dos últimas siguen al paciente: la evolución diaria, mientras está internado, y la epicrisis, que cierra la historia al alta o al fallecimiento.',
    ],
    refs: [A('47'), A('55')],
  },
  {
    id: 'e-anamnesis',
    sec: 'anamnesis',
    titulo: 'La anamnesis: próxima, remota y sistémica',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Próxima · lo de ahora', tono: 'rose', items: ['Datos personales', 'Motivo de consulta', 'Enfermedad actual'] },
          { titulo: 'Remota · lo de antes', tono: 'sky', items: ['Antecedentes personales: fisiológicos, patológicos, de medio, hábitos', 'Heredofamiliares'] },
          { titulo: 'Sistémica · lo que falta', tono: 'lilac', items: ['Interrogatorio por aparatos', 'Para no omitir síntomas que el paciente no relacionó'] },
        ],
      },
    ],
    voz: [
      'La anamnesis es la indagación por medio de preguntas. Se ordena en el tiempo. La próxima es lo de ahora: quién es el paciente, por qué consulta y cómo empezó y evolucionó su problema.',
      'La remota es lo de antes: sus antecedentes personales, fisiológicos, patológicos, de su medio y sus hábitos, y los de su familia.',
      'Y la sistémica es una red de seguridad: un repaso por aparatos para encontrar síntomas que el paciente no relacionó con su enfermedad y por eso no contó.',
    ],
    refs: [M('PDF 2, p. 4'), A('47–52')],
  },
  {
    id: 'e-mc-ea',
    sec: 'anamnesis',
    titulo: 'Motivo de consulta y enfermedad actual',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'Motivo de consulta', 'Enfermedad actual'],
        filas: [
          ['Función', 'La **portada**: orienta al aparato', 'La **historia** del problema'],
          ['Largo', '**Pocas palabras**', 'Relato completo'],
          ['Contenido', 'Síntoma + **tiempo de evolución**', 'Cronológico: libre y después dirigido'],
          ['Ejemplo', '«Dolor retroesternal de 2 h»', '«Hipertenso y tabaquista que hace 2 h presenta dolor opresivo…»'],
        ],
      },
      { t: 'clave', en: 2, text: 'En el motivo de consulta **nunca va un diagnóstico**: «neumonía» o «derivado por el Dr. X» no orientan nada.', tono: 'red' },
    ],
    voz: [
      'Las dos partes que más se confunden. El motivo de consulta es la portada de la historia: en pocas palabras, el síntoma principal y cuánto hace que empezó. Con eso ya sabés qué aparato está en juego.',
      'La enfermedad actual es la historia completa de ese problema, en orden cronológico: primero dejás que el paciente cuente libremente y después preguntás para completar. Si tiene antecedentes relacionados, los ponés al principio.',
      'Un error típico es escribir un diagnóstico en el motivo de consulta, como neumonía, o derivado por un médico. Eso no orienta: lo que orienta es el síntoma con su tiempo.',
    ],
    refs: [A('48–49')],
  },
  {
    id: 'e-examen',
    sec: 'examen',
    titulo: 'El examen físico: cuatro maneras de mirar',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        items: [
          { ico: 'ojo', t: 'Inspección', d: 'Desde que entra: estática y dinámica', tono: 'sky' },
          { ico: 'mano', t: 'Palpación', d: 'Temperatura, dolor, forma, tamaño, consistencia', tono: 'rose' },
          { ico: 'nudo', t: 'Percusión', d: 'Sonoridad · matidez · timpanismo', tono: 'lilac' },
          { ico: 'oreja', t: 'Auscultación', d: 'Campana: graves · membrana: agudos', tono: 'mint' },
        ],
      },
      { t: 'clave', en: 3, text: 'De lo **general** a lo **particular**. En el **abdomen** se ausculta **antes** de palpar.', tono: 'sky' },
    ],
    voz: [
      'El examen físico tiene cuatro métodos. La inspección empieza apenas el paciente entra: cómo camina, su facies, su actitud. Es estática, con el paciente quieto, y dinámica, cuando se mueve o le pedís que haga algo.',
      'La palpación usa las manos: te da la temperatura, el dolor, y sobre todo la forma, el tamaño, la consistencia y la situación de lo que tocás, además de vibraciones y latidos.',
      'La percusión hace vibrar los tejidos con un dedo que golpea sobre otro apoyado. Lo que hay debajo cambia el sonido: el pulmón con aire suena sonoro, un sólido o un líquido suenan mate, y una víscera con gas suena timpánica.',
      'Y la auscultación usa el estetoscopio: la campana para los sonidos graves, como algunos ruidos cardíacos y soplos, y la membrana para los agudos. Siempre se va de lo general a lo particular. Y ojo: en el abdomen se ausculta antes de palpar, para no alterar los ruidos intestinales.',
    ],
    refs: [M('PDF 1, pp. 6–7'), { src: 'califano', p: 'cap. 1' }],
  },
  {
    id: 'e-caso',
    sec: 'caso',
    titulo: 'Un paciente recorre la historia clínica',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        items: [
          { ico: 'pregunta', t: 'Motivo de consulta', d: 'Dolor retroesternal de 2 horas', tono: 'rose' },
          { ico: 'reloj', t: 'Enfermedad actual', d: 'Opresivo, irradiado al brazo izquierdo, con sudoración', tono: 'rose' },
          { ico: 'corazon', t: 'Antecedentes', d: 'HTA, diabetes, 40 paquetes/año; padre con infarto a los 50', tono: 'sky' },
          { ico: 'mano', t: 'Examen', d: 'Pálido, sudoroso, TA 160/95, FC 104', tono: 'sky' },
          { ico: 'nudo', t: 'Consideraciones', d: 'Síndrome de dolor torácico de probable origen isquémico', tono: 'lilac' },
        ],
      },
    ],
    voz: [
      'Veámoslo con un paciente. Un hombre de sesenta y dos años consulta por dolor retroesternal de dos horas de evolución. Ese es el motivo de consulta: síntoma y tiempo.',
      'En la enfermedad actual caracterizás el dolor: es opresivo, se irradia al brazo izquierdo y viene con sudoración.',
      'En los antecedentes aparecen la hipertensión, la diabetes, cuarenta paquetes año de tabaco y un padre que tuvo un infarto a los cincuenta.',
      'El examen físico muestra un paciente pálido, sudoroso, con presión de ciento sesenta y noventa y cinco y taquicardia.',
      'Con esos datos positivos, en las consideraciones diagnósticas planteás un síndrome: dolor torácico de probable origen isquémico, con sus diferenciales. Recién ahí pedís estudios.',
    ],
    refs: [A('49')],
  },
  {
    id: 'e-pensar',
    sec: 'elaboracion',
    titulo: 'Donde el médico piensa',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'lab', t: 'Resumen semiológico', d: 'Solo los datos **positivos**', tono: 'sky' },
          { ico: 'nudo', t: 'Síndromes', d: 'Qué datos van juntos', tono: 'lilac' },
          { ico: 'pregunta', t: 'Diferenciales', d: 'Qué otras causas lo dan', tono: 'rose' },
          { ico: 'ojo', t: 'Presuntivo', d: 'Anatómico, funcional o etiológico', tono: 'gold' },
        ],
      },
      { t: 'clave', en: 2, text: '«Los malos diagnósticos suelen ser buenos razonamientos sobre hechos mal observados.» Por eso importa tanto recoger bien los datos.', tono: 'gold' },
    ],
    voz: [
      'Después de recoger los datos, el médico piensa. Primero el resumen semiológico, que deja solo lo positivo: es una historia abreviada que se lee en un minuto.',
      'Con eso armás las consideraciones diagnósticas: agrupás en síndromes, discutís los diagnósticos diferenciales y llegás a un diagnóstico presuntivo, que puede ser anatómico, funcional o etiológico, y que orienta qué estudios pedir.',
      'El libro lo resume con una frase: los malos diagnósticos suelen ser buenos razonamientos sobre hechos mal observados. Si la anamnesis o el examen fallan, todo lo que sigue falla.',
    ],
    refs: [A('55')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'idea', label: 'La idea' },
    { id: 'estructura', label: 'Estructura' },
    { id: 'anamnesis', label: 'Anamnesis' },
    { id: 'examen', label: 'Examen físico' },
    { id: 'caso', label: 'Un caso' },
    { id: 'elaboracion', label: 'Elaboración' },
  ],
  diapos,
};

const teoria: Mazo = { id: 'teoria', secciones: [], diapos: [] };

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'hc', label: 'Historia clínica', tone: 'sky', hijos: [] }] },
  fisio,
  teoria,
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
