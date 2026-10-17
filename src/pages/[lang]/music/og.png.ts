import type { APIRoute } from "astro";
import { generateOgImage } from "@/utils/generateOgImage";
import { uiStrings } from "@/i18n/uiStrings";
import { cleanText } from "@/utils/cleanText";

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

  const rawTitle = uiStrings.musicPageTitle?.[lang] || "Music & Crate Digging";
  const title = cleanText(rawTitle);

  const subtitle =
    lang === "fr"
      ? "Télémétrie Plex & Rotation"
      : lang === "ja"
        ? "Plexリアルタイム再生 & 推薦"
        : "Plex Telemetry & Community Crate";

  const rawDesc =
    uiStrings.musicPageSubtitle?.[lang] ||
    "Live playback telemetry, top played albums, and recently played tracks from my self-hosted Plex server.";
  const description = cleanText(rawDesc);

  const buffer = await generateOgImage({
    title,
    subtitle,
    description,
    tags: ["music", "plex", "crate-digging", "hi-res", "audio"],
    lang,
    author,
    badge: "MUSIC",
    section: "MUSIC",
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
