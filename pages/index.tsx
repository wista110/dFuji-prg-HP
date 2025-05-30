import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github
} from 'lucide-react';
import { useTilt } from '@/utils/useTilt';

interface HomePageProps {
  buildTime: string;
}

/**
 * ホームページコンポーネント
 * - ヒーローセクション
 * - 技術スタック紹介
 * - プロジェクトポートフォリオ
 * - お問い合わせフォーム
 */
const HomePage: React.FC<HomePageProps> = ({ buildTime }) => {
  const techStack = [
    { name: 'Frontend', icon: Code, skills: ['Next.js', 'shadcn/ui', 'Tailwind CSS', 'Spline'] },
    { name: 'Backend', icon: Server, skills: ['Hono', 'FastAPI', 'AWS/lambda', 'Firebase'] },
    { name: 'Database', icon: Database, skills: ['PostgreSQL', 'Redis', 'Firestore'] },
    { name: 'Mobile', icon: Smartphone, skills: ['Flutter', 'Dart', 'Firebase'] },
    { name: 'ML/AI', icon: GitBranch, skills: ['TensorFlow', 'LangChain', 'RAG', 'OpenAI API'] },
    { name: 'Finance', icon: Globe, skills: ['MQL4/5', 'Backtesting', 'Algorithmic Trading'] },
  ];

  const projects = [
    {
      title: '木工製品のECサイト構築',
      description: 'Next.js + Stripe + Supabaseを使用したモダンなECサイト。高速で安全な決済システムを実装。',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'Supabase'],
      status: 'リリース済み',
      githubUrl: null,
      demoUrl: null,
    },
    {
      title: 'HP制作',
      description: 'レスポンシブ対応の企業サイト・ポートフォリオサイト制作。SEO最適化とアクセシビリティを重視した高品質なWebサイト。',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      status: 'リリース済み',
      githubUrl: null,
      demoUrl: 'https://hicompgroup.co.jp/',
    },
    {
      title: 'FX自動売買ツール開発',
      description: 'MT4/MT5対応のEA開発・バックテスト・最適化を行う統合開発環境。生成AIを活用したアドバイザー機能',
      tech: ['Python', 'MQL4/5', 'TensorFlow', 'PostgreSQL'],
      status: '開発中',
      githubUrl: null,
      demoUrl: null,
    },
    {
      title: 'フィットネスモバイルアプリ開発',
      description: 'Flutter + Firebase + Dartで構築したモバイル向けフィットネスアプリ。進捗、週間トラッキング、プッシュ通知機能を実装。',
      tech: ['Flutter', 'Dart', 'Firebase', 'AWS (EC2, S3, DynamoDB)','PostgreSQL'],
      status: '企画中',
      githubUrl: null,
      demoUrl: null,
    },
  ];

  return (
    <>
      <Head>
        <title>DateFujinari</title>
        <meta 
          name="description" 
          content="ITフリーランス開発者DateFujinariのポートフォリオサイト。Next.js、React、TypeScriptを使用したモダンなWebアプリケーション開発を専門としています。" 
        />
        <meta name="keywords" content="フリーランス,Web開発,React,Next.js,TypeScript,ポートフォリオ" />
        <meta name="author" content="DateFujinari" />
        
        {/* ファビコン（最適化版） */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="images/d-fuji-logo.png" />
        
        {/* OGP メタタグ */}
        <meta property="og:title" content="DateFujinari - ITフリーランス開発者" />
        <meta property="og:description" content="モダンなWebアプリケーション開発を専門とするITフリーランス開発者のポートフォリオ" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="images/d-fuji-logo.png" />
        <meta property="og:url" content="https://datefujinari.dev" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@datefujinari" />
        
        {/* 構造化データ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "DateFujinari",
              "jobTitle": "ITフリーランス開発者",
              "url": "https://datefujinari.dev",
              "sameAs": [
                "https://instagram.com/datefujinari",
                "https://twitter.com/datefujinari",
                "https://youtube.com/@datefujinari"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />

        <main>
          {/* ヒーローセクション */}
          <section 
            id="home" 
            className="pt-20 md:pt-24 pb-20 parallax-bg"
            style={{ backgroundImage: 'url(/images/d-fuji-bg.png)' }}
          >
            <div className="section-container parallax-content">
              <div className="text-center animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-white drop-shadow-lg">DateFujinari</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-balance drop-shadow-md">
                  モダンなWebアプリケーション開発を専門とする<br />
                  ITフリーランス開発者
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="#projects"
                    className="btn btn-primary px-8 py-4 text-lg shadow-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    プロジェクトを見る
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-secondary px-8 py-4 text-lg shadow-lg bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    お問い合わせ
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 技術スタックセクション */}
          <section id="skills" className="pt-20 md:pt-24 pb-20">
            <div className="section-container">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">技術スタック</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  フルスタック開発に対応した幅広い技術を習得し、最適なソリューションを提供します
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {techStack.map((category, index) => {
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const tiltRef = useTilt({ maxTilt: 15, scale: 1.1 });
                  
                  const IconComponent = category.icon;
                  return (
                    <div 
                      key={category.name}
                      ref={tiltRef}
                      className="card p-6 animate-fade-in cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center mb-4">
                        <IconComponent size={24} className="text-primary-600 dark:text-primary-400 mr-3" />
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.skills.map((skill) => (
                          <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* プロジェクトセクション */}
          <section id="projects" className="pt-20 md:pt-24 pb-20 bg-gray-50 dark:bg-gray-800">
            <div className="section-container">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">プロジェクト</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  これまでに手がけたプロジェクトの一部をご紹介します
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project, index) => {
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const tiltRef = useTilt({ maxTilt: 15, scale: 1.1 });
                  
                  return (
                    <div 
                      key={project.title}
                      ref={tiltRef}
                      className="card p-6 animate-slide-up cursor-pointer"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          project.status === 'リリース済み' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : project.status === '開発中'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-sm text-primary-600 dark:text-primary-400 hover:underline focus-ring rounded px-2 py-1"
                          >
                            <Github size={16} />
                            <span>コード</span>
                          </a>
                        ) : (
                          <span className="flex items-center space-x-1 text-sm text-gray-400 dark:text-gray-600 px-2 py-1">
                            <Github size={16} />
                            <span>コード</span>
                          </span>
                        )}
                        
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-sm text-primary-600 dark:text-primary-400 hover:underline focus-ring rounded px-2 py-1"
                          >
                            <ExternalLink size={16} />
                            <span>デモ</span>
                          </a>
                        ) : (
                          <span className="flex items-center space-x-1 text-sm text-gray-400 dark:text-gray-600 px-2 py-1">
                            <ExternalLink size={16} />
                            <span>デモ</span>
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* お問い合わせセクション */}
          <section id="contact" className="pt-20 md:pt-24 pb-20">
            <div className="section-container">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* 連絡先情報 */}
                  <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">連絡先</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                        <span>contact@datefujinari.dev</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="text-primary-600 dark:text-primary-400" size={20} />
                        <span>お問い合わせフォームよりご連絡ください</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                        <span>日本全国（リモート対応）</span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <h4 className="font-semibold mb-4">件名には、依頼内容を記載してください</h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Webアプリケーション開発</li>
                        <li>• モバイルアプリ開発</li>
                        <li>• EAツール開発</li>
                        <li>• 技術コンサルティング</li>
                        <li>• AI活用コンサルティング</li>
                        <li>• その他</li>
                      </ul>
                    </div>
                  </div>

                  {/* お問い合わせフォーム */}
                  <div className="card p-8">
                    <h3 className="text-2xl font-semibold mb-6">メッセージ送信</h3>
                    
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          お名前 *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                                   rounded-lg focus-ring bg-white dark:bg-gray-700"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          メールアドレス *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                                   rounded-lg focus-ring bg-white dark:bg-gray-700"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          件名
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                                   rounded-lg focus-ring bg-white dark:bg-gray-700"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          メッセージ *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 
                                   rounded-lg focus-ring bg-white dark:bg-gray-700 resize-vertical"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full btn btn-primary py-3"
                      >
                        送信する
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      {/* 開発情報（デバッグ用） */}
      <div className="hidden">
        Built at: {buildTime}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      buildTime: new Date().toISOString(),
    },
  };
};

export default HomePage; 