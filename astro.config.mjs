// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sitemap from "@astrojs/sitemap";

/** @returns {import("astro").AstroIntegration} */
function bookCoversSync() {
  return {
    name: "book-covers-sync",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        try {
          const outDir = fileURLToPath(dir);
          const coversSrc = path.resolve("public/covers");
          const coversDest = path.join(outDir, "covers");
          if (fs.existsSync(coversSrc)) {
            fs.mkdirSync(coversDest, { recursive: true });
            fs.cpSync(coversSrc, coversDest, { recursive: true });
          }
        } catch (err) {
          console.error(
            "[covers-sync] Error copying book covers to dist:",
            err,
          );
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://artusmosquet.com",
  output: "static",
  trailingSlash: "always",
  prerenderConflictBehavior: "ignore",

  redirects: {
    "/resume": "/Artus_Mosquet_Resume.pdf",
    "/cv": "/Artus_Mosquet_Resume.pdf",
  },

  i18n: {
    locales: ["en", "fr", "ja"],
    defaultLocale: "en",
    fallback: {
      fr: "en",
      ja: "en",
    },
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
      fallbackType: "rewrite",
    },
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    bookCoversSync(),
    sitemap({
      filter: (page) =>
        page !== "https://artusmosquet.com/" &&
        page !== "https://artusmosquet.com/resume/" &&
        page !== "https://artusmosquet.com/cv/" &&
        !page.endsWith("/music/album/") &&
        !page.endsWith("/music/artist/") &&
        !/\/reading\/[0-9Xx]+\/$/.test(page),
    }),
  ],
});
