import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@/utils/generateOgImage";
import { uiStrings } from "@/i18n/uiStrings";

export const prerender = true;

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => {
    return import.meta.env.DEV || !data.draft;
  });

  return posts.map((post) => {
    const parts = post.id.split("/");
    const lang = parts[0];
    const slug = parts.slice(1).join("/");

    return {
      params: { lang, slug },
      props: { post },
    };
  });
}

export const GET: APIRoute = async ({ props, params }) => {
  const post = props.post as CollectionEntry<"blog">;
  const lang = (params.lang || "en") as "en" | "fr" | "ja";
  const author = uiStrings.siteTitle[lang] || "Artus Mosquet";

  const buffer = await generateOgImageForPost({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    tags: post.data.tags,
    lang,
    author,
  });

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
