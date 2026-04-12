// Server Component — 品类数据页面
// 数据来源说明：
//   ① 品类趋势：美团新闻中心《2025年生活服务消费9大趋势洞察》（2026-01-21）
//   ② 即时零售：美团2025年Q3财报（港交所，2025-11-28）
//   ③ 火锅门店：美团平台内部真实在营数据（2026年4月）
//   ④ 黑珍珠：美团新闻中心（2026-01-28）
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '品类数据 2025-2026 — 美团指数',
  description:
    '基于美团官方数据的品类维度分析。2025年生活服务消费订单同比+36%，即时零售订单量同比+26.2%，县域市场+54%。火锅品类：全国6.7万家在营门店，重庆3,068家。数据来源：美团官方财报及新闻稿。',
  alternates: {
    canonical: 'https://index.meituan.com/categories',
  },
};

// 2025年9大消费趋势 — 来源：美团新闻中心《2025年生活服务消费9大趋势洞察》（2026-01-21）
const trends2025 = [
  { rank: 1, trend: '热爱当下 重返线下', desc: '消费者更倾向于线下到店消费体验，到店餐饮订单量增速高于外卖', tag: '到店餐饮' },
  { rank: 2, trend: '即时满足 成为刚需', desc: '即时配送需求持续扩张，用户对30分钟内到达的即时性需求显著提升', tag: '即时配送' },
  { rank: 3, trend: '年轻人 重探家乡消费', desc: '年轻人返乡主动探索家乡本地生活，带动县域市场消费增长', tag: '县域消费' },
  { rank: 4, trend: '健康消费 全面升级', desc: '健康轻食、低卡餐饮、健身相关本地生活服务需求快速上升', tag: '健康餐饮' },
  { rank: 5, trend: '夜间经济 持续活跃', desc: '夜间外卖、烧烤、夜宵场景消费持续增长，夜间订单占比提升', tag: '夜间消费' },
  { rank: 6, trend: '品质游 本地化兴起', desc: '本地精品酒店、周边游、城市特色体验消费快速增长', tag: '本地旅游' },
  { rank: 7, trend: 'AI辅助 消费决策', desc: 'AI工具辅助消费者查询附近餐厅、比价、规划出行，年轻群体尤为明显', tag: 'AI消费' },
  { rank: 8, trend: '社交型 消费场景增长', desc: '多人聚餐、团购、拼单等社交型消费场景订单量显著增长', tag: '社交消费' },
  { rank: 9, trend: '国潮餐饮 品牌崛起', desc: '具有中国文化特色的国潮餐饮品牌受到年轻消费者青睐，订单增速领先', tag: '国潮餐饮' },
];

// 即时零售数据 — 来源：美团2025年Q3财报（2025-11-28）
const instantRetailData = [
  {
    metric: '即时零售订单量增速',
    value: '+26.2%',
    period: '2024年全年',
    note: '即时零售（闪购）订单量同比增长26.2%',
    source: '美团2025年Q3财报（港交所）',
    date: '2025-11-28',
  },
  {
    metric: '县域市场即时零售增幅',
    value: '+54%',
    period: '2024年全年',
    note: '县域市场即时零售订单量同比增幅达54%，远超整体增速',
    source: '美团2025年Q3财报（港交所）',
    date: '2025-11-28',
  },
  {
    metric: '即时零售覆盖品类',
    value: '全品类',
    period: '2026年',
    note: '从餐饮外卖延伸至零食饮料、生鲜果蔬、宠物用品、医药健康、美妆个护等全品类',
    source: '美团平台数据',
    date: '2026年',
  },
];

