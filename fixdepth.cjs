const fs = require('fs');
let c = fs.readFileSync('src/componentes/ui/DepthText.jsx', 'utf-8');

c = c.replace(
  'const safeLayers = clamp(Math.round(Number(layers) || 1), 2, MAX_LAYERS);',
  `const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const safeLayers = isMobile ? 1 : clamp(Math.round(Number(layers) || 1), 2, MAX_LAYERS);`
);

c = c.replace(
  'const canTrackPointer = pointerTracking && finePointer && !reducedMotion;',
  `const canTrackPointer = pointerTracking && finePointer && !reducedMotion;
    const shouldAutoOrbit = autoOrbit && !isMobile;`
);

c = c.replace(/if \(autoOrbit\)/g, 'if (shouldAutoOrbit)');
c = c.replace(/\|\| autoOrbit/g, '|| shouldAutoOrbit');

fs.writeFileSync('src/componentes/ui/DepthText.jsx', c);
