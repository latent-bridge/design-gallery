import Link from "next/link";
import { ARCADE, PALETTE, FONTS, ACCENTS } from "./data";
import {
  CabinetFrame,
  LcdStat,
  PixelButton,
  StickerTag,
  VodCard,
} from "./components";

export default function ArcadeHomePage() {
  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-6 py-6 md:py-10 relative">
      <CabinetSection />
      <StatsBlock />
      <NextStageAndRoster />
      <LatestVods />
    </main>
  );
}

// ─── CABINET SECTION ─── physical form preserved from original 06, palette from variant-c
function CabinetSection() {
  const { player, nextStage } = ARCADE;
  return (
    <section className="py-4 md:py-8 relative">
      <CabinetFrame title={player.name}>
        <div className="h-full flex flex-col justify-between">
          {/* PRESS START */}
          <div
            style={{
              fontFamily: FONTS.pixel,
              fontSize: 10,
              color: PALETTE.green,
              letterSpacing: 2,
              textAlign: "center",
            }}
          >
            ★ PRESS START ★
          </div>

          {/* FAN CLUB / Site title on CRT */}
          <div className="text-center py-3">
            <h1
              style={{
                fontFamily: FONTS.pixel,
                fontSize: "clamp(24px, 5.5vw, 44px)",
                color: PALETTE.ink,
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: 1,
                textShadow: `3px 3px 0 ${PALETTE.magenta}, 6px 6px 0 ${PALETTE.cyan}`,
              }}
            >
              FAN
              <br />
              CLUB
            </h1>
          </div>

          {/* PLAYER 1 / PLAYER 2 */}
          <div className="text-center">
            <div
              style={{
                fontFamily: FONTS.term,
                fontSize: 18,
                color: PALETTE.ink,
              }}
            >
              ◆ 1P · {player.name.toLowerCase()}
            </div>
            <div
              style={{
                fontFamily: FONTS.term,
                fontSize: 17,
                color: PALETTE.inkDim,
                marginTop: 2,
              }}
            >
              ◆ 2P · YOU
            </div>
          </div>

          {/* Hi-score line */}
          <div
            className="text-center mt-2"
            style={{
              fontFamily: FONTS.pixel,
              fontSize: 8,
              color: PALETTE.yellow,
              letterSpacing: 2,
            }}
          >
            HI-SCORE · {player.highScore} FRIENDS
          </div>

          {/* Insert coin */}
          <div
            className="text-center mt-2"
            style={{
              fontFamily: FONTS.term,
              fontSize: 16,
              color: PALETTE.ink,
              animation: "c-blink 1.4s infinite",
            }}
          >
            INSERT COIN ▼
          </div>
        </div>
      </CabinetFrame>

      {/* Floating sticker tags */}
      <div
        className="hidden md:block"
        style={{ position: "absolute", top: 60, left: 20 }}
      >
        <StickerTag color={PALETTE.yellow} rotate={-5}>
          ★ NEW HI-SCORE!
        </StickerTag>
      </div>
      <div
        className="hidden md:block"
        style={{ position: "absolute", bottom: 40, right: 20 }}
      >
        <StickerTag color={PALETTE.magenta} rotate={4}>
          NEW CHALLENGER →
        </StickerTag>
      </div>

      {/* Hero CTA row (outside the cabinet, readable on mobile) */}
      <div className="flex gap-3 mt-6 justify-center flex-wrap">
        <PixelButton primary href="/p/arcade/live/archive" label="A">
          WATCH VODS
        </PixelButton>
        <PixelButton href="/p/arcade/live/schedule" label="B">
          NEXT STAGE
        </PixelButton>
      </div>

      {/* Tagline */}
      <p
        className="text-center mt-6"
        style={{
          fontFamily: FONTS.term,
          fontSize: 18,
          color: PALETTE.inkDim,
          maxWidth: 480,
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6,
          whiteSpace: "pre-line",
        }}
      >
        &gt; {ARCADE.player.tagline}
      </p>
    </section>
  );
}

