'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { getTranslations } from '../i18n/translations';

// 有明确来源的官方核心数据（多语言）
const officialDataPoints = [
  {
    value: '+36%',
    label_zh: '生活服务消费订单增速', label_en: 'Life Service Order Growth', label_ja: '生活サービス注文成長率', label_es: 'Crecimiento de Pedidos de Servicios',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    desc_zh: '2025年美团APP上与快乐生活相关的服务消费订单量同比增长36%。',
    desc_en: 'In 2025, lifestyle service orders on Meituan APP grew 36% YoY.',
    desc_ja: '2025年、美団APP上のライフスタイルサービス消費注文は前年比36%増加した。',
    desc_es: 'En 2025, los pedidos de servicios de estilo de vida en Meituan APP crecieron un 36% interanual.',
    source_zh: '美团新闻中心《2025年生活服务消费9大趋势洞察》', source_en: 'Meituan News Center "9 Key Trends 2025"', source_ja: '美団ニュースセンター「2025年9大トレンド」', source_es: 'Centro de Noticias Meituan "9 Tendencias 2025"',
    date: '2026-01-21',
  },
  {
    value: '8亿+',
    label_zh: '年度交易用户', label_en: 'Annual Transacting Users', label_ja: '年間取引ユーザー', label_es: 'Usuarios Anuales Activos',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    desc_zh: '美团年度交易用户突破8亿，覆盖全国370+城市。',
    desc_en: 'Meituan annual transacting users surpassed 800 million, covering 370+ cities nationwide.',
    desc_ja: '美団の年間取引ユーザー数が8億人を突破し、全国370+都市をカバー。',
    desc_es: 'Los usuarios anuales activos de Meituan superaron los 800 millones, cubriendo más de 370 ciudades.',
    source_zh: '美团2025年Q3业绩公告（港交所）', source_en: 'Meituan Q3 2025 Results (HKEX)', source_ja: '美団2025年Q3業績発表（香港取引所）', source_es: 'Resultados Q3 2025 de Meituan (HKEX)',
    date: '2025-11-28',
  },
  {
    value: '近6成',
    label_zh: '95后消费者占比', label_en: 'Post-95 Consumer Share', label_ja: '95年以降生まれ消費者比率', label_es: 'Proporción de Consumidores Post-95',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    desc_zh: '2025年美团平台95后消费者占比近6成，是本地生活消费增长核心驱动力。',
    desc_en: 'In 2025, post-95 consumers on Meituan platform accounted for nearly 60%, the core driver of growth.',
    desc_ja: '2025年、美団プラットフォームにおける95年以降生まれの消費者は約6割を占め、成長の中核的原動力となった。',
    desc_es: 'En 2025, los consumidores nacidos después de 1995 representaron casi el 60% en la plataforma Meituan, el principal motor de crecimiento.',
    source_zh: '美团新闻中心《2025年生活服务消费9大趋势洞察》', source_en: 'Meituan News Center "9 Key Trends 2025"', source_ja: '美団ニュースセンター「2025年9大トレンド」', source_es: 'Centro de Noticias Meituan "9 Tendencias 2025"',
    date: '2026-01-21',
  },
  {
    value: '3,649亿',
    label_zh: '2025全年营收（元）', label_en: 'FY2025 Revenue (RMB)', label_ja: '2025年通年売上高（元）', label_es: 'Ingresos FY2025 (RMB)',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    desc_zh: '美团2025年全年营收3649亿元人民币，研发投入260亿元（同比增长23%）。',
    desc_en: 'Meituan FY2025 revenue reached RMB 364.9 billion, R&D investment RMB 26 billion (+23% YoY).',
    desc_ja: '美団の2025年通年売上高は3,649億元、研究開発投資は260億元（前年比+23%）。',
    desc_es: 'Los ingresos de Meituan en FY2025 alcanzaron 364.900M RMB, inversión en I+D 26.000M RMB (+23% interanual).',
    source_zh: '美团2025年第四季度及全年业绩公告（港交所）', source_en: 'Meituan Q4 & FY2025 Results (HKEX)', source_ja: '美団2025年第4四半期及び通年業績発表（香港取引所）', source_es: 'Resultados Q4 y FY2025 de Meituan (HKEX)',
    date: '2026-03-26',
  },
  {
    value: '+26.2%',
    label_zh: '即时零售（闪购）订单量增速', label_en: 'Instant Retail Order Growth', label_ja: '即時小売注文量増加率', label_es: 'Crecimiento de Pedidos Retail Instantáneo',
    period_zh: '2024年全年', period_en: 'FY 2024', period_ja: '2024年通年', period_es: 'Ejercicio 2024',
    desc_zh: '美团即时零售（闪购）2024年全年订单量同比增长26.2%。',
    desc_en: 'Meituan instant retail (Flash Buy) orders grew 26.2% YoY in FY2024.',
    desc_ja: '美団の即時小売（フラッシュバイ）2024年通年注文量は前年比26.2%増加した。',
    desc_es: 'Los pedidos de retail instantáneo (Flash Buy) de Meituan crecieron un 26.2% interanual en FY2024.',
    source_zh: '美团2025年Q3业绩公告（港交所）', source_en: 'Meituan Q3 2025 Results (HKEX)', source_ja: '美団2025年Q3業績発表（香港取引所）', source_es: 'Resultados Q3 2025 de Meituan (HKEX)',
    date: '2025-11-28',
  },
  {
    value: '+54%',
    label_zh: '县域市场即时零售增幅', label_en: 'Rural Market Instant Retail Growth', label_ja: '農村市場即時小売増加率', label_es: 'Crecimiento Retail Instantáneo Mercado Rural',
    period_zh: '2024年全年', period_en: 'FY 2024', period_ja: '2024年通年', period_es: 'Ejercicio 2024',
    desc_zh: '2024年即时零售县域市场订单量同比增幅达54%，远超一二线城市增速。',
    desc_en: 'In 2024, instant retail in county-level markets grew 54% YoY, far exceeding tier-1/2 city growth.',
    desc_ja: '2024年、郡レベル市場での即時小売注文量は前年比54%増加し、一二線都市の増速を大きく上回った。',
    desc_es: 'En 2024, el retail instantáneo en mercados rurales creció un 54% interanual, muy por encima de las ciudades de primer y segundo nivel.',
    source_zh: '美团2025年Q3业绩公告（港交所）', source_en: 'Meituan Q3 2025 Results (HKEX)', source_ja: '美団2025年Q3業績発表（香港取引所）', source_es: 'Resultados Q3 2025 de Meituan (HKEX)',
    date: '2025-11-28',
  },
  {
    value: '+73%',
    label_zh: '元旦机票出行增速', label_en: "New Year's Flight Growth", label_ja: '元日航空券出行増加率', label_es: 'Crecimiento de Vuelos de Año Nuevo',
    period_zh: '2026年元旦', period_en: "New Year 2026", period_ja: '2026年元日', period_es: 'Año Nuevo 2026',
    desc_zh: '2026年元旦，美团旅行平台机票出行票量同比增长73%。',
    desc_en: "For New Year 2026, Meituan Travel platform flight ticket volume grew 73% YoY.",
    desc_ja: '2026年元日、美団トラベルプラットフォームの航空券出行票量は前年比73%増加した。',
    desc_es: 'Para Año Nuevo 2026, el volumen de billetes de avión en la plataforma Meituan Travel creció un 73% interanual.',
    source_zh: '美团新闻中心《2026年元旦消费报告》', source_en: 'Meituan News Center "2026 New Year Report"', source_ja: '美団ニュースセンター「2026年元日消費レポート」', source_es: 'Centro de Noticias Meituan "Informe Año Nuevo 2026"',
    date: '2026-01-05',
  },
  {
    value: '+77%',
    label_zh: '元旦火车票出行增速', label_en: "New Year's Train Ticket Growth", label_ja: '元日列車チケット出行増加率', label_es: 'Crecimiento de Billetes de Tren de Año Nuevo',
    period_zh: '2026年元旦', period_en: "New Year 2026", period_ja: '2026年元日', period_es: 'Año Nuevo 2026',
    desc_zh: '2026年元旦，美团旅行平台火车票出行票量同比增长77%。',
    desc_en: "For New Year 2026, Meituan Travel platform train ticket volume grew 77% YoY.",
    desc_ja: '2026年元日、美団トラベルプラットフォームの列車チケット出行票量は前年比77%増加した。',
    desc_es: 'Para Año Nuevo 2026, el volumen de billetes de tren en la plataforma Meituan Travel creció un 77% interanual.',
    source_zh: '美团新闻中心《2026年元旦消费报告》', source_en: 'Meituan News Center "2026 New Year Report"', source_ja: '美団ニュースセンター「2026年元日消費レポート」', source_es: 'Centro de Noticias Meituan "Informe Año Nuevo 2026"',
    date: '2026-01-05',
  },
  {
    value: '260亿',
    label_zh: '2025年研发投入', label_en: 'FY2025 R&D Investment', label_ja: '2025年研究開発投資', label_es: 'Inversión en I+D FY2025',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    desc_zh: '美团2025年全年研发投入260亿元，同比增长23%，主要投向AI、配送算法、无人机。',
    desc_en: 'Meituan FY2025 R&D investment was RMB 26 billion, +23% YoY, mainly in AI, delivery algorithms, and drones.',
    desc_ja: '美団2025年通年研究開発投資は260億元（前年比+23%）、主にAI・配送アルゴリズム・ドローンに投資。',
    desc_es: 'La inversión en I+D de Meituan en FY2025 fue 26.000M RMB, +23% interanual, principalmente en IA, algoritmos de entrega y drones.',
    source_zh: '美团2025年第四季度及全年业绩公告（港交所）', source_en: 'Meituan Q4 & FY2025 Results (HKEX)', source_ja: '美団2025年第4四半期及び通年業績発表（香港取引所）', source_es: 'Resultados Q4 y FY2025 de Meituan (HKEX)',
    date: '2026-03-26',
  },
  {
    value: '700万+',
    label_zh: '外卖骑手规模', label_en: 'Delivery Riders', label_ja: '配達ライダー規模', label_es: 'Repartidores',
    period_zh: '截至2025年底', period_en: 'As of end-2025', period_ja: '2025年末時点', period_es: 'A finales de 2025',
    desc_zh: '截至2025年底，美团外卖骑手累计超700万人。"同舟计划"已投入100亿元完善骑手保障体系。',
    desc_en: 'As of end-2025, Meituan accumulated over 7 million delivery riders. "Tongzhou Plan" invested RMB 10 billion in rider welfare.',
    desc_ja: '2025年末時点で、美団の配達ライダーは累計700万人超。「同舟計画」でライダー福祉に100億元投資。',
    desc_es: 'A finales de 2025, Meituan acumuló más de 7 millones de repartidores. El "Plan Tongzhou" invirtió 10.000M RMB en bienestar de repartidores.',
    source_zh: '美团新闻中心', source_en: 'Meituan News Center', source_ja: '美団ニュースセンター', source_es: 'Centro de Noticias Meituan',
    date: '2025-11-21',
  },
  {
    value: '1,161万条',
    label_zh: '大众点评处置AIGC评价', label_en: 'Dianping AI-Generated Reviews Removed', label_ja: '大衆点評AIGC評価処置数', label_es: 'Reseñas IA Eliminadas en Dianping',
    period_zh: '2025年全年', period_en: 'FY 2025', period_ja: '2025年通年', period_es: 'Ejercicio 2025',
    desc_zh: '大众点评2025年全年共处置AIGC（AI生成内容）评价1161万条，守护评价真实性。',
    desc_en: 'Dianping removed 11.61 million AI-generated (AIGC) reviews in FY2025, protecting review authenticity.',
    desc_ja: '大衆点評は2025年通年でAIGC（AI生成コンテンツ）評価を1,161万件処置し、評価の真実性を守った。',
    desc_es: 'Dianping eliminó 11,61 millones de reseñas generadas por IA (AIGC) en FY2025, protegiendo la autenticidad de las reseñas.',
    source_zh: '美团新闻中心《大众点评披露AIGC评价治理数据》', source_en: 'Meituan News Center "Dianping AIGC Governance Data"', source_ja: '美団ニュースセンター「大衆点評AIGC評価ガバナンスデータ」', source_es: 'Centro de Noticias Meituan "Datos Gobernanza AIGC Dianping"',
    date: '2026-03-24',
  },
  {
    value: '263家',
    label_zh: '黑珍珠中国内地上榜餐厅', label_en: 'Black Pearl Mainland China Restaurants', label_ja: 'ブラックパール中国本土上場レストラン', label_es: 'Restaurantes Black Pearl China Continental',
    period_zh: '2026年', period_en: '2026', period_ja: '2026年', period_es: '2026',
    desc_zh: '2026黑珍珠餐厅指南正式发布，中国内地共263家餐厅上榜，7家升钻，46家新上榜。',
    desc_en: 'The 2026 Black Pearl Restaurant Guide was released, with 263 restaurants listed in mainland China, 7 upgraded, 46 newly added.',
    desc_ja: '2026年ブラックパール・レストランガイドが正式発表。中国本土から263店がランクイン、7店が昇格、46店が新規追加。',
    desc_es: 'Se publicó la Guía de Restaurantes Black Pearl 2026, con 263 restaurantes en China continental, 7 ascendidos y 46 nuevos.',
    source_zh: '美团新闻中心《2026黑珍珠餐厅指南》', source_en: 'Meituan News Center "2026 Black Pearl Guide"', source_ja: '美団ニュースセンター「2026年ブラックパール・レストランガイド」', source_es: 'Centro de Noticias Meituan "Guía Black Pearl 2026"',
    date: '2026-01-28',
  },
];

