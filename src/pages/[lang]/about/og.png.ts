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

  const config = {
    en: {
      badge: "ABOUT & BIO",
      title: "Artus Mosquet",
      headline: "Full-Time ECE Student at Purdue University",
      description:
        "Electrical engineering, Linux systems, self-hosting, homelab experiments, and open-source software.",
      tags: ["purdue", "engineering", "homelab", "open-source"],
      footerRightText: "© Artus Mosquet",
    },
    fr: {
      badge: "À PROPOS & BIO",
      title: "Artus Mosquet",
      headline: "Étudiant en ECE à l'Université Purdue",
      description:
        "Ingénierie électrique, systèmes Linux, auto-hébergement, homelab et projets open-source.",
      tags: ["purdue", "ingénierie", "homelab", "open-source"],
      footerRightText: "© Artus Mosquet",
    },
    ja: {
      badge: "プロフィール",
      title: uiStrings.siteTitle.ja || "モスケ アルテゥス",
      headline: "パデュー大学電気工学専攻の学生",
      description:
        "電気工学、Linuxシステム、\nセルフホスティング、ホームラボ、オープンソース。",
      tags: ["purdue", "engineering", "homelab", "open-source"],
      footerRightText: "© Artus Mosquet",
    },
  }[lang];

  const buffer = await generateOgImage({
    badge: config.badge,
    title: config.title,
    headline: config.headline,
    description: config.description,
    tags: config.tags,
    lang,
    author: uiStrings.siteTitle[lang] || "Artus Mosquet",
    section: "ABOUT",
    footerRightText: config.footerRightText,
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
