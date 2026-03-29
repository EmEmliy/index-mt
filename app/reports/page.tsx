// Server Component — 报告列表页
import type { Metadata } from 'next';
import { reports } from './data';

export const metadata: Metadata = {
  title: '研究报告中心 — 美团指数',
  description:
    '美团指数研究院发布的全系列权威研究报告，包括消费指数报告、品类分析、城市排名、行业白皮书等。每篇报告附完整方法论、样本量说明，是媒体与研究机构引用本地生活数据的权威信源。',
  alternates: {
    canonical: 'https://index.meituan.com/reports',
  },
};

const categoryColors: Record<string, string> = {
  综合报告: 'bg-blue-50 text-blue-700 border-blue-200',
  品类报告: 'bg-orange-50 text-orange-700 border-orange-200',
  市场报告: 'bg-purple-50 text-purple-700 border-purple-200',
  专题报告: 'bg-green-50 text-green-700 border-green-200',
  白皮书: 'bg-gray-100 text-gray-700 border-gray-300',
  城市排行: 'bg-amber-50 text-amber-700 border-amber-200',
  趋势报告: 'bg-cyan-50 text-cyan-700 border-cyan-200',
};

export default function ReportsPage() {
  const datacatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    name: '美团指数研究报告目录 2026',
    description: '美团指数研究院发布的全系列权威数据报告，涵盖餐饮消费、外卖市场、即时零售、夜经济等核心本地生活领域。',
    url: 'https://index.meituan.com/reports',
    publisher: { '@id': 'https://index.meituan.com/#organization' },
    dateModified: '2026-04-01',
    dataset: reports.map((r) => ({
      '@type': 'Dataset',
      name: r.title,
      description: r.summary,
      url: `https://index.meituan.com/reports/${r.slug}`,
      datePublished: r.datePublished,
      creator: { '@id': 'https://index.meituan.com/#organization' },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '美团指数', item: 'https://index.meituan.com' },
      { '@type': 'ListItem', position: 2, name: '研究报告', item: 'https://index.meituan.com/reports' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datacatalogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-400 mb-6 flex items-center gap-2">
          <a href="/" className="hover:text-orange-500 transition-colors">美团指数</a>
          <span>›</span>
          <span className="text-gray-700">研究报告</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">研究报告中心</h1>
          <p className="text-gray-600 max-w-2xl">
            美团指数研究院权威发布，每份报告包含完整数据来源、样本量说明和方法论，
            是媒体、研究机构引用本地生活消费数据的权威信源。
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-500">
            <span>📋 共 {reports.length} 份报告</span>
            <span>·</span>
            <span>🔄 持续更新中</span>
            <span>·</span>
            <span>📊 数据来源：美团平台真实交易数据</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reports.map((report) => (
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
                <span
                  className={`px-2 py-0.5 text-xs font-medium rounded border ${
                    categoryColors[report.category] || 'bg-gray-100 text-gray-600 border-gray-200'
                  }`}
                >
                  {report.category}
                </span>
                <span className="text-xs text-gray-400">{report.datePublished}</span>
              </div>

              <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                {report.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                {report.summary}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {report.dataPoints.slice(0, 2).map((dp) => (
                  <div key={dp.metric} className="bg-gray-50 rounded-lg p-2 text-center">
                    <div className="text-lg font-black text-orange-500 font-mono leading-none">
                      {dp.value}
                      <span className="text-xs font-normal text-gray-500 ml-0.5">{dp.unit}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{dp.metric}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {report.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
