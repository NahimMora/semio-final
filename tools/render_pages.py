"""Renderiza páginas de PDF a PNG para OCR. Uso: python render_pages.py <pdf> <outdir> [zoom] [desde] [hasta]"""
import sys, os, pymupdf
pdf, out = sys.argv[1], sys.argv[2]
zoom = float(sys.argv[3]) if len(sys.argv) > 3 else 2.0
d = pymupdf.open(pdf)
a = int(sys.argv[4]) if len(sys.argv) > 4 else 0
b = int(sys.argv[5]) if len(sys.argv) > 5 else len(d)
os.makedirs(out, exist_ok=True)
for i in range(a, min(b, len(d))):
    p = os.path.join(out, f"p{i+1:04d}.png")
    if os.path.exists(p): continue
    pg = d[i]
    z = zoom
    # limitar a ~3800 px de lado mayor (máx. del OCR de Windows ~10000)
    m = max(pg.rect.width, pg.rect.height) * z
    if m > 3800: z = z * 3800 / m
    pg.get_pixmap(matrix=pymupdf.Matrix(z, z)).save(p)
print("ok", pdf, a, b)
