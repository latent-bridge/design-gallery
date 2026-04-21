"use client";

import { useEffect, useRef, useState } from "react";

const NATIVE_WIDTH = 1440;
const NATIVE_HEIGHT = 900; // 16:10 crop of pattern's top section

export function PatternThumbnail({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      if (width > 0) setScale(width / NATIVE_WIDTH);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: `${NATIVE_WIDTH} / ${NATIVE_HEIGHT}`,
        background: "#fff",
        border: "1px solid var(--gallery-border)",
      }}
      aria-hidden
    >
      {/* relative iframe src resolves correctly under basePath */}
      <iframe
        src={`./p/${slug}/live/`}
        title={`${name} preview`}
        tabIndex={-1}
        scrolling="no"
        loading="lazy"
        style={{
          width: `${NATIVE_WIDTH}px`,
          height: `${NATIVE_HEIGHT}px`,
          transformOrigin: "top left",
          transform: scale ? `scale(${scale})` : "scale(0)",
          position: "absolute",
          top: 0,
          left: 0,
          border: "none",
          pointerEvents: "none",
          // Visible only after scale is calculated — avoids a flash at full size
          visibility: scale ? "visible" : "hidden",
        }}
      />
    </div>
  );
}
