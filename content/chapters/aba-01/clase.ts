import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * aba-01 · «Para entenderlo»: abdomen agudo y peritonitis.
 * Fuentes: Merlín (Dolor, Dolor abdominal, Apendicitis, Íleo y peritonitis), apunte de Ortega pp. 376 y 383–384.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'aa-dolor',
    sec: 'dolor',
    titulo: 'Visceral o somático',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Visceral (el órgano)', tono: 'sky', items: ['Distensión, isquemia, inflamación', '**Difuso**, en la línea media', 'Inquieto, con náuseas y sudor'] },
          { titulo: 'Somático (el peritoneo)', tono: 'rose', items: ['Peritoneo **parietal** irritado', '**Localizado**, preciso', 'Quieto: duele **al moverse**'] },
        ],
      },
      { t: 'clave', en: 1, text: 'Apendicitis: empieza **periumbilical** (visceral) y **migra a la FID** (somático).', tono: 'lilac' },
    ],
    voz: [
      'El dolor abdominal tiene dos orígenes. El visceral nace en el órgano, cuando se distiende, se isquemia o se inflama. Llega por fibras lentas, es difuso, en la línea media, y el paciente está inquieto, con náuseas y sudor.',
      'El somático nace en el peritoneo parietal cuando se irrita: es preciso, localizado, y el paciente se queda quieto porque moverse duele. La apendicitis tiene los dos: empieza alrededor del ombligo, cuando el apéndice se distiende, y después migra a la fosa ilíaca derecha, cuando se inflama el peritoneo de al lado.',
    ],
    refs: [{ src: 'merlin', p: 'Dolor' }],
  },
  {
    id: 'aa-cinco',
    sec: 'tipos',
    titulo: 'Los cinco abdómenes agudos',
    amplio: true,
    bloques: [
      {
        t: 'cuadro',
        head: ['Tipo', 'Ejemplo', 'La clave'],
        filas: [
          ['**Inflamatorio**', 'Apendicitis, colecistitis, pancreatitis', 'Dolor localizado, fiebre, Blumberg'],
          ['**Obstructivo**', 'Bridas, hernias, vólvulo', 'Cólico, distensión, **ruidos de lucha**'],
          ['**Perforativo**', 'Úlcera perforada', '**Tabla**, silencio, **Jobert**'],
          ['**Hemorrágico**', 'Embarazo ectópico roto', '**Hipovolemia**'],
          ['**Vascular**', 'Isquemia mesentérica', 'Dolor **desproporcionado** al examen'],
        ],
      },
    ],
    voz: [
      'Hay cinco abdómenes agudos, y cada uno tiene una clave. El inflamatorio, como la apendicitis o la colecistitis, da dolor localizado, fiebre y Blumberg. El obstructivo, por bridas o hernias, da dolor cólico, distensión, ruidos de lucha y el paciente deja de eliminar gases.',
      'El perforativo, como una úlcera perforada, da un abdomen en tabla, silencioso, y el aire libre borra la matidez del hígado: el signo de Jobert. El hemorrágico, como un embarazo ectópico roto, se reconoce por la hipovolemia. Y el vascular, la isquemia mesentérica, es traicionero: el dolor es enorme y el abdomen, al principio, está blando.',
    ],
    refs: [{ src: 'merlin', p: 'Dolor abdominal' }],
  },
  {
    id: 'aa-peritonitis',
    sec: 'peritonitis',
    titulo: 'Peritonitis: el peritoneo inflamado no se quiere mover',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'alteracion', text: 'Una víscera se **perfora** o inflama: gérmenes en un peritoneo estéril.' },
          { k: 'mecanismo', text: 'Inflamación y exudado; el intestino **se paraliza**.' },
          { k: 'signo', text: '**Silencio**, **defensa**, abdomen **en tabla**, **Blumberg**.' },
          { k: 'signo', text: 'Primaria (PBE): cirrótico con ascitis, sin foco · secundaria: **perforación**, quirúrgica.' },
        ],
      },
    ],
    voz: [
      'El peritoneo es estéril. Cuando una víscera se perfora o se inflama, llegan gérmenes.',
      'El peritoneo se inflama, produce exudado, y el intestino se paraliza.',
      'Por eso el abdomen queda silencioso, la pared se contrae para proteger, hasta ponerse en tabla, y duele al soltar la presión: el signo de Blumberg.',
      'La peritonitis secundaria, la más frecuente, viene de una perforación o una víscera inflamada y es quirúrgica. La primaria, o espontánea, aparece sin foco en el cirrótico con ascitis, y se trata con antibióticos.',
    ],
    refs: [L('383–384')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'dolor', label: 'Tipos de dolor' },
    { id: 'tipos', label: 'Abdomen agudo' },
    { id: 'peritonitis', label: 'Peritonitis' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'aa', label: 'Abdomen agudo', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
