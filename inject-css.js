const fs = require('fs');
const path = require('path');

// Ruta a la carpeta de salida después de 'next export'
const outDir = path.join(__dirname, 'out');

// Inyectar CSS en el archivo index.html
const injectCss = () => {
  const indexPath = path.join(outDir, 'index.html');
  const cssDir = path.join(outDir, '_next', 'static', 'css');
  
  // Lee el archivo index.html
  let indexHtml = fs.readFileSync(indexPath, 'utf8');
  
  // Reemplaza el placeholder para los estilos
  fs.readdirSync(cssDir).forEach(file => {
    if (file.endsWith('.css')) {
      const cssPath = path.join(cssDir, file);
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      indexHtml = indexHtml.replace('</head>', `<style>${cssContent}</style></head>`);
    }
  });
  
  // Guarda el archivo index.html modificado
  fs.writeFileSync(indexPath, indexHtml, 'utf8');
};

injectCss();
