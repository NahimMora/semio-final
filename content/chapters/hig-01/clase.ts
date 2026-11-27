import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * hig-01 · «Para entenderlo»: ictericia, cirrosis, hipertensión portal y ascitis.
 * Fuentes: Merlín (Ictericia, Cirrosis, Hipertensión portal), apunte de Ortega pp. 393–400.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'hg-bili',
    sec: 'ictericia',
    titulo: 'El camino de la bilirrubina',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'gota', t: 'Hemólisis', d: 'Sobra **indirecta**: no pasa a la orina', tono: 'sky' },
          { ico: 'lab', t: 'Hígado', d: 'La **conjuga**: directa, hidrosoluble', tono: 'lilac' },
          { ico: 'nudo', t: 'Vía biliar', d: 'Obstruida: **coluria**, **acolia**, prurito', tono: 'rose' },
        ],
      },
      { t: 'clave', en: 1, text: 'Ictericia + **vesícula palpable indolora** = cáncer de cabeza de páncreas (**Courvoisier-Terrier**).', tono: 'rose' },
    ],
    voz: [
      'Para entender la ictericia, seguí a la bilirrubina. Nace de la hemoglobina como bilirrubina indirecta, que viaja pegada a la albúmina y no se filtra por el riñón. Si hay hemólisis, sobra indirecta: el paciente está amarillo, pero la orina es normal.',
      'El hígado la conjuga y la vuelve directa, soluble en agua. Si el hígado está enfermo, sube la directa y aparece coluria.',
      'Y si la vía biliar está obstruida, la bilis no llega al intestino: la orina se oscurece, la materia fecal queda blanca, como masilla, y la sal biliar en la piel da prurito. Si además se palpa la vesícula, grande e indolora, pensá en un cáncer de la cabeza del páncreas.',
    ],
    refs: [{ src: 'merlin', p: 'Ictericia' }],
  },
  {
    id: 'hg-cirrosis',
    sec: 'cirrosis',
    titulo: 'Cirrosis: dos problemas a la vez',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'El hígado funciona menos', tono: 'sky', items: ['Ictericia, **albúmina baja**', '**Quick bajo**', '**Encefalopatía**', 'Estrógenos: arañas, ginecomastia'] },
          { titulo: 'La sangre no pasa', tono: 'rose', items: ['**Hipertensión portal** > 12 mmHg', 'Várices, cabeza de medusa', 'Esplenomegalia', '**Ascitis**'] },
        ],
      },
      { t: 'clave', en: 1, text: 'Child-Pugh = **BATEA**: bilirrubina, albúmina, tiempo de Quick, encefalopatía, ascitis.', tono: 'lilac' },
    ],
    voz: [
      'En la cirrosis, el hígado se repara con cicatriz y nódulos, y eso trae dos problemas a la vez. Primero, funciona menos: sube la bilirrubina, baja la albúmina, baja el Quick porque no fabrica factores de coagulación, aparece la encefalopatía, y como no degrada los estrógenos aparecen arañas vasculares y ginecomastia.',
      'Segundo, la sangre de la porta no puede pasar: la presión sube, se abren atajos que forman várices y la cabeza de medusa, crece el bazo y aparece ascitis. El Child-Pugh mide justamente esto, con la palabra BATEA: bilirrubina, albúmina, tiempo de Quick, encefalopatía y ascitis.',
    ],
    refs: [L('393–397')],
  },
  {
    id: 'hg-gasa',
    sec: 'ascitis',
    titulo: 'GASA: ¿el líquido salió por presión o por inflamación?',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'GASA ≥ 1,1', tono: 'sky', items: ['El líquido sale **empujado por presión**', 'Pobre en albúmina', '**Hipertensión portal**'] },
          { titulo: 'GASA < 1,1', tono: 'rose', items: ['Peritoneo **inflamado o tumoral**', 'Rico en proteínas', 'Carcinomatosis, tuberculosis'] },
        ],
      },
      { t: 'clave', en: 1, text: '**PMN ≥ 250/mm³** en el líquido = peritonitis bacteriana espontánea.', tono: 'rose' },
    ],
    voz: [
      'El GASA es la diferencia entre la albúmina de la sangre y la del líquido ascítico. Si el líquido salió empujado por la presión de la porta, sale casi sin albúmina, y la diferencia es grande: uno coma uno o más, hipertensión portal.',
      'Si en cambio salió por un peritoneo inflamado o invadido por un tumor, arrastra proteínas, y la diferencia es chica. Y en el mismo líquido, si hay doscientos cincuenta polimorfonucleares o más, es una peritonitis bacteriana espontánea.',
    ],
    refs: [L('399–400')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'ictericia', label: 'Ictericia' },
    { id: 'cirrosis', label: 'Cirrosis e HTP' },
    { id: 'ascitis', label: 'Ascitis' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'hg', label: 'Hígado', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
