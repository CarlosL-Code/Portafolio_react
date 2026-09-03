const fs = require('fs');

// 1. App.jsx - Remove lazy for main components
let appJsx = fs.readFileSync('src/App.jsx', 'utf8');
appJsx = appJsx.replace(/const Inicio = lazy\(\(\) => import\("\.\/pages\/Inicio"\)\);/, 'import Inicio from "./pages/Inicio";');
appJsx = appJsx.replace(/const DesarrolloWeb = lazy\(\(\) => import\("\.\/pages\/DesarrolloWeb"\)\);/, 'import DesarrolloWeb from "./pages/DesarrolloWeb";');
appJsx = appJsx.replace(/const SoftwareAMedida = lazy\(\(\) => import\("\.\/pages\/SoftwareAMedida"\)\);/, 'import SoftwareAMedida from "./pages/SoftwareAMedida";');
appJsx = appJsx.replace(/const SistemasEmpresariales = lazy\(\(\) => import\("\.\/pages\/SistemasEmpresariales"\)\);/, 'import SistemasEmpresariales from "./pages/SistemasEmpresariales";');
appJsx = appJsx.replace(/const Proyectos = lazy\(\(\) => import\("\.\/pages\/Proyectos"\)\);/, 'import Proyectos from "./pages/Proyectos";');
appJsx = appJsx.replace(/const ContactoPage = lazy\(\(\) => import\("\.\/pages\/Contacto"\)\);/, 'import ContactoPage from "./pages/Contacto";');
fs.writeFileSync('src/App.jsx', appJsx);


// 2. index.css - Remove .btn-leer-mas from ghost buttons!
let indexCss = fs.readFileSync('src/index.css', 'utf8');
indexCss = indexCss.replace(/\.btn-leer-mas/g, '.NO-USAR-LEER-MAS');
fs.writeFileSync('src/index.css', indexCss);


// 3. AcercaDe.jsx - Remove anim-scroll from col-1 to fix sticky
let acercaJsx = fs.readFileSync('src/componentes/layout/AcercaDe.jsx', 'utf8');
acercaJsx = acercaJsx.replace('className="col-1 anim-scroll anim-left"', 'className="col-1"');
fs.writeFileSync('src/componentes/layout/AcercaDe.jsx', acercaJsx);


// 4. Planes.css - Add beautiful card design since TiltCard is gone
let planesCss = fs.readFileSync('src/componentes/layout/Planes.css', 'utf8');
const newPlanCss = `
/* FIXED PLAN CARD DESIGN */
.plan-wrapper {
  border-radius: 24px;
  background: var(--shade-2);
  border: 1px solid var(--shade-3);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}
.plan-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  border-color: var(--primario);
}
body.dark .plan-wrapper {
  background: rgba(15,23,42,0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
body.dark .plan-wrapper:hover {
  border-color: #38BDF8;
  box-shadow: 0 15px 40px rgba(56, 189, 248, 0.15);
}

.plan-wrapper.destacado {
  background: linear-gradient(145deg, var(--shade-1), var(--shade-2));
  border: 2px solid var(--primario);
  transform: scale(1.02);
}
body.dark .plan-wrapper.destacado {
  background: linear-gradient(145deg, rgba(15,23,42,0.8), rgba(30,58,138,0.3));
  border: 2px solid #38BDF8;
}
.plan-wrapper.destacado:hover {
  transform: scale(1.02) translateY(-5px);
}
`;
fs.appendFileSync('src/componentes/layout/Planes.css', newPlanCss);

// Let's modify Planes.jsx to ensure the wrapper has the destacado class
let planesJsx = fs.readFileSync('src/componentes/layout/Planes.jsx', 'utf8');
// Just manually add it to the second wrapper:
const lines = planesJsx.split('\\n');
let wrapperCount = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('className="anim-scroll plan-wrapper"')) {
    wrapperCount++;
    if (wrapperCount === 2) {
      lines[i] = lines[i].replace('className="anim-scroll plan-wrapper"', 'className="anim-scroll plan-wrapper destacado"');
    }
  }
}
fs.writeFileSync('src/componentes/layout/Planes.jsx', lines.join('\\n'));

console.log('Fixes 4 applied!');
