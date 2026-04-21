import Link from "next/link";
import { LOOKBOOK, PALETTE, FONTS } from "./data";

export default function LookbookLiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: PALETTE.bg,
        color: PALETTE.ink,
        fontFamily: FONTS.body,
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <TopBar />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      <BottomRule />
    </div>
  );
}

function TopBar() {
  const { streamer } = LOOKBOOK;
  return (
    <header
      className="flex flex-wrap items-baseline justify-between gap-3 px-5 md:px-12 py-5 md:py-8 max-w-[1320px] mx-auto"
      style={{
        fontSize: 11,
        letterSpacing: 2,
        textTransform: "uppercase",
      }}
    >
      <Link
        href="/p/lookbook/live"
        style={{ color: PALETTE.ink, textDecoration: "none", fontWeight: 600 }}
      >
        {streamer.name}{" "}
        <span style={{ fontWeight: 400, color: PALETTE.inkMuted }}>
          — {streamer.handle}
        </span>
      </Link>
      <nav className="flex gap-5 md:gap-8 flex-wrap">
        <NavItem href="/p/lookbook/live"           num="01" label="HOME"     />
        <NavItem href="/p/lookbook/live/schedule"  num="02" label="SHOWS"    />
        <NavItem href="/p/lookbook/live/archive"   num="03" label="ARCHIVE"  />
      </nav>
    </header>
  );
}

function NavItem({
  href,
  num,
  label,
}: {
  href: string;
  num: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      style={{
        color: PALETTE.ink,
        textDecoration: "none",
        display: "inline-flex",
        gap: 6,
      }}
    >
      <span style={{ color: PALETTE.inkFaint, fontWeight: 400 }}>{num}</span>
      <span style={{ fontWeight: 500 }}>{label}</span>
    </Link>
  );
}

function BottomRule() {
  return (
    <footer
      className="flex items-baseline justify-between px-5 md:px-12 py-5 md:py-6 max-w-[1320px] mx-auto mt-20"
      style={{
        borderTop: `1px solid ${PALETTE.ink}`,
        fontSize: 10,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: PALETTE.ink,
      }}
    >
      <span>© STREAMER NAME · 2026</span>
      <span style={{ color: PALETTE.inkMuted }}>PATTERN 04 · LOOKBOOK</span>
    </footer>
  );
}
