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
    <div className="px-5 md:px-10 py-10 md:py-16 max-w-[1400px] mx-auto">
      <DevHeader
        done={done}
        wip={wip}
        total={PATTERNS.length}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {visible.map((p) => (
          <DevPatternCard key={p.slug} pattern={p} />
        ))}
      </div>

      <footer
        className="mt-16 md:mt-20 pt-6 flex items-center justify-between"
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

function DevHeader({
  done,
  wip,
  total,
}: {
  done: number;
  wip: number;
  total: number;
}) {
  return (
    <header className="mb-12 md:mb-16 max-w-[820px]">
      <div
        className="flex items-baseline justify-between gap-3 flex-wrap font-mono mb-6 md:mb-8"
        style={{
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "var(--gallery-ink-faint)",
          textTransform: "uppercase",
        }}
      >
        <span>internal preview</span>
        <span>
          {done} / {total} ready{wip > 0 ? ` · ${wip} in progress` : ""}
        </span>
      </div>

      <h1
        className="jp-keep"
        style={{
          fontFamily:
            '"Zen Kaku Gothic New", "Noto Sans JP", system-ui, sans-serif',
          fontWeight: 900,
          fontSize: "clamp(32px, 6.2vw, 56px)",
          letterSpacing: "-0.04em",
          lineHeight: 1.15,
          color: "var(--gallery-ink)",
          margin: 0,
          marginBottom: 22,
        }}
      >
        <span className="inline-block" style={{ whiteSpace: "nowrap" }}>
          配信者ファンサイト
        </span>{" "}
        <span className="inline-block" style={{ whiteSpace: "nowrap" }}>
          デザインギャラリー
        </span>
      </h1>

      <div
        style={{
          width: 48,
          height: 2,
          background: "var(--gallery-ink)",
          marginBottom: 22,
        }}
      />

      <p
        className="jp-keep"
        style={{
          fontSize: 15,
          lineHeight: 1.9,
          color: "var(--gallery-ink-muted)",
          maxWidth: 620,
          margin: 0,
        }}
      >
        配信者ファンサイトのデザイン案を複数の方向性でご用意しています。各案をクリックすると、HOME
        / SCHEDULE / ARCHIVE の 3 画面を実寸でご覧いただけます。
      </p>

      <div
        className="mt-5"
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
  );
}
