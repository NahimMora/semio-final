// Recorre las diapositivas de una unidad y captura el visor en cada paso.
// Uso: node scripts/captura-diapos.mjs <url-unidad> <carpeta> [ancho] [alto] [pasos]
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
const [url, out, w = '390', h = '844', n = '12'] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const p = await b.newPage();
await p.setViewport({ width: +w, height: +h });
await p.goto(url, { waitUntil: 'networkidle2' });
await p.evaluate(() => localStorage.clear());
await p.reload({ waitUntil: 'networkidle2' });
await new Promise((r) => setTimeout(r, 800));
const alturas = [];
for (let i = 0; i < +n; i++) {
  const el = await p.$('.visor, [class*="visor"]');
  const box = el ? await el.boundingBox() : null;
  alturas.push(box ? Math.round(box.height) : -1);
  const ctl = await p.$eval('.visor__control', (c) => Math.round(c.getBoundingClientRect().top - c.parentElement.getBoundingClientRect().top)).catch(() => -1);
  globalThis.ctls = [...(globalThis.ctls ?? []), ctl];
  if (el) await el.screenshot({ path: `${out}/d${String(i).padStart(2, '0')}.png` });
  const sig = await p.$$('button');
  let clic = false;
  for (const s of sig) {
    const t = await s.evaluate((x) => (x.getAttribute('aria-label') || x.textContent || '').toLowerCase());
    if (/siguiente|avanzar|próximo/.test(t)) { await s.click(); clic = true; break; }
  }
  if (!clic) break;
  await new Promise((r) => setTimeout(r, 900));
}
console.log('alturas del visor:', alturas.join(' '));
console.log('posición de los botones:', (globalThis.ctls ?? []).join(' '));
await b.close();
