const fs = require('fs');
let content = fs.readFileSync('src/componentes/layout/Planes.jsx', 'utf-8');

// import
if (!content.includes('TiltCard')) {
  content = content.replace('import "./Planes.css";', 'import "./Planes.css";\nimport TiltCard from "../ui/TiltCard";');
}

content = content.replace(/^(\s*)<div className="plan-tarjeta anim-scroll">/gm, 
  '$1<TiltCard className="anim-scroll" innerGradient="linear-gradient(145deg, rgba(168, 85, 247, 0.05) 0%, rgba(15,23,42,0.2) 100%)" behindGlowColor="rgba(168, 85, 247, 0.2)">\n$1  <div className="plan-tarjeta-inner">');

content = content.replace(/^(\s*)<div className="plan-tarjeta destacado anim-scroll">/gm, 
  '$1<TiltCard className="anim-scroll" innerGradient="linear-gradient(145deg, rgba(168, 85, 247, 0.15) 0%, rgba(15,23,42,0.4) 100%)" behindGlowColor="rgba(168, 85, 247, 0.4)">\n$1  <div className="plan-tarjeta-inner destacado">');

content = content.replace(/(<a\s+href=\{generarLinkWhatsApp[\s\S]*?<\/a>\s*)<\/div>/g, 
  '$1</div>\n</TiltCard>');

fs.writeFileSync('src/componentes/layout/Planes.jsx', content);
