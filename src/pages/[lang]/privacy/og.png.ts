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

  const title = uiStrings.privacyPolicy?.[lang] || "Privacy Policy";
  const subtitle =
    lang === "fr"
      ? "Données & Confidentialité"
      : lang === "jp"
        ? "プライバシーとデータ保護"
        : "Data & Privacy Transparency";

  const description =
    lang === "fr"
      ? "Transparence sur l'utilisation des données, l'hébergement et les analyses d'audience sur artusmosquet.com."
      : lang === "jp"
        ? "artusmosquet.comにおけるデータ収集、ホスティング、プライバシー保護方針について。"
        : "Privacy policy and analytics transparency for artusmosquet.com, self-hosting practices, and data handling.";

  const buffer = await generateOgImage({
    title,
    subtitle,
    description,
    tags: ["privacy", "analytics", "umami", "open-source"],
    lang,
    author,
    badge: "LEGAL",
    section: "PRIVACY",
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
