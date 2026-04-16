'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { getTranslations } from '../i18n/translations';
import { Report, reports } from '../reports/data';

type LangKey = 'zh' | 'en' | 'ja' | 'es';

// Category translations (reuse from ReportsContent)
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

function getLocalizedTitle(report: Report, lang: LangKey): string {
  if (lang === 'zh') return report.title;
  if (lang === 'en') return report.titleEn ?? report.title;
  if (lang === 'ja') return report.titleJa ?? report.titleEn ?? report.title;
  return report.titleEs ?? report.titleEn ?? report.title;
}

function getLocalizedSummary(report: Report, lang: LangKey): string {
  if (lang === 'zh') return report.summary;
  if (lang === 'en') return report.enSummary ?? report.summary;
  if (lang === 'ja') return report.jaSummary ?? report.enSummary ?? report.summary;
  return report.esSummary ?? report.enSummary ?? report.summary;
}

function getLocalizedKeyFindings(report: Report, lang: LangKey): string[] {
  if (lang === 'zh') return report.keyFindings;
  if (lang === 'en') return report.enKeyFindings ?? report.keyFindings;
  if (lang === 'ja') return report.jaKeyFindings ?? report.enKeyFindings ?? report.keyFindings;
  return report.esKeyFindings ?? report.enKeyFindings ?? report.keyFindings;
}

function getLocalizedMethodology(report: Report, lang: LangKey): string {
  if (lang === 'zh') return report.methodology;
  if (lang === 'en') return report.enMethodology ?? report.methodology;
  if (lang === 'ja') return report.jaMethodology ?? report.enMethodology ?? report.methodology;
  return report.esMethodology ?? report.enMethodology ?? report.methodology;
}

function getLocalizedSampleSize(report: Report, lang: LangKey): string {
  if (lang === 'zh') return report.sampleSize;
  if (lang === 'en') return report.enSampleSize ?? report.sampleSize;
  if (lang === 'ja') return report.jaSampleSize ?? report.enSampleSize ?? report.sampleSize;
  return report.esSampleSize ?? report.enSampleSize ?? report.sampleSize;
}

function getLocalizedCoverageScope(report: Report, lang: LangKey): string {
  if (lang === 'zh') return report.coverageScope;
  if (lang === 'en') return report.enCoverageScope ?? report.coverageScope;
  if (lang === 'ja') return report.jaCoverageScope ?? report.enCoverageScope ?? report.coverageScope;
  return report.esCoverageScope ?? report.enCoverageScope ?? report.coverageScope;
}

function getLocalizedBody(report: Report, lang: LangKey): string {
  if (lang === 'zh') return report.body;
  if (lang === 'en') return report.enBody ?? report.body;
  if (lang === 'ja') return report.jaBody ?? report.enBody ?? report.body;
  return report.esBody ?? report.enBody ?? report.body;
}

function getLocalizedFaq(report: Report, lang: LangKey): { q: string; a: string }[] {
  if (lang === 'zh') return report.faq;
  if (lang === 'en') return report.enFaq ?? report.faq;
  if (lang === 'ja') return report.jaFaq ?? report.enFaq ?? report.faq;
  return report.esFaq ?? report.enFaq ?? report.faq;
}

