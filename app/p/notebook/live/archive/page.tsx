"use client";

import { useMemo, useState } from "react";
import { NOTEBOOK, PALETTE, FONTS, CATEGORY_COLOR, type Category } from "../data";
import {
  HandHeadline,
  MetaHeader,
  NotebookPageCard,
  DoodleButton,
} from "../components";

type Filter = "ぜんぶ" | Category;

const FILTERS: Filter[] = [
  "ぜんぶ",
  "おしゃべり",
  "おえかき",
  "ゲーム",
  "カラオケ",
  "コラボ",
  "メンバー",
];

export default function NotebookArchivePage() {
  const [active, setActive] = useState<Filter>("ぜんぶ");

  const filtered = useMemo(() => {
    if (active === "ぜんぶ") return NOTEBOOK.pages;
    return NOTEBOOK.pages.filter((p) => p.category === active);
  }, [active]);

  return (
    <main
      className="max-w-[1200px] mx-auto pr-5 md:pr-10 pb-10"
      style={{ paddingLeft: "max(28px, 130px)" }}
    >
      <header className="pt-6 md:pt-10 pb-6 md:pb-8">
        <MetaHeader
          items={[
            ["SUBJECT", "はいしんノート"],
            ["ENTRIES", String(NOTEBOOK.pages.length)],
            ["SORT", "さいしん"],
          ]}
        />
        <HandHeadline size="lg">ぜんぶの ぺーじ。</HandHeadline>
        <p
          style={{
            fontFamily: FONTS.hand,
            fontSize: 16,
            color: PALETTE.inkMuted,
            lineHeight: 1.7,
            marginTop: 10,
            maxWidth: 560,
          }}
        >
          これまでに かいた ノート ぜんぶ。しゅるいで しぼって ゆっくり よんでね。
        </p>
      </header>

      <nav
        className="flex flex-wrap gap-2 items-center py-4 mb-8"
        style={{
          borderTop: `2px dashed ${PALETTE.marginLine}`,
          borderBottom: `2px dashed ${PALETTE.marginLine}`,
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            color: PALETTE.inkMuted,
            letterSpacing: 1.5,
            marginRight: 6,
          }}
        >
          しゅるい:
        </span>
        {FILTERS.map((f) => (
          <FilterChip
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
            fontSize: 15,
            color: PALETTE.inkMuted,
          }}
        >
          {filtered.length} / {NOTEBOOK.pages.length} まい
        </span>
      </nav>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((p) => (
            <NotebookPageCard key={p.id} page={p} />
          ))}
        </div>
      )}

      <div className="mt-10 flex gap-3 items-center flex-wrap">
        <DoodleButton href="/p/notebook/live" color={PALETTE.red}>
          ← ひょうしに もどる
        </DoodleButton>
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
  const color =
    filter === "ぜんぶ" ? PALETTE.ink : CATEGORY_COLOR[filter as Category].color;
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px 12px",
        background: active ? color : "transparent",
        color: active ? "#fff" : color,
        border: `2px dashed ${color}`,
        fontFamily: FONTS.hand,
        fontSize: 14,
        fontWeight: 700,
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
        background: PALETTE.paper,
        border: `2px dashed ${PALETTE.inkFaint}`,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.headline,
          fontSize: 26,
          color: PALETTE.inkMuted,
          marginBottom: 8,
        }}
      >
        まだ かいてないみたい
      </div>
      <div
        style={{
          fontFamily: FONTS.hand,
          fontSize: 15,
          color: PALETTE.inkMuted,
        }}
      >
        ほかの しゅるいを みてね ♡
      </div>
    </div>
  );
}
