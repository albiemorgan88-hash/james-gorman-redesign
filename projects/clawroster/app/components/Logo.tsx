interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id={`logoGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#FF8C35', stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:'#FF6B35', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#FF4500', stopOpacity:1}} />
          </linearGradient>
          <filter id={`glow-${size}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Org Chart / Roster Structure */}
        <g filter={`url(#glow-${size})`}>
          {/* Top Node - Team Leader */}
          <circle cx="100" cy="60" r="16" 
                  fill={`url(#logoGradient-${size})`}
                  stroke="#FF6B35" 
                  strokeWidth="2"/>
          
          {/* Connection lines from top to bottom nodes */}
          <g stroke="#FF6B35" strokeWidth="3" fill="none">
            {/* Center vertical line */}
            <line x1="100" y1="76" x2="100" y2="110" />
            {/* Horizontal connector */}
            <line x1="50" y1="110" x2="150" y2="110" />
            {/* Branch lines to bottom nodes */}
            <line x1="60" y1="110" x2="60" y2="124" />
            <line x1="100" y1="110" x2="100" y2="124" />
            <line x1="140" y1="110" x2="140" y2="124" />
          </g>
          
          {/* Bottom Row - Team Members */}
          <circle cx="60" cy="140" r="14" 
                  fill={`url(#logoGradient-${size})`}
                  stroke="#FF6B35" 
                  strokeWidth="2"/>
          
          <circle cx="100" cy="140" r="14" 
                  fill={`url(#logoGradient-${size})`}
                  stroke="#FF6B35" 
                  strokeWidth="2"/>
          
          <circle cx="140" cy="140" r="14" 
                  fill={`url(#logoGradient-${size})`}
                  stroke="#FF6B35" 
                  strokeWidth="2"/>
          
          {/* Agent indicators - small dots inside nodes */}
          <circle cx="100" cy="60" r="4" fill="#FF4500" opacity="0.8"/>
          <circle cx="60" cy="140" r="3" fill="#FF4500" opacity="0.8"/>
          <circle cx="100" cy="140" r="3" fill="#FF4500" opacity="0.8"/>
          <circle cx="140" cy="140" r="3" fill="#FF4500" opacity="0.8"/>
          
          {/* Subtle connecting nodes for polish */}
          <circle cx="100" cy="110" r="3" fill="#FF6B35" opacity="0.6"/>
          <circle cx="60" cy="124" r="2" fill="#FF6B35" opacity="0.6"/>
          <circle cx="100" cy="124" r="2" fill="#FF6B35" opacity="0.6"/>
          <circle cx="140" cy="124" r="2" fill="#FF6B35" opacity="0.6"/>
        </g>
      </svg>
    </div>
  );
}