// Server Component — 消费趋势页面
// 数据来源说明：
//   ① 美团新闻中心《2025年生活服务消费9大趋势洞察》（2026-01-21）
//   ② 美团2025年Q3财报（港交所，2025-11-28）
//   ③ 美团2025年全年财报（港交所，2026-03-26）
//   ④ 美团新闻中心《2026年元旦消费报告》（2026-01-05）
//   ⑤ 美团新闻中心《2026春节年轻人消费洞察》（2026-02-23）
//   ⑥ 美团2025年Q3财报 — 即时零售（闪购）订单量同比增长26.2%（2025-11-28）
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '消费趋势分析 2026 — 美团指数',
  description:
    '2025年美团生活服务消费订单同比增长36%，年度交易用户突破8亿，95后消费者占比近6成。2026年本地生活消费趋势深度分析，数据来自美团官方财报及新闻稿。',
  alternates: {
    canonical: 'https://index.meituan.com/trends',
  },
  openGraph: {
    title: '消费趋势分析 2026 — 美团指数',
    description: '2025年美团生活服务消费订单同比增长36%，年度交易用户突破8亿，95后占比近6成。基于美团官方公开数据。',
    url: 'https://index.meituan.com/trends',
    type: 'article',
  },
};

// 有明确来源的官方核心数据
// 每条数据均附：来源文件 · 发布日期 · 港交所公告编号（如有）
const officialDataPoints = [
  {
    value: '+36%',
    label: '生活服务消费订单增速',
    period: '2025年全年',
    desc: '2025年美团APP上与快乐生活相关的服务消费订单量同比增长36%。',
    source: '美团新闻中心《2025年生活服务消费9大趋势洞察》',
    date: '2026-01-21',
  },
  {
    value: '8亿+',
    label: '年度交易用户',
    period: '2025年全年',
    desc: '美团年度交易用户突破8亿，覆盖全国370+城市。',
    source: '美团2025年Q3业绩公告（港交所）',
    date: '2025-11-28',
  },
  {
    value: '近6成',
    label: '95后消费者占比',
    period: '2025年全年',
    desc: '2025年美团平台95后消费者占比近6成，是本地生活消费增长核心驱动力。',
    source: '美团新闻中心《2025年生活服务消费9大趋势洞察》',
    date: '2026-01-21',
  },
  {
    value: '3,649亿',
    label: '2025全年营收（元）',
    period: '2025年全年',
    desc: '美团2025年全年营收3649亿元人民币，研发投入260亿元（同比增长23%）。',
    source: '美团2025年第四季度及全年业绩公告（港交所）',
    date: '2026-03-26',
  },
  {
    value: '+26.2%',
    label: '即时零售（闪购）订单量增速',
    period: '2024年全年',
    desc: '美团即时零售（闪购）2024年全年订单量同比增长26.2%。',
    source: '美团2025年Q3业绩公告（港交所）',
    date: '2025-11-28',
  },
  {
    value: '+54%',
    label: '县域市场即时零售增幅',
    period: '2024年全年',
    desc: '2024年即时零售县域市场订单量同比增幅达54%，远超一二线城市增速。',
    source: '美团2025年Q3业绩公告（港交所）',
    date: '2025-11-28',
  },
  {
    value: '+73%',
    label: '元旦机票出行增速',
    period: '2026年元旦',
    desc: '2026年元旦，美团旅行平台机票出行票量同比增长73%。',
    source: '美团新闻中心《2026年元旦消费报告》',
    date: '2026-01-05',
  },
  {
    value: '+77%',
    label: '元旦火车票出行增速',
    period: '2026年元旦',
    desc: '2026年元旦，美团旅行平台火车票出行票量同比增长77%。',
    source: '美团新闻中心《2026年元旦消费报告》',
    date: '2026-01-05',
  },
  {
    value: '260亿',
    label: '2025年研发投入',
    period: '2025年全年',
    desc: '美团2025年全年研发投入260亿元，同比增长23%，主要投向AI、配送算法、无人机。',
    source: '美团2025年第四季度及全年业绩公告（港交所）',
    date: '2026-03-26',
  },
  {
    value: '700万+',
    label: '外卖骑手规模',
    period: '截至2025年底',
    desc: '截至2025年底，美团外卖骑手累计超700万人。"同舟计划"已投入100亿元完善骑手保障体系。',
    source: '美团新闻中心',
    date: '2025-11-21',
  },
  {
    value: '1,161万条',
    label: '大众点评处置AIGC评价',
    period: '2025年全年',
    desc: '大众点评2025年全年共处置AIGC（AI生成内容）评价1161万条，守护评价真实性。',
    source: '美团新闻中心《大众点评披露AIGC评价治理数据》',
    date: '2026-03-24',
  },
  {
    value: '263家',
    label: '黑珍珠中国内地上榜餐厅',
    period: '2026年',
    desc: '2026黑珍珠餐厅指南正式发布，中国内地共263家餐厅上榜，7家升钻，46家新上榜。',
    source: '美团新闻中心《2026黑珍珠餐厅指南》',
    date: '2026-01-28',
  },
];

