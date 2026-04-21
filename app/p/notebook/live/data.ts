// NOTEBOOK pattern-local data.
// 学生ルーズリーフ。手書き・スタンプカード・自己紹介。

export type Category =
  | "おしゃべり"
  | "おえかき"
  | "ゲーム"
  | "カラオケ"
  | "コラボ"
  | "メンバー"
  | "おやすみ";

export type NotebookPage = {
  id: string;
  title: string;
  date: string;
  duration: string;
  category: Category;
  note: string;
  pinColor: "red" | "blue" | "yellow" | "green";
};

export type Lesson = {
  day: string;
  weekday: string;
  dateLabel: string;
  title: string;
  time: string;
  category: Category;
  emoji: string;
  note: string;
  off?: boolean;
};

export const NOTEBOOK = {
  student: {
    name: "ストリーマー名",
    handle: "@handle",
    className: "2-B",
    date: "2026.04.21",
  },

  about: {
    title: "じこしょうかい",
    intro:
      "こんにちは。ストリーマーです。\nしゅみ：おしゃべり、おえかき、\nからおけ、ねこ。\nすきなたべもの：プリン。",
    photoLabel: "self-portrait",
    photoCaption: "me ♡",
  },

  schedule: [
    { day: "MON", weekday: "月", dateLabel: "4.21", title: "おしゃべり",     time: "よる 21:00 〜", category: "おしゃべり" as Category, emoji: "♪", note: "こんしゅうも よろしくね" },
    { day: "TUE", weekday: "火", dateLabel: "4.22", title: "おえかき",       time: "よる 20:00 〜", category: "おえかき" as Category,   emoji: "✎", note: "サムネ かこうかな" },
    { day: "WED", weekday: "水", dateLabel: "4.23", title: "おやすみ",       time: "—",             category: "おやすみ" as Category,   emoji: "zz", note: "ぐっすり ねます", off: true },
    { day: "THU", weekday: "木", dateLabel: "4.24", title: "ゲーム",         time: "よる 21:00 〜", category: "ゲーム" as Category,     emoji: "★", note: "しんさく はつプレイ" },
    { day: "FRI", weekday: "金", dateLabel: "4.25", title: "カラオケ",       time: "よる 22:00 〜", category: "カラオケ" as Category,   emoji: "🎤", note: "しんきょく あるかも" },
    { day: "SAT", weekday: "土", dateLabel: "4.26", title: "コラボ!!",        time: "よる 20:00 〜", category: "コラボ" as Category,     emoji: "!!", note: "ゲストさん ひみつ" },
    { day: "SUN", weekday: "日", dateLabel: "4.27", title: "メンバー限定",   time: "よる 19:00 〜", category: "メンバー" as Category,   emoji: "♡", note: "まったり おしゃべり" },
  ] as Lesson[],

  stampCard: {
    current: 9,
    total: 20,
    goal: 100,
    prize: "100回でとくべつなプレゼント☆",
  },

  pages: [
    { id: "p01", title: "深夜の雑談、ラーメン食べながら",  date: "2026.04.19", duration: "2:14", category: "おしゃべり" as Category, note: "きょうのおしゃべりは ラーメン食べながら。たのしかった！",  pinColor: "red" as const },
    { id: "p02", title: "APEX スクリム、今週の反省会",      date: "2026.04.17", duration: "1:28", category: "ゲーム" as Category,     note: "スクリムのあと みんなで ふりかえり。らいしゅうも がんばるぞ！",   pinColor: "blue" as const },
    { id: "p03", title: "ARENA CODE 7、初見プレイ",         date: "2026.04.15", duration: "4:05", category: "ゲーム" as Category,     note: "さけびすぎて のど からから。でも たのしい！",                     pinColor: "yellow" as const },
    { id: "p04", title: "Stardrop Cafe、農業するだけ",      date: "2026.04.13", duration: "2:58", category: "ゲーム" as Category,     note: "しずかな時間。野菜がすくすく育つ。",                              pinColor: "green" as const },
    { id: "p05", title: "深夜雑談、質問ぜんぶ答える",        date: "2026.04.11", duration: "1:52", category: "おしゃべり" as Category, note: "コメントの しつもん 100 こぐらい こたえた！",                    pinColor: "red" as const },
    { id: "p06", title: "お絵描き配信、サムネ描く",          date: "2026.04.05", duration: "3:14", category: "おえかき" as Category,   note: "さむねデザインかんがえる たのしい時間。",                          pinColor: "yellow" as const },
    { id: "p07", title: "カラオケ、歌いまくった夜",          date: "2026.04.03", duration: "2:24", category: "カラオケ" as Category,   note: "4時間歌いつづけた。のど限界。",                                    pinColor: "blue" as const },
    { id: "p08", title: "コラボ配信、ゲストと朝まで",        date: "2026.03.28", duration: "4:10", category: "コラボ" as Category,     note: "ゲストさん 4じかんずっと たのしい話。",                            pinColor: "green" as const },
    { id: "p09", title: "メン限、雑談延長戦",                date: "2026.03.24", duration: "1:42", category: "メンバー" as Category,   note: "メンバーさんありがと。いつも支えてくれて。",                       pinColor: "red" as const },
    { id: "p10", title: "ホラーゲーム、耐久で挑戦",          date: "2026.03.20", duration: "4:32", category: "ゲーム" as Category,     note: "ホラー苦手なのに 4時間やった。もう二度とやらない。",              pinColor: "blue" as const },
    { id: "p11", title: "リスナー参加カスタム大会",          date: "2026.03.15", duration: "2:12", category: "ゲーム" as Category,     note: "リスナーさんと カスタム大会！わいわい楽しかった。",              pinColor: "yellow" as const },
    { id: "p12", title: "朝活、コーヒー淹れながら雑談",      date: "2026.03.10", duration: "1:18", category: "おしゃべり" as Category, note: "朝の時間、ゆっくりコーヒー淹れながら。",                          pinColor: "green" as const },
  ] as NotebookPage[],

  notes: [
    { from: "れい",     message: "いつもノート見てます ♡ すきなたべものがプリンなの、共感！" },
    { from: "こーひー",  message: "せんしゅうの カラオケ さいこうでした。もっとききたいです！" },
    { from: "あおい",    message: "スタンプカード、あと11回だね！がんばって！" },
  ],
};

