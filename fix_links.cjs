const fs = require('fs');

// Hero.jsx
try {
  let hero = fs.readFileSync('src/componentes/layout/Hero.jsx', 'utf-8');
  hero = hero.replace(/<SpecularButton href="\/proyectos"/, '<SpecularButton to="/proyectos"');
  hero = hero.replace(/<SpecularButton href="\/contacto"/, '<SpecularButton to="/contacto"');
  fs.writeFileSync('src/componentes/layout/Hero.jsx', hero);
} catch (e) {}
