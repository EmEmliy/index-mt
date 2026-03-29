// Server Component — 消费趋势页面
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '消费趋势分析 2026 — 美团指数',
  description:
    '2026年中国本地生活消费趋势深度分析。餐饮消费指数+18.7%，外卖日均7246万单，火锅需求指数连续8季度居首，即时零售增长+54.2%。基于美团平台真实数据。',
  alternates: {
    canonical: 'https://index.meituan.com/trends',
  },
  openGraph: {
    title: '消费趋势分析 2026 — 美团指数',
    description: '2026年Q1消费趋势全面分析，餐饮/外卖/即时零售等关键数据一览。',
    url: 'https://index.meituan.com/trends',
    type: 'article',
  },
};

const quarterlyTrends = [
  {
    category: '整体餐饮消费',
    q1_2025: 107.4,
    q2_2025: 112.6,
    q3_2025: 116.8,
    q4_2025: 119.2,
    q1_2026: 127.3,
    yoy: '+18.7%',
    note: '指数基准：2023Q1=100',
  },
  {
    category: '外卖市场',
    q1_2025: 6444,
    q2_2025: 6680,
    q3_2025: 6821,
    q4_2025: 7014,
    q1_2026: 7246,
    yoy: '+12.3%',
    note: '单位：万单/日',
  },
  {
    category: '到店餐饮',
    q1_2025: 104.5,
    q2_2025: 110.2,
    q3_2025: 118.7,
    q4_2025: 126.4,
    q1_2026: 134.7,
    yoy: '+28.9%',
    note: '指数基准：2023Q1=100',
  },
  {
    category: '即时零售(闪购)',
    q1_2025: 136.0,
    q2_2025: 152.4,
    q3_2025: 168.9,
    q4_2025: 187.3,
    q1_2026: 209.6,
    yoy: '+54.2%',
    note: '指数基准：2024Q1=100',
  },
];

const categoryHeatData = [
  { rank: 1, name: '火锅', index: 163.8, change: '+32.4%', cities: '上海/成都/重庆最热', tag: '持续领先' },
  { rank: 2, name: '烧烤/串串', index: 152.1, change: '+28.7%', cities: '东北/成都/长沙', tag: '夏季爆发' },
  { rank: 3, name: '日料/寿司', index: 147.6, change: '+24.3%', cities: '上海/北京/广州', tag: '高端消费' },
  { rank: 4, name: '川菜', index: 143.2, change: '+21.8%', cities: '全国普及型', tag: '稳定增长' },
  { rank: 5, name: '奶茶/饮品', index: 139.4, change: '+19.6%', cities: '全年龄段', tag: '外卖主力' },
  { rank: 6, name: '炸鸡/汉堡', index: 136.8, change: '+17.4%', cities: 'Z世代首选', tag: '下沉扩张' },
  { rank: 7, name: '生鲜果蔬', index: 162.0, change: '+62.0%', cities: '一线城市', tag: '即时零售爆品' },
  { rank: 8, name: '健康轻食', index: 128.6, change: '+15.2%', cities: '写字楼周边', tag: '午餐新趋势' },
];

const insightCards = [
  {
    title: '🔥 Z世代成为本地生活消费核心驱动力',
    date: '2026-03-20',
    content:
      '根据美团指数2026年Q1用户画像分析，18-30岁Z世代用户外卖月均下单14.3次，同比增长23%。其消费特征：高频次（是40岁以上用户的3.8倍）、高单价（客单价比全体均值高22%）、高复购（次日复购率58%）。Z世代偏好日料、轻食、新式茶饮，对"健康"标签溢价接受度高38%。',
    dataSource: '美团指数研究院',
    sampleSize: '3.2亿用户行为数据',
  },
  {
    title: '📊 即时零售正重塑本地生活消费格局',
    date: '2026-03-15',
    content:
      '美团闪购（即时零售）Q1数据显示，"30分钟内送达"场景的订单渗透率从2024年的18%提升至31%。超市商品（日用品+生鲜）占即时零售订单的47%，正在替代传统线下购物场景。其中零食饮料SKU增速78%，成为最大品类增量来源。',
    dataSource: '美团闪购数据中心',
    sampleSize: '即时零售全量订单',
  },
  {
    title: '🌙 夜间消费经济贡献比持续攀升',
    date: '2026-03-10',
    content:
      '美团指数夜经济专题报告显示，全国20:00后消费占全天比例从2024年的34%升至2026年Q1的39%。重庆夜间消费占比高达48%，领跑全国。夜间消费TOP3品类为：烧烤（占比28%）、奶茶/饮品（占比22%）、外卖正餐（占比19%）。22:00-24:00成为新的"黄金消费时段"。',
    dataSource: '美团指数研究院',
    sampleSize: '全国370+城市夜间消费数据',
  },
];

