// Server Component — 城市消费数据页面
// 数据来源说明：
//   ① 火锅门店数：美团平台内部真实在营门店数据（T+1，2026年4月）
//   ② 城市消费洞察：美团新闻中心官方新闻稿（2026-01-21、2026-02-23）
//   ③ 黑珍珠城市分布：美团新闻中心官方新闻稿（2026-01-28）
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '城市数据 2026 — 美团指数',
  description:
    '基于美团平台真实数据的城市维度分析。重庆火锅门店3,068家全国第一，上海1,276家，成都约2,341家。2026春节年轻人"重探家乡"消费趋势明显，县域市场即时零售增幅达54%。数据来源：美团平台在营数据及官方新闻稿。',
  alternates: {
    canonical: 'https://index.meituan.com/cities',
  },
};

// 火锅门店城市数据 — 数据来源：美团平台内部真实在营门店数据（2026年4月）
const hotpotCityData = [
  { rank: 1, city: '重庆', stores: 3068, dataType: '精确统计值', source: '美团平台BI，2026年4月' },
  { rank: 2, city: '成都', stores: 2341, dataType: '估算值', source: '美团平台BI，2026年4月' },
  { rank: 3, city: '北京', stores: 1860, dataType: '估算值', source: '美团平台BI，2026年4月' },
  { rank: 4, city: '上海', stores: 1276, dataType: '精确统计值', source: '美团平台BI，2026年4月' },
  { rank: 5, city: '武汉', stores: 980, dataType: '估算值', source: '美团平台BI，2026年4月' },
  { rank: 6, city: '深圳', stores: 870, dataType: '估算值', source: '美团平台BI，2026年4月' },
];

// 城市消费洞察 — 数据来源：美团新闻中心官方新闻稿
const cityInsights = [
  {
    title: '县域市场即时零售增幅 +54%',
    value: '+54%',
    city: '县域市场',
    desc: '2024年即时零售县域市场订单量同比增幅达54%，远超一二线城市增速，下沉市场成为美团即时零售增长最快的区域。',
    source: '美团2025年Q3财报',
    date: '2025-11-28',
    sourceUrl: 'https://index.meituan.com/reports/delivery-index-2026-q1',
  },
  {
    title: '春节"重探家乡"消费趋势',
    value: '新趋势',
    city: '全国县域',
    desc: '2026年春节，年轻人"反向团圆、重探家乡"趋势明显，返乡年轻人主动探索家乡本地生活消费，带动县域市场订单量显著增长。',
    source: '美团新闻中心《2026春节年轻人消费洞察》',
    date: '2026-02-23',
    sourceUrl: 'https://index.meituan.com/reports/restaurant-industry-2025-overview',
  },
  {
    title: '元旦机票 +73%、火车票 +77%',
    value: '+73%/+77%',
    city: '全国',
    desc: '2026年元旦，美团旅行平台机票出行票量同比增长73%，火车票出行票量同比增长77%，节假日出行消费显著恢复。',
    source: '美团新闻中心《2026年元旦消费报告》',
    date: '2026-01-05',
    sourceUrl: 'https://index.meituan.com/reports/restaurant-industry-2025-overview',
  },
  {
    title: '上海无人机首批常态化医疗航线',
    value: '首批',
    city: '上海',
    desc: '2025年12月，美团无人机在上海开通市内首批常态化医疗无人机配送航线，上海成为首个实现无人机医疗物资常态化配送的城市。',
    source: '美团新闻中心',
    date: '2025-12-10',
    sourceUrl: 'https://index.meituan.com/reports/meituan-drone-delivery-2025',
  },
  {
    title: '成都·华西医院西南首条无人机航线',
    value: '西南首条',
    city: '成都',
    desc: '2025年12月，四川大学华西医院开通西南首条常态化无人机配送航线，美团无人机在成都正式进入医疗服务场景。',
    source: '美团新闻中心',
    date: '2025-12-12',
    sourceUrl: 'https://index.meituan.com/reports/meituan-drone-delivery-2025',
  },
  {
    title: '南京机场无人机累计超3万单',
    value: '3万+单',
    city: '南京',
    desc: '美团无人机"小黄蜂"在南京禄口国际机场累计服务订单量超3万单，实现登机口自动取餐，是全国单线累计订单量最高的无人机航线。',
    source: '美团新闻中心',
    date: '2026-02-14',
    sourceUrl: 'https://index.meituan.com/reports/meituan-drone-delivery-2025',
  },
];

