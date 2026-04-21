import { LOOKBOOK, PALETTE, FONTS } from "../data";
import {
  Eyebrow,
  CategoryMark,
  LookPlate,
  EditorialLink,
  InkButton,
  EditorialHeading,
} from "../components";

export default function LookbookSchedulePage() {
  return (
    <main className="max-w-[1100px] mx-auto px-5 md:px-12">
      <header className="py-6 md:py-10">
        <Eyebrow>THIS WEEK · SEVEN SHOWS</Eyebrow>
        <h1
          className="text-[36px] md:text-[56px]"
          style={{
            fontFamily: FONTS.body,
            fontWeight: 300,
            letterSpacing: -1.5,
            lineHeight: 0.95,
            color: PALETTE.ink,
            margin: "10px 0 0",
          }}
        >
          The Shows<br />
          <span style={{ color: PALETTE.inkMuted, fontWeight: 300 }}>
            of the week.
          </span>
        </h1>
        <p
          className="text-[12px] md:text-[13px] mt-5 md:mt-6"
          style={{
            color: PALETTE.inkMuted,
            lineHeight: 1.7,
            maxWidth: 520,
          }}
        >
          Seven nights of broadcast, rain or shine. Times are JST.
          Subject to small changes — check{" "}
          <span
            style={{
              borderBottom: `1px solid ${PALETTE.ink}`,
              color: PALETTE.ink,
            }}
          >
            X
          </span>{" "}
          for same-day updates.
        </p>
      </header>

      <div className="flex flex-col">
        {LOOKBOOK.schedule.map((show, i) => (
          <ShowRow key={show.day} show={show} first={i === 0} />
        ))}
      </div>

      <div
        className="mt-12 flex items-center justify-between gap-4 flex-wrap pt-6"
        style={{ borderTop: `1px solid ${PALETTE.ink}` }}
      >
        <InkButton href="/p/lookbook/live">← HOME</InkButton>
        <EditorialLink href="/p/lookbook/live/archive">
          Past issues
        </EditorialLink>
      </div>
    </main>
  );
}

function ShowRow({
  show,
  first,
}: {
  show: (typeof LOOKBOOK.schedule)[number];
  first: boolean;
}) {
  const isOff = show.off === true;
  return (
    <article
      className="grid grid-cols-[50px_1fr] md:grid-cols-[80px_180px_1fr_auto] gap-3 md:gap-6 py-5 md:py-6 items-start"
      style={{
        borderBottom: `1px solid ${PALETTE.ink}`,
        borderTop: first ? `1px solid ${PALETTE.ink}` : undefined,
        opacity: isOff ? 0.5 : 1,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
            fontFamily: FONTS.mono,
          }}
        >
          N°{show.dayNumber}
        </div>
        <div
          className="text-[20px] md:text-[28px]"
          style={{
            fontWeight: 300,
            letterSpacing: -0.5,
            color: PALETTE.ink,
            marginTop: 4,
            lineHeight: 1,
          }}
        >
          {show.day}
        </div>
        <div
          className="hidden md:block mt-1"
          style={{
            fontSize: 10,
            letterSpacing: 1.5,
            color: PALETTE.inkMuted,
            fontFamily: FONTS.mono,
            textTransform: "uppercase",
          }}
        >
          {show.dateLabel}
        </div>
      </div>

      <div className="hidden md:block">
        <LookPlate tone={isOff ? "light" : "cold"} aspect="4 / 3" />
      </div>

      <div className="col-span-2 md:col-span-1 md:pt-2">
        <div className="flex items-baseline gap-3 flex-wrap mb-2">
          <h2
            className="text-[20px] md:text-[28px]"
            style={{
              fontFamily: FONTS.body,
              fontWeight: 300,
              letterSpacing: -0.5,
              color: PALETTE.ink,
              margin: 0,
              textDecoration: isOff ? "line-through" : "none",
            }}
          >
            {show.title}
          </h2>
          {!isOff && <CategoryMark category={show.category} />}
        </div>
        <div
          className="mb-3"
          style={{
            fontSize: 11,
            letterSpacing: 1.5,
            color: PALETTE.inkMuted,
            fontFamily: FONTS.mono,
            textTransform: "uppercase",
          }}
        >
          {show.time}
        </div>
        <p
          style={{
            fontSize: 13,
            color: PALETTE.inkMuted,
            lineHeight: 1.7,
            margin: 0,
            maxWidth: 420,
          }}
        >
          {show.note}
        </p>
      </div>

      <div className="hidden md:flex items-start pt-2">
        {!isOff && (
          <EditorialLink href="/p/lookbook/live" size="sm">
            Notify me
          </EditorialLink>
        )}
      </div>
    </article>
  );
}
