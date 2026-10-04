import os
import fitz  # PyMuPDF

directory = "public/CERTIFICACIONES"

for filename in os.listdir(directory):
    if filename.endswith(".pdf"):
        pdf_path = os.path.join(directory, filename)
        image_name = filename[:-4] + ".png"
        image_path = os.path.join(directory, image_name)
        
        # Only convert if it doesn't already exist
        if not os.path.exists(image_path):
            print(f"Converting {filename}...")
            doc = fitz.open(pdf_path)
            page = doc.load_page(0)  # first page
            pix = page.get_pixmap(dpi=150) # High quality
            pix.save(image_path)
            print(f"Saved {image_name}")

print("Done converting PDFs to images.")
