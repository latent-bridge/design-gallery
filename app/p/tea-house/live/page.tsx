import Link from "next/link";
import { TEA, PALETTE, FONTS } from "./data";
import {
  TrackedLabel,
  MinchoHeadline,
  LineButton,
  VerticalStamp,
  SeasonalPhoto,
  CategoryMark,
  ItemCard,
  SectionTitle,
} from "./components";

export default function TeaHouseHomePage() {
  return (
    <main className="max-w-[1280px] mx-auto px-5 md:px-12">
      <Hero />
      <TodayMenu />
      <SeasonalLetter />
      <RecentItems />
      <Letterbox />
    </main>
  );
}

// ─── HERO ─── faithful to original: 2-col with kanji eyebrow + massive 静かに、お茶でも。
function Hero() {
  return (
    <section className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
      <div>
        <div className="mb-4">
          <TrackedLabel size={11} tracking={8}>
            {TEA.streamer.erarabel}
          </TrackedLabel>
          <span
            style={{
              marginLeft: 10,
              fontSize: 11,
              letterSpacing: 8,
              color: PALETTE.espresso,
            }}
          >
            · {TEA.streamer.season}
          </span>
        </div>

        <MinchoHeadline size="xl">
          静かに、
          <br />
          お茶でも。
        </MinchoHeadline>

        <p
          className="text-[13px] md:text-[14px] mt-6 md:mt-7"
          style={{
            color: PALETTE.inkFaint,
            lineHeight: 2,
            maxWidth: 400,
          }}
        >
          {TEA.streamer.tagline}
        </p>

        <div className="mt-7 flex gap-3 flex-wrap">
          <LineButton href="/p/tea-house/live/schedule">本 日 の 配 信 →</LineButton>
          <LineButton href="/p/tea-house/live/archive" filled>
            お 品 を 見 る
          </LineButton>
        </div>
      </div>

      <div className="relative">
        <SeasonalPhoto label="季 節 の 写 真" aspect="4 / 5" />
        <div
          className="absolute top-4 right-4"
          style={{ boxShadow: "0 4px 12px rgba(42,34,24,0.15)" }}
        >
          <VerticalStamp>
            {TEA.streamer.erarabel} {TEA.streamer.monthKanji}
          </VerticalStamp>
        </div>
        {/* small thumbnails strip */}
        <div className="grid grid-cols-3 gap-1 mt-3">
          <SeasonalPhoto label="" aspect="5 / 4" style={{ background: `${PALETTE.cream}` }} />
          <SeasonalPhoto label="" aspect="5 / 4" style={{ background: `${PALETTE.cream}` }} />
          <SeasonalPhoto label="" aspect="5 / 4" style={{ background: `${PALETTE.cream}` }} />
        </div>
      </div>
    </section>
  );
}

// ─── TODAY MENU ─── "本日のお品書き"
function TodayMenu() {
  const { today } = TEA;
  return (
    <section className="py-8 md:py-14">
      <SectionTitle eyebrow="本 日 の お 品 書 き" title="今宵の一品" />
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-start">
        <div>
          <div className="mb-3">
            <TrackedLabel size={10} tracking={4} color={PALETTE.inkFaint}>
              {today.dateLabel}
            </TrackedLabel>
          </div>
          <h3
            className="text-[28px] md:text-[38px]"
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 500,
              color: PALETTE.ink,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {today.dishName}
          </h3>
          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <CategoryMark category={today.category} />
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                color: PALETTE.inkMuted,
                letterSpacing: 2,
              }}
            >
              {today.time}
            </span>
          </div>
          <p
            className="mt-5 md:mt-6 text-[13px] md:text-[14px]"
            style={{
              color: PALETTE.inkMuted,
              lineHeight: 2,
              maxWidth: 480,
            }}
          >
            {today.note}
          </p>
          <div className="mt-6">
            <LineButton href="/p/tea-house/live/schedule">
              週 の 便 り →
            </LineButton>
          </div>
        </div>

        <div
          className="hidden md:flex items-center justify-center"
          style={{ minHeight: 240 }}
        >
          <SeasonalPhoto label="今 宵 の 席" aspect="3 / 4" />
        </div>
      </div>
    </section>
  );
}

