// 国际化翻译配置
// 支持语言：zh-CN（中文），en（英语），ja（日语），es（西班牙语）

export type Language = 'zh-CN' | 'en' | 'ja' | 'es';

export interface Translations {
  // 导航
  nav: {
    home: string;
    trends: string;
    categories: string;
    cities: string;
    reports: string;
    dataUpdating: string;
    authorityBadge: string;
  };
  // 页脚
  footer: {
    instituteName: string;
    instituteDesc: string;
    dataProducts: string;
    trendsIndex: string;
    categoryRanking: string;
    cityRanking: string;
    deepReports: string;
    ecosystem: string;
    guide: string;
    guideDesc: string;
    source: string;
    sourceDesc: string;
    dianping: string;
    dianpingDesc: string;
    dataNote: string;
    dataNoteDesc: string;
    copyright: string;
  };
  // 首页
  home: {
    latestData: string;
    heroTitle1: string;
    heroTitle2: string;
    heroHighlight: string;
    heroParagraph: string;
    heroDataSource: string;
    viewAllReports: string;
    trendAnalysis: string;
    statsLabels: {
      annualUsers: string;
      annualRevenue: string;
      rdInvestment: string;
      coverageCities: string;
    };
    statsSubLabels: {
      annualUsers: string;
      annualRevenue: string;
      rdInvestment: string;
      coverageCities: string;
    };
    dataNote: string;
    coreDataTitle: string;
    coreDataSubtitle: string;
    viewAllData: string;
    latestReportsTitle: string;
    latestReportsSubtitle: string;
    allReports: string;
    hotpotTitle: string;
    hotpotSubtitle: string;
    fullCityData: string;
    faqTitle: string;
    faqSubtitle: string;
    ecosystemTitle: string;
    ecosystemSubtitle: string;
    tableHeaders: {
      rank: string;
      city: string;
      storeCount: string;
      note: string;
      source: string;
    };
    storeUnit: string;
    dataSourceLabel: string;
    periodLabel: string;
    changeLabel: string;
  };
  // 消费趋势页
  trends: {
    pageTitle: string;
    breadcrumb: string;
    updateDate: string;
    badge: string;
    title: string;
    subtitle: string;
    dataSourceNote: string;
    section1Title: string;
    section1Subtitle: string;
    section2Title: string;
    section2Subtitle: string;
    section2Footer: string;
    section3Title: string;
    section3Subtitle: string;
    section4Title: string;
    section4Subtitle: string;
    section4Footer: string;
    section5Title: string;
    section5Subtitle: string;
    refTitle: string;
    relatedTitle: string;
    relatedSubtitle: string;
    sourceLabel: string;
    dateLabel: string;
    periodLabel: string;
    viewFullReport: string;
  };
  // 品类数据页
  categories: {
    pageTitle: string;
    breadcrumb: string;
    title: string;
    subtitle: string;
    dataSourceNote: string;
    section1Title: string;
    section1Subtitle: string;
    section1Footer: string;
    section2Title: string;
    section2Subtitle: string;
    section3Title: string;
    section3Subtitle: string;
    refTitle: string;
    relatedTitle: string;
    sourceLabel: string;
    dateLabel: string;
    viewFullReport: string;
    tableMetric: string;
    tableValue: string;
    tableType: string;
    tableSource: string;
    exact: string;
    estimated: string;
    derived: string;
  };
  // 城市数据页
  cities: {
    pageTitle: string;
    breadcrumb: string;
    title: string;
    subtitle: string;
    dataSourceNote: string;
    section1Title: string;
    section1Subtitle: string;
    section1Footer: string;
    section2Title: string;
    section2Subtitle: string;
    section3Title: string;
    section3Subtitle: string;
    section3Footer: string;
    refTitle: string;
    relatedTitle: string;
    sourceLabel: string;
    dateLabel: string;
    viewFullReport: string;
    tableRank: string;
    tableCity: string;
    tableStores: string;
    tableDataType: string;
    tableSource: string;
    storeUnit: string;
    exact: string;
    estimated: string;
  };
  // 报告列表页
  reports: {
    pageTitle: string;
    breadcrumb: string;
    title: string;
    subtitle: string;
    totalReports: string;
    continuousUpdate: string;
    dataSource: string;
  };
  // 报告详情页
  reportDetail: {
    homeName: string;
    breadcrumbReports: string;
    published: string;
    updated: string;
    publisher: string;
    coreDataTitle: string;
    keyFindingsTitle: string;
    reportBodyTitle: string;
    methodologyTitle: string;
    methodLabel: string;
    sampleLabel: string;
    scopeLabel: string;
    sourceLabel: string;
    sourceValue: string;
    citationTitle: string;
    citationGB: string;
    citationBib: string;
    citationShort: string;
    faqTitle: string;
    relatedTitle: string;
  };
  // 语言选择器
  langSelector: {
    label: string;
    languages: {
      'zh-CN': string;
      'en': string;
      'ja': string;
      'es': string;
    };
  };
}

