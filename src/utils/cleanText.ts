export function cleanText(input?: string): string {
  if (!input) return "";

  let text = input;
  let previous: string;
  do {
    previous = text;
    text = text
      .replace(/<rt[\s\S]*?<\/rt>/gi, "")
      .replace(/<rp[\s\S]*?<\/rp>/gi, "")
      .replace(/<[^>]+>/g, "");
  } while (text !== previous);

  return text
    .replace(/[<>]/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}
