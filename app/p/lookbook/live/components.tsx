import Link from "next/link";
import { PALETTE, FONTS, TONE_FILL, CATEGORY_LABEL, type Tone, type Category, type Look } from "./data";

// Monochrome photo placeholder with tone variants
export function LookPlate({
  tone = "cold",
  label,
  children,
  aspect = "3 / 4",
  style,
}: {
  tone?: Tone;
  label?: string;
  children?: React.ReactNode;
  aspect?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: aspect,
        background: `repeating-linear-gradient(135deg, ${TONE_FILL[tone]}, ${TONE_FILL[tone]} 14px, rgba(0,0,0,0.06) 14px, rgba(0,0,0,0.06) 28px)`,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {label && (
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 14,
            fontSize: 10,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
            fontFamily: FONTS.mono,
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

// Editorial button: underline-on-hover, uppercase tracking, optional href
export function EditorialLink({
  children,
  href,
  size = "md",
  arrow = true,
}: {
  children: React.ReactNode;
  href?: string;
  size?: "sm" | "md";
  arrow?: boolean;
}) {
  const style = {
    display: "inline-block",
    fontSize: size === "sm" ? 10 : 11,
    letterSpacing: 2,
    color: PALETTE.ink,
    borderBottom: `1px solid ${PALETTE.ink}`,
    paddingBottom: 2,
    textDecoration: "none",
    textTransform: "uppercase" as const,
    fontWeight: 500,
    fontFamily: FONTS.body,
  };
  const inner = (
    <>
      {children}
      {arrow && " →"}
    </>
  );
  if (href) return <Link href={href} style={style}>{inner}</Link>;
  return <span style={style}>{inner}</span>;
}

// Filled black button for primary CTA
export function InkButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const style = {
    display: "inline-block",
    padding: "11px 22px",
    background: PALETTE.ink,
    color: "#fff",
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase" as const,
    fontWeight: 600,
    textDecoration: "none",
    fontFamily: FONTS.body,
  };
  if (href) return <Link href={href} style={style}>{children}</Link>;
  return <span style={style}>{children}</span>;
}

// Pagination dots + numbering
export function IssuePagination({
  current,
  total,
  prevHref,
  nextHref,
}: {
  current: number;
  total: number;
  prevHref?: string;
  nextHref?: string;
}) {
  return (
    <div
      className="flex items-center justify-between gap-4 flex-wrap"
      style={{
        fontSize: 10,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: PALETTE.ink,
        fontFamily: FONTS.body,
      }}
    >
      <span>
        SPRING ISSUE — {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <span className="hidden sm:inline-block" style={{ letterSpacing: 2, color: PALETTE.inkFaint }}>
        {Array.from({ length: total }, (_, i) => (i + 1 === current ? "●" : "◦")).join(" ")}
      </span>
      <div className="flex gap-5">
        {prevHref ? (
          <Link href={prevHref} style={{ color: PALETTE.ink, textDecoration: "none", letterSpacing: 2 }}>
            ← PREV
          </Link>
        ) : (
          <span style={{ color: PALETTE.inkFaint }}>← PREV</span>
        )}
        {nextHref ? (
          <Link href={nextHref} style={{ color: PALETTE.ink, textDecoration: "none", letterSpacing: 2 }}>
            NEXT →
          </Link>
        ) : (
          <span style={{ color: PALETTE.inkFaint }}>NEXT →</span>
        )}
      </div>
    </div>
  );
}

// Editorial label (tiny uppercase tracker above headlines)
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 10,
        letterSpacing: 3,
        textTransform: "uppercase",
        color: PALETTE.ink,
        fontFamily: FONTS.body,
        fontWeight: 500,
      }}
    >
      {children}
    </div>
  );
}

// Category tag — monochrome pill
export function CategoryMark({ category }: { category: Category }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        border: `1px solid ${PALETTE.ink}`,
        fontSize: 9,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: PALETTE.ink,
        fontFamily: FONTS.body,
        fontWeight: 500,
      }}
    >
      {CATEGORY_LABEL[category]}
    </span>
  );
}

// Look card — mini editorial spread for archive/home grid
export function LookCard({ look }: { look: Look }) {
  return (
    <article
      style={{
        background: "#fff",
      }}
    >
      <LookPlate tone={look.tone} aspect="3 / 4">
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 12,
            fontSize: 9,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
            fontFamily: FONTS.mono,
          }}
        >
          {look.duration}
        </div>
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            fontSize: 10,
            letterSpacing: 2,
            color: PALETTE.ink,
            fontFamily: FONTS.body,
            fontWeight: 600,
          }}
        >
          N°{look.number}
        </div>
      </LookPlate>
      <div
        style={{
          paddingTop: 12,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: PALETTE.inkMuted,
            fontFamily: FONTS.mono,
          }}
        >
          {look.date} · {look.views}
        </div>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: -0.3,
            color: PALETTE.ink,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {look.title}
        </h3>
        <div>
          <CategoryMark category={look.category} />
        </div>
      </div>
    </article>
  );
}

// Section heading for editorial pages
export function EditorialHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div
      className="pb-4 mb-6 md:mb-8"
      style={{ borderBottom: `1px solid ${PALETTE.ink}` }}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className="text-[22px] md:text-[28px]"
        style={{
          fontWeight: 300,
          letterSpacing: -0.5,
          color: PALETTE.ink,
          margin: "6px 0 0",
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
