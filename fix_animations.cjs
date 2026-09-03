const fs = require('fs');

let indexCss = fs.readFileSync('src/index.css', 'utf8');

// Enable mobile animations
indexCss = indexCss.replace(/@media \(max-width: 768px\) \{\s*\.anim-scroll \{\s*opacity: 1;\s*transform: none;\s*transition: none;\s*\}\s*\}/g, '');

fs.writeFileSync('src/index.css', indexCss);
console.log('Mobile animations re-enabled.');
