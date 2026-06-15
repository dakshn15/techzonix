// Generate simple SVG-based PWA icons
const fs = require('fs');
const path = require('path');

function generateSVGIcon(size, padding = 0) {
  const innerSize = size - padding * 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${size * 0.15}" fill="#9952e0"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Inter,Arial,sans-serif" font-weight="700" font-size="${innerSize * 0.55}">T</text>
</svg>`;
}

function generateMaskableIcon(size) {
  // Maskable icons need a safe zone (inner 80%)
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="#9952e0"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Inter,Arial,sans-serif" font-weight="700" font-size="${size * 0.4}">T</text>
</svg>`;
}

const publicDir = path.join(__dirname, 'public');

// Generate SVG icons (browsers support SVG favicons and PWA icons)
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.svg'), generateSVGIcon(192));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.svg'), generateSVGIcon(512));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon-180x180.svg'), generateSVGIcon(180));
fs.writeFileSync(path.join(publicDir, 'maskable-icon-512x512.svg'), generateMaskableIcon(512));

console.log('SVG icons generated successfully!');
