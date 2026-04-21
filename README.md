# fansite-design-gallery

配信者ファンサイト HOME デザイン **15 案カタログ**。
1 案ずつ実装を追加していき、一覧 (`/`) も段階的に埋まっていく運用。

## 用途

- クライアント (配信者・ディレクター) に 15 案の方向性を見てもらい、どの方向で本制作するかを決める
- GitHub Pages でサブパス配信 (`https://<org>.github.io/design-gallery/`) を想定

## 立ち上げ

```bash
pnpm install
pnpm dev    # http://localhost:3000
```

## 静的ビルド (GitHub Pages)

```bash
pnpm build                                           # 通常ビルド (basePath 無し)
NEXT_PUBLIC_BASE_PATH=/design-gallery pnpm build     # サブパス配信用
```

`out/` に静的ファイルが生成される。

## 設計方針

- **各パターンは独立した小サイト**。HOME / SCHEDULE / ARCHIVE の 3 ページを基本の起点にするが、
  **固定ではなく**案ごとに追加・削除・差し替え可 (例: CHAT/DM は会話画面そのものが HOME、
  ROOM はアイソメ探索、TRADING CARD はコレクション主体、など)。
- **共通化されるのは必要最小限**: GALLERY 一覧に出ること / GALLERY に戻れること / 前後の
  実装済みパターンへ飛べること、の 3 つだけ。フォント・色・レイアウト・ページ構成・ナビ形式は
  パターン側で自由に決めてよい。
- **未実装パターンは URL を持たない**。ステータスの真実は GALLERY 一覧のみ。

## ディレクトリ構成

```
app/
  layout.tsx              ギャラリー全体のルート (未実装時点で影響する最小 <html>/<body>)
  page.tsx                GALLERY 一覧 (15 スロットのグリッド)
  globals.css             ギャラリー自身の最小スタイル (パターン側には影響しない想定)
  p/<slug>/               実装済みパターンごとのディレクトリ (Step 1 以降に追加される)
    layout.tsx              そのパターンの世界観 (フォント・色・ナビ形式)
    page.tsx                デフォルトエントリ (多くは HOME に相当)
    schedule/page.tsx       SCHEDULE (任意)
    archive/page.tsx        ARCHIVE (任意)
    <custom>/page.tsx       パターン固有ページ (任意、いくつでも)
components/
  PatternCard.tsx         一覧グリッドのカード
  PatternShell.tsx        パターン側が任意で使える "GALLERY に戻る + PREV/NEXT" シェル
lib/
  patterns.ts             15 パターンのメタデータ + status + 前後リンクヘルパー
  streamer.ts             便利な配信者プレースホルダ (使うかどうかはパターン任意)
```

## パターン追加フロー

1. `app/p/<slug>/` ディレクトリを作成。そのパターン専用の `layout.tsx` + 必要なページ群を置く
2. スタイル・フォント・ナビ形式はパターン内で完結させる (ギャラリー側のトークンに合わせる必要なし)
3. `lib/patterns.ts` で当該パターンの `status` を `'in-progress'` か `'done'` に変更
4. commit → デプロイ → 一覧に反映 (該当カードが COMING SOON からクリック可能になる)

## 進捗

- [x] **Step 0**: 足場 (空の 15 スロット、全て COMING SOON)
- [ ] **Step 1-15**: 各パターン実装 (01 → 15 の順)

## 関連

- 元のデザインハンドオフ: `~/Downloads/design-gallery.zip`
- アーキテクチャ全体: `../../architecture.md`
