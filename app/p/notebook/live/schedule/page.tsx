import { NOTEBOOK, PALETTE, FONTS, CATEGORY_COLOR } from "../data";
import {
  HandHeadline,
  MetaHeader,
  SectionMarker,
  DoodleButton,
  CategoryChip,
} from "../components";

export default function NotebookSchedulePage() {
  return (
    <main
      className="max-w-[1000px] mx-auto pr-5 md:pr-10 pb-10"
      style={{ paddingLeft: "max(28px, 130px)" }}
    >
      <header className="pt-6 md:pt-10 pb-6 md:pb-8">
        <MetaHeader
          items={[
            ["SUBJECT", "じかんわり"],
            ["WEEK", "4.21 – 4.27"],
            ["CLASS", NOTEBOOK.student.className],
          ]}
        />
        <HandHeadline size="lg">こんしゅうの じかんわり。</HandHeadline>
        <p
          style={{
            fontFamily: FONTS.hand,
            fontSize: 16,
            color: PALETTE.inkMuted,
            lineHeight: 1.7,
            marginTop: 10,
            maxWidth: 560,
          }}
        >
          げつようから にちようまでの ぜんぶの よてい。OFF の日は おやすみ だよ。
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {NOTEBOOK.schedule.map((s, i) => (
          <LessonRow key={s.day} lesson={s} index={i} />
        ))}
      </div>

      <div className="mt-10 flex gap-3 items-center flex-wrap">
        <DoodleButton href="/p/notebook/live" color={PALETTE.red}>
          ← ひょうしに もどる
        </DoodleButton>
        <DoodleButton
          href="/p/notebook/live/archive"
          color={PALETTE.yellow}
          filled
        >
          ぺーじを みる
        </DoodleButton>
      </div>
    </main>
  );
}

function LessonRow({
  lesson,
  index,
}: {
  lesson: (typeof NOTEBOOK.schedule)[number];
  index: number;
}) {
  const isOff = lesson.off === true;
  const catColor = CATEGORY_COLOR[lesson.category].color;

  return (
    <article
      className="grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr_auto] gap-3 md:gap-6 items-start py-3 md:py-4 px-3 md:px-5"
      style={{
        background: PALETTE.paper,
        border: `1.5px solid ${PALETTE.inkFaint}`,
        borderLeft: `5px solid ${isOff ? PALETTE.inkFaint : catColor}`,
        boxShadow: "1px 2px 4px rgba(0,0,0,0.04)",
        opacity: isOff ? 0.55 : 1,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: FONTS.headline,
            fontSize: 32,
            color: isOff ? PALETTE.inkFaint : catColor,
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          {lesson.weekday}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: PALETTE.inkMuted,
            letterSpacing: 0.5,
            marginTop: 3,
          }}
        >
          {lesson.dateLabel}
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-2 flex-wrap mb-1">
          <h2
            style={{
              fontFamily: FONTS.hand,
              fontSize: 22,
              fontWeight: 700,
              color: PALETTE.ink,
              margin: 0,
              textDecoration: isOff ? "line-through" : "none",
            }}
          >
            ☆ {lesson.title} {lesson.emoji}
          </h2>
          {!isOff && <CategoryChip category={lesson.category} />}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            color: PALETTE.inkMuted,
            letterSpacing: 0.5,
            marginBottom: 6,
          }}
        >
          {lesson.time}
        </div>
        <p
          style={{
            fontFamily: FONTS.hand,
            fontSize: 14,
            color: PALETTE.inkMuted,
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          “{lesson.note}”
        </p>
      </div>

      <div
        className="hidden md:flex items-center"
        style={{ minHeight: 60 }}
      >
        {!isOff && (
          <DoodleButton color={CATEGORY_COLOR[lesson.category].color}>
            しらせて
          </DoodleButton>
        )}
      </div>
    </article>
  );
}
