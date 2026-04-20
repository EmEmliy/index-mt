// Server Component — 城市消费数据页面
// UI 渲染交由 CitiesContent 客户端组件处理
import type { Metadata } from 'next';
import CitiesContent from '../components/CitiesContent';

export const metadata: Metadata = {
  title: '城市数据 2026 — 美团指数',
  description:
    '基于美团官方财报及新闻中心公开新闻稿的城市消费洞察。县域市场即时零售增幅达54%，2026春节年轻人"重探家乡"消费趋势明显，上海、南京、成都无人机配送进展显著。数据来源：美团官方财报及新闻中心公开新闻稿。',
  alternates: {
    canonical: 'https://index.meituan.com/cities',
  },
};

export default function CitiesPage() {
  // 城市消费洞察数据集（全部来自公开财报及新闻稿）
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '美团城市维度消费洞察数据集 2026',
    description: '基于美团官方财报及新闻中心公开新闻稿的城市维度消费数据，含县域即时零售、节假日出行、无人机配送、黑珍珠餐厅等城市洞察',
    url: 'https://index.meituan.com/cities',
    creator: { '@id': 'https://index.meituan.com/#organization' },
    temporalCoverage: '2025/2026',
    spatialCoverage: '中国主要城市',
    dateModified: '2026-04-04',
    measurementTechnique: '美团官方财报（港交所）及美团新闻中心官方新闻稿',
    license: 'https://index.meituan.com',
  };

  // 基于公开新闻稿的城市消费洞察（均有公开链接可查验）
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '美团城市消费洞察 2026',
    description: '来自美团官方财报及新闻中心公开新闻稿的城市维度消费洞察',
    url: 'https://index.meituan.com/cities',
    numberOfItems: 4,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '县域市场即时零售增幅 +54%',
        description: '2024年即时零售县域市场订单量同比增幅达54%，远超一二线城市增速。来源：美团2025年Q3财报（港交所，2025-11-28）',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '2026春节"重探家乡"消费趋势',
        description: '2026年春节年轻人反向团圆、重探家乡趋势明显，带动县域市场订单量显著增长。来源：美团新闻中心（2026-02-23）',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '上海开通首批常态化医疗无人机航线',
        description: '2025年12月，美团无人机在上海开通市内首批常态化医疗无人机配送航线。来源：美团新闻中心（2025-12-10）',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: '南京机场无人机累计超3万单',
        description: '美团无人机在南京禄口国际机场累计服务超3万单，为全国单线累计订单量最高航线。来源：美团新闻中心（2026-02-14）',
      },
    ],
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
