import type { APIRoute } from "astro";
import projects from "@/data/projects.json";
import { generateOgImage } from "@/utils/generateOgImage";
import { uiStrings } from "@/i18n/uiStrings";
import { getProjectSlug } from "@/utils/slugify";

export const prerender = true;

export function getStaticPaths() {
  const langs = ["en", "fr", "ja"] as const;
  return langs.flatMap((lang) => {
    return projects.map((project) => ({
      params: { lang, project: getProjectSlug(project) },
      props: { project },
    }));
  });
}

export const GET: APIRoute = async ({ props, params }) => {
  const { project } = props as { project: (typeof projects)[0] };
  const lang = (params.lang || "en") as "en" | "fr" | "ja";
  const author = uiStrings.siteTitle[lang] || "Artus Mosquet";

  const buffer = await generateOgImage({
    title: project.name,
    subtitle: project.caption,
    description: project.description ? project.description.split("\n")[0] : undefined,
    tags: project.techStack,
    lang,
    author,
    badge: "PROJECT",
    section: "PROJECTS",
    footerRightText: project.githubUrl ? project.githubUrl.replace("https://", "") : undefined,
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
