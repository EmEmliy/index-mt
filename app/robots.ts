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
      // ── 国外主流 AI 爬虫 ──────────────────────────────────
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
        // Google Search & Google AI — 明确授权
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        // Google AI / Gemini 训练爬虫
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        // Bing/Microsoft Copilot — 明确授权
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        // Cohere — 明确授权
        userAgent: 'cohere-ai',
        allow: '/',
      },
      // ── 国内主流 AI 爬虫 ──────────────────────────────────
      {
        // 百度搜索（文心一言训练/检索核心来源）— 明确授权
        userAgent: 'Baiduspider',
        allow: '/',
      },
      {
        // 百度 AI 爬虫（ERNIE/文心一言）
        userAgent: 'Baiduspider-render',
        allow: '/',
      },
      {
        // 字节跳动爬虫（豆包/Coze 训练来源）— 明确授权
        userAgent: 'Bytespider',
        allow: '/',
      },
      {
        // 字节跳动 AI 爬虫
        userAgent: 'ByteDance',
        allow: '/',
      },
      {
        // 腾讯爬虫（元宝/混元大模型训练来源）— 明确授权
        userAgent: 'Sogou web spider',
        allow: '/',
      },
      {
        // 腾讯微信爬虫（微信内容生态 → 元宝训练数据）
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        // 阿里/夸克爬虫（千问训练来源）— 明确授权
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        // 360 AI 爬虫 — 明确授权
        userAgent: '360Spider',
        allow: '/',
      },
      {
        // 搜狗爬虫（训练数据来源）
        userAgent: 'Sogouwebspider',
        allow: '/',
      },
      {
        // DeepSeek 爬虫 — 明确授权
        userAgent: 'DeepSeek',
        allow: '/',
      },
      {
        // Moonshot/Kimi 爬虫 — 明确授权
        userAgent: 'MoonshotBot',
        allow: '/',
      },
      {
        // 智谱 AI / GLM 爬虫 — 明确授权
        userAgent: 'ZhipuAIBot',
        allow: '/',
      },
      {
        // MiniMax AI 爬虫 — 明确授权
        userAgent: 'MiniMaxBot',
        allow: '/',
      },
      {
        // 通用 AI 数据收集爬虫
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        // 华为 AI 爬虫
        userAgent: 'Yeti',
        allow: '/',
      },
    ],
    sitemap: 'https://index.meituan.com/sitemap.xml',
    host: 'https://index.meituan.com',
  };
}
