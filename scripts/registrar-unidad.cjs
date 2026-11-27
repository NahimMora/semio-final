// Conecta una unidad terminada: apunte para el oral, clase visual (diapositivas + video) y PDF.
// Uso: node scripts/registrar-unidad.cjs <unidad> <claseId> "<Título de la clase>" <sistemaPdf>
// Ej.: node scripts/registrar-unidad.cjs vitales gen-01 "Examen general y signos vitales" vitales
const fs = require('fs');
const [unidad, claseId, titulo, sistema] = process.argv.slice(2);
if (!unidad || !claseId || !titulo || !sistema) {
  console.error('Uso: node scripts/registrar-unidad.cjs <unidad> <claseId> "<Título>" <sistemaPdf>');
  process.exit(2);
}
const edit = (file, fn) => {
  const s = fs.readFileSync(file, 'utf8');
  const t = fn(s);
  if (t !== s) fs.writeFileSync(file, t);
  console.log(t !== s ? 'ok   ' : 'igual', file);
};
const camel = claseId.replace(/-(\w)/g, (_, c) => c.toUpperCase()).replace(/^\w/, (c) => c.toUpperCase());

// 1) Apunte y clase en src/oral/apuntes.ts
edit('src/oral/apuntes.ts', (s) => {
  if (!s.includes(`  ${JSON.stringify(unidad).slice(1, -1)}: () => import('@content/oral/${unidad}')`) && !s.includes(`'${unidad}': () => import('@content/oral/${unidad}')`)) {
    const key = /^[a-z]+$/.test(unidad) ? unidad : `'${unidad}'`;
    s = s.replace('const CARGAR: Record<string, () => Promise<{ apunte: ApunteUnidad }>> = {\n', `const CARGAR: Record<string, () => Promise<{ apunte: ApunteUnidad }>> = {\n  ${key}: () => import('@content/oral/${unidad}'),\n`);
  }
  if (!s.includes(`'${claseId}': {`))
    s = s.replace('const CLASES_NUEVAS: Record<string, { titulo: string; cargar: () => Promise<{ clase: PlanClase }> }> = {\n', `const CLASES_NUEVAS: Record<string, { titulo: string; cargar: () => Promise<{ clase: PlanClase }> }> = {\n  '${claseId}': { titulo: ${JSON.stringify(titulo)}, cargar: () => import('@content/chapters/${claseId}/clase') },\n`);
  return s;
});
// 2) La unidad usa esa clase
edit('content/final/unidades.ts', (s) => {
  const re = new RegExp(`(\\{ id: '${unidad}',[^\\n]*?clases: \\[)([^\\]]*)\\]`);
  if (process.env.SOLO) return s.replace(re, (m, a) => `${a}'${claseId}']`);
  return s.replace(re, (m, a, b) => (b.includes(`'${claseId}'`) ? m : `${a}${b ? b + ', ' : ''}'${claseId}']`));
});
// 3) Composición de Remotion
edit('video/src/Root.tsx', (s) => {
  if (s.includes(`plan${camel}`)) return s;
  s = s.replace("import { clase as planHc01 }", `import { clase as plan${camel} } from '../../content/chapters/${claseId}/clase';\nimport tiempos${camel} from '../../content/chapters/${claseId}/clase-tiempos.json';\nimport { clase as planHc01 }`);
  return s.replace("const CLASES: CapClase[] = [\n", `const CLASES: CapClase[] = [\n  { id: '${claseId}-clase', titulo: ${JSON.stringify(titulo)}, plan: plan${camel}, tiempos: tiempos${camel} as TiemposClase },\n`);
});
// 4) PDF del sistema
edit('src/nuevo/Paginas.tsx', (s) => s.replace(/export const PDF_NUEVOS: string\[\] = \[([^\]]*)\];/, (m, l) => (l.includes(`'${sistema}'`) ? m : `export const PDF_NUEVOS: string[] = [${l}, '${sistema}'];`)));
// 5) Archivos de tiempos y video vacíos si todavía no existen
const dir = `content/chapters/${claseId}`;
if (!fs.existsSync(`${dir}/clase-video.json`)) fs.writeFileSync(`${dir}/clase-video.json`, '{}\n');
if (!fs.existsSync(`${dir}/clase-tiempos.json`)) fs.writeFileSync(`${dir}/clase-tiempos.json`, JSON.stringify({ fps: 24, total: 100, portada: 96, cierre: 120, voz: 'es-AR-TomasNeural', diapos: [] }) + '\n');
