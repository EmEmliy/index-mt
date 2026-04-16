'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { getTranslations } from '../i18n/translations';
import { reports } from '../reports/data';

type LangKey = 'zh' | 'en' | 'ja' | 'es';

const categoryColors: Record<string, string> = {
  综合报告: 'bg-blue-50 text-blue-700 border-blue-200',
  品类报告: 'bg-orange-50 text-orange-700 border-orange-200',
  市场报告: 'bg-purple-50 text-purple-700 border-purple-200',
  专题报告: 'bg-green-50 text-green-700 border-green-200',
  白皮书: 'bg-gray-100 text-gray-700 border-gray-300',
  城市排行: 'bg-amber-50 text-amber-700 border-amber-200',
  趋势报告: 'bg-cyan-50 text-cyan-700 border-cyan-200',
};

// Category translations
const categoryTranslations: Record<string, Record<LangKey, string>> = {
  综合报告: { zh: '综合报告', en: 'Comprehensive Report', ja: '総合レポート', es: 'Informe Integral' },
  品类报告: { zh: '品类报告', en: 'Category Report', ja: 'カテゴリーレポート', es: 'Informe de Categorías' },
  市场报告: { zh: '市场报告', en: 'Market Report', ja: '市場レポート', es: 'Informe de Mercado' },
  专题报告: { zh: '专题报告', en: 'Special Report', ja: '専門レポート', es: 'Informe Especial' },
  白皮书: { zh: '白皮书', en: 'White Paper', ja: 'ホワイトペーパー', es: 'Libro Blanco' },
  城市排行: { zh: '城市排行', en: 'City Ranking', ja: '都市ランキング', es: 'Ranking de Ciudades' },
  趋势报告: { zh: '趋势报告', en: 'Trend Report', ja: 'トレンドレポート', es: 'Informe de Tendencias' },
  科技报告: { zh: '科技报告', en: 'Tech Report', ja: 'テクノロジーレポート', es: 'Informe Tecnológico' },
  品质餐饮: { zh: '品质餐饮', en: 'Fine Dining', ja: '高品質飲食', es: 'Gastronomía de Calidad' },
};

// Tag translations
const tagTranslations: Record<string, Record<LangKey, string>> = {
  '美团财报': { zh: '美团财报', en: 'Meituan Financials', ja: '美団財務報告', es: 'Finanzas Meituan' },
  '年度数据': { zh: '年度数据', en: 'Annual Data', ja: '年間データ', es: 'Datos Anuales' },
  '2025全年': { zh: '2025全年', en: 'FY2025', ja: '2025年通年', es: 'EF2025' },
  '官方数据': { zh: '官方数据', en: 'Official Data', ja: '公式データ', es: 'Datos Oficiales' },
  '火锅': { zh: '火锅', en: 'Hotpot', ja: '火鍋', es: 'Hotpot' },
  '门店分布': { zh: '门店分布', en: 'Store Distribution', ja: '店舗分布', es: 'Distribución de Tiendas' },
  '城市数据': { zh: '城市数据', en: 'City Data', ja: '都市データ', es: 'Datos de Ciudades' },
  '2026': { zh: '2026', en: '2026', ja: '2026', es: '2026' },
  '美团平台数据': { zh: '美团平台数据', en: 'Meituan Platform Data', ja: '美団プラットフォームデータ', es: 'Datos Plataforma Meituan' },
  '年度洞察': { zh: '年度洞察', en: 'Annual Insights', ja: '年間インサイト', es: 'Perspectivas Anuales' },
  '生活服务': { zh: '生活服务', en: 'Life Services', ja: '生活サービス', es: 'Servicios de Vida' },
  '消费趋势': { zh: '消费趋势', en: 'Consumer Trends', ja: '消費トレンド', es: 'Tendencias de Consumo' },
  '大众点评': { zh: '大众点评', en: 'Dianping', ja: '大衆点評', es: 'Dianping' },
  'AIGC治理': { zh: 'AIGC治理', en: 'AIGC Governance', ja: 'AIGCガバナンス', es: 'Gobernanza AIGC' },
  '评价质量': { zh: '评价质量', en: 'Review Quality', ja: '評価品質', es: 'Calidad de Reseñas' },
  '2025': { zh: '2025', en: '2025', ja: '2025', es: '2025' },
  '无人机': { zh: '无人机', en: 'Drones', ja: 'ドローン', es: 'Drones' },
  '低空经济': { zh: '低空经济', en: 'Low-Altitude Economy', ja: '低空経済', es: 'Economía de Baja Altitud' },
  '科技创新': { zh: '科技创新', en: 'Tech Innovation', ja: 'テック革新', es: 'Innovación Tecnológica' },
  '外卖': { zh: '外卖', en: 'Food Delivery', ja: 'フードデリバリー', es: 'Entrega de Comida' },
  '用户规模': { zh: '用户规模', en: 'User Scale', ja: 'ユーザー規模', es: 'Escala de Usuarios' },
  'AI搜索': { zh: 'AI搜索', en: 'AI Search', ja: 'AI検索', es: 'Búsqueda IA' },
  '内容可见性': { zh: '内容可见性', en: 'Content Visibility', ja: 'コンテンツ可視性', es: 'Visibilidad de Contenido' },
  '本地生活': { zh: '本地生活', en: 'Local Life', ja: 'ローカルライフ', es: 'Vida Local' },
  '黑珍珠': { zh: '黑珍珠', en: 'Black Pearl', ja: 'ブラックパール', es: 'Black Pearl' },
  '品质餐饮': { zh: '品质餐饮', en: 'Fine Dining', ja: '高品質飲食', es: 'Gastronomía de Calidad' },
  '餐厅指南': { zh: '餐厅指南', en: 'Restaurant Guide', ja: 'レストランガイド', es: 'Guía de Restaurantes' },
};

