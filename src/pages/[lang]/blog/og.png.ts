import type { APIRoute } from "astro";
import { generateOgImage } from "@/utils/generateOgImage";
import { uiStrings } from "@/i18n/uiStrings";

export const prerender = true;

export function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "fr" } },
    { params: { lang: "jp" } },
  ];
}

export const GET: APIRoute = async ({ params }) => {
  const lang = (params.lang || "en") as "en" | "fr" | "jp";
  const author = uiStrings.siteTitle[lang] || "Artus Mosquet";

  const title = uiStrings.navBlog[lang] || "Blog";
  const subtitle =
    lang === "fr"
      ? "Articles & Billets Techniques"
      : lang === "jp"
        ? "技術記事 & ブログ"
        : "Articles & Technical Writeups";

  const description =
    lang === "fr"
      ? "Réflexions, guides et analyses sur l'ingénierie électrique, Linux, l'auto-hébergement et le développement."
      : lang === "jp"
        ? "電気工学、Linuxシステム、セルフホスティング、開発に関する考察と記録。"
        : "Thoughts, writeups, and deep dives on electrical engineering, Linux systems, self-hosting, and development.";

  const buffer = await generateOgImage({
    title,
    subtitle,
    description,
    tags: ["systems", "homelab", "linux", "engineering"],
    lang,
    author,
    badge: "BLOG",
    section: "BLOG",
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