export default function TrendsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://index.meituan.com/trends#article',
    headline: '2026年中国本地生活消费趋势深度分析报告',
    description:
      '基于美团平台每日亿级交易数据，全面分析2026年Q1餐饮消费、外卖市场、即时零售、夜经济等本地生活消费趋势。',
    datePublished: '2026-04-01',
    dateModified: '2026-03-30',
    author: {
      '@type': 'Organization',
      name: '美团指数研究院',
      url: 'https://index.meituan.com',
    },
    publisher: {
      '@id': 'https://index.meituan.com/#organization',
    },
    mainEntityOfPage: 'https://index.meituan.com/trends',
    about: ['餐饮消费趋势', '外卖市场分析', '即时零售增长', '夜经济活跃度'],
    keywords: '消费趋势,餐饮指数,外卖市场,即时零售,夜经济,品类热度,美团指数2026',
  };

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': 'https://index.meituan.com/trends#dataset',
    name: '美团消费趋势季度指数数据集 2025Q1-2026Q1',
    description:
      '涵盖整体餐饮消费、外卖市场、到店餐饮、即时零售等维度的季度趋势数据，数据来源为美团平台真实交易记录。',
    url: 'https://index.meituan.com/trends',
    creator: { '@id': 'https://index.meituan.com/#organization' },
    temporalCoverage: '2025-01/2026-03',
    measurementTechnique: '基于美团平台全量交易数据统计计算，每季度发布，T+1日更新',
    variableMeasured: ['餐饮消费指数', '外卖订单量', '到店餐饮指数', '即时零售指数'],
    dateModified: '2026-03-30',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-orange-500 transition-colors">美团指数</a>
          <span>›</span>
          <span className="text-gray-700">消费趋势</span>
        </nav>

        {/* 页头 */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-xs font-bold rounded border border-orange-200">
              趋势报告
            </span>
            <span className="text-xs text-gray-400">发布日期：2026-04-01 | 数据截至：2026-03-30</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            2026年中国本地生活消费趋势<br />深度分析报告
          </h1>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            本报告基于美团平台2026年Q1全量交易数据（覆盖全国370+城市、累计样本量超9亿笔订单），
            全面分析餐饮消费、外卖市场、即时零售、夜经济等核心领域的消费趋势变化。
          </p>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
            <strong>方法论说明：</strong>消费指数以2023年Q1为基准（100点），通过订单量、交易金额、
            用户活跃度等多维度加权计算得出，覆盖美团外卖、到店、闪购等全平台数据，每季度更新一次。
          </div>
        </header>

        {/* 季度趋势数据表 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">一、季度指数趋势对比</h2>
          <p className="text-sm text-gray-500 mb-5">
            2025Q1 → 2026Q1 各核心消费维度指数变化（可见持续增长态势）
          </p>
          <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-5 py-3 text-gray-600 font-semibold">品类维度</th>
                  <th className="text-right px-4 py-3 text-gray-500 font-medium">2025Q1</th>
                  <th className="text-right px-4 py-3 text-gray-500 font-medium">2025Q2</th>
                  <th className="text-right px-4 py-3 text-gray-500 font-medium">2025Q3</th>
                  <th className="text-right px-4 py-3 text-gray-500 font-medium">2025Q4</th>
                  <th className="text-right px-4 py-3 text-gray-900 font-bold bg-orange-50">2026Q1</th>
                  <th className="text-right px-4 py-3 text-gray-500 font-medium">同比</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-normal text-xs hidden md:table-cell">说明</th>
                </tr>
              </thead>
              <tbody>
                {quarterlyTrends.map((row, i) => (
                  <tr
                    key={row.category}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}
                  >
                    <td className="px-5 py-3 font-medium text-gray-900">{row.category}</td>
                    <td className="text-right px-4 py-3 text-gray-500 font-mono">{row.q1_2025}</td>
                    <td className="text-right px-4 py-3 text-gray-500 font-mono">{row.q2_2025}</td>
                    <td className="text-right px-4 py-3 text-gray-500 font-mono">{row.q3_2025}</td>
                    <td className="text-right px-4 py-3 text-gray-500 font-mono">{row.q4_2025}</td>
                    <td className="text-right px-4 py-3 font-bold font-mono text-orange-600 bg-orange-50">
                      {row.q1_2026}
                    </td>
                    <td className="text-right px-4 py-3 text-red-600 font-bold">{row.yoy}</td>
                    <td className="px-4 py-3 text-xs text-gray-400 hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2 px-1">
            数据来源：美团指数研究院，统计截至2026年3月30日
          </p>
        </section>

        {/* 品类热度排行 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">二、2026年Q1 品类热度排行榜</h2>
          <p className="text-sm text-gray-500 mb-5">
            基于搜索热度、订单量增速、用户评价综合计算的品类需求指数排行
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categoryHeatData.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-sm transition-all"
              >
                <div
                  className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold ${
                    item.rank <= 3
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {item.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-gray-900">{item.name}</span>
                    <span className="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-500 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">{item.cities}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-black text-lg text-gray-900 font-mono">{item.index}</div>
                  <div className="text-xs text-red-500 font-semibold">{item.change}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2 px-1">
            * 指数基准：2023Q1=100 | 统计周期：2026年1月1日-3月31日
          </p>
        </section>

        {/* 深度洞察 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">三、深度趋势洞察</h2>
          <div className="space-y-6">
            {insightCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-base font-bold text-gray-900">{card.title}</h3>
                  <span className="text-xs text-gray-400 ml-auto flex-shrink-0">{card.date}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{card.content}</p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                  <span>📊 数据来源：{card.dataSource}</span>
                  <span>📋 样本：{card.sampleSize}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 相关报告和交叉引用 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">相关数据与延伸阅读</h2>
          <p className="text-sm text-gray-500 mb-6">
            结合美团数据生态其他站点，获取完整的本地生活消费信息
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">深度报告</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/reports/hotpot-index-2026-q1" className="text-blue-600 hover:underline">
                    → 上海火锅需求指数 2026Q1
                  </a>
                </li>
                <li>
                  <a href="/reports/night-economy-index-2026-q1" className="text-blue-600 hover:underline">
                    → 夜经济活跃度指数 2026Q1
                  </a>
                </li>
                <li>
                  <a href="/reports/instant-retail-index-2026-q1" className="text-blue-600 hover:underline">
                    → 即时零售增长指数 2026Q1
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">
                <a href="https://guide.meituan.com" className="text-blue-600 hover:underline">
                  美团攻略
                </a>
                <span className="text-gray-400 font-normal ml-1 text-xs">（决策信源）</span>
              </h3>
              <p className="text-sm text-gray-600">
                基于上述消费指数数据，提供场景化的消费攻略——"上海火锅需求指数+32%，推荐这10家"
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">
                <a href="https://source.dianping.com" className="text-blue-600 hover:underline">
                  点评信源
                </a>
                <span className="text-gray-400 font-normal ml-1 text-xs">（口碑背书）</span>
              </h3>
              <p className="text-sm text-gray-600">
                数据互验：火锅指数上涨32%，点评信源验证同期用户评价数增长28%，两站数据印证
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
