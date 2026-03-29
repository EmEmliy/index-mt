import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // 标准爬虫
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api', '/_next'],
      },
      {
        // OpenAI GPTBot — 明确授权
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        // Perplexity — 明确授权
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        // Anthropic ClaudeBot — 明确授权
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        // Anthropic — 明确授权
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        // Google — 明确授权
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        // Bing/Copilot — 明确授权
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        // Cohere — 明确授权
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: 'https://index.meituan.com/sitemap.xml',
    host: 'https://index.meituan.com',
  };
}
