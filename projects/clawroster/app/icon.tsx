import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 200 200"
          style={{
            color: '#FF6B35',
          }}
        >
          {/* Top Node */}
          <circle
            cx="100"
            cy="60"
            r="16"
            fill="#FF6B35"
            stroke="#FF6B35"
            strokeWidth="2"
          />
          
          {/* Connection lines */}
          <g stroke="#FF6B35" strokeWidth="3" fill="none">
            <line x1="100" y1="76" x2="100" y2="110" />
            <line x1="50" y1="110" x2="150" y2="110" />
            <line x1="60" y1="110" x2="60" y2="124" />
            <line x1="100" y1="110" x2="100" y2="124" />
            <line x1="140" y1="110" x2="140" y2="124" />
          </g>
          
          {/* Bottom nodes */}
          <circle cx="60" cy="140" r="14" fill="#FF6B35" stroke="#FF6B35" strokeWidth="2" />
          <circle cx="100" cy="140" r="14" fill="#FF6B35" stroke="#FF6B35" strokeWidth="2" />
          <circle cx="140" cy="140" r="14" fill="#FF6B35" stroke="#FF6B35" strokeWidth="2" />
          
          {/* Agent indicators */}
          <circle cx="100" cy="60" r="4" fill="#FF4500" />
          <circle cx="60" cy="140" r="3" fill="#FF4500" />
          <circle cx="100" cy="140" r="3" fill="#FF4500" />
          <circle cx="140" cy="140" r="3" fill="#FF4500" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}