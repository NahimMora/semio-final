#!/bin/bash
# Video de «Para entenderlo» de una clase: narración (Tomás) → render mudo → mezcla con la voz → póster.
# Uso: bash scripts/video.sh <id>   (la clase tiene que estar registrada en video/src/Root.tsx como <id>-clase)
set -e
id="$1"
cd "$(dirname "$0")/.."
npm run --silent tts:clase -- "$id"
# Los rótulos de capítulo del video: sin el prefijo «Fisiopatología · » (en el final se llama «Para entenderlo»).
sed -i 's/"Fisiopatología · /"/' "content/chapters/$id/clase-video.json"
mkdir -p video/out "public/media/$id"
npx remotion render video/src/index.ts "$id-clase" "video/out/$id-clase-muda.mp4" --muted --codec=h264 --crf=22 --concurrency=8 --log=error
ffmpeg -y -loglevel error -i "video/out/$id-clase-muda.mp4" -i "sources/tts-cache/$id/clase/narracion.wav" -vf scale=1280:-2 -c:v libx264 -preset slow -crf 30 -tune animation -r 24 -c:a aac -b:a 64k -ac 1 -movflags +faststart -shortest "public/media/$id/clase.mp4"
ffmpeg -y -loglevel error -ss 20 -i "public/media/$id/clase.mp4" -frames:v 1 -q:v 4 "public/media/$id/clase.jpg"
echo "VIDEO OK $id $(ffprobe -v error -show_entries format=duration -of csv=p=0 public/media/$id/clase.mp4)s"
