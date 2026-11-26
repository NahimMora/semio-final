# Semio Final — registro del proyecto

> Plataforma para el final oral de Semiología (Fundación Barceló, La Rioja) del **14/12/2026**.
> Base técnica: el proyecto anterior «Aula Clínica» (`C:\Claude\semio`), copiado y extendido. Última actualización: 26/11/2026.

## 1. Inventario de fuentes (verificado el 26/11)

| Carpeta pedida | Qué hay realmente | Estado |
|---|---|---|
| **1. Bibliografía** | `Argente - Alvarez.pdf` (1581 p., escaneado, sin texto) · `Semiotecnia-Baré-Califano.pdf` (150 p., escaneado; 4.ª ed., 10 capítulos) | **OCR propio** con el OCR de Windows (es-ES) → `sources/ocr/argente.txt` y `califano.txt` (privados). Desfase de páginas en Argente: **impresa = PDF − 15** en las partes III–IV (verificado en cap. 6 y 8); conviene volver a comprobarlo en cada parte. |
| **2. Instituto Merlín** | `Diapo-Merlin/`: 73 PDF de diapositivas (casi todos imágenes). Numerados 1–19 (HC, generalidades, signos vitales, respiratorio, asma, EPOC, obstructivos, neumonía, atelectasia, derrame, neumotórax, cardiovascular, disnea y dolor cardíaco, HTA, IC, digestivo, hígado, piramidal) + carpetas de cardio, digestivo, neuro. | OCR completo → `sources/ocr/merlin__*.txt`. |
| **3. Ortega** | Transcripciones de **60 clases de la SEGUNDA ERA** (digestivo, renal, neuro, meníngeo/osteo), su apunte de Clínica Médica I 2023 (511 p., con texto), pizarras y el banco «Preguntas de examen» (168 avisos de Ortega con minuto). | **No hay grabaciones de la PRIMERA ERA** (HC, respiratorio, cardio): para esos temas no se atribuye nada a Ortega. El apunte sí cubre ERA 1 (pp. 2–223). |
| **4. Bolillero** | `Bolillero.jpeg`: 20 bolillas. | Transcripto literal en `content/final/bolillero.ts` (incluida la grafía original; la bolilla 14 no tiene «H.C.»). |
| Otros | `Itinerario_finales_Diciembre_2026.pdf`, temarios de ERA 1 y 2 (fotos), 4 afiches propios (pares craneales, neuro, IRA/ERC), cuadro de síndromes respiratorios. | Usados para el cronograma y para contrastar el temario. |

### Lo que se buscó y NO está en las fuentes (no se inventó)
- **Dra. Rocha**: no aparece en ninguna transcripción. Los docentes que Ortega menciona son la **Dra. González** (varias veces: «este cuadrito lo pregunta la doctora González», ITU), y dos nombres que el reconocimiento de voz deformó («doctora Najín», «doctor Agarra»).
- **Merlín**: no trae preguntas frecuentes de finales, modalidad del examen ni particularidades de los profesores de La Rioja. Solo dos avisos explícitos de «pregunta de examen» (PDF 18: etiologías de la ascitis; Child-Pugh/BATEA y GASA).
- **Video de Panamericana**: el que existe es el de Argente-Álvarez en YouTube (`EC9tSepFn_U`, 4 h 02 min, 35 capítulos) con copia local y SRT. Se reproduce **embebido desde YouTube** por fragmentos; no se redistribuye.

