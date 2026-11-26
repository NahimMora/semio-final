// Captura de pantalla de una ruta. Uso: node scripts/captura.mjs <url> <salida.png> [ancho] [alto] [oscuro 1|0]
import puppeteer from 'puppeteer-core';
const [url, out, w = '390', h = '844', dark = '1'] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const p = await b.newPage();
await p.setViewport({ width: +w, height: +h });
if (dark === '1') await p.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
await p.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
await new Promise((r) => setTimeout(r, 1200));
await p.screenshot({ path: out });
await b.close();
