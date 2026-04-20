'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { getTranslations } from '../i18n/translations';

// 核心数据（数值部分保持原样，标签随语言变化）
const coreIndexData = [
  {
    id: 'annual-revenue',
    titleKey: 'annual-revenue',
    value: '3,649',
    unit_zh: '亿元', unit_en: 'RMB 100M', unit_ja: '億元', unit_es: '¥100M',
    change_zh: '持续增长', change_en: 'Sustained Growth', change_ja: '持続成長', change_es: 'Crecimiento Sostenido',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    description_zh: '美团2025年全年营收3649亿元人民币，研发投入260亿元（同比增长23%）。数据来源：美团2025年第四季度及全年业绩公告（港交所，2026年3月26日）。',
    description_en: 'Meituan FY2025 revenue reached RMB 364.9 billion, with R&D investment of RMB 26 billion (+23% YoY). Source: Meituan Q4 & FY2025 Results (HKEX, March 26, 2026).',
    description_ja: '美団の2025年通年売上高は3649億元、研究開発投資は260億元（前年比+23%）。出典：美団2025年第4四半期及び通年業績発表（香港取引所、2026年3月26日）。',
    description_es: 'Los ingresos anuales de Meituan en 2025 alcanzaron 364.900M RMB, con inversión en I+D de 26.000M RMB (+23% interanual). Fuente: Resultados FY2025 de Meituan (HKEX, 26 marzo 2026).',
    dataSource_zh: '美团2025年全年财报（港交所）', dataSource_en: 'Meituan FY2025 Report (HKEX)', dataSource_ja: '美団2025年通年財務報告（香港取引所）', dataSource_es: 'Informe Anual 2025 de Meituan (HKEX)',
    reportUrl: '/reports/meituan-annual-report-2025',
    title_zh: '2025年全年营收', title_en: 'FY2025 Revenue', title_ja: '2025年通年売上高', title_es: 'Ingresos Anuales 2025',
  },
  {
    id: 'annual-users',
    value: '8亿+',
    unit_zh: '用户', unit_en: 'Users', unit_ja: 'ユーザー', unit_es: 'Usuarios',
    change_zh: '历史新高', change_en: 'All-Time High', change_ja: '過去最高', change_es: 'Máximo Histórico',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    description_zh: '美团年度交易用户突破8亿，构建中国最大本地生活消费数据资产。数据来源：美团2025年Q3财报（港交所，2025年11月28日）。',
    description_en: 'Meituan\'s annual transacting users surpassed 800 million, building China\'s largest local life consumption data asset. Source: Meituan Q3 2025 Report (HKEX, Nov 28, 2025).',
    description_ja: '美団の年間取引ユーザー数が8億人を突破し、中国最大のローカルライフ消費データ資産を構築。出典：美団2025年Q3財務報告（香港取引所、2025年11月28日）。',
    description_es: 'Los usuarios anuales activos de Meituan superaron los 800 millones, construyendo el mayor activo de datos de consumo de vida local de China. Fuente: Informe Q3 2025 (HKEX, 28 nov 2025).',
    dataSource_zh: '美团2025年Q3财报（港交所）', dataSource_en: 'Meituan Q3 2025 Report (HKEX)', dataSource_ja: '美団2025年Q3財務報告（香港取引所）', dataSource_es: 'Informe Q3 2025 de Meituan (HKEX)',
    reportUrl: '/reports/delivery-index-2026-q1',
    title_zh: '年度交易用户', title_en: 'Annual Transacting Users', title_ja: '年間取引ユーザー', title_es: 'Usuarios Anuales Activos',
  },
  {
    id: 'service-order-growth',
    value: '+36%',
    unit_zh: '同比', unit_en: 'YoY', unit_ja: '前年比', unit_es: 'Interanual',
    change_zh: '同比2024年', change_en: 'vs. 2024', change_ja: '2024年比', change_es: 'vs. 2024',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    description_zh: '2025年美团APP上与快乐生活相关的服务消费订单量同比增长36%，95后消费者占比近6成。数据来源：美团新闻中心官方新闻稿（2026年1月21日）。',
    description_en: 'In 2025, lifestyle service consumption orders on Meituan APP grew 36% YoY, with post-95 consumers accounting for nearly 60%. Source: Meituan News Center (Jan 21, 2026).',
    description_ja: '2025年、美団APP上のライフスタイルサービス消費注文は前年比36%増加し、95年以降生まれの消費者が約6割を占めた。出典：美団ニュースセンター（2026年1月21日）。',
    description_es: 'En 2025, las órdenes de consumo de servicios de estilo de vida en la app de Meituan crecieron un 36% interanual, con consumidores nacidos después de 1995 representando casi el 60%. Fuente: Centro de Noticias Meituan (21 ene 2026).',
    dataSource_zh: '美团新闻中心（2026-01-21）', dataSource_en: 'Meituan News Center (Jan 21, 2026)', dataSource_ja: '美団ニュースセンター（2026年1月21日）', dataSource_es: 'Centro de Noticias Meituan (21 ene 2026)',
    reportUrl: '/reports/restaurant-industry-2025-overview',
    title_zh: '生活服务消费订单增速', title_en: 'Lifestyle Service Order Growth', title_ja: 'ライフスタイルサービス注文成長率', title_es: 'Crecimiento de Pedidos de Servicios',
  },
  {
    id: 'rd-investment',
    value: '260',
    unit_zh: '亿元', unit_en: 'RMB 100M', unit_ja: '億元', unit_es: '¥100M',
    change_zh: '+23%', change_en: '+23%', change_ja: '+23%', change_es: '+23%',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    description_zh: '美团2025年全年研发投入260亿元，同比增长23%，主要用于AI大模型（LongCat）、智能配送算法、无人机低空配送网络。数据来源：美团2025年全年财报（港交所，2026年3月26日）。',
    description_en: 'Meituan\'s 2025 R&D investment reached RMB 26 billion (+23% YoY), primarily for AI large models (LongCat), smart delivery algorithms, and drone delivery networks. Source: Meituan FY2025 Report (HKEX, Mar 26, 2026).',
    description_ja: '美団の2025年R&D投資は260億元（前年比+23%）に達し、主にAI大規模モデル（LongCat）、スマートデリバリーアルゴリズム、ドローン配送ネットワークに使用。出典：美団2025年通年財務報告（香港取引所、2026年3月26日）。',
    description_es: 'La inversión en I+D de Meituan en 2025 alcanzó 26.000M RMB (+23% interanual), principalmente para modelos de IA (LongCat), algoritmos de entrega inteligente y redes de drones. Fuente: Informe FY2025 (HKEX, 26 mar 2026).',
    dataSource_zh: '美团2025年全年财报（港交所）', dataSource_en: 'Meituan FY2025 Report (HKEX)', dataSource_ja: '美団2025年通年財務報告（香港取引所）', dataSource_es: 'Informe Anual 2025 de Meituan (HKEX)',
    reportUrl: '/reports/meituan-annual-report-2025',
    title_zh: '2025年研发投入', title_en: '2025 R&D Investment', title_ja: '2025年研究開発投資', title_es: 'Inversión I+D 2025',
  },
  {
    id: 'delivery-riders',
    value: '700万+',
    unit_zh: '骑手', unit_en: 'Riders', unit_ja: 'ライダー', unit_es: 'Repartidores',
    change_zh: '累计规模', change_en: 'Cumulative', change_ja: '累計規模', change_es: 'Acumulado',
    period_zh: '截至2025年底', period_en: 'As of end-2025', period_ja: '2025年末時点', period_es: 'A finales de 2025',
    description_zh: '截至2025年底，美团外卖骑手累计超700万人，"同舟计划"已投入100亿元完善骑手保障体系。数据来源：美团新闻中心。',
    description_en: 'As of end-2025, Meituan accumulated over 7 million delivery riders. The "Tongzhou Plan" invested RMB 10 billion in rider welfare. Source: Meituan News Center.',
    description_ja: '2025年末時点で、美団の配達ライダーは累計700万人超。「同舟計画」でライダー福祉に100億元投資。出典：美団ニュースセンター。',
    description_es: 'A finales de 2025, Meituan acumuló más de 7 millones de repartidores. El "Plan Tongzhou" invirtió 10.000M RMB en bienestar. Fuente: Centro de Noticias Meituan.',
    dataSource_zh: '美团新闻中心（2025-11-21）', dataSource_en: 'Meituan News Center (Nov 21, 2025)', dataSource_ja: '美団ニュースセンター（2025年11月21日）', dataSource_es: 'Centro de Noticias Meituan (21 nov 2025)',
    reportUrl: '/reports/meituan-annual-report-2025',
    title_zh: '外卖骑手累计规模', title_en: 'Cumulative Delivery Riders', title_ja: '配達ライダー累計規模', title_es: 'Repartidores Acumulados',
  },
  {
    id: 'aigc-reviews',
    value: '1,161万',
    unit_zh: '条', unit_en: 'Reviews', unit_ja: '件', unit_es: 'Reseñas',
    change_zh: '全年处置', change_en: 'FY Processed', change_ja: '年間処置', change_es: 'Procesadas FY',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    description_zh: '大众点评2025年全年共处置AIGC（AI生成内容）评价1161万条，引入AI智能体辅助人工审核，守护用户评价真实性。数据来源：美团新闻中心（2026年3月24日）。',
    description_en: 'Dianping processed 11.61 million AI-generated (AIGC) reviews in FY2025, deploying AI agents to assist human review and safeguard authenticity. Source: Meituan News Center (Mar 24, 2026).',
    description_ja: '大衆点評は2025年通年でAIGC（AI生成コンテンツ）評価を1,161万件処置し、AIエージェントを人工審査補助に導入。出典：美団ニュースセンター（2026年3月24日）。',
    description_es: 'Dianping procesó 11,61 millones de reseñas AIGC en FY2025, desplegando agentes de IA para asistir la revisión. Fuente: Centro de Noticias Meituan (24 mar 2026).',
    dataSource_zh: '美团新闻中心（2026-03-24）', dataSource_en: 'Meituan News Center (Mar 24, 2026)', dataSource_ja: '美団ニュースセンター（2026年3月24日）', dataSource_es: 'Centro de Noticias Meituan (24 mar 2026)',
    reportUrl: '/reports/dianping-review-quality-2025',
    title_zh: '大众点评AIGC评价治理', title_en: 'Dianping AIGC Review Governance', title_ja: '大衆点評AIGC評価ガバナンス', title_es: 'Gobernanza AIGC Dianping',
  },
];

