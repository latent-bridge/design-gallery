import Link from "next/link";
import { DIARY, PALETTE, FONTS, CATEGORIES, type Category } from "./data";
import {
  SectionHeader,
  PinkPill,
  DashedLink,
  Polaroid,
  StickyNote,
  TapedCard,
  CategoryChip,
  type Tone,
} from "./components";

export default function PastelDiaryHomePage() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
      <HeroSection />
      <TonightSection />
      <WeekPreview />
      <LatestArchives />
      <LettersPreview />
    </main>
  );
}

// ─── HERO ─── (closely matches the original PastelDiary_D)
function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "40px 0 64px",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: 48,
        minHeight: 520,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 13,
            color: PALETTE.burgundy,
            letterSpacing: 2,
            marginBottom: 12,
          }}
        >
          ⌇ {DIARY.today.dateLabel}
        </div>
        <h1
          style={{
            fontFamily: FONTS.serif,
            fontSize: "clamp(40px, 6.5vw, 72px)",
            lineHeight: 1.05,
            fontWeight: 400,
            color: PALETTE.inkDeep,
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {DIARY.today.greeting}
        </h1>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.8,
            color: PALETTE.inkMuted,
            maxWidth: 420,
            marginTop: 22,
          }}
        >
          {DIARY.streamer.tagline}
        </p>
        <div
          style={{
            marginTop: 32,
            display: "flex",
            gap: 16,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <PinkPill>今日の配信を見る →</PinkPill>
          <DashedLink>📮 お手紙を書く</DashedLink>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          minHeight: 360,
        }}
      >
        <Polaroid
          photoLabel="streamer photo"
          caption="hi ♡ 2026.04"
          rotate={3}
          style={{
            position: "absolute",
            top: 0,
            right: 40,
            width: 260,
            height: 320,
          }}
        />
        <StickyNote
          rotate={-5}
          style={{
            position: "absolute",
            top: 200,
            right: 220,
            maxWidth: 160,
          }}
        >
          今夜21時から
          <br />
          おしゃべりだよ〜
        </StickyNote>
      </div>
    </section>
  );
}

function TonightSection() {
  const { nextStream } = DIARY;
  return (
    <section style={{ padding: "32px 0" }}>
      <SectionHeader en="tonight" jp="今夜のよてい" />
      <div
        style={{
          display: "flex",
          gap: 28,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <TapedCard tapeColor={PALETTE.yellow} rotate={-1}>
          <div
            style={{
              padding: "24px 28px",
              minWidth: 340,
              background: PALETTE.paper,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.handwriting,
                fontSize: 22,
                color: PALETTE.burgundy,
              }}
            >
              {nextStream.dayLabel}
            </div>
            <div
              style={{
                fontFamily: FONTS.serif,
                fontSize: 28,
                color: PALETTE.inkDeep,
                lineHeight: 1.25,
                marginTop: 6,
              }}
            >
              {nextStream.title}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 12,
              }}
            >
              <CategoryChip category={nextStream.category as Category} />
              <span style={{ fontSize: 13, color: PALETTE.inkMuted }}>
                {nextStream.time}
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: PALETTE.inkMuted,
                marginTop: 16,
                lineHeight: 1.7,
              }}
            >
              {nextStream.note}
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
              <PinkPill small>リマインドする</PinkPill>
              <DashedLink>カレンダーに追加</DashedLink>
            </div>
          </div>
        </TapedCard>

        <StickyNote rotate={3} style={{ maxWidth: 180, marginTop: 20 }}>
          たまに時間ずれるから
          <br />
          Xもみてね！
        </StickyNote>
      </div>
    </section>
  );
}

function WeekPreview() {
  return (
    <section style={{ padding: "32px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <SectionHeader en="this week" jp="今週のよてい" />
        <Link
          href="/p/pastel-diary/schedule"
          style={{
            fontFamily: FONTS.handwriting,
            fontSize: 18,
            color: PALETTE.burgundy,
            textDecoration: "underline",
            textDecorationStyle: "dashed",
          }}
        >
          全部みる →
        </Link>
      </div>
      <div
        style={{
          background: PALETTE.paper,
          border: `1px solid ${PALETTE.inkSoft}`,
          padding: "8px 0",
        }}
      >
        {DIARY.schedule.slice(0, 5).map((s) => {
          const isOff = s.category === "off";
          return (
            <div
              key={s.day}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 60px 1fr auto",
                gap: 20,
                padding: "14px 28px",
                borderBottom: `1px dashed ${PALETTE.inkSoft}`,
                alignItems: "center",
                opacity: isOff ? 0.5 : 1,
              }}
            >
              <span
                style={{
                  fontFamily: FONTS.handwriting,
                  fontSize: 22,
                  color: PALETTE.burgundy,
                }}
              >
                {s.day}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: PALETTE.inkFaint,
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                {s.dateLabel}
              </span>
              <span
                style={{
                  fontFamily: FONTS.serif,
                  fontSize: 17,
                  color: PALETTE.inkDeep,
                }}
              >
                {s.title}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: PALETTE.inkMuted,
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                {s.time}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function LatestArchives() {
  const latest = DIARY.archives.slice(0, 3);
  return (
    <section style={{ padding: "40px 0 32px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 24,
        }}
      >
        <SectionHeader en="memories" jp="最近のアーカイブ" />
        <Link
          href="/p/pastel-diary/archive"
          style={{
            fontFamily: FONTS.handwriting,
            fontSize: 18,
            color: PALETTE.burgundy,
            textDecoration: "underline",
            textDecorationStyle: "dashed",
          }}
        >
          全部みる →
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 32,
          paddingTop: 12,
        }}
      >
        {latest.map((a, i) => (
          <div key={a.id} style={{ position: "relative", paddingTop: 20 }}>
            <Polaroid
              photoLabel={a.category}
              tone={a.tone as Tone}
              caption={a.title}
              rotate={i % 2 === 0 ? 1 : -2}
              style={{ width: "100%", height: 280 }}
            />
            <div
              style={{
                marginTop: 10,
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11,
                color: PALETTE.inkFaint,
                fontFamily: "ui-monospace, monospace",
              }}
            >
              <span>
                {a.date} · {a.duration}
              </span>
              <span>{a.views} views</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LettersPreview() {
  return (
    <section style={{ padding: "32px 0" }}>
      <SectionHeader en="letters" jp="お手紙" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
        }}
      >
        {DIARY.letters.map((l, i) => (
          <div
            key={i}
            style={{
              background: PALETTE.paper,
              padding: "22px 24px",
              border: `1px solid ${PALETTE.inkSoft}`,
              transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)`,
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontFamily: FONTS.handwriting,
                fontSize: 20,
                color: PALETTE.burgundy,
              }}
            >
              from {l.from}
            </div>
            <p
              style={{
                fontSize: 13,
                color: PALETTE.inkMuted,
                lineHeight: 1.75,
                marginTop: 10,
              }}
            >
              {l.excerpt}
            </p>
            <div
              style={{
                marginTop: 12,
                fontSize: 10,
                color: PALETTE.inkFaint,
                fontFamily: "ui-monospace, monospace",
                letterSpacing: 1,
              }}
            >
              {l.date}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, textAlign: "center" }}>
        <PinkPill>お手紙を書く →</PinkPill>
      </div>
    </section>
  );
}
