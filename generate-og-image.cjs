const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1200;
const height = 630;

const logoPath = "M50.4 78.5a75.1 75.1 0 0 0-28.5 6.9l24.2-65.7c.7-2 1.9-3.2 3.4-3.2h29c1.5 0 2.7 1.2 3.4 3.2l24.2 65.7s-11.6-7-28.5-7L67 45.5c-.4-1.7-1.6-2.8-2.9-2.8-1.3 0-2.5 1.1-2.9 2.7L50.4 78.5Zm-1.1 28.2Zm-4.2-20.2c-2 6.6-.6 15.8 4.2 20.2a17.5 17.5 0 0 1 .2-.7 5.5 5.5 0 0 1 5.7-4.5c2.8.1 4.3 1.5 4.7 4.7.2 1.1.2 2.3.2 3.5v.4c0 2.7.7 5.2 2.2 7.4a13 13 0 0 0 5.7 4.9v-.3l-.2-.3c-1.8-5.6-.5-9.5 4.4-12.8l1.5-1a73 73 0 0 0 3.2-2.2 16 16 0 0 0 6.8-11.4c.3-2 .1-4-.6-6l-.8.6-1.6 1a37 37 0 0 1-22.4 2.7c-5-.7-9.7-2-13.2-6.2Z";

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0c" />
      <stop offset="100%" stop-color="#141418" />
    </linearGradient>
    <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3f3f46" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#27272a" stop-opacity="0.3" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

  <!-- Inner framed container -->
  <rect x="40" y="40" width="1120" height="550" rx="24" fill="#09090b" stroke="url(#cardBorder)" stroke-width="2" />

  <!-- Grid decoration lines -->
  <line x1="40" y1="460" x2="1160" y2="460" stroke="#27272a" stroke-width="1.5" stroke-dasharray="4 4" />

  <!-- Logo Emblem -->
  <g transform="translate(100, 100) scale(1.1)">
    <rect x="-8" y="-8" width="144" height="144" rx="20" fill="#18181b" stroke="#27272a" stroke-width="1.5" />
    <path fill="#f4f4f5" d="${logoPath}" />
  </g>

  <!-- Title -->
  <text x="100" y="325" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="74" font-weight="800" fill="#ffffff" letter-spacing="-1">Artus Mosquet</text>

  <!-- Subtitle -->
  <text x="100" y="390" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="32" font-weight="400" fill="#a1a1aa">Full-Time ECE Student at Purdue University</text>

  <!-- Footer Metadata -->
  <g transform="translate(100, 522)">
    <circle cx="6" cy="-8" r="5" fill="#22c55e" />
    <text x="24" y="0" font-family="'SF Mono', Menlo, Monaco, Consolas, monospace" font-size="24" font-weight="600" fill="#e4e4e7">artusmosquet.com</text>
  </g>

  <text x="1100" y="522" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="500" fill="#71717a">Systems • Homelab • Projects</text>
</svg>
`;

async function generate() {
  const outputPath = path.join(__dirname, 'public', 'og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(outputPath);
  console.log(`Open Graph image generated at: ${outputPath}`);
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