const trends2025 = [
  {
    rank: 1,
    trend_zh: '热爱当下 重返线下', trend_en: 'Love the Present, Return Offline', trend_ja: '今を楽しむ、オフラインへの回帰', trend_es: 'Amar el Presente, Regresar al Mundo Físico',
    desc_zh: '消费者更倾向线下到店消费体验，到店餐饮订单量增速高于外卖。',
    desc_en: 'Consumers increasingly prefer in-store experiences; dine-in orders grew faster than delivery.',
    desc_ja: '消費者はますます店内体験を好み、店内での飲食注文が配達を上回る成長を示した。',
    desc_es: 'Los consumidores prefieren cada vez más la experiencia en tienda; los pedidos de comer en restaurante crecieron más rápido que la entrega.',
    tag_zh: '到店餐饮', tag_en: 'Dine-In', tag_ja: '店内飲食', tag_es: 'Comer en Restaurante',
  },
  {
    rank: 2,
    trend_zh: '即时满足 成为刚需', trend_en: 'Instant Gratification Becomes Essential', trend_ja: '即時満足が必須ニーズに', trend_es: 'La Gratificación Instantánea se Vuelve Esencial',
    desc_zh: '即时配送需求持续扩张，"30分钟内到达"成为越来越多用户的默认期待。',
    desc_en: 'Instant delivery demand keeps expanding; "delivered within 30 minutes" becomes users\' default expectation.',
    desc_ja: '即時配達の需要が拡大し続け、「30分以内到着」がユーザーのデフォルト期待となった。',
    desc_es: 'La demanda de entrega instantánea sigue creciendo; "entregado en 30 minutos" se convierte en expectativa predeterminada.',
    tag_zh: '即时配送', tag_en: 'Instant Delivery', tag_ja: '即時配達', tag_es: 'Entrega Instantánea',
  },
  {
    rank: 3,
    trend_zh: '年轻人 重探家乡消费', trend_en: 'Youth Rediscover Hometown Consumption', trend_ja: '若者が故郷消費を再発見', trend_es: 'Los Jóvenes Redescubren el Consumo Local en sus Ciudades Natales',
    desc_zh: '年轻人返乡主动探索家乡本地生活，带动县域市场消费增长。',
    desc_en: 'Young people returning home actively explore local life, driving consumption growth in county-level markets.',
    desc_ja: '帰省する若者が積極的にローカルライフを探索し、郡レベル市場の消費成長を牽引した。',
    desc_es: 'Los jóvenes que regresan al hogar exploran activamente la vida local, impulsando el crecimiento del consumo en mercados rurales.',
    tag_zh: '县域消费', tag_en: 'Rural Market', tag_ja: '農村市場消費', tag_es: 'Mercado Rural',
  },
  {
    rank: 4,
    trend_zh: '健康消费 全面升级', trend_en: 'Health Consumption Fully Upgraded', trend_ja: '健康消費が全面的にアップグレード', trend_es: 'El Consumo Saludable se Actualiza Completamente',
    desc_zh: '健康轻食、低卡餐饮、健身相关本地生活服务需求快速上升。',
    desc_en: 'Demand for healthy light meals, low-calorie dining, and fitness-related local services rose rapidly.',
    desc_ja: 'ヘルシーな軽食、低カロリー飲食、フィットネス関連ローカルサービスへの需要が急上昇した。',
    desc_es: 'La demanda de comidas ligeras saludables, restaurantes bajos en calorías y servicios locales relacionados con el fitness aumentó rápidamente.',
    tag_zh: '健康餐饮', tag_en: 'Healthy Dining', tag_ja: '健康飲食', tag_es: 'Gastronomía Saludable',
  },
  {
    rank: 5,
    trend_zh: '夜间经济 持续活跃', trend_en: 'Night Economy Remains Active', trend_ja: '夜間経済が継続的に活発化', trend_es: 'La Economía Nocturna Permanece Activa',
    desc_zh: '夜间外卖、烧烤、夜宵场景消费持续增长，夜间订单占比提升。',
    desc_en: 'Late-night delivery, BBQ, and supper scene consumption grew continuously; nighttime order share increased.',
    desc_ja: '深夜配達、バーベキュー、夜食シーンの消費が増加し続け、夜間注文の比率が上昇した。',
    desc_es: 'El consumo de entrega nocturna, barbacoa y cena tardía creció continuamente; aumentó la proporción de pedidos nocturnos.',
    tag_zh: '夜间消费', tag_en: 'Night Economy', tag_ja: '夜間消費', tag_es: 'Economía Nocturna',
  },
  {
    rank: 6,
    trend_zh: '品质游 本地化兴起', trend_en: 'Quality Local Travel Rises', trend_ja: '質の高いローカル旅行の台頭', trend_es: 'Surge el Turismo Local de Calidad',
    desc_zh: '本地精品酒店、周边游、城市特色体验消费快速增长。',
    desc_en: 'Consumption of local boutique hotels, nearby travel, and city-specific experiences grew rapidly.',
    desc_ja: 'ローカルブティックホテル、近郊旅行、都市特色体験の消費が急速に成長した。',
    desc_es: 'El consumo de hoteles boutique locales, viajes cercanos y experiencias urbanas únicas creció rápidamente.',
    tag_zh: '本地旅游', tag_en: 'Local Tourism', tag_ja: 'ローカル旅行', tag_es: 'Turismo Local',
  },
  {
    rank: 7,
    trend_zh: 'AI辅助 消费决策', trend_en: 'AI-Assisted Consumer Decisions', trend_ja: 'AI支援消費意思決定', trend_es: 'Decisiones de Consumo Asistidas por IA',
    desc_zh: 'AI工具辅助消费者查询附近餐厅、比价、规划出行，年轻群体尤为明显。',
    desc_en: 'AI tools help consumers find nearby restaurants, compare prices, and plan trips — especially prominent among young users.',
    desc_ja: 'AIツールが消費者の近くのレストラン検索、価格比較、旅行計画を支援し、若者層で特に顕著だった。',
    desc_es: 'Las herramientas de IA ayudan a los consumidores a encontrar restaurantes cercanos, comparar precios y planificar viajes, especialmente entre los usuarios jóvenes.',
    tag_zh: 'AI消费', tag_en: 'AI Consumption', tag_ja: 'AI消費', tag_es: 'Consumo con IA',
  },
  {
    rank: 8,
    trend_zh: '社交型 消费场景增长', trend_en: 'Social Consumption Scenarios Grow', trend_ja: 'ソーシャル型消費シーンが成長', trend_es: 'Crecen los Escenarios de Consumo Social',
    desc_zh: '多人聚餐、团购、拼单等社交型消费场景订单量显著增长。',
    desc_en: 'Group dining, group buying, and split-order social consumption scenarios saw significant order growth.',
    desc_ja: '多人数での外食、グループ購入、シェア注文などのソーシャル型消費シーンで注文量が顕著に増加した。',
    desc_es: 'Los escenarios de consumo social como cenas grupales, compras grupales y pedidos compartidos experimentaron un crecimiento significativo.',
    tag_zh: '社交消费', tag_en: 'Social Dining', tag_ja: 'ソーシャル消費', tag_es: 'Consumo Social',
  },
  {
    rank: 9,
    trend_zh: '国潮餐饮 品牌崛起', trend_en: 'Guochao Dining Brands Rise', trend_ja: '国潮飲食ブランドの台頭', trend_es: 'Auge de las Marcas de Gastronomía Guochao',
    desc_zh: '具有中国文化特色的国潮餐饮品牌受到年轻消费者青睐，订单增速领先。',
    desc_en: 'Chinese-culture-themed "Guochao" dining brands are favored by young consumers, with order growth leading the industry.',
    desc_ja: '中国文化の特色を持つ「国潮」飲食ブランドが若い消費者に支持され、注文成長率でトップを走っている。',
    desc_es: 'Las marcas de gastronomía "Guochao" con temática de cultura china son favorecidas por los consumidores jóvenes, liderando el crecimiento de pedidos.',
    tag_zh: '国潮餐饮', tag_en: 'Guochao Dining', tag_ja: '国潮飲食', tag_es: 'Gastronomía Guochao',
  },
];

