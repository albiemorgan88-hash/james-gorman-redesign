"use client";
import { useParams } from "next/navigation";
import { businesses } from "@/lib/companies";

// Utility function to properly title-case business names
function titleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  ).replace(/\s+/g, ' ').trim();
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
  };

  const heroImages: Record<string, string> = {
    plumber: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200',
    electrician: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200',
    builder: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
    hairdresser: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200',
    mechanic: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200',
  };

  const heroImage = heroImages[biz.category] || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200';
  const label = categoryLabels[biz.category] || `Professional ${biz.category.charAt(0).toUpperCase() + biz.category.slice(1)} Services`;
  const city = biz.address.includes('Londonderry') ? 'Derry' : biz.address.split(',').slice(-3, -2)[0]?.trim() || 'Derry';

  return (
    <div style={{
      fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',
      background:'#ffffff',
      color:'#1a202c',
      minHeight:'100vh',
      scrollBehavior:'smooth'
    }}>
      
      {/* Hero Section */}
      <section style={{
        background: '#ffffff',
        padding: '3rem 1.5rem',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              fontSize:'0.9rem',
              color: accentColor,
              fontWeight:600,
              letterSpacing:1.5,
              textTransform:'uppercase',
              marginBottom:'1.5rem'
            }}>{label}</div>
            <h1 style={{
              fontSize:'3.5rem',
              fontWeight:800,
              marginBottom:'1rem',
              lineHeight:1.1,
              color:'#1a202c'
            }}>{titleCase(biz.name)}</h1>
            <div style={{
              display:'flex',
              alignItems:'center',
              gap:'0.5rem',
              marginBottom:'1.5rem'
            }}>
              <div style={{color:accentColor,fontSize:'1.2rem'}}>★★★★★</div>
              <span style={{color:'#4a5568',fontSize:'1rem',fontWeight:500}}>4.9/5 Based on 47 reviews</span>
            </div>
            {biz.phone && (
              <a href={`tel:${biz.phone.replace(/\s/g,'')}`} style={{
                display:'inline-block',
                background:'#16a34a',
                color:'white',
                padding:'1.2rem 3rem',
                borderRadius:'50px',
                fontWeight:700,
                fontSize:'1.2rem',
                textDecoration:'none',
                boxShadow:'0 8px 25px rgba(22,163,74,0.3)',
                transition:'all 0.3s ease',
                marginBottom:'1rem'
              }}>
                Get a Free Quote
              </a>
            )}
            {biz.phone && (
              <p style={{
                color:'#4a5568',
                fontSize:'1.1rem',
                fontWeight:500
              }}>
                📞 Call: <strong style={{color:'#1a202c'}}>{biz.phone}</strong>
              </p>
            )}
          </div>
          <div style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}></div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{
        background: '#f8f9fa',
        padding: '1.5rem 1.5rem',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {[
            '✓ Fully Insured',
            '✓ Free Quotes', 
            '✓ Local & Trusted',
            '✓ 5-Star Rated'
          ].map(item => (
            <div key={item} style={{
              color: '#16a34a',
              fontWeight: 600,
              fontSize: '1rem'
            }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section style={{
        padding:'4rem 1.5rem',
        maxWidth:'1200px',
        margin:'0 auto'
      }}>
        <h2 style={{
          fontSize:'2.5rem',
          fontWeight:700,
          marginBottom:'3rem',
          textAlign:'center',
          color:'#1a202c'
        }}>Our Services</h2>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',
          gap:'2rem'
        }}>
          {getServices(biz.category).map((service, index) => (
            <div key={service} style={{
              background:'#ffffff',
              padding:'2.5rem',
              borderRadius:'16px',
              textAlign:'center',
              border:'1px solid #e2e8f0',
              boxShadow:'0 4px 6px rgba(0,0,0,0.05)',
              transition:'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor:'pointer',
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            }}
            >
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <ServiceIcon category={biz.category} index={index} accentColor={accentColor} />
              </div>
              <div style={{
                fontSize:'1.2rem',
                fontWeight:600,
                color:'#1a202c',
                lineHeight:1.4
              }}>{service}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        padding:'4rem 1.5rem',
        background:'#f8f9fa'
      }}>
        <div style={{maxWidth:'1200px',margin:'0 auto'}}>
          <h2 style={{
            fontSize:'2.5rem',
            fontWeight:700,
            marginBottom:'3rem',
            textAlign:'center',
            color:'#1a202c'
          }}>What Our Customers Say</h2>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',
            gap:'2rem'
          }}>
            {getTestimonials(biz.category).map((testimonial, index) => (
              <div key={testimonial.name} style={{
                background:'#ffffff',
                padding:'2.5rem',
                borderRadius:'16px',
                border:'1px solid #e2e8f0',
                boxShadow:'0 4px 6px rgba(0,0,0,0.05)',
                transition:'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)',
                position: 'relative' as const
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{
                  color: accentColor,
                  fontSize:'1.2rem',
                  marginBottom:'1rem',
                  display:'flex',
                  gap:'2px'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p style={{
                  color:'#4a5568',
                  fontSize:'1.1rem',
                  lineHeight:1.6,
                  marginBottom:'1.5rem',
                  fontStyle:'italic'
                }}>
                  "{testimonial.quote}"
                </p>
                <div style={{
                  fontSize:'1rem',
                  color:'#1a202c',
                  fontWeight:600,
                  paddingTop:'1rem',
                  borderTop:'1px solid #e2e8f0'
                }}>
                  — {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section style={{
        padding:'4rem 1.5rem',
        background:'#ffffff'
      }}>
        <div style={{maxWidth:'1200px',margin:'0 auto',textAlign:'center'}}>
          <h2 style={{
            fontSize:'2.5rem',
            fontWeight:700,
            marginBottom:'2rem',
            color:'#1a202c'
          }}>Areas We Cover</h2>
          <p style={{
            color:'#4a5568',
            fontSize:'1.2rem',
            marginBottom:'2.5rem'
          }}>Proudly serving the greater Derry area</p>
          <div style={{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            gap:'1rem'
          }}>
            {[
              'Derry', 'Waterside', 'Cityside', 'Eglinton', 'Drumahoe', 
              'Culmore', 'Strathfoyle', 'Limavady', 'Coleraine'
            ].map(area => (
              <span key={area} style={{
                background:'#f8f9fa',
                color:'#1a202c',
                padding:'0.8rem 1.5rem',
                borderRadius:'25px',
                fontSize:'1rem',
                fontWeight:500,
                border:'1px solid #e2e8f0'
              }}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        padding:'4rem 1.5rem',
        background: accentColor,
        color: 'white'
      }}>
        <div style={{maxWidth:'800px',margin:'0 auto',textAlign:'center'}}>
          <h2 style={{
            fontSize:'2.5rem',
            fontWeight:700,
            marginBottom:'1rem',
            color:'white'
          }}>Get Your Free Quote Today</h2>
          <p style={{
            fontSize:'1.2rem',
            marginBottom:'3rem',
            opacity:0.9
          }}>Ready to get started? Contact us now for a free, no-obligation quote</p>
          
          <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'1rem',
            alignItems:'center',
            marginBottom:'3rem'
          }}>
            {biz.phone && (
              <a href={`tel:${biz.phone.replace(/\s/g,'')}`} style={{
                display:'inline-block',
                background:'#ffffff',
                color: accentColor,
                padding:'1.2rem 3rem',
                borderRadius:'50px',
                fontWeight:700,
                fontSize:'1.2rem',
                textDecoration:'none',
                boxShadow:'0 6px 20px rgba(0,0,0,0.1)',
                minWidth:'250px'
              }}>
                📞 Call: {biz.phone}
              </a>
            )}
            {biz.phone && (
              <a href={`https://wa.me/${biz.phone.replace(/[\s+()-]/g,'')}`} style={{
                display:'inline-block',
                background:'#25d366',
                color:'white',
                padding:'1.2rem 3rem',
                borderRadius:'50px',
                fontWeight:700,
                fontSize:'1.2rem',
                textDecoration:'none',
                boxShadow:'0 6px 20px rgba(37,211,102,0.3)',
                minWidth:'250px'
              }}>
                💬 WhatsApp
              </a>
            )}
          </div>
          
          <div style={{
            background:'rgba(255,255,255,0.1)',
            padding:'2rem',
            borderRadius:'12px',
            marginBottom:'2rem'
          }}>
            <h3 style={{
              fontSize:'1.3rem',
              fontWeight:600,
              marginBottom:'1rem',
              color:'white'
            }}>Business Hours</h3>
            <p style={{fontSize:'1.1rem',marginBottom:'0.5rem'}}>Mon-Sat: 8am-6pm</p>
            <p style={{fontSize:'0.95rem',opacity:0.8}}>Emergency callouts available</p>
          </div>
          
          {biz.address && (
            <p style={{
              fontSize:'1rem',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              gap:'0.5rem',
              opacity:0.9
            }}>
              <span>📍</span> {biz.address}
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding:'3rem 1.5rem',
        borderTop:'1px solid #e2e8f0',
        textAlign:'center',
        background:'#f8f9fa'
      }}>
        <p style={{
          color:'#6b7280',
          fontSize:'1rem',
          marginBottom:'0.5rem'
        }}>Sample website by <strong style={{color:'#1a202c'}}>Blue Canvas AI</strong></p>
        <p style={{
          color:'#9ca3af',
          fontSize:'0.9rem'
        }}>Want this live? <strong style={{color: accentColor}}>£250 setup + £50/month</strong></p>
      </footer>

      {/* Floating Mobile CTA */}
      {biz.phone && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          right: '20px',
          zIndex: 1000
        }}>
          <a href={`tel:${biz.phone.replace(/\s/g,'')}`} style={{
            display: 'block',
            background: '#16a34a',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '1.1rem',
            textDecoration: 'none',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(22,163,74,0.3)'
          }}>
            📞 Call Now
          </a>
        </div>
      )}
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