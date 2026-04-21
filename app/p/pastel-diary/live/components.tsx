import Link from "next/link";
import { PALETTE, FONTS, CATEGORIES, type Category } from "./data";

export function SectionHeader({ en, jp }: { en: string; jp: string }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          fontFamily: FONTS.handwriting,
          fontSize: 24,
          color: PALETTE.burgundy,
          lineHeight: 1,
        }}
      >
        {en}
      </div>
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 22,
          color: PALETTE.inkDeep,
          marginTop: 4,
        }}
      >
        {jp}
      </div>
    </div>
  );
}

export function PinkPill({
  children,
  small,
  href,
}: {
  children: React.ReactNode;
  small?: boolean;
  href?: string;
}) {
  const style = {
    display: "inline-block",
    padding: small ? "9px 20px" : "12px 26px",
    background: PALETTE.pink,
    color: "#fff",
    borderRadius: 30,
    fontSize: small ? 12 : 13,
    boxShadow: "0 2px 0 rgba(0,0,0,0.05)",
    cursor: "pointer",
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

export function DashedLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const style = {
    fontSize: 13,
    color: PALETTE.inkMuted,
    borderBottom: `1px dashed ${PALETTE.inkFaint}`,
    paddingBottom: 2,
    cursor: "pointer",
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

export type Tone = "rose" | "cream" | "sage" | "lavender";
const TONE_BG: Record<Tone, string> = {
  rose: "#f0d8d8",
  cream: "#f5ead8",
  sage: "#dde4d6",
  lavender: "#ddd6ea",
};

export function Polaroid({
  photoLabel,
  caption,
  rotate = 0,
  tone = "rose",
  style = {},
}: {
  photoLabel: string;
  caption?: string;
  rotate?: number;
  tone?: Tone;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: PALETTE.paper,
        padding: 12,
        paddingBottom: 40,
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "calc(100% - 8px)",
          background: `repeating-linear-gradient(135deg, ${TONE_BG[tone]}, ${TONE_BG[tone]} 12px, rgba(0,0,0,0.06) 12px, rgba(0,0,0,0.06) 24px)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(60,40,30,0.4)",
          fontSize: 11,
          fontFamily: "ui-monospace, monospace",
        }}
      >
        {photoLabel}
      </div>
      {caption && (
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: FONTS.handwriting,
            fontSize: 16,
            color: "#8a6048",
            padding: "0 8px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}

export function StickyNote({
  children,
  rotate = 0,
  style = {},
}: {
  children: React.ReactNode;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        padding: "14px 18px",
        background: PALETTE.yellow,
        fontFamily: FONTS.handwriting,
        fontSize: 16,
        color: "#7a5a30",
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
        lineHeight: 1.3,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function TapedCard({
  children,
  rotate = 0,
  tapeColor,
}: {
  children: React.ReactNode;
  rotate?: number;
  tapeColor?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        transform: `rotate(${rotate}deg)`,
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -10,
          left: 40,
          width: 80,
          height: 20,
          background: tapeColor ?? PALETTE.tape,
          opacity: 0.85,
          transform: "rotate(-4deg)",
          zIndex: 2,
        }}
      />
      {children}
    </div>
  );
}

export function CategoryChip({ category }: { category: Category }) {
  const c = CATEGORIES[category];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        background: c.bg,
        color: c.color,
        fontSize: 11,
        letterSpacing: 0.5,
        fontFamily: "ui-monospace, monospace",
        borderRadius: 3,
      }}
    >
      {c.label}
    </span>
  );
}
