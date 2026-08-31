const fs = require('fs');
let c = fs.readFileSync('src/componentes/layout/Planes.jsx', 'utf-8');

c = c.replace(
  /<TiltCard className="anim-scroll" innerGradient="linear-gradient\(145deg, rgba\(168, 85, 247, 0\.05\) 0%, rgba\(15,23,42,0\.2\) 100%\)" behindGlowColor="rgba\(168, 85, 247, 0\.2\)">/g, 
  '<TiltCard className="anim-scroll" innerGradient="linear-gradient(145deg, rgba(168, 85, 247, 0.05) 0%, rgba(15,23,42,0.2) 100%)" behindGlowColor="rgba(168, 85, 247, 0.2)" onClick={() => window.open(generarLinkWhatsApp(`Hola Carlos, vi tu portafolio y me interesa cotizar el plan de desarrollo web desde $${precios.web[currency]} ${currency}. Me gustaría contarte sobre mi proyecto.`), \'_blank\')}>'
);

c = c.replace(
  /<TiltCard className="anim-scroll" innerGradient="linear-gradient\(145deg, rgba\(168, 85, 247, 0\.15\) 0%, rgba\(15,23,42,0\.4\) 100%\)" behindGlowColor="rgba\(168, 85, 247, 0\.4\)">/g, 
  '<TiltCard className="anim-scroll" innerGradient="linear-gradient(145deg, rgba(168, 85, 247, 0.15) 0%, rgba(15,23,42,0.4) 100%)" behindGlowColor="rgba(168, 85, 247, 0.4)" onClick={() => window.open(generarLinkWhatsApp(`Hola Carlos, vi tu portafolio y me interesa conocer más sobre el plan web mensual desde $${precios.mensual[currency]} ${currency}. ¿Podemos conversar?`), \'_blank\')}>'
);

fs.writeFileSync('src/componentes/layout/Planes.jsx', c);
