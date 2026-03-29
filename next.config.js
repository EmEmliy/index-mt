/** @type {import('next').NextConfig} */
const nextConfig = {
  // 保持 output: 'export' 支持静态托管，动态路由通过 generateStaticParams 预生成
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  // 为静态导出生成 trailing slash，有利于爬虫抓取
  trailingSlash: true,
};

module.exports = nextConfig;
