import type { Metadata } from "next";
import Link from "next/link";
import { PATTERNS, implementedPatterns } from "@/lib/patterns";
import { DevPatternCard } from "@/components/DevPatternCard";

// Internal preview. Content is kept "safe-if-stumbled-on": no segment /
// gender framing, no backlog reveal (coming-soon cards hidden), just a
// neutral "n of N directions ready" indicator. noindex so search engines
// don't surface it.

export const metadata: Metadata = {
  title: "Design Gallery — Internal Preview",
  robots: { index: false, follow: false },
};

export default function DevIndexPage() {
  const visible = implementedPatterns();
  const wip = PATTERNS.filter((p) => p.status === "in-progress").length;
  const done = PATTERNS.filter((p) => p.status === "done").length;

  return (
    <div className="px-6 md:px-10 py-10 md:py-14 max-w-[1400px] mx-auto">
      <header className="mb-10 md:mb-14">
        <div className="flex items-baseline justify-between gap-3 flex-wrap mb-3">
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: 3,
              color: "var(--gallery-ink-faint)",
            }}
          >
            INTERNAL PREVIEW
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: "var(--gallery-ink-faint)",
            }}
          >
            {done} / {PATTERNS.length} READY
            {wip > 0 ? ` · ${wip} IN PROGRESS` : ""}
          </div>
        </div>
        <h1
          className="text-[32px] md:text-[44px] font-extrabold leading-tight mb-4"
          style={{ color: "var(--gallery-ink)", letterSpacing: "-0.02em" }}
        >
          配信者ファンサイト デザインギャラリー
        </h1>
        <p
          className="text-[14px] md:text-[15px] leading-relaxed max-w-[720px]"
          style={{ color: "var(--gallery-ink-muted)" }}
        >
          配信者ファンサイトのデザイン案を複数の方向性でご用意しています。各案をクリックすると、HOME / SCHEDULE / ARCHIVE の 3 画面を実寸でご覧いただけます。
        </p>

        <div
          className="mt-4"
          style={{
            fontSize: 11,
            color: "var(--gallery-ink-faint)",
            fontFamily: "ui-monospace, monospace",
            letterSpacing: 1,
          }}
        >
          公開用は{" "}
          <Link
            href="/"
            style={{ color: "var(--gallery-ink)", textDecoration: "underline" }}
          >
            /
          </Link>
          。こちらは status バッジ + 進捗カウンタ付きの内部ビューです。
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p) => (
          <DevPatternCard key={p.slug} pattern={p} />
        ))}
      </div>

      <footer
        className="mt-16 pt-6 flex items-center justify-between"
        style={{
          borderTop: "1px solid var(--gallery-border)",
          fontSize: 11,
          color: "var(--gallery-ink-faint)",
          fontFamily: "ui-monospace, monospace",
          letterSpacing: 1.5,
        }}
      >
        <span>FAN SITE DESIGN GALLERY · INTERNAL</span>
        <span>LATENT BRIDGE</span>
      </footer>
    </div>
  );
}
