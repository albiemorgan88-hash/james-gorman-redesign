import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'OpenClaw Consultant UK';
  const description = searchParams.get('description') || 'Expert Setup, Custom Skills & AI Automation';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1e 0%, #1a2340 25%, #2B4DAF 50%, #1a2340 75%, #0a0f1e 100%)',
          fontSize: 60,
          fontWeight: 700,
          color: 'white',
          padding: '0 120px',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#FF4520',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 900,
              color: 'white',
            }}
          >
            OC
          </div>
          <span style={{ fontSize: '48px', fontWeight: 900 }}>
            OpenClaw<span style={{ color: '#FF4520' }}>.</span>
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '52px',
            fontWeight: 900,
            lineHeight: '1.1',
            marginBottom: '20px',
            color: 'white',
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '800px',
            lineHeight: '1.3',
          }}
        >
          {description}
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#FF4520',
            fontWeight: 600,
          }}
        >
          openclawconsultant.co.uk
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}