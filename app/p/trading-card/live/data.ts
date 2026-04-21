// TRADING CARD pattern-local data.
// Each archive becomes a collectable card with rarity.

export type Rarity = "SSR" | "SR" | "R" | "N";

export type Card = {
  id: string;
  title: string;
  date: string;
  rarity: Rarity;
  category: string;
  duration: string;
  views: string;
  tone: "rose" | "sage" | "cream" | "lavender";
  locked?: boolean;
};

export type DropEvent = {
  dayLabel: string;
  dateLabel: string;
  weekday: string;
  title: string;
  time: string;
  rarityHint: Rarity;
  category: string;
  note: string;
  status: "revealed" | "next" | "locked";
};

export const COLLECTION = {
  streamer: {
    name: "Streamer Name",
    handle: "@handle",
    tagline: "配信アーカイブをぜんぶカード化。レア度でキラキラが変わります。",
  },
  stats: {
    unlocked: 42,
    total: 100,
    ssr: 3,
    sr: 12,
    r: 20,
    n: 7,
  },
  nextDrop: {
    timeRemaining: "2d 4h",
    hint: "SR" as Rarity,
  },
  // Featured rail on HOME (top 6)
  featured: [
    { id: "c001", title: "初配信の日",     date: "2021.03.14", rarity: "SSR" as Rarity, category: "milestone", duration: "4:12", views: "128K", tone: "rose" as const },
    { id: "c007", title: "100K 達成",      date: "2023.08.02", rarity: "SR" as Rarity,  category: "milestone", duration: "3:28", views: "94K",  tone: "rose" as const },
    { id: "c012", title: "歌枠 vol.12",    date: "2024.02.10", rarity: "SR" as Rarity,  category: "music",     duration: "2:58", views: "72K",  tone: "lavender" as const },
    { id: "c018", title: "お絵描き",       date: "2024.11.05", rarity: "R"  as Rarity,  category: "creative",  duration: "3:14", views: "38K",  tone: "sage" as const },
    { id: "c024", title: "コラボ配信",     date: "2025.06.18", rarity: "R"  as Rarity,  category: "collab",    duration: "4:05", views: "52K",  tone: "cream" as const },
    { id: "c???", title: "????",          date: "???",         rarity: "N"  as Rarity,  category: "?",         duration: "?",     views: "?",    tone: "lavender" as const, locked: true },
  ] as Card[],
  // Full collection for archive page
  archive: [
    { id: "c001", title: "初配信の日",               date: "2021.03.14", rarity: "SSR" as Rarity, category: "milestone", duration: "4:12", views: "128K", tone: "rose" as const },
    { id: "c002", title: "10K 登録記念",              date: "2021.11.22", rarity: "SSR" as Rarity, category: "milestone", duration: "3:45", views: "88K",  tone: "rose" as const },
    { id: "c003", title: "3周年記念・思い出",         date: "2024.03.14", rarity: "SSR" as Rarity, category: "milestone", duration: "5:02", views: "202K", tone: "rose" as const },
    { id: "c004", title: "誕生日配信 2024",           date: "2024.07.10", rarity: "SR" as Rarity,  category: "event",     duration: "4:20", views: "140K", tone: "cream" as const },
    { id: "c005", title: "メン限・深夜雑談",          date: "2025.01.18", rarity: "SR" as Rarity,  category: "member",    duration: "2:42", views: "6K",   tone: "lavender" as const },
    { id: "c006", title: "歌枠 vol.01",               date: "2022.05.12", rarity: "SR" as Rarity,  category: "music",     duration: "2:14", views: "58K",  tone: "lavender" as const },
    { id: "c007", title: "100K 達成",                 date: "2023.08.02", rarity: "SR" as Rarity,  category: "milestone", duration: "3:28", views: "94K",  tone: "rose" as const },
    { id: "c008", title: "ゲーム初見クリア",          date: "2024.06.14", rarity: "SR" as Rarity,  category: "games",     duration: "4:32", views: "84K",  tone: "sage" as const },
    { id: "c009", title: "朝配信・コーヒー雑談",      date: "2024.08.02", rarity: "R"  as Rarity,  category: "talk",      duration: "1:28", views: "22K",  tone: "cream" as const },
    { id: "c010", title: "ホラーゲーム耐久",          date: "2024.10.12", rarity: "R"  as Rarity,  category: "games",     duration: "4:18", views: "48K",  tone: "sage" as const },
    { id: "c011", title: "カラオケ deep night",       date: "2024.12.08", rarity: "SR" as Rarity,  category: "music",     duration: "2:24", views: "40K",  tone: "lavender" as const },
    { id: "c012", title: "歌枠 vol.12",               date: "2024.02.10", rarity: "SR" as Rarity,  category: "music",     duration: "2:58", views: "72K",  tone: "lavender" as const },
    { id: "c013", title: "深夜雑談、ラーメン食べながら", date: "2026.04.19", rarity: "R"  as Rarity,  category: "talk",     duration: "2:14", views: "12K",  tone: "rose" as const },
    { id: "c014", title: "APEX スクリム振り返り",      date: "2026.04.17", rarity: "R"  as Rarity,  category: "games",     duration: "1:28", views: "34K",  tone: "sage" as const },
    { id: "c015", title: "ARENA CODE 7 初見",         date: "2026.04.15", rarity: "R"  as Rarity,  category: "games",     duration: "4:05", views: "28K",  tone: "sage" as const },
    { id: "c016", title: "Stardrop Cafe 農業",         date: "2026.04.13", rarity: "R"  as Rarity,  category: "games",     duration: "2:58", views: "16K",  tone: "cream" as const },
    { id: "c017", title: "深夜ラーメン雑談 2026",      date: "2026.04.11", rarity: "R"  as Rarity,  category: "talk",      duration: "1:52", views: "18K",  tone: "cream" as const },
    { id: "c018", title: "お絵描き配信",               date: "2024.11.05", rarity: "R"  as Rarity,  category: "creative",  duration: "3:14", views: "38K",  tone: "sage" as const },
    { id: "c019", title: "朝活・読書配信",             date: "2025.03.02", rarity: "R"  as Rarity,  category: "chill",     duration: "1:42", views: "12K",  tone: "cream" as const },
    { id: "c020", title: "リスナー参加カスタム",       date: "2025.10.08", rarity: "R"  as Rarity,  category: "games",     duration: "2:12", views: "24K",  tone: "sage" as const },
    { id: "c021", title: "コラボ、朝まで語る",         date: "2024.09.21", rarity: "R"  as Rarity,  category: "collab",    duration: "4:10", views: "66K",  tone: "cream" as const },
    { id: "c022", title: "ASMR チャレンジ",           date: "2024.04.02", rarity: "R"  as Rarity,  category: "chill",     duration: "1:15", views: "42K",  tone: "lavender" as const },
    { id: "c023", title: "料理配信・餃子作る",         date: "2025.08.15", rarity: "N"  as Rarity,  category: "chill",     duration: "2:02", views: "18K",  tone: "cream" as const },
    { id: "c024", title: "コラボ配信",                 date: "2025.06.18", rarity: "R"  as Rarity,  category: "collab",    duration: "4:05", views: "52K",  tone: "cream" as const },
    { id: "c025", title: "????",                      date: "???",         rarity: "N"  as Rarity,  category: "?",         duration: "?",     views: "?",    tone: "lavender" as const, locked: true },
    { id: "c026", title: "????",                      date: "???",         rarity: "N"  as Rarity,  category: "?",         duration: "?",     views: "?",    tone: "lavender" as const, locked: true },
    { id: "c027", title: "????",                      date: "???",         rarity: "SR" as Rarity,  category: "?",         duration: "?",     views: "?",    tone: "rose" as const, locked: true },
    { id: "c028", title: "????",                      date: "???",         rarity: "SSR" as Rarity, category: "?",         duration: "?",     views: "?",    tone: "rose" as const, locked: true },
  ] as Card[],
  // Drop schedule (upcoming week)
  drops: [
    { dayLabel: "mon", dateLabel: "4.21", weekday: "月", title: "雑談の夜",         time: "21:00 – 23:00", rarityHint: "R"  as Rarity, category: "talk",     note: "アーカイブ化の翌日に R カードとして解放予定。",                   status: "next"    as const },
    { dayLabel: "tue", dateLabel: "4.22", weekday: "火", title: "おやすみの日",      time: "—",             rarityHint: "N"  as Rarity, category: "off",      note: "ノーカード。ぐっすり寝ます。",                                    status: "locked"  as const },
    { dayLabel: "wed", dateLabel: "4.23", weekday: "水", title: "おえかき配信",      time: "20:00 – 23:00", rarityHint: "R"  as Rarity, category: "creative", note: "カード絵を自分で描く回。レア運に期待。",                            status: "locked"  as const },
    { dayLabel: "thu", dateLabel: "4.24", weekday: "木", title: "ゲーム、新作",      time: "21:00 – 01:00", rarityHint: "SR" as Rarity, category: "games",    note: "初見プレイは SR 確定。初クリアなら SSR。",                         status: "locked"  as const },
    { dayLabel: "fri", dateLabel: "4.25", weekday: "金", title: "歌枠 vol.16",       time: "22:00 – 25:00", rarityHint: "SR" as Rarity, category: "music",    note: "歌枠は SR 固定、新曲披露は SSR 昇格。",                             status: "locked"  as const },
    { dayLabel: "sat", dateLabel: "4.26", weekday: "土", title: "コラボ、ゲスト",    time: "20:00 – 23:00", rarityHint: "SR" as Rarity, category: "collab",    note: "ゲスト判明でレア度確定。",                                         status: "locked"  as const },
    { dayLabel: "sun", dateLabel: "4.27", weekday: "日", title: "メン限、延長戦",    time: "19:00 – 22:00", rarityHint: "SR" as Rarity, category: "member",    note: "メン限は SR 以上確定。",                                           status: "locked"  as const },
  ] as DropEvent[],
};

