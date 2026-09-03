const fs = require('fs');

// 1. AcercaDe.jsx - Reemplazar BlurText
let acercaJsx = fs.readFileSync('src/componentes/layout/AcercaDe.jsx', 'utf8');
acercaJsx = acercaJsx.replace(
  /<BlurText[\s\S]*?\/>/,
  '<h2 className="titulo blur-titulo anim-scroll anim-right" style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "20px" }}><span>Transformando ideas en arquitecturas escalables y rentables.</span></h2>'
);
acercaJsx = acercaJsx.replace('import BlurText from "../ui/BlurText";', '');
fs.writeFileSync('src/componentes/layout/AcercaDe.jsx', acercaJsx);

// 2. Planes.jsx - Quitar TiltCard
let planesJsx = fs.readFileSync('src/componentes/layout/Planes.jsx', 'utf8');
planesJsx = planesJsx.replace('import TiltCard from "../ui/TiltCard";', '');
planesJsx = planesJsx.replace(/<TiltCard /g, '<div style={{cursor: "pointer", transition: "transform 0.3s ease"}} ');
planesJsx = planesJsx.replace(/innerGradient="[^"]*"/g, '');
planesJsx = planesJsx.replace(/behindGlowColor="[^"]*"/g, '');
planesJsx = planesJsx.replace(/<\/TiltCard>/g, '</div>');
fs.writeFileSync('src/componentes/layout/Planes.jsx', planesJsx);

// 3. Trabajos.jsx - Verify if TiltCard is used there? The user said "Lo mismo para los botones de Proyectos destacados...". Wait, they meant the *Ghost buttons* were too dark in dark mode. 
// "Lo mismo para los botones de Proyectos destacados. Lo mismo para los botones de Planes y Formas de trabajo y lo mismo para el boton del formulario."
// I already fixed the ghost buttons contrast in fix2.cjs!

console.log('Fixes 3 applied!');