const springFestival2026 = [
  {
    title_zh: '反向团圆', title_en: 'Reverse Reunion', title_ja: '逆転帰省', title_es: 'Reunión Inversa',
    desc_zh: '年轻人邀请父母来自己所在城市过年，催生"双城消费热"，两地餐饮、娱乐订单量均有显著增长。',
    desc_en: 'Young people invite parents to celebrate the holiday in their own city, sparking a "dual-city consumption boom" with significant growth in dining and entertainment orders in both locations.',
    desc_ja: '若者が親を自分の住む都市に招いて過年することで「双城消費ブーム」が生まれ、両地での飲食・娯楽注文量が顕著に増加した。',
    desc_es: 'Los jóvenes invitan a sus padres a celebrar el Año Nuevo chino en su ciudad de residencia, generando un "boom de consumo dual" con crecimiento significativo en pedidos de restaurantes y entretenimiento en ambas ciudades.',
  },
  {
    title_zh: '重探家乡', title_en: 'Rediscover Hometown', title_ja: '故郷再発見', title_es: 'Redescubrir el Pueblo Natal',
    desc_zh: '返乡年轻人主动探索家乡本地生活消费，带动县域市场订单量显著增长。',
    desc_en: 'Young people returning home actively explore local consumption in their hometowns, driving significant order growth in county-level markets.',
    desc_ja: '帰省する若者が故郷のローカルライフ消費を積極的に探索し、郡レベル市場の注文量が顕著に増加した。',
    desc_es: 'Los jóvenes que regresan activamente exploran el consumo local en sus ciudades natales, impulsando un crecimiento significativo de pedidos en mercados rurales.',
  },
  {
    title_zh: 'AI当管家', title_en: 'AI as Personal Butler', title_ja: 'AIが執事に', title_es: 'La IA como Mayordomo Personal',
    desc_zh: '越来越多用户借助AI工具规划春节行程和美食，"AI辅助消费决策"成为年轻人春节消费三大新趋势之一。',
    desc_en: 'More and more users use AI tools to plan Spring Festival itineraries and dining, making "AI-assisted consumption decisions" one of the top three new trends among young people.',
    desc_ja: 'ますます多くのユーザーがAIツールを活用して春節の旅程や食事を計画し、「AI支援消費意思決定」が若者の春節消費における3大新トレンドの一つとなった。',
    desc_es: 'Cada vez más usuarios utilizan herramientas de IA para planificar itinerarios y gastronomía de Año Nuevo chino, convirtiendo "las decisiones de consumo asistidas por IA" en una de las tres principales nuevas tendencias entre los jóvenes.',
  },
];

