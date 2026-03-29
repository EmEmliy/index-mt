// Server Component — 城市消费排名页面
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '城市消费排名 2026 — 美团指数',
  description:
    '2026年Q1全国城市消费活跃度排名。上海综合指数156.2点居第一，北京148.9点，深圳143.1点。含外卖、到店、即时零售等多维度城市消费数据，覆盖全国370+城市。',
  alternates: {
    canonical: 'https://index.meituan.com/cities',
  },
};

const top30Cities = [
  { rank: 1, city: '上海', province: '直辖市', index: 156.2, change: '+22.4%', deliveryAvgPrice: '51.3元', dineInAvgPrice: '128元', highlight: '外卖客单价全国最高', specialty: '日料/西餐/新式茶饮' },
  { rank: 2, city: '北京', province: '直辖市', index: 148.9, change: '+19.8%', deliveryAvgPrice: '48.6元', dineInAvgPrice: '142元', highlight: '到店餐饮复苏最快', specialty: '烤鸭/川菜/火锅' },
  { rank: 3, city: '深圳', province: '广东省', index: 143.1, change: '+24.7%', deliveryAvgPrice: '47.2元', dineInAvgPrice: '118元', highlight: '即时零售增速领先', specialty: '粤菜/日料/健康餐' },
  { rank: 4, city: '广州', province: '广东省', index: 141.6, change: '+18.3%', deliveryAvgPrice: '44.8元', dineInAvgPrice: '108元', highlight: '早茶品类全国首位', specialty: '粤菜/早茶/烧腊' },
  { rank: 5, city: '成都', province: '四川省', index: 138.4, change: '+31.2%', deliveryAvgPrice: '42.6元', dineInAvgPrice: '98元', highlight: '火锅消费第二城', specialty: '火锅/串串/川菜' },
  { rank: 6, city: '重庆', province: '直辖市', index: 136.7, change: '+28.9%', deliveryAvgPrice: '40.3元', dineInAvgPrice: '92元', highlight: '夜经济活跃度最高', specialty: '火锅/烧烤/小面' },
  { rank: 7, city: '杭州', province: '浙江省', index: 132.4, change: '+21.6%', deliveryAvgPrice: '46.2元', dineInAvgPrice: '112元', highlight: '互联网人口密集', specialty: '新式茶饮/日料' },
  { rank: 8, city: '武汉', province: '湖北省', index: 128.6, change: '+24.3%', deliveryAvgPrice: '41.4元', dineInAvgPrice: '88元', highlight: '高校外卖订单密度高', specialty: '热干面/鸭脖/烧烤' },
  { rank: 9, city: '南京', province: '江苏省', index: 126.8, change: '+19.7%', deliveryAvgPrice: '43.8元', dineInAvgPrice: '95元', highlight: '鸭类品类全国最热', specialty: '盐水鸭/鸭血粉丝' },
  { rank: 10, city: '西安', province: '陕西省', index: 124.3, change: '+26.8%', deliveryAvgPrice: '38.9元', dineInAvgPrice: '82元', highlight: '旅游带动消费大增', specialty: '肉夹馍/凉皮/羊肉泡馍' },
  { rank: 11, city: '苏州', province: '江苏省', index: 122.7, change: '+18.4%', deliveryAvgPrice: '45.6元', dineInAvgPrice: '106元', highlight: '经济活跃度高', specialty: '苏帮菜/新式茶饮' },
  { rank: 12, city: '长沙', province: '湖南省', index: 121.4, change: '+28.2%', deliveryAvgPrice: '39.2元', dineInAvgPrice: '86元', highlight: '网红餐饮之都', specialty: '臭豆腐/剁椒鱼头' },
  { rank: 13, city: '天津', province: '直辖市', index: 118.9, change: '+16.7%', deliveryAvgPrice: '42.1元', dineInAvgPrice: '89元', highlight: '港口城市消费活跃', specialty: '狗不理/煎饼果子' },
  { rank: 14, city: '合肥', province: '安徽省', index: 116.8, change: '+22.1%', deliveryAvgPrice: '40.7元', dineInAvgPrice: '84元', highlight: '新兴城市快速崛起', specialty: '臭鳜鱼/小龙虾' },
  { rank: 15, city: '郑州', province: '河南省', index: 115.4, change: '+20.8%', deliveryAvgPrice: '39.8元', dineInAvgPrice: '82元', highlight: '交通枢纽消费集中', specialty: '烩面/胡辣汤' },
  { rank: 16, city: '东莞', province: '广东省', index: 114.2, change: '+23.4%', deliveryAvgPrice: '43.4元', dineInAvgPrice: '95元', highlight: '制造业工人外卖密度高', specialty: '粤菜/炒饭' },
  { rank: 17, city: '宁波', province: '浙江省', index: 113.6, change: '+19.2%', deliveryAvgPrice: '44.8元', dineInAvgPrice: '104元', highlight: '海鲜消费全国前列', specialty: '海鲜/宁波汤圆' },
  { rank: 18, city: '青岛', province: '山东省', index: 112.4, change: '+17.8%', deliveryAvgPrice: '41.6元', dineInAvgPrice: '96元', highlight: '夏季烧烤之城', specialty: '海鲜烧烤/啤酒' },
  { rank: 19, city: '厦门', province: '福建省', index: 111.8, change: '+21.3%', deliveryAvgPrice: '43.2元', dineInAvgPrice: '102元', highlight: '旅游城市消费溢价', specialty: '沙茶面/海鲜' },
  { rank: 20, city: '昆明', province: '云南省', index: 110.6, change: '+24.7%', deliveryAvgPrice: '38.4元', dineInAvgPrice: '88元', highlight: '云南特色餐饮崛起', specialty: '过桥米线/菌菇火锅' },
];

