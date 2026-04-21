import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fan Site Design Gallery",
  description: "配信者ファンサイト HOME デザイン 15 案カタログ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Hina+Mincho&family=Shippori+Mincho:wght@400;500;700&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=Zen+Maru+Gothic:wght@500;700;900&family=M+PLUS+Rounded+1c:wght@400;700;900&family=Caveat:wght@400;600;700&family=Kalam:wght@400;700&family=Quicksand:wght@400;500;600;700&family=Press+Start+2P&family=DotGothic16&family=VT323&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
