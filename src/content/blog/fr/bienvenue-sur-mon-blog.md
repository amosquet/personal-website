---
title: "Lancement de mon blog"
description: "Pourquoi j'ai décidé de commencer à écrire, comment ce blog est construit avec Astro et Markdown, et ce qui arrive par la suite."
pubDate: 2026-09-03
tags: ["webdev", "astro", "ingénierie"]
draft: false
---

Bienvenue sur mon blog personnel ! J'ai décidé de créer cet espace pour partager mes projets, mes expériences en ingénierie, mes serveurs et les choses que j'apprends au quotidien.

## Pourquoi Markdown ?

En réfléchissant à la façon de gérer les articles sur ce site, j'ai hésité entre une base de données comme PocketBase et des fichiers Markdown natifs.

L'approche Markdown avec les collections de contenu d'Astro s'est imposée pour plusieurs raisons :

- **Contrôle de version :** Les articles vivent directement dans Git, ce qui rend l'historique et les extraits de code très faciles à suivre.
- **Rapidité & simplicité :** La génération statique garantit des temps de chargement quasi-instantanés sans dépendance envers une base de données externe.
- **Portabilité :** Écrire en Markdown brut permet de rester indépendant de toute plateforme ou infrastructure spécifique, bien que j'aurais hébergé la base de données localement.

## Comment c'est conçu

Le blog est propulsé par [Astro](https://astro.build) avec son API **Content Layer** et Tailwind CSS :

```typescript
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

### Ce qui arrive par la suite

À l'avenir, je publierai des notes et des retours d'expérience sur :

1. Des projets matériels et d'ingénierie informatique
2. L'infrastructure serveur, l'auto-hébergement et l'automatisation
3. L'architecture logicielle et mes projets personnels

Restez à l'écoute pour les prochaines publications !
