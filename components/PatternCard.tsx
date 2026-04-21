import Link from "next/link";
import type { PatternMeta } from "@/lib/patterns";
import { PatternThumbnail } from "./PatternThumbnail";

export function PatternCard({ pattern }: { pattern: PatternMeta }) {
  return (
    <Link
      href={`/p/${pattern.slug}`}
      className="block h-full hover:-translate-y-0.5 transition-transform"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="h-full p-5 transition-all"
        style={{
          background: "var(--gallery-panel)",
          border: `1px solid var(--gallery-border)`,
        }}
      >
        <div className="flex items-baseline justify-between mb-3">
          <div
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: "var(--gallery-ink-faint)",
            }}
          >
            案 {String(pattern.number).padStart(2, "0")}
          </div>
          <span
            className="font-mono"
            style={{
              fontSize: 10,
              padding: "2px 7px",
              border: `1px solid var(--gallery-border)`,
              color: "var(--gallery-ink-faint)",
              letterSpacing: 1,
            }}
          >
            {pattern.lang}
          </span>
        </div>

        <div className="mb-4">
          <PatternThumbnail slug={pattern.slug} name={pattern.name} />
        </div>

        <h3
          className="text-[17px] font-bold mb-2"
          style={{ color: "var(--gallery-ink)" }}
        >
          {pattern.name}
        </h3>

        <p
          className="text-[13px] leading-relaxed mb-3"
          style={{ color: "var(--gallery-ink-muted)" }}
        >
          {pattern.direction}
        </p>

        <div
          className="text-[11px] italic"
          style={{ color: "var(--gallery-ink-faint)" }}
        >
          → {pattern.target}
        </div>
      </div>
    </Link>
  );
}
