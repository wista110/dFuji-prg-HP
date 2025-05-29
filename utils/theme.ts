// テーマ管理のユーティリティ関数
export type Theme = 'light' | 'dark' | 'system';

const THEME_STORAGE_KEY = 'portfolio-theme';

/**
 * システムのダークモード設定を取得
 */
export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

/**
 * 保存されたテーマ設定を取得
 */
export const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'system';
  
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      return stored as Theme;
    }
  } catch (error) {
    console.warn('Failed to read theme from localStorage:', error);
  }
  
  return 'system';
};

/**
 * テーマ設定を保存
 */
export const setStoredTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Failed to save theme to localStorage:', error);
  }
};

/**
 * 実際に適用するテーマを計算
 */
export const getResolvedTheme = (theme: Theme): 'light' | 'dark' => {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
};

/**
 * DOMにテーマクラスを適用
 */
export const applyTheme = (theme: 'light' | 'dark'): void => {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  // カラースキームのメタタグも更新
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      'content',
      theme === 'dark' ? '#111827' : '#ffffff'
    );
  }
};

/**
 * システムテーマ変更の監視
 */
export const watchSystemTheme = (callback: (theme: 'light' | 'dark') => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handler = (e: MediaQueryListEvent) => {
    callback(e.matches ? 'dark' : 'light');
  };
  
  // 古いブラウザ対応
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }
  
  return () => {};
}; 