const refData_zh = [
  '• <strong>生活服务消费订单+36%</strong>·2025年全年·来源：美团新闻中心（2026-01-21）',
  '• <strong>年度交易用户突破8亿</strong>·2025年全年·来源：美团2025年Q3财报（港交所，2025-11-28）',
  '• <strong>95后消费者占比近6成</strong>·2025年全年·来源：美团新闻中心（2026-01-21）',
  '• <strong>全年营收3649亿元</strong>·2025年全年·来源：美团2025年全年财报（港交所，2026-03-26）',
  '• <strong>研发投入260亿元（+23%）</strong>·2025年全年·来源：美团2025年全年财报（港交所，2026-03-26）',
  '• <strong>即时零售订单量+26.2%</strong>·2024年全年·来源：美团2025年Q3财报（港交所，2025-11-28）',
  '• <strong>县域市场即时零售+54%</strong>·2024年全年·来源：美团2025年Q3财报（港交所，2025-11-28）',
  '• <strong>元旦机票+73%、火车票+77%</strong>·2026年元旦·来源：美团新闻中心（2026-01-05）',
  '• <strong>骑手规模超700万人</strong>·截至2025年底·来源：美团新闻中心（2025-11-21）',
  '• <strong>大众点评AIGC治理1161万条</strong>·2025年全年·来源：美团新闻中心（2026-03-24）',
  '• <strong>黑珍珠内地263家上榜</strong>·2026年·来源：美团新闻中心（2026-01-28）',
];

