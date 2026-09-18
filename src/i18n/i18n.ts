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