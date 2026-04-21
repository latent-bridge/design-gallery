import Link from "next/link";
import { PALETTE, FONTS, CATEGORY_COLOR, type Category } from "./data";

// ═══ Menu card (paper with brown border + offset shadow) ═══
export function MenuCard({
  children,
  padding = 26,
  offset = 4,
}: {
  children: React.ReactNode;
  padding?: number;
  offset?: number;
}) {
  return (
    <div
      style={{
        background: PALETTE.paper,
        border: `2px solid ${PALETTE.espresso}`,
        borderRadius: 4,
        boxShadow: `${offset}px ${offset}px 0 ${PALETTE.espresso}`,
        padding,
      }}
    >
      {children}
    </div>
  );
}

// ═══ Menu item row ═══
export function MenuItemRow({
  name,
  desc,
  price,
  category,
}: {
  name: string;
  desc: string;
  price: string;
  category?: Category;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 12,
        borderBottom: `1px dotted ${PALETTE.dotted}`,
        padding: "8px 0",
      }}
    >
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            fontFamily: FONTS.body,
            fontSize: 15,
            fontWeight: 600,
            color: PALETTE.ink,
            display: "flex",
            alignItems: "baseline",
            gap: 6,
          }}
        >
          {category && (
            <span
              style={{
                fontSize: 12,
                color: CATEGORY_COLOR[category].color,
              }}
            >
              {CATEGORY_COLOR[category].icon}
            </span>
          )}
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </span>
        </div>
        <div
          style={{
            fontSize: 12,
            color: PALETTE.inkMuted,
            marginTop: 2,
            fontStyle: "italic",
          }}
        >
          {desc}
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTS.hand,
          fontSize: 22,
          color: PALETTE.latte,
          fontWeight: 600,
          flexShrink: 0,
        }}
      >
        {price}
      </div>
    </div>
  );
}

// ═══ Cafe button (filled espresso or outlined) ═══
export function CafeButton({
  children,
  variant = "filled",
  href,
}: {
  children: React.ReactNode;
  variant?: "filled" | "outline";
  href?: string;
}) {
  const style = {
    display: "inline-block",
    padding: "12px 22px",
    background: variant === "filled" ? PALETTE.espresso : "transparent",
    color: variant === "filled" ? "#fff" : PALETTE.espresso,
    border: `2px solid ${PALETTE.espresso}`,
    borderRadius: 4,
    fontSize: 13,
    fontWeight: 600,
    fontFamily: FONTS.body,
    textDecoration: "none",
    cursor: "pointer",
    letterSpacing: 0.3,
  } as const;

  if (href) return <Link href={href} style={style}>{children}</Link>;
  return <span style={style}>{children}</span>;
}

// ═══ Category chip ═══
export function CategoryChip({ category }: { category: Category }) {
  const c = CATEGORY_COLOR[category];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "2px 10px",
        border: `1.5px solid ${c.color}`,
        borderRadius: 999,
        color: c.color,
        fontSize: 11,
        fontWeight: 600,
        fontFamily: FONTS.body,
      }}
    >
      <span style={{ fontSize: 10 }}>{c.icon}</span>
      {c.label}
    </span>
  );
}

// ═══ Handwritten caption ═══
export function HandCaption({
  children,
  size = 22,
  color = PALETTE.espresso,
  align = "center",
}: {
  children: React.ReactNode;
  size?: number;
  color?: string;
  align?: "center" | "left" | "right";
}) {
  return (
    <div
      style={{
        fontFamily: FONTS.hand,
        fontSize: size,
        color,
        textAlign: align,
        fontWeight: 600,
        lineHeight: 1.1,
      }}
    >
      {children}
    </div>
  );
}

// ═══ Section eyebrow (◦ WELCOME style) ═══
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: FONTS.body,
        fontSize: 13,
        letterSpacing: 3,
        color: PALETTE.latte,
        fontWeight: 500,
        textTransform: "uppercase",
      }}
    >
      ◦ {children}
    </div>
  );
}

// ═══ Special card (for archive) ═══
export function SpecialCard({
  special,
}: {
  special: {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    duration: string;
    views: string;
    category: Category;
  };
}) {
  return (
    <article
      style={{
        background: PALETTE.paperCream,
        border: `2px solid ${PALETTE.espresso}`,
        borderRadius: 4,
        boxShadow: `3px 3px 0 ${PALETTE.espresso}`,
        padding: 18,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.hand,
          fontSize: 22,
          color: PALETTE.espresso,
          fontWeight: 600,
          lineHeight: 1.25,
        }}
      >
        {special.title}
      </div>
      <div
        style={{
          fontFamily: FONTS.body,
          fontSize: 12,
          color: PALETTE.inkMuted,
          fontStyle: "italic",
          marginTop: 4,
        }}
      >
        {special.subtitle}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          marginTop: 14,
          paddingTop: 10,
          borderTop: `1px dotted ${PALETTE.dotted}`,
        }}
      >
        <CategoryChip category={special.category} />
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            color: PALETTE.inkMuted,
            letterSpacing: 0.5,
          }}
        >
          {special.duration} · {special.views}
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          color: PALETTE.inkFaint,
          marginTop: 6,
          letterSpacing: 1,
        }}
      >
        {special.date}
      </div>
    </article>
  );
}
