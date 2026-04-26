# Personal Website

This repository contains the source code for my personal portfolio and blog as an Electrical Engineering student. It is built to be lightweight and statically generated.

## Stack

* **Framework:** [Astro](https://astro.build/) - A web framework focused on content-driven websites. It ships zero JavaScript to the client by default, generating static HTML to optimise loading performance.
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - A utility-first framework that allows for rapid UI customisation directly within the markup.
* **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon) - Used alongside `@iconify-json/mdi` and `simple-icons` to statically extract and bundle SVG paths at build time. This prevents layout shifts and eliminates the need to load external icon fonts.
* **Package Manager:** [Bun](https://bun.sh/) - A fast, all-in-one JavaScript runtime and package manager used for dependency resolution and executing build scripts.

## Internationalisation (i18n)

The architecture utilises Astro's routing mechanics to support three locales natively:
* English (`/en/`)
* French (`/fr/`)
* Japanese (`/jp/`)

## Project Structure

The codebase follows this directory structure, where dynamic routing is handled by the `[lang]` directories:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   │   └── hardware.json
│   ├── i18n/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── [lang]/
│       │   ├── about.astro
│       │   ├── blog.astro
│       │   ├── contact.astro
│       │   └── index.astro
│       ├── index.astro
│       └── noChrome.ts
├── astro.config.mjs
├── bun.lock
└── package.json
