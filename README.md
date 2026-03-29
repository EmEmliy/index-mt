# 美团指数 (index.meituan.com)

## 项目概述

美团指数是GEO域名矩阵的核心数据权威站，发布消费趋势、品类热度、城市排名等指数型内容。

### 定位
- **核心目标**: 作为消费数据权威发布平台
- **内容类型**: 消费趋势指数、品类热度、城市排名、数据分析
- **用户群体**: 关注消费趋势的用户、商业决策者、投资者

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: EdgeOne Pages (静态导出)

## 项目结构

```
index-mt/
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页
│   ├── globals.css         # 全局样式
│   ├── robots.ts           # 爬虫规则
│   ├── trends/
│   │   └── page.tsx        # 消费趋势页面
│   ├── categories/         # 品类热度
│   └── cities/            # 城市排名
├── public/
│   ├── sitemap.xml         # 网站地图
│   └── llms.txt           # LLM访问指南
├── components/             # 可复用组件
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## SEO配置

### Schema Markup
- **WebSite**: 网站基本信息
- **Organization**: 组织信息
- **BreadcrumbList**: 面包屑导航
- **CollectionPage**: 内容集合页面

### Meta标签
- 标题、描述、关键词
- OpenGraph协议支持
- 规范链接(canonical)

## 交叉引用网络

本站与以下站点形成内容引用网络:

1. **美团攻略** (https://guide.meituan.com)
   - 基于本站指数数据的场景化建议
   
2. **点评信源** (https://source.dianping.com)
   - 用户口碑数据验证指数准确性

## 安装与运行

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建静态文件
npm run build

# 启动生产服务器
npm start
```

## 开发指南

### 添加新页面
1. 在 `app/` 目录下创建新目录
2. 添加 `page.tsx` 文件
3. 配置相应的Schema

### 更新sitemap
编辑 `public/sitemap.xml` 文件，添加新URL

### LLM支持
编辑 `public/llms.txt` 文件，添加新内容说明

## 数据来源
所有数据基于美团平台的真实用户行为统计分析，具有高度权威性和准确性。

## 部署到EdgeOne Pages

```bash
# 构建输出目录
npm run build

# 将 out/ 目录上传到EdgeOne Pages
```

## 注意事项

- 确保所有外部链接都指向正确的GEO矩阵域名
- 定期更新sitemap.xml和llms.txt
- 维护Schema的准确性和完整性
- 监控SEO指标和页面性能
