const fs = require('fs');
let content = fs.readFileSync('src/componentes/layout/Planes.css', 'utf-8');

content = content.replace(/\.plan-tarjeta-inner\s*{[\s\S]*?}/, `.plan-tarjeta-inner {
  display: flex;
  flex-direction: column;
  padding: 28px 24px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}`);

// Delete the `.plan-tarjeta-inner.destacado` if it has extra background
content = content.replace(/\.plan-tarjeta-inner\.destacado\s*{[\s\S]*?}/g, `.plan-tarjeta-inner.destacado {
  /* Add anything specific to destacado inside here, like border or something */
}`);

// The .pc-card-wrapper needs some height to match Grid
content += `\n.pc-card-wrapper.plan-tarjeta {
  height: auto;
  min-height: 100%;
}\n`;

fs.writeFileSync('src/componentes/layout/Planes.css', content);
