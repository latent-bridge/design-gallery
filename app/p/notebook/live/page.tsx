import Link from "next/link";
import { NOTEBOOK, PALETTE, FONTS } from "./data";
import {
  HandHeadline,
  MetaHeader,
  SectionMarker,
  StudyPhoto,
  StampCard,
  DoodleButton,
  NotebookPageCard,
} from "./components";

export default function NotebookHomePage() {
  return (
    <main
      className="max-w-[1200px] mx-auto pr-5 md:pr-10 pb-10 relative"
      style={{
        paddingLeft: "max(28px, 130px)",
      }}
    >
      <Hero />
      <ThreeColumn />
      <RecentPages />
      <ClassmateNotes />

      {/* decorative tilted stamp */}
      <div
        aria-hidden
        className="hidden md:block"
        style={{
          position: "absolute",
          top: 30,
          right: 60,
          fontFamily: FONTS.headline,
          fontSize: 18,
          color: PALETTE.red,
          transform: "rotate(-8deg)",
          border: `2px solid ${PALETTE.red}`,
          padding: "4px 12px",
          borderRadius: 4,
          opacity: 0.9,
          zIndex: 0,
        }}
      >
        ◎ 提出用 ◎
      </div>
    </main>
  );
}

// ─── HERO ─── close match to original: meta header + big handwritten title
function Hero() {
  const { student } = NOTEBOOK;
  return (
    <section className="pt-6 md:pt-10 pb-6 md:pb-8">
      <MetaHeader
        items={[
          ["NAME", student.name],
          ["CLASS", student.className],
          ["DATE", student.date],
        ]}
      />
      <HandHeadline size="xl">配信者のノート ♡</HandHeadline>
      <div
        style={{
          fontFamily: FONTS.hand,
          fontSize: 15,
          color: PALETTE.inkMuted,
          marginTop: 10,
          maxWidth: 460,
        }}
      >
        ルーズリーフに、にっき と よてい と スタンプカード。すこしずつ かきこんで、かえってから よんでね。
      </div>
      <div className="mt-6 flex gap-3 items-center flex-wrap">
        <DoodleButton href="/p/notebook/live/schedule" color={PALETTE.red} filled>
          こんしゅう みる →
        </DoodleButton>
        <DoodleButton href="/p/notebook/live/archive" color={PALETTE.blue}>
          ぺーじを ひらく
        </DoodleButton>
      </div>

      {/* floating ♡ doodle */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 60,
          right: "18%",
          fontSize: 32,
          color: PALETTE.red,
          transform: "rotate(10deg)",
          zIndex: 0,
        }}
      >
        ♡
      </span>
    </section>
  );
}

// ─── 3-COLUMN LAYOUT ─── original core: self-intro / schedule / stamp card
function ThreeColumn() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr] gap-8 md:gap-10 py-6 md:py-8">
      <SelfIntro />
      <WeekSchedule />
      <StampSection />
    </section>
  );
}

function SelfIntro() {
  const { about } = NOTEBOOK;
  return (
    <div>
      <SectionMarker title="じこしょうかい" color={PALETTE.red} />
      <div
        style={{
          fontFamily: FONTS.hand,
          fontSize: 16,
          lineHeight: 1.75,
          whiteSpace: "pre-line",
          color: PALETTE.ink,
        }}
      >
        {about.intro}
      </div>
      <div className="mt-5">
        <StudyPhoto
          label={about.photoLabel}
          caption={about.photoCaption}
          rotate={-3}
        />
      </div>
    </div>
  );
}

function WeekSchedule() {
  return (
    <div>
      <SectionMarker title="こんしゅうのよてい" color={PALETTE.blue} />
      <div
        style={{
          fontFamily: FONTS.hand,
          fontSize: 15,
          lineHeight: 2,
        }}
      >
        {NOTEBOOK.schedule.map((s) => {
          const isOff = s.off === true;
          return (
            <div
              key={s.day}
              style={{
                color: isOff ? PALETTE.inkFaint : PALETTE.ink,
                textDecoration: isOff ? "line-through" : "none",
              }}
            >
              <span style={{ color: PALETTE.blue, fontWeight: 700 }}>
                {s.weekday}
              </span>{" "}
              ·{" "}
              {s.title}{" "}
              <span style={{ color: PALETTE.inkMuted, fontSize: 14 }}>
                {s.emoji}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <DoodleButton href="/p/notebook/live/schedule" color={PALETTE.blue}>
          くわしく →
        </DoodleButton>
      </div>
    </div>
  );
}

function StampSection() {
  return (
    <div>
      <SectionMarker title="スタンプカード" color={PALETTE.yellow} />
      <StampCard
        current={NOTEBOOK.stampCard.current}
        total={NOTEBOOK.stampCard.total}
        goal={NOTEBOOK.stampCard.goal}
        prize={NOTEBOOK.stampCard.prize}
      />
    </div>
  );
}

// ─── RECENT PAGES ─── archives as torn-page cards
function RecentPages() {
  const recent = NOTEBOOK.pages.slice(0, 3);
  return (
    <section className="py-10 md:py-14 relative">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
        <SectionMarker
          title="さいきんの授業ノート"
          color={PALETTE.red}
          size="lg"
        />
        <Link
          href="/p/notebook/live/archive"
          style={{
            fontFamily: FONTS.hand,
            fontSize: 16,
            color: PALETTE.red,
            textDecoration: "underline",
            textDecorationStyle: "dashed",
          }}
        >
          ぜんぶ みる →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {recent.map((p) => (
          <NotebookPageCard key={p.id} page={p} />
        ))}
      </div>
    </section>
  );
}

// ─── CLASSMATE NOTES ─── letters styled as folded paper notes
function ClassmateNotes() {
  return (
    <section className="py-10 md:py-14">
      <SectionMarker
        title="クラスメイトから"
        color={PALETTE.yellow}
        size="lg"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {NOTEBOOK.notes.map((note, i) => {
          const rotations = [-1.5, 1, -1];
          return (
            <div
              key={i}
              style={{
                background: i === 1 ? "#f8f4e0" : "#fff",
                padding: "18px 20px 16px",
                border: `1px solid ${PALETTE.inkFaint}`,
                transform: `rotate(${rotations[i]}deg)`,
                boxShadow: "2px 3px 6px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  color: PALETTE.inkMuted,
                  letterSpacing: 1.5,
                  marginBottom: 6,
                }}
              >
                FROM:{" "}
                <span style={{ color: PALETTE.ink, fontWeight: 600 }}>
                  {note.from} さん
                </span>
              </div>
              <p
                style={{
                  fontFamily: FONTS.hand,
                  fontSize: 16,
                  color: PALETTE.ink,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {note.message}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-6 text-center">
        <DoodleButton color={PALETTE.yellow} filled>
          ♡ おへんじを かく
        </DoodleButton>
      </div>
    </section>
  );
}
