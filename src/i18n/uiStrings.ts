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
        jp: "主要", //fix?
    },
    navBlog: {
        en: "Blog",
        fr: "Blog",
        jp: "ブログ",
    },
    navAbout: {
        en: "About",
        fr: "À propos",
        jp: "約", //fix?
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
    footerProject: {
        en: "Learn more about my projects on",
        fr: "En savoir plus sur mes projets sur",
        jp: "私のプロジェクトについては、", //fix?
    },
    footerSocial: {
        en: "Follow me on",
        fr: "Suivez-moi sur",
        jp: "私をフォローしてください", //fix?
    },
    // footerCopyright: {
    //     en: "© 2025", 
    //     fr: "© 2025",
    //     jp: "© 2025",
    // },

};