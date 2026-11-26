import { TEMA_POR_ID } from '@content/final/temas';
import { MANEUVERS } from '@content/maneuvers';
import { findChapter } from '@content/curriculum';
import { CRONOGRAMA, type Dia } from '@content/final/cronograma';
import { loadChapter } from '@/lib/useChapter';
import { plain } from '@/lib/text';
import { preguntasDeTema, textoRespuesta } from './preguntas';
import { textoBolillasDe } from './ui';
import { getFinal } from './store';

export const INSTRUCCIONES =
  'Actuá como profesor de Semiología de la Fundación Barceló. Tomame un examen oral sobre los temas que aparecen en esta ficha. Haceme preguntas abiertas de una en una, esperá mi respuesta y corregime brevemente. No me muestres la respuesta antes de que intente responder. Priorizá la comprensión fisiopatológica, las maniobras, los criterios y los conceptos de examen. Hacé repreguntas cuando corresponda. No interrumpas constantemente por detalles menores. Al finalizar, indicame qué contenidos domino y cuáles necesito reforzar.';

const corta = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;

/** Fecha en que se repasa lo estudiado un día (según los bloques de repaso del cronograma). */
export function fechasDeRepaso(d: Dia): string[] {
  const out: string[] = [];
  for (const x of CRONOGRAMA) for (const b of x.bloques) if (b.repasa?.includes(d.corto)) out.push(x.fecha);
  return out;
}

function diaSiguiente(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const f = new Date(y, m - 1, d + 1);
  const z = (n: number) => String(n).padStart(2, '0');
  return `${f.getFullYear()}-${z(f.getMonth() + 1)}-${z(f.getDate())}`;
}

export interface MetaFicha {
  titulo: string;
  fechaEstudio?: string;
  fechaRepaso?: string[];
  nota?: string;
}

/** Arma la ficha completa en Markdown: autosuficiente (ChatGPT no ve la página). */
export async function armarFicha(temaIds: string[], meta: MetaFicha): Promise<string> {
  const s = getFinal();
  const temas = temaIds.map((id) => TEMA_POR_ID[id]).filter(Boolean);
  const L: string[] = [];
  L.push(`# Ficha de repaso — ${meta.titulo}`);
  L.push('');
  L.push('## Instrucciones para ChatGPT');
  L.push(INSTRUCCIONES);
  L.push('');
  L.push('Contexto: examen final ORAL de Semiología (Fundación Barceló, sede La Rioja), por bolillero de 20 bolillas; puede evaluar cualquier docente. Usá como referencia Argente-Álvarez (Semiología Médica) y Baré-Califano (Semiotecnia) para las maniobras.');
  L.push('');
  if (meta.fechaEstudio) L.push(`- **Fecha de estudio original:** ${corta(meta.fechaEstudio)}`);
  if (meta.fechaRepaso?.length) L.push(`- **Repaso programado:** ${meta.fechaRepaso.map(corta).join(' y ')}`);
  if (meta.nota) L.push(`- ${meta.nota}`);
  L.push('');
  L.push('## Temas');
  const capitulos = new Set<string>();
  for (const t of temas) {
    L.push(`### ${t.titulo}`);
    L.push(`- ${textoBolillasDe(t.id)}`);
    L.push(`- Subtemas: ${t.resumen}`);
    for (const e of t.frecuente ?? []) L.push(`- Pregunta frecuente (${e.quien === 'ortega' ? 'Ortega' : 'Merlín'}): ${e.nota} [${e.fuente}]`);
    t.capitulos.forEach((c) => capitulos.add(c.id));
    L.push('');
  }

  // Conceptos imprescindibles (cierre de cada capítulo)
  const esenciales: string[] = [];
  const fuentes: string[] = [];
  for (const id of capitulos) {
    const c = await loadChapter(id);
    if (!c) continue;
    for (const e of c.closing.essentials) esenciales.push(plain(e));
    const meta = findChapter(id);
    if (meta) fuentes.push(`${meta.title}: ${meta.sourcesLabel}`);
  }
  if (esenciales.length) {
    L.push('## Conceptos imprescindibles');
    for (const e of esenciales.slice(0, 40)) L.push(`- ${e}`);
    L.push('');
  }

  // Maniobras
  const manis = [...new Set(temas.flatMap((t) => t.maniobras ?? []))].map((id) => MANEUVERS.find((m) => m.id === id)).filter(Boolean);
  if (manis.length) {
    L.push('## Maniobras que tengo que saber hacer y explicar');
    for (const m of manis) L.push(`- **${m!.name}**: ${plain(m!.explores)} Positiva/patológica: ${plain(m!.pathologic)}`);
    L.push('');
  }

  // Preguntas documentadas con respuesta breve (para que ChatGPT corrija con el mismo criterio)
  L.push('## Preguntas de examen (con respuesta de referencia — NO me las muestres antes de que responda)');
  let n = 0;
  for (const t of temas) {
    const ps = (await preguntasDeTema(t)).filter((p) => !p.delCapitulo).slice(0, 8);
    for (const p of ps) {
      n++;
      const origen = p.tipo === 'ortega' ? ' [Ortega la marca como pregunta de examen]' : p.tipo === 'preguntero' ? ' [preguntero de la cátedra]' : '';
      const r = textoRespuesta(p).replace(/\n+/g, ' ').slice(0, 600);
      L.push(`${n}. ${p.texto}${origen}`);
      if (r) L.push(`   - Respuesta de referencia: ${r}`);
    }
  }
  if (!n) L.push('- (Todavía no hay preguntas cargadas para estos temas: preguntá libremente sobre los subtemas.)');
  L.push('');

  // Errores anteriores
  const errores = s.errores.filter((e) => temaIds.includes(e.temaId) && !e.resuelto);
  L.push('## Errores anteriores (insistí en estos)');
  if (errores.length) for (const e of errores) L.push(`- ${e.pregunta} → correcto: ${e.respuesta}${e.concepto ? ` (reforzar: ${e.concepto})` : ''}`);
  else L.push('- Sin errores registrados para estos temas.');
  L.push('');

  L.push('## Fuentes');
  for (const f of fuentes) L.push(`- ${f}`);
  L.push('');
  L.push('---');
  L.push(INSTRUCCIONES);
  return L.join('\n');
}

export async function fichaDelDia(fecha: string): Promise<{ texto: string; titulo: string } | null> {
  const d = CRONOGRAMA.find((x) => x.fecha === fecha);
  if (!d) return null;
  const s = getFinal();
  const planificados = d.bloques.flatMap((b) => b.temas);
  const reales = s.estudiados[fecha]?.length ? s.estudiados[fecha] : planificados;
  const repasos = fechasDeRepaso(d);
  const titulo = `${d.corto} · ${d.titulo}`;
  const texto = await armarFicha([...new Set(reales)], {
    titulo,
    fechaEstudio: d.fecha,
    fechaRepaso: [diaSiguiente(d.fecha), ...repasos],
    nota: s.estudiados[fecha]?.length ? 'Temas marcados como estudiados efectivamente ese día.' : 'Temas planificados para ese día (no marqué cuáles estudié realmente).',
  });
  return { texto, titulo };
}
