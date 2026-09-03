const fs = require('fs');

// 1. Hero.jsx
let hero = fs.readFileSync('src/componentes/layout/Hero.jsx', 'utf8');
hero = hero.replace('faceColor="#38BDF8"', 'faceColor="#F8FAFC"');
hero = hero.replace('depthColor="#1E3A8A"', 'depthColor="#334155"');
fs.writeFileSync('src/componentes/layout/Hero.jsx', hero);

// 2. AcercaDe.css
let acerca = fs.readFileSync('src/componentes/layout/AcercaDe.css', 'utf8');
acerca = acerca.replace('linear-gradient(90deg, var(--primario) 0%, #ff8c42 50%, #ffa500 100%)', 'linear-gradient(90deg, var(--shade-9) 0%, var(--shade-6) 100%)');
fs.writeFileSync('src/componentes/layout/AcercaDe.css', acerca);

// 3. index.css - Boton Ghost Fill
const newBoton = `
/* GHOST BUTTON OVERRIDE */
.boton, .btn-enviar {
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
.boton::before, .btn-enviar::before {
    content: '' !important;
    position: absolute !important;
    inset: 0 !important;
    background: var(--primario) !important;
    transform: translateX(-101%) !important;
    transition: transform 0.3s ease-out !important;
    z-index: -1 !important;
}
.boton:hover, .btn-enviar:hover {
    color: #fff !important;
    text-decoration: none !important;
}
.boton:hover::before, .btn-enviar:hover::before {
    transform: translateX(0) !important;
}
body.dark .boton, body.dark .btn-enviar {
    color: var(--primario) !important;
}
body.dark .boton:hover, body.dark .btn-enviar:hover {
    color: #fff !important;
}
`;
fs.appendFileSync('src/index.css', newBoton);

// 4. Contacto.css
let contacto = fs.readFileSync('src/componentes/layout/Contacto.css', 'utf8');
contacto = contacto.replace('background: linear-gradient(135deg, #1E293B, #0F172A);', 'background: var(--shade-9);');
contacto = contacto.replace('background: linear-gradient(135deg, #0F172A, #0B1121);', 'background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px);');
fs.writeFileSync('src/componentes/layout/Contacto.css', contacto);
console.log('Done!');
