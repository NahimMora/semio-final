import type { SourceRef } from '@/types';
import type { Diapositiva, Mazo, PlanClase } from '@/clase/tipos';
import video from './clase-video.json';

/*
 * dal-01 · «Para entenderlo»: digestivo alto y hemorragia digestiva.
 * Fuentes: Merlín (Disfagia, Náuseas y vómitos, Síndrome ulceroso, Hemorragia digestiva), apunte de Ortega pp. 368–392.
 */
const L = (p: string): SourceRef => ({ src: 'libro', p });

const diapos: Diapositiva[] = [
  {
    id: 'da-disfagia',
    sec: 'disfagia',
    titulo: 'Disfagia: ¿dónde se traba?',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Orofaríngea (transferencia)', tono: 'sky', items: ['Falla **al iniciar** la deglución', 'Se va a la vía aérea: **tos**, aspiración', 'Causas **neuromusculares** (ACV, Parkinson)'] },
          { titulo: 'Esofágica (transporte)', tono: 'rose', items: ['Se traba **en el pecho**', '**Obstructiva**: sólidos, progresiva (cáncer)', '**Motora**: sólidos y líquidos (acalasia)'] },
        ],
      },
    ],
    voz: [
      'Tragar tiene dos tiempos. Primero la transferencia, de la boca y la faringe al esófago. Si eso falla, el problema aparece apenas empieza a tragar, y el alimento se va hacia la vía aérea: tos, atragantamiento, neumonía aspirativa. Es la disfagia orofaríngea, de causa neuromuscular, como un ACV o un Parkinson.',
      'Después viene el transporte por el esófago. Si falla, el bolo se traba en el pecho. Si hay un obstáculo, como un tumor, primero se traban los sólidos y cada vez más: es obstructiva y progresiva. Si falla el motor, como en la acalasia, cuestan los sólidos y los líquidos desde el principio.',
    ],
    refs: [L('368')],
  },
  {
    id: 'da-vomito',
    sec: 'vomito',
    titulo: 'El vómito dice hasta dónde llegó la comida',
    amplio: true,
    bloques: [
      {
        t: 'secuencia',
        flechas: true,
        items: [
          { ico: 'vomito', t: 'Sin digerir', d: 'Esófago (acalasia, Zenker)', tono: 'sky' },
          { ico: 'reloj', t: 'Horas después', d: '**Píloro** obstruido', tono: 'lilac' },
          { ico: 'gota', t: 'Bilioso', d: 'Más allá del píloro', tono: 'sky' },
          { ico: 'nudo', t: 'Fecaloide', d: 'Obstrucción **baja**', tono: 'rose' },
        ],
      },
      { t: 'clave', en: 1, text: 'Matinal y **en chorro**, sin náuseas: pensar en **hipertensión endocraneana**.', tono: 'lilac' },
    ],
    voz: [
      'El contenido del vómito cuenta hasta dónde llegó la comida. Si sale sin digerir, se quedó en el esófago.',
      'Si sale la comida de varias horas antes, el estómago no se vació: el píloro está obstruido, casi siempre por una úlcera.',
      'Si es bilioso, el contenido ya había pasado el píloro.',
      'Y si es fecaloide, hay una obstrucción intestinal baja. Ojo: un vómito matinal, en chorro y sin náuseas no viene del abdomen; pensá en hipertensión endocraneana.',
    ],
    refs: [L('375')],
  },
  {
    id: 'da-ulcera',
    sec: 'ulcera',
    titulo: 'Úlcera: agresión contra defensa',
    amplio: true,
    bloques: [
      {
        t: 'comparar',
        cols: [
          { titulo: 'Agresión', tono: 'rose', items: ['**Ácido** y pepsina', '**H. pylori**: inflama el antro, más ácido', 'Tabaco, estrés'] },
          { titulo: 'Defensa', tono: 'sky', items: ['Moco y bicarbonato', 'Flujo sanguíneo', '**Prostaglandinas** (las bloquean los **AINE**)'] },
        ],
      },
      { t: 'clave', en: 1, text: 'Duodenal: «**hambre dolorosa**», calma al comer · complicaciones: **hemorragia, perforación, estenosis**.', tono: 'lilac' },
    ],
    voz: [
      'La mucosa del estómago vive en ácido y se defiende con una barrera: moco, bicarbonato, buen flujo sanguíneo y prostaglandinas. La úlcera aparece cuando la agresión le gana a la defensa.',
      'El Helicobacter pylori inflama el antro y aumenta el ácido; los antiinflamatorios bloquean las prostaglandinas que protegen la mucosa. En la úlcera duodenal el dolor es como hambre dolorosa y calma al comer. Y sus complicaciones son tres: la hemorragia, la perforación y la estenosis del píloro.',
    ],
    refs: [L('370–373')],
  },
  {
    id: 'da-hd',
    sec: 'hd',
    titulo: 'Hemorragia: primero cuánto, después dónde',
    amplio: true,
    bloques: [
      {
        t: 'cadena',
        pasos: [
          { k: 'signo', text: '**Cuánto**: FC, PA, ortostatismo, diuresis, estado mental (clases I–IV).' },
          { k: 'mecanismo', text: 'El **Treitz** divide alta de baja.' },
          { k: 'signo', text: '**Hematemesis** y **melena** (sangre digerida): **alta** → úlcera, várices.' },
          { k: 'signo', text: '**Hematoquecia** (sangre roja): **baja** → divertículos, angiodisplasia, hemorroides.' },
        ],
      },
    ],
    voz: [
      'Frente a una hemorragia digestiva, lo primero es saber cuánto sangró, y eso lo dicen los signos vitales: frecuencia, presión, ortostatismo, diuresis y estado mental. El hematocrito no sirve al principio, porque tarda horas en bajar.',
      'Después, dónde: el ángulo de Treitz divide la hemorragia alta de la baja.',
      'La sangre que sale por arriba, o que recorre todo el intestino y las bacterias la vuelven negra, la melena, indica un sangrado alto: úlcera, gastritis, várices.',
      'La sangre roja por el ano, la hematoquecia, indica uno bajo: divertículos y angiodisplasia en los mayores, hemorroides y fisuras en los jóvenes.',
    ],
    refs: [L('389–392')],
  },
];

const fisio: Mazo = {
  id: 'fisio',
  secciones: [
    { id: 'disfagia', label: 'Disfagia' },
    { id: 'vomito', label: 'Vómitos' },
    { id: 'ulcera', label: 'Úlcera' },
    { id: 'hd', label: 'Hemorragia' },
  ],
  diapos,
};

export const clase: PlanClase = {
  mapa: { raices: [{ id: 'da', label: 'Digestivo alto', tone: 'sky', hijos: [] }] },
  fisio,
  teoria: { id: 'teoria', secciones: [], diapos: [] },
  video: (video as { src?: string }).src ? (video as PlanClase['video']) : undefined,
  casos: [],
  simulacroDesarrollos: [],
  anclas: {},
};
