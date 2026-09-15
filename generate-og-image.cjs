const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const width = 1200;
const height = 630;

const chibiPath = path.join(
  __dirname,
  "src",
  "assets",
  "almond_chibi_transp.png",
);
const chibiB64 = fs.readFileSync(chibiPath).toString("base64");

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Full canvas pure white -->
  <rect width="${width}" height="${height}" fill="#ffffff" />

  <!-- Edge-to-Edge Black Navbar -->
  <rect x="0" y="0" width="${width}" height="88" fill="#000000" />
  <text x="80" y="52" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="700" fill="#ffffff" letter-spacing="-0.3">Artus Mosquet</text>

  <!-- Navbar Breadcrumb Navigation -->
  <g transform="translate(1120, 52)">
    <text x="0" y="0" text-anchor="end" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#a1a1aa" letter-spacing="1">
      <tspan fill="#ffffff" font-weight="700">HOME</tspan>
    </text>
  </g>

  <!-- Subtitle Badge -->
  <g transform="translate(80, 160)">
    <rect x="0" y="0" width="144" height="26" rx="4" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
    <text x="72" y="17" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#18181b" letter-spacing="1.2">PORTFOLIO &amp; BLOG</text>
  </g>

  <text x="80" y="245" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="800" fill="#09090b" letter-spacing="-1">
    Artus Mosquet
  </text>

  <text x="80" y="305" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="600" fill="#27272a">
    Full-Time ECE Student at Purdue University
  </text>

  <text x="80" y="360" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="21" font-weight="400" fill="#52525b">
    <tspan x="80" dy="0">Electrical engineering, Linux systems, self-hosting,</tspan>
    <tspan x="80" dy="30">homelab experiments, and open-source software.</tspan>
  </text>

  <!-- Mascot on Right -->
  <image href="data:image/png;base64,${chibiB64}" x="820" y="160" width="300" height="300" />

  <!-- Tags -->
  <g transform="translate(80, 442)">
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="108" height="34" rx="17" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
      <text x="54" y="22" text-anchor="middle" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#52525b">#purdue</text>
    </g>
    <g transform="translate(120, 0)">
      <rect x="0" y="0" width="134" height="34" rx="17" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
      <text x="67" y="22" text-anchor="middle" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#52525b">#engineering</text>
    </g>
    <g transform="translate(266, 0)">
      <rect x="0" y="0" width="118" height="34" rx="17" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
      <text x="59" y="22" text-anchor="middle" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#52525b">#homelab</text>
    </g>
    <g transform="translate(396, 0)">
      <rect x="0" y="0" width="144" height="34" rx="17" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
      <text x="72" y="22" text-anchor="middle" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#52525b">#open-source</text>
    </g>
  </g>

  <!-- Divider -->
  <line x1="80" y1="525" x2="1120" y2="525" stroke="#f4f4f5" stroke-width="1.5" />

  <!-- Footer -->
  <g transform="translate(80, 570)">
    <circle cx="5" cy="-5" r="4.5" fill="#22c55e" />
    <text x="18" y="0" font-family="'SF Mono', Menlo, Monaco, Consolas, monospace" font-size="17" font-weight="600" fill="#18181b">artusmosquet.com</text>
  </g>

  <text x="1120" y="570" text-anchor="end" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#71717a">© Artus Mosquet</text>
</svg>
`;

async function generate() {
  const outputPath = path.join(__dirname, "public", "og-image.png");
  await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 9 })
    .toFile(outputPath);
  console.log(`Open Graph image generated at: ${outputPath}`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
