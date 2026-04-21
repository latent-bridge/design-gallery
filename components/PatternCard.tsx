import Link from "next/link";
import type { PatternMeta } from "@/lib/patterns";

export function PatternCard({ pattern }: { pattern: PatternMeta }) {
  const isDone = pattern.status === "done";
  const isInProgress = pattern.status === "in-progress";
  const clickable = isDone || isInProgress;

  const body = (
    <div
      className="h-full p-5 transition-all"
      style={{
        background: "var(--gallery-panel)",
        border: `1px solid var(--gallery-border)`,
        opacity: clickable ? 1 : 0.55,
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
          PATTERN {String(pattern.number).padStart(2, "0")}
        </div>
        <StatusBadge status={pattern.status} />
      </div>

      <div
        className="aspect-[16/10] mb-4 flex items-center justify-center"
        style={{
          background: `repeating-linear-gradient(135deg, #e8e4dc, #e8e4dc 12px, rgba(0,0,0,0.04) 12px, rgba(0,0,0,0.04) 24px)`,
          border: `1px solid var(--gallery-border)`,
          color: "var(--gallery-ink-faint)",
          fontSize: 11,
        }}
      >
        <span className="font-mono">
          {isDone ? "PREVIEW" : isInProgress ? "WIP" : "COMING SOON"}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-[17px] font-bold" style={{ color: "var(--gallery-ink)" }}>
          {pattern.name}
        </h3>
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            padding: "2px 6px",
            border: `1px solid var(--gallery-border)`,
            color: "var(--gallery-ink-faint)",
            letterSpacing: 1,
          }}
        >
          {pattern.lang}
        </span>
      </div>

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
  );

  if (!clickable) return body;

  return (
    <Link
      href={`/p/${pattern.slug}`}
      className="block h-full hover:-translate-y-0.5 transition-transform"
    >
      {body}
    </Link>
  );
}

function StatusBadge({ status }: { status: PatternMeta["status"] }) {
  const styles = {
    done: {
      label: "DONE",
      bg: "#1a1a1a",
      fg: "#fff",
    },
    "in-progress": {
      label: "WIP",
      bg: "var(--gallery-accent)",
      fg: "#fff",
    },
    "coming-soon": {
      label: "SOON",
      bg: "transparent",
      fg: "var(--gallery-ink-faint)",
    },
  } as const;
  const s = styles[status];
  return (
    <span
      className="font-mono"
      style={{
        fontSize: 9,
        letterSpacing: 1.5,
        padding: "3px 7px",
        background: s.bg,
        color: s.fg,
        border:
          status === "coming-soon"
            ? "1px solid var(--gallery-border)"
            : "none",
      }}
    >
      {s.label}
    </span>
  );
}
