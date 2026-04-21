// PASTEL DIARY pattern-local data.
// Fork this file per-streamer when using as a starter.

export const DIARY = {
  streamer: {
    name: "Streamer Name",
    handle: "@handle",
    tagline: "ここは Streamer Name の小さなお部屋。配信のお知らせ、日々のこと、お手紙をまとめています。",
  },

  today: {
    // Rendered as "⌇ 2026 / april / 21 / mon" — keep lowercase english style for accent
    dateLabel: "2026 / april / 21 / mon",
    greeting: "今日も、\nおつかれさま。",
  },

  nextStream: {
    title: "雑談の夜、ゆるく。",
    dayLabel: "tonight",
    time: "21:00 – 23:00",
    category: "talk",
    note: "コーヒー淹れて待っててね。",
  },

  schedule: [
    { day: "mon", dateLabel: "4.21", title: "雑談の夜", time: "21:00 – 23:00", category: "talk", note: "コーヒー淹れて待っててね" },
    { day: "tue", dateLabel: "4.22", title: "おやすみの日", time: "—",         category: "off",   note: "ぐっすり寝ます" },
    { day: "wed", dateLabel: "4.23", title: "おえかき配信", time: "20:00 – 23:00", category: "creative", note: "サムネ描きたい" },
    { day: "thu", dateLabel: "4.24", title: "ゲーム、新作", time: "21:00 – 01:00", category: "games", note: "初見プレイ、絶対叫ぶ" },
    { day: "fri", dateLabel: "4.25", title: "カラオケの夜", time: "22:00 – 25:00", category: "music", note: "歌うまい保証なし" },
    { day: "sat", dateLabel: "4.26", title: "コラボ、ゲスト", time: "20:00 – 23:00", category: "collab", note: "ゲスト紹介は当日まで秘密" },
    { day: "sun", dateLabel: "4.27", title: "メン限、雑談延長戦", time: "19:00 – 22:00", category: "member", note: "メンバーさんありがと" },
  ],

  archives: [
    { id: "a1", title: "深夜の雑談、ラーメン食べながら",        date: "4.19", duration: "2:14", category: "talk",     tone: "rose",     views: "12K" },
    { id: "a2", title: "今週のまとめ、ゲーム1本完走",          date: "4.17", duration: "3:42", category: "games",    tone: "sage",     views: "34K" },
    { id: "a3", title: "おえかき配信、サムネ描いてた",          date: "4.14", duration: "2:58", category: "creative", tone: "lavender", views: "8.2K" },
    { id: "a4", title: "カラオケ、久しぶりに歌った",            date: "4.12", duration: "1:52", category: "music",    tone: "cream",    views: "18K" },
    { id: "a5", title: "メン限、雑談延長戦",                   date: "4.10", duration: "1:42", category: "member",   tone: "rose",     views: "6.0K" },
    { id: "a6", title: "コラボ配信、ゲストと朝まで",            date: "4.06", duration: "4:05", category: "collab",   tone: "sage",     views: "52K" },
    { id: "a7", title: "ゲーム実況、初見プレイで叫びまくる",    date: "4.03", duration: "3:12", category: "games",    tone: "lavender", views: "28K" },
    { id: "a8", title: "雑談、配信始めたころの裏話",            date: "3.30", duration: "2:02", category: "talk",     tone: "cream",    views: "14K" },
    { id: "a9", title: "おえかきしながらリスナーと雑談",        date: "3.27", duration: "3:24", category: "creative", tone: "rose",     views: "9.8K" },
    { id: "a10", title: "ホラーゲーム、耐久で挑戦",            date: "3.24", duration: "4:32", category: "games",    tone: "sage",     views: "41K" },
    { id: "a11", title: "コーヒー淹れながら朝雑談",            date: "3.22", duration: "1:18", category: "talk",     tone: "cream",    views: "11K" },
    { id: "a12", title: "久しぶりのコラボ、昔話いっぱい",      date: "3.18", duration: "3:56", category: "collab",   tone: "lavender", views: "38K" },
  ],

  letters: [
    { from: "コーヒー党",   excerpt: "いつも配信楽しみにしています。先週の雑談、元気もらえました。", date: "4.20" },
    { from: "rin",          excerpt: "はじめまして！ 今日から登録しました〜！",                         date: "4.18" },
    { from: "青いペンギン", excerpt: "深夜のカラオケ最高でした。今度リクエストしてもいいですか？",    date: "4.16" },
  ],
} as const;

export type Category =
  | "talk"
  | "games"
  | "creative"
  | "music"
  | "collab"
  | "member"
  | "off";

export const CATEGORIES: Record<Category, { label: string; color: string; bg: string }> = {
  talk:     { label: "雑談",     color: "#b57068", bg: "#f5d8d2" },
  games:    { label: "GAME",     color: "#6a5d9e", bg: "#dfd8f0" },
  creative: { label: "おえかき", color: "#5a8870", bg: "#d6e6d8" },
  music:    { label: "MUSIC",    color: "#a68248", bg: "#f0e0b0" },
  collab:   { label: "COLLAB",   color: "#c26a50", bg: "#fad0c0" },
  member:   { label: "MEMBER",   color: "#8060a8", bg: "#e6d8ee" },
  off:      { label: "off",      color: "rgba(60,40,30,0.4)", bg: "transparent" },
};

export const PALETTE = {
  bg: "#fbf5ee",           // cream dotted background
  ink: "#5a4030",           // primary text
  inkDeep: "#3d2d22",       // headlines
  inkMuted: "rgba(60,40,30,0.7)",
  inkFaint: "rgba(60,40,30,0.4)",
  inkSoft: "rgba(60,40,30,0.25)",
  pink: "#e4a4a0",          // primary accent (CTA)
  pinkSoft: "#f4ccc8",
  yellow: "#fef4a8",        // sticky note
  burgundy: "#b57068",      // date stamp accent
  paper: "#ffffff",          // polaroid white
  tape: "rgba(230, 220, 170, 0.7)", // masking tape
};

export const FONTS = {
  serif: '"Hina Mincho", "Shippori Mincho", serif',
  body: '"Zen Kaku Gothic New", system-ui, sans-serif',
  handwriting: '"Caveat", cursive',
};
