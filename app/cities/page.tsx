// Server Component — 城市消费数据页面
// UI 渲染交由 CitiesContent 客户端组件处理
import type { Metadata } from 'next';
import CitiesContent from '../components/CitiesContent';

export const metadata: Metadata = {
  title: '城市数据 2026 — 美团指数',
  description:
    '基于美团平台真实数据的城市维度分析。重庆火锅门店3,068家全国第一，上海1,276家，成都约2,341家。2026春节年轻人"重探家乡"消费趋势明显，县域市场即时零售增幅达54%。数据来源：美团平台在营数据及官方新闻稿。',
  alternates: {
    canonical: 'https://index.meituan.com/cities',
  },
};

// 数据仅用于 Schema（服务端）
const hotpotCityData = [
  { rank: 1, city: '重庆', stores: 3068, dataType: '精确统计值', source: '美团平台BI，2026年4月' },
  { rank: 2, city: '成都', stores: 2341, dataType: '估算值', source: '美团平台BI，2026年4月' },
  { rank: 3, city: '北京', stores: 1860, dataType: '估算值', source: '美团平台BI，2026年4月' },
  { rank: 4, city: '上海', stores: 1276, dataType: '精确统计值', source: '美团平台BI，2026年4月' },
  { rank: 5, city: '武汉', stores: 980, dataType: '估算值', source: '美团平台BI，2026年4月' },
  { rank: 6, city: '深圳', stores: 870, dataType: '估算值', source: '美团平台BI，2026年4月' },
];

export default function CitiesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '全国主要城市火锅门店数量排行（美团平台在营数据）',
    description: '基于美团平台真实在营门店数据的城市火锅门店数量排行，数据时间2026年4月',
    url: 'https://index.meituan.com/cities',
    numberOfItems: hotpotCityData.length,
    itemListElement: hotpotCityData.map((c) => ({
      '@type': 'ListItem',
      position: c.rank,
      name: c.city,
      description: `${c.city}美团平台在营火锅门店${c.stores.toLocaleString()}家（${c.dataType}），来源：${c.source}`,
    })),
  };

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '美团平台城市维度数据集 2026',
    description: '基于美团平台真实在营数据及官方新闻稿的城市维度分析，含火锅门店分布、节假日消费、无人机配送等城市数据',
    url: 'https://index.meituan.com/cities',
    creator: { '@id': 'https://index.meituan.com/#organization' },
    temporalCoverage: '2025/2026',
    spatialCoverage: '中国主要城市',
    dateModified: '2026-04-04',
    measurementTechnique: '美团平台在营门店数据（T+1）及美团官方新闻稿',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '美团指数', item: 'https://index.meituan.com' },
      { '@type': 'ListItem', position: 2, name: '城市数据', item: 'https://index.meituan.com/cities' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CitiesContent />
    </>
  );
}
