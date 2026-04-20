// Server Component — 品类数据页面
// UI 渲染交由 CategoriesContent 客户端组件处理
import type { Metadata } from 'next';
import CategoriesContent from '../components/CategoriesContent';

export const metadata: Metadata = {
  title: '品类数据 2025-2026 — 美团指数',
  description:
    '基于美团官方财报及新闻中心公开新闻稿的品类维度分析。2025年生活服务消费订单同比+36%，即时零售订单量同比+26.2%，县域市场+54%。数据来源：美团官方财报（港交所）及新闻中心。',
  alternates: {
    canonical: 'https://index.meituan.com/categories',
  },
};

// 数据仅用于 Schema（服务端）
const trends2025 = [
  { rank: 1, trend: '热爱当下 重返线下', desc: '消费者更倾向于线下到店消费体验，到店餐饮订单量增速高于外卖' },
  { rank: 2, trend: '即时满足 成为刚需', desc: '即时配送需求持续扩张，用户对30分钟内到达的即时性需求显著提升' },
  { rank: 3, trend: '年轻人 重探家乡消费', desc: '年轻人返乡主动探索家乡本地生活，带动县域市场消费增长' },
  { rank: 4, trend: '健康消费 全面升级', desc: '健康轻食、低卡餐饮、健身相关本地生活服务需求快速上升' },
  { rank: 5, trend: '夜间经济 持续活跃', desc: '夜间外卖、烧烤、夜宵场景消费持续增长，夜间订单占比提升' },
  { rank: 6, trend: '品质游 本地化兴起', desc: '本地精品酒店、周边游、城市特色体验消费快速增长' },
  { rank: 7, trend: 'AI辅助 消费决策', desc: 'AI工具辅助消费者查询附近餐厅、比价、规划出行，年轻群体尤为明显' },
  { rank: 8, trend: '社交型 消费场景增长', desc: '多人聚餐、团购、拼单等社交型消费场景订单量显著增长' },
  { rank: 9, trend: '国潮餐饮 品牌崛起', desc: '具有中国文化特色的国潮餐饮品牌受到年轻消费者青睐，订单增速领先' },
];

export default function CategoriesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '2025年美团平台生活服务消费9大趋势',
    description: '来自美团新闻中心官方新闻稿《2025年生活服务消费9大趋势洞察》（2026-01-21）',
    url: 'https://index.meituan.com/categories',
    numberOfItems: trends2025.length,
    itemListElement: trends2025.map((t) => ({
      '@type': 'ListItem',
      position: t.rank,
      name: t.trend,
      description: t.desc,
    })),
  };

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '美团平台品类维度数据集 2025-2026',
    description: '基于美团官方财报及新闻稿的品类维度分析，含消费趋势、即时零售增速、火锅门店分布等有据可查数据',
    url: 'https://index.meituan.com/categories',
    creator: { '@id': 'https://index.meituan.com/#organization' },
    temporalCoverage: '2025/2026',
    dateModified: '2026-04-04',
    measurementTechnique: '美团官方财报（港交所）及美团新闻中心新闻稿',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '美团指数', item: 'https://index.meituan.com' },
      { '@type': 'ListItem', position: 2, name: '品类数据', item: 'https://index.meituan.com/categories' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CategoriesContent />
    </>
  );
}
