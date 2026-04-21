"use client";

import { useMemo, useState } from "react";
import { LOOKBOOK, PALETTE, FONTS, type Category } from "../data";
import { LookCard, Eyebrow, EditorialLink } from "../components";

type Filter = "ALL" | Category;

const FILTERS: Filter[] = [
  "ALL",
  "TALK",
  "GAMES",
  "MUSIC",
  "CREATIVE",
  "COLLAB",
  "MEMBER",
];

export default function LookbookArchivePage() {
  const [active, setActive] = useState<Filter>("ALL");

  const filtered = useMemo(() => {
    if (active === "ALL") return LOOKBOOK.looks;
    return LOOKBOOK.looks.filter((l) => l.category === active);
  }, [active]);

  return (
    <main className="max-w-[1320px] mx-auto px-5 md:px-12">
      <header className="py-6 md:py-10">
        <Eyebrow>COMPLETE ARCHIVE · {LOOKBOOK.looks.length} LOOKS</Eyebrow>
        <h1
          className="text-[36px] md:text-[56px]"
          style={{
            fontFamily: FONTS.body,
            fontWeight: 300,
            letterSpacing: -1.5,
            lineHeight: 0.95,
            color: PALETTE.ink,
            margin: "10px 0 0",
          }}
        >
          Every issue,<br />
          <span style={{ color: PALETTE.inkMuted }}>in one place.</span>
        </h1>
        <p
          className="text-[12px] md:text-[13px] mt-5 md:mt-6"
          style={{
            color: PALETTE.inkMuted,
            lineHeight: 1.7,
            maxWidth: 540,
          }}
        >
          The full set of broadcasts, arranged in reverse chronological order.
          Select a category to narrow the view.
        </p>
      </header>

      <nav
        className="flex flex-wrap gap-0 items-stretch mb-8 md:mb-12"
        style={{
          borderTop: `1px solid ${PALETTE.ink}`,
          borderBottom: `1px solid ${PALETTE.ink}`,
        }}
      >
        {FILTERS.map((f, i) => (
          <FilterTab
            key={f}
            filter={f}
            active={active === f}
            onClick={() => setActive(f)}
            isLast={i === FILTERS.length - 1}
          />
        ))}
        <span
          className="ml-auto flex items-center px-4"
          style={{
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: PALETTE.inkMuted,
            fontFamily: FONTS.mono,
          }}
        >
          {filtered.length} / {LOOKBOOK.looks.length}
        </span>
      </nav>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((look) => (
            <LookCard key={look.id} look={look} />
          ))}
        </div>
      )}

      <div
        className="mt-12 md:mt-16 pt-6 flex items-center justify-between gap-4 flex-wrap"
        style={{ borderTop: `1px solid ${PALETTE.ink}` }}
      >
        <EditorialLink href="/p/lookbook/live">← Back to home</EditorialLink>
        <span
          style={{
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: PALETTE.inkMuted,
            fontFamily: FONTS.mono,
          }}
        >
          SORT · LATEST FIRST
        </span>
      </div>
    </main>
  );
}

function FilterTab({
  filter,
  active,
  onClick,
  isLast,
}: {
  filter: Filter;
  active: boolean;
  onClick: () => void;
  isLast: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="transition-colors"
      style={{
        padding: "12px 18px",
        background: active ? PALETTE.ink : "transparent",
        color: active ? "#fff" : PALETTE.ink,
        border: "none",
        borderRight: isLast ? "none" : `1px solid ${PALETTE.ink}`,
        fontSize: 10,
        letterSpacing: 2,
        textTransform: "uppercase",
        fontWeight: 500,
        cursor: "pointer",
        fontFamily: FONTS.body,
      }}
    >
      {filter}
    </button>
  );
}

function EmptyState() {
  return (
    <div
      className="text-center py-20"
      style={{
        border: `1px solid ${PALETTE.ink}`,
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: PALETTE.inkMuted,
          marginBottom: 8,
        }}
      >
        NO LOOKS IN THIS CATEGORY
      </div>
      <div
        style={{
          fontSize: 13,
          color: PALETTE.ink,
          fontWeight: 300,
        }}
      >
        Try another filter.
      </div>
    </div>
  );
}
