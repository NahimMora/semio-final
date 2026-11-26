# Semio Final — bolillero, cronograma y oral

Plataforma de estudio para el **final oral de Semiología** (Fundación Barceló, sede La Rioja): las 20 bolillas del bolillero oficial enlazadas a una base central de temas, cronograma del 26/11 al 14/12, capítulos por sistema (primera y segunda ERA), maniobras con su fragmento de video, simulador oral, banco de errores con repaso espaciado, memoria rápida y fichas exportables para repasar con ChatGPT.

**Sitio:** https://nahimmora.github.io/semio-final/

## Cómo está hecho
- Vite + React + TypeScript, sitio estático en GitHub Pages (GitHub Actions). Mobile first.
- Base central de temas: `content/final/temas.ts`; bolillero literal: `content/final/bolillero.ts`; cronograma: `content/final/cronograma.ts`. `npm run check:final` verifica la cobertura de las 20 bolillas.
- Capítulos en `content/chapters/<id>/` (los de segunda ERA vienen del proyecto «Aula Clínica»).
- Progreso solo en el dispositivo (`localStorage`), con exportación e importación. No hay sincronización entre dispositivos.
- Videos con Remotion y narración `es-AR-TomasNeural`.

## Material académico
El repositorio **no contiene** libros, PDF del Instituto Merlín, grabaciones, transcripciones ni fotos: viven en `sources/` y en carpetas excluidas por `.gitignore`. Se publica solo contenido didáctico original con referencias a las fuentes. El video de maniobras se reproduce por fragmentos desde su publicación en YouTube.

## Desarrollo
```bash
npm install
npm run dev
npm run build && npm run check:content && npm run check:final
```
Registro del proyecto (fuentes, decisiones, pendientes): [`docs/progress/FINAL.md`](docs/progress/FINAL.md).
