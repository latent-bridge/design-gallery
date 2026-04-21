import { ARCADE, PALETTE, FONTS, ACCENTS, TAG_COLOR, type Tag } from "../data";
import { PixelButton, TagChip } from "../components";

export default function ArcadeSchedulePage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-6 md:py-10">
      <header className="pb-6 md:pb-8">
        <div
          style={{
            fontFamily: FONTS.pixel,
            fontSize: 10,
            color: PALETTE.inkDim,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          &gt;&gt; LOADING SCHEDULE.DAT
        </div>
        <h1
          className="text-[28px] md:text-[40px]"
          style={{
            fontFamily: FONTS.pixel,
            color: PALETTE.ink,
            textShadow: `3px 3px 0 ${PALETTE.cyan}, 6px 6px 0 ${PALETTE.magenta}`,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: 1,
          }}
        >
          STAGE 04.21 – 04.27
        </h1>
        <p
          className="mt-4 md:mt-5"
          style={{
            fontFamily: FONTS.term,
            fontSize: 17,
            color: PALETTE.inkDim,
            lineHeight: 1.7,
            maxWidth: 540,
          }}
        >
          &gt; このしゅうの7ステージ。OFF は SLEEP MODE。時刻は JST。
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-3">
        {ARCADE.schedule.map((d, i) => (
          <StageCard key={d.day} entry={d} index={i} />
        ))}
      </div>

      <div className="mt-10 flex gap-3 flex-wrap items-center">
        <PixelButton href="/p/arcade/live" label="A">
          ← HOME
        </PixelButton>
        <PixelButton href="/p/arcade/live/archive" primary label="C">
          VOD LIBRARY →
        </PixelButton>
      </div>
    </main>
  );
}

function StageCard({
  entry,
  index,
}: {
  entry: (typeof ARCADE.schedule)[number];
  index: number;
}) {
  const isOff = entry.off === true;
  const c = isOff ? PALETTE.panelBorder : ACCENTS[index % ACCENTS.length];
  return (
    <article
      className="md:block grid grid-cols-[42px_1fr_auto] items-center gap-3 md:gap-0"
      style={{
        background: PALETTE.panel,
        border: `2px solid ${c}`,
        padding: 12,
        boxShadow: `3px 3px 0 ${c}`,
        opacity: isOff ? 0.55 : 1,
      }}
    >
      {/* Day header */}
      <div
        className="md:text-center md:border-b md:pb-2 md:mb-2"
        style={{
          borderColor: PALETTE.panelBorder,
          borderStyle: "dashed",
        }}
      >
        <div
          style={{
            fontFamily: FONTS.pixel,
            fontSize: 8,
            color: c,
            letterSpacing: 1.5,
          }}
        >
          {entry.day}
        </div>
        <div
          style={{
            fontFamily: FONTS.pixel,
            fontSize: 14,
            color: PALETTE.ink,
            marginTop: 2,
          }}
        >
          {entry.dateLabel}
        </div>
      </div>

      {/* Body */}
      <div>
        {!isOff ? (
          <>
            <div
              style={{
                fontFamily: FONTS.pixel,
                fontSize: 7,
                color: c,
                letterSpacing: 1.5,
              }}
            >
              {entry.tag}
            </div>
            <div
              className="text-[13px] md:text-[12px]"
              style={{
                fontFamily: FONTS.dot,
                color: PALETTE.ink,
                marginTop: 3,
                lineHeight: 1.35,
              }}
            >
              {entry.title}
            </div>
            <div
              style={{
                fontFamily: FONTS.term,
                fontSize: 14,
                color: PALETTE.inkDim,
                marginTop: 3,
              }}
            >
              {entry.time}
            </div>
            <div
              className="hidden md:block mt-2"
              style={{
                fontFamily: FONTS.term,
                fontSize: 13,
                color: PALETTE.inkFaint,
                lineHeight: 1.5,
              }}
            >
              &gt; {entry.note}
            </div>
          </>
        ) : (
          <div
            style={{
              fontFamily: FONTS.pixel,
              fontSize: 9,
              color: PALETTE.inkFaint,
              textAlign: "center",
              padding: "10px 0",
              letterSpacing: 1.5,
            }}
          >
            -- SLEEP MODE --
          </div>
        )}
      </div>

      {/* Mobile time chip */}
      <div className="md:hidden">
        {!isOff && (
          <TagChip tag={entry.tag} small />
        )}
      </div>
    </article>
  );
}
