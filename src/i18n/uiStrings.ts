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
  navProjects: {
    en: "Projects",
    fr: "Projets",
    jp: "プロジェクト",
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
    en: "I'm a Full-Time ECE Student at Purdue. I speak French and English, and I enjoy working on my servers and projects.",
    fr: "Je suis étudiant à temps plein en ECE à Purdue. Je parle français et anglais, et j'aime travailler sur mes serveurs et mes projets.",
    jp: "パデュー<ruby>大学<rt>だいがく</rt></ruby>のフルタイムの<ruby>電気工学専攻<rt>でんきこうがくせんこう</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。フランス<ruby>語<rt>ご</rt></ruby>と<ruby>英語<rt>えいご</rt></ruby>を<ruby>話<rt>はな</rt></ruby>し、<ruby>自分<rt>じぶん</rt></ruby>のサーバーやプロジェクトに<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>むのが<ruby>好<rt>す</rt></ruby>きです。",
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
  started: {
    en: "Started",
    fr: "Commencé",
    jp: "開始日",
  },
  finished: {
    en: "Finished",
    fr: "Terminé",
    jp: "読了日",
  },
  googleBooksCredit: {
    en: "Data provided by Google Books API",
    fr: "Données fournies par l'API Google Books",
    jp: "Google Books APIのデータを使用しています",
  },
  faq: {
    en: "FAQ",
    fr: "FAQ",
    jp: "よくある質問",
  },
  projectAbout: {
    en: "About the Project",
    fr: "À propos du projet",
    jp: "プロジェクトについて",
  },
  projectTech: {
    en: "Technologies",
    fr: "Technologies",
    jp: "テクノロジー",
  },
  projectLinks: {
    en: "Links",
    fr: "Liens",
    jp: "リンク",
  },
  projectSourceCode: {
    en: "View Source Code",
    fr: "Voir le code source",
    jp: "ソースコードを表示",
  },
  projectLiveSite: {
    en: "Visit Live Site",
    fr: "Visiter le site en direct",
    jp: "ライブサイトにアクセス",
  },
  tabMyReading: {
    en: "My Reading List",
    fr: "Ma liste de lecture",
    jp: "私の読書リスト",
  },
  tabSuggestions: {
    en: "Community Suggestions",
    fr: "Suggestions de la communauté",
    jp: "コミュニティのおすすめ",
  },
  suggestBook: {
    en: "Suggest a Book",
    fr: "Suggérer un livre",
    jp: "本を提案する",
  },
  suggestBookDesc: {
    en: "Recommend a book for my reading list.",
    fr: "Recommandez un livre pour ma liste de lecture.",
    jp: "私の読書リストに追加する本を推薦してください。",
  },
  bookTitle: {
    en: "Book Title",
    fr: "Titre du livre",
    jp: "本のタイトル",
  },
  bookTitlePlaceholder: {
    en: "e.g., The Martian",
    fr: "ex. : Le Problème à trois corps",
    jp: "例：三体",
  },
  bookAuthor: {
    en: "Author",
    fr: "Auteur",
    jp: "著者",
  },
  bookAuthorPlaceholder: {
    en: "e.g., Andy Weir",
    fr: "ex. : Liu Cixin",
    jp: "例：劉慈欣",
  },
  bookIsbn: {
    en: "ISBN (Optional)",
    fr: "ISBN (Facultatif)",
    jp: "ISBN（任意）",
  },
  bookIsbnPlaceholder: {
    en: "e.g., 9780804139038",
    fr: "ex. : 9780804139038",
    jp: "例：9780804139038",
  },
  bookReason: {
    en: "Why should I read it?",
    fr: "Pourquoi devrais-je le lire ?",
    jp: "おすすめの理由は？",
  },
  bookReasonPlaceholder: {
    en: "Optional, but appreciated...",
    fr: "Facultatif, mais apprécié...",
    jp: "任意ですが、教えていただけると嬉しいです...",
  },
  yourName: {
    en: "Your Name (Optional)",
    fr: "Votre nom (Facultatif)",
    jp: "お名前（任意）",
  },
  yourNamePlaceholder: {
    en: "e.g., Alice",
    fr: "ex. : Alice",
    jp: "例：アリス",
  },
  submitSuggestion: {
    en: "Submit Suggestion",
    fr: "Envoyer la suggestion",
    jp: "提案を送信する",
  },
  submitting: {
    en: "Submitting...",
    fr: "Envoi en cours...",
    jp: "送信中...",
  },
  suggestSuccess: {
    en: "Successfully suggested",
    fr: "Suggestion enregistrée avec succès",
    jp: "提案を受け付けました",
  },
  suggestValidationError: {
    en: "Please provide a Book Title or an ISBN.",
    fr: "Veuillez fournir un titre de livre ou un ISBN.",
    jp: "本のタイトルまたはISBNを入力してください。",
  },
  suggestNetworkError: {
    en: "Unable to connect to Shisho API. Please try again later.",
    fr: "Impossible de se connecter à l'API Shisho. Veuillez réessayer plus tard.",
    jp: "Shisho APIに接続できませんでした。後でもう一度お試しください。",
  },
  loadingSuggestions: {
    en: "Loading suggestions...",
    fr: "Chargement des suggestions...",
    jp: "おすすめを読み込み中...",
  },
  noSuggestions: {
    en: "No books have been suggested yet. Be the first!",
    fr: "Aucun livre n'a encore été suggéré. Soyez le premier !",
    jp: "まだ提案された本はありません。最初の推薦者になりましょう！",
  },
  retry: {
    en: "Retry",
    fr: "Réessayer",
    jp: "再試行",
  },
  close: {
    en: "Close",
    fr: "Fermer",
    jp: "閉じる",
  },
  suggestedBy: {
    en: "Suggested by",
    fr: "Suggéré par",
    jp: "提案者",
  },
  suggestedOn: {
    en: "Suggested on",
    fr: "Suggéré le",
    jp: "提案日",
  },
  viaSource: {
    en: "via",
    fr: "via",
    jp: "経由：",
  },
};
