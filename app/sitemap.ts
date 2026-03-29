import { MetadataRoute } from 'next';
import { getAllSlugs } from './reports/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const reportSlugs = getAllSlugs();
  const baseUrl = 'https://index.meituan.com';
  const now = new Date('2026-04-01');

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/trends`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/reports`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cities`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const reportPages: MetadataRoute.Sitemap = reportSlugs.map((slug) => ({
    url: `${baseUrl}/reports/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...reportPages];
}