## 2. Arquitectura del final
- `content/final/temas.ts` — **base central** de 93 temas (76 del bolillero, 17 complementarios). Cada tema: sistema, ERA, resumen, capítulos, maniobras, evidencia de «frecuente» con fuente, estado de desarrollo y qué falta.
- `content/final/bolillero.ts` — las 20 bolillas → ids de tema. `BOLILLAS_DE` se deriva.
- `content/final/cronograma.ts` — 26/11 → 14/12, bloques ≤ 90 min, 195 min/día (140 el 26/11), repasos del itinerario.
- `content/final/claves.ts` — reparte las preguntas de capítulos con varios temas.
- `scripts/check-final.ts` (`npm run check:final`, también en CI) — verifica: 20 bolillas en orden, ids válidos, todos los temas con día en la primera vuelta, bloques ≤ 90 min y sumas por día.
- `src/final/` — `store.ts` (localStorage `semio-final:v1`: 6 estados, seguridad 1–5, «sin mirar», bloques, temas estudiados por día, reprogramaciones, banco de errores 1-3-7-16 días, simulacros), `preguntas.ts`, `ficha.ts`, `ui.tsx`, `PreguntaCard.tsx`.
- `src/pages/final/` — Inicio (hoy), Tema, Bolillero (estudio · oral · sorteo), Oral, Cronograma, Matriz, Ficha/Repasos, ERA, Apuntes, Errores, Memoria rápida, Progreso.
- Colores: **rojo** = en el bolillero (derivado), **naranja** = `frecuente` con fuente, **azul** = no está en el bolillero.
- Paleta clara azul/rosada por defecto; la oscura anterior sigue con el botón del ojo.

## 3. Estado por etapas (pedido de la usuaria, en ese orden)

| # | Etapa | Estado |
|---|---|---|
| 1 | Análisis de las cuatro carpetas | ✅ (sección 1) |
| 2 | Cobertura completa del bolillero | ✅ matriz + chequeo automático; **desarrollo**: 40 temas listos (ERA 2), 12 parciales, 41 en preparación (ERA 1 casi toda) |
| 3 | Navegación | ✅ |
| 4 | Cronograma | ✅ con aprobación de cambios y reprogramación |
| 5 | Contenidos en orden del cronograma | 🟡 `hc-01` Historia clínica ✅. Siguen: sig-01 (dolor y fiebre), gen-01, cyc-01, cyc-02, res-01…06, car-01…06, com-01, neu-07 |
| 6 | Apuntes PDF (A4 horizontal, azul y rosa) | ⏳ quedan los manuales viejos de digestivo, renal y neuro; falta el formato nuevo |
| 7 | Examen físico | 🟡 55 maniobras de ERA 2 con video verificado; faltan las de ERA 1 (Argente videos 2–18) |
| 8 | Preguntas y respuestas para el oral | 🟡 ERA 2: 236 + desarrollos; HC: 9 desarrollos + 10 choice |
| 9 | Fichas para ChatGPT | ✅ por día, sistema, bolilla, tema y simulacro (copiar, abrir ChatGPT, .md, .txt) |
| 10 | Audiovisuales | ⏳ voz de Tomás verificada (`es-AR-TomasNeural`, 26/11); videos y diapositivas de ERA 1 pendientes |

## 4. Diferencias entre fuentes señaladas en pantalla
- HC: Argente «la anamnesis permite el diagnóstico en > 50 %» vs Merlín «anamnesis + examen = 90 %».
- HC: Merlín agrega «consideraciones terapéuticas» como punto propio.

## 5. Problemas encontrados
- Archivos con fin de línea CRLF mezclado: se normalizaron a LF en `src/`, `content/`, `scripts/`, `video/src/`.
- `refText` anteponía «p.» a cualquier página; ahora solo si empieza con número.
- Puppeteer se cae a veces después de ~16 páginas en una misma sesión: las pruebas se corren en tandas.

## 6. Cómo continuar
1. Un capítulo por vez siguiendo el cronograma (mismo formato que `content/chapters/hc-01/index.tsx`): leer Argente (OCR, citar página impresa), Califano para maniobras, apunte de Ortega (`sources/drive/book/book_text_drive.txt`), Merlín (`sources/ocr/merlin__*.txt`).
2. Marcar el capítulo `published` en `content/curriculum.ts` y el tema `estado: 'listo'` en `temas.ts`.
3. `npm run build && npm run check:content && npm run check:final`, `npx vite preview --port 4791`, `node scripts/smoke-test.mjs http://localhost:4791/semio-final/ <carpeta> <rutas>`.
