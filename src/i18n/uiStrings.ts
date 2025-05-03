import type { Locale } from "@/i18n/i18n";

export interface TypeUIStrings {
    [key: string]: {
        [locale in Locale]: string | undefined;
    };
}

export const uiStrings: TypeUIStrings = {
    siteTitle: {
        en: "Artus Mosquet",
        fr: "Artus Mosquet",
        jp: "モスケ ア-タス ",
    },
    navHome: {
        en: "Home",
        fr: "Accueil",
        jp: "主要",
    },
    navBlog: {
        en: "Blog",
        fr: "Blog",
        jp: "ブログ",
    },
    navAbout: {
        en: "About",
        fr: "À propos",
        jp: "約",
    },
    navContact: {
        en: "Contact",
        fr: "Contact",
        jp: "連絡先", //fix 接触?
    },
    myCountry: {
        en: "United States",
        fr: "États-Unis",
        jp: "アメリカ",
    },
    myOccupation: {
        en: "Full-Time ECE Student",
        fr: "Étudiant en ECE à temps plein",
        jp: "フルタイムのECE学生", //fix
    },

};