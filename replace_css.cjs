const fs = require('fs');
let content = fs.readFileSync('src/componentes/layout/Planes.css', 'utf-8');

content = content.replace(/\.plan-tarjeta/g, '.plan-tarjeta-inner');

// Clean up hover and backgrounds since TiltCard handles it
content = content.replace(/\.plan-tarjeta-inner:hover\s*{[\s\S]*?}/, '');
content = content.replace(/body\.dark \.plan-tarjeta-inner\s*{[\s\S]*?}/, '');
content = content.replace(/\.plan-tarjeta-inner\.destacado\s*{[\s\S]*?}/, '.plan-tarjeta-inner.destacado {\n  border-top: 4px solid var(--primario);\n}');

fs.writeFileSync('src/componentes/layout/Planes.css', content);
