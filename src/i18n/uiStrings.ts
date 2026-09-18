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
    ja: "モスケ アルテゥス",
  },
  siteDescription: {
    en: "Personal website of Artus Mosquet, Full-Time ECE Student at Purdue University.",
    fr: "Site personnel d'Artus Mosquet, étudiant en ECE à l'Université de Purdue.",
    ja: "パデュー大学電気工学専攻、モスケ アルテゥスの個人ウェブサイト。",
  },
  navHome: {
    en: "Home",
    fr: "Accueil",
    ja: "トップ",
  },
  navProjects: {
    en: "Projects",
    fr: "Projets",
    ja: "プロジェクト",
  },
  navBlog: {
    en: "Blog",
    fr: "Blog",
    ja: "ブログ",
  },
  navAbout: {
    en: "About",
    fr: "À propos",
    ja: "プロフィール",
  },
  navContact: {
    en: "Contact",
    fr: "Contact",
    ja: "コンタクト",
  },
  navReading: {
    en: "Reading List",
    fr: "Liste de lecture",
    ja: "読書リスト",
  },
  myCountry: {
    en: "United States",
    fr: "États-Unis",
    ja: "アメリカ",
  },
  myOccupation: {
    en: "Full-Time ECE Student",
    fr: "Étudiant en ECE à temps plein",
    ja: "電気工学専攻のフルタイム学生", //fix
  },
  footerProject: {
    en: "Learn more about my projects on",
    fr: "En savoir plus sur mes projets sur",
    ja: "私のプロジェクトについては、", //fix?
  },
  footerSocial: {
    en: "Follow me on",
    fr: "Suivez-moi sur",
    ja: "私をフォローしてください", //fix?
  },
  welcome: {
    en: "Welcome!",
    fr: "Bienvenue!",
    ja: "ようこそ！", //fix?
  },
  publishDate: {
    en: "Published on:",
    fr: "Publié le:",
    ja: "公開日:", //fix?
  },
  updatedDate: {
    en: "Updated on:",
    fr: "Mis à jour le:",
    ja: "更新日:",
  },
  writtenBy: {
    en: "Written by:",
    fr: "Écrit par:",
    ja: "著者:", //fix?
  },
  languages: {
    en: "French and English",
    fr: "Français et anglais",
    ja: "フランス語と英語", //fix?
  },
  status: {
    en: "Status",
    fr: "Statut",
    ja: "ステータス",
  },
  helloThere: {
    en: "Hello There!",
    fr: "Bonjour !",
    ja: "こんにちは！",
  },
  introText: {
    en: "I'm a Full-Time ECE Student at Purdue. I speak French and English, and I enjoy working on my servers and projects.",
    fr: "Je suis étudiant à temps plein en ECE à Purdue. Je parle français et anglais, et j'aime travailler sur mes serveurs et mes projets.",
    ja: "パデュー<ruby>大学<rt>だいがく</rt></ruby>のフルタイムの<ruby>電気工学専攻<rt>でんきこうがくせんこう</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。フランス<ruby>語<rt>ご</rt></ruby>と<ruby>英語<rt>えいご</rt></ruby>を<ruby>話<rt>はな</rt></ruby>し、<ruby>自分<rt>じぶん</rt></ruby>のサーバーやプロジェクトに<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>むのが<ruby>好<rt>す</rt></ruby>きです。",
  },
  dataStored: {
    en: "Data Stored",
    fr: "Données stockées",
    ja: "<ruby>保存<rt>ほぞん</rt></ruby>されたデータ",
  },
  networkTraffic: {
    en: "Network Traffic",
    fr: "Trafic réseau",
    ja: "ネットワークトラフィック",
  },
  dailyDrivers: {
    en: "Daily Drivers",
    fr: "Appareils quotidiens",
    ja: "<ruby>日常<rt>にちじょう</rt></ruby>のデバイス",
  },
  readMore: {
    en: "Read more",
    fr: "Lire la suite",
    ja: "続きを読む",
  },
  readLess: {
    en: "Read less",
    fr: "Lire moins",
    ja: "閉じる",
  },
  started: {
    en: "Started",
    fr: "Commencé",
    ja: "開始日",
  },
  finished: {
    en: "Finished",
    fr: "Terminé",
    ja: "読了日",
  },
  googleBooksCredit: {
    en: "Data provided by Google Books API",
    fr: "Données fournies par l'API Google Books",
    ja: "Google Books APIのデータを使用しています",
  },
  faq: {
    en: "FAQ",
    fr: "FAQ",
    ja: "よくある質問",
  },
  projectAbout: {
    en: "About the Project",
    fr: "À propos du projet",
    ja: "プロジェクトについて",
  },
  projectTech: {
    en: "Technologies",
    fr: "Technologies",
    ja: "テクノロジー",
  },
  projectLinks: {
    en: "Links",
    fr: "Liens",
    ja: "リンク",
  },
  projectSourceCode: {
    en: "View Source Code",
    fr: "Voir le code source",
    ja: "ソースコードを表示",
  },
  projectLiveSite: {
    en: "Visit Live Site",
    fr: "Visiter le site en direct",
    ja: "ライブサイトにアクセス",
  },
  backToBlog: {
    en: "Back to Blog",
    fr: "Retour au blog",
    ja: "ブログに戻る",
  },
  noPostsFound: {
    en: "No posts published yet in this language.",
    fr: "Aucun article publié pour le moment dans cette langue.",
    ja: "この言語で公開された記事はまだありません。",
  },
  allPosts: {
    en: "All Posts",
    fr: "Tous les articles",
    ja: "すべての記事",
  },
  tabMyReading: {
    en: "My Reading List",
    fr: "Ma liste de lecture",
    ja: "私の読書リスト",
  },
  tabSuggestions: {
    en: "Community Suggestions",
    fr: "Suggestions de la communauté",
    ja: "コミュニティのおすすめ",
  },
  suggestBook: {
    en: "Suggest a Book",
    fr: "Suggérer un livre",
    ja: "本を提案する",
  },
  suggestBookDesc: {
    en: "Recommend a book for my reading list.",
    fr: "Recommandez un livre pour ma liste de lecture.",
    ja: "私の読書リストに追加する本を推薦してください。",
  },
  bookTitle: {
    en: "Book Title",
    fr: "Titre du livre",
    ja: "本のタイトル",
  },
  bookTitlePlaceholder: {
    en: "e.g., The Martian",
    fr: "ex. : Le Problème à trois corps",
    ja: "例：三体",
  },
  bookAuthor: {
    en: "Author",
    fr: "Auteur",
    ja: "著者",
  },
  bookAuthorPlaceholder: {
    en: "e.g., Andy Weir",
    fr: "ex. : Liu Cixin",
    ja: "例：劉慈欣",
  },
  bookIsbn: {
    en: "ISBN",
    fr: "ISBN",
    ja: "ISBN",
  },
  optional: {
    en: "Optional",
    fr: "Facultatif",
    ja: "任意",
  },
  bookIsbnPlaceholder: {
    en: "e.g., 9780804139038",
    fr: "ex. : 9780804139038",
    ja: "例：9780804139038",
  },
  bookReason: {
    en: "Why should I read it?",
    fr: "Pourquoi devrais-je le lire ?",
    ja: "おすすめの理由は？",
  },
  bookReasonPlaceholder: {
    en: "Optional, but appreciated...",
    fr: "Facultatif, mais apprécié...",
    ja: "任意ですが、教えていただけると嬉しいです...",
  },
  yourName: {
    en: "Your Name",
    fr: "Votre nom",
    ja: "お名前",
  },
  yourNamePlaceholder: {
    en: "e.g., Alice",
    fr: "ex. : Alice",
    ja: "例：アリス",
  },
  submitSuggestion: {
    en: "Submit Suggestion",
    fr: "Envoyer la suggestion",
    ja: "提案を送信する",
  },
  submitting: {
    en: "Submitting...",
    fr: "Envoi en cours...",
    ja: "送信中...",
  },
  suggestSuccess: {
    en: "Successfully suggested",
    fr: "Suggestion enregistrée avec succès",
    ja: "提案を受け付けました",
  },
  suggestValidationError: {
    en: "Please provide an ISBN, or both the Book Title and Author.",
    fr: "Veuillez fournir un ISBN, ou à la fois le titre du livre et l'auteur.",
    ja: "ISBN、または本のタイトルと著者の両方を入力してください。",
  },
  optionalIfIsbn: {
    en: "Optional if ISBN provided",
    fr: "Facultatif si l'ISBN est fourni",
    ja: "ISBNがあれば省略可",
  },
  suggestNetworkError: {
    en: "Unable to connect to Shisho API. Please try again later.",
    fr: "Impossible de se connecter à l'API Shisho. Veuillez réessayer plus tard.",
    ja: "Shisho APIに接続できませんでした。後でもう一度お試しください。",
  },
  loadingSuggestions: {
    en: "Loading suggestions...",
    fr: "Chargement des suggestions...",
    ja: "おすすめを読み込み中...",
  },
  noSuggestions: {
    en: "No books have been suggested yet. Be the first!",
    fr: "Aucun livre n'a encore été suggéré. Soyez le premier !",
    ja: "まだ提案された本はありません。最初の推薦者になりましょう！",
  },
  retry: {
    en: "Retry",
    fr: "Réessayer",
    ja: "再試行",
  },
  close: {
    en: "Close",
    fr: "Fermer",
    ja: "閉じる",
  },
  suggestedBy: {
    en: "Suggested by",
    fr: "Suggéré par",
    ja: "提案者",
  },
  suggestedOn: {
    en: "Suggested on",
    fr: "Suggéré le",
    ja: "提案日",
  },
  viaSource: {
    en: "via",
    fr: "via",
    ja: "経由：",
  },
  privacyPolicy: {
    en: "Privacy Policy",
    fr: "Politique de confidentialité",
    ja: "プライバシーポリシー",
  },
  nowTitle: {
    en: "What I'm Doing Now",
    fr: "En ce moment",
    ja: "<ruby>現在<rt>げんざい</rt></ruby>の<ruby>活動<rt>かつどう</rt></ruby>",
  },
  nowStatus: {
    en: "Now",
    fr: "Actuel",
    ja: "NOW",
  },
  nowPurdue: {
    en: "Studying Electrical Engineering at Purdue University",
    fr: "Étudiant en ingénierie électrique à l'Université Purdue",
    ja: "パデュー<ruby>大学<rt>だいがく</rt></ruby>で<ruby>電気工学<rt>でんきこうがく</rt></ruby>を<ruby>専攻<rt>せんこう</rt></ruby>",
  },
  nowOrganiser: {
    en: "Organising workshops and data archiving at Purdue Hackers",
    fr: "Organisation d'ateliers et archivage technique chez Purdue Hackers",
    ja: "Purdue Hackersでワークショップとアーカイブを<ruby>主導<rt>しゅどう</rt></ruby>",
  },
  nowHomelab: {
    en: "Maintaining homelab infrastructure, Shisho & open source tools",
    fr: "Maintenance de l'infrastructure homelab, Shisho et outils open source",
    ja: "ホームラボインフラ、Shisho、OSSツールの<ruby>開発<rt>かいはつ</rt></ruby>と<ruby>保守<rt>ほしゅ</rt></ruby>",
  },
  featuredProjectTitle: {
    en: "Featured Project",
    fr: "Projet à la une",
    ja: "<ruby>注目<rt>ちゅうもく</rt></ruby>のプロジェクト",
  },
  latestPostTitle: {
    en: "Latest Article",
    fr: "Dernier article",
    ja: "<ruby>最新<rt>さいしん</rt></ruby>の<ruby>記事<rt>きじ</rt></ruby>",
  },
  currentlyReadingTitle: {
    en: "Currently Reading",
    fr: "Lecture en cours",
    ja: "<ruby>現在<rt>げんざい</rt></ruby><ruby>読書中<rt>どくしょちゅう</rt></ruby>",
  },
  noActiveBook: {
    en: "No active book right now. Check my reading list!",
    fr: "Pas de lecture active en ce moment. Découvrez ma liste !",
    ja: "<ruby>現在<rt>げんざい</rt></ruby><ruby>読書中<rt>どくしょちゅう</rt></ruby>の本はありません。<ruby>読書<rt>どくしょ</rt></ruby>リストをチェック！",
  },
  exploreHardware: {
    en: "Full setup →",
    fr: "Configuration complète →",
    ja: "<ruby>全構成<rt>ぜんこうせい</rt></ruby> →",
  },
  hardwarePageTitle: {
    en: "Daily Drivers & Hardware",
    fr: "Appareils & Matériel",
    ja: "<ruby>使用<rt>しよう</rt></ruby>デバイス & ハードウェア",
  },
  hardwarePageSubtitle: {
    en: "The machines, devices, and systems I use daily for engineering, software development, and daily life.",
    fr: "Les machines, stations de travail et appareils mobiles que j'utilise au quotidien pour l'ingénierie et le développement.",
    ja: "<ruby>工学<rt>こうがく</rt></ruby>、ソフトウェア<ruby>開発<rt>かいはつ</rt></ruby>、<ruby>日常<rt>にちじょう</rt></ruby><ruby>生活<rt>せいかつ</rt></ruby>で<ruby>毎日<rt>まいにち</rt></ruby><ruby>使用<rt>しよう</rt></ruby>しているシステムとスペック。",
  },
  hardwarePhilosophyTitle: {
    en: "Setup & Philosophy",
    fr: "Philosophie & Configuration",
    ja: "こだわりと<ruby>構成<rt>こうせい</rt></ruby>",
  },
  hardwarePhilosophyText: {
    en: "I prioritize repairability, modular hardware, and open operating systems. My primary workstations run Arch Linux, and I actively support Right to Repair principles.",
    fr: "Je privilégie la réparabilité, le matériel modulaire et les systèmes d'exploitation ouverts. Mes machines principales tournent sous Arch Linux et je soutiens activement le droit à la réparation.",
    ja: "<ruby>修理<rt>しゅうり</rt></ruby>のしやすさ、モジュール<ruby>性<rt>せい</rt></ruby>、オープンなOSを<ruby>重視<rt>じゅうし</rt></ruby>しています。メインマシンではArch Linuxを<ruby>運用<rt>うんよう</rt></ruby>し、「<ruby>修理<rt>しゅうり</rt></ruby>する<ruby>権利<rt>けんり</rt></ruby>」を<ruby>支持<rt>しじ</rt></ruby>しています。",
  },
  viewAllProjects: {
    en: "All projects →",
    fr: "Tous les projets →",
    ja: "すべてのプロジェクト →",
  },
  readArticle: {
    en: "Read article →",
    fr: "Lire l'article →",
    ja: "記事を読む →",
  },
  viewReadingList: {
    en: "View reading list →",
    fr: "Voir la liste de lecture →",
    ja: "読書リストを見る →",
  },
  allSystemsOperational: {
    en: "All systems operational",
    fr: "Systèmes opérationnels",
    ja: "<ruby>全<rt>ぜん</rt></ruby>システム<ruby>正常<rt>せいじょう</rt></ruby><ruby>稼働中<rt>かどうちゅう</rt></ruby>",
  },
  homelabTitle: {
    en: "Homelab Infrastructure",
    fr: "Infrastructure Homelab",
    ja: "ホームラボインフラ",
  },
  navHardware: {
    en: "Hardware",
    fr: "Matériel",
    ja: "ハードウェア",
  },
  resume: {
    en: "Resume",
    fr: "CV",
    ja: "<ruby>履歴書<rt>りれきしょ</rt></ruby>",
  },
  viewResume: {
    en: "Resume (PDF)",
    fr: "CV (PDF)",
    ja: "<ruby>履歴書<rt>りれきしょ</rt></ruby> (PDF)",
  },
};
