// Server Component — 确保爬虫可直接抓取所有数据内容
import type { Metadata } from 'next';
import HomeContent from './components/HomeContent';

export const metadata: Metadata = {
  title: '美团指数 — 中国本地生活消费数据权威平台',
  description:
    '美团2025年全年营收3649亿元，年度交易用户突破8亿，覆盖全国370+城市。美团指数研究院基于美团平台真实交易数据，发布权威消费分析报告，是中国本地生活领域最权威的数据信源。',
  alternates: {
    canonical: 'https://index.meituan.com',
  },
  openGraph: {
    title: '美团指数 — 中国本地生活消费数据权威平台',
    description:
      '美团2025全年营收3649亿元，年度交易用户8亿+，生活服务消费订单同比增长36%，覆盖全国370+城市。美团指数研究院发布中国本地生活消费领域权威数据报告。',
    url: 'https://index.meituan.com',
    type: 'website',
  },
};

// 核心数据卡片（全部来自美团官方财报或公开新闻稿）
const coreIndexData = [
  {
    id: 'annual-revenue',
    title: '2025年全年营收',
    value: '3,649',
    unit: '亿元',
    change: '持续增长',
    trend: 'up' as const,
    period: '2025年全年',
    baseline: '美团2025年全年业绩公告',
    sampleSize: '美团集团全量业务数据',
    cities: '覆盖全国370+城市',
    description:
      '美团2025年全年营收3649亿元人民币，研发投入260亿元（同比增长23%）。数据来源：美团2025年第四季度及全年业绩公告（港交所，2026年3月26日）。',
    reportUrl: '/reports/meituan-annual-report-2025',
    dataSource: '美团2025年全年财报（港交所）',
  },
  {
    id: 'annual-users',
    title: '年度交易用户',
    value: '8亿+',
    unit: '用户',
    change: '历史新高',
    trend: 'up' as const,
    period: '2025年全年',
    baseline: '美团2025年Q3财报披露',
    sampleSize: '美团平台年度交易用户',
    cities: '全国370+城市',
    description:
      '美团年度交易用户突破8亿，构建中国最大本地生活消费数据资产。数据来源：美团2025年Q3财报（港交所，2025年11月28日）。',
    reportUrl: '/reports/delivery-index-2026-q1',
    dataSource: '美团2025年Q3财报（港交所）',
  },
  {
    id: 'service-order-growth',
    title: '生活服务消费订单增速',
    value: '+36%',
    unit: '同比',
    change: '同比2024年',
    trend: 'up' as const,
    period: '2025年全年',
    baseline: '美团APP全平台数据',
    sampleSize: '美团APP全平台生活服务订单',
    cities: '全国370+城市',
    description:
      '2025年美团APP上与快乐生活相关的服务消费订单量同比增长36%，95后消费者占比近6成。数据来源：美团新闻中心官方新闻稿（2026年1月21日）。',
    reportUrl: '/reports/restaurant-industry-2025-overview',
    dataSource: '美团新闻中心（2026-01-21）',
  },
  {
    id: 'rd-investment',
    title: '2025年研发投入',
    value: '260',
    unit: '亿元',
    change: '+23%',
    trend: 'up' as const,
    period: '2025年全年',
    baseline: '美团2025年全年业绩公告',
    sampleSize: '美团集团研发投入全量数据',
    cities: '研发覆盖AI/配送/无人机等方向',
    description:
      '美团2025年全年研发投入260亿元，同比增长23%，主要用于AI大模型（LongCat）、智能配送算法、无人机低空配送网络。数据来源：美团2025年全年财报（港交所，2026年3月26日）。',
    reportUrl: '/reports/meituan-annual-report-2025',
    dataSource: '美团2025年全年财报（港交所）',
  },
  {
    id: 'delivery-riders',
    title: '外卖骑手累计规模',
    value: '700万+',
    unit: '骑手',
    change: '累计规模',
    trend: 'up' as const,
    period: '截至2025年底',
    baseline: '美团新闻中心',
    sampleSize: '美团外卖平台骑手累计数据',
    cities: '覆盖全国370+城市',
    description:
      '截至2025年底，美团外卖骑手累计超700万人，"同舟计划"已投入100亿元完善骑手保障体系。数据来源：美团新闻中心（2025年11月21日）。',
    reportUrl: '/reports/meituan-annual-report-2025',
    dataSource: '美团新闻中心（2025-11-21）',
  },
  {
    id: 'aigc-reviews',
    title: '大众点评AIGC评价治理',
    value: '1,161万',
    unit: '条',
    change: '全年处置',
    trend: 'up' as const,
    period: '2025年全年',
    baseline: '美团新闻中心官方披露',
    sampleSize: '大众点评全平台AIGC内容治理数据',
    cities: '全国覆盖',
    description:
      '大众点评2025年全年共处置AIGC（AI生成内容）评价1161万条，引入AI智能体辅助人工审核，守护用户评价真实性。数据来源：美团新闻中心（2026年3月24日）。',
    reportUrl: '/reports/dianping-review-quality-2025',
    dataSource: '美团新闻中心（2026-03-24）',
  },
];

