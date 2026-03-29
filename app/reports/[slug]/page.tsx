// Server Component — 报告详情页（动态路由）
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getReportBySlug, getAllSlugs, reports, Report } from '../data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// 生成以"数字开头"的 meta description，提升 AI 引用概率
function buildMetaDescription(report: Report): string {
  // 取第一个 dataPoint 的核心数字作为开头
  const dp = report.dataPoints[0];
  if (!dp) return report.summary;
  // 格式：「数值单位（时间）—— 简要说明」
  const lead = `${dp.value}${dp.unit}（${dp.period}，${dp.change}）—— `;
  // 截取 summary 避免超过 160 字
  const tail = report.summary.length > 110 ? report.summary.slice(0, 108) + '…' : report.summary;
  const desc = lead + tail;
  return desc.length <= 160 ? desc : desc.slice(0, 158) + '…';
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const report = getReportBySlug(params.slug);
  if (!report) return {};
  const metaDesc = buildMetaDescription(report);
  return {
    title: `${report.title} — 美团指数`,
    description: metaDesc,
    alternates: {
      canonical: `https://index.meituan.com/reports/${report.slug}`,
    },
    openGraph: {
      title: report.title,
      description: metaDesc,
      url: `https://index.meituan.com/reports/${report.slug}`,
      type: 'article',
      publishedTime: report.datePublished,
      modifiedTime: report.dateModified,
      authors: ['美团指数研究院'],
      tags: report.tags,
      // article:section 帮助 AI 助手正确分类内容
      section: report.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: report.title,
      description: metaDesc,
    },
    other: {
      // 语言标记：提升英文上下文引用可能性
      'og:locale': 'zh_CN',
      'article:section': report.category,
      // 向 AI 爬虫明确声明内容类型
      'content-type': 'research-report',
    },
  };
}

