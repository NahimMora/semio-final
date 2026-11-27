import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * car-02 · «Para entenderlo»: examen cardiovascular, ruidos, soplos y pulsos.
 * Fuentes: apunte de Ortega pp. 142–175, Merlín, Califano cap. 4–6, Argente cap. 29.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'c2-ciclo',
    sec: 'ruidos',
    titulo: 'Los ruidos son válvulas que se cierran',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'corazon', t: 'R1 · «tum»', d: 'Cierran **mitral y tricúspide**: empieza la **sístole**', tono: 'rose' },
          { ico: 'reloj', t: 'Pequeño silencio', d: '**Sístole**: el ventrículo eyecta', tono: 'sky' },
          { ico: 'corazon', t: 'R2 · «ta»', d: 'Cierran **aórtica y pulmonar**: empieza la **diástole**', tono: 'lilac' },
          { ico: 'reloj', t: 'Gran silencio', d: '**Diástole**: el ventrículo se llena', tono: 'sky' },
        ],
      },
    ],
    voz: [
      'Para entender la auscultación, pensá que cada ruido es una válvula que se cierra. El primer ruido es el cierre de la mitral y la tricúspide, y marca el comienzo de la sístole. Se oye mejor en la punta y coincide con el pulso carotídeo.',
      'Después viene el pequeño silencio: el ventrículo está eyectando. El segundo ruido es el cierre de la aórtica y la pulmonar, y marca el comienzo de la diástole; se oye mejor en la base. Y el gran silencio es la diástole, mientras el ventrículo se llena.',
    ],
    refs: [L('147')],
  },
  {
    id: 'c2-r3r4',
    sec: 'ruidos',
    titulo: 'R3 y R4: el ventrículo que se llena mal',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'R3 · protodiástole', tono: 'sky', items: ['Llenado **rápido**', 'Ventrículo **dilatado**', 'Normal en jóvenes', '**Insuficiencia cardíaca**, insuficiencia mitral'] },
          { titulo: 'R4 · telediástole', tono: 'rose', items: ['**Contracción auricular**', 'Ventrículo **rígido**', 'Casi siempre patológico', '**HTA**, hipertrofia; **no hay en FA**'] },
        ],
      },
    ],
    voz: [
      'Hay dos ruidos que aparecen en la diástole cuando el ventrículo se llena mal. El tercero aparece al principio, durante el llenado rápido: si un ventrículo dilatado recibe mucho volumen, vibra. Es normal en chicos y jóvenes, y patológico en la insuficiencia cardíaca.',
      'El cuarto aparece al final, cuando la aurícula se contrae contra un ventrículo rígido que no se deja llenar, como en la hipertensión o la hipertrofia. Como depende de la contracción auricular, en la fibrilación auricular no existe.',
    ],
    refs: [L('147')],
  },
  {
    id: 'c2-soplos',
    sec: 'soplos',
    titulo: 'Soplos: ¿en qué momento?',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['', 'En sístole', 'En diástole'],
        filas: [
          ['La sangre **sale** por una válvula estrecha', '**Estenosis aórtica** → cuello', '**Estenosis mitral**: rolido, chasquido'],
          ['La sangre **vuelve** por una válvula que no cierra', '**Insuficiencia mitral** → axila', '**Insuficiencia aórtica**: aspirativo'],
        ],
      },
      { t: 'clave', en: 1, text: '**Todo soplo diastólico es patológico.** El inocente es sistólico, suave y sin frémito.', tono: 'rose' },
    ],
    voz: [
      'Un soplo es sangre turbulenta, y el momento en que aparece te dice qué válvula falla. En la sístole el ventrículo empuja la sangre: si sale por una aórtica estrecha, es la estenosis aórtica, que se irradia al cuello; si vuelve por una mitral que no cierra, es la insuficiencia mitral, que se irradia a la axila. En la diástole el ventrículo se llena: si entra por una mitral estrecha, es la estenosis mitral, un rolido grave; si vuelve por una aórtica que no cierra, es la insuficiencia aórtica, un soplo aspirativo.',
      'Una regla de oro: todo soplo diastólico es patológico. Los soplos inocentes son sistólicos, suaves y sin frémito.',
    ],
    refs: [L('155–162')],
  },
  {
    id: 'c2-pulsos',
    sec: 'pulsos',
    titulo: 'El pulso dibuja la válvula aórtica',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Estenosis aórtica', tono: 'sky', items: ['La onda sale **por un agujero chico**', '**Parvus et tardus**: pequeño y lento'] },
          { titulo: 'Insuficiencia aórtica', tono: 'rose', items: ['Mucho volumen que **vuelve** a la aorta', '**Saltón** de Corrigan: amplio y rápido'] },
          { titulo: 'Taponamiento', tono: 'gold', items: ['En la inspiración se llena menos el VI', '**Paradójico**: cae > 10 mmHg'] },
        ],
      },
    ],
    voz: [
      'El pulso es la onda que genera cada sístole, y su forma dibuja lo que pasa en la válvula aórtica. Si la válvula está estrecha, la onda sale por un agujero chico: el pulso es pequeño y tarda en subir, parvus et tardus.',
      'Si la válvula no cierra, el ventrículo eyecta mucho volumen y la aorta se vacía hacia atrás: el pulso es amplio y cae rápido, el saltón de Corrigan. Y en el taponamiento, en cada inspiración se llena menos el ventrículo izquierdo: la presión cae más de diez milímetros, es el pulso paradójico.',
    ],
    refs: [L('166–167')],
  },
  {
    id: 'c2-venoso',
    sec: 'pulsos',
    titulo: 'El cuello muestra la aurícula derecha',
    amplio: true,
    bloques: [
      {
        t: 'lista',
        items: [
          'Paciente a **30–45°**: la altura de la columna yugular es la **presión venosa** (8–12 cm H2O).',
          '**Onda a**: contracción auricular → **no hay en fibrilación auricular**; en cañón en el bloqueo completo.',
          '**Onda v** gigante: **insuficiencia tricuspídea**.',
          '**Reflujo hepatoyugular**: comprimir el hígado → la yugular se ingurgita y se mantiene (**insuficiencia derecha**).',
        ],
      },
    ],
    voz: [
      'Las yugulares no tienen válvulas y están pegadas a la aurícula derecha, así que el cuello muestra lo que pasa en el corazón derecho. Con el paciente a treinta o cuarenta y cinco grados, la altura de la columna es la presión venosa.',
      'La onda a es la contracción de la aurícula: por eso desaparece en la fibrilación auricular, y se vuelve una onda en cañón cuando la aurícula se contrae contra una tricúspide cerrada, en el bloqueo completo.',
      'La onda v gigante aparece cuando la sangre vuelve por una tricúspide insuficiente.',
      'Y si al comprimir el hígado la yugular se llena y se queda llena, el corazón derecho no puede con el volumen: es el reflujo hepatoyugular de la insuficiencia derecha.',
    ],
    refs: [L('171–173')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'ruidos', label: 'Ruidos' },
    { id: 'soplos', label: 'Soplos' },
    { id: 'pulsos', label: 'Pulsos' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'c2', label: 'Examen cardiovascular', tone: 'rose', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