// ─── SEASONAL LETTER (schedule preview) ─── "季節の便り"
function SeasonalLetter() {
  return (
    <section className="py-8 md:py-14">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6 md:mb-8">
        <div>
          <TrackedLabel size={10} tracking={6} color={PALETTE.espresso}>
            季 節 の 便 り
          </TrackedLabel>
          <h2
            className="text-[22px] md:text-[28px] mt-2"
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 500,
              color: PALETTE.ink,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            今 週 の お 便 り
          </h2>
        </div>
        <Link
          href="/p/tea-house/live/schedule"
          style={{
            fontSize: 12,
            letterSpacing: 3,
            color: PALETTE.espresso,
            textDecoration: "none",
            borderBottom: `1px solid ${PALETTE.espresso}`,
            paddingBottom: 2,
          }}
        >
          す べ て 見 る →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2px_1fr] gap-0">
        <div
          className="hidden md:block"
          style={{ background: PALETTE.espresso, width: 2 }}
        />
        <div>
          {TEA.schedule.slice(0, 5).map((s, i) => {
            const isOff = s.category === "休";
            return (
              <div
                key={s.day}
                className="grid grid-cols-[48px_1fr_auto] gap-3 md:gap-6 items-baseline py-3 md:py-4"
                style={{
                  borderBottom:
                    i === 4 ? "none" : `1px dotted ${PALETTE.inkSoft}`,
                  paddingLeft: "1rem",
                  opacity: isOff ? 0.5 : 1,
                }}
              >
                <div
                  style={{
                    fontFamily: FONTS.serif,
                    fontSize: 24,
                    fontWeight: 500,
                    color: PALETTE.espresso,
                    lineHeight: 1,
                  }}
                >
                  {s.kanjiDay}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: FONTS.serif,
                      fontSize: 16,
                      color: PALETTE.ink,
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      textDecoration: isOff ? "line-through" : "none",
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: PALETTE.inkFaint,
                      marginTop: 3,
                      letterSpacing: 2,
                    }}
                  >
                    {s.dateLabel}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 12,
                    color: PALETTE.inkMuted,
                    letterSpacing: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.time}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── RECENT ITEMS ─── archive preview
function RecentItems() {
  const recent = TEA.items.slice(0, 3);
  return (
    <section className="py-8 md:py-14">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6 md:mb-8">
        <div>
          <TrackedLabel size={10} tracking={6} color={PALETTE.espresso}>
            最 近 の お 品
          </TrackedLabel>
          <h2
            className="text-[22px] md:text-[28px] mt-2"
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 500,
              color: PALETTE.ink,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            お 品 の 棚
          </h2>
        </div>
        <Link
          href="/p/tea-house/live/archive"
          style={{
            fontSize: 12,
            letterSpacing: 3,
            color: PALETTE.espresso,
            textDecoration: "none",
            borderBottom: `1px solid ${PALETTE.espresso}`,
            paddingBottom: 2,
          }}
        >
          す べ て 見 る →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {recent.map((i) => (
          <ItemCard key={i.id} item={i} />
        ))}
      </div>
    </section>
  );
}

// ─── LETTERBOX ─── "文箱" fan letters preview
function Letterbox() {
  return (
    <section className="py-8 md:py-14">
      <SectionTitle eyebrow="文 箱" title="お 便 り" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {TEA.letters.map((l, i) => (
          <article
            key={i}
            style={{
              background: PALETTE.paper,
              border: `1px solid ${PALETTE.inkSoft}`,
              padding: "22px 24px",
            }}
          >
            <div
              style={{
                fontFamily: FONTS.serif,
                fontSize: 16,
                fontWeight: 500,
                color: PALETTE.espresso,
                letterSpacing: 2,
              }}
            >
              {l.from} さま より
            </div>
            <div
              style={{
                height: 1,
                background: PALETTE.inkSoft,
                margin: "12px 0",
              }}
            />
            <p
              style={{
                fontSize: 13,
                color: PALETTE.inkMuted,
                lineHeight: 2,
                margin: 0,
              }}
            >
              {l.note}
            </p>
            <div
              className="mt-3"
              style={{
                fontSize: 10,
                letterSpacing: 3,
                color: PALETTE.inkFaint,
              }}
            >
              {l.date}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
