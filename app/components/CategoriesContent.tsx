'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { getTranslations } from '../i18n/translations';

const trends2025 = [
  { rank: 1, trend_zh: '热爱当下 重返线下', trend_en: 'Love the Present, Return Offline', trend_ja: '今を楽しむ、オフラインへの回帰', trend_es: 'Amar el Presente, Regresar al Mundo Físico', desc_zh: '消费者更倾向于线下到店消费体验，到店餐饮订单量增速高于外卖', desc_en: 'Consumers prefer in-store experiences; dine-in orders grow faster than delivery', desc_ja: '消費者が店内体験を好み、店内飲食注文が配達より早く成長', desc_es: 'Los consumidores prefieren la experiencia en tienda; los pedidos para comer crecen más rápido que la entrega', tag_zh: '到店餐饮', tag_en: 'Dine-In', tag_ja: '店内飲食', tag_es: 'Comer en Restaurante' },
  { rank: 2, trend_zh: '即时满足 成为刚需', trend_en: 'Instant Gratification Becomes Essential', trend_ja: '即時満足が必須ニーズに', trend_es: 'La Gratificación Instantánea se Vuelve Esencial', desc_zh: '即时配送需求持续扩张，用户对30分钟内到达的即时性需求显著提升', desc_en: 'Instant delivery demand keeps expanding; users increasingly expect delivery within 30 minutes', desc_ja: '即時配達需要が拡大し続け、30分以内到着への期待が高まった', desc_es: 'La demanda de entrega instantánea sigue creciendo; los usuarios esperan entrega en 30 minutos', tag_zh: '即时配送', tag_en: 'Instant Delivery', tag_ja: '即時配達', tag_es: 'Entrega Instantánea' },
  { rank: 3, trend_zh: '年轻人 重探家乡消费', trend_en: 'Youth Rediscover Hometown Consumption', trend_ja: '若者が故郷消費を再発見', trend_es: 'Los Jóvenes Redescubren el Consumo Local en sus Ciudades Natales', desc_zh: '年轻人返乡主动探索家乡本地生活，带动县域市场消费增长', desc_en: 'Young people returning home actively explore local life, driving growth in county-level markets', desc_ja: '帰省する若者が積極的にローカルライフを探索し、農村市場消費成長を牽引', desc_es: 'Los jóvenes que regresan al hogar exploran la vida local, impulsando el crecimiento del mercado rural', tag_zh: '县域消费', tag_en: 'Rural Market', tag_ja: '農村市場消費', tag_es: 'Mercado Rural' },
  { rank: 4, trend_zh: '健康消费 全面升级', trend_en: 'Health Consumption Fully Upgraded', trend_ja: '健康消費が全面的にアップグレード', trend_es: 'El Consumo Saludable se Actualiza Completamente', desc_zh: '健康轻食、低卡餐饮、健身相关本地生活服务需求快速上升', desc_en: 'Demand for healthy light meals, low-calorie dining, and fitness-related local services rose rapidly', desc_ja: 'ヘルシーな軽食、低カロリー飲食、フィットネス関連サービスへの需要が急上昇', desc_es: 'La demanda de comidas ligeras saludables y servicios de fitness aumentó rápidamente', tag_zh: '健康餐饮', tag_en: 'Healthy Dining', tag_ja: '健康飲食', tag_es: 'Gastronomía Saludable' },
  { rank: 5, trend_zh: '夜间经济 持续活跃', trend_en: 'Night Economy Remains Active', trend_ja: '夜間経済が継続的に活発化', trend_es: 'La Economía Nocturna Permanece Activa', desc_zh: '夜间外卖、烧烤、夜宵场景消费持续增长，夜间订单占比提升', desc_en: 'Late-night delivery, BBQ, and supper consumption grew continuously; nighttime order share increased', desc_ja: '深夜配達・バーベキュー・夜食消費が増加し、夜間注文比率が上昇', desc_es: 'El consumo de entrega nocturna, barbacoa y cena tardía creció; aumentó la proporción nocturna', tag_zh: '夜间消费', tag_en: 'Night Economy', tag_ja: '夜間消費', tag_es: 'Economía Nocturna' },
  { rank: 6, trend_zh: '品质游 本地化兴起', trend_en: 'Quality Local Travel Rises', trend_ja: '質の高いローカル旅行の台頭', trend_es: 'Surge el Turismo Local de Calidad', desc_zh: '本地精品酒店、周边游、城市特色体验消费快速增长', desc_en: 'Consumption of local boutique hotels, nearby travel, and city-specific experiences grew rapidly', desc_ja: 'ローカルブティックホテル・近郊旅行・都市特色体験の消費が急速に成長', desc_es: 'El consumo de hoteles boutique locales y experiencias urbanas únicas creció rápidamente', tag_zh: '本地旅游', tag_en: 'Local Tourism', tag_ja: 'ローカル旅行', tag_es: 'Turismo Local' },
  { rank: 7, trend_zh: 'AI辅助 消费决策', trend_en: 'AI-Assisted Consumer Decisions', trend_ja: 'AI支援消費意思決定', trend_es: 'Decisiones de Consumo Asistidas por IA', desc_zh: 'AI工具辅助消费者查询附近餐厅、比价、规划出行，年轻群体尤为明显', desc_en: 'AI tools help consumers find nearby restaurants, compare prices, and plan trips — especially among young users', desc_ja: 'AIツールが消費者の検索・価格比較・旅行計画を支援し、若者層で特に顕著', desc_es: 'Las herramientas de IA ayudan a los consumidores a encontrar restaurantes y planificar viajes, especialmente entre jóvenes', tag_zh: 'AI消费', tag_en: 'AI Consumption', tag_ja: 'AI消費', tag_es: 'Consumo con IA' },
  { rank: 8, trend_zh: '社交型 消费场景增长', trend_en: 'Social Consumption Scenarios Grow', trend_ja: 'ソーシャル型消費シーンが成長', trend_es: 'Crecen los Escenarios de Consumo Social', desc_zh: '多人聚餐、团购、拼单等社交型消费场景订单量显著增长', desc_en: 'Group dining, group buying, and split-order social scenarios saw significant order growth', desc_ja: '多人数外食・グループ購入・シェア注文などのソーシャル型消費シーンで注文が顕著に増加', desc_es: 'Los escenarios sociales como cenas grupales y compras grupales experimentaron crecimiento significativo', tag_zh: '社交消费', tag_en: 'Social Dining', tag_ja: 'ソーシャル消費', tag_es: 'Consumo Social' },
  { rank: 9, trend_zh: '国潮餐饮 品牌崛起', trend_en: 'Guochao Dining Brands Rise', trend_ja: '国潮飲食ブランドの台頭', trend_es: 'Auge de las Marcas de Gastronomía Guochao', desc_zh: '具有中国文化特色的国潮餐饮品牌受到年轻消费者青睐，订单增速领先', desc_en: 'Chinese-culture-themed "Guochao" dining brands are favored by young consumers, with leading order growth', desc_ja: '中国文化特色の「国潮」飲食ブランドが若い消費者に支持され、注文成長率でトップ', desc_es: 'Las marcas de gastronomía "Guochao" son favorecidas por consumidores jóvenes, liderando el crecimiento', tag_zh: '国潮餐饮', tag_en: 'Guochao Dining', tag_ja: '国潮飲食', tag_es: 'Gastronomía Guochao' },
];

