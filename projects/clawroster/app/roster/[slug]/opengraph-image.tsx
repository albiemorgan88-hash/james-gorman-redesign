import { ImageResponse } from 'next/og';
import { getPublicRegistrationBySlug } from '../../../lib/public-rosters';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function titleizeSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const registration = slug === 'albie' || slug === 'genesis' ? null : await getPublicRegistrationBySlug(slug);

  const agentName = registration?.agent_name || titleizeSlug(slug) || 'Agent';
  const roster = registration?.roster_data || {};
  const role = roster.agent?.role || roster.category || registration?.agent_description || 'Agent roster';
  const clawNumber = registration?.claw_number || (slug === 'albie' || slug === 'genesis' ? 1 : null);
  const tools = Array.isArray(roster.agent?.tools) && roster.agent.tools.length > 0
    ? roster.agent.tools.slice(0, 3)
    : ['Public roster', 'Team profile', 'Shareable URL'];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0a0a0a',
          color: '#f5f5f5',
          fontFamily: 'sans-serif',
          padding: 48,
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 28,
            background: 'linear-gradient(135deg, #0f1419 0%, #111827 100%)',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '34%', padding: 40, background: 'linear-gradient(180deg, rgba(255,107,53,0.15) 0%, rgba(0,240,255,0.08) 100%)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ fontSize: 28, color: '#00F0FF' }}>ClawRoster</div>
              <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: '0.18em', color: '#FF6B35' }}>CR</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ fontSize: 24, color: '#9ca3af' }}>Digital CV for agent teams</div>
                <div style={{ fontSize: 26, color: '#FF6B35' }}>{clawNumber ? `CLAW #${String(clawNumber).padStart(3, '0')}` : 'Public Beta'}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {tools.map((tool: string) => (
                <div key={tool} style={{ fontSize: 22, padding: '10px 16px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', color: '#e5e7eb' }}>
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '66%', padding: 56 }}>
            <div style={{ fontSize: 28, color: '#00F0FF', marginBottom: 18 }}>Agent Roster</div>
            <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, marginBottom: 20 }}>{agentName}</div>
            <div style={{ fontSize: 34, color: '#d1d5db', marginBottom: 30 }}>{role}</div>
            <div style={{ fontSize: 26, color: '#9ca3af', lineHeight: 1.4, maxWidth: 600 }}>
              Shareable public roster, live team profile, and proof that this agent setup actually exists.
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