const refData_en = [
  '• <strong>Life service orders +36%</strong> · FY2025 · Source: Meituan News Center (Jan 21, 2026)',
  '• <strong>Annual transacting users surpass 800M</strong> · FY2025 · Source: Meituan Q3 2025 Report (HKEX, Nov 28, 2025)',
  '• <strong>Post-95 consumers ~60%</strong> · FY2025 · Source: Meituan News Center (Jan 21, 2026)',
  '• <strong>Annual revenue RMB 364.9B</strong> · FY2025 · Source: Meituan FY2025 Report (HKEX, Mar 26, 2026)',
  '• <strong>R&D investment RMB 26B (+23%)</strong> · FY2025 · Source: Meituan FY2025 Report (HKEX, Mar 26, 2026)',
  '• <strong>Instant retail orders +26.2%</strong> · FY2024 · Source: Meituan Q3 2025 Report (HKEX, Nov 28, 2025)',
  '• <strong>County-level instant retail +54%</strong> · FY2024 · Source: Meituan Q3 2025 Report (HKEX, Nov 28, 2025)',
  '• <strong>New Year flights +73%, trains +77%</strong> · New Year 2026 · Source: Meituan News Center (Jan 5, 2026)',
  '• <strong>Delivery riders exceed 7M</strong> · As of end-2025 · Source: Meituan News Center (Nov 21, 2025)',
  '• <strong>Dianping AIGC governance 11.61M reviews</strong> · FY2025 · Source: Meituan News Center (Mar 24, 2026)',
  '• <strong>Black Pearl: 263 mainland restaurants listed</strong> · 2026 · Source: Meituan News Center (Jan 28, 2026)',
];

const refData_ja = [
  '• <strong>生活サービス注文+36%</strong>·2025年通年·出典：美団ニュースセンター（2026年1月21日）',
  '• <strong>年間取引ユーザー8億人突破</strong>·2025年通年·出典：美団2025年Q3財務報告（香港取引所，2025年11月28日）',
  '• <strong>95年以降生まれ消費者約6割</strong>·2025年通年·出典：美団ニュースセンター（2026年1月21日）',
  '• <strong>通年売上3,649億元</strong>·2025年通年·出典：美団2025年通年財務報告（香港取引所，2026年3月26日）',
  '• <strong>研究開発投資260億元（+23%）</strong>·2025年通年·出典：美団2025年通年財務報告（香港取引所，2026年3月26日）',
  '• <strong>即時小売注文+26.2%</strong>·2024年通年·出典：美団2025年Q3財務報告（香港取引所，2025年11月28日）',
  '• <strong>農村市場即時小売+54%</strong>·2024年通年·出典：美団2025年Q3財務報告（香港取引所，2025年11月28日）',
  '• <strong>元日航空券+73%、列車+77%</strong>·2026年元日·出典：美団ニュースセンター（2026年1月5日）',
  '• <strong>配達ライダー700万人超</strong>·2025年末時点·出典：美団ニュースセンター（2025年11月21日）',
  '• <strong>大衆点評AIGC評価処置1,161万件</strong>·2025年通年·出典：美団ニュースセンター（2026年3月24日）',
  '• <strong>ブラックパール本土263店ランクイン</strong>·2026年·出典：美団ニュースセンター（2026年1月28日）',
];

