import Link from "next/link";
import { COLLECTION, PALETTE, FONTS, RARITY_CONFIG } from "./data";
import {
  CollectionCard,
  RarityBadge,
  Counter,
  PixelButton,
  SectionHeader,
} from "./components";

export default function TradingCardHomePage() {
  return (
    <main className="max-w-[1280px] mx-auto px-5 md:px-10">
      <Hero />
      <FeaturedRail />
      <StatsBlock />
      <LatestUnlocks />
      <NextDropCta />
    </main>
  );
}

// ─── HERO ─── closely matches the original TradingCard_D
function Hero() {
  const { streamer } = COLLECTION;
  return (
    <section className="pt-6 md:pt-8 pb-4">
      <h1
        className="text-[44px] md:text-[56px] lg:text-[64px]"
        style={{
          fontFamily: FONTS.body,
          fontWeight: 800,
          letterSpacing: -1,
          color: PALETTE.inkRich,
          lineHeight: 0.95,
          margin: 0,
          whiteSpace: "pre-line",
        }}
      >
        あつめて、{"\n"}ながめて ♡
      </h1>
      <p
        className="mt-4 text-[13px] md:text-[14px] max-w-[460px]"
        style={{ color: PALETTE.inkMuted, lineHeight: 1.7 }}
      >
        {streamer.tagline}
      </p>
      <div className="mt-5 flex gap-3 items-center flex-wrap">
        <PixelButton filled href="/p/trading-card/live/archive">
          NEW CARDS →
        </PixelButton>
        <PixelButton href="/p/trading-card/live/archive">
          COLLECTION 見る
        </PixelButton>
      </div>
    </section>
  );
}

// ─── FEATURED RAIL ─── (the signature card rail from original)
function FeaturedRail() {
  const { featured, nextDrop } = COLLECTION;
  const rotations = [-2, 2, -1, 1, -2, 2];
  return (
    <section className="pt-8 md:pt-12 pb-8 md:pb-12">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-4 md:mb-6">
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
          }}
        >
          ▸ FEATURED DROPS
        </div>
        <div
          className="text-[11px]"
          style={{
            fontFamily: FONTS.mono,
            color: PALETTE.inkMuted,
            letterSpacing: 1,
          }}
        >
          ◂ swipe to see all · NEXT DROP in {nextDrop.timeRemaining}
        </div>
      </div>

      <div
        className="flex gap-3 md:gap-4 overflow-x-auto overflow-y-hidden pb-8 pt-4 -mx-5 md:-mx-10 px-5 md:px-10 scrollbar-thin"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {featured.map((card, i) => (
          <div
            key={card.id}
            style={{ scrollSnapAlign: "start", paddingTop: 8, paddingBottom: 8 }}
          >
            <CollectionCard
              card={card}
              rotate={rotations[i % rotations.length]}
              size="md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── STATS ───
function StatsBlock() {
  const { stats } = COLLECTION;
  const rarities = [
    { key: "SSR", count: stats.ssr, possible: 10 },
    { key: "SR", count: stats.sr, possible: 25 },
    { key: "R", count: stats.r, possible: 50 },
    { key: "N", count: stats.n, possible: 15 },
  ] as const;

  return (
    <section className="py-8 md:py-12">
      <SectionHeader
        eyebrow="COLLECTION PROGRESS"
        title="コレクション状況"
        subtitle="レア度ごとに何枚持っているか。揃えるほど背景がきらきらします。"
      />
      <div
        className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 md:gap-10 items-start"
      >
        {/* Overall */}
        <div
          style={{
            background: "rgba(255,255,255,0.5)",
            border: `2px solid ${PALETTE.ink}`,
            padding: 24,
            boxShadow: "6px 6px 0 rgba(42,26,58,0.12)",
          }}
        >
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 10,
              letterSpacing: 2,
              color: PALETTE.inkMuted,
              marginBottom: 8,
            }}
          >
            TOTAL
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: PALETTE.inkRich,
              lineHeight: 0.95,
              letterSpacing: -1,
            }}
          >
            {stats.unlocked}
            <span
              style={{
                fontSize: 20,
                color: PALETTE.inkMuted,
                fontWeight: 400,
              }}
            >
              {" "}
              / {stats.total}
            </span>
          </div>
          <div
            className="mt-5"
            style={{
              fontSize: 12,
              color: PALETTE.inkMuted,
              lineHeight: 1.7,
            }}
          >
            次のマイルストーンまで{" "}
            <strong style={{ color: PALETTE.ink }}>
              {50 - stats.unlocked}
            </strong>
            枚。50 枚で限定 SSR が解放されます。
          </div>
        </div>

        {/* Rarity breakdown */}
        <div className="flex flex-col gap-4">
          {rarities.map((r) => (
            <div key={r.key}>
              <div className="flex items-center gap-2 mb-1.5">
                <RarityBadge rarity={r.key} />
                <span
                  className="text-[11px]"
                  style={{
                    color: PALETTE.inkMuted,
                    fontFamily: FONTS.mono,
                    letterSpacing: 1,
                  }}
                >
                  {RARITY_CONFIG[r.key].label}
                </span>
              </div>
              <Counter current={r.count} total={r.possible} label="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── LATEST UNLOCKS ───
function LatestUnlocks() {
  const latest = COLLECTION.archive.filter((a) => !a.locked).slice(0, 4);
  const rotations = [-1, 2, -2, 1];
  return (
    <section className="py-8 md:py-12">
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-5">
        <SectionHeader
          eyebrow="LATEST UNLOCKS"
          title="最近あけたカード"
        />
        <Link
          href="/p/trading-card/live/archive"
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            letterSpacing: 1.5,
            color: PALETTE.ink,
            textDecoration: "underline",
            fontWeight: 700,
          }}
        >
          VIEW ALL →
        </Link>
      </div>
      <div
        className="grid gap-4 md:gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        }}
      >
        {latest.map((card, i) => (
          <div
            key={card.id}
            className="flex justify-center"
            style={{ paddingTop: 8, paddingBottom: 8 }}
          >
            <CollectionCard card={card} rotate={rotations[i % rotations.length]} size="sm" />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── NEXT DROP CTA ───
function NextDropCta() {
  const { nextDrop } = COLLECTION;
  return (
    <section className="py-8 md:py-12">
      <div
        className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center"
        style={{
          background: PALETTE.ink,
          color: PALETTE.accentPink,
          padding: "28px 28px",
          border: `2px solid ${PALETTE.ink}`,
          boxShadow: "8px 8px 0 rgba(42,26,58,0.2)",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 10,
              letterSpacing: 3,
              color: PALETTE.accentPink,
              opacity: 0.7,
              marginBottom: 8,
            }}
          >
            ▸ NEXT DROP
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: -0.5,
              lineHeight: 1.1,
            }}
          >
            {nextDrop.timeRemaining} 後に {nextDrop.hint} カード解放
          </div>
          <div
            className="mt-2"
            style={{
              fontSize: 12,
              color: PALETTE.accentPink,
              opacity: 0.7,
              fontFamily: FONTS.mono,
              letterSpacing: 1,
            }}
          >
            NOTIFY ME · CALENDAR · FOLLOW
          </div>
        </div>
        <div>
          <Link
            href="/p/trading-card/live/schedule"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: PALETTE.accentPink,
              color: PALETTE.ink,
              fontFamily: FONTS.mono,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.5,
              border: `2px solid ${PALETTE.accentPink}`,
              boxShadow: "4px 4px 0 rgba(255,255,255,0.15)",
              textDecoration: "none",
            }}
          >
            SET REMINDER →
          </Link>
        </div>
      </div>
    </section>
  );
}
