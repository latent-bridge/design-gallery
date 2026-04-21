import Link from "next/link";
import { TEA, PALETTE, FONTS } from "./data";
import { NorenStripe, TrackedLabel } from "./components";

export default function TeaHouseLiveLayout({
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
      <NorenStripe height={4} />
      <TopBar />
      {children}
      <Footer />
    </div>
  );
}

function TopBar() {
  const { streamer } = TEA;
  return (
    <header className="flex items-baseline justify-between gap-4 px-5 md:px-12 pt-6 md:pt-8 pb-4 max-w-[1280px] mx-auto flex-wrap">
      <Link
        href="/p/tea-house/live"
        style={{ textDecoration: "none", color: PALETTE.ink }}
      >
        <TrackedLabel size={10} tracking={6}>
          {streamer.title}
        </TrackedLabel>
        <div
          className="text-[18px] md:text-[22px]"
          style={{
            fontFamily: FONTS.serif,
            fontWeight: 500,
            marginTop: 2,
          }}
        >
          {streamer.name}
        </div>
      </Link>

      <nav className="flex gap-5 md:gap-7 text-[12px] md:text-[13px] flex-wrap pb-1">
        <NavLink href="/p/tea-house/live"          label="お品書き" />
        <NavLink href="/p/tea-house/live/schedule" label="季節の便り" />
        <NavLink href="/p/tea-house/live/archive"  label="お品" />
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
        paddingBottom: 2,
        fontFamily: FONTS.body,
      }}
    >
      {label}
    </Link>
  );
}

function Footer() {
  return (
    <footer
      className="px-5 md:px-12 py-8 md:py-12 mt-16 md:mt-24 max-w-[1280px] mx-auto"
      style={{ borderTop: `1px solid ${PALETTE.inkSoft}` }}
    >
      <div className="flex items-baseline justify-between flex-wrap gap-4">
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 20,
            fontWeight: 500,
            color: PALETTE.ink,
            letterSpacing: "-0.01em",
          }}
        >
          またお越しくださいませ。
        </div>
        <div
          style={{
            fontSize: 10,
            letterSpacing: 4,
            color: PALETTE.inkFaint,
            fontFamily: FONTS.body,
          }}
        >
          PATTERN 08 · TEA HOUSE
        </div>
      </div>
      <NorenStripe height={2} />
    </footer>
  );
}
