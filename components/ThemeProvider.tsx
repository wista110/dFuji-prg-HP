import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  Theme,
  getStoredTheme,
  setStoredTheme,
  getResolvedTheme,
  applyTheme,
  watchSystemTheme,
} from '@/utils/theme';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

/**
 * テーマプロバイダーコンポーネント
 * - ユーザー設定の永続化
 * - システムテーマ変更の監視
 * - Hydration ミスマッチの回避
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultTheme = 'system' 
}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // 初期化とHydration対応
  useEffect(() => {
    const storedTheme = getStoredTheme();
    const resolved = getResolvedTheme(storedTheme);
    
    setThemeState(storedTheme);
    setResolvedTheme(resolved);
    applyTheme(resolved);
    setMounted(true);
  }, []);

  // システムテーマ変更の監視
  useEffect(() => {
    const cleanup = watchSystemTheme((systemTheme) => {
      if (theme === 'system') {
        setResolvedTheme(systemTheme);
        applyTheme(systemTheme);
      }
    });

    return cleanup;
  }, [theme]);

  // テーマ変更ハンドラー
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setStoredTheme(newTheme);
    
    const resolved = getResolvedTheme(newTheme);
    setResolvedTheme(resolved);
    applyTheme(resolved);
  };

  // SSR時はデフォルトテーマを返す（Hydrationミスマッチ回避）
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{
        theme: defaultTheme,
        resolvedTheme: 'light',
        setTheme: () => {},
      }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * テーマコンテキストを使用するためのフック
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 