export const CATEGORY_COLOR: Record<Category, { color: string; border: string }> = {
  おしゃべり: { color: "#c05a5a", border: "#c05a5a" },
  おえかき:   { color: "#c85a80", border: "#c85a80" },
  ゲーム:     { color: "#5a8aa0", border: "#5a8aa0" },
  カラオケ:   { color: "#7a5aa0", border: "#7a5aa0" },
  コラボ:     { color: "#ca7a30", border: "#ca7a30" },
  メンバー:   { color: "#5a8a5a", border: "#5a8a5a" },
  おやすみ:   { color: "#8a7a60", border: "#8a7a60" },
};

export const PIN_COLOR: Record<NotebookPage["pinColor"], string> = {
  red: "#e4a0a0",
  blue: "#a0c4d8",
  yellow: "#f0d88a",
  green: "#b8d8a8",
};

export const PALETTE = {
  bg: "#fdfaf2",
  ruledLine: "#d8e0c8",
  marginLine: "#e4a0a0",
  holeBorder: "#d0c8b0",
  ink: "#2a2218",
  inkMuted: "#8a7a60",
  inkFaint: "rgba(42,34,24,0.4)",
  red: "#c05a5a",
  blue: "#5a8aa0",
  yellow: "#8a6a30",
  stampBg: "#fff8e0",
  stampBorder: "#c0a060",
  stampFill: "#e4a0a0",
  paper: "#ffffff",
};

export const FONTS = {
  hand: '"Kalam", "Caveat", cursive',
  headline: '"Caveat", "Kalam", cursive',
  mono: 'ui-monospace, "JetBrains Mono", monospace',
};
