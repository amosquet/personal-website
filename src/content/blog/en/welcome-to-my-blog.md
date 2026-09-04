---
title: "Starting Up My Blog"
description: "Why I decided to start writing, how this blog is built with Astro and Markdown, and what's coming next."
pubDate: 2026-09-03
tags: ["webdev", "astro", "engineering"]
draft: false
---

Welcome to my personal blog! I decided to set up this space to write about my projects, engineering experiments, servers, and things I learn along the way.

## Why Markdown?

When planning how to handle blog posts on this site, I considered using a database like PocketBase versus native Markdown files.

Markdown with Astro Content Collections won out for a few straightforward reasons:

- **Version Control:** Posts live directly in Git, making revisions and code snippets easy to track.
- **Speed & Simplicity:** Static compilation means zero database roundtrips, instant page loads, and zero downtime.
- **Portability:** Writing in plain Markdown means posts are completely decoupled from any specific platform or database provider, though I would have hosted the database locally.

## How It's Built

The blog is powered by [Astro](https://astro.build) with its **Content Layer** API and Tailwind CSS:

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

### What to Expect

Moving forward, I will be posting notes and write-ups about:

1. Hardware projects and computer engineering topics
2. Server infrastructure, self-hosting, and automation
3. Software architecture and personal experiments

Stay tuned for more updates!
