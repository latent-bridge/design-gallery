"use client";

import { useMemo, useState } from "react";
import { CAFE, PALETTE, FONTS, CATEGORY_COLOR, type Category } from "../data";
import { SpecialCard, CafeButton, HandCaption, Eyebrow } from "../components";

type Filter = "all" | Category;

const FILTERS: Filter[] = [
  "all",
  "chatter",
  "craft",
  "tune",
  "guest",
  "brew",
  "patron",
];

export default function CafeMenuArchivePage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (active === "all") return CAFE.specials;
    return CAFE.specials.filter((s) => s.category === active);
  }, [active]);

  return (
    <main className="max-w-[1200px] mx-auto px-5 md:px-10">
      <header className="pt-6 md:pt-10 pb-6 md:pb-8">
        <Eyebrow>past specials</Eyebrow>
        <h1
          className="text-[44px] md:text-[64px]"
          style={{
            fontFamily: FONTS.hand,
            fontWeight: 700,
            color: PALETTE.ink,
            lineHeight: 0.95,
            margin: "10px 0 0",
          }}
        >
          yesterday's menu.
        </h1>
        <p
          className="text-[13px] md:text-[14px] mt-5"
          style={{
            color: "rgba(60,40,20,0.7)",
            lineHeight: 1.75,
            maxWidth: 520,
          }}
        >
          Everything we've served so far. If you missed it in person, the
          recording is here — same kettle, same warmth, from the shelf.
        </p>
      </header>

      <nav
        className="flex items-center flex-wrap gap-2 py-4"
        style={{
          borderTop: `1px dashed ${PALETTE.dotted}`,
          borderBottom: `1px dashed ${PALETTE.dotted}`,
          marginBottom: 32,
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
            textTransform: "uppercase",
            marginRight: 6,
            fontWeight: 500,
          }}
        >
          filter —
        </span>
        {FILTERS.map((f) => (
          <FilterTab
            key={f}
            filter={f}
            active={active === f}
            onClick={() => setActive(f)}
          />
        ))}
        <span
          className="ml-auto"
          style={{
            fontFamily: FONTS.hand,
            fontSize: 20,
            color: PALETTE.latte,
            fontWeight: 600,
          }}
        >
          {filtered.length} / {CAFE.specials.length} dishes
        </span>
      </nav>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((s) => (
            <SpecialCard key={s.id} special={s} />
          ))}
        </div>
      )}

      <div className="mt-10 flex gap-3 items-center flex-wrap">
        <CafeButton href="/p/cafe-menu/live">← today's menu</CafeButton>
        <CafeButton variant="outline" href="/p/cafe-menu/live/schedule">
          see hours
        </CafeButton>
      </div>
    </main>
  );
}

function FilterTab({
  filter,
  active,
  onClick,
}: {
  filter: Filter;
  active: boolean;
  onClick: () => void;
}) {
  const color =
    filter === "all"
      ? PALETTE.espresso
      : CATEGORY_COLOR[filter as Category].color;
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px 12px",
        background: active ? color : "transparent",
        color: active ? "#fff" : color,
        border: `1.5px solid ${color}`,
        borderRadius: 999,
        fontSize: 12,
        fontFamily: FONTS.body,
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {filter}
    </button>
  );
}

function EmptyState() {
  return (
    <div
      className="text-center py-16"
      style={{
        background: PALETTE.paperCream,
        border: `2px dashed ${PALETTE.dotted}`,
        borderRadius: 4,
      }}
    >
      <HandCaption size={28} color={PALETTE.espresso}>
        the shelf is empty today
      </HandCaption>
      <p
        className="mt-2"
        style={{
          fontSize: 13,
          color: PALETTE.inkMuted,
          fontStyle: "italic",
        }}
      >
        try another filter — plenty in the back.
      </p>
    </div>
  );
}
