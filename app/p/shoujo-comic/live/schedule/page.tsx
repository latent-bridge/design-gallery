import { SHOUJO, PALETTE, FONTS, ARC_COLOR, type Arc } from "../data";
import {
  ComicPanel,
  SpeechBubble,
  PillButton,
  ChapterTag,
  Sparkle,
  ArcChip,
} from "../components";

export default function ShoujoComicSchedulePage() {
  return (
    <main className="max-w-[1200px] mx-auto px-5 md:px-8">
      <header className="py-8 md:py-12 relative">
        <ChapterTag>THIS WEEK · STORYBOARD</ChapterTag>
        <h1
          className="text-[36px] md:text-[52px] mt-2"
          style={{
            fontWeight: 900,
            color: PALETTE.ink,
            lineHeight: 0.95,
            margin: 0,
            letterSpacing: -1,
          }}
        >
          今週のストーリー。
        </h1>
        <p
          className="mt-4 md:mt-5 text-[13px] md:text-[14px]"
          style={{
            color: PALETTE.inkMuted,
            lineHeight: 1.8,
            maxWidth: 520,
            fontWeight: 500,
          }}
        >
          7 話の展開、月曜から日曜まで。各話のセリフもちょっとだけ。OFF は「休載」、時刻は JST。
        </p>
        <Sparkle
          char="★"
          size={40}
          color={PALETTE.pink}
          style={{ position: "absolute", top: 20, right: 40, transform: "rotate(15deg)" }}
        />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {SHOUJO.schedule.map((day) => (
          <StoryPanel key={day.day} day={day} />
        ))}
      </div>

      <div className="mt-10 flex gap-3 items-center flex-wrap">
        <PillButton href="/p/shoujo-comic/live" variant="outline">
          ← cover
        </PillButton>
        <PillButton href="/p/shoujo-comic/live/archive" variant="filled">
          backlog →
        </PillButton>
      </div>
    </main>
  );
}

function StoryPanel({
  day,
}: {
  day: (typeof SHOUJO.schedule)[number];
}) {
  const isOff = day.off === true;
  return (
    <ComicPanel tone={day.tone} offset={4}>
      <div className="p-4 md:p-5">
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <div className="flex items-baseline gap-2">
            <span
              style={{
                fontSize: 14,
                fontWeight: 900,
                color: PALETTE.pinkDeep,
                letterSpacing: 1,
              }}
            >
              {day.day}
            </span>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: 10,
                color: PALETTE.inkMuted,
                letterSpacing: 1,
              }}
            >
              {day.dateLabel} · {day.episode}
            </span>
          </div>
          {!isOff && <ArcChip arc={day.arc} />}
        </div>
        <h2
          className="text-[20px] md:text-[24px]"
          style={{
            fontWeight: 900,
            color: PALETTE.ink,
            margin: 0,
            lineHeight: 1.15,
            textDecoration: isOff ? "line-through" : "none",
          }}
        >
          {day.title}
        </h2>
        <div
          className="mt-1"
          style={{
            fontSize: 11,
            color: PALETTE.inkMuted,
            fontFamily: FONTS.mono,
            letterSpacing: 1,
          }}
        >
          {day.time}
        </div>
        <div className="mt-3">
          <SpeechBubble size="sm" tone={day.tone === "white" ? "rose" : "white"}>
            「{day.quote}」
          </SpeechBubble>
        </div>
      </div>
    </ComicPanel>
  );
}
