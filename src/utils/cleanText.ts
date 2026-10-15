export function cleanText(input?: string): string {
  if (!input) return "";
  return input
    .replace(/<rt[\s\S]*?<\/rt>/gi, "")
    .replace(/<rp[\s\S]*?<\/rp>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}
