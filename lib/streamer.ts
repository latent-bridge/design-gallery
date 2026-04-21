export type Streamer = {
  name: string;
  handle: string;
  tagline: string;
  schedule: { day: string; time: string; title: string; cat: string }[];
  goods: { name: string; price: string; tag: string }[];
};

export const STREAMER: Streamer = {
  name: "Streamer Name",
  handle: "@handle",
  tagline: "配信者ファンサイトデザイン案のプレースホルダ。",
  schedule: [
    { day: "MON", time: "21:00", title: "Just Chatting", cat: "Talk" },
    { day: "TUE", time: "20:00", title: "Art Stream", cat: "Creative" },
    { day: "WED", time: "—", title: "Off", cat: "—" },
    { day: "THU", time: "21:00", title: "Game Night", cat: "Games" },
    { day: "FRI", time: "22:00", title: "Karaoke", cat: "Music" },
    { day: "SAT", time: "20:00", title: "Collab w/ Guest", cat: "Collab" },
    { day: "SUN", time: "19:00", title: "Member Only", cat: "Member" },
  ],
  goods: [
    { name: "Acrylic Stand", price: "¥2,800", tag: "New" },
    { name: "Logo Tee", price: "¥3,500", tag: "" },
    { name: "Sticker Set", price: "¥800", tag: "" },
    { name: "Mug Cup", price: "¥2,200", tag: "Limited" },
  ],
};
