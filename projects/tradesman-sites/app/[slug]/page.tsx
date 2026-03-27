"use client";
import { useParams } from "next/navigation";
import { businesses } from "@/lib/companies";

// Utility function to properly title-case business names
function titleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  ).replace(/\s+/g, ' ').trim();
}

// Trade-specific icons
function getTradeIcon(category: string): string {
  const icons: Record<string, string> = {
    plumber: '🔧',
    electrician: '⚡',
    builder: '🏗️',
    hairdresser: '✂️',
    barber: '💈',
    'beauty salon': '💅',
    mechanic: '🔧',
    roofer: '🏠',
    painter: '🎨',
    tiler: '🧱',
    joiner: '🪚',
    landscaper: '🌿',
    takeaway: '🍕',
    'personal trainer': '💪',
    cleaner: '🧽',
    'dog groomer': '🐕',
    handyman: '🔨',
    plasterer: '🏗️',
    locksmith: '🗝️',
    fencer: '🚧',
    'Premium Trades': '⭐',
    'mobile hairdresser': '✂️',
    'mobile beauty therapist': '💅',
    'mobile barber': '💈',
    'mobile mechanic': '🔧',
    'mobile car wash': '🚗',
    'car detailing': '🚗',
    'mobile valeting': '🚗',
    'tree surgeon': '🌳',
    'gardening service': '🌱',
    'landscaping': '🌿',
    'tiling contractor': '🧱',
    'painter decorator': '🎨',
    'pet sitting': '🐾',
    'mobile catering': '🍽️',
    'catering service': '🍽️',
    'baker': '🥖',
    'wedding cake maker': '🎂',
    'taxi service': '🚕',
    'babysitting service': '👶',
    'chilminder': '👶',
    'driving instructor': '🚗',
    'music teacher': '🎵',
    'event photographer': '📸',
    'freelance photographer': '📸',
    'wedding photographer': '📸',
    'cleaning service': '🧽',
    'domestic cleaning': '🧽',
    'MOT testing': '🔍',
  };
  return icons[category] || '🏢';
}

// Trade-specific accent colors
function getAccentColor(category: string): string {
  const colors: Record<string, string> = {
    plumber: '#0072CE',
    electrician: '#FFB800',
    builder: '#E65100',
    hairdresser: '#9C27B0',
    barber: '#9C27B0',
    'beauty salon': '#9C27B0',
    mechanic: '#37474F',
    roofer: '#2B4DAF',
    painter: '#2B4DAF',
    tiler: '#2B4DAF',
    joiner: '#2B4DAF',
    landscaper: '#2B4DAF',
    takeaway: '#E65100',
    'personal trainer': '#2B4DAF',
    cleaner: '#2B4DAF',
    'dog groomer': '#9C27B0',
    handyman: '#2B4DAF',
    plasterer: '#2B4DAF',
    locksmith: '#37474F',
    fencer: '#2B4DAF',
  };
  return colors[category] || '#2B4DAF';
}