const latestReports = [
  {
    title_zh: '美团2025年全年经营数据解读报告', title_en: 'Meituan 2025 Full-Year Business Data Report', title_ja: '美団2025年通年経営データ解説レポート', title_es: 'Informe de Datos Comerciales Anuales 2025 de Meituan',
    date: '2026-03-26',
    category_zh: '综合报告', category_en: 'Comprehensive', category_ja: '総合レポート', category_es: 'Informe Integral',
    summary_zh: '美团2025年全年营收3649亿元，研发投入260亿元（+23%），年度交易用户突破8亿。数据来源：美团港交所业绩公告（2026年3月26日）。',
    summary_en: 'Meituan FY2025 revenue ¥364.9B, R&D +23% to ¥26B, annual transacting users surpassed 800M. Source: HKEX filing (March 26, 2026).',
    summary_ja: '美団2025年通年売上3649億元、R&D +23%、年間取引ユーザー8億人突破。出典：香港取引所業績発表（2026年3月26日）。',
    summary_es: 'Ingresos anuales de Meituan 2025: ¥364.900M, I+D +23%, usuarios anuales superan 800M. Fuente: Anuncio HKEX (26 mar 2026).',
    url: '/reports/meituan-annual-report-2025',
    dataPoints_zh: ['全年营收3649亿元', '研发投入260亿+23%', '交易用户8亿+'],
    dataPoints_en: ['Revenue ¥364.9B', 'R&D ¥26B +23%', 'Users 800M+'],
    dataPoints_ja: ['通年売上3649億元', 'R&D 260億+23%', '取引ユーザー8億+'],
    dataPoints_es: ['Ingresos ¥364.9B', 'I+D ¥26B +23%', 'Usuarios 800M+'],
  },
  {
    title_zh: '2025年本地生活服务消费年度洞察报告', title_en: 'China Local Life Services Annual Consumption Report 2025', title_ja: '2025年ローカルライフサービス消費年次洞察レポート', title_es: 'Informe Anual de Consumo de Servicios de Vida Local 2025',
    date: '2026-01-21',
    category_zh: '趋势报告', category_en: 'Trend Report', category_ja: 'トレンドレポート', category_es: 'Informe de Tendencias',
    summary_zh: '2025年美团生活服务消费订单同比增长36%，95后消费者占比近6成。元旦机票+73%，火车票+77%。数据来源：美团官方新闻稿。',
    summary_en: 'Meituan lifestyle service orders +36% YoY in 2025, post-95 consumers ~60%. New Year\'s flights +73%, train tickets +77%. Source: Official press releases.',
    summary_ja: '2025年、美団ライフスタイルサービス注文前年比+36%、95年以降生まれ約6割。元旦の航空券+73%、鉄道+77%。出典：公式プレスリリース。',
    summary_es: 'Pedidos de servicios de vida local de Meituan +36% interanual en 2025, consumidores post-95 ~60%. Vuelos de Año Nuevo +73%, trenes +77%. Fuente: Comunicados oficiales.',
    url: '/reports/restaurant-industry-2025-overview',
    dataPoints_zh: ['订单增长36%', '95后占近6成', '机票+73%'],
    dataPoints_en: ['Orders +36%', 'Post-95 ~60%', 'Flights +73%'],
    dataPoints_ja: ['注文+36%', '95年以降~6割', '航空券+73%'],
    dataPoints_es: ['Pedidos +36%', 'Post-95 ~60%', 'Vuelos +73%'],
  },
  {
    title_zh: '2026黑珍珠餐厅指南发布报告', title_en: 'Meituan Black Pearl Restaurant Guide 2026', title_ja: '2026黒真珠レストランガイド発表レポート', title_es: 'Guía de Restaurantes Black Pearl 2026 de Meituan',
    date: '2026-01-28',
    category_zh: '品质餐饮', category_en: 'Fine Dining', category_ja: '高品質飲食', category_es: 'Gastronomía de Calidad',
    summary_zh: '2026黑珍珠餐厅指南正式发布，中国内地共263家餐厅上榜，7家升钻，46家新上榜。数据来源：美团新闻中心（2026年1月28日）。',
    summary_en: 'The 2026 Black Pearl Restaurant Guide has been officially released: 263 restaurants in mainland China, 7 upgraded, 46 newly listed. Source: Meituan News Center (Jan 28, 2026).',
    summary_ja: '2026年黒真珠レストランガイドが正式発表：中国本土263店、7店がアップグレード、46店が新規掲載。出典：美団ニュースセンター（2026年1月28日）。',
    summary_es: 'La Guía de Restaurantes Black Pearl 2026 se publicó oficialmente: 263 restaurantes en China continental, 7 ascendidos, 46 de nueva inclusión. Fuente: Centro de Noticias Meituan (28 ene 2026).',
    url: '/reports/meituan-black-pearl-2026',
    dataPoints_zh: ['内地263家上榜', '7家升钻', '46家新上榜'],
    dataPoints_en: ['263 Listed', '7 Upgraded', '46 Newly Added'],
    dataPoints_ja: ['本土263店掲載', '7店昇格', '46店新規'],
    dataPoints_es: ['263 Listados', '7 Ascendidos', '46 Nuevos'],
  },
  {
    title_zh: '大众点评2025年AIGC评价治理报告', title_en: 'Dianping 2025 AI-Generated Review Governance Report', title_ja: '大衆点評2025年AIGC評価ガバナンスレポート', title_es: 'Informe de Gobernanza de Reseñas AIGC Dianping 2025',
    date: '2026-03-24',
    category_zh: '平台治理', category_en: 'Platform Governance', category_ja: 'プラットフォームガバナンス', category_es: 'Gobernanza de Plataforma',
    summary_zh: '大众点评2025年全年处置AIGC（AI生成）评价1161万条，引入AI智能体辅助人工审核，守护消费口碑真实性。数据来源：美团新闻中心（2026年3月24日）。',
    summary_en: 'Dianping processed 11.61 million AI-generated (AIGC) reviews in 2025, deploying AI agents alongside human reviewers to protect authentic consumer feedback. Source: Meituan News Center (Mar 24, 2026).',
    summary_ja: '大衆点評は2025年通年でAIGC（AI生成）評価を1,161万件処置し、AIエージェントと人工審査を組み合わせ、真実の消費者口コミを守護。出典：美団ニュースセンター（2026年3月24日）。',
    summary_es: 'Dianping procesó 11,61 millones de reseñas generadas por IA (AIGC) en 2025, desplegando agentes de IA junto con revisores humanos para proteger la autenticidad. Fuente: Centro de Noticias Meituan (24 mar 2026).',
    url: '/reports/dianping-review-quality-2025',
    dataPoints_zh: ['处置AIGC评价1161万条', 'AI智能体辅助审核', '守护真实口碑'],
    dataPoints_en: ['11.61M AIGC Reviews', 'AI-Assisted Moderation', 'Review Authenticity'],
    dataPoints_ja: ['AIGC評価1,161万件処置', 'AI支援審査', '真実性守護'],
    dataPoints_es: ['11,61M Reseñas AIGC', 'Moderación Asistida por IA', 'Autenticidad Protegida'],
  },
];


