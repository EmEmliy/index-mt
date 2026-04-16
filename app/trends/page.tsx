// Server Component — 消费趋势页面（UI 交由 TrendsContent 客户端组件处理）
// 数据来源说明：
//   ① 美团新闻中心《2025年生活服务消费9大趋势洞察》（2026-01-21）
//   ② 美团2025年Q3财报（港交所，2025-11-28）
//   ③ 美团2025年全年财报（港交所，2026-03-26）
//   ④ 美团新闻中心《2026年元旦消费报告》（2026-01-05）
//   ⑤ 美团新闻中心《2026春节年轻人消费洞察》（2026-02-23）
//   ⑥ 美团2025年Q3财报 — 即时零售（闪购）订单量同比增长26.2%（2025-11-28）
import type { Metadata } from 'next';
import TrendsContent from '../components/TrendsContent';

export const metadata: Metadata = {
  title: '消费趋势分析 2026 — 美团指数',
  description:
    '2025年美团生活服务消费订单同比增长36%，年度交易用户突破8亿，95后消费者占比近6成。2026年本地生活消费趋势深度分析，数据来自美团官方财报及新闻稿。',
  alternates: {
    canonical: 'https://index.meituan.com/trends',
  },
  openGraph: {
    title: '消费趋势分析 2026 — 美团指数',
    description: '2025年美团生活服务消费订单同比增长36%，年度交易用户突破8亿，95后占比近6成。基于美团官方公开数据。',
    url: 'https://index.meituan.com/trends',
    type: 'article',
  },
};

export default function TrendsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://index.meituan.com/trends#article',
    headline: '2026年中国本地生活消费趋势分析',
    description: '基于美团官方财报及新闻中心新闻稿，全面梳理2025年全年及2026年本地生活消费核心数据与趋势。',
    datePublished: '2026-04-01',
    dateModified: '2026-04-01',
    author: { '@type': 'Organization', name: '美团指数研究院', url: 'https://index.meituan.com' },
    publisher: { '@id': 'https://index.meituan.com/#organization' },
    mainEntityOfPage: 'https://index.meituan.com/trends',
    about: ['餐饮消费趋势', '外卖市场分析', '即时零售增长', '夜经济活跃度'],
    keywords: '消费趋势,餐饮指数,外卖市场,即时零售,品类热度,美团指数2026',
  };

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': 'https://index.meituan.com/trends#dataset',
    name: '美团消费趋势官方数据集 2025-2026',
    description: '来自美团官方财报（港交所）及美团新闻中心的消费趋势核心数据，含生活服务订单增速、用户规模、即时零售、元旦节假日消费等有据可查数据。',
    url: 'https://index.meituan.com/trends',
    creator: { '@id': 'https://index.meituan.com/#organization' },
    temporalCoverage: '2025/2026',
    measurementTechnique: '美团官方财报（港交所公告）及美团新闻中心新闻稿',
    dateModified: '2026-04-01',
    license: 'https://index.meituan.com/data-license',
    includedInDataCatalog: { '@id': 'https://index.meituan.com/#datacatalog' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '美团指数', item: 'https://index.meituan.com' },
      { '@type': 'ListItem', position: 2, name: '消费趋势', item: 'https://index.meituan.com/trends' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TrendsContent />
    </>
  );
}
