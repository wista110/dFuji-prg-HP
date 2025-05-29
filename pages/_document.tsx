import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Next.js Document コンポーネント
 * - HTMLのベース構造
 * - SEOメタタグ
 * - フォントの最適化
 * - パフォーマンス最適化
 */
export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* DNS プリフェッチとプリコネクト */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* フォント読み込み（パフォーマンス最適化） */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* PWA メタタグ */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
        
        {/* アイコン */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="antialiased">
        {/* フラッシュ防止のためのダークモード初期化スクリプト */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('portfolio-theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = theme === 'dark' || (theme === 'system' && systemDark) || (!theme && systemDark);
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 