import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export interface OgImageOptions {
  title: string;
  description?: string;
  subtitle?: string;
  pubDate?: Date | string;
  tags?: string[];
  lang?: string;
  author?: string;
  badge?: string;
  section?: string;
  footerRightText?: string;
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

export async function generateOgImage(options: OgImageOptions): Promise<Buffer> {
  const width = 1200;
  const height = 630;

  const author = escapeXml(options.author || "Artus Mosquet");
  const rawTitle = options.title || "Page";
  const rawDesc = options.description || "";
  const lang = options.lang || "en";
  const badge = options.badge || "POST";
  const section = options.section || "BLOG";
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

  const subtitleText = options.subtitle || formattedDate;

  // Wrap title (max 2 lines for punchy presentation)
  const titleLines = wrapText(rawTitle, 26, 2);
  const titleFontSize = titleLines.length > 1 ? 56 : 70;
  const titleLineHeight = titleFontSize * 1.22;

  // Title start Y position
  const titleStartY = 248;

  // Wrap description (max 2 lines, up to ~62 chars per line)
  const descLines = rawDesc ? wrapText(rawDesc, 62, 2) : [];
  const descStartY =
    titleStartY + (titleLines.length - 1) * titleLineHeight + (titleFontSize > 50 ? 58 : 46);

  // Tags (max 5)
  const rawTags = (options.tags || []).slice(0, 5);
  let currentTagX = 80;
  const renderedTagsArray: string[] = [];

  for (const tag of rawTags) {
    const cleanTag = escapeXml(tag);
    const approxWidth = Math.max(80, cleanTag.length * 12 + 40);
    if (currentTagX + approxWidth > 1120) break;

    renderedTagsArray.push(`
      <g transform="translate(${currentTagX}, 440)">
        <rect x="0" y="0" width="${approxWidth}" height="38" rx="19" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
        <text x="${approxWidth / 2}" y="24" text-anchor="middle" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" fill="#52525b">#${cleanTag}</text>
      </g>
    `);
    currentTagX += approxWidth + 14;
  }

  const renderedTags = renderedTagsArray.join("\n");
  const badgeWidth = Math.max(68, badge.length * 9 + 24);
  const footerRight = options.footerRightText || (formattedDate ? formattedDate : `© ${author}`);

  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="avatarClip">
      <circle cx="104" cy="44" r="22" />
    </clipPath>
  </defs>

  <!-- Full canvas pure white -->
  <rect width="${width}" height="${height}" fill="#ffffff" />

  <!-- Edge-to-Edge Black Navbar -->
  <rect x="0" y="0" width="${width}" height="88" fill="#000000" />

  <!-- Navbar Avatar and Site Title -->
  ${
    avatarB64
      ? `
  <circle cx="104" cy="44" r="23" fill="#ffffff" />
  <image href="data:image/png;base64,${avatarB64}" x="82" y="22" width="44" height="44" clip-path="url(#avatarClip)" />
  <text x="142" y="52" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="700" fill="#ffffff" letter-spacing="-0.3">${author}</text>`
      : `
  <text x="80" y="52" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="700" fill="#ffffff" letter-spacing="-0.3">${author}</text>`
  }

  <!-- Navbar Breadcrumb Navigation -->
  <g transform="translate(1120, 52)">
    <text x="0" y="0" text-anchor="end" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#a1a1aa" letter-spacing="1">
      <tspan fill="#71717a">HOME</tspan>   /   <tspan fill="#ffffff" font-weight="700">${escapeXml(section)}</tspan>
    </text>
  </g>

  <!-- Badge & Subtitle -->
  <g transform="translate(80, 160)">
    <rect x="0" y="0" width="${badgeWidth}" height="26" rx="4" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
    <text x="${badgeWidth / 2}" y="17" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#18181b" letter-spacing="1.2">${escapeXml(badge)}</text>
    ${
      subtitleText
        ? `
    <text x="${badgeWidth + 14}" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#a1a1aa">•</text>
    <text x="${badgeWidth + 28}" y="18" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#52525b">${escapeXml(subtitleText)}</text>`
        : ""
    }
  </g>

  <!-- Title -->
  <text x="80" y="${titleStartY}" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${titleFontSize}" font-weight="800" fill="#09090b" letter-spacing="-0.8">
    ${titleLines
      .map(
        (line, idx) =>
          `<tspan x="80" dy="${idx === 0 ? 0 : titleLineHeight}">${escapeXml(line)}</tspan>`
      )
      .join("\n    ")}
  </text>

  <!-- Description -->
  ${
    descLines.length > 0
      ? `
  <text x="80" y="${descStartY}" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="400" fill="#52525b">
    ${descLines
      .map(
        (line, idx) =>
          `<tspan x="80" dy="${idx === 0 ? 0 : 36}">${escapeXml(line)}</tspan>`
      )
      .join("\n    ")}
  </text>`
      : ""
  }

  <!-- Tags -->
  ${renderedTags}

  <!-- Divider -->
  <line x1="80" y1="525" x2="1120" y2="525" stroke="#f4f4f5" stroke-width="1.5" />

  <!-- Footer -->
  <g transform="translate(80, 570)">
    <circle cx="5" cy="-5" r="4.5" fill="#22c55e" />
    <text x="18" y="0" font-family="'SF Mono', Menlo, Monaco, Consolas, monospace" font-size="17" font-weight="600" fill="#18181b">artusmosquet.com</text>
  </g>

  <text x="1120" y="570" text-anchor="end" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#71717a">${escapeXml(footerRight)}</text>
</svg>
`;

  return await sharp(Buffer.from(svg))
    .png({ quality: 95, compressionLevel: 9 })
    .toBuffer();
}

export const generateOgImageForPost = generateOgImage;
