"use client";
import { useParams } from "next/navigation";
import { businesses } from "@/lib/companies";
import { useState } from "react";

export default function BusinessPage() {
  const params = useParams();
  const slug = params.slug as string;
  const biz = businesses.find(c => c.slug === slug);

  if (!biz) {
    return (
      <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#0f172a',color:'white',fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif'}}>
        <h1 style={{fontSize:'2rem',marginBottom:'1rem'}}>Business Not Found</h1>
        <a href="/" style={{color:'#f59e0b'}}>← Back</a>
      </div>
    );
  }

  const categoryLabels: Record<string, string> = {
    plumber: '🔧 Plumbing & Heating',
    electrician: '⚡ Electrical Services',
    roofer: '🏠 Roofing Services',
    painter: '🎨 Painting & Decorating',
    tiler: '🔲 Tiling Services',
    joiner: '🪚 Joinery & Carpentry',
    landscaper: '🌿 Landscaping & Gardens',
    builder: '🏗️ Building & Construction',
    hairdresser: '💇 Hair Salon',
    barber: '💈 Barber Shop',
    'beauty salon': '✨ Beauty & Wellness',
    takeaway: '🍕 Food & Takeaway',
    mechanic: '🚗 Auto Repair & Servicing',
    'personal trainer': '💪 Personal Training & Fitness',
    cleaner: '🧹 Cleaning Services',
    'dog groomer': '🐕 Pet Grooming',
    handyman: '🔨 Handyman Services',
    plasterer: '🏠 Plastering Services',
    locksmith: '🔑 Locksmith Services',
    fencer: '🏡 Fencing & Gates',
  };

  const label = categoryLabels[biz.category] || `🔧 ${biz.category.charAt(0).toUpperCase() + biz.category.slice(1)} Services`;
  const city = biz.address.includes('Londonderry') ? 'Derry' : biz.address.split(',').slice(-3, -2)[0]?.trim() || 'Derry';

  return (
    <div style={{fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',background:'#0f172a',color:'white',minHeight:'100vh'}}>
      
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#1e293b 0%,#0f172a 100%)',padding:'3rem 1.5rem',textAlign:'center',borderBottom:'2px solid #f59e0b'}}>
        <div style={{fontSize:'0.85rem',color:'#f59e0b',fontWeight:600,letterSpacing:2,textTransform:'uppercase',marginBottom:'1rem'}}>{label}</div>
        <h1 style={{fontSize:'2.5rem',fontWeight:800,marginBottom:'0.5rem',lineHeight:1.2}}>{biz.name}</h1>
        <p style={{color:'#94a3b8',fontSize:'1.1rem',marginBottom:'2rem'}}>Trusted local service in {city}</p>
        {biz.phone && (
          <a href={`tel:${biz.phone.replace(/\s/g,'')}`} style={{display:'inline-block',background:'#f59e0b',color:'#0f172a',padding:'1rem 2.5rem',borderRadius:50,fontWeight:700,fontSize:'1.2rem',textDecoration:'none',boxShadow:'0 4px 15px rgba(245,158,11,0.3)'}}>
            📞 Call Now: {biz.phone}
          </a>
        )}
      </section>

      {/* Services */}
      <section style={{padding:'3rem 1.5rem',maxWidth:600,margin:'0 auto'}}>
        <h2 style={{fontSize:'1.5rem',fontWeight:700,marginBottom:'1.5rem',textAlign:'center'}}>Our Services</h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          {getServices(biz.category).map(s => (
            <div key={s} style={{background:'#1e293b',padding:'1.2rem',borderRadius:12,textAlign:'center',border:'1px solid #334155'}}>
              <div style={{fontSize:'0.95rem',fontWeight:500}}>{s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{padding:'3rem 1.5rem',background:'#1e293b'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <h2 style={{fontSize:'1.5rem',fontWeight:700,marginBottom:'1.5rem',textAlign:'center'}}>Why Choose {biz.name}?</h2>
          <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
            {['Local & Trusted — serving {city} and surrounding areas', 'Reliable & Professional — quality work every time', 'Free Quotes — no obligation, just honest pricing', 'Fully Insured — your peace of mind guaranteed'].map(item => (
              <div key={item} style={{display:'flex',alignItems:'center',gap:'0.8rem',background:'#0f172a',padding:'1rem',borderRadius:8}}>
                <span style={{color:'#f59e0b',fontSize:'1.2rem'}}>✓</span>
                <span style={{color:'#cbd5e1'}}>{item.replace('{city}', city)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{padding:'3rem 1.5rem',textAlign:'center'}}>
        <h2 style={{fontSize:'1.5rem',fontWeight:700,marginBottom:'0.5rem'}}>Get in Touch</h2>
        <p style={{color:'#94a3b8',marginBottom:'1.5rem'}}>Free quotes • No obligation • Local service</p>
        {biz.phone && (
          <a href={`tel:${biz.phone.replace(/\s/g,'')}`} style={{display:'inline-block',background:'#f59e0b',color:'#0f172a',padding:'1rem 2.5rem',borderRadius:50,fontWeight:700,fontSize:'1.1rem',textDecoration:'none',marginBottom:'1rem'}}>
            📞 {biz.phone}
          </a>
        )}
        {biz.address && (
          <p style={{color:'#64748b',fontSize:'0.9rem',marginTop:'1rem'}}>📍 {biz.address}</p>
        )}
      </section>

      {/* Footer */}
      <footer style={{padding:'2rem 1.5rem',borderTop:'1px solid #1e293b',textAlign:'center'}}>
        <p style={{color:'#475569',fontSize:'0.8rem'}}>Sample website by Blue Canvas AI • contact@bluecanvas.ai</p>
        <p style={{color:'#334155',fontSize:'0.75rem',marginTop:'0.5rem'}}>This is a demo — want it live? £500 one-off, yours forever.</p>
      </footer>
    </div>
  );
}

function getServices(category: string): string[] {
  const services: Record<string, string[]> = {
    plumber: ['Boiler Repair', 'Bathroom Install', 'Emergency Callout', 'Central Heating', 'Leak Repair', 'Power Flush'],
    electrician: ['Rewiring', 'Fuse Board', 'Lighting', 'Emergency Callout', 'Testing & Cert', 'Smart Home'],
    roofer: ['Roof Repair', 'New Roofs', 'Flat Roofing', 'Guttering', 'Chimney Work', 'Lead Work'],
    painter: ['Interior', 'Exterior', 'Wallpapering', 'Commercial', 'Power Washing', 'Deck Staining'],
    tiler: ['Bathrooms', 'Kitchens', 'Floor Tiling', 'Wall Tiling', 'Wet Rooms', 'Mosaic Work'],
    joiner: ['Kitchens', 'Doors & Windows', 'Flooring', 'Staircases', 'Bespoke Furniture', 'Decking'],
    landscaper: ['Garden Design', 'Paving', 'Fencing', 'Lawn Care', 'Tree Surgery', 'Artificial Grass'],
    builder: ['Extensions', 'Renovations', 'New Build', 'Conversions', 'Groundwork', 'Structural'],
    hairdresser: ['Cuts & Styling', 'Colour', 'Highlights', 'Wedding Hair', 'Treatments', 'Kids Cuts'],
    barber: ['Haircuts', 'Beard Trim', 'Hot Towel Shave', 'Styling', 'Kids Cuts', 'Walk-ins'],
    'beauty salon': ['Facials', 'Nails', 'Waxing', 'Lashes', 'Massage', 'Bridal'],
    takeaway: ['Order Online', 'Delivery', 'Collection', 'Meal Deals', 'Catering', 'Party Orders'],
    mechanic: ['MOT Prep', 'Servicing', 'Diagnostics', 'Brakes', 'Tyres', 'Air Con'],
    'personal trainer': ['1-to-1 Training', 'Group Classes', 'Online Coaching', 'Nutrition', 'Weight Loss', 'Strength'],
    cleaner: ['Domestic', 'Commercial', 'Deep Clean', 'End of Tenancy', 'Carpet Clean', 'Window Clean'],
    'dog groomer': ['Full Groom', 'Bath & Dry', 'Nail Trim', 'Puppy Intro', 'De-shed', 'Hand Strip'],
    handyman: ['Repairs', 'Assembly', 'Painting', 'Shelving', 'Plumbing', 'Electrical'],
    plasterer: ['Skimming', 'Rendering', 'Dry Lining', 'Coving', 'Pebble Dash', 'Repairs'],
    locksmith: ['Emergency Entry', 'Lock Change', 'Key Cutting', 'UPVC Locks', 'Safe Opening', 'Security'],
    fencer: ['Timber Fencing', 'Metal Fencing', 'Gates', 'Repairs', 'Commercial', 'Agricultural'],
  };
  return services[category] || ['Service 1', 'Service 2', 'Service 3', 'Service 4', 'Service 5', 'Service 6'];
}