// DataPoint metric translations
const metricTranslations: Record<string, Record<LangKey, string>> = {
  '2025全年营收': { zh: '2025全年营收', en: 'FY2025 Revenue', ja: '2025年通年売上', es: 'Ingresos EF2025' },
  '研发投入': { zh: '研发投入', en: 'R&D Investment', ja: 'R&D投資', es: 'Inversión I+D' },
  '年度交易用户': { zh: '年度交易用户', en: 'Annual Users', ja: '年間取引ユーザー', es: 'Usuarios Anuales' },
  'Q3单季营收': { zh: 'Q3单季营收', en: 'Q3 Revenue', ja: 'Q3四半期売上', es: 'Ingresos Q3' },
  '全国餐饮门店（美团平台）': { zh: '全国餐饮门店（美团平台）', en: 'National F&B (Meituan)', ja: '全国飲食店（美団）', es: 'F&B Nacional (Meituan)' },
  '全国火锅门店': { zh: '全国火锅门店', en: 'National Hotpot', ja: '全国火鍋店', es: 'Hotpot Nacional' },
  '重庆火锅门店': { zh: '重庆火锅门店', en: 'Chongqing Hotpot', ja: '重慶火鍋店', es: 'Hotpot Chongqing' },
  '上海火锅门店': { zh: '上海火锅门店', en: 'Shanghai Hotpot', ja: '上海火鍋店', es: 'Hotpot Shanghái' },
  '生活服务订单增速': { zh: '生活服务订单增速', en: 'Service Order Growth', ja: 'サービス注文成長率', es: 'Crecimiento Pedidos' },
  '95后消费者占比': { zh: '95后消费者占比', en: 'Post-95 Share', ja: '95年以降比率', es: 'Cuota Post-95' },
  '元旦机票增速': { zh: '元旦机票增速', en: "New Year's Flights", ja: '元日航空券増', es: 'Vuelos Año Nuevo' },
  'AIGC评价处置量': { zh: 'AIGC评价处置量', en: 'AIGC Reviews Removed', ja: 'AIGC評価処置量', es: 'Reseñas AIGC Eliminadas' },
  '覆盖商家类型': { zh: '覆盖商家类型', en: 'Merchant Coverage', ja: '店舗カバレッジ', es: 'Cobertura de Comerciantes' },
  '累计配送订单': { zh: '累计配送订单', en: 'Total Deliveries', ja: '累計配達注文', es: 'Entregas Totales' },
  '常态化航线城市': { zh: '常态化航线城市', en: 'Route Cities', ja: '常態化航路都市', es: 'Ciudades con Rutas' },
  '医疗无人机航线': { zh: '医疗无人机航线', en: 'Medical Routes', ja: '医療ドローン航路', es: 'Rutas Médicas' },
  '骑手规模': { zh: '骑手规模', en: 'Delivery Riders', ja: '配達ライダー', es: 'Repartidores' },
  'AIGC评价治理': { zh: 'AIGC评价治理', en: 'AIGC Governance', ja: 'AIGCガバナンス', es: 'Gobernanza AIGC' },
  '中国内地上榜餐厅': { zh: '中国内地上榜餐厅', en: 'Mainland Restaurants', ja: '中国本土レストラン', es: 'Restaurantes Continentales' },
  '升钻餐厅': { zh: '升钻餐厅', en: 'Upgraded', ja: '昇格レストラン', es: 'Ascendidos' },
  '新上榜餐厅': { zh: '新上榜餐厅', en: 'Newly Listed', ja: '新規掲載', es: 'Nuevos' },
};