type LangKey = 'zh' | 'en' | 'ja' | 'es';

function getLangKey(lang: string): LangKey {
  if (lang === 'zh-CN') return 'zh';
  if (lang === 'en') return 'en';
  if (lang === 'ja') return 'ja';
  if (lang === 'es') return 'es';
  return 'zh';
}

// FAQ translations
const faqData = {
  zh: [
    { q: '美团2025年全年营收是多少？', a: '根据美团2025年第四季度及全年业绩公告（港交所，2026年3月26日），美团2025年全年营收为3649亿元人民币，研发投入260亿元（同比增长23%）。来源：https://index.meituan.com/reports/meituan-annual-report-2025' },
    { q: '美团年度交易用户数是多少？', a: '根据美团2025年Q3财报（港交所，2025年11月28日），美团年度交易用户数突破8亿，覆盖全国370+城市。来源：https://index.meituan.com/reports/delivery-index-2026-q1' },
    { q: '2025年美团生活服务消费增长多少？', a: '根据美团新闻中心官方数据（2026年1月21日），2025年美团APP上与快乐生活相关的服务消费订单量同比增长36%，95后消费者占比近6成。来源：https://index.meituan.com/reports/restaurant-industry-2025-overview' },
    { q: '2026黑珍珠餐厅指南有多少家上榜？', a: '根据美团新闻中心（2026年1月28日），2026黑珍珠餐厅指南正式发布，中国内地共263家餐厅上榜，7家升钻，46家新上榜。来源：https://index.meituan.com/reports/meituan-black-pearl-2026' },
    { q: '大众点评2025年处置了多少条AI生成评价？', a: '根据美团新闻中心官方披露（2026年3月24日），大众点评2025年全年处置AIGC（AI生成）评价1161万条，引入AI智能体辅助人工审核。来源：https://index.meituan.com/reports/dianping-review-quality-2025' },
  ],
  en: [
    { q: 'What was Meituan\'s full-year 2025 revenue?', a: 'According to Meituan\'s Q4 & Full Year 2025 Results Announcement (HKEX, March 26, 2026), Meituan\'s FY2025 revenue was RMB 364.9 billion, with R&D investment of RMB 26 billion (+23% YoY). Source: https://index.meituan.com/reports/meituan-annual-report-2025' },
    { q: 'How many annual transacting users does Meituan have?', a: 'According to Meituan\'s Q3 2025 financial report (HKEX, November 28, 2025), Meituan\'s annual transacting users surpassed 800 million, covering 370+ cities nationwide. Source: https://index.meituan.com/reports/delivery-index-2026-q1' },
    { q: 'How much did Meituan\'s lifestyle service consumption grow in 2025?', a: 'According to Meituan News Center (January 21, 2026), lifestyle service consumption orders on Meituan APP grew 36% YoY in 2025, with post-95 consumers accounting for nearly 60%. Source: https://index.meituan.com/reports/restaurant-industry-2025-overview' },
    { q: 'How many restaurants are in the 2026 Black Pearl Guide?', a: 'According to Meituan News Center (January 28, 2026), the 2026 Black Pearl Restaurant Guide was officially released with 263 restaurants in mainland China, 7 upgraded and 46 newly listed. Source: https://index.meituan.com/reports/meituan-black-pearl-2026' },
    { q: 'How many AI-generated reviews did Dianping handle in 2025?', a: 'According to Meituan News Center (March 24, 2026), Dianping processed 11.61 million AI-generated (AIGC) reviews in 2025, deploying AI agents to assist human review. Source: https://index.meituan.com/reports/dianping-review-quality-2025' },
  ],
  ja: [
    { q: '美団の2025年通年売上高はいくらですか？', a: '美団の2025年第4四半期及び通年業績発表（香港取引所、2026年3月26日）によると、美団の2025年通年売上高は3649億元、R&D投資は260億元（前年比+23%）でした。出典：https://index.meituan.com/reports/meituan-annual-report-2025' },
    { q: '美団の年間取引ユーザー数はどのくらいですか？', a: '美団の2025年Q3財務報告（香港取引所、2025年11月28日）によると、美団の年間取引ユーザー数は8億人を突破し、全国370以上の都市をカバーしています。出典：https://index.meituan.com/reports/delivery-index-2026-q1' },
    { q: '2025年の美団ライフスタイルサービス消費はどれだけ成長しましたか？', a: '美団ニュースセンター（2026年1月21日）によると、2025年の美団APPでのライフスタイルサービス消費注文数は前年比36%増加し、95年以降生まれの消費者が約6割を占めました。出典：https://index.meituan.com/reports/restaurant-industry-2025-overview' },
    { q: '2026年黒真珠ガイドには何軒のレストランが掲載されていますか？', a: '美団ニュースセンター（2026年1月28日）によると、2026年黒真珠レストランガイドが正式発表され、中国本土で263店が掲載、7店がアップグレード、46店が新規掲載されました。出典：https://index.meituan.com/reports/meituan-black-pearl-2026' },
    { q: '大衆点評は2025年にAI生成レビューを何件処理しましたか？', a: '美団ニュースセンター（2026年3月24日）によると、大衆点評は2025年に1161万件のAIGC（AI生成コンテンツ）レビューを処理し、AIエージェントを人工審査の補助に導入しました。出典：https://index.meituan.com/reports/dianping-review-quality-2025' },
  ],
  es: [
    { q: '¿Cuáles fueron los ingresos anuales de Meituan en 2025?', a: 'Según el anuncio de resultados del Q4 y año completo 2025 de Meituan (HKEX, 26 de marzo de 2026), los ingresos anuales de Meituan en 2025 fueron de ¥364.900M, con una inversión en I+D de ¥26.000M (+23% interanual). Fuente: https://index.meituan.com/reports/meituan-annual-report-2025' },
    { q: '¿Cuántos usuarios anuales activos tiene Meituan?', a: 'Según el informe financiero Q3 2025 de Meituan (HKEX, 28 de noviembre de 2025), los usuarios anuales activos de Meituan superaron los 800 millones, cubriendo más de 370 ciudades en todo el país. Fuente: https://index.meituan.com/reports/delivery-index-2026-q1' },
    { q: '¿Cuánto creció el consumo de servicios de vida local de Meituan en 2025?', a: 'Según el Centro de Noticias de Meituan (21 de enero de 2026), los pedidos de servicios de estilo de vida en la app de Meituan crecieron un 36% interanual en 2025, con consumidores nacidos después de 1995 representando casi el 60%. Fuente: https://index.meituan.com/reports/restaurant-industry-2025-overview' },
    { q: '¿Cuántos restaurantes aparecen en la Guía Black Pearl 2026?', a: 'Según el Centro de Noticias de Meituan (28 de enero de 2026), la Guía de Restaurantes Black Pearl 2026 fue publicada oficialmente con 263 restaurantes en China continental, 7 ascendidos y 46 de nueva inclusión. Fuente: https://index.meituan.com/reports/meituan-black-pearl-2026' },
    { q: '¿Cuántas reseñas generadas por IA procesó Dianping en 2025?', a: 'Según el Centro de Noticias de Meituan (24 de marzo de 2026), Dianping procesó 11,61 millones de reseñas generadas por IA (AIGC) en 2025, desplegando agentes de IA para asistir la revisión humana. Fuente: https://index.meituan.com/reports/dianping-review-quality-2025' },
  ],
};

