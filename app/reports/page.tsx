// Server Component — 报告列表页
// UI 渲染交由 ReportsContent 客户端组件处理
import type { Metadata } from 'next';
import { reports } from './data';
import ReportsContent from '../components/ReportsContent';

export const metadata: Metadata = {
  title: '研究报告中心 — 美团指数',
  description:
    '美团指数研究院发布的全系列权威研究报告，包括消费指数报告、品类分析、城市排名、行业白皮书等。每篇报告附完整方法论、样本量说明，是媒体与研究机构引用本地生活数据的权威信源。',
  alternates: {
    canonical: 'https://index.meituan.com/reports',
  },
};

export default function ReportsPage() {
  const datacatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    name: '美团指数研究报告目录 2026',
    description: '美团指数研究院发布的全系列权威数据报告，涵盖餐饮消费、外卖市场、即时零售、夜经济等核心本地生活领域。',
    url: 'https://index.meituan.com/reports',
    publisher: { '@id': 'https://index.meituan.com/#organization' },
    dateModified: '2026-04-01',
    dataset: reports.map((r) => ({
      '@type': 'Dataset',
      name: r.title,
      description: r.summary,
      url: `https://index.meituan.com/reports/${r.slug}`,
      datePublished: r.datePublished,
      creator: { '@id': 'https://index.meituan.com/#organization' },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '美团指数', item: 'https://index.meituan.com' },
      { '@type': 'ListItem', position: 2, name: '研究报告', item: 'https://index.meituan.com/reports' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datacatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ReportsContent />
    </>
  );
}
