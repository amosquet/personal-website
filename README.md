# Personal Website

This repository contains the source code for my personal website. It's got my reading list and such and an overkill caching method for the book data.

## Stack

* **Framework:** [Astro](https://astro.build/) - A web framework focused on content-driven websites. It ships zero JavaScript to the client by default, generating static HTML to optimise loading performance.
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - A utility-first framework that allows for rapid UI customisation directly within the markup.
* **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) - Used alongside `@iconify-json/mdi` and `simple-icons` to statically extract and bundle SVG paths at build time. This prevents layout shifts and eliminates the need to load external icon fonts.
* **Package Manager:** [Bun](https://bun.sh/) - A fast, all-in-one JavaScript runtime and package manager used for dependency resolution and executing build scripts.

## Internationalisation (i18n)

The architecture utilises Astro's routing mechanics to support three locales natively:
* English (`/en/`)
* French (`/fr/`)
* Japanese (`/ja/`)

## Project Structure

The codebase follows this directory structure, where dynamic routing is handled by the `[lang]` directories:

```text
/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── blog/
│   │   └── now.md
│   ├── data/
│   │   ├── hardware.json
│   │   └── projects.json
│   ├── i18n/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   ├── pages/
│   │   ├── [lang]/
│   │   │   ├── blog/
│   │   │   │   └── [slug].astro
│   │   │   ├── projects/
│   │   │   │   └── [project].astro
│   │   │   ├── reading/
│   │   │   │   ├── [isbn].astro
│   │   │   │   └── suggest.astro
│   │   │   ├── about.astro
│   │   │   ├── blog.astro
│   │   │   ├── faq.astro
│   │   │   ├── hardware.astro
│   │   │   ├── index.astro
│   │   │   ├── now.astro
│   │   │   ├── privacy.astro
│   │   │   ├── projects.astro
│   │   │   └── reading.astro
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   └── content.config.ts
├── astro.config.mjs
├── bun.lock
├── LICENSE
├── package.json
└── tsconfig.json
```

## License & Copyright

This repository defines terms specifically for media, assets, and content:

* **Assets & Original Media:** All files located in the `src/assets/` and `public/` directories (including personal photos, artwork, graphics, favicons, and branding media) and original written content are owned by Artus Mosquet (© 2025–2026 Artus Mosquet. All rights reserved). Re-use, modification, or redistribution of these assets is not permitted without prior written consent.
* **Third-Party Media:** Any third-party logos, icons, brand assets, or external media belong to their respective owners and remain under their own copyrights.

See the [LICENSE](LICENSE) file for the full terms.

