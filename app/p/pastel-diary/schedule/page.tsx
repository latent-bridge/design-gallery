import { DIARY, PALETTE, FONTS, type Category } from "../data";
import {
  SectionHeader,
  PinkPill,
  DashedLink,
  StickyNote,
  CategoryChip,
} from "../components";

export default function PastelDiarySchedulePage() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "0 40px" }}>
      <header style={{ padding: "40px 0 32px" }}>
        <div
          style={{
            fontSize: 13,
            color: PALETTE.burgundy,
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          ⌇ week of {DIARY.today.dateLabel}
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
          今週のよてい。
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
          配信がずれるときは X でお知らせします。OFF の日はだいたい寝てます。
        </p>
      </header>

      <div
        style={{
          position: "relative",
          background: PALETTE.paper,
          border: `1px solid ${PALETTE.inkSoft}`,
          padding: "0 0 24px",
        }}
      >
        {/* dotted planner header */}
        <div
          style={{
            padding: "18px 32px",
            borderBottom: `1px dashed ${PALETTE.inkSoft}`,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            fontFamily: FONTS.handwriting,
            color: PALETTE.burgundy,
          }}
        >
          <span style={{ fontSize: 22 }}>weekly planner</span>
          <span style={{ fontSize: 14, color: PALETTE.inkFaint }}>
            April · 2026
          </span>
        </div>

        {DIARY.schedule.map((s) => {
          const isOff = s.category === "off";
          return (
            <article
              key={s.day}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 24,
                padding: "20px 32px",
                borderBottom: `1px dashed ${PALETTE.inkSoft}`,
                alignItems: "start",
                opacity: isOff ? 0.55 : 1,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: FONTS.handwriting,
                    fontSize: 32,
                    color: PALETTE.burgundy,
                    lineHeight: 1,
                  }}
                >
                  {s.day}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: PALETTE.inkFaint,
                    fontFamily: "ui-monospace, monospace",
                    marginTop: 4,
                    letterSpacing: 1,
                  }}
                >
                  {s.dateLabel}
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: FONTS.serif,
                      fontSize: 22,
                      color: PALETTE.inkDeep,
                      fontWeight: 400,
                      margin: 0,
                      textDecoration: isOff ? "line-through" : "none",
                      textDecorationColor: PALETTE.inkFaint,
                    }}
                  >
                    {s.title}
                  </h2>
                  {!isOff && (
                    <CategoryChip category={s.category as Category} />
                  )}
                  <span
                    style={{
                      fontSize: 12,
                      color: PALETTE.inkMuted,
                      fontFamily: "ui-monospace, monospace",
                      letterSpacing: 0.5,
                    }}
                  >
                    {s.time}
                  </span>
                </div>
                <p
                  style={{
                    color: PALETTE.inkMuted,
                    lineHeight: 1.75,
                    margin: 0,
                    fontFamily: FONTS.handwriting,
                    fontSize: 18,
                  }}
                >
                  “{s.note}”
                </p>
              </div>
            </article>
          );
        })}

        {/* a stuck-on sticky note as planner decoration */}
        <div
          style={{
            position: "absolute",
            top: -16,
            right: -12,
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          <StickyNote rotate={4}>
            予定は
            <br />
            変わるかも
          </StickyNote>
        </div>
      </div>

      <div style={{ marginTop: 32, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
        <PinkPill>来週の予定を見る →</PinkPill>
        <DashedLink>📮 配信リクエストを送る</DashedLink>
      </div>
    </main>
  );
}
