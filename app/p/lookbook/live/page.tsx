import Link from "next/link";
import { LOOKBOOK, PALETTE, FONTS, TONE_FILL } from "./data";
import {
  LookPlate,
  EditorialLink,
  InkButton,
  IssuePagination,
  Eyebrow,
  CategoryMark,
  LookCard,
  EditorialHeading,
} from "./components";

export default function LookbookHomePage() {
  return (
    <main className="max-w-[1320px] mx-auto px-5 md:px-12">
      <Hero />
      <HeroPagination />
      <Index />
      <Featured />
      <About />
    </main>
  );
}

// ─── HERO ─── closely matches the original 3-column spread
function Hero() {
  const looks = LOOKBOOK.looks.slice(0, 3);
  const [l1, l2, l3] = looks;
  return (
    <section className="py-4 md:py-10 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-6 md:min-h-[520px]">
      {/* LEFT column */}
      <div className="flex flex-col gap-3">
        <LookPlate tone={l1.tone} aspect="3 / 4" label={`LOOK ${l1.number}`} />
        <div
          style={{
            fontSize: 11,
            letterSpacing: 1.5,
            color: PALETTE.inkMuted,
            textTransform: "uppercase",
          }}
        >
          {l1.date} · {l1.title}
        </div>
      </div>

      {/* CENTER column - feature */}
      <div className="flex flex-col gap-3">
        <LookPlate tone={l2.tone} aspect="3 / 4" label={`LOOK ${l2.number} — FEATURE`} />
        <div
          className="flex items-baseline justify-between"
          style={{
            fontSize: 11,
            letterSpacing: 1.5,
            color: PALETTE.inkMuted,
            textTransform: "uppercase",
          }}
        >
          <span>{l2.caption ?? l2.title}</span>
          <span style={{ color: PALETTE.ink, fontWeight: 600 }}>
            N°{l2.number}
          </span>
        </div>
      </div>

      {/* RIGHT column - image + copy */}
      <div className="flex flex-col gap-5 md:gap-6 justify-between">
        <LookPlate tone={l3.tone} aspect="4 / 3" label={`LOOK ${l3.number}`} />
        <div>
          <Eyebrow>{LOOKBOOK.streamer.issue} · LOOKBOOK</Eyebrow>
          <h1
            className="text-[32px] md:text-[40px] lg:text-[46px]"
            style={{
              fontFamily: FONTS.body,
              fontWeight: 300,
              letterSpacing: -1.2,
              lineHeight: 1,
              margin: "8px 0 0",
              whiteSpace: "pre-line",
              color: PALETTE.ink,
            }}
          >
            {LOOKBOOK.heroHeadline}
          </h1>
          <p
            className="text-[12px] md:text-[13px] mt-4"
            style={{
              color: PALETTE.inkMuted,
              lineHeight: 1.65,
              maxWidth: 320,
            }}
          >
            {LOOKBOOK.heroBio}
          </p>
          <div className="mt-5 flex gap-4 items-center flex-wrap">
            <InkButton href="/p/lookbook/live/archive">VIEW SET</InkButton>
            <EditorialLink href="/p/lookbook/live/schedule">
              SCHEDULE
            </EditorialLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPagination() {
  return (
    <div className="py-4 md:py-6">
      <IssuePagination
        current={1}
        total={parseInt(LOOKBOOK.streamer.total)}
        nextHref="/p/lookbook/live/archive"
      />
    </div>
  );
}

// ─── INDEX ─── the full set as editorial grid
function Index() {
  const items = LOOKBOOK.looks.slice(3, 9); // show six more beyond hero 3
  return (
    <section className="py-10 md:py-14">
      <EditorialHeading eyebrow="CONTENTS · N°001 – N°012" title="The Index" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {items.map((look) => (
          <LookCard key={look.id} look={look} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <EditorialLink href="/p/lookbook/live/archive">
          Full archive
        </EditorialLink>
      </div>
    </section>
  );
}

// ─── FEATURED ─── single large cover treatment
function Featured() {
  const f = LOOKBOOK.featured;
  return (
    <section
      className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-10 items-start"
      style={{ borderTop: `1px solid ${PALETTE.ink}` }}
    >
      <div className="pt-6 md:pt-10">
        <LookPlate tone={f.tone} aspect="4 / 5" label={`FEATURE — N°${f.number}`}>
          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: 18,
              right: 18,
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              color: PALETTE.ink,
              background: "rgba(255,255,255,0.88)",
              padding: "10px 14px",
              fontSize: 10,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontFamily: FONTS.body,
            }}
          >
            <span>{f.date} · {f.duration} · {f.views}</span>
            <CategoryMark category={f.category} />
          </div>
        </LookPlate>
      </div>
      <div className="pt-6 md:pt-10">
        <Eyebrow>COVER STORY</Eyebrow>
        <h2
          className="text-[30px] md:text-[44px]"
          style={{
            fontFamily: FONTS.body,
            fontWeight: 300,
            letterSpacing: -1,
            lineHeight: 1,
            margin: "8px 0 0",
            color: PALETTE.ink,
          }}
        >
          {f.title}
        </h2>
        <p
          className="text-[13px] md:text-[14px] mt-4"
          style={{
            color: PALETTE.inkMuted,
            lineHeight: 1.7,
            maxWidth: 440,
          }}
        >
          {f.bio}
        </p>
        <div className="mt-6 flex gap-4 flex-wrap items-center">
          <InkButton href="/p/lookbook/live/archive">READ THE STORY</InkButton>
          <EditorialLink href="/p/lookbook/live/schedule">
            Upcoming shows
          </EditorialLink>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ─── masthead-style colophon
function About() {
  return (
    <section
      className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      style={{ borderTop: `1px solid ${PALETTE.ink}` }}
    >
      <div>
        <Eyebrow>COLOPHON</Eyebrow>
        <h3
          className="text-[20px] md:text-[24px]"
          style={{
            fontWeight: 300,
            letterSpacing: -0.5,
            margin: "6px 0 0",
          }}
        >
          About the issue
        </h3>
      </div>
      <div
        style={{
          fontSize: 13,
          lineHeight: 1.8,
          color: PALETTE.inkMuted,
        }}
      >
        <p style={{ margin: 0 }}>
          Six nights a week, one small room, one voice. A quiet year on air,
          arranged as a seasonal lookbook — twelve images, twelve stories.
          Issued each spring, each autumn.
        </p>
      </div>
      <div
        style={{
          fontSize: 11,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          color: PALETTE.ink,
          fontFamily: FONTS.body,
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <span style={{ color: PALETTE.inkMuted }}>EDITOR-IN-CHIEF</span>
          <div style={{ marginTop: 4, fontWeight: 500 }}>
            {LOOKBOOK.streamer.name}
          </div>
        </div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ color: PALETTE.inkMuted }}>ISSUE</span>
          <div style={{ marginTop: 4, fontWeight: 500 }}>
            {LOOKBOOK.streamer.issueFull}
          </div>
        </div>
        <div>
          <span style={{ color: PALETTE.inkMuted }}>SET</span>
          <div style={{ marginTop: 4, fontWeight: 500 }}>
            {LOOKBOOK.streamer.total} LOOKS
          </div>
        </div>
      </div>
    </section>
  );
}
