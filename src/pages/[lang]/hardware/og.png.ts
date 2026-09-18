import type { APIRoute } from "astro";
import { generateOgImage } from "@/utils/generateOgImage";
import { uiStrings } from "@/i18n/uiStrings";
import { cleanText } from "@/components/SEO.astro";

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

  const rawTitle = uiStrings.hardwarePageTitle?.[lang] || "Daily Drivers & Hardware";
  const title = cleanText(rawTitle);

  const rawSubtitle = uiStrings.hardwarePageSubtitle?.[lang] || "Homelab & Machines";
  const subtitle = cleanText(rawSubtitle);

  const rawDesc = uiStrings.hardwarePhilosophyText?.[lang] || "Servers, workstations, networking gear, and daily engineering hardware setup.";
  const description = cleanText(rawDesc);

  const buffer = await generateOgImage({
    title,
    subtitle: subtitle.length > 50 ? subtitle.slice(0, 47) + "..." : subtitle,
    description,
    tags: ["hardware", "arch-linux", "workstation", "homelab"],
    lang,
    author,
    badge: "HARDWARE",
    section: "HARDWARE",
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
