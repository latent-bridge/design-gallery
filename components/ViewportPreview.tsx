"use client";

import { useState } from "react";
import Link from "next/link";
import type { PatternMeta } from "@/lib/patterns";
import { implementedSiblings } from "@/lib/patterns";

type ViewportKey = "desktop" | "mobile";

const VIEWPORTS: Record<
  ViewportKey,
  { label: string; shortLabel: string; width: number | null; height: number | null }
> = {
  desktop: { label: "DESKTOP", shortLabel: "▭", width: null, height: null },
  mobile: { label: "MOBILE 390", shortLabel: "☐", width: 390, height: 844 },
};

export function ViewportPreview({ pattern }: { pattern: PatternMeta }) {
  const [viewport, setViewport] = useState<ViewportKey>("desktop");
  const { prev, next } = implementedSiblings(pattern.slug);
  const config = VIEWPORTS[viewport];
  const isMobile = viewport === "mobile";

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#e9e6df" }}
    >
      <Header
        pattern={pattern}
        viewport={viewport}
        setViewport={setViewport}
        prev={prev}
        next={next}
      />
      <main className="flex-1 flex items-start justify-center p-4 md:p-8 overflow-auto">
        <div
          style={{
            width: config.width ? `${config.width}px` : "100%",
            maxWidth: config.width ? `${config.width}px` : "100%",
            minHeight: config.height ? `${config.height}px` : "calc(100vh - 120px)",
            background: "#fff",
            borderRadius: isMobile ? 28 : 2,
            boxShadow: isMobile
              ? "0 12px 40px rgba(0,0,0,0.18), 0 0 0 10px #1a1a1a, 0 0 0 11px #333"
              : "0 4px 24px rgba(0,0,0,0.08)",
            overflow: "hidden",
            transition: "all 0.3s ease",
            position: "relative",
          }}
        >
          <iframe
            // Relative URL so basePath doesn't need threading through client env.
            // Current location is /p/<slug>/ with trailingSlash → resolves correctly.
            src="./live/"
            title={`${pattern.name} preview`}
            style={{
              width: "100%",
              height: config.height ? `${config.height}px` : "calc(100vh - 120px)",
              border: "none",
              display: "block",
              background: "#fff",
            }}
          />
        </div>
      </main>
    </div>
  );
}

function Header({
  pattern,
  viewport,
  setViewport,
  prev,
  next,
}: {
  pattern: PatternMeta;
  viewport: ViewportKey;
  setViewport: (v: ViewportKey) => void;
  prev: PatternMeta | null;
  next: PatternMeta | null;
}) {
  return (
    <header
      className="flex flex-wrap items-center justify-between gap-3 px-4 md:px-5 py-3"
      style={{
        background: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[2px] hover:opacity-60 transition-opacity"
          style={{ color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
        >
          ← GALLERY
        </Link>
        <div
          className="h-5 w-px hidden sm:block"
          style={{ background: "rgba(0,0,0,0.12)" }}
        />
        <div className="hidden sm:flex items-baseline gap-2">
          <span
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: 2,
              color: "rgba(0,0,0,0.4)",
            }}
          >
            {String(pattern.number).padStart(2, "0")}
          </span>
          <h1
            className="text-[14px] font-bold"
            style={{ color: "#1a1a1a", margin: 0 }}
          >
            {pattern.name}
          </h1>
        </div>
      </div>

      <ViewportToggle viewport={viewport} setViewport={setViewport} />

      <div className="flex items-center gap-1.5">
        <NavButton
          href={prev ? `/p/${prev.slug}` : null}
          label="← PREV"
        />
        <NavButton
          href={next ? `/p/${next.slug}` : null}
          label="NEXT →"
        />
      </div>
    </header>
  );
}

function ViewportToggle({
  viewport,
  setViewport,
}: {
  viewport: ViewportKey;
  setViewport: (v: ViewportKey) => void;
}) {
  return (
    <div
      className="flex gap-0"
      style={{
        background: "#f4f2ed",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: 4,
        padding: 2,
      }}
    >
      {(Object.keys(VIEWPORTS) as ViewportKey[]).map((key) => {
        const active = viewport === key;
        const cfg = VIEWPORTS[key];
        return (
          <button
            key={key}
            onClick={() => setViewport(key)}
            className="font-mono flex items-center gap-1.5 transition-colors"
            style={{
              fontSize: 10,
              letterSpacing: 1.5,
              padding: "6px 12px",
              background: active ? "#1a1a1a" : "transparent",
              color: active ? "#fff" : "rgba(0,0,0,0.55)",
              border: "none",
              borderRadius: 2,
              cursor: "pointer",
            }}
            aria-pressed={active}
          >
            <span style={{ fontSize: 12 }}>{cfg.shortLabel}</span>
            <span className="hidden sm:inline">{cfg.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function NavButton({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) {
  const base = {
    fontSize: 10,
    letterSpacing: 1.5,
    padding: "6px 10px",
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: 2,
  } as const;

  if (!href) {
    return (
      <span
        className="font-mono"
        style={{ ...base, color: "rgba(0,0,0,0.3)", opacity: 0.5 }}
      >
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="font-mono hover:bg-black hover:text-white transition-colors"
      style={{ ...base, color: "rgba(0,0,0,0.6)", textDecoration: "none" }}
    >
      {label}
    </Link>
  );
}
