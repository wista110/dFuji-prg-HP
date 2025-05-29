import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';

/**
 * Next.js アプリケーションルート
 * - テーマ管理の初期化
 * - グローバルスタイルの適用
 * - フォントの最適化
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp; 