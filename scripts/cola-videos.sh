#!/usr/bin/env bash
# Renderiza videos en serie, esperando a que termine un video previo si se indica con --tras <id>.
cd "$(dirname "$0")/.."
if [ "$1" = "--tras" ]; then while ! grep -q "VIDEO OK" "video/out/$2.log" 2>/dev/null; do sleep 20; done; shift 2; fi
for id in "$@"; do bash scripts/video.sh "$id" > "video/out/$id.log" 2>&1; tail -1 "video/out/$id.log"; done
