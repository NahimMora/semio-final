#!/bin/bash
# OCR de las fuentes escaneadas. Salida: sources/ocr/<slug>.txt (privado, no se publica).
cd /c/Claude/bolillero-semio
PY=/c/Claude/semio/.venv/Scripts/python
run() { # pdf slug zoom
  local pdf="$1" slug="$2" zoom="$3" dir="sources/ocr/$2"
  [ -f "sources/ocr/$slug.txt" ] && { echo "skip $slug"; return; }
  $PY -I tools/render_pages.py "$pdf" "$dir" "$zoom" >/dev/null
  powershell -NoProfile -ExecutionPolicy Bypass -File tools/ocr_dir.ps1 -Dir "$(cygpath -w "$dir")"
  $PY -I tools/merge_ocr.py "$dir" "sources/ocr/$slug.txt"
}
find Diapo-Merlin -name '*.pdf' | sort | while read -r f; do
  slug="merlin__$(echo "${f#Diapo-Merlin/}" | sed 's/\.pdf$//; s/[^A-Za-z0-9]\+/_/g')"
  run "$f" "$slug" 2
done
run "Semiotecnia-Baré-Califano.pdf" califano 2
run "Argente - Alvarez.pdf" argente 1.6
echo ALLDONE