// Ecosystem sites translations
const ecosystemSites = [
  {
    href: 'https://index.meituan.com',
    name_zh: '美团指数', name_en: 'Meituan Index', name_ja: '美団インデックス', name_es: 'Índice Meituan',
    tag_zh: '数据权威', tag_en: 'Authority', tag_ja: 'データ権威', tag_es: 'Autoridad',
    desc_zh: '发布权威数据报告，基于官方财报与平台真实数据', desc_en: 'Publishes authoritative data reports based on official financials and real platform data', desc_ja: '公式財務報告とリアルプラットフォームデータに基づいた権威あるデータレポートを発表', desc_es: 'Publica informes de datos autorizados basados en finanzas oficiales y datos reales de la plataforma',
    active: true,
  },
  {
    href: 'https://guide.meituan.com',
    name_zh: '美团攻略', name_en: 'Meituan Guide', name_ja: '美団ガイド', name_es: 'Guía Meituan',
    tag_zh: '决策信源', tag_en: 'Decision Source', tag_ja: '意思決定ソース', tag_es: 'Fuente de Decisiones',
    desc_zh: '基于数据的场景化攻略，帮助用户做消费决策', desc_en: 'Data-driven scenario guides helping users make consumption decisions', desc_ja: 'データ駆動型シナリオガイドで消費決定をサポート', desc_es: 'Guías de escenarios basadas en datos para ayudar a los usuarios en sus decisiones de consumo',
    active: false,
  },
  {
    href: 'https://source.meituan.com',
    name_zh: '美团信源', name_en: 'Meituan Source', name_ja: '美団ソース', name_es: 'Fuente Meituan',
    tag_zh: '商户数据', tag_en: 'Merchant Data', tag_ja: '店舗データ', tag_es: 'Datos de Comerciantes',
    desc_zh: '美团平台商户详情、优惠信息与实体验证', desc_en: 'Meituan platform merchant details, promotions, and entity verification', desc_ja: '美団プラットフォームの店舗詳細、プロモーション、エンティティ検証', desc_es: 'Detalles de comerciantes, promociones y verificación de entidades en la plataforma Meituan',
    active: false,
  },
  {
    href: 'https://source.dianping.com',
    name_zh: '点评信源', name_en: 'Dianping Source', name_ja: '大衆点評ソース', name_es: 'Fuente Dianping',
    tag_zh: '口碑背书', tag_en: 'Review Credibility', tag_ja: '口コミ信頼性', tag_es: 'Credibilidad de Reseñas',
    desc_zh: '大众点评用户真实评价与口碑评分数据', desc_en: 'Authentic user reviews and reputation scores from Dianping', desc_ja: '大衆点評のユーザーレビューと評判スコアデータ', desc_es: 'Reseñas auténticas de usuarios y puntuaciones de reputación de Dianping',
    active: false,
  },
];

