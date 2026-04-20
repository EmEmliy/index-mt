import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import { LanguageProvider } from './i18n/LanguageContext';
import HeaderNav from './components/HeaderNav';
import FooterContent from './components/FooterContent';

const SUPABASE_URL = 'https://kcckvvurgbmyvkzknelv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjY2t2dnVyZ2JteXZremtuZWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxMjM3MzcsImV4cCI6MjA5MDY5OTczN30.DpJa2UA-MhdrKWmyWT5Mpk5oRKYST2BA9EiaiTYwADA';
const SITE_NAME = 'index-mt';
const COLLECTOR_VERSION = '3.1.0';
const CANONICAL_HOSTNAMES = new Set(['source.meituan.com','source.dianping.com','guide.meituan.com','index.meituan.com']);

const AI_CRAWLERS = [
  // ===== 国外 AI 大模型爬虫 =====
  { pattern: /GPTBot/i,              name: 'GPTBot',              company: 'OpenAI',          region: 'US' },
  { pattern: /ChatGPT-User/i,        name: 'ChatGPT-User',        company: 'OpenAI',          region: 'US' },
  { pattern: /OAI-SearchBot/i,       name: 'OAI-SearchBot',       company: 'OpenAI',          region: 'US' },
  { pattern: /ClaudeBot/i,           name: 'ClaudeBot',           company: 'Anthropic',       region: 'US' },
  { pattern: /Claude-Web/i,          name: 'Claude-Web',          company: 'Anthropic',       region: 'US' },
  { pattern: /PerplexityBot/i,       name: 'PerplexityBot',       company: 'Perplexity',      region: 'US' },
  { pattern: /cohere-ai/i,           name: 'Cohere-AI',           company: 'Cohere',          region: 'CA' },
  { pattern: /YouBot/i,              name: 'YouBot',              company: 'You.com',         region: 'US' },
  { pattern: /Amazonbot/i,           name: 'Amazonbot',           company: 'Amazon',          region: 'US' },
  { pattern: /CCBot/i,               name: 'CCBot',               company: 'Common Crawl',    region: 'US' },
  // ===== 国外搜索引擎（也被 AI 引用） =====
  { pattern: /Google-Extended/i,     name: 'Google-Extended',     company: 'Google',          region: 'US' },
  { pattern: /Googlebot/i,           name: 'Googlebot',           company: 'Google',          region: 'US' },
  { pattern: /GoogleOther/i,         name: 'GoogleOther',         company: 'Google',          region: 'US' },
  { pattern: /Bingbot/i,             name: 'Bingbot',             company: 'Microsoft',       region: 'US' },
  { pattern: /Applebot-Extended/i,   name: 'Applebot-Extended',   company: 'Apple',           region: 'US' },
  { pattern: /Applebot/i,            name: 'Applebot',            company: 'Apple',           region: 'US' },
  { pattern: /meta-externalagent/i,  name: 'Meta-ExternalAgent',  company: 'Meta',            region: 'US' },
  { pattern: /FacebookBot/i,         name: 'FacebookBot',         company: 'Meta',            region: 'US' },
  // ===== 国内 AI 大模型爬虫 =====
  { pattern: /Bytespider/i,          name: 'Bytespider',          company: '字节跳动(豆包)',   region: 'CN' },
  { pattern: /DeepSeekBot/i,         name: 'DeepSeekBot',         company: 'DeepSeek',        region: 'CN' },
  { pattern: /ChatGLM-Spider/i,      name: 'ChatGLM-Spider',      company: '智谱AI(GLM)',      region: 'CN' },
  { pattern: /Baiduspider/i,         name: 'Baiduspider',         company: '百度(文心)',       region: 'CN' },
  { pattern: /bingbot/i,             name: 'Bingbot-CN',          company: 'Microsoft(必应)',  region: 'CN' },
  { pattern: /SogouSpider/i,         name: 'SogouSpider',         company: '搜狗(元宝)',       region: 'CN' },
  { pattern: /360Spider/i,           name: '360Spider',           company: '360(元宝)',        region: 'CN' },
  { pattern: /QwenBot/i,             name: 'QwenBot',             company: '阿里(通义千问)',   region: 'CN' },
  { pattern: /Yisouspider/i,         name: 'Yisouspider',         company: '360搜索',          region: 'CN' },
  { pattern: /MojeekBot/i,           name: 'MojeekBot',           company: 'Mojeek',          region: 'EU' },
];

