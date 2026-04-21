// SHOUJO COMIC pattern-local data.
// 少女漫画のコマ割り + フキダシ + スパークル。M PLUS Rounded 1c。

export type Arc =
  | "雑談編"
  | "ゲーム編"
  | "音楽編"
  | "創作編"
  | "コラボ編"
  | "メンバー編"
  | "休載";

export type Episode = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  duration: string;
  views: string;
  arc: Arc;
  quote: string;
  tone: "rose" | "yellow" | "white";
};

export type StoryDay = {
  day: string;
  dateLabel: string;
  episode: string;
  title: string;
  time: string;
  arc: Arc;
  quote: string;
  tone: "rose" | "yellow" | "white";
  off?: boolean;
};

export const SHOUJO = {
  heroine: {
    name: "ストリーマーネーム",
    handle: "@handle",
    chapter: "CHAPTER 04 · SPRING",
    subtitle: "はじまりの春",
    bio: "六晩のライブ、ちいさな物語。\nきみにも届きますように♡",
    speechBubble: "来てくれてありがとう♡",
  },

  tonight: {
    label: "TO BE CONTINUED →",
    time: "今夜 21:00",
    emoji: "♡",
  },

  schedule: [
    { day: "MON", dateLabel: "4.21", episode: "EP.089", title: "Just Chatting",    time: "21:00 – 24:00", arc: "雑談編"    as Arc, quote: "今週も はじまるよ〜！",                   tone: "rose"   as const },
    { day: "TUE", dateLabel: "4.22", episode: "—",      title: "休載",              time: "—",              arc: "休載"      as Arc, quote: "今週は おやすみ…！",                       tone: "white"  as const, off: true },
    { day: "WED", dateLabel: "4.23", episode: "EP.090", title: "Art Stream",        time: "20:00 – 23:00", arc: "創作編"    as Arc, quote: "サムネ描くよ、かわいくしたい✎",          tone: "yellow" as const },
    { day: "THU", dateLabel: "4.24", episode: "EP.091", title: "New Title!!",        time: "21:00 – 01:00", arc: "ゲーム編"  as Arc, quote: "初見プレイ、きっとさけぶよ…!!",          tone: "rose"   as const },
    { day: "FRI", dateLabel: "4.25", episode: "EP.092", title: "Karaoke Night♪",    time: "22:00 – 01:00", arc: "音楽編"    as Arc, quote: "今夜は歌の夜。遅くまでね♪",                tone: "yellow" as const },
    { day: "SAT", dateLabel: "4.26", episode: "EP.093", title: "Guest, Arrive!!",    time: "20:00 – 23:00", arc: "コラボ編"  as Arc, quote: "ゲストさん、ひみつ…♡",                   tone: "rose"   as const },
    { day: "SUN", dateLabel: "4.27", episode: "EP.094", title: "Members' Room",      time: "19:00 – 22:00", arc: "メンバー編" as Arc, quote: "いつものみんな、ありがとう♡",            tone: "yellow" as const },
  ] as StoryDay[],

  episodes: [
    { id: "e088", number: "EP.088", title: "深夜の雑談、ラーメンの誘惑",     subtitle: "お気に入りのお店の話",           date: "2026.04.19", duration: "2:14", views: "128K", arc: "雑談編"    as Arc, quote: "ラーメンって 哲学だよね？",     tone: "rose"   as const },
    { id: "e087", number: "EP.087", title: "APEX、今週の反省会",              subtitle: "スクリム明けのふりかえり",       date: "2026.04.17", duration: "1:28", views: "64K",  arc: "ゲーム編"  as Arc, quote: "来週こそ…！",                     tone: "white"  as const },
    { id: "e086", number: "EP.086", title: "新作 ARENA CODE 7 初見プレイ",   subtitle: "叫びすぎて喉が限界",             date: "2026.04.15", duration: "4:05", views: "212K", arc: "ゲーム編"  as Arc, quote: "こわい、でも…楽しい…!!",         tone: "yellow" as const },
    { id: "e085", number: "EP.085", title: "Stardrop Cafe、ほのぼの農業",     subtitle: "癒しの時間でした",               date: "2026.04.13", duration: "2:58", views: "42K",  arc: "ゲーム編"  as Arc, quote: "野菜が育つ…尊い…",                tone: "rose"   as const },
    { id: "e084", number: "EP.084", title: "深夜雑談、質問ぜんぶ答えた",    subtitle: "100個くらい答えたかも",         date: "2026.04.11", duration: "1:52", views: "88K",  arc: "雑談編"    as Arc, quote: "100問100答チャレンジ完了♡",      tone: "yellow" as const },
    { id: "e083", number: "EP.083", title: "VALORIS カスタム、リスナー参加", subtitle: "みんなでワイワイ",               date: "2026.04.09", duration: "2:12", views: "56K",  arc: "ゲーム編"  as Arc, quote: "リスナーさん、エイム凄い…!!",    tone: "white"  as const },
    { id: "e082", number: "EP.082", title: "ホラーゲーム、4時間耐久",        subtitle: "トラウマ配信",                   date: "2026.04.06", duration: "4:12", views: "94K",  arc: "ゲーム編"  as Arc, quote: "もう二度とやらない…(たぶん)",     tone: "rose"   as const },
    { id: "e081", number: "EP.081", title: "歌枠 vol.12、新曲披露",           subtitle: "ドキドキの新曲",                 date: "2026.04.03", duration: "2:58", views: "72K",  arc: "音楽編"    as Arc, quote: "新曲きけて嬉しい♪",               tone: "yellow" as const },
    { id: "e080", number: "EP.080", title: "コラボ配信、朝まで語る",          subtitle: "ゲストさんと昔話",               date: "2026.03.29", duration: "4:10", views: "104K", arc: "コラボ編"  as Arc, quote: "朝日を見ながら語り合った…",      tone: "rose"   as const },
    { id: "e079", number: "EP.079", title: "メン限、雑談延長戦",              subtitle: "いつもの方々と",                 date: "2026.03.24", duration: "1:42", views: "6K",   arc: "メンバー編" as Arc, quote: "メンバーさんありがと♡",            tone: "yellow" as const },
    { id: "e078", number: "EP.078", title: "朝活、コーヒーと雑談",            subtitle: "朝の特別回",                     date: "2026.03.22", duration: "1:18", views: "22K",  arc: "雑談編"    as Arc, quote: "コーヒー淹れるの上手になった？", tone: "white"  as const },
    { id: "e077", number: "EP.077", title: "お絵描き、サムネチャレンジ",       subtitle: "筆にまかせて",                   date: "2026.03.18", duration: "3:56", views: "38K",  arc: "創作編"    as Arc, quote: "描くって楽しい…",                 tone: "rose"   as const },
  ] as Episode[],

  readerMail: [
    { from: "もも先輩", message: "毎週の配信、わたしの元気の源です♡ がんばってください〜！", heart: true },
    { from: "青空りん", message: "はじめての配信コラム で、ストリーマーさんを知りました。ずっと応援してます！", heart: true },
    { from: "こーひー党", message: "深夜配信のふんいき、さいこうです。ラーメン話、また聞きたい！", heart: false },
  ],
};

export const ARC_COLOR: Record<Arc, string> = {
  雑談編: "#c04878",
  ゲーム編: "#6a70c8",
  音楽編: "#c09030",
  創作編: "#3a8a6a",
  コラボ編: "#c05a3a",
  メンバー編: "#8a4aaa",
  休載: "rgba(26,10,21,0.4)",
};

export const PALETTE = {
  bg: "#fef5ee",
  ink: "#1a0a15",
  inkMuted: "rgba(26,10,21,0.7)",
  inkFaint: "rgba(26,10,21,0.45)",
  inkSoft: "rgba(26,10,21,0.15)",
  pink: "#e06090",
  pinkDeep: "#c04878",
  panelWhite: "#ffffff",
  panelRose: "#ffe4ec",
  panelYellow: "#fff5d4",
  panelMint: "#d8ecd8",
};

export const TONE_BG: Record<"rose" | "yellow" | "white", string> = {
  rose: PALETTE.panelRose,
  yellow: PALETTE.panelYellow,
  white: PALETTE.panelWhite,
};

export const FONTS = {
  body: '"M PLUS Rounded 1c", "Zen Maru Gothic", sans-serif',
  mono: 'ui-monospace, "JetBrains Mono", monospace',
};