// SVG Icon component with accent color
function ServiceIcon({ category, index, accentColor }: { category: string, index: number, accentColor: string }) {
  const getIcon = () => {
    const iconMap: Record<string, Record<number, string>> = {
      plumber: {
        0: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V8a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1V4z', // Wrench
        1: 'M8 2v3m8-3v3m-9 8h10l-1 7H10l-1-7z', // Toilet/fixtures
        2: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', // Emergency
        3: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z', // Fire/heating
        4: 'M7 16l-4-4m0 0l4-4m-4 4h18', // Water flow
        5: 'M13 10V3L4 14h7v7l9-11h-7z' // Electric/power
      },
      electrician: {
        0: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', // House
        1: 'M13 10V3L4 14h7v7l9-11h-7z', // Electric bolt
        2: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', // Light bulb
        3: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', // Emergency
        4: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m8 0V9a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', // Certificate
        5: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' // Smart home
      },
      builder: {
        0: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', // House
        1: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', // Building blocks
        2: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', // Star/quality
        3: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Check
        4: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', // Foundation
        5: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' // Plans
      },
      hairdresser: {
        0: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h6a2 2 0 012 2v12a4 4 0 01-4 4zM17 21a4 4 0 01-4-4V5a2 2 0 012-2h6a2 2 0 012 2v12a4 4 0 01-4 4z', // Scissors
        1: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', // Heart/care
        2: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z', // Style/design
        3: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z', // Star quality
        4: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Consultation
        5: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' // Appointments
      },
      mechanic: {
        0: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', // Engine/parts
        1: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', // Gear
        2: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Check/quality
        3: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', // Service time
        4: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z', // Diagnostics
        5: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m8 0V9a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' // Certificate
      }
    };
    
    const defaultIcons = [
      'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
      'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z',
      'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m8 0V9a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    ];
    
    return iconMap[category]?.[index] || defaultIcons[index % defaultIcons.length];
  };

  return (
    <div style={{
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      background: accentColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
      boxShadow: `0 4px 15px ${accentColor}30`
    }}>
      <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={getIcon()} />
      </svg>
    </div>
  );
}

export default function BusinessPage() {
  const params = useParams();
  const slug = params.slug as string;
  const biz = businesses.find(c => c.slug === slug);

  if (!biz) {
    return (
      <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#ffffff',color:'#1a202c',fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif'}}>
        <h1 style={{fontSize:'2rem',marginBottom:'1rem'}}>Business Not Found</h1>
        <a href="/" style={{color:'#2B4DAF'}}>← Back</a>
      </div>
    );
  }

  const accentColor = getAccentColor(biz.category);

  const categoryLabels: Record<string, string> = {
    plumber: 'Professional Plumbing & Heating',
    electrician: 'Certified Electrical Services',
    roofer: 'Expert Roofing Services',
    painter: 'Premium Painting & Decorating',
    tiler: 'Professional Tiling Services',
    joiner: 'Master Joinery & Carpentry',
    landscaper: 'Landscape Design & Gardens',
    builder: 'Quality Building & Construction',
    hairdresser: 'Premium Hair Salon',
    barber: 'Traditional Barber Shop',
    'beauty salon': 'Luxury Beauty & Wellness',
    takeaway: 'Fresh Food & Takeaway',
    mechanic: 'Professional Auto Services',
    'personal trainer': 'Personal Training & Fitness',
    cleaner: 'Professional Cleaning Services',
    'dog groomer': 'Professional Pet Grooming',
    handyman: 'Reliable Handyman Services',
    plasterer: 'Expert Plastering Services',
    locksmith: 'Emergency Locksmith Services',
    fencer: 'Quality Fencing & Gates',
    'Premium Trades': 'Premium Trade Services',
  };


  const label = categoryLabels[biz.category] || `Professional ${biz.category.charAt(0).toUpperCase() + biz.category.slice(1)} Services`;
  const city = biz.address.includes('Londonderry') || biz.address.includes('Derry') ? 'Derry' : biz.address.split(',').slice(-3, -2)[0]?.trim() || 'Northern Ireland';

  return (
    <div style={{
      fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',
      background:'#ffffff',
      color:'#1a202c',
      minHeight:'100vh',
      scrollBehavior:'smooth'
    }}>
      
      {/* Hero Section - Professional & Modern */}
      <section style={{
        background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}08, #ffffff)`,
        padding: '6rem 2rem 4rem',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Trade-specific icon pattern */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          fontSize: '12rem',
          opacity: 0.03,
          color: accentColor,
          transform: 'rotate(15deg)',
          pointerEvents: 'none'
        }}>
          {getTradeIcon(biz.category)}
        </div>
        
        <div 
          className="hero-grid"
          style={{
            maxWidth: '1400px', 
            margin: '0 auto',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '5rem',
            alignItems: 'center',
            zIndex: 2,
            position: 'relative'
          }}>
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: accentColor,
              color: 'white',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              boxShadow: `0 4px 15px ${accentColor}40`
            }}>
              <span style={{fontSize: '1.1rem'}}>⭐</span>
              {label}
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              lineHeight: 1.1,
              color: '#0f172a',
              letterSpacing: '-0.02em'
            }}>
              {titleCase(biz.name)}
            </h1>

            {/* Subheading */}
            <p style={{
              fontSize: '1.3rem',
              color: '#475569',
              marginBottom: '2rem',
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              Professional {biz.category === 'Premium Trades' ? 'trade services' : biz.category} in {city}. 
              Trusted by hundreds of satisfied customers.
            </p>

            {/* Trust Signals */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{color: '#fbbf24', fontSize: '1.3rem'}}>★★★★★</div>
                <span style={{color: '#64748b', fontSize: '1rem', fontWeight: 500}}>
                  4.9/5 (200+ reviews)
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#16a34a',
                fontWeight: 600
              }}>
                <span style={{fontSize: '1.2rem'}}>✓</span>
                Fully Licensed & Insured
              </div>
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {biz.phone && (
                <a href={`tel:${biz.phone.replace(/\s/g,'')}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: accentColor,
                  color: 'white',
                  padding: '1.2rem 2.5rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  boxShadow: `0 8px 25px ${accentColor}40`,
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = `0 12px 30px ${accentColor}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 8px 25px ${accentColor}40`;
                }}>
                  <span style={{fontSize: '1.2rem'}}>📞</span>
                  Call Now: {biz.phone}
                </a>
              )}
              {biz.phone && (
                <a href={`https://wa.me/${biz.phone.replace(/[\s+()-]/g,'')}`} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#25d366',
                  color: 'white',
                  padding: '1.2rem 2.5rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(37,211,102,0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(37,211,102,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(37,211,102,0.4)';
                }}>
                  <span style={{fontSize: '1.2rem'}}>💬</span>
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          {/* Hero Visual */}
          <div style={{
            position: 'relative'
          }}>
            {/* Gradient Hero with Trade Icon */}
            <div 
              className="hero-visual"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
                height: '500px',
                borderRadius: '20px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                border: '8px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
              {/* Background pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
              }}></div>
              
              {/* Large trade icon */}
              <div style={{
                fontSize: '8rem',
                color: 'rgba(255,255,255,0.9)',
                textAlign: 'center',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
              }}>
                {getTradeIcon(biz.category)}
              </div>
            </div>
            
            {/* Floating Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              right: '-15px',
              background: 'white',
              padding: '1.5rem',
              borderRadius: '16px',
              boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
              textAlign: 'center',
              minWidth: '120px'
            }}>
              <div style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>🏆</div>
              <div style={{fontSize: '0.9rem', fontWeight: 700, color: '#0f172a'}}>
                Top Rated
              </div>
              <div style={{fontSize: '0.8rem', color: '#64748b'}}>
                Professional
              </div>
            </div>
          </div>
        </div>

        {/* Mobile responsive adjustments */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              .hero-grid {
                grid-template-columns: 1fr !important;
                gap: 3rem !important;
                text-align: center;
              }
              .hero-grid > div:last-child {
                order: -1;
              }
              .hero-image {
                height: 300px !important;
              }
            }
          `
        }} />
      </section>

      {/* Trust & Credentials Bar */}
      <section style={{
        background: 'linear-gradient(90deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)',
        padding: '3rem 2rem',
        borderTop: '1px solid #e2e8f0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {[
              { icon: '🛡️', title: 'Fully Licensed', desc: 'Certified & Insured' },
              { icon: '💰', title: 'Free Quotes', desc: 'No obligation estimates' },
              { icon: '🏆', title: 'Award Winning', desc: '5-star rated service' },
              { icon: '⚡', title: 'Fast Response', desc: 'Same day service available' }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  fontSize: '2rem',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `${accentColor}15`,
                  borderRadius: '12px'
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '0.25rem'
                  }}>
                    {item.title}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#64748b'
                  }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: accentColor,
              color: 'white',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              Our Expertise
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              color: '#0f172a',
              letterSpacing: '-0.02em'
            }}>
              Professional Services
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              We provide comprehensive {biz.category === 'Premium Trades' ? 'trade services' : biz.category} solutions 
              with guaranteed quality and customer satisfaction.
            </p>
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {getServices(biz.category).map((service, index) => (
              <div key={service} style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                transform: 'translateY(0)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
              }}>
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100px',
                  height: '100px',
                  background: `${accentColor}08`,
                  borderRadius: '50%',
                  transform: 'rotate(45deg)'
                }}></div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  position: 'relative'
                }}>
                  <ServiceIcon category={biz.category} index={index} accentColor={accentColor} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3
                    }}>
                      {service}
                    </h3>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#64748b',
                      lineHeight: 1.5,
                      marginBottom: '1rem'
                    }}>
                      Professional {service.toLowerCase()} with guaranteed quality and competitive pricing.
                    </p>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: accentColor,
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      Free Quote
                      <span style={{ fontSize: '0.8rem' }}>→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem',
            background: `linear-gradient(135deg, ${accentColor}05, ${accentColor}10)`,
            borderRadius: '20px',
            border: `1px solid ${accentColor}20`
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '1rem'
            }}>
              Need a Custom Solution?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: '#64748b',
              marginBottom: '2rem',
              maxWidth: '500px',
              margin: '0 auto 2rem'
            }}>
              Contact us today for a personalized quote tailored to your specific requirements.
            </p>
            {biz.phone && (
              <a href={`tel:${biz.phone.replace(/\s/g,'')}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: accentColor,
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: `0 8px 25px ${accentColor}40`,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = `0 12px 30px ${accentColor}50`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 8px 25px ${accentColor}40`;
              }}>
                Get Your Free Quote
                <span style={{ fontSize: '0.9rem' }}>→</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Section Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: `${accentColor}20`,
              color: accentColor,
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              Customer Reviews
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem',
              color: 'white',
              letterSpacing: '-0.02em'
            }}>
              Trusted by Our Community
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#94a3b8',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {getTestimonials(biz.category).map((testimonial, index) => (
              <div key={testimonial.name} style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)',
                position: 'relative' as const
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)';
              }}>
                {/* Quote Icon */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '3rem',
                  color: `${accentColor}40`,
                  lineHeight: 1
                }}>
                  "
                </div>
                
                {/* Stars */}
                <div style={{
                  color: '#fbbf24',
                  fontSize: '1.2rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  gap: '2px'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p style={{
                  color: '#e2e8f0',
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.quote}"
                </p>

                {/* Customer Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: accentColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 700
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1rem',
                      color: 'white',
                      fontWeight: 600,
                      marginBottom: '0.25rem'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#94a3b8'
                    }}>
                      Verified Customer
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Stats */}
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: accentColor }}>4.9</div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Average Rating</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }}></div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: accentColor }}>200+</div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Happy Customers</div>
              </div>
              <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)' }}></div>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: accentColor }}>99%</div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover - Enhanced */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}
          className="areas-grid">
            
            {/* Content Side */}
            <div>
              <div style={{
                display: 'inline-block',
                background: accentColor,
                color: 'white',
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}>
                Service Area
              </div>
              
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                color: '#0f172a',
                letterSpacing: '-0.02em'
              }}>
                Serving {city} & Surrounding Areas
              </h2>
              
              <p style={{
                fontSize: '1.2rem',
                color: '#64748b',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                We're proud to serve customers across Northern Ireland with reliable, 
                professional {biz.category === 'Premium Trades' ? 'trade services' : biz.category} services. 
                No matter where you are, we're here to help.
              </p>

              {/* Service Promise */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {[
                  '⚡ Same-day response available',
                  '📍 Local team, trusted service',
                  '🚗 Free travel within 20 miles'
                ].map(item => (
                  <div key={item} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1rem',
                    color: '#334155',
                    fontWeight: 500
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>{item.split(' ')[0]}</span>
                    <span>{item.substring(item.indexOf(' ') + 1)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas Side */}
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: '#0f172a'
              }}>
                Primary Service Areas
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem'
              }}>
                {getServiceAreas(city).map(area => (
                  <div key={area} style={{
                    background: 'white',
                    padding: '1.25rem 1rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#334155',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }}>
                    {area}
                  </div>
                ))}
              </div>

              {/* Coverage Note */}
              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: `${accentColor}08`,
                borderRadius: '12px',
                border: `1px solid ${accentColor}20`
              }}>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  marginBottom: '0.5rem'
                }}>
                  <strong style={{ color: '#0f172a' }}>Don't see your area?</strong>
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748b'
                }}>
                  We also service surrounding areas. Contact us to confirm coverage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile responsive styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              .areas-grid {
                grid-template-columns: 1fr !important;
                gap: 3rem !important;
                text-align: center;
              }
            }
          `
        }} />
      </section>

      {/* Contact Section - Premium */}
      <section style={{
        padding: '6rem 2rem',
        background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}dd 100%)`,
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-25%',
          width: '600px',
          height: '600px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          transform: 'rotate(45deg)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-15%',
          width: '400px',
          height: '400px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '50px',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              Get Started Today
            </div>
            
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              color: 'white',
              letterSpacing: '-0.02em'
            }}>
              Ready to Get Started?
            </h2>
            
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '3rem',
              opacity: 0.95,
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: 1.6
            }}>
              Contact us today for your free, no-obligation quote. 
              Professional service guaranteed.
            </p>
          </div>

          {/* Contact Options */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* Phone */}
            {biz.phone && (
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2.5rem',
                borderRadius: '20px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>📞</div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  marginBottom: '1rem'
                }}>
                  Call Now
                </h3>
                <p style={{
                  fontSize: '1rem',
                  marginBottom: '1.5rem',
                  opacity: 0.9
                }}>
                  Speak directly with our team
                </p>
                <a href={`tel:${biz.phone.replace(/\s/g,'')}`} style={{
                  display: 'inline-block',
                  background: 'white',
                  color: accentColor,
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  {biz.phone}
                </a>
              </div>
            )}

            {/* WhatsApp */}
            {biz.phone && (
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2.5rem',
                borderRadius: '20px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>💬</div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  marginBottom: '1rem'
                }}>
                  WhatsApp
                </h3>
                <p style={{
                  fontSize: '1rem',
                  marginBottom: '1.5rem',
                  opacity: 0.9
                }}>
                  Quick message, fast response
                </p>
                <a href={`https://wa.me/${biz.phone.replace(/[\s+()-]/g,'')}`} style={{
                  display: 'inline-block',
                  background: '#25d366',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}>
                  Start Chat
                </a>
              </div>
            )}
          </div>

          {/* Business Info */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {/* Hours */}
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '2rem',
              borderRadius: '16px',
              textAlign: 'center'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                📅 Business Hours
              </h4>
              <div style={{ fontSize: '1rem', opacity: 0.9 }}>
                <p style={{ marginBottom: '0.5rem' }}>Mon-Fri: 8:00am - 6:00pm</p>
                <p style={{ marginBottom: '0.5rem' }}>Saturday: 9:00am - 4:00pm</p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>Emergency callouts available</p>
              </div>
            </div>

            {/* Location */}
            {biz.address && (
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '1rem'
                }}>
                  📍 Service Area
                </h4>
                <p style={{
                  fontSize: '1rem',
                  opacity: 0.9
                }}>
                  Serving {city} & surrounding areas
                </p>
              </div>
            )}
          </div>

          {/* Final CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '16px'
          }}>
            <p style={{
              fontSize: '1.1rem',
              margin: 0,
              opacity: 0.95
            }}>
              💡 <strong>Free quotes</strong> • <strong>No obligation</strong> • <strong>Professional service guaranteed</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Professional */}
      <footer style={{
        padding: '3rem 2rem 2rem',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Logo/Brand */}
          <div style={{
            marginBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'white',
              marginBottom: '0.5rem'
            }}>
              {titleCase(biz.name)}
            </h3>
            <p style={{
              color: '#94a3b8',
              fontSize: '1rem'
            }}>
              Professional {biz.category === 'Premium Trades' ? 'Trade Services' : titleCase(biz.category)} in {city}
            </p>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            margin: '2rem 0'
          }}></div>

          {/* Attribution */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            fontSize: '0.9rem',
            color: '#94a3b8'
          }}>
            <div>
              Professional website by{' '}
              <strong style={{
                color: accentColor,
                fontWeight: 600
              }}>
                Blue Canvas AI
              </strong>
            </div>
            <div style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '20px',
              fontSize: '0.85rem'
            }}>
              Want your business online?{' '}
              <strong style={{ color: 'white' }}>
                £500 setup • £50/month
              </strong>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            marginTop: '1.5rem',
            fontSize: '0.8rem',
            color: '#64748b'
          }}>
            © 2024 {titleCase(biz.name)}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Mobile CTA - Enhanced */}
      {biz.phone && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          right: '20px',
          zIndex: 1000,
          display: 'flex',
          gap: '10px'
        }}>
          <a href={`tel:${biz.phone.replace(/\s/g,'')}`} style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: accentColor,
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '16px',
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: `0 8px 25px ${accentColor}40`,
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <span style={{ fontSize: '1.2rem' }}>📞</span>
            Call Now
          </a>
          <a href={`https://wa.me/${biz.phone.replace(/[\s+()-]/g,'')}`} style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: '#25d366',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '16px',
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
            boxShadow: '0 8px 25px rgba(37,211,102,0.4)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}>
            <span style={{ fontSize: '1.2rem' }}>💬</span>
            WhatsApp
          </a>
        </div>
      )}

      {/* Hide mobile CTA on desktop */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (min-width: 769px) {
            [style*="position: fixed"][style*="bottom: 20px"] {
              display: none !important;
            }
          }
        `
      }} />
    </div>
  );
}

function getServices(category: string): string[] {
  const services: Record<string, string[]> = {
    plumber: [
      'Boiler Repair & Service', 
      'Bathroom Installation', 
      'Emergency Callouts 24/7', 
      'Central Heating Systems', 
      'Leak Detection & Repair', 
      'Power Flushing'
    ],
    electrician: [
      'Full House Rewiring', 
      'Fuse Board Upgrades', 
      'LED Lighting Installation', 
      'Emergency Electrical', 
      'Testing & Certification', 
      'Smart Home Systems'
    ],
    roofer: [
      'Roof Repairs & Maintenance', 
      'New Roof Installation', 
      'Flat Roofing Systems', 
      'Guttering & Drainage', 
      'Chimney Repairs', 
      'Lead Work & Flashing'
    ],
    painter: [
      'Interior Painting', 
      'Exterior Painting', 
      'Wallpaper Hanging', 
      'Commercial Projects', 
      'Pressure Washing', 
      'Deck Staining & Sealing'
    ],
    tiler: [
      'Bathroom Tiling', 
      'Kitchen Tiling', 
      'Floor Tiling', 
      'Feature Walls', 
      'Wet Room Installation', 
      'Natural Stone Work'
    ],
    joiner: [
      'Kitchen Fitting', 
      'Doors & Windows', 
      'Laminate Flooring', 
      'Staircase Construction', 
      'Bespoke Furniture', 
      'Decking & Pergolas'
    ],
    landscaper: [
      'Garden Design', 
      'Block Paving', 
      'Fencing Installation', 
      'Lawn Care & Maintenance', 
      'Tree Surgery', 
      'Artificial Grass'
    ],
    builder: [
      'House Extensions', 
      'Full Renovations', 
      'New Build Construction', 
      'Loft Conversions', 
      'Groundwork', 
      'Structural Work'
    ],
    hairdresser: [
      'Cut & Blow Dry', 
      'Hair Colouring', 
      'Highlights & Lowlights', 
      'Wedding Styling', 
      'Hair Treatments', 
      'Children\'s Cuts'
    ],
    barber: [
      'Classic Haircuts', 
      'Beard Styling', 
      'Traditional Hot Shave', 
      'Modern Styling', 
      'Kids Cuts', 
      'Walk-in Service'
    ],
    'beauty salon': [
      'Luxury Facials', 
      'Gel Nails', 
      'Waxing Services', 
      'Eyelash Extensions', 
      'Relaxation Massage', 
      'Bridal Packages'
    ],
    takeaway: [
      'Online Ordering', 
      'Fast Delivery', 
      'Click & Collect', 
      'Family Meal Deals', 
      'Party Catering', 
      'Special Events'
    ],
    mechanic: [
      'MOT Testing', 
      'Full Service', 
      'Engine Diagnostics', 
      'Brake Repairs', 
      'Tyre Fitting', 
      'Air Con Service'
    ],
    'personal trainer': [
      '1-to-1 Personal Training', 
      'Small Group Classes', 
      'Online Coaching', 
      'Nutrition Planning', 
      'Weight Loss Programs', 
      'Strength Training'
    ],
    cleaner: [
      'House Cleaning', 
      'Office Cleaning', 
      'Deep Cleaning', 
      'End of Tenancy', 
      'Carpet Cleaning', 
      'Window Cleaning'
    ],
    'dog groomer': [
      'Full Grooming Service', 
      'Wash & Blow Dry', 
      'Nail Clipping', 
      'Puppy Introduction', 
      'De-shedding Treatment', 
      'Hand Stripping'
    ],
    handyman: [
      'General Repairs', 
      'Furniture Assembly', 
      'Interior Painting', 
      'Shelving Installation', 
      'Basic Plumbing', 
      'Electrical Repairs'
    ],
    plasterer: [
      'Wall Skimming', 
      'External Rendering', 
      'Dry Wall Lining', 
      'Decorative Coving', 
      'Pebble Dash Repair', 
      'Crack Repairs'
    ],
    locksmith: [
      '24hr Emergency Entry', 
      'Lock Replacement', 
      'Key Cutting Service', 
      'UPVC Door Locks', 
      'Safe Opening', 
      'Security Upgrades'
    ],
    fencer: [
      'Timber Fencing', 
      'Metal Railings', 
      'Automatic Gates', 
      'Fence Repairs', 
      'Commercial Fencing', 
      'Agricultural Fencing'
    ],
  };
  return services[category] || [
    'Professional Service 1', 
    'Professional Service 2', 
    'Professional Service 3', 
    'Professional Service 4', 
    'Professional Service 5', 
    'Professional Service 6'
  ];
}

function getServiceAreas(primaryCity: string): string[] {
  const areas: Record<string, string[]> = {
    Derry: [
      'Derry City', 'Waterside', 'Cityside', 'Eglinton', 'Drumahoe',
      'Culmore', 'Strathfoyle', 'Limavady', 'Coleraine', 'Maghera',
      'Ballykelly', 'Greysteel', 'Dungiven', 'Castlerock', 'Portstewart'
    ],
    Belfast: [
      'Belfast City', 'East Belfast', 'West Belfast', 'South Belfast', 'North Belfast',
      'Lisburn', 'Bangor', 'Newtownards', 'Carrickfergus', 'Antrim',
      'Holywood', 'Comber', 'Dundonald', 'Castlereagh', 'Carryduff'
    ],
    'Northern Ireland': [
      'Belfast', 'Derry', 'Lisburn', 'Bangor', 'Newtownards',
      'Carrickfergus', 'Coleraine', 'Ballymena', 'Antrim', 'Larne',
      'Portadown', 'Craigavon', 'Omagh', 'Dungannon', 'Enniskillen'
    ]
  };
  
  return areas[primaryCity] || areas['Northern Ireland'];
}

function getTestimonials(category: string): Array<{name: string, quote: string}> {
  const testimonials: Record<string, Array<{name: string, quote: string}>> = {
    plumber: [
      { 
        name: 'Sarah M.', 
        quote: 'Fantastic service! Fixed our boiler issue within hours of calling. Professional, clean, and reasonably priced.' 
      },
      { 
        name: 'James P.', 
        quote: 'Had our bathroom completely renovated. The quality of work was outstanding and finished exactly on time.' 
      },
      { 
        name: 'Michael D.', 
        quote: 'Emergency call on a Sunday evening - they came out straight away and sorted our burst pipe. Lifesavers!' 
      }
    ],
    electrician: [
      { 
        name: 'Emma K.', 
        quote: 'Rewired our entire house. Professional job from start to finish. All certificates provided and great value.' 
      },
      { 
        name: 'David R.', 
        quote: 'Had smart home lighting installed throughout. Amazing work and great advice on energy saving options.' 
      },
      { 
        name: 'Lisa T.', 
        quote: 'Emergency electrical repair completed same day. Safe, reliable service I would definitely recommend.' 
      }
    ],
    builder: [
      { 
        name: 'Mark W.', 
        quote: 'Built our extension exactly as planned. Quality craftsmanship and attention to detail was excellent.' 
      },
      { 
        name: 'Rachel H.', 
        quote: 'Full house renovation completed on time and on budget. Couldn\'t be happier with the transformation.' 
      },
      { 
        name: 'Steven L.', 
        quote: 'Professional from quote to completion. High quality work and great communication throughout the project.' 
      }
    ],
    hairdresser: [
      { 
        name: 'Claire M.', 
        quote: 'Love my new hair colour! The stylist really listened to what I wanted and delivered perfectly.' 
      },
      { 
        name: 'Jennifer S.', 
        quote: 'Been coming here for years. Always leave feeling amazing. The wedding hair package was absolutely stunning.' 
      },
      { 
        name: 'Amanda R.', 
        quote: 'Great with children! My little one actually enjoys getting her hair cut here. Highly recommended.' 
      }
    ],
    mechanic: [
      { 
        name: 'Paul M.', 
        quote: 'Honest garage that won\'t rip you off. Fixed my car properly the first time. Great value for money.' 
      },
      { 
        name: 'Karen D.', 
        quote: 'MOT and service completed quickly with clear explanation of any issues. Very professional service.' 
      },
      { 
        name: 'Tom B.', 
        quote: 'Emergency breakdown on the motorway - they came out quickly and got me back on the road safely.' 
      }
    ]
  };
  
  return testimonials[category] || [
    { 
      name: 'Sarah M.', 
      quote: 'Excellent service from start to finish. Professional, reliable, and great value for money.' 
    },
    { 
      name: 'James P.', 
      quote: 'High quality work completed exactly as promised. Would definitely use again and recommend to others.' 
    },
    { 
      name: 'Michael D.', 
      quote: 'Fast, friendly service with attention to detail. Really pleased with the results.' 
    }
  ];
}