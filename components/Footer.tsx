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
    <footer 
      className="parallax-bg py-12"
      style={{ backgroundImage: 'url(/images/d-fuji-bg.png)' }}
    >
      <div className="section-container parallax-content">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">DateFujinari</h2>
          
          {/* ソーシャルリンク */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://instagram.com/datefujinari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200 focus-ring rounded-lg p-2"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com/datefujinari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200 focus-ring rounded-lg p-2"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://youtube.com/@datefujinari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors duration-200 focus-ring rounded-lg p-2"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
          
          <div className="text-white/60 text-sm">
            <p>&copy; 2024 DateFujinari. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 