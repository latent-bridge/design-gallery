import { CAFE, PALETTE, FONTS, CATEGORY_COLOR, type Category } from "../data";
import {
  MenuCard,
  CafeButton,
  CategoryChip,
  HandCaption,
  Eyebrow,
} from "../components";

export default function CafeMenuSchedulePage() {
  return (
    <main className="max-w-[1040px] mx-auto px-5 md:px-10">
      <header className="pt-6 md:pt-10 pb-6 md:pb-8">
        <Eyebrow>hours</Eyebrow>
        <h1
          className="text-[44px] md:text-[64px]"
          style={{
            fontFamily: FONTS.hand,
            fontWeight: 700,
            color: PALETTE.ink,
            lineHeight: 0.95,
            margin: "10px 0 0",
          }}
        >
          this week.
        </h1>
        <p
          className="text-[13px] md:text-[14px] mt-5"
          style={{
            color: "rgba(60,40,20,0.7)",
            lineHeight: 1.75,
            maxWidth: 520,
          }}
        >
          A different dish each night. Tuesdays we rest, but the kettle's
          always close by. Times are JST — come by when it suits.
        </p>
      </header>

      <MenuCard padding={0} offset={4}>
        <div
          className="text-center"
          style={{
            borderBottom: `2px dashed ${PALETTE.latte}`,
            padding: "16px 20px 14px",
          }}
        >
          <HandCaption size={28} color={PALETTE.espresso}>
            ~ the weekly menu ~
          </HandCaption>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              color: PALETTE.latte,
              marginTop: 6,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            APRIL 21 – 27 · SPRING '26
          </div>
        </div>

        {CAFE.hours.map((h, i) => (
          <HoursRow key={h.day} entry={h} first={i === 0} />
        ))}

        <div
          className="text-center"
          style={{
            padding: "16px 20px",
            borderTop: `1px dotted ${PALETTE.dotted}`,
          }}
        >
          <HandCaption size={22} color={PALETTE.espresso}>
            thanks for stopping by ♡
          </HandCaption>
        </div>
      </MenuCard>

      <div className="mt-8 flex gap-3 items-center flex-wrap">
        <CafeButton href="/p/cafe-menu/live">← back to today</CafeButton>
        <CafeButton variant="outline" href="/p/cafe-menu/live/archive">
          past specials
        </CafeButton>
      </div>
    </main>
  );
}

function HoursRow({
  entry,
  first,
}: {
  entry: (typeof CAFE.hours)[number];
  first: boolean;
}) {
  const isClosed = entry.closed === true;
  return (
    <article
      className="grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr_auto] gap-4 md:gap-6 items-start px-5 md:px-8 py-4 md:py-5"
      style={{
        borderTop: first ? "none" : `1px dotted ${PALETTE.dotted}`,
        opacity: isClosed ? 0.55 : 1,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: FONTS.hand,
            fontSize: 28,
            color: PALETTE.espresso,
            fontWeight: 700,
            lineHeight: 1,
            textTransform: "lowercase",
          }}
        >
          {entry.day}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: PALETTE.inkFaint,
            letterSpacing: 1,
            marginTop: 3,
            textTransform: "uppercase",
          }}
        >
          {entry.dateLabel}
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-2 flex-wrap mb-1">
          <h2
            className="text-[17px] md:text-[20px]"
            style={{
              fontFamily: FONTS.body,
              fontWeight: 600,
              color: PALETTE.ink,
              margin: 0,
              textDecoration: isClosed ? "line-through" : "none",
            }}
          >
            {entry.dishName}
          </h2>
          {!isClosed && <CategoryChip category={entry.category} />}
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
          {entry.time}
        </div>
        <p
          style={{
            fontSize: 13,
            color: PALETTE.inkWarm,
            lineHeight: 1.7,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          {entry.pairing}
        </p>
      </div>

      <div
        className="hidden md:flex items-start"
        style={{
          fontFamily: FONTS.hand,
          fontSize: 22,
          color: PALETTE.latte,
          fontWeight: 600,
          alignSelf: "center",
        }}
      >
        {isClosed ? "—" : "¥0"}
      </div>
    </article>
  );
}
