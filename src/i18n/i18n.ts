export type Locale = "en" | "fr" | "ja" | string;

interface Fallback {
    [key: string]: string;
}
type PathNames = {
    [key: string]: {
        [locale in Locale]: string;
    };
};

export const defaultLocale: string = "en";
export const locales = ["en", "fr", "ja"];
export const fallback: Fallback = {
    fr: "en",
    ja: "en",
};

export const collectionDirectoryNames: PathNames = {
    blog: {
        en: "blog",
        fr: "blog",
        // ja: "blog",
    },
};

export const directoryNames: PathNames = {
    tags: {
        en: "tags",
        fr: "tags",
        // ja: "tags",
    },
};

// Sections whose main content is only available in the listed locales.
// Pages in other sections render in every locale; for sections listed here,
// only these locales get a page and all internal links fall back to them.
export const sectionLocales: Record<string, readonly string[]> = {
    about: locales,
    blog: locales,
    privacy: locales,
    faq: ["en"],
    hardware: ["en"],
    music: ["en"],
    now: ["en"],
    projects: ["en"],
    reading: ["en"],
};