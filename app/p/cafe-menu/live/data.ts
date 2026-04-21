// CAFÉ MENU pattern-local data.
// 本日のメニュー風。温かみ・もてなし。Quicksand + Caveat。茶系パレット。

export type Category =
  | "chatter"
  | "craft"
  | "tune"
  | "guest"
  | "brew"
  | "patron"
  | "closed";

export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: string;
  category: Category;
};

export type HoursEntry = {
  day: string;
  dateLabel: string;
  dishName: string;
  time: string;
  category: Category;
  pairing: string; // "served with..." blurb
  closed?: boolean;
};

export type Special = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  duration: string;
  views: string;
  category: Category;
};

export const CAFE = {
  shop: {
    name: "Streamer Name's café",
    shortName: "SN's café",
    tagline:
      "A warm corner of the internet. Six nights a week, always open-mic, always something brewing.",
    openDays: "6 nights a week",
    openHoursShort: "from 21:00 JST",
    motto: "thanks for stopping by ♡",
  },

  today: {
    dateLabel: "APR 21 · MON",
    openAt: "OPEN 21:00",
    menu: [
      { id: "t1", name: "Just Chatting",  desc: "hot, cozy, 4hrs",    price: "¥0", category: "chatter" as Category },
      { id: "t2", name: "Art Stream",     desc: "with hot milk",      price: "¥0", category: "craft"   as Category },
      { id: "t3", name: "Karaoke Night",  desc: "limited time",       price: "¥0", category: "tune"    as Category },
      { id: "t4", name: "Guest Collab",   desc: "w/ special blend",   price: "¥0", category: "guest"   as Category },
    ] as MenuItem[],
  },

  hours: [
    { day: "mon", dateLabel: "APR 21", dishName: "Just Chatting",      time: "21:00 – 01:00", category: "chatter" as Category, pairing: "served with hot milk + biscuits." },
    { day: "tue", dateLabel: "APR 22", dishName: "closed — resting",   time: "—",              category: "closed"  as Category, pairing: "the shop is quiet today.", closed: true },
    { day: "wed", dateLabel: "APR 23", dishName: "Art Stream",         time: "20:00 – 23:00", category: "craft"   as Category, pairing: "served with filter coffee." },
    { day: "thu", dateLabel: "APR 24", dishName: "First Play",         time: "21:00 – 01:00", category: "brew"    as Category, pairing: "new title tonight — espresso strength." },
    { day: "fri", dateLabel: "APR 25", dishName: "Karaoke Night",      time: "22:00 – 01:00", category: "tune"    as Category, pairing: "served warm. songs on request." },
    { day: "sat", dateLabel: "APR 26", dishName: "Guest Collab",       time: "20:00 – 23:00", category: "guest"   as Category, pairing: "our guest, the secret ingredient." },
    { day: "sun", dateLabel: "APR 27", dishName: "Regulars Only",      time: "19:00 – 22:00", category: "patron"  as Category, pairing: "a smaller room. members, welcome in." },
  ] as HoursEntry[],

  specials: [
    { id: "s01", title: "Late-night conversation, with ramen",     subtitle: "mug: 'good friends'",         date: "2026.04.19", duration: "2:14", views: "128K", category: "chatter" as Category },
    { id: "s02", title: "Sunday morning reset, slow coffee",       subtitle: "pour-over, 2 people",         date: "2026.04.17", duration: "1:28", views: "64K",  category: "chatter" as Category },
    { id: "s03", title: "New album, one long karaoke",             subtitle: "tall glass",                  date: "2026.04.15", duration: "4:05", views: "212K", category: "tune"    as Category },
    { id: "s04", title: "Farm simulator, quiet afternoon",         subtitle: "chamomile blend",             date: "2026.04.13", duration: "2:58", views: "42K",  category: "brew"    as Category },
    { id: "s05", title: "Drawing, mostly listening",               subtitle: "latte + two napkins",         date: "2026.04.11", duration: "1:52", views: "88K",  category: "craft"   as Category },
    { id: "s06", title: "Guest night, the one we laughed at",      subtitle: "a full carafe",               date: "2026.04.09", duration: "2:12", views: "56K",  category: "guest"   as Category },
    { id: "s07", title: "Horror, marathon — four hours",           subtitle: "strong, black",               date: "2026.04.06", duration: "4:12", views: "94K",  category: "brew"    as Category },
    { id: "s08", title: "Song requests, late",                     subtitle: "reserve blend, tall glass",   date: "2026.04.03", duration: "2:58", views: "72K",  category: "tune"    as Category },
    { id: "s09", title: "Collab, until the kitchen closed",        subtitle: "for two",                     date: "2026.03.29", duration: "4:10", views: "104K", category: "guest"   as Category },
    { id: "s10", title: "Regulars only, quiet room",               subtitle: "private table",               date: "2026.03.24", duration: "1:42", views: "6K",   category: "patron"  as Category },
    { id: "s11", title: "Morning routine, fresh pour-over",        subtitle: "short black, two sugars",     date: "2026.03.22", duration: "1:18", views: "22K",  category: "chatter" as Category },
    { id: "s12", title: "New challenger, custom game",             subtitle: "sharing plates",              date: "2026.03.18", duration: "3:56", views: "38K",  category: "guest"   as Category },
  ] as Special[],

  reservations: [
    { from: "r. kojima",    note: "A regular since day one. Brings the quiet.",          date: "4.20" },
    { from: "espresso_fan", note: "Stops in between shifts. Orders the same thing.",     date: "4.19" },
    { from: "mochi",        note: "First visit last week. Said they'd come back. Did.",  date: "4.18" },
    { from: "slow_tempo",   note: "Closes the shop with me most Fridays.",                date: "4.17" },
  ],
};

export const CATEGORY_COLOR: Record<Category, { label: string; color: string; icon: string }> = {
  chatter: { label: "chatter", color: "#8a5a3a", icon: "☕" },
  craft:   { label: "craft",   color: "#6a8a5a", icon: "✎"   },
  tune:    { label: "tune",    color: "#a08060", icon: "♪"   },
  guest:   { label: "guest",   color: "#b07050", icon: "◆"   },
  brew:    { label: "brew",    color: "#a0502a", icon: "◉"   },
  patron:  { label: "patron",  color: "#b08a5a", icon: "✿"   },
  closed:  { label: "closed",  color: "#9a7a5a", icon: "—"   },
};

export const PALETTE = {
  bg: "#f5ead4",
  paper: "#ffffff",
  paperCream: "#fdf6e8",
  ink: "#3d2a1a",
  inkWarm: "#6a4a30",
  inkMuted: "#9a7a5a",
  inkFaint: "rgba(60,40,20,0.45)",
  inkSoft: "rgba(60,40,20,0.15)",
  espresso: "#8a5a3a",
  latte: "#b07050",
  dotted: "#d8c0a0",
};

export const FONTS = {
  body: '"Quicksand", "Inter", system-ui, sans-serif',
  hand: '"Caveat", "Kalam", cursive',
  mono: 'ui-monospace, "JetBrains Mono", monospace',
};
