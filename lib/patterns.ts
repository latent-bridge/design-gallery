export type PatternMeta = {
  slug: string;
  number: number;
  name: string;
  direction: string;
  target: string;
  lang: string;
  row: 1 | 2 | 3;
  status: "coming-soon" | "in-progress" | "done";
};

export const PATTERNS: readonly PatternMeta[] = [
  {
    slug: "pastel-diary",
    number: 1,
    name: "PASTEL DIARY",
    direction: "やわらかい日記帳。手書き・写真・付箋。",
    target: "国内・女性ファン層中心",
    lang: "JP",
    row: 1,
    status: "done",
  },
  {
    slug: "trading-card",
    number: 2,
    name: "TRADING CARD",
    direction: "アーカイブをコレクションカード化。レア度とキラ加工。",
    target: "収集癖・古参ファン",
    lang: "JP",
    row: 1,
    status: "done",
  },
  {
    slug: "mochi-house",
    number: 3,
    name: "MOCHI HOUSE / もちもち",
    direction: "ひらがな多用・ゆるカワ MAX。もちうさ・雲・付箋・手書き。",
    target: "国内・ゆるカワ / 親近感重視",
    lang: "JP",
    row: 1,
    status: "done",
  },
  {
    slug: "lookbook",
    number: 4,
    name: "LOOKBOOK",
    direction: "ファッションブランド風。写真が主役、Helvetica。",
    target: "アパレル寄り・洗練",
    lang: "EN",
    row: 1,
    status: "done",
  },
  {
    slug: "notebook",
    number: 5,
    name: "NOTEBOOK / ノート",
    direction: "学生のルーズリーフ。手書き・スタンプカード・自己紹介。",
    target: "親近感・物語性重視",
    lang: "JP",
    row: 1,
    status: "done",
  },
  {
    slug: "arcade",
    number: 6,
    name: "ARCADE / 筐体",
    direction: "アーケード筐体 + neon CRT。物理デバイス感 × 中立 neutral ゲーミング。",
    target: "レトロゲーム親和・男女中立・Z 世代",
    lang: "JP/EN",
    row: 2,
    status: "done",
  },
  {
    slug: "cafe-menu",
    number: 7,
    name: "CAFÉ MENU",
    direction: "本日のメニュー風。温かみ・もてなしの比喩。",
    target: "日常系・居心地派",
    lang: "JP/EN",
    row: 2,
    status: "coming-soon",
  },
  {
    slug: "tea-house",
    number: 8,
    name: "TEA HOUSE / 和",
    direction: "和モダン。縦書き・明朝・落ち着いた間。",
    target: "国内・和モダン好み",
    lang: "JP",
    row: 2,
    status: "coming-soon",
  },
  {
    slug: "shoujo-comic",
    number: 9,
    name: "SHOUJO COMIC",
    direction: "少女漫画のコマ割り＋フキダシ。",
    target: "オタク親和 / 元気系",
    lang: "JP",
    row: 2,
    status: "coming-soon",
  },
  {
    slug: "polaroid-wall",
    number: 10,
    name: "POLAROID WALL",
    direction: "コルクボードに写真をピン留め。思い出アーカイブ風。",
    target: "長期ファン・記念アルバム",
    lang: "EN",
    row: 2,
    status: "coming-soon",
  },
  {
    slug: "chat-dm",
    number: 11,
    name: "CHAT / DM",
    direction: "配信者との個人チャット画面。ふきだし形式の導線。",
    target: "距離の近さ重視・若年層",
    lang: "JP",
    row: 3,
    status: "coming-soon",
  },
  {
    slug: "luna",
    number: 12,
    name: "LUNA / SURREAL",
    direction: "夜空・月・詩的。幻想的なセリフ体。",
    target: "夜型・ムード派",
    lang: "EN",
    row: 3,
    status: "coming-soon",
  },
  {
    slug: "depato",
    number: 13,
    name: "DEPATO / 百貨店",
    direction: "日本の百貨店広告。赤差し色・明朝・整然とした情報量。",
    target: "国内・クラシック",
    lang: "JP",
    row: 3,
    status: "coming-soon",
  },
  {
    slug: "room",
    number: 14,
    name: "ROOM / お部屋",
    direction: "アイソメのお部屋を探索。家具をクリックして回遊。",
    target: "世界観重視・探索派",
    lang: "JP",
    row: 3,
    status: "coming-soon",
  },
  {
    slug: "french-girl",
    number: 15,
    name: "FRENCH GIRL",
    direction: "パリジェンヌ風ミュート配色・イタリック・控えめ。",
    target: "グローバル・上品",
    lang: "FR/EN",
    row: 3,
    status: "coming-soon",
  },
];

export function findPattern(slug: string): PatternMeta | undefined {
  return PATTERNS.find((p) => p.slug === slug);
}

export function implementedPatterns(): readonly PatternMeta[] {
  return PATTERNS.filter(
    (p) => p.status === "done" || p.status === "in-progress",
  );
}

export function implementedSiblings(slug: string): {
  prev: PatternMeta | null;
  next: PatternMeta | null;
} {
  const impls = implementedPatterns();
  const idx = impls.findIndex((p) => p.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? impls[idx - 1] : null,
    next: idx < impls.length - 1 ? impls[idx + 1] : null,
  };
}
