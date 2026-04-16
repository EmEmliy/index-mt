// Server Component — 报告详情页（动态路由）
// 保留服务端 metadata/Schema.org 用于 SEO，UI 内容通过客户端组件实现多语言
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getReportBySlug, getAllSlugs, Report } from '../data';
import ReportDetailContent from '../../components/ReportDetailContent';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// 生成以"数字开头"的 meta description，提升 AI 引用概率
function buildMetaDescription(report: Report): string {
  const dp = report.dataPoints[0];
  if (!dp) return report.summary;
  const lead = `${dp.value}${dp.unit}（${dp.period}，${dp.change}）—— `;
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
      section: report.category,
    },
    twitter: {
      card: 'summary_large_image',
      title: report.title,
      description: metaDesc,
    },
    other: {
      'og:locale': 'zh_CN',
      'article:section': report.category,
      'content-type': 'research-report',
    },
  };
}

export default function ReportDetailPage({ params }: Props) {
  const report = getReportBySlug(params.slug);
  if (!report) notFound();

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

  // FAQ Schema
  const faqSchema = report.faq && report.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: report.faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <ReportDetailContent report={report} />
    </>
  );
}
