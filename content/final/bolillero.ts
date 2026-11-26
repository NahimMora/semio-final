/**
 * BOLILLERO OFICIAL — Semiología General, examen final (transcripción literal de Bolillero.jpeg).
 * `texto` respeta la redacción del archivo oficial (incluida la grafía «Aortica», «Liquido», etc.).
 * `temas` enlaza cada ítem con la base central (temas.ts). Nada de contenido se duplica acá.
 * Nota: la bolilla 14 NO incluye «H.C.» en el original; se respeta.
 */
export interface ItemBolilla {
  texto: string;
  temas: string[];
}

export interface Bolilla {
  n: number;
  items: ItemBolilla[];
}

const HC: ItemBolilla = { texto: 'H.C.', temas: ['hc'] };

export const BOLILLERO: Bolilla[] = [
  { n: 1, items: [
    { texto: 'Exploración Física del Hígado', temas: ['ef-higado'] },
    { texto: 'Síndrome de Condensación Pulmonar', temas: ['sx-condensacion'] },
    { texto: 'Estenosis Aortica', temas: ['estenosis-aortica'] },
    { texto: 'Valoración de los Pares Craneales I, II, III, IV y VI', temas: ['pc-I', 'pc-II', 'pc-oculomotores'] },
    HC,
  ] },
  { n: 2, items: [
    { texto: 'Exploración Física del Bazo', temas: ['ef-bazo'] },
    { texto: 'Semiológica de los Ruidos Cardiacos 1 y 2', temas: ['ruidos-r1r2'] },
    { texto: 'Liquido Pleural', temas: ['liquido-pleural'] },
    { texto: 'Constipación', temas: ['constipacion'] },
    HC,
  ] },
  { n: 3, items: [
    { texto: 'Manifestaciones clínicas de las Infecciones Urinarias Altas y Bajas', temas: ['itu'] },
    { texto: 'Cianosis', temas: ['cianosis'] },
    { texto: 'Semiológica del Pulso Arterial', temas: ['pulso-arterial'] },
    { texto: 'Fiebre', temas: ['fiebre'] },
    { texto: 'Exploración Física del Tórax', temas: ['ef-torax'] },
    HC,
  ] },
  { n: 4, items: [
    { texto: 'Exploración Física de TCS y Ganglios Linfáticos', temas: ['ef-tcs-ganglios'] },
    { texto: 'Disnea', temas: ['disnea'] },
    { texto: 'Semiológica del Pulso Venoso', temas: ['pulso-venoso'] },
    { texto: 'Valoración de los Pares Craneales V y VII', temas: ['pc-V', 'pc-VII'] },
    { texto: 'Edema', temas: ['edema'] },
    HC,
  ] },
  { n: 5, items: [
    { texto: 'Exploración Física del Cuello y la Glándula Tiroides', temas: ['ef-cuello-tiroides'] },
    { texto: 'Síndrome Cerebeloso', temas: ['sx-cerebeloso'] },
    { texto: 'Constipación', temas: ['constipacion'] },
    { texto: 'Liquido Ascítico', temas: ['liquido-ascitico'] },
    { texto: 'Síndrome Anémico e Índices Hematimétricos', temas: ['sx-anemico'] },
    HC,
  ] },
  { n: 6, items: [
    { texto: 'Exploración Física del Tórax', temas: ['ef-torax'] },
    { texto: 'Síndrome de Derrame Pleural', temas: ['sx-derrame'] },
    { texto: 'Hemorragia Digestiva Alta y Baja', temas: ['hd'] },
    { texto: 'Insuficiencia Mitral', temas: ['insuf-mitral'] },
    { texto: 'Síndrome Nefrótico', temas: ['nefrotico'] },
    HC,
  ] },
  { n: 7, items: [
    { texto: 'Exploración Física del Abdomen', temas: ['ef-abdomen'] },
    { texto: 'Síncope', temas: ['sincope'] },
    { texto: 'Examen del Líquido Cefalorraquídeo', temas: ['lcr'] },
    { texto: 'Síndrome Atelectásico', temas: ['sx-atelectasia'] },
    { texto: 'Ictericia', temas: ['ictericia'] },
    HC,
  ] },
  { n: 8, items: [
    { texto: 'Exploración Física de las Articulaciones', temas: ['ef-articulaciones'] },
    { texto: 'Edema', temas: ['edema'] },
    { texto: 'Síntomas y signos digestivos altos', temas: ['digestivo-alto'] },
    { texto: 'Análisis de la Orina', temas: ['orina'] },
    { texto: 'Paciente con Dolor Abdominal Agudo', temas: ['abdomen-agudo'] },
    HC,
  ] },
  { n: 9, items: [
    { texto: 'Valoración de la orientación T, E y P y escala de Glasgow', temas: ['conciencia-glasgow'] },
    { texto: 'Ascitis', temas: ['ascitis'] },
    { texto: 'Estenosis Mitral', temas: ['estenosis-mitral'] },
    { texto: 'Valoración de los Ruidos 3 y 4', temas: ['ruidos-r3r4'] },
    HC,
  ] },
  { n: 10, items: [
    { texto: 'Exploración Física de la Sensibilidad Superficial', temas: ['sens-superficial'] },
    { texto: 'Neumotórax', temas: ['neumotorax'] },
    { texto: 'Hipertensión Portal', temas: ['htp'] },
    { texto: 'Constipación', temas: ['constipacion'] },
    HC,
  ] },
  { n: 11, items: [
    { texto: 'Exploración Física de la Sensibilidad Profunda y Mixta', temas: ['sens-profunda'] },
    { texto: 'Insuficiencia Aortica', temas: ['insuf-aortica'] },
    { texto: 'Alteraciones del Tono Muscular, la Postura y la Marcha', temas: ['tono', 'postura-marcha'] },
    { texto: 'Dolor', temas: ['dolor'] },
    { texto: 'Síndrome Extrapiramidal Hipertónico Hipocinético (Parkinson)', temas: ['parkinson'] },
    HC,
  ] },
  { n: 12, items: [
    { texto: 'Toma de los Signos Vitales', temas: ['signos-vitales'] },
    { texto: 'Alteraciones de la fuerza y el tono muscular', temas: ['fuerza', 'tono'] },
    { texto: 'Ángor', temas: ['angor'] },
    { texto: 'Ictericias', temas: ['ictericia'] },
    { texto: 'Síndrome Piramidal', temas: ['sx-piramidal'] },
    HC,
  ] },
  { n: 13, items: [
    { texto: 'Exploración Física del Intestino', temas: ['ef-intestino'] },
    { texto: 'Cianosis', temas: ['cianosis'] },
    { texto: 'Valoración del paciente con Broncoespasmos (Asma Bronquial)', temas: ['asma'] },
    { texto: 'Síndrome Meníngeo', temas: ['sx-meningeo'] },
    HC,
  ] },
  { n: 14, items: [
    { texto: 'Exploración Física de la Fuerza y el tono Muscular y Reflejos Profundos', temas: ['fuerza', 'tono', 'reflejos-profundos'] },
    { texto: 'Ruidos agregados pulmonares', temas: ['ruidos-agregados'] },
    { texto: 'Disnea', temas: ['disnea'] },
    { texto: 'Síndrome de Insuficiencia Cardíaca', temas: ['ic'] },
  ] },
  { n: 15, items: [
    { texto: 'Exploración Física de los Pares Craneales VIII, IX, X', temas: ['pc-VIII', 'pc-IX-X'] },
    { texto: 'Insuficiencia Aortica', temas: ['insuf-aortica'] },
    { texto: 'Síndrome de Hipertensión Portal', temas: ['htp'] },
    { texto: 'Síndrome de Condensación (Neumonía)', temas: ['sx-condensacion'] },
    { texto: 'Disfagia', temas: ['disfagia'] },
    HC,
  ] },
  { n: 16, items: [
    { texto: 'Exploración Física de la Taxia y los Pares Craneales XI y XII', temas: ['taxia', 'pc-XI', 'pc-XII'] },
    { texto: 'Cefaleas', temas: ['cefaleas'] },
    { texto: 'Infección Urinaria', temas: ['itu'] },
    { texto: 'Disnea', temas: ['disnea'] },
    { texto: 'Valoración de los ganglios linfáticos', temas: ['ef-tcs-ganglios'] },
    { texto: 'Ictericia', temas: ['ictericia'] },
    { texto: 'Examen del Líquido Ascítico', temas: ['liquido-ascitico'] },
    HC,
  ] },
  { n: 17, items: [
    { texto: 'Exploración Física del Cráneo, Ojos, Oído, Nariz, y Boca', temas: ['ef-cabeza'] },
    { texto: 'Síndrome Meníngeo', temas: ['sx-meningeo'] },
    { texto: 'Valoración de los Soplos Cardíacos', temas: ['soplos'] },
    { texto: 'Ictericia', temas: ['ictericia'] },
    { texto: 'Exploración Física del Bazo', temas: ['ef-bazo'] },
    HC,
  ] },
  { n: 18, items: [
    { texto: 'Exploración Física del Abdomen', temas: ['ef-abdomen'] },
    { texto: 'Exploración de los Pares Craneales I, II, y VII', temas: ['pc-I', 'pc-II', 'pc-VII'] },
    { texto: 'Edema', temas: ['edema'] },
    { texto: 'Insuficiencia Respiratoria', temas: ['insuf-resp'] },
    { texto: 'Estenosis Aórtica', temas: ['estenosis-aortica'] },
    HC,
  ] },
  { n: 19, items: [
    { texto: 'Valoración del Pulso Arterial', temas: ['pulso-arterial'] },
    { texto: 'Valoración del Tono Muscular y Reflejos Superficiales', temas: ['tono', 'reflejos-superficiales'] },
    { texto: 'Valoración del VIII Par craneal', temas: ['pc-VIII'] },
    { texto: 'Síndrome Cerebeloso', temas: ['sx-cerebeloso'] },
    { texto: 'Síndrome de Derrame Pleural y valoración del Líquido Pleural', temas: ['sx-derrame', 'liquido-pleural'] },
    HC,
  ] },
  { n: 20, items: [
    { texto: 'Exploración Física de la Pared Abdominal (puntos dolorosos y hernias)', temas: ['pared-abdominal'] },
    { texto: 'Vómitos', temas: ['vomitos'] },
    { texto: 'Hemoptisis', temas: ['hemoptisis'] },
    { texto: 'Hemorragia Digestiva', temas: ['hd'] },
    { texto: 'Síndrome Meníngeo', temas: ['sx-meningeo'] },
    { texto: 'Síndrome Bronquial (Asma Bronquial)', temas: ['asma'] },
    HC,
  ] },
];

/** Bolillas en las que aparece cada tema (derivado). */
export const BOLILLAS_DE: Record<string, number[]> = (() => {
  const m: Record<string, number[]> = {};
  for (const b of BOLILLERO)
    for (const it of b.items)
      for (const t of it.temas) {
        m[t] = m[t] ?? [];
        if (!m[t].includes(b.n)) m[t].push(b.n);
      }
  return m;
})();

export function textoBolillas(ns: number[]): string {
  if (!ns.length) return '';
  if (ns.length === 1) return `Bolilla ${ns[0]}`;
  if (ns.length === 20) return 'Las 20 bolillas';
  return `Bolillas ${ns.slice(0, -1).join(', ')} y ${ns[ns.length - 1]}`;
}
