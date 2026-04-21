import Link from "next/link";
import { CAFE, PALETTE, FONTS } from "./data";
import {
  MenuCard,
  MenuItemRow,
  CafeButton,
  CategoryChip,
  HandCaption,
  Eyebrow,
  SpecialCard,
} from "./components";

export default function CafeMenuHomePage() {
  return (
    <main className="max-w-[1200px] mx-auto px-5 md:px-10">
      <HeroSection />
      <Regulars />
      <NewIn />
      <Reservations />
    </main>
  );
}

// ─── HERO ─── two-column: today's menu card + welcome copy
function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-6 md:py-10">
      <TodayMenuCard />
      <WelcomeColumn />
    </section>
  );
}

function TodayMenuCard() {
  const { today } = CAFE;
  return (
    <MenuCard>
      <div
        style={{
          textAlign: "center",
          borderBottom: `2px dashed ${PALETTE.latte}`,
          paddingBottom: 12,
          marginBottom: 14,
        }}
      >
        <HandCaption size={30} color={PALETTE.espresso}>
          ~ today's menu ~
        </HandCaption>
        <div
          style={{
            fontSize: 11,
            letterSpacing: 3,
            color: PALETTE.latte,
            marginTop: 6,
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {today.dateLabel} · {today.openAt}
        </div>
      </div>
      <div>
        {today.menu.map((item) => (
          <MenuItemRow
            key={item.id}
            name={item.name}
            desc={item.desc}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
      <div className="mt-4">
        <HandCaption size={20} color={PALETTE.espresso}>
          thanks for stopping by ♡
        </HandCaption>
      </div>
    </MenuCard>
  );
}

function WelcomeColumn() {
  const { shop } = CAFE;
  return (
    <div className="flex flex-col justify-center">
      <Eyebrow>welcome</Eyebrow>
      <h1
        className="text-[52px] md:text-[72px] lg:text-[80px]"
        style={{
          fontFamily: FONTS.hand,
          fontWeight: 700,
          color: PALETTE.ink,
          lineHeight: 0.95,
          margin: "10px 0 0",
        }}
      >
        pull up a<br />chair. ☕
      </h1>
      <p
        className="text-[13px] md:text-[14px] mt-5 md:mt-6"
        style={{
          color: "rgba(60,40,20,0.7)",
          lineHeight: 1.75,
          maxWidth: 400,
        }}
      >
        {shop.tagline}
      </p>
      <div className="flex gap-3 mt-6 flex-wrap">
        <CafeButton href="/p/cafe-menu/live/schedule">order ♡</CafeButton>
        <CafeButton variant="outline" href="/p/cafe-menu/live/archive">
          past specials
        </CafeButton>
      </div>
    </div>
  );
}

// ─── REGULARS ─── (fan letters styled as a guest book)
function Regulars() {
  return (
    <section className="py-8 md:py-12">
      <Eyebrow>regulars</Eyebrow>
      <HandCaption size={36} color={PALETTE.ink} align="left">
        our usual crowd.
      </HandCaption>
      <p
        className="text-[13px] mt-2 mb-6"
        style={{
          color: PALETTE.inkMuted,
          lineHeight: 1.75,
          maxWidth: 520,
          fontStyle: "italic",
        }}
      >
        The folks who keep coming back. We remember what you order.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {CAFE.reservations.map((r, i) => (
          <article
            key={i}
            style={{
              background: PALETTE.paperCream,
              border: `1.5px solid ${PALETTE.dotted}`,
              borderRadius: 4,
              padding: "16px 18px",
            }}
          >
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <div
                style={{
                  fontFamily: FONTS.hand,
                  fontSize: 22,
                  color: PALETTE.espresso,
                  fontWeight: 600,
                }}
              >
                ☕ {r.from}
              </div>
              <div
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 10,
                  color: PALETTE.inkFaint,
                  letterSpacing: 1,
                }}
              >
                {r.date}
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                color: PALETTE.inkWarm,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {r.note}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── NEW IN ─── (latest archives, 3 cards)
function NewIn() {
  const newest = CAFE.specials.slice(0, 3);
  return (
    <section className="py-8 md:py-12">
      <div className="flex items-baseline justify-between gap-3 flex-wrap mb-4 md:mb-6">
        <div>
          <Eyebrow>new in</Eyebrow>
          <HandCaption size={36} color={PALETTE.ink} align="left">
            fresh this week.
          </HandCaption>
        </div>
        <Link
          href="/p/cafe-menu/live/archive"
          style={{
            fontFamily: FONTS.hand,
            fontSize: 22,
            color: PALETTE.latte,
            fontWeight: 600,
            textDecoration: "underline",
            textDecorationStyle: "dashed",
          }}
        >
          see the whole menu →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {newest.map((s) => (
          <SpecialCard key={s.id} special={s} />
        ))}
      </div>
    </section>
  );
}

// ─── RESERVATIONS ─── CTA block
function Reservations() {
  return (
    <section className="py-8 md:py-12">
      <div
        style={{
          background: PALETTE.paperCream,
          border: `2px solid ${PALETTE.espresso}`,
          borderRadius: 4,
          boxShadow: `4px 4px 0 ${PALETTE.espresso}`,
          padding: "28px 26px",
        }}
        className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center"
      >
        <div>
          <Eyebrow>reservations</Eyebrow>
          <HandCaption size={34} color={PALETTE.ink} align="left">
            save a seat for tonight.
          </HandCaption>
          <p
            style={{
              fontSize: 13,
              color: PALETTE.inkWarm,
              lineHeight: 1.75,
              marginTop: 10,
              maxWidth: 480,
            }}
          >
            Drop in any time during hours. Members get a reserved table in the
            back. No dress code, quiet or loud welcome.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <CafeButton href="/p/cafe-menu/live/schedule">see the hours</CafeButton>
          <CafeButton variant="outline">membership</CafeButton>
        </div>
      </div>
    </section>
  );
}