// ─── STATS ───
function StatsBlock() {
  const { stats } = ARCADE;
  return (
    <section className="py-8 md:py-12">
      <div
        className="mb-4"
        style={{
          fontFamily: FONTS.pixel,
          fontSize: 10,
          color: PALETTE.inkDim,
          letterSpacing: 2,
        }}
      >
        &gt;&gt; PLAYER_STATS
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <LcdStat label="FLWRS" value={stats.flwrs} color={PALETTE.cyan} />
        <LcdStat label="SUBS" value={stats.subs} color={PALETTE.magenta} />
        <LcdStat label="STRMS" value={stats.strms} color={PALETTE.yellow} />
        <LcdStat label="YRS" value={stats.yrs} color={PALETTE.green} />
      </div>
    </section>
  );
}

// ─── NEXT STAGE + ROSTER ───
function NextStageAndRoster() {
  const { nextStage, games } = ARCADE;
  return (
    <section className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-4 md:gap-5">
      <div
        style={{
          background: PALETTE.panel,
          border: `2px solid ${PALETTE.cyan}`,
          padding: 18,
          boxShadow: `4px 4px 0 ${PALETTE.cyan}`,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.pixel,
            fontSize: 9,
            color: PALETTE.cyan,
            letterSpacing: 2,
          }}
        >
          &gt;&gt; NEXT_STAGE
        </div>
        <div
          style={{
            fontFamily: FONTS.pixel,
            fontSize: 16,
            color: PALETTE.ink,
            lineHeight: 1.5,
            marginTop: 12,
          }}
        >
          {nextStage.title}
        </div>
        <div
          style={{
            fontFamily: FONTS.term,
            fontSize: 18,
            color: PALETTE.inkDim,
            marginTop: 4,
          }}
        >
          &gt; {nextStage.subtitle}
        </div>
        <div
          className="mt-4 inline-flex items-center gap-2"
          style={{
            padding: "7px 12px",
            background: PALETTE.bg,
            border: `2px solid ${PALETTE.yellow}`,
            boxShadow: `3px 3px 0 ${PALETTE.yellow}`,
          }}
        >
          <span
            style={{
              fontFamily: FONTS.pixel,
              fontSize: 8,
              color: PALETTE.yellow,
              letterSpacing: 1.5,
            }}
          >
            T—MINUS
          </span>
          <span
            style={{
              fontFamily: FONTS.term,
              fontSize: 20,
              color: PALETTE.yellow,
            }}
          >
            03:12:44
          </span>
        </div>
        <div className="mt-4">
          <PixelButton href="/p/arcade/live/schedule" small label="B">
            FULL SCHEDULE
          </PixelButton>
        </div>
      </div>

      <div
        style={{
          background: PALETTE.panel,
          border: `2px solid ${PALETTE.magenta}`,
          padding: 18,
          boxShadow: `4px 4px 0 ${PALETTE.magenta}`,
        }}
      >
        <div
          style={{
            fontFamily: FONTS.pixel,
            fontSize: 9,
            color: PALETTE.magenta,
            letterSpacing: 2,
          }}
        >
          &gt;&gt; ROSTER
        </div>
        <div className="mt-3 flex flex-col gap-2">
          {games.map((g, i) => (
            <div
              key={g}
              style={{
                fontFamily: FONTS.term,
                fontSize: 17,
                color: PALETTE.ink,
                padding: "5px 10px",
                background: i === 0 ? `${PALETTE.magenta}30` : "transparent",
                borderLeft: `4px solid ${ACCENTS[i % ACCENTS.length]}`,
              }}
            >
              {String(i + 1).padStart(2, "0")}. {g}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── LATEST VODS ───
function LatestVods() {
  const latest = ARCADE.archive.slice(0, 3);
  return (
    <section className="py-8 md:py-12">
      <div className="flex items-baseline justify-between flex-wrap gap-3 mb-4 md:mb-5">
        <div
          style={{
            fontFamily: FONTS.pixel,
            fontSize: 11,
            color: PALETTE.yellow,
            letterSpacing: 2,
            textShadow: `2px 2px 0 ${PALETTE.magenta}`,
          }}
        >
          &gt;&gt; LATEST_VODS
        </div>
        <Link
          href="/p/arcade/live/archive"
          style={{
            fontFamily: FONTS.pixel,
            fontSize: 9,
            color: PALETTE.cyan,
            letterSpacing: 1.5,
            textDecoration: "none",
            borderBottom: `1px solid ${PALETTE.cyan}`,
            paddingBottom: 2,
          }}
        >
          VIEW ALL [C] →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {latest.map((vod) => (
          <VodCard key={vod.id} vod={vod} />
        ))}
      </div>
    </section>
  );
}
