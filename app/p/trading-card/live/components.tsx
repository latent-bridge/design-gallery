import Link from "next/link";
import { PALETTE, FONTS, RARITY_CONFIG, type Card, type Rarity } from "./data";

const TONE_FILLS: Record<Card["tone"], string> = {
  rose: "#f0d8d8",
  cream: "#f5ead8",
  sage: "#dde4d6",
  lavender: "#ddd6ea",
};

export function CollectionCard({
  card,
  rotate = 0,
  size = "md",
}: {
  card: Card;
  rotate?: number;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "sm"
      ? { w: 140, h: 210, pad: 8, borderW: 2, titleSize: 11 }
      : size === "lg"
        ? { w: 200, h: 300, pad: 12, borderW: 3, titleSize: 14 }
        : { w: 170, h: 250, pad: 10, borderW: 3, titleSize: 13 };

  const rarity = RARITY_CONFIG[card.rarity];
  const bg = card.locked ? "#b0a8b8" : rarity.gradient;

  return (
    <div
      style={{
        width: dims.w,
        height: dims.h,
        background: bg,
        borderRadius: 12,
        padding: dims.pad,
        position: "relative",
        border: `${dims.borderW}px solid ${PALETTE.cardBorder}`,
        boxShadow: card.locked ? "0 4px 10px rgba(0,0,0,0.1)" : rarity.glow,
        transform: `rotate(${rotate}deg)`,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Holographic shine for non-locked */}
      {!card.locked && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -20,
            left: -20,
            right: -20,
            bottom: -20,
            background:
              "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)",
            pointerEvents: "none",
            mixBlendMode: "overlay",
          }}
        />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <RarityBadge rarity={card.rarity} />
        <div style={{ fontSize: 10, color: PALETTE.ink, letterSpacing: 1 }}>
          {"★".repeat(rarity.starCount)}
        </div>
      </div>

      <div
        style={{
          marginTop: 6,
          aspectRatio: "1 / 1",
          background: card.locked ? "#888" : "rgba(255,255,255,0.5)",
          border: `2px solid ${PALETTE.cardBorder}`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: PALETTE.ink,
        }}
      >
        {card.locked ? (
          <span style={{ fontSize: 24 }}>🔒</span>
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `repeating-linear-gradient(135deg, ${TONE_FILLS[card.tone]}, ${TONE_FILLS[card.tone]} 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)`,
            }}
          />
        )}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: dims.pad + 20,
          left: dims.pad + 2,
          right: dims.pad + 2,
          fontSize: dims.titleSize,
          fontWeight: 700,
          color: PALETTE.ink,
          lineHeight: 1.15,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {card.title}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: dims.pad + 2,
          left: dims.pad + 2,
          right: dims.pad + 2,
          display: "flex",
          justifyContent: "space-between",
          fontSize: 9,
          fontFamily: FONTS.mono,
          color: PALETTE.ink,
        }}
      >
        <span>{card.date}</span>
        <span>#{card.id.replace(/^c/, "").padStart(3, "0")}</span>
      </div>
    </div>
  );
}

export function RarityBadge({
  rarity,
  inverted = false,
}: {
  rarity: Rarity;
  inverted?: boolean;
}) {
  return (
    <span
      style={{
        display: "inline-block",
        background: inverted ? PALETTE.accentPink : PALETTE.ink,
        color: inverted ? PALETTE.ink : PALETTE.accentPink,
        padding: "2px 8px",
        fontSize: 10,
        fontWeight: 700,
        fontFamily: FONTS.mono,
        letterSpacing: 1,
      }}
    >
      {rarity}
    </span>
  );
}

export function Counter({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label: string;
}) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 4,
          fontFamily: FONTS.mono,
        }}
      >
        <span style={{ fontSize: 10, color: PALETTE.inkMuted, letterSpacing: 1 }}>
          {label}
        </span>
        <span style={{ fontSize: 11, color: PALETTE.ink, fontWeight: 700 }}>
          {current} / {total}
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: 6,
          background: "rgba(42,26,58,0.1)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: PALETTE.ink,
          }}
        />
      </div>
    </div>
  );
}

export function PixelButton({
  children,
  filled,
  href,
}: {
  children: React.ReactNode;
  filled?: boolean;
  href?: string;
}) {
  const style = {
    display: "inline-block",
    padding: "10px 22px",
    background: filled ? PALETTE.ink : "transparent",
    color: filled ? PALETTE.accentPink : PALETTE.ink,
    border: `2px solid ${PALETTE.ink}`,
    borderRadius: 0,
    fontWeight: 700,
    fontSize: 12,
    fontFamily: FONTS.mono,
    letterSpacing: 1.5,
    cursor: "pointer",
    boxShadow: filled ? "4px 4px 0 rgba(42,26,58,0.15)" : "none",
    textDecoration: "none",
  } as const;
  if (href) {
    return (
      <Link href={href} style={style}>
        {children}
      </Link>
    );
  }
  return <span style={style}>{children}</span>;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 11,
          letterSpacing: 2,
          color: PALETTE.inkMuted,
          marginBottom: 6,
        }}
      >
        ▸ {eyebrow}
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: -0.5,
          color: PALETTE.inkRich,
          lineHeight: 1.1,
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            marginTop: 8,
            fontSize: 13,
            color: PALETTE.inkMuted,
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}