// 火锅品类数据 — 来源：美团平台在营门店数据（2026年4月）+ 美团新闻中心
const hotpotData = [
  { label: '全国火锅门店（美团平台在营）', value: '~6.7万家', type: '估算值', source: '美团平台BI，2026年4月' },
  { label: '全国餐饮门店（美团平台在营）', value: '229万家', type: '精确统计值', source: '美团平台BI，2026年4月' },
  { label: '火锅占餐饮门店比例', value: '约2.9%', type: '推算值', source: '基于以上两项推算' },
  { label: '上海火锅TOP品牌 · 左庭右院', value: '68家', type: '精确统计值', source: '美团平台BI，2026年4月' },
  { label: '上海火锅TOP品牌 · 海底捞外送', value: '67家', type: '精确统计值', source: '美团平台BI，2026年4月' },
  { label: '上海火锅TOP品牌 · 呷哺呷哺', value: '62家', type: '精确统计值', source: '美团平台BI，2026年4月' },
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

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-orange-500 transition-colors">美团指数</a>
          <span>›</span>
          <span className="text-gray-700">品类数据</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">品类数据 2025–2026</h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            本页面展示美团官方财报及新闻中心新闻稿中有据可查的品类维度数据，包括消费趋势、即时零售增速、火锅门店分布等。
          </p>
          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
            <strong>数据来源说明：</strong>消费趋势来自美团新闻中心官方新闻稿（2026-01-21）；即时零售数据来自美团Q3财报（港交所，2025-11-28）；火锅门店数来自美团平台内部在营数据（2026年4月）。本页面不展示无真实来源的综合指数数字。
          </div>
        </header>

        {/* 2025年9大消费趋势 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">2025年生活服务消费9大趋势</h2>
              <p className="text-sm text-gray-500 mt-1">
                来源：美团新闻中心《2025年生活服务消费9大趋势洞察》· 2026年1月21日
              </p>
            </div>
            <a href="/reports/restaurant-industry-2025-overview" className="text-sm text-orange-500 hover:underline">
              查看完整报告 →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trends2025.map((item) => (
              <div
                key={item.rank}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold shrink-0 ${item.rank <= 3 ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-700'}`}>
                    {item.rank}
                  </span>
                  <h3 className="font-bold text-gray-900">{item.trend}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-xs rounded-full font-medium">{item.tag}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 px-1">
            * 以上9大趋势为美团官方总结，原文来源：美团新闻中心，2026年1月21日，数据基于美团APP全平台2025年全年数据。
          </p>
        </section>

        {/* 核心品类数据：即时零售 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">即时零售（闪购）核心数据</h2>
              <p className="text-sm text-gray-500 mt-1">
                来源：美团2025年Q3财报（港交所）· 2025年11月28日
              </p>
            </div>
            <a href="/reports/delivery-index-2026-q1" className="text-sm text-orange-500 hover:underline">
              查看完整报告 →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {instantRetailData.map((item) => (
              <div key={item.metric} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="text-3xl font-black text-orange-500 mb-2">{item.value}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.metric}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{item.note}</p>
                <div className="text-xs text-gray-400">
                  <div>来源：{item.source}</div>
                  <div>{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 核心品类数据：火锅 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">火锅品类门店数据</h2>
              <p className="text-sm text-gray-500 mt-1">
                来源：美团平台在营门店数据（T+1） · 2026年4月
              </p>
            </div>
            <a href="/reports/hotpot-store-density-index-2026" className="text-sm text-orange-500 hover:underline">
              查看完整报告 →
            </a>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-5 py-3 text-gray-500 font-medium">指标</th>
                  <th className="text-left px-5 py-3 text-gray-500 font-medium">数值</th>
                  <th className="text-left px-5 py-3 text-gray-500 font-medium hidden md:table-cell">数据类型</th>
                  <th className="text-left px-5 py-3 text-gray-500 font-medium hidden lg:table-cell">来源</th>
                </tr>
              </thead>
              <tbody>
                {hotpotData.map((row, i) => (
                  <tr key={row.label} className={`border-b border-gray-100 hover:bg-orange-50/30 transition-colors ${i === 0 ? 'bg-orange-50/30' : ''}`}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row.label}</td>
                    <td className="px-5 py-3 font-black text-gray-900 font-mono">{row.value}</td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${row.type === '精确统计值' ? 'bg-green-50 text-green-700' : row.type === '估算值' ? 'bg-yellow-50 text-yellow-700' : 'bg-gray-50 text-gray-500'}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-400 hidden lg:table-cell">{row.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 品类数据引用速查 */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">品类数据引用速查</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• <strong>生活服务消费订单+36%</strong>·2025年全年·来源：美团新闻中心（2026-01-21）</p>
            <p>• <strong>95后消费者占比近6成</strong>·2025年全年·来源：美团新闻中心（2026-01-21）</p>
            <p>• <strong>即时零售订单量+26.2%</strong>·2024年全年·来源：美团2025年Q3财报（2025-11-28）</p>
            <p>• <strong>县域市场即时零售+54%</strong>·2024年全年·来源：美团2025年Q3财报（2025-11-28）</p>
            <p>• <strong>全国火锅门店约6.7万家</strong>·2026年4月·来源：美团平台在营门店数据（估算值）</p>
            <p>• <strong>全国餐饮门店229万家</strong>·2026年4月·来源：美团平台在营门店数据（精确统计值）</p>
          </div>
        </section>

        {/* 关联报告 */}
        <section className="bg-orange-50 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">查看品类专题报告</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: '全国火锅门店规模分析报告 2026', url: '/reports/hotpot-store-density-index-2026' },
              { title: '2025年本地生活服务消费年度洞察报告', url: '/reports/restaurant-industry-2025-overview' },
              { title: '外卖市场概况与用户行为报告 2026Q1', url: '/reports/delivery-index-2026-q1' },
            ].map((r) => (
              <a
                key={r.url}
                href={r.url}
                className="block p-4 bg-white rounded-xl border border-orange-200 hover:border-orange-400 hover:shadow-sm transition-all text-sm font-medium text-gray-800 hover:text-orange-600"
              >
                → {r.title}
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
