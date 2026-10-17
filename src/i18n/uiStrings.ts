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
  nowPlayingTitle: {
    en: "Now Playing",
    fr: "Écoute en cours",
    ja: "<ruby>現在<rt>げんざい</rt></ruby><ruby>再生中<rt>さいせいちゅう</rt></ruby>",
  },
  plexPlaying: {
    en: "Playing",
    fr: "En lecture",
    ja: "<ruby>再生中<rt>さいせいちゅう</rt></ruby>",
  },
  plexPaused: {
    en: "Paused",
    fr: "En pause",
    ja: "<ruby>一時停止<rt>いちじていし</rt></ruby>",
  },
  plexIdle: {
    en: "Idle",
    fr: "Inactif",
    ja: "アイドル",
  },
  plexLastPlayed: {
    en: "Last Played",
    fr: "Dernière écoute",
    ja: "<ruby>最後<rt>さいご</rt></ruby>の<ruby>再生<rt>さいせい</rt></ruby>",
  },
  plexNotPlaying: {
    en: "Not actively streaming music right now.",
    fr: "Aucune musique en cours de lecture pour le moment.",
    ja: "<ruby>現在<rt>げんざい</rt></ruby>ストリーミング<ruby>中<rt>ちゅう</rt></ruby>の<ruby>音楽<rt>おんがく</rt></ruby>はありません。",
  },
  plexStreamingVia: {
    en: "Streaming via Plex",
    fr: "Diffusé via Plex",
    ja: "Plexでストリーミング",
  },
  exploreMusicCrate: {
    en: "Crate digging & history →",
    fr: "Rotation & historique →",
    ja: "<ruby>再生履歴<rt>さいせいりれき</rt></ruby>・おすすめ →",
  },
  musicPageTitle: {
    en: "Music & Crate Digging",
    fr: "Musique & Rotation",
    ja: "<ruby>音楽<rt>おんがく</rt></ruby> & <ruby>再生履歴<rt>さいせいりれき</rt></ruby>",
  },
  musicPageSubtitle: {
    en: "Live playback telemetry, top played albums, and recently played tracks from my self-hosted Plex server.",
    fr: "Télémétrie en direct, albums les plus écoutés et morceaux récemment écoutés depuis mon serveur Plex auto-hébergé.",
    ja: "自宅のPlexサーバーから取得したリアルタイム<ruby>再生状況<rt>さいせいじょうきょう</rt></ruby>、<ruby>再生回数<rt>さいせいかいすう</rt></ruby>トップ、<ruby>最近<rt>さいきん</rt></ruby>の<ruby>再生履歴<rt>さいせいりれき</rt></ruby>。",
  },
  topRotationTitle: {
    en: "Top Played",
    fr: "Les plus écoutés",
    ja: "<ruby>再生回数<rt>さいせいかいすう</rt></ruby>トップ",
  },
  recentlyPlayedTitle: {
    en: "Recently Played",
    fr: "Écoutés récemment",
    ja: "<ruby>最近<rt>さいきん</rt></ruby><ruby>再生<rt>さいせい</rt></ruby>した<ruby>曲<rt>きょく</rt></ruby>",
  },
  playsCount: {
    en: "plays",
    fr: "écoutes",
    ja: "回再生",
  },
  suggestMusic: {
    en: "Recommend a Track or Album",
    fr: "Recommander un morceau ou un album",
    ja: "<ruby>曲<rt>きょく</rt></ruby>・アルバムを<ruby>推薦<rt>すいせん</rt></ruby>する",
  },
  suggestMusicDesc: {
    en: "Have a song or album I should listen to? Send it to my queue via Shisho.",
    fr: "Un morceau ou un album à me faire découvrir ? Envoyez-le via Shisho.",
    ja: "おすすめの<ruby>曲<rt>きょく</rt></ruby>やアルバムがあれば、Shisho<ruby>経由<rt>けいゆ</rt></ruby>でぜひ<ruby>教<rt>おし</rt></ruby>えてください。",
  },
  musicKindLabel: {
    en: "Type",
    fr: "Type",
    ja: "タイプ",
  },
  musicKindSong: {
    en: "Song",
    fr: "Morceau",
    ja: "曲",
  },
  musicKindAlbum: {
    en: "Album",
    fr: "Album",
    ja: "アルバム",
  },
  musicTitleLabel: {
    en: "Song or Album Title",
    fr: "Titre du morceau ou de l'album",
    ja: "曲名またはアルバム名",
  },
  musicTitlePlaceholder: {
    en: "e.g., Plastic Love",
    fr: "ex. : Discovery",
    ja: "例：Plastic Love",
  },
  musicArtistLabel: {
    en: "Artist",
    fr: "Artiste",
    ja: "アーティスト",
  },
  musicArtistPlaceholder: {
    en: "e.g., Mariya Takeuchi",
    fr: "ex. : Daft Punk",
    ja: "例：竹内まりや",
  },
  musicLinkLabel: {
    en: "Link (Spotify, Bandcamp, YouTube, etc.)",
    fr: "Lien (Spotify, Bandcamp, YouTube, etc.)",
    ja: "リンク (Spotify, Bandcamp, YouTubeなど)",
  },
  musicReasonLabel: {
    en: "Why should I listen to it?",
    fr: "Pourquoi devrais-je l'écouter ?",
    ja: "おすすめの理由は？",
  },
  musicValidationError: {
    en: "Please provide either a music link, or both a title and artist.",
    fr: "Veuillez renseigner un lien ou à la fois le titre et l'artiste.",
    ja: "音楽のリンク、またはタイトルとアーティストの両方を入力してください。",
  },
  optionalIfLink: {
    en: "optional if link provided",
    fr: "facultatif si un lien est fourni",
    ja: "リンク入力時は省略可",
  },
  noMusicSuggestions: {
    en: "No music recommendations yet. Drop the first track!",
    fr: "Aucune recommandation musicale pour l'instant. Soyez le premier !",
    ja: "まだ推薦された音楽はありません。最初の1曲をぜひ！",
  },
  communityMusicSuggestions: {
    en: "Community Crate",
    fr: "Sélection de la communauté",
    ja: "コミュニティからのおすすめ",
  },
  communityMusicDesc: {
    en: "Songs and albums recommended by visitors.",
    fr: "Morceaux et albums recommandés par les visiteurs.",
    ja: "訪問者から推薦された曲・アルバムの一覧です。",
  },
  backToMusic: {
    en: "Back to Music",
    fr: "Retour à la musique",
    ja: "音楽に戻る",
  },
  albumNotFound: {
    en: "Album Not Found",
    fr: "Album introuvable",
    ja: "アルバムが見つかりませんでした",
  },
  albumNotFoundDesc: {
    en: "The requested album could not be located in the music library, or the link is invalid.",
    fr: "L'album demandé est introuvable dans la bibliothèque ou le lien est invalide.",
    ja: "指定されたアルバムがライブラリに見つからないか、リンクが無効です。",
  },
  albumTracks: {
    en: "Tracks",
    fr: "Pistes",
    ja: "収録曲",
  },
  trackNumber: {
    en: "#",
    fr: "N°",
    ja: "#",
  },
  trackTitle: {
    en: "Title",
    fr: "Titre",
    ja: "タイトル",
  },
  trackDuration: {
    en: "Duration",
    fr: "Durée",
    ja: "時間",
  },
  trackPlays: {
    en: "Plays",
    fr: "Écoutes",
    ja: "再生数",
  },
  totalPlaytime: {
    en: "Total Playtime",
    fr: "Durée totale",
    ja: "合計時間",
  },
  listenOnYoutube: {
    en: "Listen on YouTube",
    fr: "Écouter sur YouTube",
    ja: "YouTubeで聴く",
  },
  listenOnYoutubeMusic: {
    en: "Listen on YouTube Music",
    fr: "Écouter sur YouTube Music",
    ja: "YouTube Musicで聴く",
  },
  listenOnQobuz: {
    en: "Hi-Res on Qobuz",
    fr: "Hi-Res sur Qobuz",
    ja: "Qobuzで聴く",
  },
  loadingAlbum: {
    en: "Loading album tracks...",
    fr: "Chargement des pistes de l'album...",
    ja: "アルバム情報を読み込み中...",
  },
};



