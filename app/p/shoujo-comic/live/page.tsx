import Link from "next/link";
import { SHOUJO, PALETTE, FONTS, ARC_COLOR } from "./data";
import {
  ComicPanel,
  SpeechBubble,
  Sparkle,
  RadialLines,
  PillButton,
  ChapterTag,
  EpisodeCard,
  SectionHeader,
  ArcChip,
} from "./components";

export default function ShoujoComicHomePage() {
  return (
    <main className="max-w-[1280px] mx-auto px-5 md:px-8 relative">
      <RadialLines originX="80%" originY="20%" />
      <ComicHeroGrid />
      <RecentChapters />
      <ReaderMail />
      <NextIssueCta />
    </main>
  );
}

// ─── HERO ─── 4-panel manga grid
function ComicHeroGrid() {
  const { heroine, tonight, schedule } = SHOUJO;
  const thisWeek = schedule.filter((s) => !s.off).slice(0, 4);

  return (
    <section
      className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-[2fr_1.2fr] md:grid-rows-[1.4fr_1fr] gap-3 md:gap-4 relative"
      style={{ minHeight: 520 }}
    >
      {/* Panel 1: Main portrait with speech bubble + sparkles */}
      <ComicPanel tone="white" offset={6} style={{ overflow: "hidden" }}>
        <div
          style={{
            width: "100%",
            aspectRatio: "3 / 2",
            background: `repeating-linear-gradient(135deg, ${PALETTE.panelRose}, ${PALETTE.panelRose} 16px, rgba(26,10,21,0.05) 16px, rgba(26,10,21,0.05) 32px)`,
            position: "relative",
            minHeight: 260,
          }}
        >
          <div
            className="absolute"
            style={{ top: 30, left: 26 }}
          >
            <SpeechBubble size="lg" tone="white">
              {heroine.speechBubble}
            </SpeechBubble>
          </div>
          <Sparkle
            char="★ ✦ ☆"
            size={26}
            style={{ position: "absolute", top: 50, right: 32, color: PALETTE.pink }}
          />
          <Sparkle
            char="✧"
            size={20}
            style={{ position: "absolute", top: 150, right: 70, color: PALETTE.pink }}
          />
          <Sparkle
            char="❀"
            size={24}
            style={{ position: "absolute", bottom: 40, right: 40, color: PALETTE.pink }}
          />
          <div
            className="absolute bottom-3 left-3"
            style={{
              fontFamily: FONTS.mono,
              fontSize: 10,
              color: PALETTE.inkFaint,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              padding: "2px 6px",
              background: "rgba(255,255,255,0.85)",
            }}
          >
            COVER · SPRING ISSUE
          </div>
        </div>
      </ComicPanel>

      {/* Panel 2: Chapter intro (pink) */}
      <ComicPanel tone="rose" offset={6}>
        <div
          className="p-5 md:p-6 h-full flex flex-col justify-center"
          style={{ minHeight: 260 }}
        >
          <ChapterTag>{heroine.chapter}</ChapterTag>
          <h1
            className="text-[30px] md:text-[40px] mt-2"
            style={{
              fontWeight: 900,
              color: PALETTE.ink,
              lineHeight: 0.95,
              margin: 0,
              letterSpacing: -0.5,
            }}
          >
            {heroine.name}
            <br />
            <span
              className="text-[20px] md:text-[26px]"
              style={{ color: PALETTE.pink, fontWeight: 900 }}
            >
              〜{heroine.subtitle}〜
            </span>
          </h1>
          <p
            className="text-[12px] md:text-[13px] mt-4"
            style={{
              color: PALETTE.inkMuted,
              lineHeight: 1.7,
              fontWeight: 500,
              whiteSpace: "pre-line",
            }}
          >
            {heroine.bio}
          </p>
        </div>
      </ComicPanel>

      {/* Panel 3: This week's story (bottom-left) */}
      <ComicPanel tone="white" offset={6}>
        <div className="p-4 md:p-5">
          <div
            className="pb-2 mb-3"
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: PALETTE.pinkDeep,
              borderBottom: `2px solid ${PALETTE.ink}`,
              letterSpacing: 1,
            }}
          >
            今週のストーリー
          </div>
          <div className="flex flex-col gap-1.5">
            {thisWeek.map((d) => (
              <div
                key={d.day}
                className="flex items-baseline justify-between gap-2"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: PALETTE.ink,
                }}
              >
                <span>
                  <span style={{ color: PALETTE.pinkDeep, fontWeight: 700 }}>
                    {d.day}
                  </span>{" "}
                  · {d.title}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: ARC_COLOR[d.arc],
                    fontWeight: 700,
                  }}
                >
                  {d.arc.replace("編", "")}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2" style={{ borderTop: `1px dashed ${PALETTE.inkSoft}` }}>
            <Link
              href="/p/shoujo-comic/live/schedule"
              style={{
                fontSize: 11,
                color: PALETTE.pinkDeep,
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              FULL STORY →
            </Link>
          </div>
        </div>
      </ComicPanel>

      {/* Panel 4: Tonight (yellow) */}
      <ComicPanel tone="yellow" offset={6}>
        <div
          className="p-5 h-full flex flex-col items-center justify-center text-center gap-3"
          style={{ minHeight: 180 }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: PALETTE.pinkDeep,
              fontWeight: 700,
            }}
          >
            {tonight.label}
          </div>
          <div
            className="text-[22px] md:text-[26px]"
            style={{ fontWeight: 900, lineHeight: 1.1 }}
          >
            {tonight.time} {tonight.emoji}
          </div>
          <PillButton href="/p/shoujo-comic/live/schedule" variant="filled" size="sm">
            watch ▶
          </PillButton>
        </div>
      </ComicPanel>

    </section>
  );
}

