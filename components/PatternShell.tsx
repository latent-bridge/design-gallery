import Link from "next/link";
import type { PatternMeta } from "@/lib/patterns";
import { implementedSiblings } from "@/lib/patterns";

export function PatternShell({
  pattern,
  children,
}: {
  pattern: PatternMeta;
  children: React.ReactNode;
}) {
  const { prev, next } = implementedSiblings(pattern.slug);

  return (
    <div className="min-h-screen" style={{ background: "var(--gallery-bg)" }}>
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-5 py-3"
        style={{
          background: "var(--gallery-panel)",
          borderBottom: "1px solid var(--gallery-border)",
        }}
      >
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-mono text-[11px] tracking-[2px]"
            style={{ color: "var(--gallery-ink-muted)" }}
          >
            ← GALLERY
          </Link>
          <div className="h-5 w-px" style={{ background: "var(--gallery-border)" }} />
          <div className="flex items-baseline gap-2">
            <span
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: 2,
                color: "var(--gallery-ink-faint)",
              }}
            >
              {String(pattern.number).padStart(2, "0")}
            </span>
            <h1 className="text-[15px] font-bold" style={{ color: "var(--gallery-ink)" }}>
              {pattern.name}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <NavButton href={prev ? `/p/${prev.slug}` : null} label="← PREV" disabled={!prev} />
          <NavButton href={next ? `/p/${next.slug}` : null} label="NEXT →" disabled={!next} />
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}

function NavButton({
  href,
  label,
  disabled,
}: {
  href: string | null;
  label: string;
  disabled: boolean;
}) {
  const base = {
    fontSize: 10,
    letterSpacing: 1.5,
    padding: "6px 10px",
    border: "1px solid var(--gallery-border)",
  } as const;

  if (disabled || !href) {
    return (
      <span
        className="font-mono"
        style={{ ...base, color: "var(--gallery-ink-faint)", opacity: 0.4 }}
      >
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="font-mono hover:bg-black hover:text-white transition-colors"
      style={{ ...base, color: "var(--gallery-ink-muted)" }}
    >
      {label}
    </Link>
  );
}