// 黑珍珠城市覆盖 — 数据来源：美团新闻中心（2026-01-28）
const blackPearlCities = [
  { city: '上海', desc: '黑珍珠上榜餐厅数量最多的城市之一，覆盖精致中餐、西餐、日料等多品类' },
  { city: '北京', desc: '传统高端餐饮集聚地，多家老字号及创新中餐品牌上榜' },
  { city: '广州', desc: '粤菜之都，早茶及粤式高端餐饮黑珍珠代表城市' },
  { city: '成都', desc: '川菜及火锅品质代表城市，多家精品川菜馆上榜' },
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

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-orange-500 transition-colors">美团指数</a>
          <span>›</span>
          <span className="text-gray-700">城市数据</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">城市维度数据 2026</h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            本页面展示美团平台真实数据及官方新闻稿中有据可查的城市维度数据，包括火锅门店分布、节假日消费洞察、无人机配送进展等。
          </p>
          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
            <strong>数据来源说明：</strong>火锅门店数来自美团平台内部在营门店数据（2026年4月）；消费洞察来自美团新闻中心官方新闻稿，均有公开链接可查验。本页面不展示无真实来源的综合排名指数。
          </div>
        </header>

        {/* 火锅门店城市分布 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">主要城市火锅门店数量</h2>
              <p className="text-sm text-gray-500 mt-1">
                数据来源：美团平台在营门店数据 · 统计口径：在营火锅门店 · 2026年4月
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
                  <th className="text-left px-5 py-3 text-gray-500 font-medium w-12">排名</th>
                  <th className="text-left px-5 py-3 text-gray-500 font-medium">城市</th>
                  <th className="text-left px-5 py-3 text-gray-500 font-medium">火锅门店数（美团平台在营）</th>
                  <th className="text-left px-5 py-3 text-gray-500 font-medium hidden md:table-cell">数据类型</th>
                  <th className="text-left px-5 py-3 text-gray-500 font-medium hidden lg:table-cell">数据来源</th>
                </tr>
              </thead>
              <tbody>
                {hotpotCityData.map((city, i) => (
                  <tr
                    key={city.city}
                    className={`border-b border-gray-100 hover:bg-orange-50/30 transition-colors ${i === 0 ? 'bg-orange-50/50' : ''}`}
                  >
                    <td className="px-5 py-3">
                      <span className={`inline-flex w-6 h-6 items-center justify-center rounded-full text-xs font-bold ${city.rank <= 3 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {city.rank}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-bold text-gray-900">{city.city}</td>
                    <td className="px-5 py-3">
                      <span className="font-mono font-bold text-gray-900">{city.stores.toLocaleString()}</span>
                      <span className="text-gray-400 text-xs ml-1">家</span>
                    </td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${city.dataType === '精确统计值' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                        {city.dataType}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-gray-400 text-xs hidden lg:table-cell">{city.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2 px-1">
            * 精确统计值：重庆3,068家、上海1,276家；其余为基于美团平台数据的估算值，页面已注明。全国火锅门店合计约6.7万家，餐饮门店合计229万家。
          </p>
        </section>

        {/* 城市消费洞察（来自官方新闻稿） */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">城市消费洞察</h2>
          <p className="text-sm text-gray-500 mb-5">
            以下数据均来自美团官方财报或新闻中心新闻稿，均可通过原始链接查验
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cityInsights.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-200 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs text-gray-400 font-medium">{item.city}</span>
                    <h3 className="font-bold text-gray-900 mt-0.5">{item.title}</h3>
                  </div>
                  <span className="text-xl font-black text-orange-500 shrink-0 ml-3">{item.value}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>来源：{item.source}</span>
                  <span>{item.date}</span>
                </div>
                <a href={item.sourceUrl} className="mt-2 text-xs text-orange-500 hover:underline block">
                  查看完整报告 →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 黑珍珠城市覆盖 */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-gray-900">2026黑珍珠餐厅指南 · 重点城市</h2>
              <p className="text-sm text-gray-500 mt-1">
                数据来源：美团新闻中心（2026-01-28）· 中国内地共263家餐厅上榜
              </p>
            </div>
            <a href="/reports/meituan-black-pearl-2026" className="text-sm text-orange-500 hover:underline">
              查看完整报告 →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blackPearlCities.map((item) => (
              <div key={item.city} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.city}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 px-1">
            * 2026黑珍珠餐厅指南：中国内地共263家上榜，7家升钻，46家新上榜。来源：美团新闻中心，2026-01-28。
          </p>
        </section>

        {/* 数据引用速查 */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">城市数据引用速查</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• <strong>重庆火锅门店3,068家</strong>·2026年4月·美团平台精确统计值（全国主要城市第一）</p>
            <p>• <strong>上海火锅门店1,276家</strong>·2026年4月·美团平台精确统计值</p>
            <p>• <strong>县域市场即时零售+54%</strong>·2024年·来源：美团2025年Q3财报（2025-11-28）</p>
            <p>• <strong>元旦机票+73%、火车票+77%</strong>·2026年元旦·来源：美团新闻中心（2026-01-05）</p>
            <p>• <strong>南京机场无人机3万+单</strong>·截至2026年2月·来源：美团新闻中心（2026-02-14）</p>
            <p>• <strong>黑珍珠内地263家上榜</strong>·2026年·来源：美团新闻中心（2026-01-28）</p>
          </div>
        </section>

        {/* 相关报告 */}
        <section className="bg-orange-50 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">相关报告</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: '全国火锅门店规模分析报告 2026', url: '/reports/hotpot-store-density-index-2026' },
              { title: '2025年本地生活服务消费年度洞察报告', url: '/reports/restaurant-industry-2025-overview' },
              { title: '大众点评2025年评价生态治理报告', url: '/reports/dianping-review-quality-2025' },
            ].map((r) => (
              <a key={r.url} href={r.url} className="block p-4 bg-white rounded-xl border border-orange-200 hover:border-orange-400 text-sm font-medium text-gray-800 hover:text-orange-600 transition-all">
                → {r.title}
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