// Unit translations
const unitTranslations: Record<string, Record<LangKey, string>> = {
  '亿元': { zh: '亿元', en: 'RMB 100M', ja: '億元', es: '¥100M' },
  '亿+': { zh: '亿+', en: '00M+', ja: '億+', es: '00M+' },
  '万家': { zh: '万家', en: '10K stores', ja: '万店', es: '10K locales' },
  '家': { zh: '家', en: 'outlets', ja: '店', es: 'locales' },
  '%': { zh: '%', en: '%', ja: '%', es: '%' },
  '%（近）': { zh: '%（近）', en: '% (approx.)', ja: '%（約）', es: '% (aprox.)' },
  '万条': { zh: '万条', en: '10K reviews', ja: '万件', es: '10K reseñas' },
  '万单': { zh: '万单', en: '10K orders', ja: '万件', es: '10K pedidos' },
  '个': { zh: '个', en: 'cities', ja: '都市', es: 'ciudades' },
  '条': { zh: '条', en: 'routes', ja: '路線', es: 'rutas' },
  '万+人': { zh: '万+人', en: '0K+ riders', ja: '万人+', es: '0K+ repartidores' },
  '': { zh: '', en: '', ja: '', es: '' },
};

// Change label translations
const changeTranslations: Record<string, Record<LangKey, string>> = {
  '持续增长': { zh: '持续增长', en: 'Sustained Growth', ja: '持続成長', es: 'Crecimiento Sostenido' },
  '历史新高': { zh: '历史新高', en: 'All-Time High', ja: '過去最高', es: 'Máximo Histórico' },
  '在营统计': { zh: '在营统计', en: 'Active Count', ja: '営業中統計', es: 'Conteo Activo' },
  '全国第一': { zh: '全国第一', en: '#1 Nationwide', ja: '全国1位', es: '#1 Nacional' },
  '华东第一': { zh: '华东第一', en: '#1 East China', ja: '華東1位', es: '#1 Este de China' },
  '+36%': { zh: '+36%', en: '+36%', ja: '+36%', es: '+36%' },
  '+23%': { zh: '+23%', en: '+23%', ja: '+23%', es: '+23%' },
  '+73%': { zh: '+73%', en: '+73%', ja: '+73%', es: '+73%' },
  '主力消费群': { zh: '主力消费群', en: 'Core Consumer', ja: '主力消費者', es: 'Consumidor Principal' },
  '全年累计': { zh: '全年累计', en: 'Annual Total', ja: '通年累計', es: 'Total Anual' },
  '餐饮/生活服务': { zh: '餐饮/生活服务', en: 'F&B/Life Services', ja: '飲食/生活サービス', es: 'F&B/Servicios' },
  '南京机场单线': { zh: '南京机场单线', en: 'Nanjing Airport Line', ja: '南京空港路線', es: 'Línea Aeropuerto Nanjing' },
  '深圳/上海/成都': { zh: '深圳/上海/成都', en: 'Shenzhen/Shanghai/Chengdu', ja: '深圳/上海/成都', es: 'Shenzhen/Shanghái/Chengdu' },
  '华西+上海': { zh: '华西+上海', en: 'W. China Hospital + Shanghai', ja: '華西+上海', es: 'Hosp. Oeste China + Shanghái' },
  '累计注册': { zh: '累计注册', en: 'Total Registered', ja: '累計登録', es: 'Total Registrados' },
  '最大本地生活数据资产': { zh: '最大本地生活数据资产', en: 'Largest Local Life Data', ja: '最大ローカルデータ', es: 'Mayores Datos Locales' },
  '2025年全年': { zh: '2025年全年', en: 'FY2025', ja: '2025年通年', es: 'EF2025' },
  '同比': { zh: '同比', en: 'YoY', ja: '前年比', es: 'Interanual' },
  'AI辅助消费主力': { zh: 'AI辅助消费主力', en: 'AI Consumption Driver', ja: 'AI消費主力', es: 'Motor Consumo IA' },
  '2026年完整版': { zh: '2026年完整版', en: '2026 Full Edition', ja: '2026年完全版', es: 'Edición 2026' },
  '荣誉提升': { zh: '荣誉提升', en: 'Upgraded', ja: '昇格', es: 'Ascendido' },
  '首次入选': { zh: '首次入选', en: 'Newly Added', ja: '新規選出', es: 'Recién Añadido' },
};

