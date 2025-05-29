/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的サイト生成（SSG）を有効化
  trailingSlash: true, // URL末尾にスラッシュを追加
  skipTrailingSlashRedirect: true,
  distDir: 'out', // 出力ディレクトリ
  images: {
    unoptimized: true // 静的エクスポート時は画像最適化を無効化
  },
  // パフォーマンス最適化
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  // セキュリティヘッダー
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig; 