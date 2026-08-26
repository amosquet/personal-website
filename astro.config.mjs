// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

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
          console.error("[covers-sync] Error copying book covers to dist:", err);
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  output: "static",

  i18n: {
    locales: ["en", "fr", "jp"],
    defaultLocale: "en",
    fallback: {
      fr: "en",
      jp: "en",
    },
    routing: {
      prefixDefaultLocale: true,
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

  integrations: [icon(), bookCoversSync()],
});
