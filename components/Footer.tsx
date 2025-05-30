import React from 'react';
import { Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';

/**
 * フッターコンポーネント
 * - ソーシャルメディアリンク
 * - アクセシビリティ対応
 * - SEO対応（外部リンクのrel属性）
 */
export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/datefujinari',
      icon: Instagram,
      label: 'InstagramでDateFujinariをフォロー',
    },
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com/datefujinari',
      icon: Twitter,
      label: 'X (旧Twitter)でDateFujinariをフォロー',
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@datefujinari',
      icon: Youtube,
      label: 'YouTubeでDateFujinariをチャンネル登録',
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="section-container py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* ロゴ */}
          <div className="text-center">
            <h2 className="text-2xl font-bold gradient-text mb-2">
              DateFujinari
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              {/* ITフリーランスとして、モダンなWebアプリケーション開発とクリエイティブなソリューションを提供しています。 */}
              現在準備中です。開発知識やノウハウを公開し、最先端の技術を活用したソリューションを提供します。
            </p>
          </div>

          {/* ソーシャルメディアリンク */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-white dark:bg-gray-700 rounded-full shadow-sm 
                           hover:shadow-md transition-all duration-200 focus-ring"
                  aria-label={social.label}
                >
                  <IconComponent 
                    size={20} 
                    className="text-gray-600 dark:text-gray-300 
                             group-hover:text-primary-600 dark:group-hover:text-primary-400 
                             transition-colors duration-200" 
                  />
                  <ExternalLink 
                    size={12} 
                    className="absolute -top-1 -right-1 text-gray-400 opacity-0 
                             group-hover:opacity-100 transition-opacity duration-200"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>

          {/* お問い合わせリンク */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 btn btn-primary px-6 py-3"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>お問い合わせ</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* 区切り線 */}
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>

          {/* コピーライト */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
              © {currentYear} DateFujinari. All rights reserved.
            </p>
            <p className="mt-1">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 