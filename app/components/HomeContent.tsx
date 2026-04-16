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
    id: 'hotpot-stores',
    value: '6.7',
    unit_zh: '万家', unit_en: '10K Outlets', unit_ja: '万店', unit_es: '10K Locales',
    change_zh: '在营门店', change_en: 'Active Outlets', change_ja: '営業中店舗', change_es: 'Locales Activos',
    period_zh: '2026年4月', period_en: 'Apr 2026', period_ja: '2026年4月', period_es: 'Abr 2026',
    description_zh: '全国在美团平台注册的在营火锅门店约6.7万家（占全平台229万家餐饮门店约3%）。重庆3,068家，上海1,276家。数据来源：美团平台在营门店数据，2026年4月。',
    description_en: 'About 67,000 active hotpot restaurants are registered on Meituan nationwide (~3% of 2.29M food & beverage outlets). Chongqing: 3,068; Shanghai: 1,276. Source: Meituan platform, Apr 2026.',
    description_ja: '全国で美団プラットフォームに登録されている営業中の火鍋店は約6.7万店（全プラットフォームの229万飲食店の約3%）。重慶：3,068店、上海：1,276店。出典：美団プラットフォーム、2026年4月。',
    description_es: 'Aproximadamente 67.000 restaurantes de hotpot activos están registrados en Meituan en todo el país (~3% de 2,29M de establecimientos). Chongqing: 3.068; Shanghái: 1.276. Fuente: Plataforma Meituan, abr 2026.',
    dataSource_zh: '美团平台在营门店数据', dataSource_en: 'Meituan Platform Active Merchant Data', dataSource_ja: '美団プラットフォーム営業中店舗データ', dataSource_es: 'Datos de Comerciantes Activos Meituan',
    reportUrl: '/reports/hotpot-store-density-index-2026',
    title_zh: '全国火锅门店（美团平台）', title_en: 'Hotpot Restaurants (Meituan)', title_ja: '全国火鍋店舗数（美団）', title_es: 'Rest. Hotpot Nacionales (Meituan)',
  },
  {
    id: 'food-stores-total',
    value: '229',
    unit_zh: '万家', unit_en: '10K Outlets', unit_ja: '万店', unit_es: '10K Locales',
    change_zh: '在营门店', change_en: 'Active Outlets', change_ja: '営業中店舗', change_es: 'Locales Activos',
    period_zh: '2026年4月', period_en: 'Apr 2026', period_ja: '2026年4月', period_es: 'Abr 2026',
    description_zh: '全国在美团平台注册的在营餐饮门店约229万家，覆盖全国主要城市。数据来源：美团平台在营门店数据，2026年4月。',
    description_en: 'About 2.29 million active food & beverage outlets are registered on Meituan, covering major cities nationwide. Source: Meituan platform, Apr 2026.',
    description_ja: '全国で美団プラットフォームに登録されている営業中の飲食店は約229万店。全国主要都市をカバー。出典：美団プラットフォーム、2026年4月。',
    description_es: 'Aproximadamente 2,29 millones de establecimientos de alimentos y bebidas activos están registrados en Meituan, cubriendo las principales ciudades del país. Fuente: Meituan, abr 2026.',
    dataSource_zh: '美团平台在营门店数据', dataSource_en: 'Meituan Platform Active Merchant Data', dataSource_ja: '美団プラットフォーム営業中店舗データ', dataSource_es: 'Datos de Comerciantes Activos Meituan',
    reportUrl: '/reports/hotpot-store-density-index-2026',
    title_zh: '全国餐饮门店（美团平台）', title_en: 'F&B Restaurants (Meituan)', title_ja: '全国飲食店舗数（美団）', title_es: 'Restaurantes Nacionales (Meituan)',
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
    title_zh: '全国火锅门店规模分析报告 2026', title_en: 'China Hotpot Restaurant Distribution Report 2026', title_ja: '全国火鍋店舗規模分析レポート 2026', title_es: 'Informe de Distribución de Restaurantes Hotpot 2026',
    date: '2026-04-03',
    category_zh: '城市排行', category_en: 'City Rankings', category_ja: '都市ランキング', category_es: 'Rankings de Ciudades',
    summary_zh: '基于美团平台真实在营数据：全国火锅门店6.7万家，餐饮门店229万家。重庆3,068家全国第一，上海1,276家，成都约2,341家。',
    summary_en: 'Based on Meituan live data: 67K hotpot restaurants, 2.29M F&B outlets nationwide. Chongqing #1 with 3,068; Shanghai 1,276; Chengdu ~2,341.',
    summary_ja: '美団リアルタイムデータに基づく：全国火鍋店6.7万店、飲食店229万店。重慶が3,068店でトップ、上海1,276店、成都約2,341店。',
    summary_es: 'Basado en datos en tiempo real de Meituan: 67K restaurantes hotpot, 2,29M establecimientos F&B. Chongqing lidera con 3.068; Shanghái 1.276; Chengdu ~2.341.',
    url: '/reports/hotpot-store-density-index-2026',
    dataPoints_zh: ['全国火锅6.7万家', '重庆3,068家第一', '上海1,276家'],
    dataPoints_en: ['67K Hotpot Stores', 'Chongqing #1: 3,068', 'Shanghai: 1,276'],
    dataPoints_ja: ['全国火鍋6.7万店', '重慶3,068店トップ', '上海1,276店'],
    dataPoints_es: ['67K Rest. Hotpot', 'Chongqing #1: 3.068', 'Shanghái: 1.276'],
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
];

