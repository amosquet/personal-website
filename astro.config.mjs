// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
      locales: ["en", "fr", "jp"],
      defaultLocale: "en",
      // localeDetection: true,
      fallback: {
          fr : "en",
          jp : "en"
      },
      routing: {
          prefixDefaultLocale: true,
          fallbackType: "rewrite"
      }
  },

  output: 'server',

  prefetch: {
      prefetchAll: true,
      defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()]
  }
});