// ─── RECENT CHAPTERS ─── archive preview
function RecentChapters() {
  const recent = SHOUJO.episodes.slice(0, 3);
  return (
    <section className="py-8 md:py-12">
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-5 md:mb-6">
        <SectionHeader chapter="PREVIOUSLY, ON..." title="まえまえ回の ダイジェスト" />
        <Link
          href="/p/shoujo-comic/live/archive"
          style={{
            fontSize: 13,
            color: PALETTE.pinkDeep,
            fontWeight: 700,
            textDecoration: "underline",
            whiteSpace: "nowrap",
          }}
        >
          ぜんぶ見る →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {recent.map((ep) => (
          <EpisodeCard key={ep.id} episode={ep} />
        ))}
      </div>
    </section>
  );
}

// ─── READER MAIL ─── fan letters styled as pink panels
function ReaderMail() {
  return (
    <section className="py-8 md:py-12">
      <SectionHeader chapter="FROM READERS" title="読者さまのお便り" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {SHOUJO.readerMail.map((m, i) => {
          const tones: Array<"rose" | "yellow" | "white"> = ["rose", "yellow", "white"];
          return (
            <ComicPanel key={i} tone={tones[i % tones.length]} offset={4}>
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-2 mb-2">
                  {m.heart && (
                    <Sparkle char="♡" size={18} color={PALETTE.pink} />
                  )}
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 900,
                      color: PALETTE.pinkDeep,
                    }}
                  >
                    {m.from} さんから
                  </span>
                </div>
                <div className="mb-3">
                  <SpeechBubble size="sm" tone="white">
                    {m.message}
                  </SpeechBubble>
                </div>
              </div>
            </ComicPanel>
          );
        })}
      </div>
      <div className="mt-6 text-center">
        <PillButton variant="filled">♡ お便りを書く</PillButton>
      </div>
    </section>
  );
}

// ─── NEXT ISSUE CTA ───
function NextIssueCta() {
  return (
    <section className="py-8 md:py-12">
      <ComicPanel tone="rose" offset={8}>
        <div
          className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center"
        >
          <div>
            <ChapterTag>NEXT CHAPTER</ChapterTag>
            <h2
              className="text-[26px] md:text-[36px] mt-2"
              style={{
                fontWeight: 900,
                color: PALETTE.ink,
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              次回、歌の夜。
            </h2>
            <p
              className="mt-3"
              style={{
                fontSize: 13,
                color: PALETTE.inkMuted,
                lineHeight: 1.7,
                fontWeight: 500,
                maxWidth: 420,
              }}
            >
              金曜日の夜、歌枠 vol.13。新曲 1 曲と、リクエスト受付けます。ぜひ一緒に、夜更かしを♡
            </p>
          </div>
          <div className="flex gap-3 flex-wrap md:flex-col">
            <PillButton href="/p/shoujo-comic/live/schedule" variant="filled">
              full schedule →
            </PillButton>
            <PillButton variant="outline">remind me ♡</PillButton>
          </div>
        </div>
      </ComicPanel>
    </section>
  );
}
