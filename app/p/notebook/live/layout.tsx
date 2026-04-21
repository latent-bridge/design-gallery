import Link from "next/link";
import { NOTEBOOK, PALETTE, FONTS } from "./data";

export default function NotebookLiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: PALETTE.bg,
        color: PALETTE.ink,
        fontFamily: FONTS.hand,
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Ruled paper lines */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `linear-gradient(${PALETTE.ruledLine} 1px, transparent 1px)`,
          backgroundSize: "100% 32px",
          backgroundPosition: "0 80px",
          opacity: 0.7,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Red margin line (shows only on md+) */}
      <div
        aria-hidden
        className="hidden md:block"
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 100,
          width: 1,
          background: PALETTE.marginLine,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Binder holes (md+ only) */}
      <div
        aria-hidden
        className="hidden md:block"
        style={{
          position: "fixed",
          top: 80,
          left: 40,
          bottom: 40,
          width: 20,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${i * 16}%`,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#fff",
              border: `1px solid ${PALETTE.holeBorder}`,
              boxShadow: "inset 0 2px 2px rgba(0,0,0,0.1)",
            }}
          />
        ))}
      </div>

      <TopBar />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      <BottomRule />
    </div>
  );
}

function TopBar() {
  const { student } = NOTEBOOK;
  return (
    <header
      className="flex flex-wrap items-baseline justify-between gap-3 pt-5 md:pt-7 pb-2 pr-5 md:pr-8 max-w-[1280px] mx-auto"
      style={{
        paddingLeft: "max(20px, env(safe-area-inset-left, 28px))",
        position: "relative",
        zIndex: 5,
      }}
    >
      <Link
        href="/p/notebook/live"
        className="flex items-baseline gap-3 flex-wrap"
        style={{ textDecoration: "none", color: PALETTE.ink }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: PALETTE.inkMuted,
            letterSpacing: 1.5,
          }}
        >
          NAME:{" "}
          <span
            style={{
              color: PALETTE.ink,
              fontWeight: 600,
              fontFamily: FONTS.hand,
              fontSize: 15,
            }}
          >
            {student.name}
          </span>
        </span>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 10,
            color: PALETTE.inkMuted,
            letterSpacing: 1.5,
          }}
        >
          CLASS:{" "}
          <span style={{ color: PALETTE.ink, fontWeight: 600 }}>
            {student.className}
          </span>
        </span>
      </Link>
      <nav className="flex items-center gap-4 md:gap-6">
        <NavLink href="/p/notebook/live"           label="ひょうし"  color={PALETTE.red} />
        <NavLink href="/p/notebook/live/schedule"  label="じかんわり" color={PALETTE.blue} />
        <NavLink href="/p/notebook/live/archive"   label="ぺーじ"   color={PALETTE.yellow} />
      </nav>
    </header>
  );
}

function NavLink({
  href,
  label,
  color,
}: {
  href: string;
  label: string;
  color: string;
}) {
  return (
    <Link
      href={href}
      style={{
        color,
        textDecoration: "none",
        fontFamily: FONTS.hand,
        fontSize: 15,
        fontWeight: 700,
        borderBottom: `2px dashed ${color}`,
        paddingBottom: 2,
      }}
    >
      ☆ {label}
    </Link>
  );
}

function BottomRule() {
  return (
    <footer
      className="flex items-center justify-between gap-3 flex-wrap max-w-[1280px] mx-auto mt-20 py-6 md:py-8"
      style={{
        paddingLeft: "max(20px, 28px)",
        paddingRight: "max(20px, 28px)",
        borderTop: `2px dashed ${PALETTE.marginLine}`,
        fontFamily: FONTS.hand,
        position: "relative",
        zIndex: 5,
      }}
    >
      <span
        style={{
          fontSize: 14,
          color: PALETTE.red,
          transform: "rotate(-2deg)",
          display: "inline-block",
        }}
      >
        ♡ またあしたね
      </span>
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          color: PALETTE.inkMuted,
          letterSpacing: 1.5,
        }}
      >
        PATTERN 05 · NOTEBOOK
      </span>
    </footer>
  );
}
