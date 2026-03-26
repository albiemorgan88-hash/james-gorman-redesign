"use client";
import { businesses } from "@/lib/companies";
import { useState } from "react";

type Region = "all" | "derry" | "belfast";

const DERRY_KEYWORDS = ['londonderry','derry','limavady','strabane','eglinton','drumahoe','campsie','culmore','pennyburn','springtown','prehen','creggan','carnhill','waterside','letterkenny','donegal','moville','buncrana','muff','bridgend'];

function getRegion(address: string): "derry" | "belfast" {
  const lower = address.toLowerCase();
  return DERRY_KEYWORDS.some(k => lower.includes(k)) ? "derry" : "belfast";
}

export default function OutreachPage() {
  const [sent, setSent] = useState<Set<string>>(new Set());
  const [region, setRegion] = useState<Region>("all");
  
  const markSent = (slug: string) => {
    setSent(prev => { const next = new Set(Array.from(prev)); next.add(slug); return next; });
  };

  const formatPhone = (phone: string) => {
    let p = phone.replace(/\s/g, '').replace(/[()-]/g, '');
    if (p.startsWith('07')) p = '44' + p.slice(1);
    if (p.startsWith('028')) p = '44' + p.slice(1);
    if (p.startsWith('+')) p = p.slice(1);
    return p;
  };

  const getWhatsAppUrl = (biz: typeof businesses[0]) => {
    const phone = formatPhone(biz.phone);
    const siteUrl = `https://tradesman-sites.vercel.app/${biz.slug}`;
    const displayName = biz.name.split(' ').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
    const msg = encodeURIComponent(
      `Hi — put together a website for ${displayName}, have a look:\n\n${siteUrl}\n\nThis is just a low effort placeholder — we can fully customise it to your preferences.\n\nGets you showing up on Google so customers find you directly. You'll get more enquiries within the first week.\n\n£500 to get it live on your own domain. £50/month to keep it ranking.\n\nNo obligation — just thought it was worth sharing.\n\nPhil\nBlue Canvas AI\n07828699027`
    );
    return `https://wa.me/${phone}?text=${msg}`;
  };

  const filtered = businesses.filter(b => b.phone).filter(b => {
    if (region === "all") return true;
    return getRegion(b.address) === region;
  });

  const allWithPhone = businesses.filter(b => b.phone);
  const derryCount = allWithPhone.filter(b => getRegion(b.address) === "derry").length;
  const belfastCount = allWithPhone.filter(b => getRegion(b.address) === "belfast").length;
  const done = sent.size;

  return (
    <div style={{fontFamily:'-apple-system,sans-serif',background:'#0f172a',minHeight:'100vh',color:'white'}}>
      {/* Header */}
      <div style={{position:'sticky',top:0,background:'#0f172a',borderBottom:'1px solid #1e293b',padding:'1rem 1.5rem',zIndex:10}}>
        <h1 style={{fontSize:'1.3rem',fontWeight:700,marginBottom:'0.3rem'}}>WhatsApp Outreach Dashboard</h1>
        <div style={{display:'flex',gap:'1rem',fontSize:'0.85rem',color:'#94a3b8'}}>
          <span>📱 {filtered.length} contacts</span>
          <span>✅ {done} sent</span>
        </div>
        <div style={{background:'#1e293b',borderRadius:4,height:6,marginTop:'0.5rem',overflow:'hidden'}}>
          <div style={{background:'#f59e0b',height:'100%',width:`${(done/allWithPhone.length)*100}%`,transition:'width 0.3s'}} />
        </div>

        {/* Region tabs */}
        <div style={{display:'flex',gap:'0.5rem',marginTop:'0.75rem'}}>
          {([
            { key: "all" as Region, label: `All (${allWithPhone.length})` },
            { key: "derry" as Region, label: `Derry (${derryCount})` },
            { key: "belfast" as Region, label: `Belfast & NI (${belfastCount})` },
          ]).map(tab => (
            <button
              key={tab.key}
              onClick={() => setRegion(tab.key)}
              style={{
                flex: 1,
                padding: '0.5rem',
                borderRadius: 8,
                border: region === tab.key ? '2px solid #f59e0b' : '1px solid #334155',
                background: region === tab.key ? '#f59e0b22' : '#1e293b',
                color: region === tab.key ? '#f59e0b' : '#94a3b8',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div style={{padding:'1rem'}}>
        {filtered.map(biz => {
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
                  <div style={{fontSize:'0.7rem',color:'#64748b',marginTop:'0.2rem'}}>{biz.address}</div>
                </div>
                {isSent && <span style={{color:'#22c55e',fontSize:'0.8rem',fontWeight:600}}>✅ SENT</span>}
              </div>
              
              <div style={{display:'flex',gap:'0.5rem',marginTop:'0.5rem'}}>
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
                  👁️ Preview
                </a>
                
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
                  {isSent ? '↩️ Send Again' : '📱 WhatsApp'}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
