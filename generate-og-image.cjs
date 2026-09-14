const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1200;
const height = 630;

const chibiPath = path.join(__dirname, 'src', 'assets', 'almond_chibi_transp.png');
const chibiB64 = fs.readFileSync(chibiPath).toString('base64');

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cardShadow" x="-3%" y="-3%" width="106%" height="110%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="6" stdDeviation="14" flood-color="#000000" flood-opacity="0.05" />
    </filter>
    <clipPath id="cardClip">
      <rect x="36" y="36" width="1128" height="558" rx="8" />
    </clipPath>
  </defs>

  <!-- Clean canvas background -->
  <rect width="${width}" height="${height}" fill="#f4f4f5" />

  <!-- Main Website Styled Card Container -->
  <rect x="36" y="36" width="1128" height="558" rx="8" fill="#ffffff" stroke="#e4e4e7" stroke-width="1.5" filter="url(#cardShadow)" />

  <g clip-path="url(#cardClip)">
    <!-- Website Signature Black Navbar -->
    <rect x="36" y="36" width="1128" height="76" fill="#000000" />
    
    <!-- Navbar Site Title -->
    <text x="86" y="83" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.3">Artus Mosquet</text>
    
    <!-- Navbar Navigation Links -->
    <g transform="translate(1114, 83)">
      <text x="0" y="0" text-anchor="end" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#a1a1aa" letter-spacing="1">
        <tspan fill="#ffffff">HOME</tspan>   •   <tspan fill="#a1a1aa">BLOG</tspan>   •   <tspan fill="#a1a1aa">ABOUT</tspan>   •   <tspan fill="#a1a1aa">PROJECTS</tspan>
      </text>
    </g>

    <!-- Subtitle Badge -->
    <g transform="translate(86, 164)">
      <rect x="0" y="0" width="144" height="26" rx="4" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
      <text x="72" y="17" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#18181b" letter-spacing="1.2">PORTFOLIO &amp; BLOG</text>
    </g>

    <!-- Main Title -->
    <text x="86" y="245" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="800" fill="#09090b" letter-spacing="-1">
      Artus Mosquet
    </text>

    <!-- Headline / Subtitle -->
    <text x="86" y="305" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="600" fill="#27272a">
      Full-Time ECE Student at Purdue University
    </text>

    <!-- Description -->
    <text x="86" y="360" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="21" font-weight="400" fill="#52525b">
      <tspan x="86" dy="0">Computer engineering, Linux systems, self-hosting,</tspan>
      <tspan x="86" dy="30">homelab experiments, and open-source software.</tspan>
    </text>

    <!-- Seamless Mascot on the Right Side -->
    <image href="data:image/png;base64,${chibiB64}" x="825" y="160" width="280" height="280" />

    <!-- Tags / Highlights -->
    <g transform="translate(86, 442)">
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="108" height="34" rx="17" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
        <text x="54" y="22" text-anchor="middle" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#52525b">#purdue</text>
      </g>
      <g transform="translate(120, 0)">
        <rect x="0" y="0" width="134" height="34" rx="17" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
        <text x="67" y="22" text-anchor="middle" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#52525b">#engineering</text>
      </g>
      <g transform="translate(266, 0)">
        <rect x="0" y="0" width="118" height="34" rx="17" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
        <text x="59" y="22" text-anchor="middle" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#52525b">#homelab</text>
      </g>
      <g transform="translate(396, 0)">
        <rect x="0" y="0" width="144" height="34" rx="17" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
        <text x="72" y="22" text-anchor="middle" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#52525b">#open-source</text>
      </g>
    </g>

    <!-- Divider Line -->
    <line x1="86" y1="514" x2="1114" y2="514" stroke="#f4f4f5" stroke-width="1.5" />

    <!-- Footer -->
    <g transform="translate(86, 554)">
      <circle cx="5" cy="-5" r="4.5" fill="#22c55e" />
      <text x="18" y="0" font-family="'SF Mono', Menlo, Monaco, Consolas, monospace" font-size="17" font-weight="600" fill="#18181b">artusmosquet.com</text>
    </g>

    <text x="1114" y="554" text-anchor="end" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#71717a">West Lafayette, IN</text>
  </g>
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
