"use client";

import Link from "next/link";
import { useState } from "react";
import { PALETTE, FONTS, ACCENT_MAP, TAG_COLOR, type Tag, type VodEntry } from "./data";

// ═══ Pixel octagon moon/logo ═══
export function PixelOctagon({
  size = 40,
  color = PALETTE.yellow,
  inset = PALETTE.bg,
}: {
  size?: number;
  color?: string;
  inset?: string;
}) {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: size,
        height: size,
        background: color,
        imageRendering: "pixelated",
        position: "relative",
        boxShadow: `0 0 0 2px ${PALETTE.magenta}, 0 0 ${size * 0.3}px ${color}`,
        clipPath:
          "polygon(25% 0, 75% 0, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0 75%, 0 25%)",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: "30%",
          background: inset,
          borderRadius: "50%",
        }}
      />
    </span>
  );
}

// ═══ CRT scanlines + vignette overlay ═══
export function CrtOverlay({ zIndex = 1 }: { zIndex?: number }) {
  return (
    <>
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)",
          zIndex,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 50% 50%, transparent 50%, rgba(0,0,0,0.5) 100%)",
          zIndex,
        }}
      />
    </>
  );
}

// ═══ Cabinet frame (the signature physical form) ═══
export function CabinetFrame({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className="relative mx-auto"
      style={{
        maxWidth: 760,
        background: `linear-gradient(180deg, ${PALETTE.panel} 0%, ${PALETTE.panelDark} 100%)`,
        border: `5px solid ${PALETTE.panelBorder}`,
        borderRadius: "36px 36px 8px 8px / 12px 12px 3px 3px",
        padding: "22px 22px 28px",
        boxShadow: `0 20px 50px rgba(60,20,80,0.6), inset 0 0 0 1px rgba(255,255,255,0.03)`,
      }}
    >
      {/* Marquee */}
      <div
        className="text-center mb-4"
        style={{
          background: PALETTE.bg,
          color: PALETTE.cyan,
          fontFamily: FONTS.pixel,
          fontSize: 12,
          letterSpacing: 3,
          padding: "10px 14px",
          border: `2px solid ${PALETTE.cyan}`,
          boxShadow: `0 0 20px ${PALETTE.cyan}40, inset 0 0 12px ${PALETTE.cyan}20`,
        }}
      >
        ★ {title} ★
      </div>

      {/* CRT screen */}
      <div
        style={{
          background: PALETTE.panelDark,
          border: `8px solid ${PALETTE.bg}`,
          borderRadius: 20,
          padding: "28px 24px",
          position: "relative",
          overflow: "hidden",
          boxShadow: `inset 0 0 40px rgba(0,0,0,0.6)`,
          aspectRatio: "5 / 3",
        }}
      >
        <CrtOverlay zIndex={2} />
        {/* CRT gloss */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 40% 15%, rgba(255,255,255,0.08), transparent 55%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
        <div style={{ position: "relative", zIndex: 3, height: "100%" }}>
          {children}
        </div>
      </div>

      {/* Control panel */}
      <ControlPanel />

      {/* Coin slot */}
      <div
        className="text-center mt-5"
        style={{
          background: PALETTE.bg,
          color: PALETTE.cyan,
          fontFamily: FONTS.pixel,
          fontSize: 9,
          letterSpacing: 2.5,
          padding: "9px 14px",
          border: `2px solid ${PALETTE.panelBorder}`,
          borderRadius: 4,
        }}
      >
        〔 INSERT COIN 〕 CREDIT 01
      </div>
    </div>
  );
}

function ControlPanel() {
  return (
    <div
      className="flex items-center justify-between mt-6 px-3 md:px-6"
      style={{
        padding: "14px 22px",
        background: PALETTE.bg,
        border: `2px solid ${PALETTE.panelBorder}`,
        borderRadius: 6,
      }}
    >
      {/* Joystick */}
      <div
        aria-hidden
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: PALETTE.magenta,
          border: `4px solid ${PALETTE.bg}`,
          boxShadow: `inset 8px 8px 0 rgba(255,255,255,0.3), 0 0 16px ${PALETTE.magenta}80, 0 4px 0 ${PALETTE.panelBorder}`,
        }}
      />
      {/* Buttons A B C D with variant-c palette */}
      <div className="flex gap-2.5 md:gap-3">
        {[
          { k: "A", color: PALETTE.yellow },
          { k: "B", color: PALETTE.green },
          { k: "C", color: PALETTE.cyan },
          { k: "D", color: PALETTE.magenta },
        ].map((b) => (
          <div
            key={b.k}
            aria-hidden
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: b.color,
              border: `3px solid ${PALETTE.bg}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONTS.pixel,
              fontSize: 11,
              color: PALETTE.bg,
              boxShadow: `0 4px 0 rgba(0,0,0,0.45), inset 4px 4px 0 rgba(255,255,255,0.25)`,
            }}
          >
            {b.k}
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══ Floating sticker label (e.g. "NEW HI-SCORE!") ═══
export function StickerTag({
  children,
  color = PALETTE.yellow,
  rotate = -5,
  style,
}: {
  children: React.ReactNode;
  color?: string;
  rotate?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "8px 12px",
        background: color,
        border: `2px solid ${PALETTE.bg}`,
        color: PALETTE.bg,
        fontFamily: FONTS.pixel,
        fontSize: 9,
        letterSpacing: 1.5,
        transform: `rotate(${rotate}deg)`,
        boxShadow: `3px 3px 0 ${PALETTE.panelBorder}`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ═══ LCD stat card ═══
export function LcdStat({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      style={{
        background: PALETTE.bg,
        border: `2px solid ${color}`,
        padding: "12px 12px",
        boxShadow: `3px 3px 0 ${color}`,
      }}
    >
      <div
        style={{
          fontFamily: FONTS.pixel,
          fontSize: 8,
          color,
          letterSpacing: 1.5,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: FONTS.term,
          fontSize: 24,
          color: PALETTE.ink,
          marginTop: 4,
          letterSpacing: 0.5,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
    </div>
  );
}

// ═══ Pixel button — [A] LABEL style ═══
export function PixelButton({
  children,
  primary,
  href,
  small,
  label,
}: {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  small?: boolean;
  label?: string;
}) {
  const [down, setDown] = useState(false);
  const bg = primary ? PALETTE.cyan : PALETTE.panel;
  const color = primary ? PALETTE.bg : PALETTE.ink;
  const borderColor = primary ? PALETTE.cyan : PALETTE.panelBorder;
  const shadow = primary ? PALETTE.magenta : PALETTE.cyan;

  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: bg,
    color,
    border: `2px solid ${borderColor}`,
    fontFamily: FONTS.pixel,
    fontSize: small ? 9 : 10,
    letterSpacing: 1.5,
    padding: small ? "9px 14px" : "12px 18px",
    boxShadow: down ? "0 0 0 transparent" : `4px 4px 0 ${shadow}`,
    transform: down ? "translate(4px, 4px)" : "none",
    transition: "transform .08s, box-shadow .08s",
    textDecoration: "none",
    cursor: "pointer",
  } as const;

  const inner = (
    <>
      {label && <span style={{ opacity: 0.65 }}>[{label}]</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        style={style}
        onMouseDown={() => setDown(true)}
        onMouseUp={() => setDown(false)}
        onMouseLeave={() => setDown(false)}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button
      style={style}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      onMouseLeave={() => setDown(false)}
      type="button"
    >
      {inner}
    </button>
  );
}

// ═══ Live badge — ONLINE / AFK ═══
export function LiveBadge({ on }: { on: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: on ? PALETTE.magenta : "#2a1f4a",
        color: on ? PALETTE.bg : PALETTE.inkFaint,
        fontFamily: FONTS.pixel,
        fontSize: 9,
        letterSpacing: 1.5,
        padding: "6px 10px",
        boxShadow: on ? `3px 3px 0 ${PALETTE.yellow}` : `3px 3px 0 #1a1330`,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 8,
          height: 8,
          background: on ? PALETTE.yellow : PALETTE.inkFaint,
          animation: on ? "c-blink 0.9s steps(2) infinite" : "none",
        }}
      />
      {on ? "ONLINE" : "AFK"}
    </span>
  );
}

