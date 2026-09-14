import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

interface OgImageOptions {
  title: string;
  description?: string;
  pubDate?: Date | string;
  tags?: string[];
  lang?: string;
  author?: string;
}

let cachedAvatarB64: string | null = null;

function getAvatarBase64(): string {
  if (cachedAvatarB64 !== null) {
    return cachedAvatarB64;
  }
  const avatarPath = path.resolve("public/apple-touch-icon.png");
  if (fs.existsSync(avatarPath)) {
    cachedAvatarB64 = fs.readFileSync(avatarPath).toString("base64");
  } else {
    cachedAvatarB64 = "";
  }
  return cachedAvatarB64;
}

function escapeXml(unsafe?: string): string {
  if (!unsafe) return "";
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}

function wrapText(text: string, maxCharsPerLine: number, maxLines: number): string[] {
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine ? `${currentLine} ${word}` : word;

    if (testLine.length <= maxCharsPerLine) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
        if (lines.length === maxLines - 1) {
          const remainingWords = words.slice(i).join(" ");
          if (remainingWords.length > maxCharsPerLine) {
            lines.push(remainingWords.slice(0, maxCharsPerLine - 3).trim() + "...");
          } else {
            lines.push(remainingWords);
          }
          return lines;
        }
      }
      currentLine = word;
    }
  }

  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine);
  }

  return lines;
}

export async function generateOgImageForPost(options: OgImageOptions): Promise<Buffer> {
  const width = 1200;
  const height = 630;

  const author = escapeXml(options.author || "Artus Mosquet");
  const rawTitle = options.title || "Blog Post";
  const rawDesc = options.description || "";
  const lang = options.lang || "en";
  const avatarB64 = getAvatarBase64();

  // Date formatting
  const dateLocale = lang === "jp" ? "ja-JP" : lang === "fr" ? "fr-FR" : "en-US";
  let formattedDate = "";
  if (options.pubDate) {
    const d = new Date(options.pubDate);
    if (!isNaN(d.getTime())) {
      formattedDate = new Intl.DateTimeFormat(dateLocale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(d);
    }
  }

  // Wrap title (max 3 lines)
  const titleLines = wrapText(rawTitle, 30, 3);
  const titleFontSize = titleLines.length > 2 ? 48 : titleLines.length === 2 ? 54 : 60;
  const titleLineHeight = titleFontSize * 1.25;

  // Title start Y position
  const titleStartY = 245;

  // Wrap description (max 2 lines, up to ~62 chars per line)
  const descLines = rawDesc ? wrapText(rawDesc, 62, 2) : [];
  const descStartY =
    titleStartY + (titleLines.length - 1) * titleLineHeight + (titleFontSize > 50 ? 55 : 45);

  // Tags (max 4)
  const tags = (options.tags || []).slice(0, 4);

  // Measure tag pill positions
  let currentTagX = 86;
  const renderedTags = tags
    .map((tag) => {
      const cleanTag = escapeXml(tag);
      const approxWidth = Math.max(86, cleanTag.length * 11 + 36);
      const tagElement = `
        <g transform="translate(${currentTagX}, 440)">
          <rect x="0" y="0" width="${approxWidth}" height="34" rx="17" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
          <text x="${approxWidth / 2}" y="22" text-anchor="middle" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#52525b">#${cleanTag}</text>
        </g>
      `;
      currentTagX += approxWidth + 12;
      return tagElement;
    })
    .join("\n");

  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="cardShadow" x="-3%" y="-3%" width="106%" height="110%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="6" stdDeviation="14" flood-color="#000000" flood-opacity="0.05" />
    </filter>
    <clipPath id="cardClip">
      <rect x="36" y="36" width="1128" height="558" rx="8" />
    </clipPath>
    <clipPath id="avatarClip">
      <circle cx="110" cy="74" r="22" />
    </clipPath>
  </defs>

  <!-- Clean canvas background -->
  <rect width="${width}" height="${height}" fill="#f4f4f5" />

  <!-- Main Website Styled Card Container -->
  <rect x="36" y="36" width="1128" height="558" rx="8" fill="#ffffff" stroke="#e4e4e7" stroke-width="1.5" filter="url(#cardShadow)" />

  <g clip-path="url(#cardClip)">
    <!-- Website Signature Black Navbar -->
    <rect x="36" y="36" width="1128" height="76" fill="#000000" />
    
    <!-- Navbar Site Title with Mascot Avatar -->
    ${
      avatarB64
        ? `
    <circle cx="110" cy="74" r="23" fill="#ffffff" />
    <image href="data:image/png;base64,${avatarB64}" x="88" y="52" width="44" height="44" clip-path="url(#avatarClip)" />
    <text x="146" y="81" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.3">${author}</text>`
        : `
    <text x="86" y="83" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="-0.3">${author}</text>`
    }
    
    <!-- Navbar Breadcrumb / Navigation indicator -->
    <g transform="translate(1114, 81)">
      <text x="0" y="0" text-anchor="end" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#a1a1aa" letter-spacing="1">
        <tspan fill="#71717a">HOME</tspan>   /   <tspan fill="#ffffff" font-weight="700">BLOG</tspan>
      </text>
    </g>

    <!-- Post Badge & Publish Date -->
    <g transform="translate(86, 164)">
      <rect x="0" y="0" width="68" height="26" rx="4" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
      <text x="34" y="17" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#18181b" letter-spacing="1.2">POST</text>
      ${
        formattedDate
          ? `
      <text x="84" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#a1a1aa">•</text>
      <text x="98" y="18" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#71717a">${escapeXml(formattedDate)}</text>`
          : ""
      }
    </g>

    <!-- Post Title -->
    <text x="86" y="${titleStartY}" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${titleFontSize}" font-weight="800" fill="#09090b" letter-spacing="-0.8">
      ${titleLines
        .map(
          (line, idx) =>
            `<tspan x="86" dy="${idx === 0 ? 0 : titleLineHeight}">${escapeXml(line)}</tspan>`
        )
        .join("\n      ")}
    </text>

    <!-- Description -->
    ${
      descLines.length > 0
        ? `
    <text x="86" y="${descStartY}" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="400" fill="#52525b">
      ${descLines
        .map(
          (line, idx) =>
            `<tspan x="86" dy="${idx === 0 ? 0 : 34}">${escapeXml(line)}</tspan>`
        )
        .join("\n      ")}
    </text>`
        : ""
    }

    <!-- Tags -->
    ${renderedTags}

    <!-- Divider Line -->
    <line x1="86" y1="514" x2="1114" y2="514" stroke="#f4f4f5" stroke-width="1.5" />

    <!-- Footer -->
    <g transform="translate(86, 554)">
      <circle cx="5" cy="-5" r="4.5" fill="#22c55e" />
      <text x="18" y="0" font-family="'SF Mono', Menlo, Monaco, Consolas, monospace" font-size="17" font-weight="600" fill="#18181b">artusmosquet.com</text>
    </g>

    <text x="1114" y="554" text-anchor="end" font-family="'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#71717a">© ${author}</text>
  </g>
</svg>
`;

  return await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 9 })
    .toBuffer();
}
