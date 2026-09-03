const fs = require('fs');

const indexCss = fs.readFileSync('src/index.css', 'utf8');
const fixCss = `
/* ADDITIONAL GHOST BUTTONS FIX FOR DARK MODE */
body.dark .boton, 
body.dark .btn-enviar, 
body.dark .btn-proyecto, 
body.dark .btn-plan, 
body.dark .btn-leer-mas, 
body.dark .btn-primario, 
body.dark .btn-secundario {
    color: #38BDF8 !important;
    border-color: #38BDF8 !important;
}

body.dark .boton::before, 
body.dark .btn-enviar::before,
body.dark .btn-proyecto::before,
body.dark .btn-plan::before,
body.dark .btn-leer-mas::before,
body.dark .btn-primario::before,
body.dark .btn-secundario::before {
    background: #38BDF8 !important;
}

body.dark .boton:hover, 
body.dark .btn-enviar:hover,
body.dark .btn-proyecto:hover,
body.dark .btn-plan:hover,
body.dark .btn-leer-mas:hover,
body.dark .btn-primario:hover,
body.dark .btn-secundario:hover {
    color: #0B1121 !important; 
}

/* MAKE ALL THESE CLASSES USE THE GHOST BUTTON STYLE FULLY */
.boton, 
.btn-enviar, 
.btn-proyecto, 
.btn-plan, 
.btn-leer-mas {
    position: relative !important;
    overflow: hidden !important;
    background: transparent !important;
    color: var(--primario) !important;
    border: 2px solid var(--primario) !important;
    cursor: pointer !important;
    border-radius: 16px !important;
    font-weight: 800 !important;
    padding: 14px 28px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    transition: all 0.3s ease !important;
    text-decoration: none !important;
    z-index: 1 !important;
    box-shadow: none !important;
}
.boton::before, 
.btn-enviar::before, 
.btn-proyecto::before, 
.btn-plan::before, 
.btn-leer-mas::before {
    content: '' !important;
    position: absolute !important;
    inset: 0 !important;
    background: var(--primario) !important;
    transform: translateX(-101%) !important;
    transition: transform 0.3s ease-out !important;
    z-index: -1 !important;
}
.boton:hover, 
.btn-enviar:hover, 
.btn-proyecto:hover, 
.btn-plan:hover, 
.btn-leer-mas:hover {
    color: #fff !important;
    text-decoration: none !important;
}
.boton:hover::before, 
.btn-enviar:hover::before, 
.btn-proyecto:hover::before, 
.btn-plan:hover::before, 
.btn-leer-mas:hover::before {
    transform: translateX(0) !important;
}
`;
fs.appendFileSync('src/index.css', fixCss);

console.log('Ghost buttons fixed for all custom classes!');