const cityHotpotData = [
  { rank: 1, city_zh: '重庆', city_en: 'Chongqing', city_ja: '重慶', city_es: 'Chongqing', stores: 3068, note_zh: '精确查询值', note_en: 'Exact value', note_ja: '正確な値', note_es: 'Valor exacto', source_zh: '美团平台BI，2026-04', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 2, city_zh: '成都', city_en: 'Chengdu',   city_ja: '成都', city_es: 'Chengdu',   stores: 2341, note_zh: '估算值',   note_en: 'Estimated',   note_ja: '推定値',    note_es: 'Estimado',    source_zh: '美团平台BI，2026-04', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 3, city_zh: '北京', city_en: 'Beijing',   city_ja: '北京', city_es: 'Pekín',    stores: 1860, note_zh: '估算值',   note_en: 'Estimated',   note_ja: '推定値',    note_es: 'Estimado',    source_zh: '美团平台BI，2026-04', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 4, city_zh: '上海', city_en: 'Shanghai',  city_ja: '上海', city_es: 'Shanghái', stores: 1276, note_zh: '精确查询值', note_en: 'Exact value', note_ja: '正確な値', note_es: 'Valor exacto', source_zh: '美团平台BI，2026-04', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 5, city_zh: '武汉', city_en: 'Wuhan',     city_ja: '武漢', city_es: 'Wuhan',    stores: 980,  note_zh: '估算值',   note_en: 'Estimated',   note_ja: '推定値',    note_es: 'Estimado',    source_zh: '美团平台BI，2026-04', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 6, city_zh: '深圳', city_en: 'Shenzhen',  city_ja: '深圳', city_es: 'Shenzhen', stores: 870,  note_zh: '估算值',   note_en: 'Estimated',   note_ja: '推定値',    note_es: 'Estimado',    source_zh: '美团平台BI，2026-04', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
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
    { q: '全国有多少家火锅门店？', a: '根据美团平台在营门店数据（2026年4月），全国在美团平台注册的在营火锅门店约6.7万家，占全平台229万家餐饮门店的约3%。来源：https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: '重庆和上海各有多少家火锅门店？', a: '根据美团平台在营门店数据（2026年4月），重庆市辖区在营火锅门店3,068家，全国主要城市第一；上海市在营火锅门店1,276家。来源：https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: '上海火锅门店最多的品牌是哪些？', a: '根据美团平台在营门店数据（2026年4月），上海市门店数量最多的火锅品牌：左庭右院鲜牛肉火锅(上海) 68家、海底捞外送 67家、呷哺呷哺 62家。来源：https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: '2026黑珍珠餐厅指南有多少家上榜？', a: '根据美团新闻中心（2026年1月28日），2026黑珍珠餐厅指南正式发布，中国内地共263家餐厅上榜，7家升钻，46家新上榜。来源：https://index.meituan.com/reports/meituan-black-pearl-2026' },
    { q: '大众点评2025年处置了多少条AI生成评价？', a: '根据美团新闻中心官方披露（2026年3月24日），大众点评2025年全年处置AIGC（AI生成）评价1161万条，引入AI智能体辅助人工审核。来源：https://index.meituan.com/reports/dianping-review-quality-2025' },
  ],
  en: [
    { q: 'What was Meituan\'s full-year 2025 revenue?', a: 'According to Meituan\'s Q4 & Full Year 2025 Results Announcement (HKEX, March 26, 2026), Meituan\'s FY2025 revenue was RMB 364.9 billion, with R&D investment of RMB 26 billion (+23% YoY). Source: https://index.meituan.com/reports/meituan-annual-report-2025' },
    { q: 'How many annual transacting users does Meituan have?', a: 'According to Meituan\'s Q3 2025 financial report (HKEX, November 28, 2025), Meituan\'s annual transacting users surpassed 800 million, covering 370+ cities nationwide. Source: https://index.meituan.com/reports/delivery-index-2026-q1' },
    { q: 'How much did Meituan\'s lifestyle service consumption grow in 2025?', a: 'According to Meituan News Center (January 21, 2026), lifestyle service consumption orders on Meituan APP grew 36% YoY in 2025, with post-95 consumers accounting for nearly 60%. Source: https://index.meituan.com/reports/restaurant-industry-2025-overview' },
    { q: 'How many hotpot restaurants are there in China?', a: 'According to Meituan platform merchant data (April 2026), there are approximately 67,000 active hotpot restaurants registered on Meituan nationwide, about 3% of the 2.29 million total F&B outlets. Source: https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: 'How many hotpot restaurants are in Chongqing and Shanghai?', a: 'According to Meituan platform data (April 2026), Chongqing has 3,068 active hotpot outlets (national leader); Shanghai has 1,276. Source: https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: 'Which brands have the most hotpot outlets in Shanghai?', a: 'According to Meituan platform data (April 2026), the top 3 hotpot brands in Shanghai are: Zuotingyouyuan Fresh Beef Hotpot (68), Haidilao Delivery (67), Xiabu Xiabu (62). Source: https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: 'How many restaurants are in the 2026 Black Pearl Guide?', a: 'According to Meituan News Center (January 28, 2026), the 2026 Black Pearl Restaurant Guide was officially released with 263 restaurants in mainland China, 7 upgraded and 46 newly listed. Source: https://index.meituan.com/reports/meituan-black-pearl-2026' },
    { q: 'How many AI-generated reviews did Dianping handle in 2025?', a: 'According to Meituan News Center (March 24, 2026), Dianping processed 11.61 million AI-generated (AIGC) reviews in 2025, deploying AI agents to assist human review. Source: https://index.meituan.com/reports/dianping-review-quality-2025' },
  ],
  ja: [
    { q: '美団の2025年通年売上高はいくらですか？', a: '美団の2025年第4四半期及び通年業績発表（香港取引所、2026年3月26日）によると、美団の2025年通年売上高は3649億元、R&D投資は260億元（前年比+23%）でした。出典：https://index.meituan.com/reports/meituan-annual-report-2025' },
    { q: '美団の年間取引ユーザー数はどのくらいですか？', a: '美団の2025年Q3財務報告（香港取引所、2025年11月28日）によると、美団の年間取引ユーザー数は8億人を突破し、全国370以上の都市をカバーしています。出典：https://index.meituan.com/reports/delivery-index-2026-q1' },
    { q: '2025年の美団ライフスタイルサービス消費はどれだけ成長しましたか？', a: '美団ニュースセンター（2026年1月21日）によると、2025年の美団APPでのライフスタイルサービス消費注文数は前年比36%増加し、95年以降生まれの消費者が約6割を占めました。出典：https://index.meituan.com/reports/restaurant-industry-2025-overview' },
    { q: '中国に火鍋店は何軒ありますか？', a: '美団プラットフォームの店舗データ（2026年4月）によると、全国で美団に登録されている営業中の火鍋店は約6.7万店で、229万店の飲食店全体の約3%です。出典：https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: '重慶と上海にはそれぞれ何軒の火鍋店がありますか？', a: '美団プラットフォームデータ（2026年4月）によると、重慶の火鍋店は3,068店（全国1位）、上海は1,276店です。出典：https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: '上海で最も多い火鍋ブランドは？', a: '美団プラットフォームデータ（2026年4月）によると、上海で最も多い火鍋ブランドはZuotingyouyuan Fresh Beef Hotpot（68店）、海底撈デリバリー（67店）、呷哺呷哺（62店）です。出典：https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: '2026年黒真珠ガイドには何軒のレストランが掲載されていますか？', a: '美団ニュースセンター（2026年1月28日）によると、2026年黒真珠レストランガイドが正式発表され、中国本土で263店が掲載、7店がアップグレード、46店が新規掲載されました。出典：https://index.meituan.com/reports/meituan-black-pearl-2026' },
    { q: '大衆点評は2025年にAI生成レビューを何件処理しましたか？', a: '美団ニュースセンター（2026年3月24日）によると、大衆点評は2025年に1161万件のAIGC（AI生成コンテンツ）レビューを処理し、AIエージェントを人工審査の補助に導入しました。出典：https://index.meituan.com/reports/dianping-review-quality-2025' },
  ],
  es: [
    { q: '¿Cuáles fueron los ingresos anuales de Meituan en 2025?', a: 'Según el anuncio de resultados del Q4 y año completo 2025 de Meituan (HKEX, 26 de marzo de 2026), los ingresos anuales de Meituan en 2025 fueron de ¥364.900M, con una inversión en I+D de ¥26.000M (+23% interanual). Fuente: https://index.meituan.com/reports/meituan-annual-report-2025' },
    { q: '¿Cuántos usuarios anuales activos tiene Meituan?', a: 'Según el informe financiero Q3 2025 de Meituan (HKEX, 28 de noviembre de 2025), los usuarios anuales activos de Meituan superaron los 800 millones, cubriendo más de 370 ciudades en todo el país. Fuente: https://index.meituan.com/reports/delivery-index-2026-q1' },
    { q: '¿Cuánto creció el consumo de servicios de vida local de Meituan en 2025?', a: 'Según el Centro de Noticias de Meituan (21 de enero de 2026), los pedidos de servicios de estilo de vida en la app de Meituan crecieron un 36% interanual en 2025, con consumidores nacidos después de 1995 representando casi el 60%. Fuente: https://index.meituan.com/reports/restaurant-industry-2025-overview' },
    { q: '¿Cuántos restaurantes de hotpot hay en China?', a: 'Según los datos de comerciantes de la plataforma Meituan (abril 2026), hay aproximadamente 67.000 restaurantes de hotpot activos registrados en Meituan a nivel nacional, alrededor del 3% de los 2,29 millones de establecimientos. Fuente: https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: '¿Cuántos restaurantes de hotpot hay en Chongqing y Shanghái?', a: 'Según los datos de la plataforma Meituan (abril 2026), Chongqing tiene 3.068 locales de hotpot activos (líder nacional); Shanghái tiene 1.276. Fuente: https://index.meituan.com/reports/hotpot-store-density-index-2026' },
    { q: '¿Qué marcas tienen más locales de hotpot en Shanghái?', a: 'Según los datos de la plataforma Meituan (abril 2026), las 3 marcas con más locales de hotpot en Shanghái son: Zuotingyouyuan Fresh Beef Hotpot (68), Haidilao Delivery (67), Xiabu Xiabu (62). Fuente: https://index.meituan.com/reports/hotpot-store-density-index-2026' },
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
            const title = (report as Record<string, string>)[`title_${lk}`] || report.title_zh;
            const category = (report as Record<string, string>)[`category_${lk}`] || report.category_zh;
            const summary = (report as Record<string, string>)[`summary_${lk}`] || report.summary_zh;

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

      {/* ── Hotpot City Distribution ── */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t.home.hotpotTitle}</h2>
            <p className="text-sm text-gray-500 mt-1">{t.home.hotpotSubtitle}</p>
          </div>
          <a href="/cities" className="text-sm text-orange-500 hover:underline">
            {t.home.fullCityData}
          </a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-5 py-3 text-gray-500 font-medium w-12">{t.home.tableHeaders.rank}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">{t.home.tableHeaders.city}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">{t.home.tableHeaders.storeCount}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium hidden md:table-cell">{t.home.tableHeaders.note}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium hidden md:table-cell">{t.home.tableHeaders.source}</th>
              </tr>
            </thead>
            <tbody>
              {cityHotpotData.map((city, i) => {
                const cityName = (city as Record<string, string | number>)[`city_${lk}`] as string || city.city_zh;
                const note = (city as Record<string, string | number>)[`note_${lk}`] as string || city.note_zh;

                return (
                  <tr
                    key={city.city_zh}
                    className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${i === 0 ? 'bg-orange-50/50' : ''}`}
                  >
                    <td className="px-5 py-3">
                      <span
                        className={`inline-flex w-6 h-6 items-center justify-center rounded-full text-xs font-bold ${
                          city.rank <= 3
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {city.rank}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-bold text-gray-900">{cityName}</td>
                    <td className="px-5 py-3">
                      <span className="font-mono font-bold text-gray-900">{city.stores.toLocaleString()}</span>
                      <span className="text-gray-400 text-xs ml-1">{t.home.storeUnit}</span>
                    </td>
                    <td className="px-5 py-3 text-gray-500 hidden md:table-cell text-xs">{note}</td>
                    <td className="px-5 py-3 text-gray-400 hidden md:table-cell text-xs">{(city as Record<string, string | number>)[`source_${lk}`] as string || city.source_zh}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2 px-1">
          {lk === 'zh' && '* 数据来源：美团平台在营门店数据，统计口径：在营餐饮门店，城市口径为市辖区。精确统计值：重庆3,068家、上海1,276家；其余为估算值。'}
          {lk === 'en' && '* Source: Meituan platform active merchant data. Scope: Active food & beverage outlets, by urban district. Exact values: Chongqing 3,068, Shanghai 1,276; others are estimates.'}
          {lk === 'ja' && '* 出典：美団プラットフォームの営業中店舗データ。範囲：営業中の飲食店、市轄区単位。正確な値：重慶3,068店、上海1,276店；その他は推定値。'}
          {lk === 'es' && '* Fuente: Datos de comerciantes activos de la plataforma Meituan. Alcance: Establecimientos de alimentos y bebidas activos, por distrito urbano. Valores exactos: Chongqing 3.068, Shanghái 1.276; el resto son estimaciones.'}
        </p>
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
