import Link from "next/link";
import { DIARY, PALETTE, FONTS } from "./data";

// Layout for the "live" site view (inside the viewport-preview iframe).
// No gallery shell here — that lives in the outer viewer at /p/pastel-diary/.

export default function PastelDiaryLiveLayout({
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

      <DiaryNav />

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>

      <DiaryFooter />
    </div>
  );
}

function DiaryNav() {
  return (
    <nav
      className="flex flex-wrap items-center justify-between gap-3 px-5 md:px-10 pt-6 md:pt-8 pb-2 md:pb-4 max-w-[1200px] mx-auto"
      style={{ position: "relative", zIndex: 10 }}
    >
      <Link
        href="/p/pastel-diary/live"
        style={{
          fontFamily: FONTS.serif,
          color: PALETTE.inkDeep,
          textDecoration: "none",
        }}
        className="text-[18px] md:text-[22px]"
      >
        {DIARY.streamer.name}{" "}
        <span
          className="text-[11px] md:text-[13px]"
          style={{ color: PALETTE.inkFaint }}
        >
          / {DIARY.streamer.handle}
        </span>
      </Link>
      <div
        className="flex gap-5 md:gap-7 text-[12px] md:text-[13px]"
        style={{ color: PALETTE.inkMuted }}
      >
        <NavLink href="/p/pastel-diary/live" label="home" />
        <NavLink href="/p/pastel-diary/live/schedule" label="schedule" />
        <NavLink href="/p/pastel-diary/live/archive" label="archive" />
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
      className="flex items-baseline justify-between text-[10px] md:text-[11px] mt-20 px-5 md:px-10 py-10 max-w-[1200px] mx-auto"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: `1px dashed ${PALETTE.inkSoft}`,
        color: PALETTE.inkFaint,
        letterSpacing: 0.5,
      }}
    >
      <span
        className="text-[16px] md:text-[18px]"
        style={{ fontFamily: FONTS.handwriting }}
      >
        ♡ see you soon
      </span>
      <span style={{ fontFamily: "ui-monospace, monospace" }}>
        PATTERN 01 · PASTEL DIARY
      </span>
    </footer>
  );
}
