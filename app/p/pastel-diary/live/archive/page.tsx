"use client";

import { useMemo, useState } from "react";
import { DIARY, PALETTE, FONTS, CATEGORIES, type Category } from "../data";
import { Polaroid, type Tone, StickyNote } from "../components";

type FilterKey = "all" | Category;

const FILTERS: FilterKey[] = [
  "all",
  "talk",
  "games",
  "creative",
  "music",
  "collab",
  "member",
];

export default function PastelDiaryArchivePage() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = useMemo(() => {
    if (active === "all") return DIARY.archives;
    return DIARY.archives.filter((a) => a.category === active);
  }, [active]);

  return (
    <main className="max-w-[1200px] mx-auto px-5 md:px-10">
      <header style={{ padding: "40px 0 24px", position: "relative" }}>
        <div
          style={{
            fontSize: 13,
            color: PALETTE.burgundy,
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          ⌇ memories
        </div>
        <h1
          style={{
            fontFamily: FONTS.serif,
            fontSize: "clamp(36px, 5.5vw, 56px)",
            lineHeight: 1.05,
            fontWeight: 400,
            color: PALETTE.inkDeep,
            margin: 0,
          }}
        >
          思い出のアルバム。
        </h1>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: PALETTE.inkMuted,
            maxWidth: 520,
            marginTop: 14,
          }}
        >
          これまでのアーカイブを少しずつ。気になるジャンルで絞り込めます。
        </p>
        <div
          style={{
            position: "absolute",
            top: 24,
            right: -8,
            pointerEvents: "none",
          }}
        >
          <StickyNote rotate={5}>
            お気に入り、
            <br />
            また見てね ♡
          </StickyNote>
        </div>
      </header>

      <nav
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          padding: "12px 0 28px",
          borderBottom: `1px dashed ${PALETTE.inkSoft}`,
          marginBottom: 32,
        }}
      >
        {FILTERS.map((f) => (
          <FilterChip
            key={f}
            active={active === f}
            label={
              f === "all"
                ? "ALL"
                : CATEGORIES[f as Category].label
            }
            color={
              f === "all"
                ? PALETTE.burgundy
                : CATEGORIES[f as Category].color
            }
            bg={
              f === "all"
                ? "transparent"
                : CATEGORIES[f as Category].bg
            }
            onClick={() => setActive(f)}
          />
        ))}
        <span
          style={{
            marginLeft: "auto",
            fontSize: 11,
            color: PALETTE.inkFaint,
            fontFamily: "ui-monospace, monospace",
            letterSpacing: 1,
            alignSelf: "center",
          }}
        >
          {filtered.length} / {DIARY.archives.length} entries
        </span>
      </nav>

      {filtered.length === 0 ? (
        <EmptyState />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 40,
            paddingTop: 12,
          }}
        >
          {filtered.map((a, i) => (
            <article
              key={a.id}
              style={{ position: "relative", paddingTop: 24 }}
            >
              <Polaroid
                photoLabel={CATEGORIES[a.category as Category].label}
                tone={a.tone as Tone}
                caption={a.title}
                rotate={(i % 3) - 1}
                style={{ width: "100%", height: 260 }}
              />
              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: 11,
                  color: PALETTE.inkFaint,
                  fontFamily: "ui-monospace, monospace",
                  letterSpacing: 0.5,
                }}
              >
                <span>
                  {a.date} · {a.duration}
                </span>
                <span>{a.views}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

function FilterChip({
  label,
  color,
  bg,
  active,
  onClick,
}: {
  label: string;
  color: string;
  bg: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 14px",
        background: active ? color : bg,
        color: active ? "#fff" : color,
        border: `1px solid ${color}`,
        borderRadius: 20,
        fontSize: 12,
        fontFamily: "ui-monospace, monospace",
        letterSpacing: 0.5,
        cursor: "pointer",
        transition: "all 0.15s ease",
      }}
    >
      {label}
    </button>
  );
}

function EmptyState() {
  return (
    <div
      style={{
        padding: "80px 0",
        textAlign: "center",
        color: PALETTE.inkFaint,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.handwriting,
          fontSize: 24,
          color: PALETTE.burgundy,
          marginBottom: 8,
        }}
      >
        nothing here yet…
      </div>
      <div style={{ fontSize: 13 }}>
        このジャンルのアーカイブはまだありません。
      </div>
    </div>
  );
}
