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

  const buffer = await generateOgImage({
    title: uiStrings.navProjects[lang] || "Projects",
    subtitle: "Portfolio & Open Source",
    description: "Explore my open-source software projects, Android applications, Discord bots, and Linux system tools.",
    tags: ["android", "python", "systems", "open-source"],
    lang,
    author,
    badge: "COLLECTION",
    section: "PROJECTS",
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