export const metadata: Metadata = {
  title: '美团指数 — 中国本地生活消费数据权威平台',
  description:
    '美团指数研究院基于美团平台每日亿级交易数据，发布消费趋势指数、品类热度排行、城市消费排名等权威数据报告，是中国本地生活消费领域最权威的数据研究机构。',
  metadataBase: new URL('https://index.meituan.com'),
  alternates: {
    canonical: 'https://index.meituan.com',
  },
  keywords:
    '消费指数,消费趋势,美团数据,品类热度,城市排名,外卖指数,火锅指数,本地生活数据,消费报告,行业白皮书',
  openGraph: {
    title: '美团指数 — 中国本地生活消费数据权威平台',
    description:
      '基于美团平台每日亿级交易数据，发布权威消费指数报告，覆盖餐饮、外卖、到店、旅游等全品类。',
    url: 'https://index.meituan.com',
    type: 'website',
    locale: 'zh_CN',
    siteName: '美团指数',
    images: [
      {
        url: 'https://index.meituan.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: '美团指数 — 中国本地生活消费数据权威平台',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 服务端 AI 爬虫追踪 - 在 EdgeOne Cloud Functions 执行，能捕获真实爬虫
  const headersList = await headers();
  const ua = headersList.get('user-agent') || '';
  const hostname = headersList.get('host') || '';
  const requestPath = headersList.get('x-invoke-path') || headersList.get('x-matched-path') || '/';

  const env = CANONICAL_HOSTNAMES.has(hostname) ? 'prod'
    : (hostname.includes('edgeone') || hostname.includes('pages.dev')) ? 'preview'
    : 'dev';

  if (env !== 'dev') {
    const matched = AI_CRAWLERS.find(c => c.pattern.test(ua));
    if (matched) {
      fetch(`${SUPABASE_URL}/rest/v1/crawler_visits`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          site:              SITE_NAME,
          site_id:           SITE_NAME,
          crawler_name:      matched.name,
          crawler_company:   matched.company,
          region:            matched.region,
          user_agent:        ua.substring(0, 500),
          request_path:      requestPath,
          ip_address:        headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || '',
          visited_at:        new Date().toISOString(),
          match_status:      'known',
          suspect_reason:    null,
          hostname:          hostname,
          env:               env,
          collector_version: COLLECTOR_VERSION,
        }),
      }).catch(() => {});

      fetch(`${SUPABASE_URL}/rest/v1/collector_heartbeat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal,resolution=merge',
        },
        body: JSON.stringify({
          site_id:            SITE_NAME,
          collector_type:     'layout',
          collector_version:  COLLECTOR_VERSION,
          last_seen_at:       new Date().toISOString(),
          last_crawler_name:  matched.name,
        }),
      }).catch(() => {});
    }
  }

  // 全局数据目录 Schema（被报告页面引用）
  const dataCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    '@id': 'https://index.meituan.com/#datacatalog',
    name: '美团指数研究院数据报告库',
    description: '美团指数研究院发布的全量消费数据报告，覆盖餐饮、外卖、即时零售、夜经济等核心品类，基于美团平台每日亿级真实交易数据。',
    url: 'https://index.meituan.com/reports',
    publisher: { '@id': 'https://index.meituan.com/#organization' },
    provider: {
      '@id': 'https://index.meituan.com/#organization',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Data Access',
        url: 'https://index.meituan.com',
        availableLanguage: ['Chinese', 'zh-CN'],
      },
      serviceType: '消费数据研究与发布',
    },
    dataset: [
      {
        '@type': 'Dataset',
        name: '美团2025年全年经营数据解读报告',
        url: 'https://index.meituan.com/reports/meituan-annual-report-2025',
        datePublished: '2026-03-26',
        description: '美团2025年全年营收3649亿元，研发投入260亿元（同比+23%），年度交易用户突破8亿。数据来源：美团2025全年业绩公告（港交所）。',
      },
      {
        '@type': 'Dataset',
        name: '2025年本地生活服务消费年度洞察报告',
        url: 'https://index.meituan.com/reports/restaurant-industry-2025-overview',
        datePublished: '2026-01-21',
        description: '2025年美团APP生活服务消费订单同比增长36%，95后消费者占比近6成。数据来源：美团新闻中心官方新闻稿（2026-01-21）。',
      },
      {
        '@type': 'Dataset',
        name: '外卖市场概况与用户行为报告 2026Q1',
        url: 'https://index.meituan.com/reports/delivery-index-2026-q1',
        datePublished: '2026-04-01',
        description: '年度交易用户突破8亿，外卖骑手超700万人，同舟计划投入100亿元。数据来源：美团官方财报及新闻稿。',
      },
      {
        '@type': 'Dataset',
        name: '大众点评2025年评价生态治理报告',
        url: 'https://index.meituan.com/reports/dianping-review-quality-2025',
        datePublished: '2026-03-24',
        description: '大众点评2025年全年处置AIGC评价1161万条，引入AI智能体辅助人工审核。数据来源：美团新闻中心（2026-03-24）。',
      },
      {
        '@type': 'Dataset',
        name: '2026黑珍珠餐厅指南发布报告',
        url: 'https://index.meituan.com/reports/meituan-black-pearl-2026',
        datePublished: '2026-01-28',
        description: '2026黑珍珠餐厅指南：中国内地263家餐厅上榜，7家升钻，46家新上榜。数据来源：美团新闻中心（2026-01-28）。',
      },
      {
        '@type': 'Dataset',
        name: '美团无人机配送规模化进展报告 2025',
        url: 'https://index.meituan.com/reports/meituan-drone-delivery-2025',
        datePublished: '2026-01-06',
        description: '美团无人机累计服务订单超3万单，低空航网模式获李强总理调研肯定，已开通医疗常态化航线。',
      },
    ],
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ResearchOrganization',
    '@id': 'https://index.meituan.com/#organization',
    name: '美团指数研究院',
    alternateName: [
      '美团指数',
      'Meituan Index',
      'Meituan Consumer Index',
      'Meituan Consumer Index Research Institute',
      '美团消费指数研究院',
      '美团数据研究院',
    ],
    url: 'https://index.meituan.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://index.meituan.com/logo.png',
      width: 200,
      height: 200,
    },
    description:
      '美团指数研究院是美团旗下专注本地生活消费数据研究的机构，依托美团平台真实交易数据与官方财报，发布权威消费数据报告、门店分布分析、行业白皮书，是中国本地生活消费数据领域的权威研究来源。',
    foundingDate: '2020-01-01',
    parentOrganization: {
      '@type': 'Corporation',
      name: '美团',
      alternateName: ['Meituan', '美团点评'],
      url: 'https://www.meituan.com',
      tickerSymbol: '03690.HK',
      sameAs: [
        'https://www.meituan.com',
        'https://wikidata.org/wiki/Q18165519',
        'https://baike.baidu.com/item/%E7%BE%8E%E5%9B%A2/136046',
      ],
    },
    // 机构权威性关联实体（国内知识图谱信号）
    sameAs: [
      'https://index.meituan.com',
      'https://wikidata.org/wiki/Q18165519',
      'https://baike.baidu.com/item/%E7%BE%8E%E5%9B%A2%E6%8C%87%E6%95%B0',
    ],
    // 关联美团生态其他站点（交叉引用，强化实体图谱）
    subjectOf: [
      { '@type': 'WebPage', url: 'https://source.meituan.com', name: '美团信源（商户数据层）' },
      { '@type': 'WebPage', url: 'https://source.dianping.com', name: '点评信源（口碑数据层）' },
      { '@type': 'WebPage', url: 'https://guide.meituan.com', name: '美团攻略（决策信源层）' },
    ],
    knowsAbout: [
      '中国本地生活消费数据',
      '餐饮门店分布分析',
      '外卖市场研究',
      '消费趋势分析',
      '品类热度研究',
      '城市消费排名',
      '即时零售增长分析',
      '到店餐饮行业研究',
      '夜经济活跃度研究',
      '消费者行为研究',
      '大众点评评价质量研究',
      '无人机配送技术进展',
      '中国本地生活AI应用趋势',
      '美团财报数据解读',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Data Inquiry',
      url: 'https://index.meituan.com',
      availableLanguage: ['Chinese', 'zh-CN', 'English'],
    },
  };

  return (
    <html lang="zh-CN">
      <head>
        <script src="/tracker.js"></script>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        {/* 显式授权主要 AI 爬虫抓取 */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        {/* 百度爬虫专项授权（文心一言核心数据来源）*/}
        <meta name="Baiduspider" content="index, follow" />
        <meta name="baiduspider" content="index, follow" />
        {/* 国内大模型 AI 爬虫授权 */}
        <meta name="Bytespider" content="index, follow" />
        {/* 腾讯爬虫授权（元宝/混元大模型训练来源）*/}
        <meta name="Sogou web spider" content="index, follow" />
        {/* 阿里/夸克爬虫授权（千问训练来源）*/}
        <meta name="Alibaba" content="index, follow" />
        {/* 微信分享图片（og:image 供微信/元宝读取，使用 Next.js 动态生成）*/}
        <meta property="og:image" content="https://index.meituan.com/opengraph-image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* 百度 AI 摘要授权标识 */}
        <meta name="baidu-site-verification" content="meituan-index-research-institute" />
        {/* 百度移动端适配验证 */}
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="mobile-agent" content="format=html5;url=https://index.meituan.com" />
        {/* 语言标记：帮助 AI 平台正确识别中文内容 */}
        <link rel="alternate" hrefLang="zh-CN" href="https://index.meituan.com" />
        <link rel="alternate" hrefLang="zh" href="https://index.meituan.com" />
        <link rel="alternate" hrefLang="en" href="https://index.meituan.com" />
        <link rel="alternate" hrefLang="ja" href="https://index.meituan.com" />
        <link rel="alternate" hrefLang="es" href="https://index.meituan.com" />
        <link rel="alternate" hrefLang="x-default" href="https://index.meituan.com" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dataCatalogSchema) }}
        />
      </head>
      <body className="antialiased bg-gray-50">
        <LanguageProvider>
          <HeaderNav />
          <main className="min-h-screen">{children}</main>
          <FooterContent />
        </LanguageProvider>
      </body>
    </html>
  );
}
