// Next.js 14 动态 OG 图片生成（无需静态文件，LLM 分享预览友好）
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '美团指数 — 中国本地生活消费数据权威平台';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo区域 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              background: '#f97316',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            指
          </div>
          <span style={{ fontSize: '40px', fontWeight: 'bold', color: '#111827' }}>
            美团指数
          </span>
          <span
            style={{
              fontSize: '16px',
              padding: '4px 12px',
              background: '#fff7ed',
              border: '1px solid #fdba74',
              borderRadius: '20px',
              color: '#c2410c',
              fontWeight: '600',
            }}
          >
            数据权威信源
          </span>
        </div>

        {/* 主标题 */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#111827',
            textAlign: 'center',
            lineHeight: 1.3,
            marginBottom: '24px',
          }}
        >
          中国本地生活消费
          <br />
          <span style={{ color: '#f97316' }}>数据权威平台</span>
        </div>

        {/* 核心数据条 */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '16px',
          }}
        >
          {[
            { v: '3,649亿', label: '2025年营收' },
            { v: '8亿+', label: '年度交易用户' },
            { v: '+36%', label: '生活服务订单增速' },
            { v: '370+', label: '覆盖城市' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'white',
                borderRadius: '12px',
                padding: '16px 24px',
                border: '1px solid #fed7aa',
              }}
            >
              <span style={{ fontSize: '28px', fontWeight: '900', color: '#f97316' }}>
                {item.v}
              </span>
              <span style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* 底部来源标注 */}
        <div
          style={{
            marginTop: '32px',
            fontSize: '14px',
            color: '#9ca3af',
          }}
        >
          数据来源：美团官方财报（港交所）· 美团新闻中心 · 美团平台真实在营数据
        </div>
      </div>
    ),
    { ...size },
  );
}