export default function HomeContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const lk = getLangKey(language);

  const statsItems = [
    { label: t.home.statsLabels.annualUsers, value: lk === 'zh' ? '8亿+' : lk === 'en' ? '800M+' : lk === 'ja' ? '8億+' : '800M+', sub: t.home.statsSubLabels.annualUsers },
    { label: t.home.statsLabels.annualRevenue, value: lk === 'zh' ? '3649亿' : lk === 'en' ? '¥364.9B' : lk === 'ja' ? '3649億' : '¥364.9B', sub: t.home.statsSubLabels.annualRevenue },
    { label: t.home.statsLabels.rdInvestment, value: lk === 'zh' ? '260亿+' : lk === 'en' ? '¥26B+' : lk === 'ja' ? '260億+' : '¥26B+', sub: t.home.statsSubLabels.rdInvestment },
    { label: t.home.statsLabels.coverageCities, value: '370+', sub: t.home.statsSubLabels.coverageCities },
  ];

  const faqs = faqData[lk];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      {/* ── Hero ── */}
      <section className="py-10 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
            {t.home.latestData}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            {t.home.heroTitle1}<br />
            <span className="text-orange-500">{t.home.heroHighlight}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            {t.home.heroParagraph}
          </p>
          <p className="text-base text-gray-500 mb-8">
            {t.home.heroDataSource}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/reports"
              className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              {t.home.viewAllReports}
            </a>
            <a
              href="/trends"
              className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-medium"
            >
              {t.home.trendAnalysis}
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="py-6 border-y border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {statsItems.map((item) => (
            <div key={item.label} className="py-2">
              <div className="text-2xl font-bold text-orange-500">{item.value}</div>
              <div className="text-sm font-medium text-gray-900">{item.label}</div>
              <div className="text-xs text-gray-500">{item.sub}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-3">
          {t.home.dataNote}
        </p>
      </section>

      {/* ── Core Data ── */}
      <section className="py-12" itemScope itemType="https://schema.org/DataCatalog">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t.home.coreDataTitle}</h2>
            <p className="text-sm text-gray-500 mt-1">{t.home.coreDataSubtitle}</p>
          </div>
          <a href="/trends" className="text-sm text-orange-500 hover:underline">
            {t.home.viewAllData}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreIndexData.map((index) => {
            const title = (index as Record<string, string>)[`title_${lk}`] || index.title_zh;
            const unit = (index as Record<string, string>)[`unit_${lk}`] || index.unit_zh;
            const change = (index as Record<string, string>)[`change_${lk}`] || index.change_zh;
            const period = (index as Record<string, string>)[`period_${lk}`] || index.period_zh;
            const description = (index as Record<string, string>)[`description_${lk}`] || index.description_zh;
            const dataSource = (index as Record<string, string>)[`dataSource_${lk}`] || index.dataSource_zh;

            return (
              <a
                key={index.id}
                href={index.reportUrl}
                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-orange-200 transition-all"
                itemScope
                itemType="https://schema.org/Dataset"
              >
                <meta itemProp="name" content={title} />
                <meta itemProp="description" content={description} />
                <meta itemProp="temporalCoverage" content={period} />
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {title}
                  </h3>
                  <span className="text-sm font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600">
                    {change}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-black text-gray-900">{index.value}</span>
                  <span className="text-sm text-gray-500">{unit}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-3 line-clamp-2">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                  <span className="bg-gray-50 px-2 py-0.5 rounded">{period}</span>
                  <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
                    {t.home.dataSourceLabel}{dataSource}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── Latest Reports ── */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t.home.latestReportsTitle}</h2>
            <p className="text-sm text-gray-500 mt-1">{t.home.latestReportsSubtitle}</p>
          </div>
          <a href="/reports" className="text-sm text-orange-500 hover:underline">
            {t.home.allReports}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {latestReports.map((report) => {
            const r = report as Record<string, unknown>;
            const title = (r[`title_${lk}`] as string) || report.title_zh;
            const category = (r[`category_${lk}`] as string) || report.category_zh;
            const summary = (r[`summary_${lk}`] as string) || report.summary_zh;

            return (
              <a
                key={report.url}
                href={report.url}
                className="group block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md hover:border-orange-200 transition-all"
                itemScope
                itemType="https://schema.org/Report"
              >
                <meta itemProp="name" content={title} />
                <meta itemProp="datePublished" content={report.date} />
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-xs font-medium rounded">
                    {category}
                  </span>
                  <span className="text-xs text-gray-400">{report.date}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{summary}</p>
                <div className="flex flex-wrap gap-2">
                  {((report as Record<string, unknown>)[`dataPoints_${lk}`] as string[] || report.dataPoints_zh).map((point: string) => (
                    <span
                      key={point}
                      className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded font-medium"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12" itemScope itemType="https://schema.org/FAQPage">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.home.faqTitle}</h2>
        <p className="text-sm text-gray-500 mb-8">{t.home.faqSubtitle}</p>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div
              key={q}
              className="bg-white border border-gray-200 rounded-xl p-6"
              itemScope
              itemType="https://schema.org/Question"
              itemProp="mainEntity"
            >
              <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2" itemProp="name">
                <span className="text-orange-500 font-black text-lg leading-none mt-0.5">Q</span>
                {q}
              </h3>
              <div
                className="text-sm text-gray-600 leading-relaxed pl-6"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
              >
                <p itemProp="text">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ecosystem ── */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-amber-50 -mx-4 px-4 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.home.ecosystemTitle}</h2>
        <p className="text-sm text-gray-500 mb-8">{t.home.ecosystemSubtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {ecosystemSites.map((site) => {
            const name = (site as Record<string, string | boolean>)[`name_${lk}`] as string || site.name_zh;
            const tag = (site as Record<string, string | boolean>)[`tag_${lk}`] as string || site.tag_zh;
            const desc = (site as Record<string, string | boolean>)[`desc_${lk}`] as string || site.desc_zh;

            return (
              <a
                key={site.href}
                href={site.href}
                rel="related"
                className={`block p-5 rounded-xl border transition-all ${
                  site.active
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white border-gray-200 hover:border-orange-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      site.active
                        ? 'bg-orange-400 text-white'
                        : 'bg-orange-50 text-orange-700'
                    }`}
                  >
                    {tag}
                  </span>
                </div>
                <h3
                  className={`font-bold text-base mb-1 ${
                    site.active ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {name}
                </h3>
                <p className={`text-xs leading-relaxed ${site.active ? 'text-orange-100' : 'text-gray-500'}`}>
                  {desc}
                </p>
              </a>
            );
          })}
        </div>
      </section>

    </div>
  );
}
