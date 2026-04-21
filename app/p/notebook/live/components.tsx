import Link from "next/link";
import { PALETTE, FONTS, CATEGORY_COLOR, PIN_COLOR, type Category, type NotebookPage } from "./data";

// ═══ Section header ═══ ☆ title with colored dashed underline
export function SectionMarker({
  title,
  color = PALETTE.red,
  size = "md",
}: {
  title: string;
  color?: string;
  size?: "sm" | "md" | "lg";
}) {
  const fontSize = size === "sm" ? 16 : size === "lg" ? 26 : 20;
  return (
    <div
      style={{
        fontFamily: FONTS.hand,
        fontSize,
        color,
        borderBottom: `2px dashed ${color}`,
        paddingBottom: 4,
        marginBottom: 10,
        fontWeight: 700,
      }}
    >
      ☆ {title}
    </div>
  );
}

// ═══ Handwritten headline ═══
export function HandHeadline({
  children,
  size = "lg",
  color = PALETTE.ink,
}: {
  children: React.ReactNode;
  size?: "md" | "lg" | "xl";
  color?: string;
}) {
  const fontSize =
    size === "xl"
      ? "clamp(40px, 7vw, 58px)"
      : size === "lg"
        ? "clamp(32px, 5vw, 44px)"
        : "clamp(24px, 4vw, 32px)";
  return (
    <h1
      style={{
        fontFamily: FONTS.headline,
        fontSize,
        lineHeight: 0.95,
        margin: 0,
        color,
        fontWeight: 700,
      }}
    >
      {children}
    </h1>
  );
}

// ═══ Meta header ═══ NAME: / CLASS: / DATE: tracker
export function MetaHeader({
  items,
}: {
  items: [string, string][];
}) {
  return (
    <div
      style={{
        fontFamily: FONTS.mono,
        fontSize: 11,
        color: PALETTE.inkMuted,
        letterSpacing: 1.5,
        display: "flex",
        flexWrap: "wrap",
        gap: "0 18px",
      }}
    >
      {items.map(([k, v]) => (
        <span key={k}>
          {k}: <span style={{ color: PALETTE.ink, fontWeight: 600 }}>{v}</span>
        </span>
      ))}
    </div>
  );
}

