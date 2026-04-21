import { implementedPatterns } from "@/lib/patterns";
import { PatternCard } from "@/components/PatternCard";

export default function GalleryIndexPage() {
  const patterns = implementedPatterns();

  return (
    <div className="px-6 md:px-10 py-10 md:py-14 max-w-[1400px] mx-auto">
      <header className="mb-10 md:mb-14">
        <div
          className="font-mono mb-3"
          style={{
            fontSize: 10,
            letterSpacing: 3,
            color: "var(--gallery-ink-faint)",
            textTransform: "uppercase",
          }}
        >
          latent bridge / fan site design gallery
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
          配信者ファンサイトのデザイン案を {patterns.length} 通り、方向性の異なるビジュアル言語でご用意しています。各案をクリックすると、HOME / SCHEDULE / ARCHIVE の 3 画面を実寸でご覧いただけます。
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {patterns.map((p) => (
          <PatternCard key={p.slug} pattern={p} />
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
        <span>FAN SITE DESIGN GALLERY</span>
        <span>LATENT BRIDGE</span>
      </footer>
    </div>
  );
}
