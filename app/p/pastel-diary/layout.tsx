import Link from "next/link";
import { DIARY, PALETTE, FONTS } from "./data";
import { findPattern, implementedSiblings } from "@/lib/patterns";

const PATTERN_SLUG = "pastel-diary";

export default function PastelDiaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pattern = findPattern(PATTERN_SLUG);
  const { prev, next } = implementedSiblings(PATTERN_SLUG);

  return (
    <div
      style={{
        background: PALETTE.bg,
        color: PALETTE.ink,
        fontFamily: FONTS.body,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot texture background */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(180,120,90,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Gallery micro-bar (minimal, top) */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          fontSize: 10,
          letterSpacing: 2,
          fontFamily: "ui-monospace, monospace",
          color: PALETTE.inkFaint,
          borderBottom: `1px solid ${PALETTE.inkSoft}`,
          background: "rgba(251,245,238,0.6)",
          backdropFilter: "blur(4px)",
        }}
      >
        <Link
          href="/"
          style={{ color: PALETTE.inkMuted, textDecoration: "none" }}
        >
          ← GALLERY
        </Link>
        <span>
          PATTERN {String(pattern?.number ?? 1).padStart(2, "0")} ·{" "}
          {pattern?.name ?? "PASTEL DIARY"}
        </span>
        <span style={{ display: "flex", gap: 10 }}>
          {prev ? (
            <Link
              href={`/p/${prev.slug}`}
              style={{ color: PALETTE.inkMuted, textDecoration: "none" }}
            >
              ← {String(prev.number).padStart(2, "0")}
            </Link>
          ) : (
            <span style={{ opacity: 0.3 }}>← —</span>
          )}
          {next ? (
            <Link
              href={`/p/${next.slug}`}
              style={{ color: PALETTE.inkMuted, textDecoration: "none" }}
            >
              {String(next.number).padStart(2, "0")} →
            </Link>
          ) : (
            <span style={{ opacity: 0.3 }}>— →</span>
          )}
        </span>
      </div>

      {/* Site nav — the diary's own navigation */}
      <DiaryNav />

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      <DiaryFooter />
    </div>
  );
}

function DiaryNav() {
  return (
    <nav
      style={{
        position: "relative",
        zIndex: 10,
        padding: "28px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: 14,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <Link
        href="/p/pastel-diary"
        style={{
          fontFamily: FONTS.serif,
          fontSize: 22,
          color: PALETTE.inkDeep,
          textDecoration: "none",
        }}
      >
        {DIARY.streamer.name}{" "}
        <span style={{ color: PALETTE.inkFaint, fontSize: 13 }}>
          / {DIARY.streamer.handle}
        </span>
      </Link>
      <div
        style={{
          display: "flex",
          gap: 28,
          color: PALETTE.inkMuted,
          fontSize: 13,
        }}
      >
        <NavLink href="/p/pastel-diary" label="home" />
        <NavLink href="/p/pastel-diary/schedule" label="schedule" />
        <NavLink href="/p/pastel-diary/archive" label="archive" />
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        color: PALETTE.inkMuted,
        textDecoration: "none",
        paddingBottom: 2,
      }}
    >
      {label}
    </Link>
  );
}

function DiaryFooter() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        marginTop: 80,
        padding: "40px 40px 32px",
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
        borderTop: `1px dashed ${PALETTE.inkSoft}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        fontSize: 11,
        color: PALETTE.inkFaint,
        letterSpacing: 0.5,
      }}
    >
      <span style={{ fontFamily: FONTS.handwriting, fontSize: 18 }}>
        ♡ see you soon
      </span>
      <span style={{ fontFamily: "ui-monospace, monospace" }}>
        PATTERN 01 · PASTEL DIARY
      </span>
    </footer>
  );
}
