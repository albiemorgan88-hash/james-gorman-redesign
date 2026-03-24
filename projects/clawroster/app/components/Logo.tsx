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
            <stop offset="0%" style={{stopColor:'#00f0ff', stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:'#0080ff', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#00f0ff', stopOpacity:1}} />
          </linearGradient>
          <filter id={`glow-${size}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main claw shape */}
        <g filter={`url(#glow-${size})`}>
          {/* Outer claw */}
          <path d="M100 40 L85 60 L75 85 L70 110 L75 130 L85 140 L105 145 L125 140 L135 130 L140 110 L135 85 L125 60 L100 40 Z" 
                fill={`url(#logoGradient-${size})`}
                stroke="#00f0ff" 
                strokeWidth="2"/>
          
          {/* Inner claw detail */}
          <path d="M100 55 L90 70 L85 90 L87 110 L95 125 L105 130 L115 125 L123 110 L125 90 L120 70 L100 55 Z" 
                fill="none" 
                stroke="#00f0ff" 
                strokeWidth="1.5" 
                opacity="0.7"/>
          
          {/* Central CR monogram */}
          <g transform="translate(100,100)">
            {/* C */}
            <path d="M-20,-15 Q-30,-15 -30,-5 Q-30,5 -20,5 L-15,5 M-20,-10 L-15,-10" 
                  fill="none" 
                  stroke="#001015" 
                  strokeWidth="3" 
                  strokeLinecap="round"/>
            
            {/* R */}
            <path d="M5,-15 L5,5 M5,-15 Q15,-15 15,-5 Q15,0 10,0 L5,0 M10,0 L15,5" 
                  fill="none" 
                  stroke="#001015" 
                  strokeWidth="3" 
                  strokeLinecap="round"/>
          </g>
        </g>
      </svg>
    </div>
  );
}