export const RARITY_CONFIG: Record<Rarity, { label: string; gradient: string; starCount: number; glow: string }> = {
  SSR: {
    label: "SSR",
    gradient: "linear-gradient(135deg, #ffd6ff 0%, #ffc0e0 40%, #ffd890 80%, #b0e0ff 100%)",
    starCount: 5,
    glow: "0 10px 30px rgba(255, 120, 200, 0.4)",
  },
  SR: {
    label: "SR",
    gradient: "linear-gradient(135deg, #ffc8dc 0%, #d8b0e8 100%)",
    starCount: 4,
    glow: "0 8px 22px rgba(140, 80, 200, 0.28)",
  },
  R: {
    label: "R",
    gradient: "linear-gradient(135deg, #d8f0d0 0%, #fff0b0 100%)",
    starCount: 3,
    glow: "0 6px 18px rgba(100, 120, 40, 0.22)",
  },
  N: {
    label: "N",
    gradient: "linear-gradient(135deg, #d0d0d0 0%, #a0a0a0 100%)",
    starCount: 1,
    glow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
};

export const PALETTE = {
  bgGradient: "linear-gradient(180deg, #f8e4f0 0%, #d8c0e8 100%)",
  ink: "#2a1a3a",
  inkRich: "#3a1850",
  inkMuted: "rgba(42,26,58,0.65)",
  inkFaint: "rgba(42,26,58,0.45)",
  inkSoft: "rgba(42,26,58,0.12)",
  accentPink: "#ffd6ff",
  accentLilac: "#d8c0e8",
  cardBorder: "#2a1a3a",
  highlight: "#ff7ab8",
};

export const FONTS = {
  body: '"Zen Kaku Gothic New", system-ui, sans-serif',
  mono: 'ui-monospace, "JetBrains Mono", monospace',
};