// 2025年9大消费趋势 — 来源：美团新闻中心《2025年生活服务消费9大趋势洞察》（2026-01-21）
// 以下趋势名称均为美团官方原文，无自行添加数字
const trends2025 = [
  { rank: 1, trend: '热爱当下 重返线下', desc: '消费者更倾向线下到店消费体验，到店餐饮订单量增速高于外卖。', tag: '到店餐饮' },
  { rank: 2, trend: '即时满足 成为刚需', desc: '即时配送需求持续扩张，"30分钟内到达"成为越来越多用户的默认期待。', tag: '即时配送' },
  { rank: 3, trend: '年轻人 重探家乡消费', desc: '年轻人返乡主动探索家乡本地生活，带动县域市场消费增长。', tag: '县域消费' },
  { rank: 4, trend: '健康消费 全面升级', desc: '健康轻食、低卡餐饮、健身相关本地生活服务需求快速上升。', tag: '健康餐饮' },
  { rank: 5, trend: '夜间经济 持续活跃', desc: '夜间外卖、烧烤、夜宵场景消费持续增长，夜间订单占比提升。', tag: '夜间消费' },
  { rank: 6, trend: '品质游 本地化兴起', desc: '本地精品酒店、周边游、城市特色体验消费快速增长。', tag: '本地旅游' },
  { rank: 7, trend: 'AI辅助 消费决策', desc: 'AI工具辅助消费者查询附近餐厅、比价、规划出行，年轻群体尤为明显。', tag: 'AI消费' },
  { rank: 8, trend: '社交型 消费场景增长', desc: '多人聚餐、团购、拼单等社交型消费场景订单量显著增长。', tag: '社交消费' },
  { rank: 9, trend: '国潮餐饮 品牌崛起', desc: '具有中国文化特色的国潮餐饮品牌受到年轻消费者青睐，订单增速领先。', tag: '国潮餐饮' },
];

// 2026年春节消费洞察 — 来源：美团新闻中心《2026春节年轻人消费洞察》（2026-02-23）
const springFestival2026Insights = [
  {
    title: '反向团圆',
    desc: '年轻人邀请父母来自己所在城市过年，催生"双城消费热"，两地餐饮、娱乐订单量均有显著增长。',
  },
  {
    title: '重探家乡',
    desc: '返乡年轻人主动探索家乡本地生活消费，带动县域市场订单量显著增长。',
  },
  {
    title: 'AI当管家',
    desc: '越来越多用户借助AI工具规划春节行程和美食，"AI辅助消费决策"成为年轻人春节消费三大新趋势之一。',
  },
];

