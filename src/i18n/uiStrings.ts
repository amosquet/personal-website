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
    jp: "モスケ アルテゥス",
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
  navReading: {
    en: "Reading List",
    fr: "Liste de lecture",
    jp: "<ruby>読書<rt>どくしょ</rt></ruby>リスト",
  },
  myCountry: {
    en: "United States",
    fr: "États-Unis",
    jp: "アメリカ",
  },
  myOccupation: {
    en: "Full-Time ECE Student",
    fr: "Étudiant en ECE à temps plein",
    jp: "電気工学専攻のフルタイム学生", //fix
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
  welcome: {
    en: "Welcome!",
    fr: "Bienvenue!",
    jp: "ようこそ！", //fix?
  },
  publishDate: {
    en: "Published on:",
    fr: "Publié le:",
    jp: "公開日:", //fix?
  },
  writtenBy: {
    en: "Written by:",
    fr: "Écrit par:",
    jp: "著者:", //fix?
  },
  languages: {
    en: "French and English",
    fr: "Français et anglais",
    jp: "フランス語と英語", //fix?
  },
  status: {
    en: "Status",
    fr: "Statut",
    jp: "ステータス",
  },
  helloThere: {
    en: "Hello There!",
    fr: "Bonjour !",
    jp: "こんにちは！",
  },
  introText: {
    en: "I'm a Full-Time ECE Student at Purdue. I speak French and English, and I enjoy working on web development projects.",
    fr: "Je suis étudiant à temps plein en ECE à Purdue. Je parle français et anglais, et j'aime travailler sur des projets de développement web.",
    jp: "パデュー<ruby>大学<rt>だいがく</rt></ruby>のフルタイムの<ruby>電気工学専攻<rt>でんきこうがくせんこう</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。フランス<ruby>語<rt>ご</rt></ruby>と<ruby>英語<rt>えいご</rt></ruby>を<ruby>話<rt>はな</rt></ruby>し、ウェブ<ruby>開発<rt>かいはつ</rt></ruby>プロジェクトに<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>むのが<ruby>好<rt>す</rt></ruby>きです。",
  },
  dataStored: {
    en: "Data Stored",
    fr: "Données stockées",
    jp: "<ruby>保存<rt>ほぞん</rt></ruby>されたデータ",
  },
  networkTraffic: {
    en: "Network Traffic",
    fr: "Trafic réseau",
    jp: "ネットワークトラフィック",
  },
  dailyDrivers: {
    en: "Daily Drivers",
    fr: "Appareils quotidiens",
    jp: "<ruby>日常<rt>にちじょう</rt></ruby>のデバイス",
  },
  readMore: {
    en: "Read more",
    fr: "Lire la suite",
    jp: "続きを読む",
  },
  readLess: {
    en: "Read less",
    fr: "Lire moins",
    jp: "閉じる",
  },
};
