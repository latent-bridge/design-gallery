// ARCADE pattern-local data.
// Combination: physical arcade cabinet form + ARCADE.LUNA neon palette (neutral).

export type Tag = "FPS" | "RPG" | "CHILL" | "TALK" | "MUSIC" | "COLLAB" | "MEMBER" | "OFF";

export type VodEntry = {
  id: string;
  title: string;
  date: string;
  duration: string;
  views: string;
  tag: Tag;
  accentKey: "cyan" | "magenta" | "yellow" | "green";
};

export type StageEntry = {
  day: string;
  dateLabel: string;
  title: string;
  time: string;
  tag: Tag;
  note: string;
  off?: boolean;
};

export const ARCADE = {
  player: {
    name: "PLAYER_01",
    handle: "@handle",
    tagline:
      "INSERT COIN TO CONTINUE.\n1-CREDIT BROADCAST SINCE 2021.",
    highScore: "128,402",
  },

  stats: {
    flwrs: "128K",
    subs: "6.8K",
    strms: "340",
    yrs: "3.4",
  },

  games: ["VALORIS:ZERO", "APEX ROUTE", "ARENA CODE 7", "Stardrop Cafe"],

  nextStage: {
    title: "VALORIS:ZERO RANKMATCH",
    subtitle: "今週こそレディアント帯キープ",
    time: "04.21.MON / 21:00 JST",
    tag: "FPS" as Tag,
  },

  schedule: [
    { day: "MON", dateLabel: "04.21", title: "VALORIS:ZERO ランクマ",    time: "21:00 – 24:00", tag: "FPS"    as Tag, note: "ランクマで気合入れる" },
    { day: "TUE", dateLabel: "04.22", title: "OFF",                       time: "—",             tag: "OFF"    as Tag, note: "充電日", off: true },
    { day: "WED", dateLabel: "04.23", title: "APEX ROUTE スクリム",       time: "20:00 – 23:00", tag: "FPS"    as Tag, note: "スクリム後にふりかえり" },
    { day: "THU", dateLabel: "04.24", title: "Stardrop Cafe",              time: "22:00 – 25:00", tag: "CHILL"  as Tag, note: "チル農業配信" },
    { day: "FRI", dateLabel: "04.25", title: "ARENA CODE 7 新作",          time: "21:00 – 01:00", tag: "FPS"    as Tag, note: "しんさく初見、絶対さけぶ" },
    { day: "SAT", dateLabel: "04.26", title: "コラボ カスタム",            time: "20:00 – 23:00", tag: "COLLAB" as Tag, note: "リスナー参加型" },
    { day: "SUN", dateLabel: "04.27", title: "MEMBER ROOM",                time: "19:00 – 22:00", tag: "MEMBER" as Tag, note: "メン限、ゆる雑談" },
  ] as StageEntry[],

  archive: [
    { id: "v01", title: "VALORIS ランクマ、レディアント帯キープ",     date: "2026.04.19", duration: "3:42:18", views: "128K", tag: "FPS"    as Tag, accentKey: "cyan"    as const },
    { id: "v02", title: "APEX スクリム、今週の反省会",                 date: "2026.04.17", duration: "1:28:04", views: "64K",  tag: "FPS"    as Tag, accentKey: "magenta" as const },
    { id: "v03", title: "ARENA CODE 7、初見プレイで叫びまくる",        date: "2026.04.15", duration: "4:05:33", views: "212K", tag: "FPS"    as Tag, accentKey: "yellow"  as const },
    { id: "v04", title: "Stardrop Cafe、農業するだけのやつ",           date: "2026.04.13", duration: "2:58:51", views: "42K",  tag: "CHILL"  as Tag, accentKey: "green"   as const },
    { id: "v05", title: "深夜雑談、ラーメン食べながら",                date: "2026.04.11", duration: "1:52:22", views: "88K",  tag: "TALK"   as Tag, accentKey: "cyan"    as const },
    { id: "v06", title: "VALORIS カスタム、リスナーとコーチング",       date: "2026.04.09", duration: "2:12:08", views: "56K",  tag: "FPS"    as Tag, accentKey: "magenta" as const },
    { id: "v07", title: "ホラーゲーム耐久、4時間",                     date: "2026.04.06", duration: "4:12:44", views: "94K",  tag: "FPS"    as Tag, accentKey: "yellow"  as const },
    { id: "v08", title: "歌枠 vol.12、新曲披露",                      date: "2026.04.03", duration: "2:58:00", views: "72K",  tag: "MUSIC"  as Tag, accentKey: "green"   as const },
    { id: "v09", title: "コラボ配信、朝まで語る",                     date: "2026.03.29", duration: "4:10:22", views: "104K", tag: "COLLAB" as Tag, accentKey: "cyan"    as const },
    { id: "v10", title: "メン限、延長戦",                             date: "2026.03.24", duration: "1:42:10", views: "6K",   tag: "MEMBER" as Tag, accentKey: "magenta" as const },
    { id: "v11", title: "朝活、コーヒー淹れながら雑談",                date: "2026.03.22", duration: "1:18:42", views: "22K",  tag: "TALK"   as Tag, accentKey: "yellow"  as const },
    { id: "v12", title: "リスナー参加カスタム、わいわい",               date: "2026.03.18", duration: "3:56:14", views: "38K",  tag: "COLLAB" as Tag, accentKey: "green"   as const },
  ] as VodEntry[],

  tickers: [
    { label: "NEW HI-SCORE!", rotate: -5, color: "yellow" as const },
    { label: "NEW CHALLENGER →", rotate: 4, color: "magenta" as const },
    { label: "★ 1UP GRANTED", rotate: -3, color: "cyan" as const },
  ],
};

export const PALETTE = {
  bg: "#0a0818",
  panel: "#120e28",
  panelDark: "#1a0a3a",
  panelBorder: "#5a3e8f",
  panelBorderDim: "#2a1f4a",
  ink: "#f5f0ff",
  inkDim: "#b9a5e8",
  inkFaint: "#7a6fa8",
  cyan: "#00f0ff",
  magenta: "#ff3d96",
  yellow: "#ffe066",
  green: "#80ff72",
};

export const ACCENTS = [PALETTE.cyan, PALETTE.magenta, PALETTE.yellow, PALETTE.green];

export const ACCENT_MAP: Record<VodEntry["accentKey"], string> = {
  cyan: PALETTE.cyan,
  magenta: PALETTE.magenta,
  yellow: PALETTE.yellow,
  green: PALETTE.green,
};

export const TAG_COLOR: Record<Tag, string> = {
  FPS: PALETTE.cyan,
  RPG: PALETTE.magenta,
  CHILL: PALETTE.green,
  TALK: PALETTE.cyan,
  MUSIC: PALETTE.yellow,
  COLLAB: PALETTE.magenta,
  MEMBER: PALETTE.green,
  OFF: PALETTE.panelBorder,
};

export const FONTS = {
  pixel: "'Press Start 2P', monospace",
  dot: "'DotGothic16', 'VT323', monospace",
  term: "'VT323', 'JetBrains Mono', monospace",
  body: "'DotGothic16', 'Zen Kaku Gothic New', sans-serif",
};