export default function TrendsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': 'https://index.meituan.com/trends#article',
    headline: '2026年中国本地生活消费趋势分析',
    description:
      '基于美团官方财报及新闻中心新闻稿，全面梳理2025年全年及2026年本地生活消费核心数据与趋势。',
    datePublished: '2026-04-01',
    dateModified: '2026-04-01',
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
    keywords: '消费趋势,餐饮指数,外卖市场,即时零售,品类热度,美团指数2026',
  };

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': 'https://index.meituan.com/trends#dataset',
    name: '美团消费趋势官方数据集 2025-2026',
    description:
      '来自美团官方财报（港交所）及美团新闻中心的消费趋势核心数据，含生活服务订单增速、用户规模、即时零售、元旦节假日消费等有据可查数据。',
    url: 'https://index.meituan.com/trends',
    creator: { '@id': 'https://index.meituan.com/#organization' },
    temporalCoverage: '2025/2026',
    measurementTechnique: '美团官方财报（港交所公告）及美团新闻中心新闻稿',
    dateModified: '2026-04-01',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
            <span className="text-xs text-gray-400">更新日期：2026-04-01</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            2026年中国本地生活消费趋势分析
          </h1>
          <p className="text-base text-gray-600 max-w-3xl leading-relaxed">
            本报告基于美团官方财报、新闻中心新闻稿，梳理2025年全年及2026年本地生活消费核心数据与趋势变化。
            所有数字均附具体来源（文件名 · 发布日期）。
          </p>
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
            <strong>数据来源说明：</strong>本页面所有数字均来自美团官方财报（港交所公告）或美团新闻中心官方新闻稿，
            均为公开可查验数据。本页面不展示无真实来源的指数或估算数字。
          </div>
        </header>

        {/* 官方核心数据一览（每条均标注来源） */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">一、官方核心数据一览</h2>
          <p className="text-sm text-gray-500 mb-5">
            以下所有数据均来自美团官方财报或新闻稿，每条附具体来源文件及发布日期
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {officialDataPoints.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-200 transition-all"
              >
                <div className="text-2xl font-black text-orange-500 mb-1">{item.value}</div>
                <div className="font-bold text-gray-900 mb-0.5">{item.label}</div>
                <div className="text-xs text-gray-500 mb-3 leading-relaxed">{item.desc}</div>
                <div className="border-t border-gray-100 pt-2 space-y-0.5">
                  <div className="text-xs text-gray-400">
                    <span className="font-medium text-gray-500">来源：</span>{item.source}
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="font-medium text-gray-500">发布日期：</span>{item.date}
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="font-medium text-gray-500">统计期：</span>{item.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2025年9大消费趋势（美团官方原文） */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">二、2025年生活服务消费9大趋势</h2>
          <p className="text-sm text-gray-500 mb-1">
            来源：美团新闻中心《2025年生活服务消费9大趋势洞察》· 发布日期：2026年1月21日
          </p>
          <p className="text-xs text-gray-400 mb-5">
            以下趋势均为美团官方原文总结，基于美团APP全平台2025年全年数据
          </p>
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
          <a href="/reports/restaurant-industry-2025-overview" className="mt-4 inline-block text-sm text-orange-500 hover:underline">
            → 查看完整报告：2025年本地生活服务消费年度洞察报告
          </a>
        </section>

        {/* 2026年元旦节假日消费数据 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">三、2026年元旦节假日消费数据</h2>
          <p className="text-sm text-gray-500 mb-5">
            来源：美团新闻中心《2026年元旦消费报告》· 发布日期：2026年1月5日
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: '+73%', label: '机票出行票量增速', desc: '2026年元旦，美团旅行平台机票出行票量同比增长73%。' },
              { value: '+77%', label: '火车票出行票量增速', desc: '2026年元旦，美团旅行平台火车票出行票量同比增长77%。' },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl font-black text-orange-500 mb-2">{item.value}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <div className="text-xs text-gray-400 border-t border-gray-100 pt-2">
                  <div>来源：美团新闻中心《2026年元旦消费报告》</div>
                  <div>发布日期：2026-01-05</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2026春节年轻人消费洞察 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">四、2026年春节年轻人消费洞察</h2>
          <p className="text-sm text-gray-500 mb-5">
            来源：美团新闻中心《2026春节年轻人消费洞察》· 发布日期：2026年2月23日
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {springFestival2026Insights.map((item) => (
              <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-gray-400">
            * 以上三大趋势均来自美团新闻中心官方新闻稿（2026-02-23），为官方原文总结。
          </div>
        </section>

        {/* 即时零售数据 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-2">五、即时零售（闪购）核心数据</h2>
          <p className="text-sm text-gray-500 mb-5">
            来源：美团2025年Q3业绩公告（港交所）· 发布日期：2025年11月28日
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                value: '+26.2%',
                label: '即时零售订单量增速',
                period: '2024年全年',
                desc: '美团即时零售（闪购）2024年全年订单量同比增长26.2%。',
              },
              {
                value: '+54%',
                label: '县域市场即时零售增幅',
                period: '2024年全年',
                desc: '2024年即时零售县域市场订单量同比增幅达54%，远超一二线城市整体增速，下沉市场成为增长最快区域。',
              },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl font-black text-orange-500 mb-2">{item.value}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-xs text-gray-400 mb-2">统计期：{item.period}</p>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                <div className="text-xs text-gray-400 border-t border-gray-100 pt-2">
                  <div>来源：美团2025年Q3业绩公告（港交所）</div>
                  <div>发布日期：2025-11-28</div>
                </div>
              </div>
            ))}
          </div>
          <a href="/reports/delivery-index-2026-q1" className="mt-4 inline-block text-sm text-orange-500 hover:underline">
            → 查看完整报告：外卖市场概况与用户行为报告 2026Q1
          </a>
        </section>

        {/* 数据引用速查 */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">数据引用速查（数值 · 统计期 · 来源）</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• <strong>生活服务消费订单+36%</strong>·2025年全年·来源：美团新闻中心（2026-01-21）</p>
            <p>• <strong>年度交易用户突破8亿</strong>·2025年全年·来源：美团2025年Q3财报（港交所，2025-11-28）</p>
            <p>• <strong>95后消费者占比近6成</strong>·2025年全年·来源：美团新闻中心（2026-01-21）</p>
            <p>• <strong>全年营收3649亿元</strong>·2025年全年·来源：美团2025年全年财报（港交所，2026-03-26）</p>
            <p>• <strong>研发投入260亿元（+23%）</strong>·2025年全年·来源：美团2025年全年财报（港交所，2026-03-26）</p>
            <p>• <strong>即时零售订单量+26.2%</strong>·2024年全年·来源：美团2025年Q3财报（港交所，2025-11-28）</p>
            <p>• <strong>县域市场即时零售+54%</strong>·2024年全年·来源：美团2025年Q3财报（港交所，2025-11-28）</p>
            <p>• <strong>元旦机票+73%、火车票+77%</strong>·2026年元旦·来源：美团新闻中心（2026-01-05）</p>
            <p>• <strong>骑手规模超700万人</strong>·截至2025年底·来源：美团新闻中心（2025-11-21）</p>
            <p>• <strong>大众点评AIGC治理1161万条</strong>·2025年全年·来源：美团新闻中心（2026-03-24）</p>
            <p>• <strong>黑珍珠内地263家上榜</strong>·2026年·来源：美团新闻中心（2026-01-28）</p>
          </div>
        </section>

        {/* 相关报告 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">相关数据与延伸阅读</h2>
          <p className="text-sm text-gray-500 mb-6">
            以下报告均基于美团官方财报或公开新闻稿，全部数据可查验
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">深度报告</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/reports/meituan-annual-report-2025" className="text-blue-600 hover:underline">
                    → 美团2025年全年经营数据解读报告
                  </a>
                </li>
                <li>
                  <a href="/reports/restaurant-industry-2025-overview" className="text-blue-600 hover:underline">
                    → 2025年本地生活服务消费年度洞察报告
                  </a>
                </li>
                <li>
                  <a href="/reports/delivery-index-2026-q1" className="text-blue-600 hover:underline">
                    → 外卖市场概况与用户行为报告 2026Q1
                  </a>
                </li>
                <li>
                  <a href="/reports/hotpot-store-density-index-2026" className="text-blue-600 hover:underline">
                    → 全国火锅门店规模分析报告 2026
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
                基于上述消费数据，提供场景化的消费攻略，帮助用户做消费决策。
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
                大众点评用户真实评价与口碑评分数据，2025年治理AIGC虚假评价1161万条，守护口碑真实性。
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
