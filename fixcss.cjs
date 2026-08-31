const fs = require('fs');
let c = fs.readFileSync('src/componentes/ui/TiltCard.css', 'utf-8');

// Find the last valid keyframe block
const cleanIndex = c.lastIndexOf('100% {');
if (cleanIndex > 0) {
    const endOfKeyframe = c.indexOf('}', c.indexOf('}', cleanIndex) + 1) + 1;
    c = c.substring(0, endOfKeyframe);
}

// Append the clean media query
c += `
@media (max-width: 768px) {
  .pc-card {
    animation: none !important;
    transform: none !important;
  }
  .pc-glare, .pc-behind {
    display: none !important;
  }
  .pc-shine, .pc-shine::after {
    display: block !important;
    animation: none !important;
    mix-blend-mode: normal !important;
    filter: none !important;
    opacity: 0.15 !important;
  }
}
`;

fs.writeFileSync('src/componentes/ui/TiltCard.css', c);
