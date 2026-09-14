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
  siteDescription: {
    en: "Personal website of Artus Mosquet, Full-Time ECE Student at Purdue University.",
    fr: "Site personnel d'Artus Mosquet, étudiant en ECE à l'Université de Purdue.",
    jp: "パデュー大学電気工学専攻、モスケ アルテゥスの個人ウェブサイト。",
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
  updatedDate: {
    en: "Updated on:",
    fr: "Mis à jour le:",
    jp: "更新日:",
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
  backToBlog: {
    en: "Back to Blog",
    fr: "Retour au blog",
    jp: "ブログに戻る",
  },
  noPostsFound: {
    en: "No posts published yet in this language.",
    fr: "Aucun article publié pour le moment dans cette langue.",
    jp: "この言語で公開された記事はまだありません。",
  },
  allPosts: {
    en: "All Posts",
    fr: "Tous les articles",
    jp: "すべての記事",
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
    en: "ISBN",
    fr: "ISBN",
    jp: "ISBN",
  },
  optional: {
    en: "Optional",
    fr: "Facultatif",
    jp: "任意",
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
    en: "Your Name",
    fr: "Votre nom",
    jp: "お名前",
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
    en: "Please provide an ISBN, or both the Book Title and Author.",
    fr: "Veuillez fournir un ISBN, ou à la fois le titre du livre et l'auteur.",
    jp: "ISBN、または本のタイトルと著者の両方を入力してください。",
  },
  optionalIfIsbn: {
    en: "Optional if ISBN provided",
    fr: "Facultatif si l'ISBN est fourni",
    jp: "ISBNがあれば省略可",
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
  privacyPolicy: {
    en: "Privacy Policy",
    fr: "Politique de confidentialité",
    jp: "プライバシーポリシー",
  },
  nowTitle: {
    en: "What I'm Doing Now",
    fr: "En ce moment",
    jp: "<ruby>現在<rt>げんざい</rt></ruby>の<ruby>活動<rt>かつどう</rt></ruby>",
  },
  nowStatus: {
    en: "Now",
    fr: "Actuel",
    jp: "NOW",
  },
  nowPurdue: {
    en: "Studying Electrical Engineering at Purdue University",
    fr: "Étudiant en ingénierie électrique à l'Université Purdue",
    jp: "パデュー<ruby>大学<rt>だいがく</rt></ruby>で<ruby>電気工学<rt>でんきこうがく</rt></ruby>を<ruby>専攻<rt>せんこう</rt></ruby>",
  },
  nowOrganiser: {
    en: "Organising workshops and data archiving at Purdue Hackers",
    fr: "Organisation d'ateliers et archivage technique chez Purdue Hackers",
    jp: "Purdue Hackersでワークショップとアーカイブを<ruby>主導<rt>しゅどう</rt></ruby>",
  },
  nowHomelab: {
    en: "Maintaining homelab infrastructure, Shisho & open source tools",
    fr: "Maintenance de l'infrastructure homelab, Shisho et outils open source",
    jp: "ホームラボインフラ、Shisho、OSSツールの<ruby>開発<rt>かいはつ</rt></ruby>と<ruby>保守<rt>ほしゅ</rt></ruby>",
  },
  featuredProjectTitle: {
    en: "Featured Project",
    fr: "Projet à la une",
    jp: "<ruby>注目<rt>ちゅうもく</rt></ruby>のプロジェクト",
  },
  latestPostTitle: {
    en: "Latest Article",
    fr: "Dernier article",
    jp: "<ruby>最新<rt>さいしん</rt></ruby>の<ruby>記事<rt>きじ</rt></ruby>",
  },
  currentlyReadingTitle: {
    en: "Currently Reading",
    fr: "Lecture en cours",
    jp: "<ruby>現在<rt>げんざい</rt></ruby><ruby>読書中<rt>どくしょちゅう</rt></ruby>",
  },
  noActiveBook: {
    en: "No active book right now. Check my reading list!",
    fr: "Pas de lecture active en ce moment. Découvrez ma liste !",
    jp: "<ruby>現在<rt>げんざい</rt></ruby><ruby>読書中<rt>どくしょちゅう</rt></ruby>の本はありません。<ruby>読書<rt>どくしょ</rt></ruby>リストをチェック！",
  },
  exploreHardware: {
    en: "Full setup →",
    fr: "Configuration complète →",
    jp: "<ruby>全構成<rt>ぜんこうせい</rt></ruby> →",
  },
  hardwarePageTitle: {
    en: "Daily Drivers & Hardware",
    fr: "Appareils & Matériel",
    jp: "<ruby>使用<rt>しよう</rt></ruby>デバイス & ハードウェア",
  },
  hardwarePageSubtitle: {
    en: "The machines, devices, and systems I use daily for engineering, software development, and daily life.",
    fr: "Les machines, stations de travail et appareils mobiles que j'utilise au quotidien pour l'ingénierie et le développement.",
    jp: "<ruby>工学<rt>こうがく</rt></ruby>、ソフトウェア<ruby>開発<rt>かいはつ</rt></ruby>、<ruby>日常<rt>にちじょう</rt></ruby><ruby>生活<rt>せいかつ</rt></ruby>で<ruby>毎日<rt>まいにち</rt></ruby><ruby>使用<rt>しよう</rt></ruby>しているシステムとスペック。",
  },
  hardwarePhilosophyTitle: {
    en: "Setup & Philosophy",
    fr: "Philosophie & Configuration",
    jp: "こだわりと<ruby>構成<rt>こうせい</rt></ruby>",
  },
  hardwarePhilosophyText: {
    en: "I prioritize repairability, modular hardware, and open operating systems. My primary workstations run Arch Linux, and I actively support Right to Repair principles.",
    fr: "Je privilégie la réparabilité, le matériel modulaire et les systèmes d'exploitation ouverts. Mes machines principales tournent sous Arch Linux et je soutiens activement le droit à la réparation.",
    jp: "<ruby>修理<rt>しゅうり</rt></ruby>のしやすさ、モジュール<ruby>性<rt>せい</rt></ruby>、オープンなOSを<ruby>重視<rt>じゅうし</rt></ruby>しています。メインマシンではArch Linuxを<ruby>運用<rt>うんよう</rt></ruby>し、「<ruby>修理<rt>しゅうり</rt></ruby>する<ruby>権利<rt>けんり</rt></ruby>」を<ruby>支持<rt>しじ</rt></ruby>しています。",
  },
  viewAllProjects: {
    en: "All projects →",
    fr: "Tous les projets →",
    jp: "すべてのプロジェクト →",
  },
  readArticle: {
    en: "Read article →",
    fr: "Lire l'article →",
    jp: "記事を読む →",
  },
  viewReadingList: {
    en: "View reading list →",
    fr: "Voir la liste de lecture →",
    jp: "読書リストを見る →",
  },
  allSystemsOperational: {
    en: "All systems operational",
    fr: "Systèmes opérationnels",
    jp: "<ruby>全<rt>ぜん</rt></ruby>システム<ruby>正常<rt>せいじょう</rt></ruby><ruby>稼働中<rt>かどうちゅう</rt></ruby>",
  },
  homelabTitle: {
    en: "Homelab Infrastructure",
    fr: "Infrastructure Homelab",
    jp: "ホームラボインフラ",
  },
  navHardware: {
    en: "Hardware",
    fr: "Matériel",
    jp: "ハードウェア",
  },
};