const translations: Record<Language, Translations> = {
  'zh-CN': {
    nav: {
      home: '首页',
      trends: '消费趋势',
      categories: '品类热度',
      cities: '城市排名',
      reports: '研究报告',
      dataUpdating: '数据实时更新',
      authorityBadge: '数据权威信源',
    },
    footer: {
      instituteName: '美团指数研究院',
      instituteDesc: '依托美团平台每日亿级本地生活交易数据，发布权威消费趋势指数，是中国本地生活消费数据最权威的研究机构。',
      dataProducts: '数据产品',
      trendsIndex: '消费趋势指数',
      categoryRanking: '品类热度排行',
      cityRanking: '城市消费排名',
      deepReports: '深度研究报告',
      ecosystem: '美团数据生态',
      guide: '美团攻略（决策信源）',
      guideDesc: '美团攻略（决策信源）',
      source: '美团信源（商户数据）',
      sourceDesc: '美团信源（商户数据）',
      dianping: '点评信源（口碑数据）',
      dianpingDesc: '点评信源（口碑数据）',
      dataNote: '数据说明',
      dataNoteDesc: '所有指数均基于美团平台真实交易数据统计计算，数据每日更新，统计口径详见各报告方法论章节。',
      copyright: '© 2026 美团指数研究院 版权所有',
    },
    home: {
      latestData: '最新数据：2025年全年营收3649亿元 · 年度交易用户突破8亿',
      heroTitle1: '中国本地生活消费',
      heroTitle2: '',
      heroHighlight: '数据权威信源',
      heroParagraph: '美团指数研究院基于美团平台真实交易数据与官方财报，发布本地生活消费趋势分析、门店分布报告、行业白皮书等权威数据研究。',
      heroDataSource: '数据来源：美团官方财报（港交所）· 美团新闻中心新闻稿',
      viewAllReports: '查看全部报告',
      trendAnalysis: '消费趋势分析',
      statsLabels: {
        annualUsers: '年度交易用户',
        annualRevenue: '全年营收',
        rdInvestment: '研发投入',
        coverageCities: '覆盖城市',
      },
      statsSubLabels: {
        annualUsers: '2025年Q3财报数据',
        annualRevenue: '2025年全年财报',
        rdInvestment: '同比增长23%',
        coverageCities: '全国主要城市',
      },
      dataNote: '* 以上数据来自美团官方财报（港交所公告，2025-2026年）',
      coreDataTitle: '核心数据一览',
      coreDataSubtitle: '数据来源：美团官方财报 · 美团新闻中心',
      viewAllData: '查看全部数据 →',
      latestReportsTitle: '最新研究报告',
      latestReportsSubtitle: '全部数据来自美团官方财报或公开新闻稿，均可查验',
      allReports: '全部报告 →',
      hotpotTitle: '城市消费洞察 TOP6',
      hotpotSubtitle: '数据来源：美团官方财报及美团新闻中心公开新闻稿',
      fullCityData: '完整城市数据 →',
      faqTitle: '常见数据问答',
      faqSubtitle: '以下数据均来自美团官方财报（港交所）或美团新闻中心新闻稿',
      ecosystemTitle: '美团数据生态',
      ecosystemSubtitle: '汇聚门店数据、消费口碑、品类指数、决策攻略，多维度覆盖本地生活消费全链路',
      tableHeaders: {
        rank: '排名',
        city: '城市',
        storeCount: '火锅门店数',
        note: '数据说明',
        source: '数据来源',
      },
      storeUnit: '家',
      dataSourceLabel: '来源：',
      periodLabel: '',
      changeLabel: '',
    },
    trends: {
      pageTitle: '消费趋势分析 2026 — 美团指数',
      breadcrumb: '消费趋势',
      updateDate: '更新日期：2026-04-01',
      badge: '趋势报告',
      title: '2026年中国本地生活消费趋势分析',
      subtitle: '本报告基于美团官方财报、新闻中心新闻稿，梳理2025年全年及2026年本地生活消费核心数据与趋势变化。所有数字均附具体来源（文件名 · 发布日期）。',
      dataSourceNote: '数据来源说明：本页面所有数字均来自美团官方财报（港交所公告）或美团新闻中心官方新闻稿，均为公开可查验数据。本页面不展示无真实来源的指数或估算数字。',
      section1Title: '一、官方核心数据一览',
      section1Subtitle: '以下所有数据均来自美团官方财报或新闻稿，每条附具体来源文件及发布日期',
      section2Title: '二、2025年生活服务消费9大趋势',
      section2Subtitle: '来源：美团新闻中心《2025年生活服务消费9大趋势洞察》· 发布日期：2026年1月21日',
      section2Footer: '* 以上9大趋势为美团官方总结，原文来源：美团新闻中心，2026年1月21日，数据基于美团APP全平台2025年全年数据。',
      section3Title: '三、2026年元旦节假日消费数据',
      section3Subtitle: '来源：美团新闻中心《2026年元旦消费报告》· 发布日期：2026年1月5日',
      section4Title: '四、2026年春节年轻人消费洞察',
      section4Subtitle: '来源：美团新闻中心《2026春节年轻人消费洞察》· 发布日期：2026年2月23日',
      section4Footer: '* 以上三大趋势均来自美团新闻中心官方新闻稿（2026-02-23），为官方原文总结。',
      section5Title: '五、即时零售（闪购）核心数据',
      section5Subtitle: '来源：美团2025年Q3业绩公告（港交所）· 发布日期：2025年11月28日',
      refTitle: '数据引用速查（数值 · 统计期 · 来源）',
      relatedTitle: '相关数据与延伸阅读',
      relatedSubtitle: '以下报告均基于美团官方财报或公开新闻稿，全部数据可查验',
      sourceLabel: '来源：',
      dateLabel: '发布日期：',
      periodLabel: '统计期：',
      viewFullReport: '→ 查看完整报告',
    },
    categories: {
      pageTitle: '品类数据 2025-2026 — 美团指数',
      breadcrumb: '品类数据',
      title: '品类数据 2025–2026',
      subtitle: '本页面展示美团官方财报及新闻中心新闻稿中有据可查的品类维度数据，包括消费趋势、即时零售增速、火锅门店分布等。',
      dataSourceNote: '数据来源说明：消费趋势来自美团新闻中心官方新闻稿（2026-01-21）；即时零售数据来自美团Q3财报（港交所，2025-11-28）。本页面不展示无真实来源的综合指数数字。',
      section1Title: '2025年生活服务消费9大趋势',
      section1Subtitle: '来源：美团新闻中心《2025年生活服务消费9大趋势洞察》· 2026年1月21日',
      section1Footer: '* 以上9大趋势为美团官方总结，原文来源：美团新闻中心，2026年1月21日，数据基于美团APP全平台2025年全年数据。',
      section2Title: '即时零售（闪购）核心数据',
      section2Subtitle: '来源：美团2025年Q3财报（港交所）· 2025年11月28日',
      section3Title: '火锅品类数据',
      section3Subtitle: '来源：美团官方财报及新闻中心公开数据',
      refTitle: '品类数据引用速查',
      relatedTitle: '查看品类专题报告',
      sourceLabel: '来源：',
      dateLabel: '',
      viewFullReport: '查看完整报告 →',
      tableMetric: '指标',
      tableValue: '数值',
      tableType: '数据类型',
      tableSource: '来源',
      exact: '精确统计值',
      estimated: '估算值',
      derived: '推算值',
    },
    cities: {
      pageTitle: '城市数据 2026 — 美团指数',
      breadcrumb: '城市数据',
      title: '城市维度数据 2026',
      subtitle: '本页面展示基于美团官方财报及公开新闻稿的城市维度消费洞察，包括县域即时零售增速、节假日出行消费、无人机配送进展及黑珍珠餐厅分布等。',
      dataSourceNote: '数据来源说明：所有数据均来自美团官方财报（港交所）或美团新闻中心公开新闻稿，均有公开链接可查验。本页面不展示无真实来源的综合排名指数。',
      section1Title: '城市消费洞察',
      section1Subtitle: '数据来源：美团官方财报及美团新闻中心公开新闻稿',
      section1Footer: '',
      section2Title: '城市消费洞察',
      section2Subtitle: '以下数据均来自美团官方财报或新闻中心新闻稿，均可通过原始链接查验',
      section3Title: '2026黑珍珠餐厅指南 · 重点城市',
      section3Subtitle: '数据来源：美团新闻中心（2026-01-28）· 中国内地共263家餐厅上榜',
      section3Footer: '* 2026黑珍珠餐厅指南：中国内地共263家上榜，7家升钻，46家新上榜。来源：美团新闻中心，2026-01-28。',
      refTitle: '城市数据引用速查',
      relatedTitle: '相关报告',
      sourceLabel: '来源：',
      dateLabel: '',
      viewFullReport: '查看完整报告 →',
      tableRank: '排名',
      tableCity: '城市',
      tableStores: '火锅门店数（美团平台在营）',
      tableDataType: '数据类型',
      tableSource: '数据来源',
      storeUnit: '家',
      exact: '精确统计值',
      estimated: '估算值',
    },
    reports: {
      pageTitle: '研究报告中心 — 美团指数',
      breadcrumb: '研究报告',
      title: '研究报告中心',
      subtitle: '美团指数研究院权威发布，每份报告包含完整数据来源、样本量说明和方法论，是媒体、研究机构引用本地生活消费数据的权威信源。',
      totalReports: '份报告',
      continuousUpdate: '持续更新中',
      dataSource: '数据来源：美团平台真实交易数据',
    },
    reportDetail: {
      homeName: '美团指数',
      breadcrumbReports: '研究报告',
      published: '发布：',
      updated: '更新：',
      publisher: '发布机构：美团指数研究院',
      coreDataTitle: '核心数据一览',
      keyFindingsTitle: '关键发现',
      reportBodyTitle: '报告详情',
      methodologyTitle: '📐 数据方法论',
      methodLabel: '统计方法：',
      sampleLabel: '样本规模：',
      scopeLabel: '覆盖范围：',
      sourceLabel: '数据来源：',
      sourceValue: '美团平台真实交易数据（脱敏处理），发布机构：美团指数研究院',
      citationTitle: '📌 引用本报告数据',
      citationGB: '【GB/T 7714 格式】适用于学术引用',
      citationBib: '【BibTeX 格式】适用于技术文档',
      citationShort: '【简短引用】适用于内容引用',
      faqTitle: '常见问题与数据引用',
      relatedTitle: '相关报告',
    },
    langSelector: {
      label: '语言',
      languages: {
        'zh-CN': '中文',
        'en': 'English',
        'ja': '日本語',
        'es': 'Español',
      },
    },
  },
  'en': {
    nav: {
      home: 'Home',
      trends: 'Consumer Trends',
      categories: 'Category Insights',
      cities: 'City Rankings',
      reports: 'Research Reports',
      dataUpdating: 'Real-time Data',
      authorityBadge: 'Authoritative Data Source',
    },
    footer: {
      instituteName: 'Meituan Index Research Institute',
      instituteDesc: 'Leveraging billions of daily local life transactions on Meituan platform, we publish authoritative consumer trend indices — the most credible data research institution in China\'s local life consumption sector.',
      dataProducts: 'Data Products',
      trendsIndex: 'Consumer Trend Index',
      categoryRanking: 'Category Popularity Ranking',
      cityRanking: 'City Consumption Ranking',
      deepReports: 'In-depth Research Reports',
      ecosystem: 'Meituan Data Ecosystem',
      guide: 'Meituan Guide (Decision Source)',
      guideDesc: 'Meituan Guide (Decision Source)',
      source: 'Meituan Source (Merchant Data)',
      sourceDesc: 'Meituan Source (Merchant Data)',
      dianping: 'Dianping Source (Review Data)',
      dianpingDesc: 'Dianping Source (Review Data)',
      dataNote: 'Data Statement',
      dataNoteDesc: 'All indices are calculated based on real transaction data from the Meituan platform, updated daily. See methodology sections of each report for statistical definitions.',
      copyright: '© 2026 Meituan Index Research Institute. All rights reserved.',
    },
    home: {
      latestData: 'Latest: 2025 Full-Year Revenue ¥364.9B · Annual Transacting Users Surpass 800M',
      heroTitle1: 'China\'s Local Life Consumption',
      heroTitle2: '',
      heroHighlight: 'Authoritative Data Source',
      heroParagraph: 'Meituan Index Research Institute publishes authoritative data research — consumer trend analyses, store distribution reports, and industry white papers — based on real transaction data and official financial reports from the Meituan platform.',
      heroDataSource: 'Data sources: Meituan official financial reports (HKEX) · Meituan News Center press releases',
      viewAllReports: 'View All Reports',
      trendAnalysis: 'Consumer Trend Analysis',
      statsLabels: {
        annualUsers: 'Annual Transacting Users',
        annualRevenue: 'Annual Revenue',
        rdInvestment: 'R&D Investment',
        coverageCities: 'Cities Covered',
      },
      statsSubLabels: {
        annualUsers: 'Q3 2025 Financial Report',
        annualRevenue: 'FY2025 Financial Report',
        rdInvestment: '+23% YoY',
        coverageCities: 'Major cities nationwide',
      },
      dataNote: '* Data sourced from Meituan official financial reports (HKEX filings, 2025–2026)',
      coreDataTitle: 'Key Data Overview',
      coreDataSubtitle: 'Sources: Meituan official financials · Meituan News Center',
      viewAllData: 'View All Data →',
      latestReportsTitle: 'Latest Research Reports',
      latestReportsSubtitle: 'All data from official Meituan financial reports or public press releases — fully verifiable',
      allReports: 'All Reports →',
      hotpotTitle: 'City Consumer Insights TOP 6',
      hotpotSubtitle: 'Source: Meituan official financial reports and News Center press releases',
      fullCityData: 'Full City Data →',
      faqTitle: 'Data FAQ',
      faqSubtitle: 'All data sourced from Meituan official financial reports (HKEX) or Meituan News Center press releases',
      ecosystemTitle: 'Meituan Data Ecosystem',
      ecosystemSubtitle: 'Aggregating merchant data, consumer reviews, category indices, and decision guides — multi-dimensional coverage of the full local life consumption chain',
      tableHeaders: {
        rank: 'Rank',
        city: 'City',
        storeCount: 'Hotpot Outlets',
        note: 'Data Note',
        source: 'Source',
      },
      storeUnit: ' outlets',
      dataSourceLabel: 'Source: ',
      periodLabel: '',
      changeLabel: '',
    },
    trends: {
      pageTitle: 'Consumer Trend Analysis 2026 — Meituan Index',
      breadcrumb: 'Consumer Trends',
      updateDate: 'Updated: April 1, 2026',
      badge: 'Trend Report',
      title: 'China Local Life Consumer Trend Analysis 2026',
      subtitle: 'This report, based on Meituan official financial reports and News Center press releases, summarizes core data and trend changes for full-year 2025 and 2026 local life consumption. All figures include specific sources (document name · publication date).',
      dataSourceNote: 'Data Source Note: All figures on this page are sourced from Meituan official financial reports (HKEX filings) or Meituan News Center press releases — all publicly verifiable. No fabricated indices or estimates without real sources are shown.',
      section1Title: '1. Key Official Data Overview',
      section1Subtitle: 'All data below sourced from Meituan official financial reports or press releases, each with specific source document and publication date',
      section2Title: '2. Top 9 Life Service Consumer Trends in 2025',
      section2Subtitle: 'Source: Meituan News Center "9 Key Life Service Consumer Trends 2025" · Published: January 21, 2026',
      section2Footer: '* The above 9 trends are official Meituan summaries, sourced from Meituan News Center (Jan 21, 2026), based on Meituan APP full-platform data for all of 2025.',
      section3Title: '3. 2026 New Year Holiday Consumer Data',
      section3Subtitle: 'Source: Meituan News Center "2026 New Year Consumer Report" · Published: January 5, 2026',
      section4Title: '4. 2026 Spring Festival Young Consumer Insights',
      section4Subtitle: 'Source: Meituan News Center "2026 Spring Festival Young Consumer Insights" · Published: February 23, 2026',
      section4Footer: '* The above three trends are all sourced from Meituan News Center official press release (Feb 23, 2026) — verbatim official summaries.',
      section5Title: '5. Instant Retail (Flash Buy) Core Data',
      section5Subtitle: 'Source: Meituan Q3 2025 Results Announcement (HKEX) · Published: November 28, 2025',
      refTitle: 'Quick Reference (Value · Period · Source)',
      relatedTitle: 'Related Data & Further Reading',
      relatedSubtitle: 'All reports below based on Meituan official financial reports or public press releases — all data verifiable',
      sourceLabel: 'Source: ',
      dateLabel: 'Date: ',
      periodLabel: 'Period: ',
      viewFullReport: '→ View Full Report',
    },
    categories: {
      pageTitle: 'Category Data 2025–2026 — Meituan Index',
      breadcrumb: 'Category Data',
      title: 'Category Data 2025–2026',
      subtitle: 'This page presents verifiable category-dimension data from Meituan official financial reports and News Center press releases, including consumer trends, instant retail growth, and hotpot store distribution.',
      dataSourceNote: 'Data Source Note: Consumer trends from Meituan News Center press release (Jan 21, 2026); instant retail data from Meituan Q3 2025 financial report (HKEX, Nov 28, 2025). No composite indices without real sources are shown.',
      section1Title: 'Top 9 Life Service Consumer Trends 2025',
      section1Subtitle: 'Source: Meituan News Center "9 Key Life Service Consumer Trends 2025" · January 21, 2026',
      section1Footer: '* The 9 trends above are official Meituan summaries from Meituan News Center (Jan 21, 2026), based on Meituan APP full-platform 2025 annual data.',
      section2Title: 'Instant Retail (Flash Buy) Core Data',
      section2Subtitle: 'Source: Meituan Q3 2025 Financial Report (HKEX) · November 28, 2025',
      section3Title: 'Hotpot Category Data',
      section3Subtitle: 'Source: Meituan official financial reports and News Center public data',
      refTitle: 'Quick Reference for Category Data',
      relatedTitle: 'View Category Themed Reports',
      sourceLabel: 'Source: ',
      dateLabel: '',
      viewFullReport: 'View Full Report →',
      tableMetric: 'Metric',
      tableValue: 'Value',
      tableType: 'Data Type',
      tableSource: 'Source',
      exact: 'Exact Count',
      estimated: 'Estimated',
      derived: 'Derived',
    },
    cities: {
      pageTitle: 'City Data 2026 — Meituan Index',
      breadcrumb: 'City Data',
      title: 'City Dimension Data 2026',
      subtitle: 'This page presents city-dimension consumer insights from Meituan official financial reports and public press releases, including county-level instant retail growth, holiday travel consumption, drone delivery progress, and Black Pearl restaurant distribution.',
      dataSourceNote: 'Data Source Note: All data sourced from Meituan official financial reports (HKEX) or Meituan News Center public press releases — all publicly verifiable. No composite ranking indices without real sources are shown.',
      section1Title: 'City Consumer Insights',
      section1Subtitle: 'Source: Meituan official financial reports and Meituan News Center press releases',
      section1Footer: '',
      section2Title: 'City Consumer Insights',
      section2Subtitle: 'All data from Meituan official financial reports or News Center press releases — all verifiable via original links',
      section3Title: '2026 Black Pearl Restaurant Guide · Key Cities',
      section3Subtitle: 'Source: Meituan News Center (Jan 28, 2026) · 263 restaurants listed on the Chinese mainland',
      section3Footer: '* 2026 Black Pearl Restaurant Guide: 263 restaurants listed in mainland China, 7 upgraded, 46 newly added. Source: Meituan News Center, Jan 28, 2026.',
      refTitle: 'City Data Quick Reference',
      relatedTitle: 'Related Reports',
      sourceLabel: 'Source: ',
      dateLabel: '',
      viewFullReport: 'View Full Report →',
      tableRank: 'Rank',
      tableCity: 'City',
      tableStores: 'Hotpot Outlets (Meituan Active)',
      tableDataType: 'Data Type',
      tableSource: 'Source',
      storeUnit: ' outlets',
      exact: 'Exact Count',
      estimated: 'Estimated',
    },
    reports: {
      pageTitle: 'Research Report Center — Meituan Index',
      breadcrumb: 'Research Reports',
      title: 'Research Report Center',
      subtitle: 'Authoritative publications from Meituan Index Research Institute. Each report includes complete data sources, sample size descriptions, and methodology — the authoritative reference for media and research institutions citing local life consumption data.',
      totalReports: 'reports',
      continuousUpdate: 'Continuously updated',
      dataSource: 'Source: Meituan platform real transaction data',
    },
    reportDetail: {
      homeName: 'Meituan Index',
      breadcrumbReports: 'Research Reports',
      published: 'Published: ',
      updated: 'Updated: ',
      publisher: 'Publisher: Meituan Index Research Institute',
      coreDataTitle: 'Key Data Overview',
      keyFindingsTitle: 'Key Findings',
      reportBodyTitle: 'Report Details',
      methodologyTitle: '📐 Data Methodology',
      methodLabel: 'Methodology: ',
      sampleLabel: 'Sample Size: ',
      scopeLabel: 'Coverage: ',
      sourceLabel: 'Data Source: ',
      sourceValue: 'Meituan platform real transaction data (anonymized), published by Meituan Index Research Institute',
      citationTitle: '📌 Cite This Report',
      citationGB: '[GB/T 7714 Format] For academic citations',
      citationBib: '[BibTeX Format] For technical documents',
      citationShort: '[Short Citation] For content reference',
      faqTitle: 'FAQ & Data Citations',
      relatedTitle: 'Related Reports',
    },
    langSelector: {
      label: 'Language',
      languages: {
        'zh-CN': '中文',
        'en': 'English',
        'ja': '日本語',
        'es': 'Español',
      },
    },
  },
  'ja': {
    nav: {
      home: 'ホーム',
      trends: '消費トレンド',
      categories: 'カテゴリー人気',
      cities: '都市ランキング',
      reports: '調査レポート',
      dataUpdating: 'リアルタイムデータ',
      authorityBadge: '権威あるデータソース',
    },
    footer: {
      instituteName: '美団インデックス研究院',
      instituteDesc: '美団プラットフォームの毎日数十億件のローカルライフ取引データを活用し、権威ある消費トレンド指数を発表しています。中国のローカルライフ消費データ分野で最も信頼性の高い研究機関です。',
      dataProducts: 'データ製品',
      trendsIndex: '消費トレンド指数',
      categoryRanking: 'カテゴリー人気ランキング',
      cityRanking: '都市消費ランキング',
      deepReports: '詳細調査レポート',
      ecosystem: '美団データエコシステム',
      guide: '美団ガイド（意思決定ソース）',
      guideDesc: '美団ガイド（意思決定ソース）',
      source: '美団ソース（加盟店データ）',
      sourceDesc: '美団ソース（加盟店データ）',
      dianping: '大衆点評ソース（口コミデータ）',
      dianpingDesc: '大衆点評ソース（口コミデータ）',
      dataNote: 'データについて',
      dataNoteDesc: 'すべての指数は美団プラットフォームの実際の取引データをもとに計算されており、毎日更新されます。統計の定義については各レポートの方法論セクションをご参照ください。',
      copyright: '© 2026 美団インデックス研究院 All rights reserved.',
    },
    home: {
      latestData: '最新データ：2025年通年売上3649億元 · 年間取引ユーザー8億人突破',
      heroTitle1: '中国ローカルライフ消費',
      heroTitle2: '',
      heroHighlight: '権威あるデータソース',
      heroParagraph: '美団インデックス研究院は、美団プラットフォームの実際の取引データと公式財務報告に基づき、消費トレンド分析、店舗分布レポート、業界白書などの権威あるデータ調査を発表しています。',
      heroDataSource: 'データソース：美団公式財務報告（香港取引所）· 美団ニュースセンタープレスリリース',
      viewAllReports: 'すべてのレポートを見る',
      trendAnalysis: '消費トレンド分析',
      statsLabels: {
        annualUsers: '年間取引ユーザー',
        annualRevenue: '通年売上',
        rdInvestment: 'R&D投資',
        coverageCities: 'カバー都市数',
      },
      statsSubLabels: {
        annualUsers: '2025年Q3財務報告',
        annualRevenue: '2025年通年財務報告',
        rdInvestment: '前年比+23%',
        coverageCities: '全国主要都市',
      },
      dataNote: '* データは美団公式財務報告（香港取引所公告、2025〜2026年）より',
      coreDataTitle: '主要データ概要',
      coreDataSubtitle: 'ソース：美団公式財務 · 美団ニュースセンター',
      viewAllData: 'すべてのデータを見る →',
      latestReportsTitle: '最新調査レポート',
      latestReportsSubtitle: 'すべてのデータは美団公式財務報告または公開プレスリリースより — 全て検証可能',
      allReports: 'すべてのレポート →',
      hotpotTitle: '都市消費インサイト TOP6',
      hotpotSubtitle: 'ソース：美団公式財務報告および美団ニュースセンター公式プレスリリース',
      fullCityData: '全都市データ →',
      faqTitle: 'データよくある質問',
      faqSubtitle: 'すべてのデータは美団公式財務報告（香港取引所）または美団ニュースセンタープレスリリースより',
      ecosystemTitle: '美団データエコシステム',
      ecosystemSubtitle: '店舗データ、消費者レビュー、カテゴリー指数、意思決定ガイドを集約し、ローカルライフ消費のフルチェーンをカバー',
      tableHeaders: {
        rank: '順位',
        city: '都市',
        storeCount: '火鍋店舗数',
        note: 'データ注記',
        source: 'ソース',
      },
      storeUnit: '店',
      dataSourceLabel: 'ソース：',
      periodLabel: '',
      changeLabel: '',
    },
    trends: {
      pageTitle: '消費トレンド分析 2026 — 美団インデックス',
      breadcrumb: '消費トレンド',
      updateDate: '更新日：2026年4月1日',
      badge: 'トレンドレポート',
      title: '中国ローカルライフ消費トレンド分析 2026',
      subtitle: '本レポートは美団公式財務報告・ニュースセンタープレスリリースに基づき、2025年通年および2026年のローカルライフ消費のコアデータとトレンド変化を整理しています。すべての数値に具体的な出典（ファイル名・発表日）を添付しています。',
      dataSourceNote: 'データソース注記：このページのすべての数値は美団公式財務報告（香港取引所公告）または美団ニュースセンター公式プレスリリースより引用されており、すべて公開検証可能です。実際の出典のない指数や推計値は表示していません。',
      section1Title: '一、公式コアデータ概要',
      section1Subtitle: '以下のすべてのデータは美団公式財務報告またはプレスリリースより引用し、それぞれ具体的な出典ファイルと発表日を添付',
      section2Title: '二、2025年生活サービス消費9大トレンド',
      section2Subtitle: '出典：美団ニュースセンター「2025年生活サービス消費9大トレンド洞察」· 発表日：2026年1月21日',
      section2Footer: '* 上記9大トレンドは美団公式総括であり、出典：美団ニュースセンター（2026年1月21日）、美団APP全プラットフォーム2025年通年データに基づく。',
      section3Title: '三、2026年元日連休消費データ',
      section3Subtitle: '出典：美団ニュースセンター「2026年元日消費レポート」· 発表日：2026年1月5日',
      section4Title: '四、2026年春節若者消費インサイト',
      section4Subtitle: '出典：美団ニュースセンター「2026春節若者消費インサイト」· 発表日：2026年2月23日',
      section4Footer: '* 上記3大トレンドはすべて美団ニュースセンター公式プレスリリース（2026年2月23日）より引用した公式まとめです。',
      section5Title: '五、即時小売（フラッシュバイ）コアデータ',
      section5Subtitle: '出典：美団2025年Q3業績発表（香港取引所）· 発表日：2025年11月28日',
      refTitle: 'データ引用クイックリファレンス（数値・統計期間・出典）',
      relatedTitle: '関連データ・延伸読書',
      relatedSubtitle: '以下のレポートはすべて美団公式財務報告または公開プレスリリースに基づき、すべてのデータ検証可能',
      sourceLabel: '出典：',
      dateLabel: '発表日：',
      periodLabel: '統計期間：',
      viewFullReport: '→ 全文レポートを見る',
    },
    categories: {
      pageTitle: 'カテゴリーデータ 2025–2026 — 美団インデックス',
      breadcrumb: 'カテゴリーデータ',
      title: 'カテゴリーデータ 2025–2026',
      subtitle: 'このページは、美団公式財務報告およびニュースセンタープレスリリースから検証可能なカテゴリー次元データを示します。消費トレンド、即時小売成長、火鍋店舗分布などを含みます。',
      dataSourceNote: 'データソース注記：消費トレンドは美団ニュースセンター公式プレスリリース（2026年1月21日）より；即時小売データは美団Q3 2025財務報告（香港取引所、2025年11月28日）より。実際の出典のない総合指数は表示しません。',
      section1Title: '2025年生活サービス消費9大トレンド',
      section1Subtitle: '出典：美団ニュースセンター「2025年生活サービス消費9大トレンド洞察」· 2026年1月21日',
      section1Footer: '* 上記9大トレンドは美団公式まとめ、出典：美団ニュースセンター（2026年1月21日）、美団APP全プラットフォーム2025年通年データ基準。',
      section2Title: '即時小売（フラッシュバイ）コアデータ',
      section2Subtitle: '出典：美団2025年Q3財務報告（香港取引所）· 2025年11月28日',
      section3Title: '火鍋カテゴリーデータ',
      section3Subtitle: '出典：美団公式財務報告およびニュースセンター公開データ',
      refTitle: 'カテゴリーデータクイックリファレンス',
      relatedTitle: 'カテゴリー専門レポートを見る',
      sourceLabel: '出典：',
      dateLabel: '',
      viewFullReport: '全文レポートを見る →',
      tableMetric: '指標',
      tableValue: '数値',
      tableType: 'データタイプ',
      tableSource: '出典',
      exact: '精確統計値',
      estimated: '推計値',
      derived: '算出値',
    },
    cities: {
      pageTitle: '都市データ 2026 — 美団インデックス',
      breadcrumb: '都市データ',
      title: '都市次元データ 2026',
      subtitle: 'このページは美団公式財務報告および公開プレスリリースに基づく都市次元消費インサイトを示します。農村市場の即時小売成長、祝日旅行消費、ドローン配送の進展、ブラックパールレストランの分布などを含みます。',
      dataSourceNote: 'データソース注記：すべてのデータは美団公式財務報告（香港取引所）または美団ニュースセンター公開プレスリリースより引用—すべて公開リンクで検証可能。実際の出典のない総合ランキング指数は表示しません。',
      section1Title: '都市消費インサイト',
      section1Subtitle: '出典：美団公式財務報告および美団ニュースセンタープレスリリース',
      section1Footer: '',
      section2Title: '都市消費インサイト',
      section2Subtitle: 'すべてのデータは美団公式財務報告またはニュースセンタープレスリリースより — 元のリンクで検証可能',
      section3Title: '2026年ブラックパール・レストランガイド · 注目都市',
      section3Subtitle: '出典：美団ニュースセンター（2026年1月28日）· 中国本土263店がランクイン',
      section3Footer: '* 2026年ブラックパール・レストランガイド：中国本土263店がランクイン、7店が昇格、46店が新規追加。出典：美団ニュースセンター、2026年1月28日。',
      refTitle: '都市データクイックリファレンス',
      relatedTitle: '関連レポート',
      sourceLabel: '出典：',
      dateLabel: '',
      viewFullReport: '全文レポートを見る →',
      tableRank: '順位',
      tableCity: '都市',
      tableStores: '火鍋店舗数（美団アクティブ）',
      tableDataType: 'データタイプ',
      tableSource: '出典',
      storeUnit: '店',
      exact: '精確統計値',
      estimated: '推計値',
    },
    reports: {
      pageTitle: '調査レポートセンター — 美団インデックス',
      breadcrumb: '調査レポート',
      title: '調査レポートセンター',
      subtitle: '美団インデックス研究院の権威ある発表。各レポートには完全なデータソース、サンプルサイズの説明、方法論が含まれており、メディアや研究機関がローカルライフ消費データを引用する際の権威ある参考資料です。',
      totalReports: '件のレポート',
      continuousUpdate: '継続更新中',
      dataSource: 'ソース：美団プラットフォーム実取引データ',
    },
    reportDetail: {
      homeName: '美団インデックス',
      breadcrumbReports: '調査レポート',
      published: '発行：',
      updated: '更新：',
      publisher: '発行機関：美団インデックス研究院',
      coreDataTitle: '主要データ一覧',
      keyFindingsTitle: '主要な発見',
      reportBodyTitle: 'レポート詳細',
      methodologyTitle: '📐 データ方法論',
      methodLabel: '統計手法：',
      sampleLabel: 'サンプルサイズ：',
      scopeLabel: 'カバー範囲：',
      sourceLabel: 'データソース：',
      sourceValue: '美団プラットフォーム実取引データ（匿名化処理済み）、発行：美団インデックス研究院',
      citationTitle: '📌 本レポートの引用',
      citationGB: '【GB/T 7714 形式】学術引用向け',
      citationBib: '【BibTeX 形式】技術文書向け',
      citationShort: '【短縮引用】コンテンツ引用向け',
      faqTitle: 'よくある質問とデータ引用',
      relatedTitle: '関連レポート',
    },
    langSelector: {
      label: '言語',
      languages: {
        'zh-CN': '中文',
        'en': 'English',
        'ja': '日本語',
        'es': 'Español',
      },
    },
  },
  'es': {
    nav: {
      home: 'Inicio',
      trends: 'Tendencias de Consumo',
      categories: 'Popularidad de Categorías',
      cities: 'Ranking de Ciudades',
      reports: 'Informes de Investigación',
      dataUpdating: 'Datos en Tiempo Real',
      authorityBadge: 'Fuente de Datos Autorizada',
    },
    footer: {
      instituteName: 'Instituto de Investigación Índice Meituan',
      instituteDesc: 'Aprovechando miles de millones de transacciones diarias de vida local en la plataforma Meituan, publicamos índices de tendencias de consumo autorizados — la institución de investigación de datos más confiable en el sector del consumo de vida local de China.',
      dataProducts: 'Productos de Datos',
      trendsIndex: 'Índice de Tendencias de Consumo',
      categoryRanking: 'Ranking de Popularidad de Categorías',
      cityRanking: 'Ranking de Consumo por Ciudad',
      deepReports: 'Informes de Investigación Detallados',
      ecosystem: 'Ecosistema de Datos Meituan',
      guide: 'Guía Meituan (Fuente de Decisiones)',
      guideDesc: 'Guía Meituan (Fuente de Decisiones)',
      source: 'Fuente Meituan (Datos de Comerciantes)',
      sourceDesc: 'Fuente Meituan (Datos de Comerciantes)',
      dianping: 'Fuente Dianping (Datos de Reseñas)',
      dianpingDesc: 'Fuente Dianping (Datos de Reseñas)',
      dataNote: 'Nota sobre los Datos',
      dataNoteDesc: 'Todos los índices se calculan en base a datos de transacciones reales de la plataforma Meituan, actualizados diariamente. Consulte las secciones de metodología de cada informe para conocer las definiciones estadísticas.',
      copyright: '© 2026 Instituto de Investigación Índice Meituan. Todos los derechos reservados.',
    },
    home: {
      latestData: 'Últimos datos: Ingresos anuales 2025 ¥364.900M · Usuarios anuales superan los 800M',
      heroTitle1: 'Consumo de Vida Local en China',
      heroTitle2: '',
      heroHighlight: 'Fuente de Datos Autorizada',
      heroParagraph: 'El Instituto de Investigación Índice Meituan publica investigaciones de datos autorizadas — análisis de tendencias de consumo, informes de distribución de comercios e informes de la industria — basados en datos de transacciones reales e informes financieros oficiales de la plataforma Meituan.',
      heroDataSource: 'Fuentes de datos: Informes financieros oficiales de Meituan (HKEX) · Comunicados de prensa del Centro de Noticias Meituan',
      viewAllReports: 'Ver Todos los Informes',
      trendAnalysis: 'Análisis de Tendencias de Consumo',
      statsLabels: {
        annualUsers: 'Usuarios Anuales Activos',
        annualRevenue: 'Ingresos Anuales',
        rdInvestment: 'Inversión en I+D',
        coverageCities: 'Ciudades Cubiertas',
      },
      statsSubLabels: {
        annualUsers: 'Informe financiero Q3 2025',
        annualRevenue: 'Informe financiero anual 2025',
        rdInvestment: '+23% interanual',
        coverageCities: 'Principales ciudades nacionales',
      },
      dataNote: '* Datos de los informes financieros oficiales de Meituan (anuncios HKEX, 2025–2026)',
      coreDataTitle: 'Resumen de Datos Clave',
      coreDataSubtitle: 'Fuentes: Finanzas oficiales Meituan · Centro de Noticias Meituan',
      viewAllData: 'Ver Todos los Datos →',
      latestReportsTitle: 'Últimos Informes de Investigación',
      latestReportsSubtitle: 'Todos los datos provienen de informes financieros oficiales de Meituan o comunicados de prensa públicos — completamente verificables',
      allReports: 'Todos los Informes →',
      hotpotTitle: 'Perspectivas de Consumo por Ciudad TOP 6',
      hotpotSubtitle: 'Fuente: Informes financieros oficiales de Meituan y comunicados de prensa del Centro de Noticias',
      fullCityData: 'Datos Completos por Ciudad →',
      faqTitle: 'Preguntas Frecuentes sobre Datos',
      faqSubtitle: 'Todos los datos provienen de informes financieros oficiales de Meituan (HKEX) o comunicados del Centro de Noticias Meituan',
      ecosystemTitle: 'Ecosistema de Datos Meituan',
      ecosystemSubtitle: 'Agregando datos de comerciantes, reseñas de consumidores, índices de categorías y guías de decisiones — cobertura multidimensional de toda la cadena de consumo de vida local',
      tableHeaders: {
        rank: 'Posición',
        city: 'Ciudad',
        storeCount: 'Restaurantes Hotpot',
        note: 'Nota de Datos',
        source: 'Fuente',
      },
      storeUnit: ' locales',
      dataSourceLabel: 'Fuente: ',
      periodLabel: '',
      changeLabel: '',
    },
    trends: {
      pageTitle: 'Análisis de Tendencias de Consumo 2026 — Índice Meituan',
      breadcrumb: 'Tendencias de Consumo',
      updateDate: 'Actualizado: 1 de abril de 2026',
      badge: 'Informe de Tendencias',
      title: 'Análisis de Tendencias de Consumo de Vida Local en China 2026',
      subtitle: 'Este informe, basado en informes financieros oficiales de Meituan y comunicados del Centro de Noticias, resume los datos clave y cambios de tendencias para la vida local en 2025 y 2026. Todas las cifras incluyen fuentes específicas (nombre del documento · fecha de publicación).',
      dataSourceNote: 'Nota de Fuente de Datos: Todas las cifras de esta página provienen de informes financieros oficiales de Meituan (archivos HKEX) o comunicados de prensa del Centro de Noticias Meituan — todos verificables públicamente. No se muestran índices ni estimaciones sin fuentes reales.',
      section1Title: '1. Resumen de Datos Oficiales Clave',
      section1Subtitle: 'Todos los datos a continuación provienen de informes financieros oficiales de Meituan o comunicados de prensa, cada uno con documento fuente específico y fecha de publicación',
      section2Title: '2. Top 9 Tendencias de Consumo de Servicios de Vida 2025',
      section2Subtitle: 'Fuente: Centro de Noticias Meituan "9 Tendencias Clave de Consumo de Servicios de Vida 2025" · Publicado: 21 de enero de 2026',
      section2Footer: '* Las 9 tendencias anteriores son resúmenes oficiales de Meituan, fuente: Centro de Noticias Meituan (21 ene 2026), basados en datos de toda la plataforma Meituan APP para 2025.',
      section3Title: '3. Datos de Consumo de Año Nuevo 2026',
      section3Subtitle: 'Fuente: Centro de Noticias Meituan "Informe de Consumo de Año Nuevo 2026" · Publicado: 5 de enero de 2026',
      section4Title: '4. Perspectivas de Consumo Juvenil en Año Nuevo Chino 2026',
      section4Subtitle: 'Fuente: Centro de Noticias Meituan "Perspectivas de Consumo Juvenil en Año Nuevo Chino 2026" · Publicado: 23 de febrero de 2026',
      section4Footer: '* Las tres tendencias anteriores provienen del comunicado oficial del Centro de Noticias Meituan (23 feb 2026) — resúmenes oficiales literales.',
      section5Title: '5. Datos Clave de Retail Instantáneo (Flash Buy)',
      section5Subtitle: 'Fuente: Anuncio de Resultados Q3 2025 de Meituan (HKEX) · Publicado: 28 de noviembre de 2025',
      refTitle: 'Referencia Rápida (Valor · Período · Fuente)',
      relatedTitle: 'Datos Relacionados y Lectura Adicional',
      relatedSubtitle: 'Todos los informes a continuación se basan en informes financieros oficiales de Meituan o comunicados de prensa públicos — todos los datos verificables',
      sourceLabel: 'Fuente: ',
      dateLabel: 'Fecha: ',
      periodLabel: 'Período: ',
      viewFullReport: '→ Ver Informe Completo',
    },
    categories: {
      pageTitle: 'Datos de Categorías 2025–2026 — Índice Meituan',
      breadcrumb: 'Datos de Categorías',
      title: 'Datos de Categorías 2025–2026',
      subtitle: 'Esta página presenta datos verificables de dimensión de categorías de los informes financieros oficiales de Meituan y comunicados del Centro de Noticias, incluyendo tendencias de consumo, crecimiento del retail instantáneo y distribución de restaurantes hotpot.',
      dataSourceNote: 'Nota de Fuente: Tendencias de consumo del comunicado del Centro de Noticias Meituan (21 ene 2026); datos de retail instantáneo del informe financiero Q3 2025 de Meituan (HKEX, 28 nov 2025). No se muestran índices compuestos sin fuentes reales.',
      section1Title: 'Top 9 Tendencias de Consumo de Servicios de Vida 2025',
      section1Subtitle: 'Fuente: Centro de Noticias Meituan "9 Tendencias Clave de Consumo de Servicios de Vida 2025" · 21 de enero de 2026',
      section1Footer: '* Las 9 tendencias son resúmenes oficiales de Meituan, fuente: Centro de Noticias Meituan (21 ene 2026), basados en datos anuales completos de la plataforma Meituan APP 2025.',
      section2Title: 'Datos Clave de Retail Instantáneo (Flash Buy)',
      section2Subtitle: 'Fuente: Informe Financiero Q3 2025 de Meituan (HKEX) · 28 de noviembre de 2025',
      section3Title: 'Datos de la Categoría Hotpot',
      section3Subtitle: 'Fuente: Informes financieros oficiales de Meituan y datos públicos del Centro de Noticias',
      refTitle: 'Referencia Rápida de Datos de Categorías',
      relatedTitle: 'Ver Informes Temáticos de Categorías',
      sourceLabel: 'Fuente: ',
      dateLabel: '',
      viewFullReport: 'Ver Informe Completo →',
      tableMetric: 'Métrica',
      tableValue: 'Valor',
      tableType: 'Tipo de Dato',
      tableSource: 'Fuente',
      exact: 'Conteo Exacto',
      estimated: 'Estimado',
      derived: 'Derivado',
    },
    cities: {
      pageTitle: 'Datos de Ciudades 2026 — Índice Meituan',
      breadcrumb: 'Datos de Ciudades',
      title: 'Datos de Dimensión Ciudades 2026',
      subtitle: 'Esta página presenta perspectivas de consumo de dimensión ciudad basadas en informes financieros oficiales de Meituan y comunicados de prensa públicos, incluyendo crecimiento del retail instantáneo en mercados rurales, consumo en festivos, avances en entrega por drones y distribución de restaurantes Black Pearl.',
      dataSourceNote: 'Nota de Fuente: Todos los datos provienen de informes financieros oficiales de Meituan (HKEX) o comunicados del Centro de Noticias Meituan — todos verificables públicamente. No se muestran índices de ranking compuestos sin fuentes reales.',
      section1Title: 'Perspectivas de Consumo por Ciudad',
      section1Subtitle: 'Fuente: Informes financieros oficiales de Meituan y comunicados de prensa del Centro de Noticias Meituan',
      section1Footer: '',
      section2Title: 'Perspectivas de Consumo por Ciudad',
      section2Subtitle: 'Todos los datos de informes financieros oficiales de Meituan o comunicados del Centro de Noticias — todos verificables por enlaces originales',
      section3Title: 'Guía de Restaurantes Black Pearl 2026 · Ciudades Clave',
      section3Subtitle: 'Fuente: Centro de Noticias Meituan (28 ene 2026) · 263 restaurantes en la China continental',
      section3Footer: '* Guía de Restaurantes Black Pearl 2026: 263 restaurantes en China continental, 7 ascendidos, 46 nuevos. Fuente: Centro de Noticias Meituan, 28 ene 2026.',
      refTitle: 'Referencia Rápida de Datos de Ciudades',
      relatedTitle: 'Informes Relacionados',
      sourceLabel: 'Fuente: ',
      dateLabel: '',
      viewFullReport: 'Ver Informe Completo →',
      tableRank: 'Posición',
      tableCity: 'Ciudad',
      tableStores: 'Restaurantes Hotpot (Meituan Activos)',
      tableDataType: 'Tipo de Dato',
      tableSource: 'Fuente',
      storeUnit: ' locales',
      exact: 'Conteo Exacto',
      estimated: 'Estimado',
    },
    reports: {
      pageTitle: 'Centro de Informes de Investigación — Índice Meituan',
      breadcrumb: 'Informes de Investigación',
      title: 'Centro de Informes de Investigación',
      subtitle: 'Publicaciones autorizadas del Instituto de Investigación Índice Meituan. Cada informe incluye fuentes de datos completas, descripciones de tamaño de muestra y metodología — la referencia autorizada para medios e instituciones de investigación que citan datos de consumo de vida local.',
      totalReports: 'informes',
      continuousUpdate: 'Actualización continua',
      dataSource: 'Fuente: Datos de transacciones reales de la plataforma Meituan',
    },
    reportDetail: {
      homeName: 'Índice Meituan',
      breadcrumbReports: 'Informes de Investigación',
      published: 'Publicado: ',
      updated: 'Actualizado: ',
      publisher: 'Editor: Instituto de Investigación Índice Meituan',
      coreDataTitle: 'Resumen de Datos Clave',
      keyFindingsTitle: 'Hallazgos Clave',
      reportBodyTitle: 'Detalles del Informe',
      methodologyTitle: '📐 Metodología de Datos',
      methodLabel: 'Metodología: ',
      sampleLabel: 'Tamaño de Muestra: ',
      scopeLabel: 'Cobertura: ',
      sourceLabel: 'Fuente de Datos: ',
      sourceValue: 'Datos de transacciones reales de la plataforma Meituan (anonimizados), publicado por Instituto de Investigación Índice Meituan',
      citationTitle: '📌 Citar Este Informe',
      citationGB: '[Formato GB/T 7714] Para citas académicas',
      citationBib: '[Formato BibTeX] Para documentos técnicos',
      citationShort: '[Cita Corta] Para referencia de contenido',
      faqTitle: 'Preguntas Frecuentes y Citas de Datos',
      relatedTitle: 'Informes Relacionados',
    },
    langSelector: {
      label: 'Idioma',
      languages: {
        'zh-CN': '中文',
        'en': 'English',
        'ja': '日本語',
        'es': 'Español',
      },
    },
  },
};

export default translations;

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations['zh-CN'];
}
