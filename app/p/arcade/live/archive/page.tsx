"use client";

import { useMemo, useState } from "react";
import { ARCADE, PALETTE, FONTS, type Tag } from "../data";
import { VodCard, PixelButton } from "../components";

type Filter = "ALL" | Tag;

const FILTERS: Filter[] = ["ALL", "FPS", "CHILL", "TALK", "MUSIC", "COLLAB", "MEMBER"];

export default function ArcadeArchivePage() {
  const [active, setActive] = useState<Filter>("ALL");

  const filtered = useMemo(() => {
    if (active === "ALL") return ARCADE.archive;
    return ARCADE.archive.filter((v) => v.tag === active);
  }, [active]);

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-6 py-6 md:py-10">
      <header className="pb-6 md:pb-8">
        <div
          style={{
            fontFamily: FONTS.pixel,
            fontSize: 10,
            color: PALETTE.inkDim,
            letterSpacing: 2,
            marginBottom: 8,
          }}
        >
          &gt;&gt; OPENING VOD_LIBRARY.DAT
        </div>
        <h1
          className="text-[28px] md:text-[40px]"
          style={{
            fontFamily: FONTS.pixel,
            color: PALETTE.ink,
            textShadow: `3px 3px 0 ${PALETTE.magenta}, 6px 6px 0 ${PALETTE.yellow}`,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: 1,
          }}
        >
          VOD LIBRARY
        </h1>
        <p
          className="mt-4 md:mt-5"
          style={{
            fontFamily: FONTS.term,
            fontSize: 17,
            color: PALETTE.inkDim,
            lineHeight: 1.7,
            maxWidth: 540,
          }}
        >
          &gt; 全 {ARCADE.archive.length} 本。タグで絞り込み可能。
        </p>
      </header>

      <nav
        className="flex flex-wrap items-stretch mb-6 md:mb-8"
        style={{
          border: `2px solid ${PALETTE.panelBorder}`,
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
          className="ml-auto flex items-center px-3"
          style={{
            fontFamily: FONTS.term,
            fontSize: 15,
            color: PALETTE.inkDim,
            letterSpacing: 0.5,
          }}
        >
          [{filtered.length}/{ARCADE.archive.length}]
        </span>
      </nav>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filtered.map((vod) => (
            <VodCard key={vod.id} vod={vod} />
          ))}
        </div>
      )}

      <div className="mt-10 flex gap-3 items-center flex-wrap">
        <PixelButton href="/p/arcade/live" label="A">
          ← HOME
        </PixelButton>
        <PixelButton href="/p/arcade/live/schedule" label="B">
          NEXT STAGE
        </PixelButton>
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
      style={{
        padding: "10px 14px",
        background: active ? PALETTE.cyan : "transparent",
        color: active ? PALETTE.bg : PALETTE.ink,
        border: "none",
        borderRight: isLast ? "none" : `2px solid ${PALETTE.panelBorder}`,
        fontFamily: FONTS.pixel,
        fontSize: 9,
        letterSpacing: 1.5,
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
        background: PALETTE.panel,
        border: `2px dashed ${PALETTE.panelBorder}`,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.pixel,
          fontSize: 14,
          color: PALETTE.magenta,
          marginBottom: 10,
          letterSpacing: 2,
        }}
      >
        NO DATA.
      </div>
      <div
        style={{
          fontFamily: FONTS.term,
          fontSize: 16,
          color: PALETTE.inkDim,
        }}
      >
        &gt; このタグでは まだデータ なし。
      </div>
    </div>
  );
}
