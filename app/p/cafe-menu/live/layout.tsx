import Link from "next/link";
import { CAFE, PALETTE, FONTS } from "./data";

export default function CafeMenuLiveLayout({
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
      }}
    >
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="flex items-center justify-between gap-3 px-5 md:px-10 pt-5 md:pt-7 pb-3 max-w-[1280px] mx-auto flex-wrap">
      <Link
        href="/p/cafe-menu/live"
        className="flex items-baseline gap-2"
        style={{ textDecoration: "none", color: PALETTE.ink }}
      >
        <span
          style={{
            fontFamily: FONTS.hand,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          Streamer Name's{" "}
          <span style={{ color: PALETTE.latte }}>café</span>
        </span>
      </Link>

      <nav className="flex gap-5 md:gap-6 text-[13px] flex-wrap">
        <NavLink href="/p/cafe-menu/live"           label="today's menu" />
        <NavLink href="/p/cafe-menu/live/schedule"  label="hours" />
        <NavLink href="/p/cafe-menu/live/archive"   label="past specials" />
      </nav>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        color: PALETTE.inkWarm,
        textDecoration: "none",
        fontWeight: 500,
        paddingBottom: 2,
      }}
    >
      {label}
    </Link>
  );
}

function Footer() {
  return (
    <footer
      className="flex flex-wrap items-baseline justify-between gap-4 px-5 md:px-10 py-8 md:py-10 mt-16 md:mt-20 max-w-[1280px] mx-auto"
      style={{
        borderTop: `1px dashed ${PALETTE.dotted}`,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.hand,
          fontSize: 22,
          color: PALETTE.espresso,
          fontWeight: 600,
        }}
      >
        thanks for stopping by ♡
      </div>
      <div className="flex gap-5 md:gap-8 flex-wrap text-[12px]">
        <div style={{ color: PALETTE.inkMuted }}>
          <span style={{ letterSpacing: 2, textTransform: "uppercase" }}>
            hours
          </span>
          <div
            style={{
              color: PALETTE.ink,
              fontWeight: 600,
              marginTop: 3,
            }}
          >
            {CAFE.shop.openHoursShort}
          </div>
        </div>
        <div style={{ color: PALETTE.inkMuted }}>
          <span style={{ letterSpacing: 2, textTransform: "uppercase" }}>
            open
          </span>
          <div
            style={{
              color: PALETTE.ink,
              fontWeight: 600,
              marginTop: 3,
            }}
          >
            {CAFE.shop.openDays}
          </div>
        </div>
        <div
          style={{
            color: PALETTE.inkFaint,
            fontFamily: FONTS.mono,
            letterSpacing: 1.5,
            alignSelf: "flex-end",
          }}
        >
          PATTERN 07 · CAFÉ MENU
        </div>
      </div>
    </footer>
  );
}