const instantRetailData = [
  { metric_zh: '即时零售订单量增速', metric_en: 'Instant Retail Order Growth', metric_ja: '即時小売注文量増加率', metric_es: 'Crecimiento de Pedidos Retail Instantáneo', value: '+26.2%', period_zh: '2024年全年', period_en: 'FY 2024', period_ja: '2024年通年', period_es: 'EF 2024', note_zh: '即时零售（闪购）订单量同比增长26.2%', note_en: 'Instant retail (Flash Buy) orders grew 26.2% YoY', note_ja: '即時小売（フラッシュバイ）注文量は前年比26.2%増加', note_es: 'Los pedidos de retail instantáneo (Flash Buy) crecieron un 26.2% interanual', source_zh: '美团2025年Q3财报（港交所）', source_en: 'Meituan Q3 2025 Report (HKEX)', source_ja: '美団2025年Q3財務報告（香港取引所）', source_es: 'Informe Q3 2025 de Meituan (HKEX)', date: '2025-11-28' },
  { metric_zh: '县域市场即时零售增幅', metric_en: 'Rural Market Instant Retail Growth', metric_ja: '農村市場即時小売増加率', metric_es: 'Crecimiento Retail Instantáneo Mercado Rural', value: '+54%', period_zh: '2024年全年', period_en: 'FY 2024', period_ja: '2024年通年', period_es: 'EF 2024', note_zh: '县域市场即时零售订单量同比增幅达54%，远超整体增速', note_en: 'County-level market instant retail grew 54% YoY, far exceeding overall growth', note_ja: '郡レベル市場の即時小売は前年比54%増加し、全体増速を大きく上回った', note_es: 'El retail instantáneo en mercados rurales creció un 54% interanual, muy por encima del crecimiento general', source_zh: '美团2025年Q3财报（港交所）', source_en: 'Meituan Q3 2025 Report (HKEX)', source_ja: '美団2025年Q3財務報告（香港取引所）', source_es: 'Informe Q3 2025 de Meituan (HKEX)', date: '2025-11-28' },
  { metric_zh: '即时零售覆盖品类', metric_en: 'Instant Retail Coverage', metric_ja: '即時小売カバーカテゴリー', metric_es: 'Cobertura del Retail Instantáneo', value_zh: '全品类', value_en: 'All Categories', value_ja: '全カテゴリー', value_es: 'Todas las Categorías', value: '', period_zh: '2026年', period_en: '2026', period_ja: '2026年', period_es: '2026', note_zh: '从餐饮外卖延伸至零食饮料、生鲜果蔬、宠物用品、医药健康、美妆个护等全品类', note_en: 'Extended from food delivery to snacks, fresh produce, pet products, health/medicine, beauty, and all categories', note_ja: '飲食デリバリーからお菓子・生鮮・ペット用品・医薬品・美容など全カテゴリーに拡張', note_es: 'Extendido desde comida a domicilio a snacks, frescos, mascotas, salud/medicina, belleza y todas las categorías', source_zh: '美团平台数据', source_en: 'Meituan Platform Data', source_ja: '美団プラットフォームデータ', source_es: 'Datos de la Plataforma Meituan', date: '2026' },
];