// ═══ Rotated polaroid photo (with Caveat caption) ═══
export function StudyPhoto({
  label,
  caption,
  rotate = -3,
  width = 200,
  height = 150,
}: {
  label: string;
  caption?: string;
  rotate?: number;
  width?: number;
  height?: number;
}) {
  return (
    <div
      style={{
        width,
        height,
        background: PALETTE.paper,
        padding: 8,
        paddingBottom: 28,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `repeating-linear-gradient(135deg, #f0d8d8, #f0d8d8 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          color: "rgba(42,34,24,0.4)",
          fontFamily: FONTS.mono,
        }}
      >
        {label}
      </div>
      {caption && (
        <div
          style={{
            position: "absolute",
            bottom: 6,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: FONTS.headline,
            fontSize: 14,
            color: "#8a6048",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

// ═══ Stamp card ═══ (visit tracker with heart stamps)
export function StampCard({
  current,
  total,
  goal,
  prize,
}: {
  current: number;
  total: number;
  goal: number;
  prize: string;
}) {
  return (
    <div>
      <div
        style={{
          background: PALETTE.stampBg,
          border: `2px solid ${PALETTE.stampBorder}`,
          padding: 12,
          boxShadow: `2px 2px 0 ${PALETTE.stampBorder}`,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: PALETTE.yellow,
            textAlign: "center",
            marginBottom: 8,
            letterSpacing: 1,
          }}
        >
          {goal} 回きてね !
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 4,
          }}
        >
          {Array.from({ length: total }, (_, i) => (
            <div
              key={i}
              style={{
                aspectRatio: "1",
                border: `1.5px dashed ${PALETTE.stampBorder}`,
                background: i < current ? PALETTE.stampFill : "transparent",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              {i < current ? "♥" : ""}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 8,
            fontFamily: FONTS.headline,
            fontSize: 18,
            color: PALETTE.yellow,
            textAlign: "center",
          }}
        >
          {current} / {total} ♡ あと{total - current}回!
        </div>
      </div>
      <div
        style={{
          marginTop: 14,
          fontFamily: FONTS.headline,
          fontSize: 16,
          color: "#6a5a30",
          transform: "rotate(-2deg)",
          display: "inline-block",
        }}
      >
        → {prize}
      </div>
    </div>
  );
}

// ═══ Doodle button (hand-drawn styled link) ═══
export function DoodleButton({
  children,
  href,
  color = PALETTE.red,
  filled,
}: {
  children: React.ReactNode;
  href?: string;
  color?: string;
  filled?: boolean;
}) {
  const style = {
    display: "inline-block",
    padding: "10px 22px",
    background: filled ? color : PALETTE.paper,
    color: filled ? "#fff" : color,
    fontFamily: FONTS.hand,
    fontSize: 16,
    fontWeight: 700,
    textDecoration: "none",
    border: `2px solid ${color}`,
    boxShadow: `2px 2px 0 ${color}`,
    cursor: "pointer",
    letterSpacing: 0.5,
  } as const;
  if (href) return <Link href={href} style={style}>{children}</Link>;
  return <span style={style}>{children}</span>;
}

// ═══ Pin badge (colored circle as "push pin") ═══
export function PinBadge({ color }: { color: NotebookPage["pinColor"] }) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: PIN_COLOR[color],
        border: "1.5px solid rgba(0,0,0,0.25)",
        boxShadow: "1px 1px 2px rgba(0,0,0,0.15)",
        verticalAlign: "middle",
      }}
    />
  );
}

// ═══ Category chip (handwritten style) ═══
export function CategoryChip({ category }: { category: Category }) {
  const c = CATEGORY_COLOR[category];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 9px",
        color: c.color,
        border: `1.5px dashed ${c.border}`,
        fontSize: 12,
        fontFamily: FONTS.hand,
        fontWeight: 700,
      }}
    >
      {category}
    </span>
  );
}

// ═══ Notebook page card (torn-page style) ═══
export function NotebookPageCard({ page }: { page: NotebookPage }) {
  return (
    <article
      style={{
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.inkFaint}`,
        padding: "16px 18px 18px",
        position: "relative",
        // torn edge effect on left
        clipPath:
          "polygon(2% 0, 100% 0, 100% 100%, 3% 100%, 0 98%, 2% 94%, 0 88%, 2% 82%, 0 76%, 2% 70%, 0 64%, 2% 58%, 0 52%, 2% 46%, 0 40%, 2% 34%, 0 28%, 2% 22%, 0 16%, 2% 10%, 0 4%)",
        boxShadow: "2px 3px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex items-start gap-2 mb-2">
        <span style={{ marginTop: 4 }}>
          <PinBadge color={page.pinColor} />
        </span>
        <div className="flex-1 min-w-0">
          <div
            style={{
              fontFamily: FONTS.mono,
              fontSize: 10,
              color: PALETTE.inkMuted,
              letterSpacing: 1,
              marginBottom: 4,
            }}
          >
            {page.date} · {page.duration}
          </div>
          <h3
            style={{
              fontFamily: FONTS.hand,
              fontSize: 18,
              color: PALETTE.ink,
              margin: 0,
              lineHeight: 1.3,
              fontWeight: 700,
            }}
          >
            {page.title}
          </h3>
        </div>
      </div>
      <p
        style={{
          fontFamily: FONTS.hand,
          fontSize: 14,
          color: PALETTE.ink,
          lineHeight: 1.7,
          margin: "8px 0 10px",
          paddingLeft: 12,
          borderLeft: `3px solid ${CATEGORY_COLOR[page.category].color}`,
        }}
      >
        {page.note}
      </p>
      <CategoryChip category={page.category} />
    </article>
  );
}
