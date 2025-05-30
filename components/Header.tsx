import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

/**
 * ヘッダーコンポーネント
 * - レスポンシブナビゲーション
 * - テーマ切り替え機能
 * - アクセシビリティ対応
 */
export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: 'ホーム', href: '#home' },
    { name: 'スキル', href: '#skills' },
    { name: 'プロジェクト', href: '#projects' },
    { name: 'お問い合わせ', href: '#contact' },
  ];

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'ライト' },
    { value: 'dark', icon: Moon, label: 'ダーク' },
    { value: 'system', icon: Monitor, label: '自動' },
  ] as const;

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // スムーススクロール
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="section-container" aria-label="メインナビゲーション">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-bold gradient-text focus-ring rounded-lg px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              DateFujinari
            </a>
          </div>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 
                           hover:text-primary-600 dark:hover:text-primary-400 
                           transition-colors duration-200 focus-ring rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* テーマ切り替えとモバイルメニューボタン */}
          <div className="flex items-center space-x-2">
            {/* テーマ切り替え */}
            <div className="relative">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="appearance-none bg-transparent focus-ring rounded-lg p-2 
                         text-gray-700 dark:text-gray-300 cursor-pointer"
                aria-label="テーマを選択"
              >
                {themeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                {themeOptions.find(opt => opt.value === theme)?.icon && (
                  React.createElement(
                    themeOptions.find(opt => opt.value === theme)!.icon,
                    { size: 16, className: "text-gray-500 dark:text-gray-400" }
                  )
                )}
              </div>
            </div>

            {/* モバイルメニューボタン */}
            <button
              type="button"
              className="md:hidden focus-ring rounded-lg p-2 text-gray-700 dark:text-gray-300"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
              </span>
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden animate-slide-up"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 
                          border-t border-gray-200 dark:border-gray-700">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 
                           hover:text-primary-600 dark:hover:text-primary-400 
                           hover:bg-gray-50 dark:hover:bg-gray-800 
                           transition-colors duration-200 focus-ring rounded-md"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}; 