import { TEA, PALETTE, FONTS, CATEGORY_COLOR, type Category } from "../data";
import {
  TrackedLabel,
  MinchoHeadline,
  LineButton,
  CategoryMark,
  VerticalStamp,
} from "../components";

export default function TeaHouseSchedulePage() {
  return (
    <main className="max-w-[1080px] mx-auto px-5 md:px-12">
      <header className="py-10 md:py-16 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-start">
        <div>
          <div className="mb-3">
            <TrackedLabel size={11} tracking={8}>
              季 節 の 便 り
            </TrackedLabel>
          </div>
          <MinchoHeadline size="lg">
            四月、<br />春の夜長に。
          </MinchoHeadline>
          <p
            className="mt-5 md:mt-6"
            style={{
              fontSize: 14,
              color: PALETTE.inkFaint,
              lineHeight: 2,
              maxWidth: 480,
            }}
          >
            本週の配信日程でございます。変更ある場合は、当日までにお知らせを差し上げます。時刻はいずれも JST にて。
          </p>
        </div>
        <div className="hidden md:flex justify-end pt-2">
          <VerticalStamp>
            {TEA.streamer.erarabel} {TEA.streamer.monthKanji}
          </VerticalStamp>
        </div>
      </header>

      <div>
        {TEA.schedule.map((s, i) => (
          <DayRow key={s.day} entry={s} index={i} />
        ))}
      </div>

      <div className="mt-10 flex gap-3 items-center flex-wrap">
        <LineButton href="/p/tea-house/live">← お品書きへ</LineButton>
        <LineButton href="/p/tea-house/live/archive" filled>
          お品を見る
        </LineButton>
      </div>
    </main>
  );
}

function DayRow({
  entry,
  index,
}: {
  entry: (typeof TEA.schedule)[number];
  index: number;
}) {
  const isOff = entry.off === true;
  return (
    <article
      className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_120px_1fr_auto] gap-4 md:gap-6 items-start py-5 md:py-6"
      style={{
        borderTop: index === 0 ? `1px solid ${PALETTE.espresso}` : "none",
        borderBottom: `1px solid ${PALETTE.inkSoft}`,
        opacity: isOff ? 0.5 : 1,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: FONTS.serif,
            fontSize: 36,
            fontWeight: 500,
            color: PALETTE.espresso,
            lineHeight: 1,
          }}
        >
          {entry.kanjiDay}
        </div>
        <div
          className="mt-1"
          style={{
            fontSize: 10,
            letterSpacing: 3,
            color: PALETTE.inkFaint,
          }}
        >
          {entry.day}
        </div>
      </div>

      <div
        className="hidden md:block"
        style={{
          fontFamily: FONTS.body,
          fontSize: 12,
          color: PALETTE.inkFaint,
          letterSpacing: 2,
          paddingTop: 6,
        }}
      >
        {entry.dateLabel}
      </div>

      <div className="col-span-2 md:col-span-1">
        <div className="flex items-baseline gap-3 flex-wrap mb-2">
          <h2
            className="text-[20px] md:text-[26px]"
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 500,
              color: PALETTE.ink,
              margin: 0,
              letterSpacing: "-0.02em",
              textDecoration: isOff ? "line-through" : "none",
            }}
          >
            {entry.title}
          </h2>
          {!isOff && <CategoryMark category={entry.category} />}
        </div>
        <div
          style={{
            fontSize: 12,
            letterSpacing: 2,
            color: PALETTE.inkMuted,
          }}
        >
          {entry.time}
        </div>
        <p
          className="mt-3 md:mt-4"
          style={{
            fontSize: 13,
            color: PALETTE.inkMuted,
            lineHeight: 2,
            margin: 0,
            maxWidth: 480,
          }}
        >
          {entry.note}
        </p>
      </div>

      <div
        className="hidden md:flex items-start pt-2"
        style={{
          fontSize: 11,
          letterSpacing: 3,
          color: PALETTE.inkFaint,
        }}
      >
        {!isOff && <span>お し ら せ →</span>}
      </div>
    </article>
  );
}
