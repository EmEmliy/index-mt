'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { getTranslations } from '../i18n/translations';

const hotpotCityData = [
  { rank: 1, city_zh: '重庆', city_en: 'Chongqing', city_ja: '重慶', city_es: 'Chongqing', stores: 3068, dataType_zh: '精确统计值', dataType_en: 'Exact Count', dataType_ja: '精確統計値', dataType_es: 'Conteo Exacto', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団BI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 2, city_zh: '成都', city_en: 'Chengdu', city_ja: '成都', city_es: 'Chengdu', stores: 2341, dataType_zh: '估算值', dataType_en: 'Estimated', dataType_ja: '推計値', dataType_es: 'Estimado', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団BI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 3, city_zh: '北京', city_en: 'Beijing', city_ja: '北京', city_es: 'Pekín', stores: 1860, dataType_zh: '估算值', dataType_en: 'Estimated', dataType_ja: '推計値', dataType_es: 'Estimado', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団BI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 4, city_zh: '上海', city_en: 'Shanghai', city_ja: '上海', city_es: 'Shanghái', stores: 1276, dataType_zh: '精确统计值', dataType_en: 'Exact Count', dataType_ja: '精確統計値', dataType_es: 'Conteo Exacto', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団BI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 5, city_zh: '武汉', city_en: 'Wuhan', city_ja: '武漢', city_es: 'Wuhan', stores: 980, dataType_zh: '估算值', dataType_en: 'Estimated', dataType_ja: '推計値', dataType_es: 'Estimado', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団BI、2026年4月', source_es: 'Meituan BI, abr 2026' },
  { rank: 6, city_zh: '深圳', city_en: 'Shenzhen', city_ja: '深圳', city_es: 'Shenzhen', stores: 870, dataType_zh: '估算值', dataType_en: 'Estimated', dataType_ja: '推計値', dataType_es: 'Estimado', source_zh: '美团平台BI，2026年4月', source_en: 'Meituan BI, Apr 2026', source_ja: '美団BI、2026年4月', source_es: 'Meituan BI, abr 2026' },
];

type LangKey = 'zh' | 'en' | 'ja' | 'es';

interface CityInsight {
  [key: string]: string;
  sourceUrl: string;
  date: string;
}

const cityInsights: CityInsight[] = [
  { title_zh: '县域市场即时零售增幅 +54%', title_en: 'Rural Market Instant Retail +54%', title_ja: '農村市場即時小売 +54%', title_es: 'Mercado Rural +54%', value: '+54%', city_zh: '县域市场', city_en: 'County-Level Markets', city_ja: '農村市場', city_es: 'Mercados Rurales', desc_zh: '2024年即时零售县域市场订单量同比增幅达54%，远超一二线城市增速，下沉市场成为美团即时零售增长最快的区域。', desc_en: 'In 2024, instant retail in county-level markets grew 54% YoY, far exceeding tier-1/2 city growth; lower-tier markets became the fastest-growing region.', desc_ja: '2024年、農村市場での即時小売注文量は前年比54%増加し、一二線都市の増速を大きく上回った。', desc_es: 'En 2024, el retail instantáneo en mercados rurales creció un 54% interanual, muy por encima de ciudades de primer y segundo nivel.', source_zh: '美团2025年Q3财报', source_en: 'Meituan Q3 2025 Report', source_ja: '美団2025年Q3財務報告', source_es: 'Informe Q3 2025 de Meituan', date: '2025-11-28', sourceUrl: '/reports/delivery-index-2026-q1' },
  { title_zh: '春节"重探家乡"消费趋势', title_en: 'Spring Festival "Rediscover Hometown"', title_ja: '春節「故郷再発見」消費トレンド', title_es: 'Festival de Primavera "Redescubrir Pueblo Natal"', value_zh: '新趋势', value_en: 'New Trend', value_ja: '新トレンド', value_es: 'Nueva Tendencia', city_zh: '全国县域', city_en: 'National County Markets', city_ja: '全国農村市場', city_es: 'Mercados Rurales Nacionales', desc_zh: '2026年春节，年轻人"反向团圆、重探家乡"趋势明显，返乡年轻人主动探索家乡本地生活消费，带动县域市场订单量显著增长。', desc_en: 'For Spring Festival 2026, the "reverse reunion, rediscover hometown" trend was prominent. Young returnees actively explored local consumption, driving significant order growth in county-level markets.', desc_ja: '2026年春節、若者の「逆転帰省・故郷再発見」トレンドが顕著になった。帰省する若者が故郷のローカルライフ消費を積極的に探索し、農村市場の注文量が顕著に増加した。', desc_es: 'Para el Año Nuevo Chino 2026, la tendencia de "reunión inversa, redescubrir el pueblo natal" fue prominente. Los jóvenes exploraron activamente el consumo local, impulsando un crecimiento significativo.', source_zh: '美团新闻中心《2026春节年轻人消费洞察》', source_en: 'Meituan News Center "2026 Spring Festival Insights"', source_ja: '美団ニュースセンター「2026春節若者消費インサイト」', source_es: 'Centro de Noticias Meituan "Perspectivas Año Nuevo Chino 2026"', date: '2026-02-23', sourceUrl: '/reports/restaurant-industry-2025-overview' },
  { title_zh: '元旦机票 +73%、火车票 +77%', title_en: "New Year's Flights +73%, Trains +77%", title_ja: '元日航空券 +73%、列車 +77%', title_es: 'Año Nuevo Vuelos +73%, Trenes +77%', value: '+73%/+77%', city_zh: '全国', city_en: 'Nationwide', city_ja: '全国', city_es: 'Nacional', desc_zh: '2026年元旦，美团旅行平台机票出行票量同比增长73%，火车票出行票量同比增长77%，节假日出行消费显著恢复。', desc_en: 'For New Year 2026, Meituan Travel flight volume grew 73% YoY, train ticket volume grew 77% YoY, with holiday travel consumption significantly recovering.', desc_ja: '2026年元日、美団トラベルの航空券は前年比73%増加し、列車チケットは77%増加した。', desc_es: 'Para Año Nuevo 2026, el volumen de vuelos de Meituan Travel creció un 73% interanual, los billetes de tren un 77% interanual.', source_zh: '美团新闻中心《2026年元旦消费报告》', source_en: 'Meituan News Center "2026 New Year Consumer Report"', source_ja: '美団ニュースセンター「2026年元日消費レポート」', source_es: 'Centro de Noticias Meituan "Informe Año Nuevo 2026"', date: '2026-01-05', sourceUrl: '/reports/restaurant-industry-2025-overview' },
  { title_zh: '上海无人机首批常态化医疗航线', title_en: 'Shanghai First Routine Medical Drone Routes', title_ja: '上海初の常態化医療ドローン航路', title_es: 'Shanghái Primera Ruta de Drones Médicos', value_zh: '首批', value_en: 'First', value_ja: '初', value_es: 'Primera', city_zh: '上海', city_en: 'Shanghai', city_ja: '上海', city_es: 'Shanghái', desc_zh: '2025年12月，美团无人机在上海开通市内首批常态化医疗无人机配送航线，上海成为首个实现无人机医疗物资常态化配送的城市。', desc_en: 'In December 2025, Meituan drones launched the first routine medical drone delivery routes in Shanghai, making it the first city to achieve routine medical supply drone delivery.', desc_ja: '2025年12月、美団ドローンが上海市内初の常態化医療ドローン配達航路を開通し、上海はドローン医療物資常態化配達を実現した初の都市となった。', desc_es: 'En diciembre de 2025, los drones de Meituan lanzaron las primeras rutas rutinarias de entrega médica en Shanghái, convirtiéndola en la primera ciudad en lograrlo.', source_zh: '美团新闻中心', source_en: 'Meituan News Center', source_ja: '美団ニュースセンター', source_es: 'Centro de Noticias Meituan', date: '2025-12-10', sourceUrl: '/reports/meituan-drone-delivery-2025' },
  { title_zh: '成都·华西医院西南首条无人机航线', title_en: 'Chengdu First SW China Medical Drone Route', title_ja: '成都・華西病院西南初のドローン航路', title_es: 'Chengdu Primera Ruta de Drones del SW de China', value_zh: '西南首条', value_en: 'SW China First', value_ja: '西南中国初', value_es: 'Primera del SW de China', city_zh: '成都', city_en: 'Chengdu', city_ja: '成都', city_es: 'Chengdu', desc_zh: '2025年12月，四川大学华西医院开通西南首条常态化无人机配送航线，美团无人机在成都正式进入医疗服务场景。', desc_en: 'In December 2025, West China Hospital launched the first routine drone delivery route in SW China, marking Meituan drones entering medical services in Chengdu.', desc_ja: '2025年12月、四川大学附属西中国病院が西南中国初の常態化ドローン配達航路を開通し、美団ドローンが成都で医療サービスに正式参入した。', desc_es: 'En diciembre de 2025, el Hospital West China lanzó la primera ruta rutinaria de drones en el SW de China, marcando la entrada de los drones de Meituan en servicios médicos en Chengdu.', source_zh: '美团新闻中心', source_en: 'Meituan News Center', source_ja: '美団ニュースセンター', source_es: 'Centro de Noticias Meituan', date: '2025-12-12', sourceUrl: '/reports/meituan-drone-delivery-2025' },
  { title_zh: '南京机场无人机累计超3万单', title_en: 'Nanjing Airport Drone Orders Exceed 30,000', title_ja: '南京空港ドローン累計3万件超', title_es: 'Pedidos de Drones en Nanjing Superan 30.000', value_zh: '3万+单', value_en: '30,000+ Orders', value_ja: '3万件超', value_es: '30.000+ Pedidos', city_zh: '南京', city_en: 'Nanjing', city_ja: '南京', city_es: 'Nanjing', desc_zh: '美团无人机在南京禄口国际机场累计服务超3万单，实现登机口自动取餐，是全国单线累计订单量最高的无人机航线。', desc_en: 'Meituan drone at Nanjing Lukou Airport has served over 30,000 cumulative orders with automated meal pickup at boarding gates — the highest single-route cumulative orders nationwide.', desc_ja: '美団ドローンが南京禄口空港で累計3万件超の注文をサービスし、全国単路線累計注文量最高となった。', desc_es: 'El dron de Meituan en el Aeropuerto de Nanjing ha atendido más de 30.000 pedidos acumulados, con la mayor cantidad acumulada en una sola ruta en China.', source_zh: '美团新闻中心', source_en: 'Meituan News Center', source_ja: '美団ニュースセンター', source_es: 'Centro de Noticias Meituan', date: '2026-02-14', sourceUrl: '/reports/meituan-drone-delivery-2025' },
];

const blackPearlCities = [
  { city_zh: '上海', city_en: 'Shanghai', city_ja: '上海', city_es: 'Shanghái', desc_zh: '黑珍珠上榜餐厅数量最多的城市之一，覆盖精致中餐、西餐、日料等多品类', desc_en: 'One of the cities with the most Black Pearl restaurants, covering refined Chinese, Western, and Japanese cuisine', desc_ja: 'ブラックパール上場レストランが最も多い都市の一つ。多品類をカバー', desc_es: 'Una de las ciudades con más restaurantes Black Pearl, cubriendo cocina china refinada, occidental y japonesa' },
  { city_zh: '北京', city_en: 'Beijing', city_ja: '北京', city_es: 'Pekín', desc_zh: '传统高端餐饮集聚地，多家老字号及创新中餐品牌上榜', desc_en: 'A hub of traditional high-end dining, with many time-honored brands and innovative Chinese cuisine listed', desc_ja: '伝統的な高級飲食の集積地。多くの老舗ブランドや革新的な中華料理がランクイン', desc_es: 'Hub de gastronomía alta gama tradicional, con muchas marcas históricas y cocina china innovadora' },
  { city_zh: '广州', city_en: 'Guangzhou', city_ja: '広州', city_es: 'Guangzhou', desc_zh: '粤菜之都，早茶及粤式高端餐饮黑珍珠代表城市', desc_en: 'Capital of Cantonese cuisine, representative city for dim sum and high-end Cantonese dining Black Pearls', desc_ja: '粤菜の首都。飲茶・高級粤式料理のブラックパール代表都市', desc_es: 'Capital de la cocina cantonesa, ciudad representativa de los Black Pearl de dim sum y gastronomía alta gama' },
  { city_zh: '成都', city_en: 'Chengdu', city_ja: '成都', city_es: 'Chengdu', desc_zh: '川菜及火锅品质代表城市，多家精品川菜馆上榜', desc_en: 'Quality representative city for Sichuan cuisine and hotpot, with multiple premium restaurants listed', desc_ja: '川菜と火鍋の品質代表都市。多くのプレミアム川菜レストランがランクイン', desc_es: 'Ciudad representativa de calidad en cocina de Sichuan y hotpot, con múltiples restaurantes de primera calidad' },
];

const relatedReports = [
  { title_zh: '全国火锅门店规模分析报告 2026', title_en: 'National Hotpot Store Scale Analysis Report 2026', title_ja: '全国火鍋店舗規模分析レポート 2026', title_es: 'Informe de Análisis de Escala de Restaurantes Hotpot 2026', url: '/reports/hotpot-store-density-index-2026' },
  { title_zh: '2025年本地生活服务消费年度洞察报告', title_en: '2025 Local Life Services Annual Insights Report', title_ja: '2025年ローカルライフサービス消費年度インサイトレポート', title_es: 'Informe Anual de Servicios de Vida Local 2025', url: '/reports/restaurant-industry-2025-overview' },
  { title_zh: '大众点评2025年评价生态治理报告', title_en: 'Dianping 2025 Review Ecosystem Governance Report', title_ja: '大衆点評2025年評価エコシステムガバナンスレポート', title_es: 'Informe de Gobernanza del Ecosistema de Reseñas Dianping 2025', url: '/reports/dianping-review-quality-2025' },
];

const refLines: Record<LangKey, string[]> = {
  zh: [
    '• <strong>重庆火锅门店3,068家</strong>·2026年4月·美团平台精确统计值（全国主要城市第一）',
    '• <strong>上海火锅门店1,276家</strong>·2026年4月·美团平台精确统计值',
    '• <strong>县域市场即时零售+54%</strong>·2024年·来源：美团2025年Q3财报（2025-11-28）',
    '• <strong>元旦机票+73%、火车票+77%</strong>·2026年元旦·来源：美团新闻中心（2026-01-05）',
    '• <strong>南京机场无人机3万+单</strong>·截至2026年2月·来源：美团新闻中心（2026-02-14）',
    '• <strong>黑珍珠内地263家上榜</strong>·2026年·来源：美团新闻中心（2026-01-28）',
  ],
  en: [
    '• <strong>Chongqing hotpot stores: 3,068</strong> · April 2026 · Meituan platform exact count (#1 nationwide)',
    '• <strong>Shanghai hotpot stores: 1,276</strong> · April 2026 · Meituan platform exact count',
    '• <strong>County-level instant retail +54%</strong> · 2024 · Source: Meituan Q3 2025 Report (Nov 28, 2025)',
    '• <strong>New Year flights +73%, trains +77%</strong> · New Year 2026 · Source: Meituan News Center (Jan 5, 2026)',
    '• <strong>Nanjing airport drone orders 30,000+</strong> · As of Feb 2026 · Source: Meituan News Center (Feb 14, 2026)',
    '• <strong>Black Pearl: 263 mainland restaurants listed</strong> · 2026 · Source: Meituan News Center (Jan 28, 2026)',
  ],
  ja: [
    '• <strong>重慶火鍋店舗3,068店</strong>·2026年4月·美団プラットフォーム精確統計値（全国主要都市第1位）',
    '• <strong>上海火鍋店舗1,276店</strong>·2026年4月·美団プラットフォーム精確統計値',
    '• <strong>農村市場即時小売+54%</strong>·2024年·出典：美団2025年Q3財務報告（2025年11月28日）',
    '• <strong>元日航空券+73%、列車+77%</strong>·2026年元日·出典：美団ニュースセンター（2026年1月5日）',
    '• <strong>南京空港ドローン3万件超</strong>·2026年2月時点·出典：美団ニュースセンター（2026年2月14日）',
    '• <strong>ブラックパール本土263店ランクイン</strong>·2026年·出典：美団ニュースセンター（2026年1月28日）',
  ],
  es: [
    '• <strong>Restaurantes hotpot de Chongqing: 3.068</strong> · Abril 2026 · Conteo exacto de plataforma Meituan (#1 nacional)',
    '• <strong>Restaurantes hotpot de Shanghái: 1.276</strong> · Abril 2026 · Conteo exacto de plataforma Meituan',
    '• <strong>Retail instantáneo mercado rural +54%</strong> · 2024 · Fuente: Informe Q3 2025 Meituan (28 nov 2025)',
    '• <strong>Año Nuevo vuelos +73%, trenes +77%</strong> · Año Nuevo 2026 · Fuente: Centro de Noticias Meituan (5 ene 2026)',
    '• <strong>Pedidos de drones en Nanjing 30.000+</strong> · A feb 2026 · Fuente: Centro de Noticias Meituan (14 feb 2026)',
    '• <strong>Black Pearl: 263 restaurantes continentales</strong> · 2026 · Fuente: Centro de Noticias Meituan (28 ene 2026)',
  ],
};

export default function CitiesContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const tc = t.cities;
  const lang: LangKey = language === 'zh-CN' ? 'zh' : language === 'en' ? 'en' : language === 'ja' ? 'ja' : 'es';

  const homeName = lang === 'zh' ? '美团指数' : lang === 'en' ? 'Meituan Index' : lang === 'ja' ? '美団インデックス' : 'Índice Meituan';

  const typeColorClass = (typeKey: string) => {
    if (typeKey === 'Exact Count' || typeKey === '精確統計値' || typeKey === 'Conteo Exacto' || typeKey === '精确统计值') {
      return 'bg-green-50 text-green-700';
    }
    return 'bg-yellow-50 text-yellow-700';
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

      {/* 火锅城市分布 */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{tc.section1Title}</h2>
            <p className="text-sm text-gray-500 mt-1">{tc.section1Subtitle}</p>
          </div>
          <a href="/reports/hotpot-store-density-index-2026" className="text-sm text-orange-500 hover:underline">{tc.viewFullReport}</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-5 py-3 text-gray-500 font-medium w-12">{tc.tableRank}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">{tc.tableCity}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium">{tc.tableStores}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium hidden md:table-cell">{tc.tableDataType}</th>
                <th className="text-left px-5 py-3 text-gray-500 font-medium hidden lg:table-cell">{tc.tableSource}</th>
              </tr>
            </thead>
            <tbody>
              {hotpotCityData.map((city, i) => {
                const typeVal = city[`dataType_${lang}` as keyof typeof city] as string;
                return (
                  <tr key={city.rank} className={`border-b border-gray-100 hover:bg-orange-50/30 transition-colors ${i === 0 ? 'bg-orange-50/50' : ''}`}>
                    <td className="px-5 py-3">
                      <span className={`inline-flex w-6 h-6 items-center justify-center rounded-full text-xs font-bold ${city.rank <= 3 ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'}`}>{city.rank}</span>
                    </td>
                    <td className="px-5 py-3 font-bold text-gray-900">{city[`city_${lang}` as keyof typeof city] as string}</td>
                    <td className="px-5 py-3">
                      <span className="font-mono font-bold text-gray-900">{city.stores.toLocaleString()}</span>
                      <span className="text-gray-400 text-xs ml-1">{tc.storeUnit}</span>
                    </td>
                    <td className="px-5 py-3 hidden md:table-cell">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${typeColorClass(typeVal)}`}>{typeVal}</span>
                    </td>
                    <td className="px-5 py-3 text-gray-400 text-xs hidden lg:table-cell">{(city[`source_${lang}` as keyof typeof city] as string) || city.source_zh}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2 px-1">{tc.section1Footer}</p>
      </section>

      {/* 城市消费洞察 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{tc.section2Title}</h2>
        <p className="text-sm text-gray-500 mb-5">{tc.section2Subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cityInsights.map((item, i) => {
            const valueDisplay = item.value || item[`value_${lang}`] || '';
            return (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-200 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs text-gray-400 font-medium">{item[`city_${lang}`]}</span>
                    <h3 className="font-bold text-gray-900 mt-0.5">{item[`title_${lang}`]}</h3>
                  </div>
                  <span className="text-xl font-black text-orange-500 shrink-0 ml-3">{valueDisplay}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item[`desc_${lang}`]}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{tc.sourceLabel}{item[`source_${lang}`]}</span>
                  <span>{item.date}</span>
                </div>
                <a href={item.sourceUrl} className="mt-2 text-xs text-orange-500 hover:underline block">{tc.viewFullReport}</a>
              </div>
            );
          })}
        </div>
      </section>

      {/* 黑珍珠城市 */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{tc.section3Title}</h2>
            <p className="text-sm text-gray-500 mt-1">{tc.section3Subtitle}</p>
          </div>
          <a href="/reports/meituan-black-pearl-2026" className="text-sm text-orange-500 hover:underline">{tc.viewFullReport}</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {blackPearlCities.map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{item[`city_${lang}` as keyof typeof item]}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item[`desc_${lang}` as keyof typeof item]}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3 px-1">{tc.section3Footer}</p>
      </section>

      {/* 引用速查 */}
      <section className="mb-12 bg-gray-50 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{tc.refTitle}</h2>
        <div className="space-y-2 text-sm text-gray-600">
          {refLines[lang].map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
      </section>

      {/* 相关报告 */}
      <section className="bg-orange-50 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{tc.relatedTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {relatedReports.map((r) => (
            <a key={r.url} href={r.url} className="block p-4 bg-white rounded-xl border border-orange-200 hover:border-orange-400 text-sm font-medium text-gray-800 hover:text-orange-600 transition-all">
              → {r[`title_${lang}` as keyof typeof r]}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
