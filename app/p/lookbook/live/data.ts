// LOOKBOOK pattern-local data.
// Monochrome editorial / Helvetica / EN-dominant / photography-first.

export type Category =
  | "TALK"
  | "GAMES"
  | "MUSIC"
  | "CREATIVE"
  | "COLLAB"
  | "MEMBER"
  | "OFF";

export type Tone = "cold" | "warm" | "deep" | "light";

export type Look = {
  id: string;
  number: string;
  title: string;
  date: string;
  duration: string;
  views: string;
  category: Category;
  tone: Tone;
  caption?: string;
};

export type Show = {
  day: string;
  dayNumber: string;
  dateLabel: string;
  title: string;
  time: string;
  category: Category;
  note: string;
  off?: boolean;
};

export const LOOKBOOK = {
  streamer: {
    name: "Streamer Name",
    handle: "@handle",
    issue: "SPRING '26",
    issueFull: "SPRING ISSUE · N°042",
    total: "12",
  },

  heroHeadline: "SIX NIGHTS,\nONE ROOM.",
  heroBio:
    "A quiet year on air, in twelve images. Six nights a week, one small room, one voice. Scroll to see the whole set.",

  featured: {
    number: "02",
    title: "A long conversation about mornings",
    date: "2026.04.19",
    duration: "2:14:03",
    views: "128K",
    category: "TALK" as Category,
    bio:
      "The feature look of the season: a three-hour late-night conversation, recorded quietly, without agenda. Think of it as the cover story.",
    tone: "deep" as Tone,
  },

  looks: [
    { id: "l01", number: "01", title: "Opening Night",            date: "2026.04.21", duration: "3:12", views: "44K", category: "TALK"     as Category, tone: "light" as Tone, caption: "the first show of the week" },
    { id: "l02", number: "02", title: "Mornings",                 date: "2026.04.19", duration: "2:14", views: "128K", category: "TALK"     as Category, tone: "deep"  as Tone, caption: "featured — cover story" },
    { id: "l03", number: "03", title: "Silent Hours",             date: "2026.04.17", duration: "1:52", views: "38K", category: "CREATIVE" as Category, tone: "cold"  as Tone },
    { id: "l04", number: "04", title: "A Song For Everyone",      date: "2026.04.15", duration: "2:58", views: "72K", category: "MUSIC"    as Category, tone: "warm"  as Tone },
    { id: "l05", number: "05", title: "Arena Night",              date: "2026.04.12", duration: "4:05", views: "52K", category: "GAMES"    as Category, tone: "cold"  as Tone },
    { id: "l06", number: "06", title: "Guest Room",               date: "2026.04.09", duration: "3:40", views: "94K", category: "COLLAB"   as Category, tone: "warm"  as Tone },
    { id: "l07", number: "07", title: "Late Drawings",            date: "2026.04.06", duration: "3:14", views: "38K", category: "CREATIVE" as Category, tone: "light" as Tone },
    { id: "l08", number: "08", title: "Afterhours",               date: "2026.04.03", duration: "2:42", views: "14K", category: "MEMBER"   as Category, tone: "deep"  as Tone },
    { id: "l09", number: "09", title: "Routine",                  date: "2026.03.29", duration: "1:18", views: "22K", category: "TALK"     as Category, tone: "warm"  as Tone },
    { id: "l10", number: "10", title: "Horror Night Marathon",    date: "2026.03.24", duration: "4:32", views: "84K", category: "GAMES"    as Category, tone: "deep"  as Tone },
    { id: "l11", number: "11", title: "Karaoke, Long Version",    date: "2026.03.18", duration: "3:04", views: "58K", category: "MUSIC"    as Category, tone: "cold"  as Tone },
    { id: "l12", number: "12", title: "Closing Night",            date: "2026.03.14", duration: "2:24", views: "104K", category: "TALK"    as Category, tone: "light" as Tone, caption: "3rd anniversary show" },
  ] as Look[],

  schedule: [
    { day: "MON", dayNumber: "01", dateLabel: "APR 21", title: "Talk Show",        time: "21:00 — 23:00 JST", category: "TALK"     as Category, note: "Opening night of the new week." },
    { day: "TUE", dayNumber: "02", dateLabel: "APR 22", title: "Off",              time: "—",                  category: "OFF"      as Category, note: "No show today.", off: true },
    { day: "WED", dayNumber: "03", dateLabel: "APR 23", title: "Drawing",          time: "20:00 — 23:00 JST", category: "CREATIVE" as Category, note: "Quiet session, sketching through the night." },
    { day: "THU", dayNumber: "04", dateLabel: "APR 24", title: "First Play",       time: "21:00 — 01:00 JST", category: "GAMES"    as Category, note: "A new title, no spoilers." },
    { day: "FRI", dayNumber: "05", dateLabel: "APR 25", title: "Karaoke Night",    time: "22:00 — 01:00 JST", category: "MUSIC"    as Category, note: "Songs old and new." },
    { day: "SAT", dayNumber: "06", dateLabel: "APR 26", title: "Guest Night",      time: "20:00 — 23:00 JST", category: "COLLAB"   as Category, note: "A conversation with an unannounced guest." },
    { day: "SUN", dayNumber: "07", dateLabel: "APR 27", title: "Members Only",     time: "19:00 — 22:00 JST", category: "MEMBER"   as Category, note: "A quiet closing, members only." },
  ] as Show[],
};

export const CATEGORY_LABEL: Record<Category, string> = {
  TALK: "TALK",
  GAMES: "GAMES",
  MUSIC: "MUSIC",
  CREATIVE: "CREATIVE",
  COLLAB: "COLLAB",
  MEMBER: "MEMBER",
  OFF: "OFF",
};

export const TONE_FILL: Record<Tone, string> = {
  cold: "#ebeae6",
  warm: "#e8e4dc",
  deep: "#b8b5ae",
  light: "#f0efe9",
};

export const PALETTE = {
  bg: "#ffffff",
  ink: "#0a0a0a",
  inkMuted: "rgba(10,10,10,0.55)",
  inkFaint: "rgba(10,10,10,0.35)",
  inkSoft: "rgba(10,10,10,0.1)",
  rule: "#0a0a0a",
  panel: "#fafaf7",
};

export const FONTS = {
  body: '"Helvetica Neue", Helvetica, Arial, "Inter", sans-serif',
  mono: 'ui-monospace, "JetBrains Mono", monospace',
};
