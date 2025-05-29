# DateFujinari Portfolio

ITフリーランス向けの軽量・高速なポートフォリオサイトです。

## 🚀 特徴

- **軽量・高速**: 最小限の依存関係で高速に動作
- **モダンスタック**: Next.js 14 + TypeScript + Tailwind CSS
- **レスポンシブ対応**: モバイルファーストのデザイン
- **ダークモード**: ライト/ダーク/システム設定の切り替え
- **SEO最適化**: メタタグ、OGP、構造化データ対応
- **アクセシビリティ**: ARIA属性、キーボードナビゲーション対応
- **静的サイト生成**: Next.js SSGによる高速配信

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **デプロイ**: Vercel / Netlify 対応

## 📦 インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build

# 静的サイトエクスポート
npm run export
```

## 🎨 カスタマイズ

### 基本情報の変更

`pages/index.tsx`の以下の部分を編集してください：

- 名前・肩書き
- 技術スタック
- プロジェクト情報
- 連絡先情報

### ソーシャルメディアリンク

`components/Footer.tsx`の`socialLinks`配列を編集してください。

### テーマカラー

`tailwind.config.js`の`colors.primary`セクションでブランドカラーを変更できます。

## 📱 レスポンシブ対応

- **スマートフォン**: 320px〜
- **タブレット**: 768px〜
- **デスクトップ**: 1024px〜

## ♿ アクセシビリティ

- セマンティックHTML
- ARIA属性の適切な使用
- キーボードナビゲーション対応
- 適切なコントラスト比
- スクリーンリーダー対応

## 🔧 パフォーマンス最適化

- 静的サイト生成（SSG）
- 画像最適化
- フォント最適化
- CSS/JSの最小化
- コードスプリッティング

## 📈 SEO対策

- メタタグ最適化
- OGPタグ設定
- Twitter Card対応
- 構造化データ（JSON-LD）
- サイトマップ自動生成

## 🚀 デプロイ

### Vercel

```bash
# Vercel CLIのインストール
npm i -g vercel

# デプロイ
vercel
```

### Netlify

```bash
# ビルド
npm run build

# outディレクトリをアップロード
```

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエストやイシューの報告を歓迎します。

## 📞 お問い合わせ

何かご質問がございましたら、お気軽にお問い合わせください。

---

Built with ❤️ by DateFujinari 