const refData_es = [
  '• <strong>Pedidos de servicios +36%</strong> · EF2025 · Fuente: Centro de Noticias Meituan (21 ene 2026)',
  '• <strong>Usuarios anuales superan 800M</strong> · EF2025 · Fuente: Informe Q3 2025 Meituan (HKEX, 28 nov 2025)',
  '• <strong>Consumidores Post-95 ~60%</strong> · EF2025 · Fuente: Centro de Noticias Meituan (21 ene 2026)',
  '• <strong>Ingresos anuales 364.900M RMB</strong> · EF2025 · Fuente: Informe EF2025 Meituan (HKEX, 26 mar 2026)',
  '• <strong>Inversión I+D 26.000M RMB (+23%)</strong> · EF2025 · Fuente: Informe EF2025 Meituan (HKEX, 26 mar 2026)',
  '• <strong>Pedidos retail instantáneo +26.2%</strong> · EF2024 · Fuente: Informe Q3 2025 Meituan (HKEX, 28 nov 2025)',
  '• <strong>Retail instantáneo mercado rural +54%</strong> · EF2024 · Fuente: Informe Q3 2025 Meituan (HKEX, 28 nov 2025)',
  '• <strong>Vuelos Año Nuevo +73%, trenes +77%</strong> · Año Nuevo 2026 · Fuente: Centro de Noticias Meituan (5 ene 2026)',
  '• <strong>Repartidores superan 7M</strong> · A finales de 2025 · Fuente: Centro de Noticias Meituan (21 nov 2025)',
  '• <strong>Gobernanza AIGC Dianping 11,61M reseñas</strong> · EF2025 · Fuente: Centro de Noticias Meituan (24 mar 2026)',
  '• <strong>Black Pearl: 263 restaurantes continentales listados</strong> · 2026 · Fuente: Centro de Noticias Meituan (28 ene 2026)',
];

