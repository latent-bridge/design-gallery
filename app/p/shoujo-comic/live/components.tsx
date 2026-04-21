import Link from "next/link";
import { PALETTE, FONTS, TONE_BG, ARC_COLOR, type Arc, type Episode } from "./data";

// ═══ Comic panel (3px black border + 6px offset shadow) ═══
export function ComicPanel({
  children,
  tone = "white",
  offset = 6,
  style,
}: {
  children: React.ReactNode;
  tone?: "rose" | "yellow" | "white" | "mint";
  offset?: number;
  style?: React.CSSProperties;
}) {
  const bg =
    tone === "mint"
      ? PALETTE.panelMint
      : tone === "rose"
        ? PALETTE.panelRose
        : tone === "yellow"
          ? PALETTE.panelYellow
          : PALETTE.panelWhite;
  return (
    <div
      style={{
        background: bg,
        border: `3px solid ${PALETTE.ink}`,
        boxShadow: `${offset}px ${offset}px 0 ${PALETTE.ink}`,
        position: "relative",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ═══ Speech bubble (rounded with black border + offset shadow) ═══
export function SpeechBubble({
  children,
  tone = "white",
  size = "md",
  style,
}: {
  children: React.ReactNode;
  tone?: "white" | "rose" | "yellow";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}) {
  const fontSize = size === "sm" ? 13 : size === "lg" ? 22 : 16;
  const padding = size === "sm" ? "8px 14px" : size === "lg" ? "14px 22px" : "10px 16px";
  const bg = TONE_BG[tone];
  return (
    <div
      style={{
        display: "inline-block",
        padding,
        background: bg,
        border: `3px solid ${PALETTE.ink}`,
        borderRadius: 24,
        fontFamily: FONTS.body,
        fontSize,
        fontWeight: 700,
        color: PALETTE.ink,
        boxShadow: `4px 4px 0 ${PALETTE.ink}`,
        lineHeight: 1.3,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ═══ Sparkle decoration ═══
export function Sparkle({
  char = "★",
  size = 22,
  color = PALETTE.pink,
  style,
}: {
  char?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      style={{
        fontSize: size,
        color,
        lineHeight: 1,
        display: "inline-block",
        ...style,
      }}
    >
      {char}
    </span>
  );
}

// ═══ Radial speed lines (manga hero background) ═══
export function RadialLines({
  originX = "70%",
  originY = "40%",
  opacity = 0.35,
}: {
  originX?: string;
  originY?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        background: `conic-gradient(from 0deg at ${originX} ${originY}, transparent 0deg, transparent 8deg, rgba(240,180,200,${opacity}) 8deg, rgba(240,180,200,${opacity}) 10deg, transparent 10deg, transparent 20deg, rgba(240,180,200,${opacity}) 20deg, rgba(240,180,200,${opacity}) 22deg)`,
        opacity: 0.8,
        maskImage: `radial-gradient(circle at ${originX} ${originY}, transparent 180px, #000 380px)`,
        WebkitMaskImage: `radial-gradient(circle at ${originX} ${originY}, transparent 180px, #000 380px)`,
        pointerEvents: "none",
      }}
    />
  );
}

// ═══ Pill button (black filled or outlined) ═══
export function PillButton({
  children,
  href,
  variant = "filled",
  size = "md",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "filled" | "outline";
  size?: "sm" | "md";
}) {
  const sizing =
    size === "sm"
      ? { pad: "6px 14px", fontSize: 11 }
      : { pad: "10px 22px", fontSize: 13 };
  const style = {
    display: "inline-block",
    padding: sizing.pad,
    background: variant === "filled" ? PALETTE.ink : PALETTE.panelWhite,
    color: variant === "filled" ? PALETTE.panelWhite : PALETTE.ink,
    border: `3px solid ${PALETTE.ink}`,
    borderRadius: 20,
    fontFamily: FONTS.body,
    fontSize: sizing.fontSize,
    fontWeight: 700,
    textDecoration: "none",
    boxShadow: `3px 3px 0 ${PALETTE.ink}`,
    cursor: "pointer",
    letterSpacing: 0.3,
  } as const;
  if (href) return <Link href={href} style={style}>{children}</Link>;
  return <span style={style}>{children}</span>;
}

// ═══ Chapter tag ═══
export function ChapterTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        letterSpacing: 3,
        color: PALETTE.pinkDeep,
        fontWeight: 700,
        textTransform: "uppercase",
      }}
    >
      {children}
    </div>
  );
}

// ═══ Arc chip ═══
export function ArcChip({ arc }: { arc: Arc }) {
  const color = ARC_COLOR[arc];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        background: color,
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
        borderRadius: 12,
        fontFamily: FONTS.body,
      }}
    >
      {arc}
    </span>
  );
}

// ═══ Episode card (styled as a compact comic panel) ═══
export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <ComicPanel tone={episode.tone} offset={4}>
      <div
        style={{
          padding: "16px 18px",
        }}
      >
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: 10,
              color: PALETTE.pinkDeep,
              letterSpacing: 1.5,
              fontWeight: 700,
            }}
          >
            {episode.number}
          </span>
          <ArcChip arc={episode.arc} />
        </div>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 900,
            color: PALETTE.ink,
            margin: 0,
            lineHeight: 1.25,
          }}
        >
          {episode.title}
        </h3>
        <div
          style={{
            fontSize: 11,
            color: PALETTE.inkMuted,
            marginTop: 4,
            fontWeight: 500,
          }}
        >
          {episode.subtitle}
        </div>
        <div className="mt-3 mb-3">
          <SpeechBubble size="sm" tone="white">
            「{episode.quote}」
          </SpeechBubble>
        </div>
        <div
          className="mt-3 pt-2 flex items-baseline justify-between"
          style={{
            borderTop: `2px solid ${PALETTE.ink}`,
            fontSize: 10,
            fontFamily: FONTS.mono,
            color: PALETTE.inkMuted,
            letterSpacing: 0.5,
          }}
        >
          <span>{episode.date}</span>
          <span>
            {episode.duration} · {episode.views}
          </span>
        </div>
      </div>
    </ComicPanel>
  );
}

// ═══ Section heading with underline ═══
export function SectionHeader({
  chapter,
  title,
}: {
  chapter: string;
  title: string;
}) {
  return (
    <div className="mb-6 md:mb-8">
      <ChapterTag>{chapter}</ChapterTag>
      <h2
        className="text-[24px] md:text-[34px] mt-2 pb-3"
        style={{
          fontWeight: 900,
          color: PALETTE.ink,
          margin: 0,
          lineHeight: 1.1,
          borderBottom: `3px solid ${PALETTE.ink}`,
          paddingBottom: 10,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