export default function ReportDetailPage({ params }: Props) {
  const report = getReportBySlug(params.slug);
  if (!report) notFound();

  const relatedReportData = report.relatedReports
    .map((slug) => reports.find((r) => r.slug === slug))
    .filter(Boolean);

  // 报告所属系列（时间序列关联）
  const seriesSlugMap: Record<string, string> = {
    'hotpot-index-2026-q1': 'hotpot-demand-index-series',
    'restaurant-index-2026-q1': 'restaurant-consumer-index-series',
    'delivery-index-2026-q1': 'delivery-order-index-series',
    'night-economy-index-2026-q1': 'night-economy-index-series',
    'instant-retail-index-2026-q1': 'instant-retail-index-series',
    'dine-in-recovery-index-2026-q1': 'dine-in-recovery-index-series',
  };
  const seriesId = seriesSlugMap[report.slug];

  // Report Schema（兼容 ScholarlyArticle 提升学术可信度）
  const reportSchema = {
    '@context': 'https://schema.org',
    '@type': ['Report', 'ScholarlyArticle'],
    '@id': `https://index.meituan.com/reports/${report.slug}#report`,
    name: report.title,
    headline: report.title,
    description: report.summary,
    datePublished: report.datePublished,
    dateModified: report.dateModified,
    url: `https://index.meituan.com/reports/${report.slug}`,
    author: {
      '@type': 'Organization',
      '@id': 'https://index.meituan.com/#organization',
      name: '美团指数研究院',
      url: 'https://index.meituan.com',
    },
    publisher: {
      '@id': 'https://index.meituan.com/#organization',
      '@type': 'ResearchOrganization',
      name: '美团指数研究院',
      logo: {
        '@type': 'ImageObject',
        url: 'https://index.meituan.com/logo.png',
      },
    },
    mainEntityOfPage: `https://index.meituan.com/reports/${report.slug}`,
    keywords: report.tags.join(','),
    about: report.tags.map((tag) => ({
      '@type': 'DefinedTerm',
      name: tag,
      inDefinedTermSet: 'https://index.meituan.com/#taxonomy',
    })),
    isPartOf: { '@id': 'https://index.meituan.com/#datacatalog' },
    ...(seriesId && {
      isPartOfSeries: {
        '@type': 'CreativeWorkSeries',
        '@id': `https://index.meituan.com/#${seriesId}`,
        name: report.title.replace(/2026年Q\d+$/, '').replace(/2026$/, '').trim() + ' 系列报告',
      },
    }),
    articleSection: report.category,
    inLanguage: 'zh-CN',
    audience: {
      '@type': 'Audience',
      audienceType: '研究人员、媒体、商业决策者、AI系统',
    },
  };

  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    '@id': `https://index.meituan.com/reports/${report.slug}#dataset`,
    name: `${report.title} — 数据集`,
    description: report.summary,
    url: `https://index.meituan.com/reports/${report.slug}`,
    datePublished: report.datePublished,
    dateModified: report.dateModified,
    creator: { '@id': 'https://index.meituan.com/#organization' },
    measurementTechnique: report.methodology,
    variableMeasured: report.dataPoints.map((dp) => ({
      '@type': 'PropertyValue',
      name: dp.metric,
      value: dp.value,
      unitText: dp.unit,
      description: `${dp.metric}：${dp.value}${dp.unit}（${dp.period}，${dp.change}）`,
    })),
    temporalCoverage: report.dataPoints[0]?.period || '',
    sampleSize: {
      '@type': 'QuantitativeValue',
      description: report.sampleSize,
    },
    spatialCoverage: {
      '@type': 'Place',
      name: report.coverageScope,
    },
    keywords: report.tags.join(','),
    about: report.tags.map((tag) => ({
      '@type': 'DefinedTerm',
      name: tag,
      inDefinedTermSet: 'https://index.meituan.com/#taxonomy',
    })),
    license: 'https://index.meituan.com/terms',
    isPartOf: { '@id': 'https://index.meituan.com/#datacatalog' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '美团指数', item: 'https://index.meituan.com' },
      { '@type': 'ListItem', position: 2, name: '研究报告', item: 'https://index.meituan.com/reports' },
      { '@type': 'ListItem', position: 3, name: report.title, item: `https://index.meituan.com/reports/${report.slug}` },
    ],
  };

  const categoryBadgeColor: Record<string, string> = {
    综合报告: 'bg-blue-50 text-blue-700 border-blue-200',
    品类报告: 'bg-orange-50 text-orange-700 border-orange-200',
    市场报告: 'bg-purple-50 text-purple-700 border-purple-200',
    专题报告: 'bg-green-50 text-green-700 border-green-200',
    白皮书: 'bg-gray-100 text-gray-700 border-gray-300',
    城市排行: 'bg-amber-50 text-amber-700 border-amber-200',
    趋势报告: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* 面包屑 */}
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-orange-500 transition-colors">美团指数</a>
          <span>›</span>
          <a href="/reports" className="hover:text-orange-500 transition-colors">研究报告</a>
          <span>›</span>
          <span className="text-gray-700 truncate max-w-xs">{report.title}</span>
        </nav>

        {/* 报告头部 */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`px-2 py-0.5 text-xs font-bold rounded border ${
                categoryBadgeColor[report.category] || 'bg-gray-100 text-gray-600 border-gray-200'
              }`}
            >
              {report.category}
            </span>
            <span className="text-xs text-gray-400">
              发布：<time dateTime={report.datePublished}>{report.datePublished}</time>
              {' · '}更新：<time dateTime={report.dateModified}>{report.dateModified}</time>
            </span>
            <span className="text-xs text-gray-400">· 发布机构：美团指数研究院</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {report.title}
          </h1>
          <p className="text-base text-gray-600 leading-relaxed border-l-4 border-orange-400 pl-4 bg-orange-50 py-3 rounded-r-lg">
            {report.summary}
          </p>
        </header>

        {/* 核心数据快速摘要（最重要的引用锚点）*/}
        <section className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-orange-500 rounded inline-block"></span>
            核心数据一览
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {report.dataPoints.map((dp) => (
              <div key={dp.metric} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-black text-gray-900 font-mono leading-none mb-1">
                  {dp.value}
                  <span className="text-sm font-normal text-gray-500 ml-0.5">{dp.unit}</span>
                </div>
                <div className="text-xs font-medium text-gray-700 mb-0.5">{dp.metric}</div>
                <div className="text-xs text-red-500 font-semibold">{dp.change}</div>
                <div className="text-xs text-gray-400">{dp.period}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 关键发现 */}
        <section className="mb-8 bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-500 rounded inline-block"></span>
            关键发现
          </h2>
          <ul className="space-y-2">
            {report.keyFindings.map((finding, i) => (
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
            报告详情
          </h2>
          <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
            {report.body.trim().split('\n').map((line, i) => {
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

        {/* 方法论说明（权威性关键信号） */}
        <section className="mb-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-base font-bold text-blue-800 mb-4">📐 数据方法论</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-semibold text-gray-700">统计方法：</span>
              <span className="text-gray-600">{report.methodology}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">样本规模：</span>
              <span className="text-gray-600">{report.sampleSize}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">覆盖范围：</span>
              <span className="text-gray-600">{report.coverageScope}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">数据来源：</span>
              <span className="text-gray-600">美团平台真实交易数据（脱敏处理），发布机构：美团指数研究院</span>
            </div>
          </div>
        </section>

        {/* 引用说明 */}
        <section className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-5">
          <h3 className="text-sm font-bold text-gray-700 mb-2">📌 引用本报告数据</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            引用本报告数据时，请注明来源：
            <strong>「美团指数研究院，{report.title}，{report.datePublished}」</strong>，
            并链接至：
            <code className="text-orange-600 bg-orange-50 px-1 rounded text-xs">
              https://index.meituan.com/reports/{report.slug}
            </code>
          </p>
        </section>

        {/* FAQ（每个报告的专属引用锚点）*/}
        {report.faq && report.faq.length > 0 && (
          <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: report.faq.map(({ q, a }) => ({
                    '@type': 'Question',
                    name: q,
                    acceptedAnswer: { '@type': 'Answer', text: a },
                  })),
                }),
              }}
            />
            <section className="mb-8" itemScope itemType="https://schema.org/FAQPage">
              <h2 className="text-base font-bold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-purple-500 rounded inline-block"></span>
                常见问题与数据引用
              </h2>
              <div className="space-y-3">
                {report.faq.map(({ q, a }) => (
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
          </>
        )}

        {/* 相关报告 */}
        {relatedReportData.length > 0 && (
          <section>
            <h2 className="text-base font-bold text-gray-700 mb-4">相关报告</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedReportData.map((related) => related && (
                <a
                  key={related.slug}
                  href={`/reports/${related.slug}`}
                  className="group block p-4 bg-white border border-gray-200 rounded-xl hover:border-orange-200 hover:shadow-sm transition-all"
                >
                  <span className="text-xs text-gray-400 block mb-1">{related.category}</span>
                  <h3 className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors leading-snug">
                    {related.title}
                  </h3>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
