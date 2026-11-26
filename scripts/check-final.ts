// Verifica la cobertura del bolillero: ids válidos, todos los temas con día asignado, todas las bolillas con contenido.
import { TEMAS, TEMA_POR_ID } from '../content/final/temas';
import { BOLILLERO, BOLILLAS_DE } from '../content/final/bolillero';
import { CRONOGRAMA, temasDelDia } from '../content/final/cronograma';
import { UNIDADES } from '../content/final/unidades';
let err = 0;
const fail = (m: string) => { console.log('✗ ' + m); err++; };
if (BOLILLERO.length !== 20) fail(`El bolillero tiene ${BOLILLERO.length} bolillas`);
BOLILLERO.forEach((b, i) => { if (b.n !== i + 1) fail(`Numeración: posición ${i + 1} tiene n=${b.n}`); });
for (const b of BOLILLERO) for (const it of b.items) for (const t of it.temas) if (!TEMA_POR_ID[t]) fail(`Bolilla ${b.n}: tema inexistente «${t}»`);
const enCrono = new Set(CRONOGRAMA.filter((d) => d.vuelta === 1).flatMap(temasDelDia));
for (const t of TEMAS) if (!enCrono.has(t.id)) fail(`Tema sin día en la primera vuelta: ${t.id}`);
for (const d of CRONOGRAMA) for (const b of d.bloques) { for (const t of b.temas) if (!TEMA_POR_ID[t]) fail(`${d.corto}: tema inexistente ${t}`); if (b.min > 90) fail(`${d.corto} ${b.id}: bloque de ${b.min} min (> 90)`); }
for (const d of CRONOGRAMA) { const s = d.bloques.reduce((a, b) => a + b.min, 0); if (d.minutos && s !== d.minutos) fail(`${d.corto}: bloques suman ${s} ≠ ${d.minutos}`); if (s > 195) fail(`${d.corto}: ${s} min > 195`); }
const ids = new Set<string>(); for (const t of TEMAS) { if (ids.has(t.id)) fail('id duplicado ' + t.id); ids.add(t.id); }
const enUnidad = new Map<string, string>();
for (const u of UNIDADES) for (const t of u.temas) { if (!TEMA_POR_ID[t]) fail(`Unidad ${u.id}: tema inexistente ${t}`); if (enUnidad.has(t)) fail(`Tema ${t} en dos unidades`); enUnidad.set(t, u.id); }
for (const t of TEMAS) if (!enUnidad.has(t.id)) fail(`Tema sin unidad: ${t.id}`);
console.log(`Unidades de estudio: ${UNIDADES.length}`);
const enBol = TEMAS.filter((t) => BOLILLAS_DE[t.id]);
console.log(`Temas: ${TEMAS.length} · en el bolillero: ${enBol.length} · complementarios: ${TEMAS.length - enBol.length}`);
console.log(`Estado de desarrollo: ${['listo', 'parcial', 'pendiente'].map((e) => `${e} ${TEMAS.filter((t) => t.estado === e).length}`).join(' · ')}`);
console.log(err ? `${err} problemas` : 'Cobertura del bolillero OK');
process.exit(err ? 1 : 0);
