# Semio Final — registro del proyecto

> **27/11 — Reestructuración** (manda sobre lo de abajo). Auditoría en [AUDITORIA.md](AUDITORIA.md). Respaldo: etiqueta git `v1-antes-reestructuracion`.
> - 5 secciones: Inicio y cronograma · Temas · Bolillero · Apuntes · Oral. Oscuro por defecto.
> - 93 temas agrupados en 23 **unidades** (`content/final/unidades.ts`). Cada unidad: **Para entenderlo** (video + diapositivas: `content/chapters/<id>/clase.ts`) y **Para el oral** (apunte conciso: `content/oral/<unidad>.ts`, registrado en `src/oral/apuntes.ts`).
> - Mismo apunte → web, PDF (`/imprimir/apunte/<sistema>` + `node scripts/pdf-apunte.mjs <url> <sistema>`, agregar el sistema a `PDF_NUEVOS`) y ficha para la IA.
> - Video: `npm run tts:clase -- <id>` → registrar en `video/src/Root.tsx` → render mudo → ffmpeg con `narracion.wav` (ver HANDOFF).
> - Referencia de densidad: los cuatro PDF de la usuaria (11, 222, 333, 444: privados, en .gitignore).
> - Hecho con el método nuevo: **Historia clínica** (apunte, PDF de 3 páginas, video 4:49, 7 diapositivas). Siguiente: signos y síntomas (dolor, fiebre, disnea, cianosis, edema).


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

## 3. Estado (27/11/2026)

Las **23 unidades** (ERA 1 y ERA 2) tienen el formato de la reestructuración: **Para entenderlo** (diapositivas nuevas + video con es-AR-TomasNeural) y **Para el oral** (apunte en `content/oral/<unidad>.ts`), y PDF A4 horizontal por sistema (hc, signos, vitales, cyc, resp, cardio, comp, digestivo, renal, soma, neuro). Los **93 temas** tienen apunte (chequeo con un script ad hoc que cruza `tema:` de los apuntes con `TEMAS`).

- ERA 2 refaccionada el 27/11: clases nuevas dex-01, dal-01, aba-01, con-01, hig-01, rex-01, rsx-01, som-01, nex-01, par-01, nsx-01, men-01; las clases largas anteriores quedan como «material anterior» (`anterior` en `unidades.ts`).
- Citas de Ortega («pregunta de examen», con minuto) tomadas de los capítulos viejos verificados (`kind: 'prof'`) e incluidas en los apuntes de neuro, hígado y SOMA.
- Merlín no tiene clases de anemia ni de renal: esos apuntes salen de Ortega + Argente.
- Referencias a Argente revisadas contra su índice: abdomen cap. 41, soplos 29-5, HTA 30-7, anemia 60-1.
- Fichas para IA (ChatGPT o Claude) por día, unidad, bolilla y sistema usan los apuntes.

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
