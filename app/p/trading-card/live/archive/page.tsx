"use client";

import { useMemo, useState } from "react";
import {
  COLLECTION,
  PALETTE,
  FONTS,
  RARITY_CONFIG,
  type Rarity,
} from "../data";
import { CollectionCard, RarityBadge } from "../components";

type Filter = "ALL" | Rarity | "LOCKED";

const FILTERS: Filter[] = ["ALL", "SSR", "SR", "R", "N", "LOCKED"];

export default function TradingCardArchivePage() {
  const [active, setActive] = useState<Filter>("ALL");
  const [showLocked, setShowLocked] = useState(true);

  const filtered = useMemo(() => {
    return COLLECTION.archive.filter((c) => {
      if (!showLocked && c.locked) return false;
      if (active === "ALL") return true;
      if (active === "LOCKED") return c.locked === true;
      return c.rarity === active && !c.locked;
    });
  }, [active, showLocked]);

  return (
    <main className="max-w-[1280px] mx-auto px-5 md:px-10">
      <header className="pt-6 md:pt-8 pb-6 md:pb-8">
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
            marginBottom: 8,
          }}
        >
          ▸ FULL COLLECTION · {COLLECTION.stats.unlocked} /{" "}
          {COLLECTION.stats.total}
        </div>
        <h1
          className="text-[36px] md:text-[48px]"
          style={{
            fontWeight: 800,
            letterSpacing: -1,
            color: PALETTE.inkRich,
            lineHeight: 1,
            margin: 0,
          }}
        >
          ぜんぶ、みる。
        </h1>
        <p
          className="mt-4 text-[13px] md:text-[14px] max-w-[560px]"
          style={{ color: PALETTE.inkMuted, lineHeight: 1.7 }}
        >
          すべてのアーカイブがここに。レア度で絞って、お気に入りだけ並べることもできます。
        </p>
      </header>

      <nav
        className="flex flex-wrap gap-2 items-center pb-5 mb-8"
        style={{ borderBottom: `2px solid ${PALETTE.ink}` }}
      >
        {FILTERS.map((f) => (
          <FilterChip
            key={f}
            filter={f}
            active={active === f}
            onClick={() => setActive(f)}
          />
        ))}
        <label
          className="ml-auto flex items-center gap-2 cursor-pointer"
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            color: PALETTE.inkMuted,
            letterSpacing: 1,
          }}
        >
          <input
            type="checkbox"
            checked={showLocked}
            onChange={(e) => setShowLocked(e.target.checked)}
            style={{ accentColor: PALETTE.ink }}
          />
          SHOW LOCKED
        </label>
      </nav>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div
          className="grid gap-5 md:gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            paddingTop: 8,
          }}
        >
          {filtered.map((card, i) => (
            <div
              key={card.id}
              className="flex justify-center"
              style={{ paddingTop: 10, paddingBottom: 10 }}
            >
              <CollectionCard
                card={card}
                rotate={(i % 3) - 1}
                size="sm"
              />
            </div>
          ))}
        </div>
      )}

      <div
        className="mt-12 flex items-center justify-between flex-wrap gap-2"
        style={{
          fontFamily: FONTS.mono,
          fontSize: 11,
          color: PALETTE.inkMuted,
          letterSpacing: 1,
        }}
      >
        <span>
          SHOWING {filtered.length} / {COLLECTION.archive.length} CARDS
        </span>
        <span>SORT: NEWEST FIRST</span>
      </div>
    </main>
  );
}

function FilterChip({
  filter,
  active,
  onClick,
}: {
  filter: Filter;
  active: boolean;
  onClick: () => void;
}) {
  const isRarity = filter !== "ALL" && filter !== "LOCKED";
  const label = filter === "LOCKED" ? "🔒 LOCKED" : filter;
  return (
    <button
      onClick={onClick}
      className="transition-colors"
      style={{
        padding: "6px 14px",
        background: active ? PALETTE.ink : "transparent",
        color: active ? PALETTE.accentPink : PALETTE.ink,
        border: `2px solid ${PALETTE.ink}`,
        fontFamily: FONTS.mono,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1,
        cursor: "pointer",
      }}
    >
      {label}
      {isRarity && active && (
        <span style={{ marginLeft: 6, opacity: 0.7, fontSize: 9 }}>
          {"★".repeat(RARITY_CONFIG[filter as Rarity].starCount)}
        </span>
      )}
    </button>
  );
}

function EmptyState() {
  return (
    <div
      className="text-center py-16"
      style={{
        background: "rgba(255,255,255,0.4)",
        border: `2px dashed ${PALETTE.inkSoft}`,
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 8 }}>🃏</div>
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: PALETTE.inkRich,
          marginBottom: 6,
        }}
      >
        カードがありません
      </div>
      <div
        style={{
          fontSize: 12,
          color: PALETTE.inkMuted,
          fontFamily: FONTS.mono,
          letterSpacing: 1,
        }}
      >
        TRY ANOTHER FILTER
      </div>
    </div>
  );
}
