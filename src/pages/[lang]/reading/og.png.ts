import type { APIRoute } from "astro";
import { generateOgImage } from "@/utils/generateOgImage";
import { uiStrings } from "@/i18n/uiStrings";
import { cleanText } from "@/components/SEO.astro";

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

  const rawTitle = uiStrings.navReading[lang] || "Reading List";
  const title = cleanText(rawTitle);

  const subtitle =
    lang === "fr"
      ? "Livres & Littérature"
      : lang === "jp"
        ? "本と読書記録"
        : "Books & Literature";

  const description =
    lang === "fr"
      ? "Livres sur l'informatique, l'ingénierie, la littérature japonaise, la philosophie et la technologie."
      : lang === "jp"
        ? "コンピュータサイエンス、工学、日本文学、哲学、技術に関する読書記録。"
        : "Books on computer science, engineering, Japanese literature, philosophy, and technology.";

  const buffer = await generateOgImage({
    title,
    subtitle,
    description,
    tags: ["books", "reading", "engineering", "literature"],
    lang,
    author,
    badge: "READING",
    section: "READING",
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