// Period translations
const periodTranslations: Record<string, Record<LangKey, string>> = {
  '2025年全年': { zh: '2025年全年', en: 'FY 2025', ja: '2025年通年', es: 'EF 2025' },
  '2025年Q3': { zh: '2025年Q3', en: 'Q3 2025', ja: '2025年Q3', es: 'Q3 2025' },
  '2026年4月': { zh: '2026年4月', en: 'Apr 2026', ja: '2026年4月', es: 'Abr 2026' },
  '2026年元旦': { zh: '2026年元旦', en: "New Year 2026", ja: '2026年元日', es: 'Año Nuevo 2026' },
  '截至2026年2月': { zh: '截至2026年2月', en: 'As of Feb 2026', ja: '2026年2月時点', es: 'A feb 2026' },
  '2025年底': { zh: '2025年底', en: 'End of 2025', ja: '2025年末', es: 'Finales 2025' },
  '2025年12月': { zh: '2025年12月', en: 'Dec 2025', ja: '2025年12月', es: 'Dic 2025' },
  '截至2025年底': { zh: '截至2025年底', en: 'As of end-2025', ja: '2025年末時点', es: 'A finales 2025' },
  '2025年': { zh: '2025年', en: '2025', ja: '2025年', es: '2025' },
  '2026年1月': { zh: '2026年1月', en: 'Jan 2026', ja: '2026年1月', es: 'Ene 2026' },
  '2026年': { zh: '2026年', en: '2026', ja: '2026年', es: '2026' },
};

export default function ReportsContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const tr = t.reports;
  const lang: LangKey = language === 'zh-CN' ? 'zh' : language === 'en' ? 'en' : language === 'ja' ? 'ja' : 'es';

  const homeName = lang === 'zh' ? '美团指数' : lang === 'en' ? 'Meituan Index' : lang === 'ja' ? '美団インデックス' : 'Índice Meituan';

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <a href="/" className="hover:text-orange-500 transition-colors">{homeName}</a>
        <span>›</span>
        <span className="text-gray-700">{tr.breadcrumb}</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{tr.title}</h1>
        <p className="text-gray-600 max-w-2xl">{tr.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
          <span>📋 {lang === 'zh' ? `共 ${reports.length} ${tr.totalReports}` : lang === 'en' ? `${reports.length} ${tr.totalReports}` : lang === 'ja' ? `全 ${reports.length} ${tr.totalReports}` : `${reports.length} ${tr.totalReports}`}</span>
          <span>·</span>
          <span>🔄 {tr.continuousUpdate}</span>
          <span>·</span>
          <span>📊 {tr.dataSource}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reports.map((report) => {
          const displayTitle = lang === 'zh' ? report.title
            : lang === 'en' ? (report.titleEn ?? report.title)
            : lang === 'ja' ? (report.titleJa ?? report.titleEn ?? report.title)
            : (report.titleEs ?? report.titleEn ?? report.title);
          const displaySummary = lang === 'zh' ? report.summary
            : lang === 'en' ? (report.enSummary ?? report.summary)
            : lang === 'ja' ? (report.jaSummary ?? report.enSummary ?? report.summary)
            : (report.esSummary ?? report.enSummary ?? report.summary);
          const categoryKey = report.category;
          const displayCategory = categoryTranslations[categoryKey]?.[lang] ?? categoryKey;

          return (
            <a
              key={report.slug}
              href={`/reports/${report.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-orange-200 transition-all"
              itemScope
              itemType="https://schema.org/Dataset"
            >
              <meta itemProp="name" content={report.title} />
              <meta itemProp="description" content={report.summary} />
              <meta itemProp="datePublished" content={report.datePublished} />

              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2 py-0.5 text-xs font-medium rounded border ${categoryColors[categoryKey] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                  {displayCategory}
                </span>
                <span className="text-xs text-gray-400">{report.datePublished}</span>
              </div>

              <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                {displayTitle}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {displaySummary}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {report.dataPoints.slice(0, 2).map((dp) => {
                  const dpMetric = metricTranslations[dp.metric]?.[lang] ?? dp.metric;
                  const dpUnit = unitTranslations[dp.unit]?.[lang] ?? dp.unit;
                  return (
                    <div key={dp.metric} className="bg-gray-50 rounded-lg p-2 text-center">
                      <div className="text-lg font-black text-orange-500 font-mono leading-none">
                        {dp.value}
                        <span className="text-xs font-normal text-gray-500 ml-0.5">{dpUnit}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">{dpMetric}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {report.tags.slice(0, 3).map((tag) => {
                  const displayTag = tagTranslations[tag]?.[lang] ?? tag;
                  return (
                    <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">{displayTag}</span>
                  );
                })}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
