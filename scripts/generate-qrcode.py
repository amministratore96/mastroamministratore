#!/usr/bin/env python3
"""
Genera un QR code per l'URL del sito MastroAmministratore.
Output: scripts/output/qrcode.png

Uso:
  python3 scripts/generate-qrcode.py
  python3 scripts/generate-qrcode.py https://altro-url.com
"""

import sys
import os
import qrcode
from qrcode.image.styledpil import StyledPilImage
from qrcode.image.styles.moduledrawers.pil import RoundedModuleDrawer

DEFAULT_URL = "https://amministratore96.github.io/mastroamministratore/"

url = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_URL

output_dir = os.path.join(os.path.dirname(__file__), "output")
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, "qrcode.png")

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(
    image_factory=StyledPilImage,
    module_drawer=RoundedModuleDrawer(),
    back_color="white",
    fill_color="#1e3a5f",
)

img.save(output_path)
print(f"QR code generato: {output_path}")
print(f"URL: {url}")
