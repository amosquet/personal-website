import type { APIRoute } from "astro";
import { generateOgImage } from "@/utils/generateOgImage";
import { uiStrings } from "@/i18n/uiStrings";

export const prerender = true;

export function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "fr" } },
    { params: { lang: "ja" } },
  ];
}

export const GET: APIRoute = async ({ params }) => {
  const lang = (params.lang || "en") as "en" | "fr" | "ja";
  const author = uiStrings.siteTitle[lang] || "Artus Mosquet";

  const title = uiStrings.faq?.[lang] || "FAQ";
  const subtitle =
    lang === "fr"
      ? "Infos Diverses & Détails"
      : lang === "ja"
        ? "よくある質問と詳細情報"
        : "Random Info & Details";

  const description =
    lang === "fr"
      ? "Foire aux questions, domaines, configurations matérielles et détails sur Artus Mosquet."
      : lang === "ja"
        ? "よくある質問、保有ドメイン、ハードウェア構成、アルテゥス・モスケについての詳細情報。"
        : "Frequently asked questions, domains, hardware specs, and random details about Artus Mosquet.";

  const buffer = await generateOgImage({
    title,
    subtitle,
    description,
    tags: ["faq", "homelab", "domains", "systems"],
    lang,
    author,
    badge: "FAQ",
    section: "FAQ",
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