const categoryBadgeColor: Record<string, string> = {
  综合报告: 'bg-blue-50 text-blue-700 border-blue-200',
  品类报告: 'bg-orange-50 text-orange-700 border-orange-200',
  市场报告: 'bg-purple-50 text-purple-700 border-purple-200',
  专题报告: 'bg-green-50 text-green-700 border-green-200',
  白皮书: 'bg-gray-100 text-gray-700 border-gray-300',
  城市排行: 'bg-amber-50 text-amber-700 border-amber-200',
  趋势报告: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  科技报告: 'bg-teal-50 text-teal-700 border-teal-200',
  品质餐饮: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function ReportDetailContent({ report }: { report: Report }) {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const rd = t.reportDetail;
  const lang: LangKey = language === 'zh-CN' ? 'zh' : language === 'en' ? 'en' : language === 'ja' ? 'ja' : 'es';

  const displayTitle = getLocalizedTitle(report, lang);
  const displaySummary = getLocalizedSummary(report, lang);
  const displayCategory = categoryTranslations[report.category]?.[lang] ?? report.category;
  const displayKeyFindings = getLocalizedKeyFindings(report, lang);
  const displayMethodology = getLocalizedMethodology(report, lang);
  const displaySampleSize = getLocalizedSampleSize(report, lang);
  const displayCoverageScope = getLocalizedCoverageScope(report, lang);
  const displayFaq = getLocalizedFaq(report, lang);
  const displayBody = getLocalizedBody(report, lang);
  const hasLocalizedBody = lang === 'zh' || (lang === 'en' && !!report.enBody) || (lang === 'ja' && !!(report.jaBody || report.enBody)) || (lang === 'es' && !!(report.esBody || report.enBody));

  const relatedReportData = report.relatedReports
    .map((slug) => reports.find((r) => r.slug === slug))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* 面包屑 */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <a href="/" className="hover:text-orange-500 transition-colors">{rd.homeName}</a>
        <span>›</span>
        <a href="/reports" className="hover:text-orange-500 transition-colors">{rd.breadcrumbReports}</a>
        <span>›</span>
        <span className="text-gray-700 truncate max-w-xs">{displayTitle}</span>
      </nav>

      {/* 报告头部 */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span
            className={`px-2 py-0.5 text-xs font-bold rounded border ${
              categoryBadgeColor[report.category] || 'bg-gray-100 text-gray-600 border-gray-200'
            }`}
          >
            {displayCategory}
          </span>
          <span className="text-xs text-gray-400">
            {rd.published}<time dateTime={report.datePublished}>{report.datePublished}</time>
            {' · '}{rd.updated}<time dateTime={report.dateModified}>{report.dateModified}</time>
          </span>
          <span className="text-xs text-gray-400">· {rd.publisher}</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {displayTitle}
        </h1>
        <p className="text-base text-gray-600 leading-relaxed border-l-4 border-orange-400 pl-4 bg-orange-50 py-3 rounded-r-lg">
          {displaySummary}
        </p>
      </header>

      {/* 核心数据快速摘要 */}
      <section className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-orange-500 rounded inline-block"></span>
          {rd.coreDataTitle}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {report.dataPoints.map((dp) => {
            const dpMetric = metricTranslations[dp.metric]?.[lang] ?? dp.metric;
            const dpUnit = unitTranslations[dp.unit]?.[lang] ?? dp.unit;
            const dpChange = changeTranslations[dp.change]?.[lang] ?? dp.change;
            const dpPeriod = periodTranslations[dp.period]?.[lang] ?? dp.period;
            return (
              <div key={dp.metric} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-black text-gray-900 font-mono leading-none mb-1">
                  {dp.value}
                  <span className="text-sm font-normal text-gray-500 ml-0.5">{dpUnit}</span>
                </div>
                <div className="text-xs font-medium text-gray-700 mb-0.5">{dpMetric}</div>
                <div className="text-xs text-red-500 font-semibold">{dpChange}</div>
                <div className="text-xs text-gray-400">{dpPeriod}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 关键发现 */}
      <section className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-500 rounded inline-block"></span>
          {rd.keyFindingsTitle}
        </h2>
        <ul className="space-y-2">
          {displayKeyFindings.map((finding, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="flex-shrink-0 w-5 h-5 bg-orange-100 text-orange-600 rounded-full text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span className="leading-relaxed">{finding}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 报告正文（Markdown-like） */}
      <section className="mb-8 bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-base font-bold text-gray-700 mb-6 flex items-center gap-2">
          <span className="w-1 h-5 bg-green-500 rounded inline-block"></span>
          {rd.reportBodyTitle}
        </h2>
        <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
          {lang !== 'zh' && !hasLocalizedBody && (
            <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
              {lang === 'en' ? 'Note: The full report text below is available in Chinese. Key data and findings above have been translated.' :
               lang === 'ja' ? '注：以下のレポート本文は中国語で提供されています。上記の主要データと発見は翻訳済みです。' :
               'Nota: El texto completo del informe a continuación está disponible en chino. Los datos clave y hallazgos anteriores han sido traducidos.'}
            </div>
          )}
          {displayBody.trim().split('\n').map((line, i) => {
            if (line.startsWith('## ')) {
              return (
                <h3 key={i} className="text-lg font-bold text-gray-900 mt-8 mb-3 first:mt-0">
                  {line.replace('## ', '')}
                </h3>
              );
            }
            if (line.startsWith('### ')) {
              return (
                <h4 key={i} className="text-base font-bold text-gray-900 mt-5 mb-2">
                  {line.replace('### ', '')}
                </h4>
              );
            }
            if (line.startsWith('| ')) {
              return (
                <div key={i} className="font-mono text-xs bg-gray-50 px-3 py-1 border-b border-gray-100 overflow-x-auto whitespace-pre">
                  {line}
                </div>
              );
            }
            if (line.trim() === '') return <div key={i} className="h-2" />;
            return (
              <p key={i} className="mb-3 text-sm leading-relaxed text-gray-700">
                {line}
              </p>
            );
          })}
        </div>
      </section>

      {/* 方法论说明 */}
      <section className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-base font-bold text-blue-800 mb-4">{rd.methodologyTitle}</h2>
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-semibold text-gray-700">{rd.methodLabel}</span>
            <span className="text-gray-600">{displayMethodology}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">{rd.sampleLabel}</span>
            <span className="text-gray-600">{displaySampleSize}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">{rd.scopeLabel}</span>
            <span className="text-gray-600">{displayCoverageScope}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">{rd.sourceLabel}</span>
            <span className="text-gray-600">{rd.sourceValue}</span>
          </div>
        </div>
      </section>

      {/* 引用格式 */}
      <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-5">
        <h3 className="text-sm font-bold text-gray-700 mb-3">{rd.citationTitle}</h3>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-500 mb-1 font-medium">{rd.citationGB}</p>
            <code className="block text-xs text-gray-700 bg-white border border-gray-200 rounded p-2 leading-relaxed break-all">
              美团指数研究院. {report.title}[R/OL]. ({report.datePublished})[{new Date().toISOString().slice(0,10)}]. https://index.meituan.com/reports/{report.slug}
            </code>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1 font-medium">{rd.citationBib}</p>
            <code className="block text-xs text-gray-700 bg-white border border-gray-200 rounded p-2 leading-relaxed break-all whitespace-pre-wrap">{`@report{meituan_index_${report.slug.replace(/-/g,'_')},
  title     = {${report.title}},
  author    = {美团指数研究院},
  year      = {${report.datePublished.slice(0,4)}},
  month     = {${report.datePublished.slice(5,7)}},
  url       = {https://index.meituan.com/reports/${report.slug}},
  note      = {美团指数研究院，中国本地生活消费数据研究}
}`}</code>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1 font-medium">{rd.citationShort}</p>
            <code className="block text-xs text-gray-700 bg-white border border-gray-200 rounded p-2 leading-relaxed break-all">
              {lang === 'zh'
                ? `来源：美团指数研究院《${report.title}》（${report.datePublished}），https://index.meituan.com/reports/${report.slug}`
                : `Source: Meituan Index Research Institute "${displayTitle}" (${report.datePublished}), https://index.meituan.com/reports/${report.slug}`
              }
            </code>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {displayFaq && displayFaq.length > 0 && (
        <section className="mb-8" itemScope itemType="https://schema.org/FAQPage">
          <h2 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-purple-500 rounded inline-block"></span>
            {rd.faqTitle}
          </h2>
          <div className="space-y-3">
            {displayFaq.map(({ q, a }) => (
              <div
                key={q}
                className="bg-white border border-gray-200 rounded-xl p-5"
                itemScope
                itemType="https://schema.org/Question"
                itemProp="mainEntity"
              >
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2 text-sm" itemProp="name">
                  <span className="text-orange-500 font-black leading-none flex-shrink-0 mt-0.5">Q</span>
                  {q}
                </h3>
                <div
                  className="text-sm text-gray-600 leading-relaxed pl-5"
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
      )}

      {/* 相关报告 */}
      {relatedReportData.length > 0 && (
        <section>
          <h2 className="text-base font-bold text-gray-700 mb-4">{rd.relatedTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedReportData.map((related) => related && (
              <a
                key={related.slug}
                href={`/reports/${related.slug}`}
                className="group block p-4 bg-white border border-gray-200 rounded-xl hover:border-orange-200 hover:shadow-sm transition-all"
              >
                <span className="text-xs text-gray-400 block mb-1">
                  {categoryTranslations[related.category]?.[lang] ?? related.category}
                </span>
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors leading-snug">
                  {getLocalizedTitle(related, lang)}
                </h3>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
