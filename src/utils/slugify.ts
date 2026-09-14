/**
 * Converts a string into a clean, URL-safe slug.
 * Trims whitespace, lowercases, removes punctuation/parentheses,
 * and collapses spaces and underscores into single hyphens.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Returns the slug for a project, preferring an explicit `slug` field if defined,
 * otherwise automatically generating it from `name`.
 */
export function getProjectSlug(project: { name: string; slug?: string }): string {
  return project.slug || slugify(project.name);
}
