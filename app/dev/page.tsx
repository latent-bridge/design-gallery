import Link from "next/link";
import { PATTERNS } from "@/lib/patterns";
import { DevPatternCard } from "@/components/DevPatternCard";

// Internal dev view: all 15 patterns with status badges, counter, progress notes.
// Not linked from the customer-facing / index — share URL directly when needed.

export default function DevIndexPage() {
  const done = PATTERNS.filter((p) => p.status === "done").length;
  const wip = PATTERNS.filter((p) => p.status === "in-progress").length;

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
            CATALOG · v2 · FEMININE DIRECTION · DEV
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: "var(--gallery-ink-faint)",
            }}
          >
            {done} DONE · {wip} WIP · {PATTERNS.length} TOTAL
          </div>
        </div>
        <h1
          className="text-[32px] md:text-[44px] font-extrabold leading-tight mb-4"
          style={{ color: "var(--gallery-ink)", letterSpacing: "-0.02em" }}
        >
          配信者ファンサイト — デザイン 15 案 <span style={{ color: "var(--gallery-accent)" }}>(DEV)</span>
        </h1>
        <p
          className="text-[14px] md:text-[15px] leading-relaxed max-w-[820px]"
          style={{ color: "var(--gallery-ink-muted)" }}
        >
          中堅女性配信者を想定した、公式ファンサイトの方向性探索 15 案。
          <b>かわいい／上品／文学的／和／少女漫画／カフェ／ランウェイ</b>{" "}
          などフェミニン寄りのビジュアル言語で作成。
          各案をクリックすると、その案の世界観で作り込まれた個別サイトに入れます (実装済みのみ)。
          ページ構成・導線・タイポは案ごとに独立しており、共通のシェルは最小限。
        </p>

        <div
          className="mt-6 p-4 max-w-[820px]"
          style={{
            background: "var(--gallery-highlight)",
            borderLeft: "3px solid var(--gallery-accent)",
            fontSize: 12,
            lineHeight: 1.55,
            color: "#5a4a2a",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          ▸ STATUS: 1 パターンずつ順次実装中。カードが COMING SOON のものはまだ作業前。
          順序は番号通り (01 → 15)。各案の標準ページは HOME / SCHEDULE / ARCHIVE の 3 ページから
          始め、案ごとに固有ページを追加・差し替え可。
        </div>

        <div
          className="mt-4 max-w-[820px]"
          style={{
            fontSize: 11,
            color: "var(--gallery-ink-faint)",
            fontFamily: "ui-monospace, monospace",
            letterSpacing: 1,
          }}
        >
          ▸ INTERNAL VIEW · 顧客向けは{" "}
          <Link
            href="/"
            style={{ color: "var(--gallery-ink)", textDecoration: "underline" }}
          >
            /
          </Link>
          {" "}(実装済みのみ表示)
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PATTERNS.map((p) => (
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
        <span>FAN SITE DESIGN GALLERY · DEV</span>
        <span>LATENT BRIDGE</span>
      </footer>
    </div>
  );
}
