import { COLLECTION, PALETTE, FONTS, RARITY_CONFIG } from "../data";
import { RarityBadge, SectionHeader } from "../components";

export default function TradingCardSchedulePage() {
  return (
    <main className="max-w-[1040px] mx-auto px-5 md:px-10">
      <header className="pt-6 md:pt-8 pb-8 md:pb-10">
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
            marginBottom: 8,
          }}
        >
          ▸ THIS WEEK · 4.21 – 4.27
        </div>
        <h1
          className="text-[36px] md:text-[48px]"
          style={{
            fontWeight: 800,
            letterSpacing: -1,
            color: PALETTE.inkRich,
            lineHeight: 1,
            margin: 0,
          }}
        >
          今週のドロップ。
        </h1>
        <p
          className="mt-4 text-[13px] md:text-[14px] max-w-[560px]"
          style={{ color: PALETTE.inkMuted, lineHeight: 1.7 }}
        >
          配信があるたび、その回がカード化されて次の日にアンロックされます。レア度はジャンル・記念性・結果で決まります。
        </p>
      </header>

      <div className="flex flex-col gap-3 md:gap-4">
        {COLLECTION.drops.map((drop) => (
          <DropRow key={drop.dayLabel} drop={drop} />
        ))}
      </div>

      <section className="mt-12 md:mt-16">
        <SectionHeader
          eyebrow="RARITY GUIDE"
          title="レア度の決まりかた"
          subtitle="レア度は配信の内容と結果から自動でつきます。"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {(["SSR", "SR", "R", "N"] as const).map((r) => (
            <RarityGuideItem key={r} rarity={r} />
          ))}
        </div>
      </section>
    </main>
  );
}

function DropRow({
  drop,
}: {
  drop: (typeof COLLECTION.drops)[number];
}) {
  const isOff = drop.status === "locked" && drop.rarityHint === "N";
  const isNext = drop.status === "next";
  const rarity = RARITY_CONFIG[drop.rarityHint];

  return (
    <article
      className="grid grid-cols-[54px_1fr] md:grid-cols-[80px_120px_1fr_auto] gap-3 md:gap-5 items-center p-4 md:p-5"
      style={{
        background: isNext
          ? "rgba(255,255,255,0.7)"
          : "rgba(255,255,255,0.4)",
        border: `2px solid ${isNext ? PALETTE.ink : PALETTE.inkSoft}`,
        boxShadow: isNext ? "4px 4px 0 rgba(42,26,58,0.15)" : "none",
        opacity: isOff ? 0.55 : 1,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            fontFamily: FONTS.mono,
            color: PALETTE.inkRich,
            lineHeight: 1,
            letterSpacing: -1,
          }}
        >
          {drop.weekday}
        </div>
        <div
          className="text-[10px] md:text-[11px] mt-1"
          style={{
            fontFamily: FONTS.mono,
            color: PALETTE.inkMuted,
            letterSpacing: 0.5,
          }}
        >
          {drop.dateLabel}
        </div>
      </div>

      <div className="hidden md:flex items-center">
        <div
          style={{
            width: 64,
            height: 90,
            background: isOff ? "#b0a8b8" : rarity.gradient,
            border: `2px solid ${PALETTE.cardBorder}`,
            borderRadius: 6,
            position: "relative",
            transform: "rotate(-2deg)",
            overflow: "hidden",
          }}
        >
          {!isOff && (
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: -10,
                background:
                  "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
                mixBlendMode: "overlay",
              }}
            />
          )}
          <div
            style={{
              position: "absolute",
              top: 4,
              left: 4,
              background: PALETTE.ink,
              color: PALETTE.accentPink,
              fontSize: 8,
              padding: "1px 4px",
              fontFamily: FONTS.mono,
              fontWeight: 700,
            }}
          >
            {drop.rarityHint}
          </div>
        </div>
      </div>

      <div className="col-span-2 md:col-span-1">
        <div className="flex items-baseline gap-3 flex-wrap mb-1">
          <h2
            className="text-[17px] md:text-[20px]"
            style={{
              fontWeight: 700,
              color: PALETTE.inkRich,
              margin: 0,
              textDecoration: isOff ? "line-through" : "none",
            }}
          >
            {drop.title}
          </h2>
          {isNext && (
            <span
              style={{
                fontSize: 9,
                fontFamily: FONTS.mono,
                background: PALETTE.highlight,
                color: "#fff",
                padding: "2px 6px",
                letterSpacing: 1.5,
                fontWeight: 700,
              }}
            >
              NEXT
            </span>
          )}
          {!isOff && <RarityBadge rarity={drop.rarityHint} />}
        </div>
        <div
          className="text-[11px] md:text-[12px]"
          style={{
            fontFamily: FONTS.mono,
            color: PALETTE.inkMuted,
            letterSpacing: 0.5,
          }}
        >
          {drop.time} · {drop.category}
        </div>
        <p
          className="mt-2 text-[12px] md:text-[13px]"
          style={{ color: PALETTE.inkMuted, lineHeight: 1.7 }}
        >
          {drop.note}
        </p>
      </div>

      <div
        className="hidden md:flex items-center justify-center"
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          letterSpacing: 1.5,
          color: PALETTE.inkMuted,
        }}
      >
        {drop.status === "revealed"
          ? "UNLOCKED"
          : drop.status === "next"
            ? "NEXT ⟶"
            : drop.status === "locked" && drop.rarityHint === "N"
              ? "NO CARD"
              : "LOCKED"}
      </div>
    </article>
  );
}

function RarityGuideItem({ rarity }: { rarity: "SSR" | "SR" | "R" | "N" }) {
  const descriptions = {
    SSR: "節目(初配信・周年・記念)や偶然の奇跡。手に入れにくい。",
    SR: "歌枠・コラボ・メン限・初見クリアなど、特別感ある回。",
    R: "通常の配信アーカイブ。ほとんどの回はここ。",
    N: "OFF・短時間・未アーカイブ。コレクション外。",
  };
  const r = RARITY_CONFIG[rarity];
  return (
    <div
      className="flex gap-4 items-start p-4"
      style={{
        background: "rgba(255,255,255,0.5)",
        border: `2px solid ${PALETTE.inkSoft}`,
      }}
    >
      <div
        style={{
          width: 50,
          height: 70,
          background: rarity === "N" ? "#c0c0c0" : r.gradient,
          border: `2px solid ${PALETTE.cardBorder}`,
          borderRadius: 4,
          position: "relative",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {rarity !== "N" && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: -8,
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
              mixBlendMode: "overlay",
            }}
          />
        )}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <RarityBadge rarity={rarity} />
          <span
            style={{
              fontSize: 10,
              fontFamily: FONTS.mono,
              color: PALETTE.inkMuted,
              letterSpacing: 1,
            }}
          >
            {"★".repeat(r.starCount)}
          </span>
        </div>
        <p
          className="mt-2 text-[12px]"
          style={{ color: PALETTE.inkMuted, lineHeight: 1.7 }}
        >
          {descriptions[rarity]}
        </p>
      </div>
    </div>
  );
}