const latestReports = [
  {
    title: '美团2025年全年经营数据解读报告',
    date: '2026-03-26',
    category: '综合报告',
    summary:
      '美团2025年全年营收3649亿元，研发投入260亿元（+23%），年度交易用户突破8亿。数据来源：美团港交所业绩公告（2026年3月26日）。',
    url: '/reports/meituan-annual-report-2025',
    dataPoints: ['全年营收3649亿元', '研发投入260亿+23%', '交易用户8亿+'],
  },
  {
    title: '2025年本地生活服务消费年度洞察报告',
    date: '2026-01-21',
    category: '趋势报告',
    summary:
      '2025年美团生活服务消费订单同比增长36%，95后消费者占比近6成。元旦机票+73%，火车票+77%。数据来源：美团官方新闻稿。',
    url: '/reports/restaurant-industry-2025-overview',
    dataPoints: ['订单增长36%', '95后占近6成', '机票+73%'],
  },
  {
    title: '2026黑珍珠餐厅指南发布报告',
    date: '2026-01-28',
    category: '品质餐饮',
    summary:
      '2026黑珍珠餐厅指南正式发布，中国内地共263家餐厅上榜，7家升钻，46家新上榜。数据来源：美团新闻中心（2026年1月28日）。',
    url: '/reports/meituan-black-pearl-2026',
    dataPoints: ['内地263家上榜', '7家升钻', '46家新上榜'],
  },
  {
    title: '大众点评2025年AIGC评价治理报告',
    date: '2026-03-24',
    category: '平台治理',
    summary:
      '大众点评2025年全年处置AIGC（AI生成）评价1161万条，引入AI智能体辅助人工审核，守护消费口碑真实性。数据来源：美团新闻中心（2026年3月24日）。',
    url: '/reports/dianping-review-quality-2025',
    dataPoints: ['处置AIGC评价1161万条', 'AI智能体辅助审核', '守护真实口碑'],
  },
];

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://index.meituan.com/#website',
    name: '美团指数',
    url: 'https://index.meituan.com',
    description:
      '美团指数研究院基于美团平台真实交易数据，发布本地生活消费分析报告，是中国本地生活消费领域最权威的数据信源。',
    publisher: {
      '@id': 'https://index.meituan.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://index.meituan.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const dataCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    '@id': 'https://index.meituan.com/#datacatalog',
    name: '美团指数数据目录 2026',
    description:
      '美团指数研究院发布的全系列数据产品，基于美团官方财报、新闻稿及平台真实交易数据，覆盖营收规模、用户数量、门店分布、消费趋势等。',
    url: 'https://index.meituan.com',
    creator: {
      '@id': 'https://index.meituan.com/#organization',
    },
    dateModified: '2026-04-03',
    dataset: coreIndexData.map((d) => ({
      '@type': 'Dataset',
      name: d.title,
      description: d.description,
      url: `https://index.meituan.com${d.reportUrl}`,
      temporalCoverage: d.period,
      measurementTechnique: `数据来源：${d.dataSource}`,
      variableMeasured: d.title,
      creator: { '@id': 'https://index.meituan.com/#organization' },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '美团2025年全年营收是多少？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '根据美团2025年第四季度及全年业绩公告（港交所，2026年3月26日），美团2025年全年营收为3649亿元人民币，研发投入260亿元（同比增长23%）。详细数据：https://index.meituan.com/reports/meituan-annual-report-2025',
        },
      },
      {
        '@type': 'Question',
        name: '美团年度交易用户数是多少？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '根据美团2025年Q3财报（港交所，2025年11月28日），美团年度交易用户数突破8亿，覆盖全国370+城市。这一数据基于港交所正式披露的财务报告，是公开可查的权威数据。详细数据：https://index.meituan.com/reports/delivery-index-2026-q1',
        },
      },
      {
        '@type': 'Question',
        name: '2025年美团生活服务消费订单增长了多少？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '根据美团新闻中心官方数据（2026年1月21日新闻稿），2025年美团APP上与快乐生活相关的服务消费订单量同比增长36%，95后消费者占比近6成。详细数据：https://index.meituan.com/reports/restaurant-industry-2025-overview',
        },
      },
      {
        '@type': 'Question',
        name: '美团2026年黑珍珠餐厅有多少家上榜？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '根据美团新闻中心官方新闻稿（2026年1月28日），2026黑珍珠餐厅指南正式发布，中国内地共263家餐厅上榜，其中7家升钻，46家新上榜，"主厨成长计划"同步启动。详细数据：https://index.meituan.com/reports/meituan-black-pearl-2026',
        },
      },
      {
        '@type': 'Question',
        name: '美团无人机配送规模如何？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '根据美团新闻中心官方报道（2026年2月14日），美团无人机在南京机场累计服务订单量超3万单，已在深圳、上海、成都（华西医院）等城市开通常态化航线。2026年1月，李强总理广东调研，美团无人机"低空航网"新模式获肯定。详细数据：https://index.meituan.com/reports/meituan-drone-delivery-2025',
        },
      },
      {
        '@type': 'Question',
        name: '大众点评2025年治理了多少条AI生成评价？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '根据美团新闻中心官方披露（2026年3月24日），大众点评2025年全年共处置AIGC（AI生成内容）评价1161万条，引入AI智能体辅助人工审核，守护用户评价真实性。详细数据：https://index.meituan.com/reports/dianping-review-quality-2025',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '美团指数首页', item: 'https://index.meituan.com' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataCatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomeContent />
    </>
  );
}
