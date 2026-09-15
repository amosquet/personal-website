import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export interface OgImageOptions {
  title: string;
  description?: string;
  subtitle?: string;
  headline?: string;
  pubDate?: Date | string;
  tags?: string[];
  lang?: string;
  author?: string;
  badge?: string;
  section?: string;
  breadcrumb?: string | string[];
  footerRightText?: string;
  logo?: string;
  showMascot?: boolean;
}

let cachedChibiB64: string | null = null;

function getChibiBase64(): string {
  if (cachedChibiB64 !== null) {
    return cachedChibiB64;
  }
  const chibiPath = path.resolve("src/assets/almond_chibi_transp.png");
  if (fs.existsSync(chibiPath)) {
    cachedChibiB64 = fs.readFileSync(chibiPath).toString("base64");
  } else {
    cachedChibiB64 = "";
  }
  return cachedChibiB64;
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
  const rawParagraphs = text.trim().split("\n");
  const lines: string[] = [];

  for (const para of rawParagraphs) {
    const trimmed = para.trim();
    if (!trimmed) continue;

    const hasCJK = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(trimmed);

    if (hasCJK && !trimmed.includes(" ")) {
      let currentLine = "";
      const effectiveLimit = Math.floor(maxCharsPerLine * 0.65);
      for (let i = 0; i < trimmed.length; i++) {
        const char = trimmed[i];
        if (currentLine.length < effectiveLimit) {
          currentLine += char;
        } else {
          lines.push(currentLine);
          if (lines.length === maxLines) return lines;
          currentLine = char;
        }
      }
      if (currentLine && lines.length < maxLines) {
        lines.push(currentLine);
      }
    } else {
      const words = trimmed.split(/\s+/);
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
    }

    if (lines.length >= maxLines) break;
  }

  return lines.slice(0, maxLines);
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
  const showMascot = options.showMascot !== false;
  const logoB64 = options.logo !== undefined ? options.logo : (showMascot ? getChibiBase64() : "");

  // Breadcrumb navigation
  let breadcrumbItems: string[];
  if (options.breadcrumb) {
    if (Array.isArray(options.breadcrumb)) {
      breadcrumbItems = options.breadcrumb;
    } else {
      breadcrumbItems = options.breadcrumb
        .split("/")
        .map((s) => s.trim())
        .filter(Boolean);
    }
  } else if (options.section && options.section.toUpperCase() === "HOME") {
    breadcrumbItems = ["HOME"];
  } else {
    breadcrumbItems = ["HOME", options.section || "BLOG"];
  }

  const breadcrumbSvgContent =
    breadcrumbItems.length === 1
      ? `<tspan fill="#ffffff" font-weight="700">${escapeXml(breadcrumbItems[0])}</tspan>`
      : breadcrumbItems
          .map((item, idx) => {
            const isLast = idx === breadcrumbItems.length - 1;
            if (isLast) {
              return `<tspan fill="#ffffff" font-weight="700">${escapeXml(item)}</tspan>`;
            }
            return `<tspan fill="#71717a">${escapeXml(item)}</tspan>   /   `;
          })
          .join("");

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
  const hasHeadline = Boolean(options.headline);

  // Wrap title (max 2 lines for punchy presentation)
  const maxTitleChars = logoB64 ? 20 : 26;
  const titleLines = wrapText(rawTitle, maxTitleChars, 2);
  const titleFontSize = titleLines.length > 1 ? 52 : 64;
  const titleLineHeight = titleFontSize * 1.22;

  // Title start Y position
  const titleStartY = hasHeadline ? 245 : 248;

  // Headline Y position (if provided)
  const headlineStartY = titleLines.length > 1 ? titleStartY + titleLineHeight + 50 : 305;

  // Wrap description (max 2 lines)
  const maxDescChars = logoB64 ? (hasHeadline ? 52 : 44) : 62;
  const descLines = rawDesc ? wrapText(rawDesc, maxDescChars, 2) : [];
  const descStartY = hasHeadline
    ? (titleLines.length > 1 ? headlineStartY + 55 : 360)
    : titleStartY + (titleLines.length - 1) * titleLineHeight + (titleFontSize > 50 ? 56 : 46);
  const descFontSize = hasHeadline ? 21 : 24;
  const descLineHeight = hasHeadline ? 30 : 36;

  // Tags (max 5)
  const rawTags = (options.tags || []).slice(0, 5);
  let currentTagX = 80;
  const maxTagsX = logoB64 ? 780 : 1120;
  const renderedTagsArray: string[] = [];

  for (const tag of rawTags) {
    const cleanTag = escapeXml(tag);
    const approxWidth = Math.max(80, cleanTag.length * 12 + 40);
    if (currentTagX + approxWidth > maxTagsX) break;

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
  <!-- Full canvas pure white -->
  <rect width="${width}" height="${height}" fill="#ffffff" />

  <!-- Edge-to-Edge Black Navbar -->
  <rect x="0" y="0" width="${width}" height="88" fill="#000000" />

  <!-- Navbar Site Title -->
  <text x="80" y="52" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="23" font-weight="700" fill="#ffffff" letter-spacing="-0.3">${author}</text>

  <!-- Navbar Breadcrumb Navigation -->
  <g transform="translate(1120, 52)">
    <text x="0" y="0" text-anchor="end" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="500" fill="#a1a1aa" letter-spacing="1">
      ${breadcrumbSvgContent}
    </text>
  </g>

  <!-- Badge & Subtitle -->
  <g transform="translate(80, 160)">
    <rect x="0" y="0" width="${badgeWidth}" height="26" rx="4" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" />
    <text x="${badgeWidth / 2}" y="17" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" fill="#18181b" letter-spacing="1.2">${escapeXml(badge)}</text>
    ${
      !hasHeadline && subtitleText
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

  <!-- Headline (if provided) -->
  ${
    hasHeadline
      ? `
  <text x="80" y="${headlineStartY}" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="26" font-weight="600" fill="#27272a">
    ${escapeXml(options.headline)}
  </text>`
      : ""
  }

  <!-- Description -->
  ${
    descLines.length > 0
      ? `
  <text x="80" y="${descStartY}" font-family="'Noto Sans JP', 'Noto Sans CJK JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${descFontSize}" font-weight="400" fill="#52525b">
    ${descLines
      .map(
        (line, idx) =>
          `<tspan x="80" dy="${idx === 0 ? 0 : descLineHeight}">${escapeXml(line)}</tspan>`
      )
      .join("\n    ")}
  </text>`
      : ""
  }

  <!-- Mascot on Right Side -->
  ${
    logoB64
      ? `<image href="data:image/png;base64,${logoB64}" x="820" y="160" width="300" height="300" />`
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
