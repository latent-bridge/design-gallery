import { implementedPatterns } from "@/lib/patterns";
import { PatternCard } from "@/components/PatternCard";

export default function GalleryIndexPage() {
  const patterns = implementedPatterns();

  return (
    <div className="px-5 md:px-10 py-10 md:py-16 max-w-[1400px] mx-auto">
      <GalleryHeader count={patterns.length} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {patterns.map((p) => (
          <PatternCard key={p.slug} pattern={p} />
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
        <span>FAN SITE DESIGN GALLERY</span>
        <span>LATENT BRIDGE</span>
      </footer>
    </div>
  );
}

function GalleryHeader({ count }: { count: number }) {
  return (
    <header className="mb-12 md:mb-16 max-w-[820px]">
      <div
        className="font-mono mb-6 md:mb-8"
        style={{
          fontSize: 10,
          letterSpacing: "0.3em",
          color: "var(--gallery-ink-faint)",
          textTransform: "uppercase",
        }}
      >
        latent bridge{" "}
        <span style={{ margin: "0 10px", opacity: 0.5 }}>/</span>{" "}
        fan site design gallery
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
        配信者ファンサイトのデザイン案を {count}{" "}
        通り、方向性の異なるビジュアル言語でご用意しています。各案をクリックすると、HOME
        / SCHEDULE / ARCHIVE の 3 画面を実寸でご覧いただけます。
      </p>
    </header>
  );
}
