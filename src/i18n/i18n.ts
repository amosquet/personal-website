export type Locale = "en" | "fr" | "jp" | string;

interface Fallback {
    [key: string]: string;
}
type PathNames = {
    [key: string]: {
        [locale in Locale]: string;
    };
};

export const defaultLocale: string = "en";
export const locales = ["en", "fr", "jp"];
export const fallback: Fallback = {
    fr: "en",
    jp: "en",
};

export const collectionDirectoryNames: PathNames = {
    blog: {
        en: "blog",
        fr: "blog",
        // jp: "blog",
    },
};

export const directoryNames: PathNames = {
    tags: {
        en: "tags",
        fr: "tags",
        // jp: "tags",
    },
};