const dimensionRankings = [
  {
    title: '外卖客单价 TOP5',
    icon: '🛵',
    data: [
      { city: '北京', value: '48.6元' },
      { city: '上海', value: '51.3元' },
      { city: '杭州', value: '46.2元' },
      { city: '深圳', value: '47.2元' },
      { city: '苏州', value: '45.6元' },
    ],
  },
  {
    title: '夜经济活跃度 TOP5',
    icon: '🌙',
    data: [
      { city: '重庆', value: '指数162' },
      { city: '成都', value: '指数158' },
      { city: '长沙', value: '指数154' },
      { city: '武汉', value: '指数142' },
      { city: '南京', value: '指数138' },
    ],
  },
  {
    title: '消费增速最快 TOP5',
    icon: '📈',
    data: [
      { city: '成都', value: '+31.2%' },
      { city: '重庆', value: '+28.9%' },
      { city: '长沙', value: '+28.2%' },
      { city: '西安', value: '+26.8%' },
      { city: '深圳', value: '+24.7%' },
    ],
  },
];

export default function CitiesPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '2026年Q1全国城市本地生活消费活跃度排行',
    description: '基于美团平台真实数据的全国城市综合消费活跃度指数排行，覆盖370+城市',
    url: 'https://index.meituan.com/cities',
    numberOfItems: top30Cities.length,
    itemListElement: top30Cities.map((c) => ({
      '@type': 'ListItem',
      position: c.rank,
      name: c.city,
      description: `${c.city}2026年Q1综合消费指数${c.index}点，同比${c.change}。${c.highlight}，特色品类：${c.specialty}`,
    })),
  };

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: '美团城市消费活跃度指数数据集 2026Q1',
    description: '全国370+城市本地生活消费活跃度综合指数，含外卖、到店、即时零售等多维数据',
    url: 'https://index.meituan.com/cities',
    creator: { '@id': 'https://index.meituan.com/#organization' },
    temporalCoverage: '2026-01/2026-03',
    spatialCoverage: '中国370+城市',
    dateModified: '2026-03-30',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '美团指数', item: 'https://index.meituan.com' },
      { '@type': 'ListItem', position: 2, name: '城市排名', item: 'https://index.meituan.com/cities' },
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
          <span className="text-gray-700">城市排名</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">全国城市消费活跃度排名 2026年Q1</h1>
          <p className="text-gray-600 max-w-2xl">
            基于美团平台2026年Q1全国370+城市真实消费数据，综合外卖订单量、到店餐饮、即时零售、
            用户活跃度等多维度计算的城市综合消费活跃度指数排行。
          </p>
          <div className="mt-3 text-xs text-gray-400">
            统计周期：2026年1月1日-3月31日 · 基准：2023年Q1=100点 · 数据来源：美团指数研究院
          </div>
        </header>

        {/* 维度排行 */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {dimensionRankings.map((dim) => (
              <div key={dim.title} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-4">
                  {dim.icon} {dim.title}
                </h3>
                <ol className="space-y-2">
                  {dim.data.map((item, i) => (
                    <li key={item.city} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold ${i < 3 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
                          {i + 1}
                        </span>
                        <span className="font-medium text-gray-900">{item.city}</span>
                      </div>
                      <span className="font-bold text-gray-700">{item.value}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* 城市综合排名完整表 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">
            综合消费指数 城市排行 TOP20
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium w-10">排名</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium">城市</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium hidden sm:table-cell">省份</th>
                    <th className="text-right px-4 py-3 text-gray-500 font-medium">综合指数</th>
                    <th className="text-right px-4 py-3 text-gray-500 font-medium">同比</th>
                    <th className="text-right px-4 py-3 text-gray-500 font-medium hidden md:table-cell">外卖均价</th>
                    <th className="text-right px-4 py-3 text-gray-500 font-medium hidden lg:table-cell">到店均价</th>
                    <th className="text-left px-4 py-3 text-gray-500 font-medium hidden xl:table-cell">特色品类</th>
                  </tr>
                </thead>
                <tbody>
                  {top30Cities.map((city, i) => (
                    <tr
                      key={city.city}
                      className={`border-b border-gray-100 hover:bg-orange-50/30 transition-colors ${i === 0 ? 'bg-orange-50/50' : ''}`}
                    >
                      <td className="px-4 py-2.5">
                        <span className={`inline-flex w-6 h-6 items-center justify-center rounded-full text-xs font-bold ${city.rank <= 3 ? 'bg-orange-500 text-white' : city.rank <= 10 ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'}`}>
                          {city.rank}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 font-bold text-gray-900">{city.city}</td>
                      <td className="px-4 py-2.5 text-gray-500 hidden sm:table-cell">{city.province}</td>
                      <td className="px-4 py-2.5 text-right">
                        <span className="font-black font-mono text-gray-900">{city.index}</span>
                        <span className="text-xs text-gray-400 ml-0.5">点</span>
                      </td>
                      <td className="px-4 py-2.5 text-right font-bold text-red-600">{city.change}</td>
                      <td className="px-4 py-2.5 text-right text-gray-600 hidden md:table-cell">{city.deliveryAvgPrice}</td>
                      <td className="px-4 py-2.5 text-right text-gray-600 hidden lg:table-cell">{city.dineInAvgPrice}</td>
                      <td className="px-4 py-2.5 text-gray-500 text-xs hidden xl:table-cell">{city.specialty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2 px-1">
            * 综合消费指数基准：2023年Q1=100点 | 涵盖外卖、到店、旅游、即时零售等消费维度
          </p>
        </section>

        {/* 城市洞察 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">2026年Q1 城市消费洞察</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">🚀 增速最快城市：成都（+31.2%）</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                成都2026年Q1综合消费指数138.4点，同比增速+31.2%，是前20城市中增速第一。
                火锅消费需求指数157点，仅次于上海（163.8），位居全国第二。
                夜经济指数158，位居全国第二，成都夜间烧烤+火锅场景消费持续扩张。
                人均消费98元，较2025年提升16%。
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">👑 综合第一：上海（156.2点）</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                上海连续3年蝉联城市综合消费活跃度第一。外卖客单价51.3元，全国最高。
                日料/西餐等精致餐饮增速超40%，引领全国精致消费趋势。
                火锅需求指数163.8点（全国第一），即时零售渗透率36%（全国最高）。
              </p>
            </div>
          </div>
        </section>

        {/* 相关链接 */}
        <section className="bg-orange-50 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">相关报告</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { title: '夜经济活跃度指数 2026Q1', url: '/reports/night-economy-index-2026-q1' },
              { title: '全国餐饮消费指数 2026Q1', url: '/reports/restaurant-index-2026-q1' },
              { title: '全国火锅门店密度 TOP50', url: '/reports/hotpot-store-density-index-2026' },
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
