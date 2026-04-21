// TEA HOUSE pattern-local data.
// 和モダン。縦書き・明朝・落ち着いた間。Shippori Mincho + Noto Serif JP。

export type Category =
  | "雑談"
  | "手業"
  | "音曲"
  | "客人"
  | "遊技"
  | "常連"
  | "休";

export type Entry = {
  day: string;
  kanjiDay: string;
  dateLabel: string;
  title: string;
  time: string;
  category: Category;
  note: string;
  off?: boolean;
};

export type Item = {
  id: string;
  title: string;
  date: string;
  duration: string;
  views: string;
  category: Category;
  note: string;
};

export const TEA = {
  streamer: {
    title: "配信者",
    name: "ストリーマー名",
    tagline:
      "配信のお知らせ・日々の記録・ささやかなお品をまとめております。どうぞゆるりとお過ごしくださいませ。",
    erarabel: "令和八年",
    season: "春",
    monthKanji: "弥生", // March (placeholder for design; could be 卯月 April, 皐月 May etc.)
  },

  today: {
    title: "本日の配信",
    dateLabel: "令 和 八 年 四 月 二 十 一 日 · 月",
    dishName: "雑談 — 静かに、お茶でも",
    time: "夜 九時より",
    category: "雑談" as Category,
    note:
      "久しぶりの平日の夜。特別なお品はありませんが、どうぞお気軽にお越しください。",
  },

  schedule: [
    { day: "mon", kanjiDay: "月",       dateLabel: "四 / 二 一", title: "雑談 — お茶でも",        time: "夜 九時",        category: "雑談" as Category, note: "お湯を沸かしておきます。" },
    { day: "tue", kanjiDay: "火",       dateLabel: "四 / 二 二", title: "休 — 休業",               time: "—",              category: "休"   as Category, note: "本日は休業日でございます。", off: true },
    { day: "wed", kanjiDay: "水",       dateLabel: "四 / 二 三", title: "手業 — お絵描き",         time: "夜 八時",        category: "手業" as Category, note: "お気に入りの筆にて、ひと筆ずつ。" },
    { day: "thu", kanjiDay: "木",       dateLabel: "四 / 二 四", title: "遊技 — 新作初見",          time: "夜 九時",        category: "遊技" as Category, note: "初見のお品、ご一緒にいかがでしょうか。" },
    { day: "fri", kanjiDay: "金",       dateLabel: "四 / 二 五", title: "音曲 — 歌の夜",             time: "夜 十時",        category: "音曲" as Category, note: "お気に入りの一節を、静かに。" },
    { day: "sat", kanjiDay: "土",       dateLabel: "四 / 二 六", title: "客人 — お招き",            time: "夜 八時",        category: "客人" as Category, note: "当日までお名前は秘しておきます。" },
    { day: "sun", kanjiDay: "日",       dateLabel: "四 / 二 七", title: "常連 — 限定の部屋",        time: "夜 七時",        category: "常連" as Category, note: "ささやかな、いつもの方々へ。" },
  ] as Entry[],

  items: [
    { id: "i01", title: "深夜の雑談 — ラーメンを肴に",       date: "令和八年 四月十九日", duration: "二時間十四分", views: "一二八千", category: "雑談" as Category, note: "湯気の向こうに、今週の話を。" },
    { id: "i02", title: "朝のお茶 — ゆっくりと",             date: "令和八年 四月十七日", duration: "一時間二十八分", views: "六四千",    category: "雑談" as Category, note: "朝日と共に。" },
    { id: "i03", title: "新曲披露 — 一筆書きの歌",           date: "令和八年 四月十五日", duration: "二時間五十八分", views: "二一二千", category: "音曲" as Category, note: "ひと息で、お聴きくださいませ。" },
    { id: "i04", title: "お絵描き — 筆に任せて",            date: "令和八年 四月十三日", duration: "三時間十四分",   views: "三八千",    category: "手業" as Category, note: "下絵を描き、じっくりと。" },
    { id: "i05", title: "お招き — ゲストと昔話",            date: "令和八年 四月九日",   duration: "四時間十分",     views: "一〇四千", category: "客人" as Category, note: "お互いの昔話を、ぽつりぽつりと。" },
    { id: "i06", title: "新作初見 — 初めての森",            date: "令和八年 四月六日",   duration: "四時間十二分",   views: "九四千",    category: "遊技" as Category, note: "初めての道、迷いながら進みます。" },
    { id: "i07", title: "一節を — 月見ながら",              date: "令和八年 四月三日",   duration: "二時間五十八分", views: "七二千",    category: "音曲" as Category, note: "月の夜に、ひと節。" },
    { id: "i08", title: "常連の間 — 延長の夜",              date: "令和八年 三月二九日", duration: "一時間四十二分", views: "六千",       category: "常連" as Category, note: "いつもの方々と、いつもの話を。" },
    { id: "i09", title: "庭仕事 — のんびりと",              date: "令和八年 三月二四日", duration: "二時間十二分",   views: "二四千",    category: "遊技" as Category, note: "静かな農の日。" },
    { id: "i10", title: "手業 — 下絵から",                 date: "令和八年 三月二十日", duration: "三時間二十四分", views: "九.八千",   category: "手業" as Category, note: "白紙から、ひと筆ずつ。" },
    { id: "i11", title: "朝餐 — 珈琲を淹れながら",         date: "令和八年 三月十八日", duration: "一時間十八分",   views: "一一千",    category: "雑談" as Category, note: "朝の珈琲の香りを添えて。" },
    { id: "i12", title: "客人 — 久しぶりのあの人",         date: "令和八年 三月十四日", duration: "三時間五十六分", views: "三八千",    category: "客人" as Category, note: "久方ぶりのご来客。" },
  ] as Item[],

  letters: [
    { from: "佐 野",  note: "いつも静かな夜を、ありがとうございます。お茶を淹れつつ拝見しております。",              date: "四 / 二 〇" },
    { from: "高 瀬",  note: "先週の歌の夜、心に残っております。またのお便り、楽しみに。",                                date: "四 / 一 八" },
    { from: "青 井",  note: "初めてのお便りです。いつもの空気、好ましく思います。どうぞ無理のないご配信を。",              date: "四 / 一 六" },
  ],
};

export const CATEGORY_COLOR: Record<Category, string> = {
  雑談: "#8a5a3a",
  手業: "#6a7a5a",
  音曲: "#a08060",
  客人: "#b07050",
  遊技: "#7a6a5a",
  常連: "#8a6a8a",
  休:   "#a09a8a",
};

export const PALETTE = {
  bg: "#f4ede0",
  paper: "#ffffff",
  cream: "#e8dfc8",
  ink: "#2a2218",
  inkMuted: "#6a5a40",
  inkFaint: "rgba(42,34,24,0.6)",
  inkSoft: "rgba(42,34,24,0.15)",
  espresso: "#8a5a3a",
  beige: "#c9a878",
  rose: "#d4a89a",
};

export const FONTS = {
  serif: '"Shippori Mincho", "Noto Serif JP", "Hina Mincho", serif',
  body: '"Noto Serif JP", "Shippori Mincho", serif',
  mono: 'ui-monospace, "JetBrains Mono", monospace',
};

// Utility: space characters for 和 letter-tracking feel
// Use sparingly — only for short titles / labels.
export function spaced(str: string, sep = " "): string {
  return str.split("").join(sep);
}