// ═══ Tag chip ═══
export function TagChip({
  tag,
  small,
}: {
  tag: Tag;
  small?: boolean;
}) {
  const color = TAG_COLOR[tag];
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: FONTS.pixel,
        fontSize: small ? 7 : 8,
        letterSpacing: 1.5,
        padding: small ? "3px 5px" : "4px 7px",
        background: color,
        color: PALETTE.bg,
      }}
    >
      {tag}
    </span>
  );
}

// ═══ VOD card for archive grid + latest preview ═══
export function VodCard({ vod }: { vod: VodEntry }) {
  const [hover, setHover] = useState(false);
  const c = ACCENT_MAP[vod.accentKey];
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: PALETTE.panel,
        border: `2px solid ${c}`,
        cursor: "pointer",
        boxShadow: hover ? `6px 6px 0 ${c}` : `4px 4px 0 ${c}`,
        transform: hover ? "translate(-2px, -2px)" : "none",
        transition: "transform .1s, box-shadow .1s",
      }}
    >
      <div
        style={{
          aspectRatio: "16 / 9",
          background: `linear-gradient(135deg, ${PALETTE.panelDark}, ${PALETTE.bg})`,
          position: "relative",
        }}
      >
        {/* Scanlines */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(0deg, ${c}22 0 1px, transparent 1px 4px)`,
          }}
        />
        {/* Pixel grid */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${c}18 1px, transparent 1px), linear-gradient(90deg, ${c}18 1px, transparent 1px)`,
            backgroundSize: "18px 18px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 8,
          }}
        >
          <TagChip tag={vod.tag} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 8,
            right: 8,
            fontFamily: FONTS.term,
            fontSize: 14,
            padding: "2px 6px",
            background: PALETTE.bg,
            color: PALETTE.ink,
          }}
        >
          {vod.duration}
        </div>
        {/* Hover play */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hover ? 1 : 0,
            transition: "opacity .15s",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              background: c,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: PALETTE.bg,
              fontSize: 18,
              boxShadow: `0 0 20px ${c}`,
              fontFamily: FONTS.pixel,
            }}
          >
            ▶
          </div>
        </div>
      </div>
      <div style={{ padding: 12 }}>
        <div
          style={{
            fontFamily: FONTS.dot,
            fontSize: 13,
            color: PALETTE.ink,
            lineHeight: 1.4,
            minHeight: 36,
          }}
        >
          {vod.title}
        </div>
        <div
          style={{
            fontFamily: FONTS.term,
            fontSize: 13,
            color: PALETTE.inkDim,
            marginTop: 6,
            letterSpacing: 0.5,
          }}
        >
          {vod.views} views · {vod.date}
        </div>
      </div>
    </article>
  );
}
