# Auditoría antes de la reestructuración (27/11)

Respaldo del código: etiqueta git `v1-antes-reestructuracion`. El progreso guardado en el navegador (`semio-final:v1`, `aula-clinica-ortega:v1`) no se borra.

## Qué se conserva
- **Bolillero literal** (20 bolillas) y la **base central de temas** (`content/final/temas.ts`) con el chequeo automático de cobertura.
- **Motor de diapositivas y video** (`src/clase`, `video/`, `scripts/tts-clase.mjs`): diapositivas con narración por pasos y el mismo dibujo en el video con la voz de Tomás.
- **Clases visuales de la segunda ERA** (28 capítulos con video ya renderizado): pasan a ser el nivel «Para entenderlo» de digestivo, renal y neuro.
- **Biblioteca de maniobras** (55 con fragmento del video Argente verificado): se muestran dentro de cada tema.
- **OCR de Argente, Califano y Merlín** (`sources/ocr/`).
- **Exportación de fichas** para la IA (se mejora).

## Qué se resume
- Los capítulos de la segunda ERA tienen hasta 10 pestañas (mapa, lo que toma, fichas, video, choice, desarrollos, memoria, maniobras, cierre, simulacro) y repiten lo mismo en varios formatos. Se reemplazan por **un apunte para el oral por unidad**, conciso y en orden de respuesta. La explicación queda solo en «Para entenderlo».
- `hc-01` (versión del 26/11): correcto pero largo y con fuentes en cada párrafo. Se reescribe como primer ejemplo del método nuevo.

## Qué se corrige
- Fuentes citadas en cada bloque («según Argente…»): pasan a una sola línea al final de cada tema.
- Los capítulos de la segunda ERA se basaron en las clases de Ortega; el apunte nuevo parte de Merlín + apunte de Ortega y se contrasta con Argente.

## Qué se reorganiza
- **93 temas → 23 unidades de estudio** (`content/final/unidades.ts`): un bloque del cronograma es una unidad, no cada subtema.
- Navegación: de ~15 secciones a 5 (Inicio y cronograma · Temas · Bolillero · Apuntes · Oral).
- Se quitan de la navegación: estadísticas, progreso por estados, banco de errores, matriz (queda enlazada desde el bolillero como control de cobertura), memoria rápida (su contenido va al final de cada apunte).
- Tema oscuro por defecto, estética de la app de Farmacología, acentos azul y rosa.

## Qué falta (en orden del cronograma)
| Unidad | Para entenderlo | Para el oral |
|---|---|---|
| Historia clínica | diapositivas + video (nuevo) | apunte nuevo |
| Resto de ERA 1 (signos, vitales, cabeza y cuello, respiratorio, cardio, anemia) | falta | falta |
| ERA 2 (digestivo, renal, neuro, SOMA) | clases visuales existentes | falta el apunte conciso (mientras tanto, enlace al capítulo anterior) |
| Apuntes PDF por sistema | — | formato nuevo, se genera a medida que cada sistema queda completo |