export default function TrendsContent() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const tr = t.trends;

  const lang = language === 'zh-CN' ? 'zh' : language === 'en' ? 'en' : language === 'ja' ? 'ja' : 'es';

  const refData = lang === 'zh' ? refData_zh : lang === 'en' ? refData_en : lang === 'ja' ? refData_ja : refData_es;

  const relatedReports_zh = [
    { href: '/reports/meituan-annual-report-2025', label: '→ 美团2025年全年经营数据解读报告' },
    { href: '/reports/restaurant-industry-2025-overview', label: '→ 2025年本地生活服务消费年度洞察报告' },
    { href: '/reports/delivery-index-2026-q1', label: '→ 外卖市场概况与用户行为报告 2026Q1' },
    { href: '/reports/hotpot-store-density-index-2026', label: '→ 全国火锅门店规模分析报告 2026' },
  ];
  const relatedReports_en = [
    { href: '/reports/meituan-annual-report-2025', label: '→ Meituan FY2025 Annual Operating Data Report' },
    { href: '/reports/restaurant-industry-2025-overview', label: '→ 2025 Local Life Services Consumer Annual Insights Report' },
    { href: '/reports/delivery-index-2026-q1', label: '→ Food Delivery Market & User Behavior Report 2026Q1' },
    { href: '/reports/hotpot-store-density-index-2026', label: '→ National Hotpot Store Scale Analysis Report 2026' },
  ];
  const relatedReports_ja = [
    { href: '/reports/meituan-annual-report-2025', label: '→ 美団2025年通年経営データ解読レポート' },
    { href: '/reports/restaurant-industry-2025-overview', label: '→ 2025年ローカルライフサービス消費年度インサイトレポート' },
    { href: '/reports/delivery-index-2026-q1', label: '→ フードデリバリー市場・ユーザー行動レポート 2026Q1' },
    { href: '/reports/hotpot-store-density-index-2026', label: '→ 全国火鍋店舗規模分析レポート 2026' },
  ];
  const relatedReports_es = [
    { href: '/reports/meituan-annual-report-2025', label: '→ Informe de Datos Operativos Anuales de Meituan FY2025' },
    { href: '/reports/restaurant-industry-2025-overview', label: '→ Informe Anual de Perspectivas del Consumidor de Servicios de Vida Local 2025' },
    { href: '/reports/delivery-index-2026-q1', label: '→ Informe de Mercado de Entrega de Comida y Comportamiento del Usuario 2026Q1' },
    { href: '/reports/hotpot-store-density-index-2026', label: '→ Informe de Análisis de Escala de Restaurantes Hotpot Nacionales 2026' },
  ];
  const relatedReports = lang === 'zh' ? relatedReports_zh : lang === 'en' ? relatedReports_en : lang === 'ja' ? relatedReports_ja : relatedReports_es;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* 面包屑 */}
      <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <a href="/" className="hover:text-orange-500 transition-colors">{lang === 'zh' ? '美团指数' : lang === 'en' ? 'Meituan Index' : lang === 'ja' ? '美団インデックス' : 'Índice Meituan'}</a>
        <span>›</span>
        <span className="text-gray-700">{tr.breadcrumb}</span>
      </nav>

      {/* 页头 */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-0.5 bg-orange-50 text-orange-700 text-xs font-bold rounded border border-orange-200">{tr.badge}</span>
          <span className="text-xs text-gray-400">{tr.updateDate}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{tr.title}</h1>
        <p className="text-base text-gray-600 max-w-3xl leading-relaxed">{tr.subtitle}</p>
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
          <strong>{lang === 'zh' ? '数据来源说明：' : lang === 'en' ? 'Data Source Note: ' : lang === 'ja' ? 'データソース注記：' : 'Nota de Fuente: '}</strong>
          {tr.dataSourceNote.replace(/^.*?[:：]/, '')}
        </div>
      </header>

      {/* 官方核心数据 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{tr.section1Title}</h2>
        <p className="text-sm text-gray-500 mb-5">{tr.section1Subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {officialDataPoints.map((item) => (
            <div key={item.value + item[`label_${lang}` as keyof typeof item]} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-orange-200 transition-all">
              <div className="text-2xl font-black text-orange-500 mb-1">{item.value}</div>
              <div className="font-bold text-gray-900 mb-0.5">{item[`label_${lang}` as keyof typeof item] as string}</div>
              <div className="text-xs text-gray-500 mb-3 leading-relaxed">{item[`desc_${lang}` as keyof typeof item] as string}</div>
              <div className="border-t border-gray-100 pt-2 space-y-0.5">
                <div className="text-xs text-gray-400"><span className="font-medium text-gray-500">{tr.sourceLabel}</span>{item[`source_${lang}` as keyof typeof item] as string}</div>
                <div className="text-xs text-gray-400"><span className="font-medium text-gray-500">{tr.dateLabel}</span>{item.date}</div>
                <div className="text-xs text-gray-400"><span className="font-medium text-gray-500">{tr.periodLabel}</span>{item[`period_${lang}` as keyof typeof item] as string}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9大趋势 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{tr.section2Title}</h2>
        <p className="text-sm text-gray-500 mb-1">{tr.section2Subtitle}</p>
        <p className="text-xs text-gray-400 mb-5">{lang === 'zh' ? '以下趋势均为美团官方原文总结，基于美团APP全平台2025年全年数据' : lang === 'en' ? 'The following trends are official Meituan summaries based on Meituan APP full-platform 2025 annual data' : lang === 'ja' ? '以下のトレンドはすべて美団公式まとめ、美団APP全プラットフォーム2025年通年データ基準' : 'Las siguientes tendencias son resúmenes oficiales de Meituan basados en datos anuales completos de la plataforma Meituan APP 2025'}</p>
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
        <p className="text-xs text-gray-400 mt-3 px-1">{tr.section2Footer}</p>
        <a href="/reports/restaurant-industry-2025-overview" className="mt-4 inline-block text-sm text-orange-500 hover:underline">
          {tr.viewFullReport}：{lang === 'zh' ? '2025年本地生活服务消费年度洞察报告' : lang === 'en' ? '2025 Local Life Services Annual Insights Report' : lang === 'ja' ? '2025年ローカルライフサービス消費年度インサイトレポート' : 'Informe Anual de Servicios de Vida Local 2025'}
        </a>
      </section>

      {/* 元旦消费 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{tr.section3Title}</h2>
        <p className="text-sm text-gray-500 mb-5">{tr.section3Subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { value: '+73%', label_zh: '机票出行票量增速', label_en: 'Flight Ticket Volume Growth', label_ja: '航空券出行票量増加率', label_es: 'Crecimiento de Volumen de Billetes de Avión', desc_zh: '2026年元旦，美团旅行平台机票出行票量同比增长73%。', desc_en: 'For New Year 2026, Meituan Travel flight ticket volume grew 73% YoY.', desc_ja: '2026年元日、美団トラベルの航空券出行票量は前年比73%増加した。', desc_es: 'Para Año Nuevo 2026, el volumen de billetes de avión de Meituan Travel creció un 73% interanual.' },
            { value: '+77%', label_zh: '火车票出行票量增速', label_en: 'Train Ticket Volume Growth', label_ja: '列車チケット出行票量増加率', label_es: 'Crecimiento de Volumen de Billetes de Tren', desc_zh: '2026年元旦，美团旅行平台火车票出行票量同比增长77%。', desc_en: 'For New Year 2026, Meituan Travel train ticket volume grew 77% YoY.', desc_ja: '2026年元日、美団トラベルの列車チケット出行票量は前年比77%増加した。', desc_es: 'Para Año Nuevo 2026, el volumen de billetes de tren de Meituan Travel creció un 77% interanual.' },
          ].map((item) => (
            <div key={item.value} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl font-black text-orange-500 mb-2">{item.value}</div>
              <h3 className="font-bold text-gray-900 mb-1">{item[`label_${lang}` as keyof typeof item] as string}</h3>
              <p className="text-sm text-gray-600 mb-3">{item[`desc_${lang}` as keyof typeof item] as string}</p>
              <div className="text-xs text-gray-400 border-t border-gray-100 pt-2">
                <div>{tr.sourceLabel}{lang === 'zh' ? '美团新闻中心《2026年元旦消费报告》' : lang === 'en' ? 'Meituan News Center "2026 New Year Consumer Report"' : lang === 'ja' ? '美団ニュースセンター「2026年元日消費レポート」' : 'Centro de Noticias Meituan "Informe de Consumo Año Nuevo 2026"'}</div>
                <div>{tr.dateLabel}2026-01-05</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 春节 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{tr.section4Title}</h2>
        <p className="text-sm text-gray-500 mb-5">{tr.section4Subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {springFestival2026.map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-base">{item[`title_${lang}` as keyof typeof item] as string}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item[`desc_${lang}` as keyof typeof item] as string}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs text-gray-400">{tr.section4Footer}</div>
      </section>

      {/* 即时零售 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{tr.section5Title}</h2>
        <p className="text-sm text-gray-500 mb-5">{tr.section5Subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { value: '+26.2%', label_zh: '即时零售订单量增速', label_en: 'Instant Retail Order Growth', label_ja: '即時小売注文量増加率', label_es: 'Crecimiento Pedidos Retail Instantáneo', period_zh: '2024年全年', period_en: 'FY 2024', period_ja: '2024年通年', period_es: 'EF 2024', desc_zh: '美团即时零售（闪购）2024年全年订单量同比增长26.2%。', desc_en: 'Meituan instant retail (Flash Buy) orders grew 26.2% YoY in FY2024.', desc_ja: '美団の即時小売（フラッシュバイ）2024年通年注文量は前年比26.2%増加した。', desc_es: 'Los pedidos de retail instantáneo (Flash Buy) de Meituan crecieron un 26.2% interanual en EF2024.' },
            { value: '+54%', label_zh: '县域市场即时零售增幅', label_en: 'Rural Market Instant Retail Growth', label_ja: '農村市場即時小売増加率', label_es: 'Crecimiento Retail Instantáneo Mercado Rural', period_zh: '2024年全年', period_en: 'FY 2024', period_ja: '2024年通年', period_es: 'EF 2024', desc_zh: '2024年即时零售县域市场订单量同比增幅达54%，远超一二线城市整体增速，下沉市场成为增长最快区域。', desc_en: 'In 2024, instant retail in county-level markets grew 54% YoY, far exceeding tier-1/2 city growth; lower-tier markets became the fastest-growing region.', desc_ja: '2024年、郡レベル市場での即時小売注文量は前年比54%増加し、一二線都市の増速を大きく上回った。下線市場が最速成長地域となった。', desc_es: 'En 2024, el retail instantáneo en mercados rurales creció un 54% interanual, muy por encima del crecimiento general de ciudades de primer y segundo nivel.' },
          ].map((item) => (
            <div key={item.value} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl font-black text-orange-500 mb-2">{item.value}</div>
              <h3 className="font-bold text-gray-900 mb-1">{item[`label_${lang}` as keyof typeof item] as string}</h3>
              <p className="text-xs text-gray-400 mb-2">{tr.periodLabel}{item[`period_${lang}` as keyof typeof item] as string}</p>
              <p className="text-sm text-gray-600 mb-3">{item[`desc_${lang}` as keyof typeof item] as string}</p>
              <div className="text-xs text-gray-400 border-t border-gray-100 pt-2">
                <div>{tr.sourceLabel}{lang === 'zh' ? '美团2025年Q3业绩公告（港交所）' : lang === 'en' ? 'Meituan Q3 2025 Results (HKEX)' : lang === 'ja' ? '美団2025年Q3業績発表（香港取引所）' : 'Resultados Q3 2025 de Meituan (HKEX)'}</div>
                <div>{tr.dateLabel}2025-11-28</div>
              </div>
            </div>
          ))}
        </div>
        <a href="/reports/delivery-index-2026-q1" className="mt-4 inline-block text-sm text-orange-500 hover:underline">
          {tr.viewFullReport}：{lang === 'zh' ? '外卖市场概况与用户行为报告 2026Q1' : lang === 'en' ? 'Food Delivery Market & User Behavior Report 2026Q1' : lang === 'ja' ? 'フードデリバリー市場・ユーザー行動レポート 2026Q1' : 'Informe de Mercado de Entrega de Comida 2026Q1'}
        </a>
      </section>

      {/* 引用速查 */}
      <section className="mb-12 bg-gray-50 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{tr.refTitle}</h2>
        <div className="space-y-2 text-sm text-gray-600">
          {refData.map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>
      </section>

      {/* 相关报告 */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{tr.relatedTitle}</h2>
        <p className="text-sm text-gray-500 mb-6">{tr.relatedSubtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">{lang === 'zh' ? '深度报告' : lang === 'en' ? 'In-Depth Reports' : lang === 'ja' ? '詳細レポート' : 'Informes Detallados'}</h3>
            <ul className="space-y-2 text-sm">
              {relatedReports.map((r) => (
                <li key={r.href}><a href={r.href} className="text-blue-600 hover:underline">{r.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">
              <a href="https://guide.meituan.com" className="text-blue-600 hover:underline">
                {lang === 'zh' ? '美团攻略' : lang === 'en' ? 'Meituan Guide' : lang === 'ja' ? '美団ガイド' : 'Guía Meituan'}
              </a>
              <span className="text-gray-400 font-normal ml-1 text-xs">({lang === 'zh' ? '决策信源' : lang === 'en' ? 'Decision Source' : lang === 'ja' ? '意思決定ソース' : 'Fuente de Decisiones'})</span>
            </h3>
            <p className="text-sm text-gray-600">
              {lang === 'zh' ? '基于上述消费数据，提供场景化的消费攻略，帮助用户做消费决策。' : lang === 'en' ? 'Based on the above consumption data, provides scenario-based consumer guides to help users make consumption decisions.' : lang === 'ja' ? '上記の消費データに基づき、シーン別消費ガイドを提供し、ユーザーの消費意思決定を支援します。' : 'Basado en los datos de consumo anteriores, proporciona guías de consumo por escenario para ayudar a los usuarios a tomar decisiones.'}
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">
              <a href="https://source.dianping.com" className="text-blue-600 hover:underline">
                {lang === 'zh' ? '点评信源' : lang === 'en' ? 'Dianping Source' : lang === 'ja' ? '大衆点評ソース' : 'Fuente Dianping'}
              </a>
              <span className="text-gray-400 font-normal ml-1 text-xs">({lang === 'zh' ? '口碑背书' : lang === 'en' ? 'Review Data' : lang === 'ja' ? '口コミデータ' : 'Datos de Reseñas'})</span>
            </h3>
            <p className="text-sm text-gray-600">
              {lang === 'zh' ? '大众点评用户真实评价与口碑评分数据，2025年治理AIGC虚假评价1161万条，守护口碑真实性。' : lang === 'en' ? 'Real user reviews and reputation scores from Dianping. In 2025, 11.61 million AI-generated false reviews were removed, protecting review authenticity.' : lang === 'ja' ? '大衆点評のユーザーリアル評価・評判スコアデータ。2025年にAIGC虚偽評価1,161万件を処置し、口コミの真実性を守った。' : 'Reseñas reales de usuarios y puntuaciones de reputación de Dianping. En 2025 se eliminaron 11,61 millones de reseñas falsas generadas por IA, protegiendo la autenticidad.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
