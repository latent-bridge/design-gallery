import Link from "next/link";
import { COLLECTION, PALETTE, FONTS } from "./data";

export default function TradingCardLiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: PALETTE.bgGradient,
        backgroundAttachment: "fixed",
        color: PALETTE.ink,
        fontFamily: FONTS.body,
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <TopBar />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}

function TopBar() {
  const { streamer, stats } = COLLECTION;
  return (
    <header className="px-5 md:px-10 pt-5 md:pt-7 pb-2 max-w-[1280px] mx-auto">
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <Link
          href="/p/trading-card/live"
          style={{
            color: PALETTE.ink,
            textDecoration: "none",
            fontWeight: 700,
          }}
          className="text-[15px] md:text-[16px]"
        >
          ♡ {streamer.name}{" "}
          <span className="hidden sm:inline" style={{ fontWeight: 400 }}>
            — Collection
          </span>
        </Link>
        <div
          className="text-[10px] md:text-[11px]"
          style={{ color: PALETTE.inkMuted, fontFamily: FONTS.mono, letterSpacing: 1 }}
        >
          {stats.unlocked} / {stats.total} CARDS UNLOCKED
        </div>
      </div>
      <nav
        className="mt-4 md:mt-6 flex gap-5 md:gap-7 text-[12px] md:text-[13px] pb-1"
        style={{ color: PALETTE.inkMuted }}
      >
        <NavLink href="/p/trading-card/live"           label="HOME" />
        <NavLink href="/p/trading-card/live/schedule"  label="DROPS" />
        <NavLink href="/p/trading-card/live/archive"   label="COLLECTION" />
      </nav>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        color: PALETTE.inkMuted,
        textDecoration: "none",
        fontFamily: FONTS.mono,
        letterSpacing: 1.5,
        fontWeight: 700,
      }}
    >
      {label}
    </Link>
  );
}

function Footer() {
  return (
    <footer
      className="px-5 md:px-10 py-8 md:py-10 mt-20 max-w-[1280px] mx-auto flex items-baseline justify-between flex-wrap gap-2"
      style={{
        borderTop: `2px solid ${PALETTE.ink}`,
        color: PALETTE.inkMuted,
        fontFamily: FONTS.mono,
        fontSize: 10,
        letterSpacing: 1.5,
      }}
    >
      <span>PATTERN 02 · TRADING CARD</span>
      <span>COLLECT · UNLOCK · KEEP</span>
    </footer>
  );
}
