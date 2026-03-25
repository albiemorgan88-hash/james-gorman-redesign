"use client";
import { businesses } from "@/lib/companies";
import { useState } from "react";

export default function OutreachPage() {
  const [sent, setSent] = useState<Set<string>>(new Set());
  
  const markSent = (slug: string) => {
    setSent(prev => { const next = new Set(Array.from(prev)); next.add(slug); return next; });
  };

  const formatPhone = (phone: string) => {
    // Convert UK numbers to international format for wa.me
    let p = phone.replace(/\s/g, '').replace(/[()-]/g, '');
    if (p.startsWith('07')) p = '44' + p.slice(1);
    if (p.startsWith('028')) p = '44' + p.slice(1);
    if (p.startsWith('+')) p = p.slice(1);
    return p;
  };

  const getWhatsAppUrl = (biz: typeof businesses[0]) => {
    const phone = formatPhone(biz.phone);
    const siteUrl = `https://tradesman-sites.vercel.app/${biz.slug}`;
    const msg = encodeURIComponent(
      `Hi, I came across ${biz.name} and put together a sample website for your business — have a look:\n\n${siteUrl}\n\n£250 to get it live on your own domain, £50/month to keep it running and showing up on Google. No obligation.\n\nPhil, Blue Canvas\n📱 07828699027`
    );
    return `https://wa.me/${phone}?text=${msg}`;
  };

  const done = sent.size;
  const total = businesses.filter(b => b.phone).length;

  return (
    <div style={{fontFamily:'-apple-system,sans-serif',background:'#0f172a',minHeight:'100vh',color:'white'}}>
      {/* Header */}
      <div style={{position:'sticky',top:0,background:'#0f172a',borderBottom:'1px solid #1e293b',padding:'1rem 1.5rem',zIndex:10}}>
        <h1 style={{fontSize:'1.3rem',fontWeight:700,marginBottom:'0.3rem'}}>WhatsApp Outreach Dashboard</h1>
        <div style={{display:'flex',gap:'1rem',fontSize:'0.85rem',color:'#94a3b8'}}>
          <span>📱 {total} contacts</span>
          <span>✅ {done} sent</span>
          <span>⏳ {total - done} remaining</span>
        </div>
        <div style={{background:'#1e293b',borderRadius:4,height:6,marginTop:'0.5rem',overflow:'hidden'}}>
          <div style={{background:'#f59e0b',height:'100%',width:`${(done/total)*100}%`,transition:'width 0.3s'}} />
        </div>
      </div>

      {/* List */}
      <div style={{padding:'1rem'}}>
        {businesses.filter(b => b.phone).map(biz => {
          const isSent = sent.has(biz.slug);
          return (
            <div key={biz.slug} style={{
              background: isSent ? '#1a2e1a' : '#1e293b',
              border: `1px solid ${isSent ? '#22c55e33' : '#334155'}`,
              borderRadius: 12,
              padding: '1rem',
              marginBottom: '0.75rem',
              opacity: isSent ? 0.6 : 1,
            }}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'0.5rem'}}>
                <div>
                  <div style={{fontWeight:600,fontSize:'1rem'}}>{biz.name}</div>
                  <div style={{fontSize:'0.8rem',color:'#f59e0b'}}>{biz.category} • {biz.phone}</div>
                </div>
                {isSent && <span style={{color:'#22c55e',fontSize:'0.8rem',fontWeight:600}}>✅ SENT</span>}
              </div>
              
              <div style={{display:'flex',gap:'0.5rem',marginTop:'0.5rem'}}>
                {/* Preview button */}
                <a 
                  href={`/${biz.slug}`}
                  target="_blank"
                  style={{
                    flex:1,
                    background:'#334155',
                    color:'#94a3b8',
                    padding:'0.7rem',
                    borderRadius:8,
                    textDecoration:'none',
                    textAlign:'center',
                    fontSize:'0.85rem',
                    fontWeight:500,
                  }}
                >
                  👁️ Preview Site
                </a>
                
                {/* WhatsApp send button */}
                <a
                  href={getWhatsAppUrl(biz)}
                  target="_blank"
                  onClick={() => markSent(biz.slug)}
                  style={{
                    flex:2,
                    background: isSent ? '#1a3a1a' : '#25D366',
                    color: 'white',
                    padding:'0.7rem',
                    borderRadius:8,
                    textDecoration:'none',
                    textAlign:'center',
                    fontSize:'0.85rem',
                    fontWeight:700,
                  }}
                >
                  {isSent ? '↩️ Send Again' : '📱 Send on WhatsApp'}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
