import Link from "next/link";
import { PALETTE, FONTS, CATEGORY_COLOR, type Category, type Item } from "./data";

// ═══ Noren stripe — top header band ═══
export function NorenStripe({ height = 4 }: { height?: number }) {
  return (
    <div
      aria-hidden
      style={{
        height,
        background: `linear-gradient(90deg, ${PALETTE.espresso} 0 33%, ${PALETTE.beige} 33% 66%, ${PALETTE.rose} 66% 100%)`,
      }}
    />
  );
}

// ═══ Tracking label ═══ (eg "配 信 者", "令 和 八 年 · 春")
export function TrackedLabel({
  children,
  size = 11,
  tracking = 6,
  color = PALETTE.espresso,
  spaced = false,
}: {
  children: React.ReactNode;
  size?: number;
  tracking?: number;
  color?: string;
  spaced?: boolean;
}) {
  let content: React.ReactNode = children;
  if (spaced && typeof children === "string") {
    content = children.split("").join(String.fromCharCode(0x2009));
  }
  return (
    <span
      style={{
        fontFamily: FONTS.body,
        fontSize: size,
        letterSpacing: `${tracking}px`,
        color,
        lineHeight: 1,
        display: "inline-block",
      }}
    >
      {content}
    </span>
  );
}

// ═══ Huge mincho headline ═══
export function MinchoHeadline({
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
      ? "clamp(52px, 11vw, 120px)"
      : size === "lg"
        ? "clamp(40px, 7vw, 80px)"
        : "clamp(28px, 5vw, 48px)";
  return (
    <h1
      style={{
        fontFamily: FONTS.serif,
        fontSize,
        fontWeight: 500,
        letterSpacing: "-0.02em",
        color,
        margin: 0,
        lineHeight: 0.95,
      }}
    >
      {children}
    </h1>
  );
}

// ═══ Text-button with thin ink border ═══
export function LineButton({
  children,
  href,
  filled,
}: {
  children: React.ReactNode;
  href?: string;
  filled?: boolean;
}) {
  const style = {
    display: "inline-block",
    padding: "12px 28px",
    border: `1px solid ${PALETTE.ink}`,
    background: filled ? PALETTE.ink : "transparent",
    color: filled ? PALETTE.bg : PALETTE.ink,
    fontSize: 12,
    letterSpacing: "0.25em",
    textDecoration: "none",
    fontFamily: FONTS.body,
  } as const;
  if (href) return <Link href={href} style={style}>{children}</Link>;
  return <span style={style}>{children}</span>;
}

// ═══ Vertical writing date stamp ═══
export function VerticalStamp({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        writingMode: "vertical-rl",
        padding: 10,
        background: PALETTE.paper,
        fontSize: 10,
        letterSpacing: 3,
        color: PALETTE.espresso,
        fontFamily: FONTS.body,
        border: `1px solid ${PALETTE.inkSoft}`,
      }}
    >
      {children}
    </div>
  );
}

// ═══ Category kanji label ═══
export function CategoryMark({ category }: { category: Category }) {
  const color = CATEGORY_COLOR[category];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 12px",
        border: `1px solid ${color}`,
        color,
        fontSize: 11,
        letterSpacing: 4,
        fontFamily: FONTS.body,
      }}
    >
      {category}
    </span>
  );
}

// ═══ Photo placeholder with cream tone ═══
export function SeasonalPhoto({
  label = "季節の写真",
  aspect = "4 / 5",
  style,
}: {
  label?: string;
  aspect?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: aspect,
        background: `repeating-linear-gradient(135deg, ${PALETTE.cream}, ${PALETTE.cream} 14px, rgba(0,0,0,0.04) 14px, rgba(0,0,0,0.04) 28px)`,
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: 11,
          letterSpacing: 4,
          color: PALETTE.inkFaint,
          fontFamily: FONTS.body,
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ═══ Item card (for archive / preview) ═══
export function ItemCard({ item }: { item: Item }) {
  return (
    <article
      style={{
        background: PALETTE.paper,
        border: `1px solid ${PALETTE.inkSoft}`,
        padding: "20px 22px 18px",
      }}
    >
      <div className="flex items-baseline justify-between gap-2 mb-3">
        <CategoryMark category={item.category} />
        <span
          style={{
            fontSize: 10,
            letterSpacing: 2,
            color: PALETTE.inkFaint,
            fontFamily: FONTS.body,
          }}
        >
          {item.duration}
        </span>
      </div>
      <h3
        style={{
          fontFamily: FONTS.serif,
          fontSize: 18,
          fontWeight: 500,
          color: PALETTE.ink,
          margin: "0 0 8px",
          lineHeight: 1.45,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: 12,
          color: PALETTE.inkMuted,
          lineHeight: 1.85,
          margin: 0,
        }}
      >
        {item.note}
      </p>
      <div
        className="mt-4 pt-3 flex items-baseline justify-between"
        style={{
          borderTop: `1px solid ${PALETTE.inkSoft}`,
          fontSize: 11,
          color: PALETTE.inkFaint,
          fontFamily: FONTS.body,
          letterSpacing: 1,
        }}
      >
        <span>{item.date}</span>
        <span>{item.views}</span>
      </div>
    </article>
  );
}

// ═══ Section heading ═══
export function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div
      className="pb-3 md:pb-4 mb-6 md:mb-8"
      style={{ borderBottom: `1px solid ${PALETTE.espresso}` }}
    >
      <div
        style={{
          fontSize: 10,
          letterSpacing: 6,
          color: PALETTE.espresso,
          fontFamily: FONTS.body,
          marginBottom: 6,
        }}
      >
        {eyebrow}
      </div>
      <h2
        className="text-[22px] md:text-[28px]"
        style={{
          fontFamily: FONTS.serif,
          fontWeight: 500,
          color: PALETTE.ink,
          margin: 0,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
