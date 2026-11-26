// Genera el apunte PDF de un sistema desde la ruta imprimible.
// Uso: node scripts/pdf-apunte.mjs <baseUrl> <sistema> [<sistema> ...]
// Ej.: node scripts/pdf-apunte.mjs http://localhost:4791/semio-final/ hc
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const CHROME = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const [base, ...sistemas] = process.argv.slice(2);
if (!base || !sistemas.length) {
  console.error('Uso: node scripts/pdf-apunte.mjs <baseUrl> <sistema> [...]');
  process.exit(2);
}
mkdirSync('public/pdf', { recursive: true });
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
for (const s of sistemas) {
  const page = await browser.newPage();
  await page.goto(`${base.replace(/\/$/, '')}/#/imprimir/apunte/${s}`, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForSelector('#listo-para-pdf', { timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  const titulo = await page.$eval('h1', (h) => h.textContent ?? '');
  const out = `public/pdf/apunte-${s}.pdf`;
  await page.pdf({
    path: out,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%;font-size:8px;color:#7482a3;padding:0 12mm;display:flex;justify-content:space-between;font-family:sans-serif"><span>${titulo} · Semio Final · final oral 14/12</span><span>Pág. <span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`,
  });
  console.log('ok', out);
  await page.close();
}
await browser.close();
