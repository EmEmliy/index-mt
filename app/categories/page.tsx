// Server Component — 品类热度页面
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '品类热度排行 2026 — 美团指数',
  description:
    '2026年Q1全国本地生活品类热度排行。火锅需求指数163.8点同比+32.4%，烧烤+28.7%，日料+24.3%。即时零售品类中零食饮料增速78%领跑。基于美团平台真实数据。',
  alternates: {
    canonical: 'https://index.meituan.com/categories',
  },
};

const diningCategories = [
  { rank: 1, name: '火锅', index: 163.8, change: '+32.4%', orders: '287万单/月(上海)', cities: '上海/成都/重庆最热', trend: 'up', note: '连续8季度需求第一' },
  { rank: 2, name: '烧烤/串串', index: 152.1, change: '+28.7%', orders: '全国季度增量最大', cities: '东北/成都/长沙', trend: 'up', note: '夜间消费核心品类' },
  { rank: 3, name: '日料/寿司', index: 147.6, change: '+24.3%', orders: '客单价全品类最高', cities: '上海/北京/广州', trend: 'up', note: '精致餐饮代表' },
  { rank: 4, name: '川菜', index: 143.2, change: '+21.8%', orders: '覆盖城市最广', cities: '全国普及型', trend: 'up', note: '稳定增长' },
  { rank: 5, name: '奶茶/新式茶饮', index: 139.4, change: '+19.6%', orders: '复购率第一', cities: '全年龄段', trend: 'up', note: '外卖+到店双驱动' },
  { rank: 6, name: '炸鸡/汉堡', index: 136.8, change: '+17.4%', orders: 'Z世代首选', cities: 'Z世代首选', trend: 'up', note: '下沉市场扩张' },
  { rank: 7, name: '健康轻食', index: 128.6, change: '+15.2%', orders: '复购率最高（62%）', cities: '写字楼周边', trend: 'up', note: '午餐新趋势' },
  { rank: 8, name: '粤菜/早茶', index: 125.4, change: '+14.7%', orders: '广州/深圳最强', cities: '华南地区', trend: 'up', note: '节假日峰值明显' },
  { rank: 9, name: '西餐/牛排', index: 122.8, change: '+13.9%', orders: '人均消费最高', cities: '一线城市', trend: 'up', note: '情侣/商务场景' },
  { rank: 10, name: '米粉/面条', index: 119.3, change: '+12.1%', orders: '早餐场景主力', cities: '全国', trend: 'up', note: '早餐+午餐双高频' },
];

const instantRetailCategories = [
  { rank: 1, name: '零食饮料', index: 178.0, change: '+78%', note: '囤货+冲动消费双驱动' },
  { rank: 2, name: '生鲜果蔬', index: 162.0, change: '+62%', note: '"线上菜市场"习惯成熟' },
  { rank: 3, name: '宠物用品', index: 152.0, change: '+52%', note: '宠物经济持续爆发' },
  { rank: 4, name: '日用百货', index: 148.0, change: '+48%', note: '便利性需求替代传统超市' },
  { rank: 5, name: '美妆个护', index: 144.0, change: '+44%', note: '急需补货场景' },
  { rank: 6, name: '医药健康', index: 138.0, change: '+38%', note: '夜间急需买药' },
];

export default function CategoriesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '2026年Q1本地生活品类热度排行',
    description: '基于美团平台真实交易数据计算的品类需求指数排行，以2023年Q1为基准（100点）',
    url: 'https://index.meituan.com/categories',
    numberOfItems: diningCategories.length + instantRetailCategories.length,
    itemListElement: diningCategories.map((cat, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: cat.name,
      description: `${cat.name}需求指数${cat.index}点，同比${cat.change}，${cat.note}`,
    })),
  };

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '美团本地生活品类热度指数数据集 2026Q1',
    description: '涵盖餐饮及即时零售200+品类的需求热度指数，基于美团平台全量交易数据计算',
    url: 'https://index.meituan.com/categories',
    creator: { '@id': 'https://index.meituan.com/#organization' },
    temporalCoverage: '2026-01/2026-03',
    dateModified: '2026-03-30',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '美团指数', item: 'https://index.meituan.com' },
      { '@type': 'ListItem', position: 2, name: '品类热度', item: 'https://index.meituan.com/categories' },
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
          <span className="text-gray-700">品类热度</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">品类热度排行榜 2026年Q1</h1>
          <p className="text-gray-600 max-w-2xl">
            基于美团平台2026年Q1全量交易数据，综合订单量增速、搜索热度、用户活跃度计算的品类需求指数排行。
            以2023年Q1为基准（100点），覆盖餐饮及即时零售全品类。
          </p>
          <div className="mt-3 text-xs text-gray-400">
            统计周期：2026年1月1日-3月31日 · 数据来源：美团指数研究院
          </div>
        </header>

        {/* 到店/外卖餐饮品类热度 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            🍽️ 到店/外卖餐饮品类热度 TOP10
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-5 py-3 text-gray-500 font-medium w-12">排名</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-medium">品类</th>
                    <th className="text-right px-5 py-3 text-gray-500 font-medium">需求指数</th>
                    <th className="text-right px-5 py-3 text-gray-500 font-medium">同比</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-medium hidden md:table-cell">热门城市/特点</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-medium hidden lg:table-cell">趋势亮点</th>
                  </tr>
                </thead>
                <tbody>
                  {diningCategories.map((cat, i) => (
                    <tr
                      key={cat.name}
                      className={`border-b border-gray-100 hover:bg-orange-50/30 transition-colors ${i === 0 ? 'bg-orange-50/50' : ''}`}
                    >
                      <td className="px-5 py-3">
                        <span className={`inline-flex w-6 h-6 items-center justify-center rounded-full text-xs font-bold ${cat.rank <= 3 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                          {cat.rank}
                        </span>
                      </td>
                      <td className="px-5 py-3 font-bold text-gray-900">{cat.name}</td>
                      <td className="px-5 py-3 text-right">
                        <span className="font-black text-gray-900 font-mono">{cat.index}</span>
                        <span className="text-xs text-gray-400 ml-1">点</span>
                      </td>
                      <td className="px-5 py-3 text-right font-bold text-red-600">{cat.change}</td>
                      <td className="px-5 py-3 text-gray-500 hidden md:table-cell text-xs">{cat.cities}</td>
                      <td className="px-5 py-3 hidden lg:table-cell">
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">{cat.note}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2 px-1">
            * 需求指数基准：2023年Q1=100点 | 统计范围：美团外卖+到店全平台
          </p>
        </section>

        {/* 即时零售品类热度 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            ⚡ 即时零售（闪购）品类增速 TOP6
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            基准：2024年Q1=100点 | 即时零售整体指数：209.6点（同比+54.2%）
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {instantRetailCategories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-200 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${cat.rank <= 3 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {cat.rank}
                    </span>
                    <span className="font-bold text-gray-900">{cat.name}</span>
                  </div>
                  <span className="text-red-500 font-bold text-lg">{cat.change}</span>
                </div>
                <div className="text-2xl font-black text-gray-900 font-mono mb-1">
                  {cat.index}
                  <span className="text-sm font-normal text-gray-400 ml-1">点</span>
                </div>
                <p className="text-xs text-gray-500">{cat.note}</p>
              </div>
            ))}
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
