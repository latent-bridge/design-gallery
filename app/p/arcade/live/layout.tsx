import Link from "next/link";
import { ARCADE, PALETTE, FONTS } from "./data";
import { PixelOctagon, LiveBadge, CrtOverlay } from "./components";

export default function ArcadeLiveLayout({
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
        overflowX: "hidden",
      }}
    >
      {/* CRT overlay fixed — applies to every page */}
      <div
        aria-hidden
        style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      >
        <CrtOverlay zIndex={0} />
      </div>

      {/* Global blink keyframe */}
      <style>{`
        @keyframes c-blink { 50% { opacity: 0; } }
      `}</style>

      <TopBar />
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
      <BottomRule />
    </div>
  );
}

function TopBar() {
  const { player } = ARCADE;
  return (
    <header
      className="flex items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 flex-wrap"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: PALETTE.bg,
        borderBottom: `2px solid ${PALETTE.magenta}`,
        boxShadow: `0 2px 0 0 ${PALETTE.cyan}`,
      }}
    >
      <Link
        href="/p/arcade/live"
        className="flex items-center gap-3"
        style={{ textDecoration: "none", color: PALETTE.ink }}
      >
        <PixelOctagon size={32} color={PALETTE.yellow} inset={PALETTE.bg} />
        <div>
          <div
            style={{
              fontFamily: FONTS.pixel,
              fontSize: 11,
              color: PALETTE.cyan,
              letterSpacing: 1.5,
            }}
          >
            {player.name}.EXE
          </div>
          <div
            style={{
              fontFamily: FONTS.term,
              fontSize: 14,
              color: PALETTE.inkDim,
              marginTop: 2,
            }}
          >
            &gt; {player.handle}
          </div>
        </div>
      </Link>

      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
        <nav className="flex gap-1 md:gap-2">
          <NavButton href="/p/arcade/live"           label="HOME"    gamepad="A" active />
          <NavButton href="/p/arcade/live/schedule"  label="STAGES"  gamepad="B" />
          <NavButton href="/p/arcade/live/archive"   label="LIBRARY" gamepad="C" />
        </nav>
        <LiveBadge on={true} />
      </div>
    </header>
  );
}

function NavButton({
  href,
  label,
  gamepad,
  active,
}: {
  href: string;
  label: string;
  gamepad: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        padding: "7px 10px",
        border: `2px solid ${active ? PALETTE.cyan : PALETTE.panelBorder}`,
        background: active ? `${PALETTE.cyan}18` : "transparent",
        fontFamily: FONTS.pixel,
        fontSize: 9,
        letterSpacing: 1.5,
        color: active ? PALETTE.cyan : PALETTE.ink,
        textDecoration: "none",
      }}
    >
      <span style={{ opacity: 0.6 }}>[{gamepad}]</span>
      <span>{label}</span>
    </Link>
  );
}

function BottomRule() {
  return (
    <footer
      className="flex items-center justify-between gap-3 px-4 md:px-6 py-5 md:py-6 mt-16 md:mt-20 flex-wrap"
      style={{
        position: "relative",
        zIndex: 2,
        borderTop: `2px solid ${PALETTE.magenta}`,
        fontFamily: FONTS.pixel,
        fontSize: 9,
        letterSpacing: 1.5,
        color: PALETTE.inkDim,
      }}
    >
      <span>&gt;&gt; GAME OVER ?</span>
      <span style={{ color: PALETTE.cyan }}>PRESS [START] TO CONTINUE</span>
      <span style={{ color: PALETTE.inkFaint }}>PATTERN 06 · ARCADE</span>
    </footer>
  );
}
