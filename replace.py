import re
with open('src/componentes/layout/Planes.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r'^(\s*)<div className="plan-tarjeta anim-scroll">',
    r'\1<TiltCard className="plan-tarjeta anim-scroll" innerGradient="linear-gradient(145deg, rgba(216,58,58,0.05) 0%, rgba(15,23,42,0.2) 100%)" behindGlowColor="rgba(216,58,58,0.2)">',
    content,
    flags=re.MULTILINE
)

content = re.sub(
    r'^(\s*)<div className="plan-tarjeta destacado anim-scroll">',
    r'\1<TiltCard className="plan-tarjeta destacado anim-scroll" innerGradient="linear-gradient(145deg, rgba(216,58,58,0.15) 0%, rgba(15,23,42,0.4) 100%)" behindGlowColor="rgba(216,58,58,0.4)">',
    content,
    flags=re.MULTILINE
)

content = re.sub(
    r'(<a\s+href=\{generarLinkWhatsApp[\s\S]*?</a>\s*)</div>',
    r'\1</TiltCard>',
    content
)

with open('src/componentes/layout/Planes.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
