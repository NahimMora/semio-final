"""Une los .txt de OCR de una carpeta en un archivo con marcas === [pN] ===."""
import sys, os, glob, re
d, out = sys.argv[1], sys.argv[2]
with open(out, "w", encoding="utf-8") as f:
    for t in sorted(glob.glob(os.path.join(d, "p*.png.txt"))):
        n = int(re.search(r"p(\d+)\.png", t).group(1))
        f.write(f"\n=== [p{n}] ===\n" + open(t, encoding="utf-8-sig").read())
print("merged", out)
