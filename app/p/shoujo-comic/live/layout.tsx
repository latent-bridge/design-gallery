import Link from "next/link";
import { SHOUJO, PALETTE, FONTS } from "./data";
import { Sparkle, ChapterTag } from "./components";

export default function ShoujoComicLiveLayout({
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
      {children}
      <Footer />
    </div>
  );
}

function TopBar() {
  const { heroine } = SHOUJO;
  return (
    <header
      className="px-5 md:px-8 py-4 md:py-5 flex flex-wrap items-center justify-between gap-3 max-w-[1280px] mx-auto"
      style={{
        borderBottom: `3px solid ${PALETTE.ink}`,
      }}
    >
      <Link
        href="/p/shoujo-comic/live"
        className="flex items-baseline gap-2"
        style={{ textDecoration: "none", color: PALETTE.ink }}
      >
        <Sparkle char="✦" size={20} color={PALETTE.pink} />
        <div>
          <ChapterTag>{heroine.chapter}</ChapterTag>
          <div
            className="text-[16px] md:text-[18px]"
            style={{
              fontWeight: 900,
              lineHeight: 1,
              marginTop: 2,
              letterSpacing: -0.5,
            }}
          >
            {heroine.name}
          </div>
        </div>
      </Link>
      <nav className="flex gap-2 md:gap-3 flex-wrap">
        <NavLabel href="/p/shoujo-comic/live" label="CHAPTER" active />
        <NavLabel href="/p/shoujo-comic/live/schedule" label="STORY" />
        <NavLabel href="/p/shoujo-comic/live/archive" label="BACKLOG" />
      </nav>
    </header>
  );
}

function NavLabel({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        padding: "6px 14px",
        border: `2px solid ${PALETTE.ink}`,
        background: active ? PALETTE.ink : PALETTE.panelWhite,
        color: active ? PALETTE.panelWhite : PALETTE.ink,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 2,
        borderRadius: 16,
        boxShadow: `3px 3px 0 ${PALETTE.ink}`,
        textDecoration: "none",
      }}
    >
      {label}
    </Link>
  );
}

function Footer() {
  return (
    <footer
      className="px-5 md:px-8 py-8 md:py-10 mt-16 md:mt-20 max-w-[1280px] mx-auto flex items-center justify-between flex-wrap gap-3"
      style={{
        borderTop: `3px solid ${PALETTE.ink}`,
      }}
    >
      <div
        className="flex items-center gap-2"
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: PALETTE.pinkDeep,
        }}
      >
        <Sparkle char="♡" size={20} color={PALETTE.pink} />
        また次号でね！
      </div>
      <div
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          color: PALETTE.inkFaint,
          letterSpacing: 2,
        }}
      >
        PATTERN 09 · SHOUJO COMIC
      </div>
    </footer>
  );
}