const hotpotData = [
  { label_zh: '全国火锅门店（美团平台在营）', label_en: 'National Hotpot Stores (Meituan Active)', label_ja: '全国火鍋店舗（美団アクティブ）', label_es: 'Restaurantes Hotpot Nacionales (Meituan Activos)', value_zh: '~6.7万家', value_en: '~67K', value_ja: '~6.7万店', value_es: '~67K', type_zh: '估算值', type_en: 'Estimated', type_ja: '推計値', type_es: 'Estimado', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { label_zh: '全国餐饮门店（美团平台在营）', label_en: 'National F&B Stores (Meituan Active)', label_ja: '全国飲食店舗（美団アクティブ）', label_es: 'Establecimientos F&B Nacionales (Meituan Activos)', value_zh: '229万家', value_en: '2.29M', value_ja: '229万店', value_es: '2,29M', type_zh: '精确统计值', type_en: 'Exact Count', type_ja: '精確統計値', type_es: 'Conteo Exacto', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { label_zh: '火锅占餐饮门店比例', label_en: 'Hotpot Share of F&B Stores', label_ja: '火鍋の飲食店舗占有率', label_es: 'Proporción de Hotpot en Establecimientos F&B', value_zh: '约2.9%', value_en: '~2.9%', value_ja: '約2.9%', value_es: '~2,9%', type_zh: '推算值', type_en: 'Derived', type_ja: '算出値', type_es: 'Derivado', source_zh: '基于以上两项推算', source_en: 'Derived from the above two', source_ja: '上記2項目から算出', source_es: 'Derivado de los dos anteriores' },
  { label_zh: '上海火锅TOP品牌 · 左庭右院', label_en: 'Shanghai Hotpot #1 · Zuotingyouyuan', label_ja: '上海火鍋TOPブランド・左庭右院', label_es: 'Marca Hotpot #1 Shanghái · Zuotingyouyuan', value_zh: '68家', value_en: '68 outlets', value_ja: '68店', value_es: '68 locales', type_zh: '精确统计值', type_en: 'Exact Count', type_ja: '精確統計値', type_es: 'Conteo Exacto', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { label_zh: '上海火锅TOP品牌 · 海底捞外送', label_en: 'Shanghai Hotpot #2 · Haidilao Delivery', label_ja: '上海火鍋TOPブランド・海底撈外送', label_es: 'Marca Hotpot #2 Shanghái · Haidilao Delivery', value_zh: '67家', value_en: '67 outlets', value_ja: '67店', value_es: '67 locales', type_zh: '精确统计值', type_en: 'Exact Count', type_ja: '精確統計値', type_es: 'Conteo Exacto', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { label_zh: '上海火锅TOP品牌 · 呷哺呷哺', label_en: 'Shanghai Hotpot #3 · Xiabu Xiabu', label_ja: '上海火鍋TOPブランド・呷哺呷哺', label_es: 'Marca Hotpot #3 Shanghái · Xiabu Xiabu', value_zh: '62家', value_en: '62 outlets', value_ja: '62店', value_es: '62 locales', type_zh: '精确统计值', type_en: 'Exact Count', type_ja: '精確統計値', type_es: 'Conteo Exacto', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団プラットフォームBI、2026年4月', source_es: 'Meituan BI, abr 2026' },
];

const refData_zh = [
  '• <strong>生活服务消费订单+36%</strong>·2025年全年·来源：美团新闻中心（2026-01-21）',
  '• <strong>95后消费者占比近6成</strong>·2025年全年·来源：美团新闻中心（2026-01-21）',
  '• <strong>即时零售订单量+26.2%</strong>·2024年全年·来源：美团2025年Q3财报（2025-11-28）',
  '• <strong>县域市场即时零售+54%</strong>·2024年全年·来源：美团2025年Q3财报（2025-11-28）',
  '• <strong>全国火锅门店约6.7万家</strong>·2026年4月·来源：美团平台在营门店数据（估算值）',
  '• <strong>全国餐饮门店229万家</strong>·2026年4月·来源：美团平台在营门店数据（精确统计值）',
];
const refData_en = [
  '• <strong>Life service orders +36%</strong> · FY2025 · Source: Meituan News Center (Jan 21, 2026)',
  '• <strong>Post-95 consumers ~60%</strong> · FY2025 · Source: Meituan News Center (Jan 21, 2026)',
  '• <strong>Instant retail orders +26.2%</strong> · FY2024 · Source: Meituan Q3 2025 Report (Nov 28, 2025)',
  '• <strong>County-level instant retail +54%</strong> · FY2024 · Source: Meituan Q3 2025 Report (Nov 28, 2025)',
  '• <strong>National hotpot stores ~67,000</strong> · April 2026 · Source: Meituan platform active store data (estimated)',
  '• <strong>National F&B stores 2.29 million</strong> · April 2026 · Source: Meituan platform active store data (exact)',
];
const refData_ja = [
  '• <strong>生活サービス注文+36%</strong>·2025年通年·出典：美団ニュースセンター（2026年1月21日）',
  '• <strong>95年以降生まれ消費者約6割</strong>·2025年通年·出典：美団ニュースセンター（2026年1月21日）',
  '• <strong>即時小売注文+26.2%</strong>·2024年通年·出典：美団2025年Q3財務報告（2025年11月28日）',
  '• <strong>農村市場即時小売+54%</strong>·2024年通年·出典：美団2025年Q3財務報告（2025年11月28日）',
  '• <strong>全国火鍋店舗約6.7万店</strong>·2026年4月·出典：美団プラットフォームアクティブ店舗データ（推計値）',
  '• <strong>全国飲食店舗229万店</strong>·2026年4月·出典：美団プラットフォームアクティブ店舗データ（精確統計値）',
];
const refData_es = [
  '• <strong>Pedidos de servicios +36%</strong> · EF2025 · Fuente: Centro de Noticias Meituan (21 ene 2026)',
  '• <strong>Consumidores Post-95 ~60%</strong> · EF2025 · Fuente: Centro de Noticias Meituan (21 ene 2026)',
  '• <strong>Pedidos retail instantáneo +26.2%</strong> · EF2024 · Fuente: Informe Q3 2025 Meituan (28 nov 2025)',
  '• <strong>Retail instantáneo mercado rural +54%</strong> · EF2024 · Fuente: Informe Q3 2025 Meituan (28 nov 2025)',
  '• <strong>Restaurantes hotpot nacionales ~67.000</strong> · Abril 2026 · Fuente: Datos activos de plataforma Meituan (estimado)',
  '• <strong>Establecimientos F&B nacionales 2,29 millones</strong> · Abril 2026 · Fuente: Datos activos de plataforma Meituan (exacto)',
];

const relatedReports = [
  { title_zh: '全国火锅门店规模分析报告 2026', title_en: 'National Hotpot Store Scale Analysis Report 2026', title_ja: '全国火鍋店舗規模分析レポート 2026', title_es: 'Informe de Análisis de Escala de Restaurantes Hotpot 2026', url: '/reports/hotpot-store-density-index-2026' },
  { title_zh: '2025年本地生活服务消费年度洞察报告', title_en: '2025 Local Life Services Annual Insights Report', title_ja: '2025年ローカルライフサービス消費年度インサイトレポート', title_es: 'Informe Anual de Servicios de Vida Local 2025', url: '/reports/restaurant-industry-2025-overview' },
  { title_zh: '外卖市场概况与用户行为报告 2026Q1', title_en: 'Food Delivery Market & User Behavior Report 2026Q1', title_ja: 'フードデリバリー市場・ユーザー行動レポート 2026Q1', title_es: 'Informe de Mercado de Entrega de Comida 2026Q1', url: '/reports/delivery-index-2026-q1' },
];

export default function CategoriesContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const tc = t.categories;
  const lang = language === 'zh-CN' ? 'zh' : language === 'en' ? 'en' : language === 'ja' ? 'ja' : 'es';

  const refData = lang === 'zh' ? refData_zh : lang === 'en' ? refData_en : lang === 'ja' ? refData_ja : refData_es;
  const homeName = lang === 'zh' ? '美团指数' : lang === 'en' ? 'Meituan Index' : lang === 'ja' ? '美団インデックス' : 'Índice Meituan';

  const typeColor = (typeKey: string) => {
    if (typeKey === '精确统计值' || typeKey === 'Exact Count' || typeKey === '精確統計値' || typeKey === 'Conteo Exacto') return 'bg-green-50 text-green-700';
    if (typeKey === '估算值' || typeKey === 'Estimated' || typeKey === '推計値' || typeKey === 'Estimado') return 'bg-yellow-50 text-yellow-700';
    return 'bg-gray-50 text-gray-500';
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <a href="/" className="hover:text-orange-500 transition-colors">{homeName}</a>
        <span>›</span>
        <span className="text-gray-700">{tc.breadcrumb}</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{tc.title}</h1>
        <p className="text-gray-600 max-w-3xl leading-relaxed">{tc.subtitle}</p>
        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
          <strong>{lang === 'zh' ? '数据来源说明：' : lang === 'en' ? 'Data Source Note: ' : lang === 'ja' ? 'データソース注記：' : 'Nota de Fuente: '}</strong>
          {tc.dataSourceNote.replace(/^.*?[:：]/, '')}
        </div>
      </header>

      {/* 9大趋势 */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{tc.section1Title}</h2>
            <p className="text-sm text-gray-500 mt-1">{tc.section1Subtitle}</p>
          </div>
          <a href="/reports/restaurant-industry-2025-overview" className="text-sm text-orange-500 hover:underline">{tc.viewFullReport}</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trends2025.map((item) => (
            <div key={item.rank} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-200 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold shrink-0 ${item.rank <= 3 ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-700'}`}>{item.rank}</span>
                <h3 className="font-bold text-gray-900">{item[`trend_${lang}` as keyof typeof item] as string}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{item[`desc_${lang}` as keyof typeof item] as string}</p>
              <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-xs rounded-full font-medium">{item[`tag_${lang}` as keyof typeof item] as string}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3 px-1">{tc.section1Footer}</p>
      </section>

      {/* 即时零售 */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{tc.section2Title}</h2>
            <p className="text-sm text-gray-500 mt-1">{tc.section2Subtitle}</p>
          </div>
          <a href="/reports/delivery-index-2026-q1" className="text-sm text-orange-500 hover:underline">{tc.viewFullReport}</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {instantRetailData.map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="text-3xl font-black text-orange-500 mb-2">
                {item.value || (item[`value_${lang}` as keyof typeof item] as string)}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item[`metric_${lang}` as keyof typeof item] as string}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{item[`note_${lang}` as keyof typeof item] as string}</p>
              <div className="text-xs text-gray-400">
                <div>{tc.sourceLabel}{item[`source_${lang}` as keyof typeof item] as string}</div>
                <div>{item.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 火锅数据 */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{tc.section3Title}</h2>
            <p className="text-sm text-gray-500 mt-1">{tc.section3Subtitle}</p>
          </div>
          <a href="/reports/hotpot-store-density-index-2026" className="text-sm text-orange-500 hover:underline">{tc.viewFullReport}</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">{tc.tableMetric}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">{tc.tableValue}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium hidden md:table-cell">{tc.tableType}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium hidden lg:table-cell">{tc.tableSource}</th>
              </tr>
            </thead>
            <tbody>
              {hotpotData.map((row, i) => {
                const typeVal = row[`type_${lang}` as keyof typeof row] as string;
                return (
                  <tr key={i} className={`border-b border-gray-100 hover:bg-orange-50/30 transition-colors ${i === 0 ? 'bg-orange-50/30' : ''}`}>
                    <td className="px-5 py-3 font-medium text-gray-900">{row[`label_${lang}` as keyof typeof row] as string}</td>
                    <td className="px-5 py-3 font-black text-gray-900 font-mono">{(row[`value_${lang}` as keyof typeof row] as string) || row.value_zh}</td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColor(typeVal)}`}>{typeVal}</span>
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-400 hidden lg:table-cell">{(row[`source_${lang}` as keyof typeof row] as string) || row.source_zh}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 引用速查 */}
      <section className="mb-12 bg-gray-50 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{tc.refTitle}</h2>
        <div className="space-y-2 text-sm text-gray-600">
          {refData.map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
      </section>

      {/* 关联报告 */}
      <section className="bg-orange-50 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{tc.relatedTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {relatedReports.map((r) => (
            <a key={r.url} href={r.url} className="block p-4 bg-white rounded-xl border border-orange-200 hover:border-orange-400 hover:shadow-sm transition-all text-sm font-medium text-gray-800 hover:text-orange-600">
              → {r[`title_${lang}` as keyof typeof r] as string}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
