"use client";

import { useMemo, useState } from "react";
import { TEA, PALETTE, FONTS, CATEGORY_COLOR, type Category } from "../data";
import {
  TrackedLabel,
  MinchoHeadline,
  LineButton,
  ItemCard,
} from "../components";

type Filter = "すべて" | Category;

const FILTERS: Filter[] = [
  "すべて",
  "雑談",
  "手業",
  "音曲",
  "客人",
  "遊技",
  "常連",
];

export default function TeaHouseArchivePage() {
  const [active, setActive] = useState<Filter>("すべて");

  const filtered = useMemo(() => {
    if (active === "すべて") return TEA.items;
    return TEA.items.filter((i) => i.category === active);
  }, [active]);

  return (
    <main className="max-w-[1280px] mx-auto px-5 md:px-12">
      <header className="py-10 md:py-16">
        <div className="mb-3">
          <TrackedLabel size={11} tracking={8}>
            お 品 の 棚
          </TrackedLabel>
        </div>
        <MinchoHeadline size="lg">
          これまでの、<br />
          お品。
        </MinchoHeadline>
        <p
          className="mt-5 md:mt-6"
          style={{
            fontSize: 14,
            color: PALETTE.inkFaint,
            lineHeight: 2,
            maxWidth: 520,
          }}
        >
          これまでに並べてきたお品を、ひととおり揃えております。しゅるいでお選び頂くこともできます。
        </p>
      </header>

      <nav
        className="flex flex-wrap items-center gap-3 py-4 md:py-5 mb-8 md:mb-10"
        style={{
          borderTop: `1px solid ${PALETTE.espresso}`,
          borderBottom: `1px solid ${PALETTE.espresso}`,
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: PALETTE.inkFaint,
            marginRight: 4,
          }}
        >
          しゅるい
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
            fontSize: 12,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
          }}
        >
          {filtered.length} / {TEA.items.length} 品
        </span>
      </nav>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((i) => (
            <ItemCard key={i.id} item={i} />
          ))}
        </div>
      )}

      <div className="mt-10 md:mt-14 flex gap-3 items-center flex-wrap">
        <LineButton href="/p/tea-house/live">← お品書きへ</LineButton>
        <LineButton href="/p/tea-house/live/schedule">
          季節の便り
        </LineButton>
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
    filter === "すべて"
      ? PALETTE.ink
      : CATEGORY_COLOR[filter as Category];
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px 14px",
        background: active ? color : "transparent",
        color: active ? PALETTE.bg : color,
        border: `1px solid ${color}`,
        fontSize: 12,
        letterSpacing: 3,
        fontFamily: FONTS.body,
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
        border: `1px solid ${PALETTE.inkSoft}`,
        background: PALETTE.paper,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.serif,
          fontSize: 24,
          fontWeight: 500,
          color: PALETTE.espresso,
          letterSpacing: "-0.02em",
          marginBottom: 6,
        }}
      >
        お品はまだございません
      </div>
      <div
        style={{
          fontSize: 13,
          color: PALETTE.inkMuted,
        }}
      >
        別のしゅるいをお選びくださいませ。
      </div>
    </div>
  );
}
