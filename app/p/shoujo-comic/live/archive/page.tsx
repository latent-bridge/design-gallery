"use client";

import { useMemo, useState } from "react";
import { SHOUJO, PALETTE, FONTS, ARC_COLOR, type Arc } from "../data";
import {
  ComicPanel,
  EpisodeCard,
  PillButton,
  ChapterTag,
  Sparkle,
} from "../components";

type Filter = "ALL" | Arc;

const FILTERS: Filter[] = [
  "ALL",
  "雑談編",
  "ゲーム編",
  "音楽編",
  "創作編",
  "コラボ編",
  "メンバー編",
];

export default function ShoujoComicArchivePage() {
  const [active, setActive] = useState<Filter>("ALL");

  const filtered = useMemo(() => {
    if (active === "ALL") return SHOUJO.episodes;
    return SHOUJO.episodes.filter((e) => e.arc === active);
  }, [active]);

  return (
    <main className="max-w-[1280px] mx-auto px-5 md:px-8 relative">
      <header className="py-8 md:py-12 relative">
        <ChapterTag>BACKLOG · {SHOUJO.episodes.length} EPISODES</ChapterTag>
        <h1
          className="text-[36px] md:text-[52px] mt-2"
          style={{
            fontWeight: 900,
            color: PALETTE.ink,
            lineHeight: 0.95,
            margin: 0,
            letterSpacing: -1,
          }}
        >
          まえまえ回の、<br />
          まとめ。
        </h1>
        <p
          className="mt-4 md:mt-5 text-[13px] md:text-[14px]"
          style={{
            color: PALETTE.inkMuted,
            lineHeight: 1.8,
            maxWidth: 520,
            fontWeight: 500,
          }}
        >
          これまでのエピソード、ぜんぶここに。編で絞って、気になる話からどうぞ♡
        </p>
        <Sparkle
          char="♡"
          size={44}
          color={PALETTE.pink}
          style={{
            position: "absolute",
            top: 40,
            right: 30,
            transform: "rotate(-12deg)",
          }}
        />
      </header>

      <nav
        className="flex flex-wrap items-center gap-2 py-4 mb-8"
        style={{
          borderTop: `3px solid ${PALETTE.ink}`,
          borderBottom: `3px solid ${PALETTE.ink}`,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
            marginRight: 4,
          }}
        >
          編 —
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
            fontSize: 13,
            fontWeight: 900,
            color: PALETTE.pinkDeep,
          }}
        >
          {filtered.length} / {SHOUJO.episodes.length}
        </span>
      </nav>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>
      )}

      <div className="mt-10 flex gap-3 items-center flex-wrap">
        <PillButton href="/p/shoujo-comic/live" variant="outline">
          ← cover
        </PillButton>
        <PillButton href="/p/shoujo-comic/live/schedule">this week</PillButton>
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
    filter === "ALL" ? PALETTE.ink : ARC_COLOR[filter as Arc];
  return (
    <button
      onClick={onClick}
      style={{
        padding: "4px 12px",
        background: active ? color : PALETTE.panelWhite,
        color: active ? "#fff" : color,
        border: `2px solid ${color}`,
        borderRadius: 14,
        fontSize: 12,
        fontWeight: 700,
        fontFamily: FONTS.body,
        cursor: "pointer",
        boxShadow: active ? `2px 2px 0 ${color}` : "none",
      }}
    >
      {filter}
    </button>
  );
}

function EmptyState() {
  return (
    <ComicPanel tone="white" offset={6}>
      <div className="py-16 text-center">
        <Sparkle char="✧" size={40} color={PALETTE.pink} />
        <div
          className="text-[20px] md:text-[24px] mt-3"
          style={{
            fontWeight: 900,
            color: PALETTE.ink,
            marginBottom: 6,
          }}
        >
          この編のお話は<br />まだないみたい…
        </div>
        <div
          style={{
            fontSize: 13,
            color: PALETTE.inkMuted,
            fontWeight: 500,
          }}
        >
          別の編をのぞいてみてね♡
        </div>
      </div>
    </ComicPanel>
  );
}
