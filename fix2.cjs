const fs = require('fs');

// 1. AcercaDe.jsx - Quitar BorderGlow
let acercaJsx = fs.readFileSync('src/componentes/layout/AcercaDe.jsx', 'utf8');
acercaJsx = acercaJsx.replace(/<BorderGlow[\s\S]*?>/, '');
acercaJsx = acercaJsx.replace(/<\/BorderGlow>/, '');
fs.writeFileSync('src/componentes/layout/AcercaDe.jsx', acercaJsx);

// 2. index.css - Arreglar contraste de botones en dark mode
const css = `
/* DARK MODE CONTRAST FIX */
body.dark .boton, body.dark .btn-enviar {
    color: #38BDF8 !important;
    border-color: #38BDF8 !important;
}
body.dark .boton::before, body.dark .btn-enviar::before {
    background: #38BDF8 !important;
}
body.dark .boton:hover, body.dark .btn-enviar:hover {
    color: #0B1121 !important; 
}
`;
fs.appendFileSync('src/index.css', css);

// 3. AcercaDe.css - Arreglar texto "Transformando ideas..." en dark mode
let acercaCss = fs.readFileSync('src/componentes/layout/AcercaDe.css', 'utf8');
// Asegurar contraste en modo oscuro anadiendo la clase
const darkTextFix = `
body.dark .acerca-de .grid .col-2 .blur-titulo span {
    background: linear-gradient(90deg, #F8FAFC 0%, #94A3B8 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
}
`;
fs.appendFileSync('src/componentes/layout/AcercaDe.css', darkTextFix);
console.log('Fixes applied!');
