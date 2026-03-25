"use client";
import { useParams } from "next/navigation";
import { getCompanyBySlug, companies } from "@/lib/companies";
import { useState } from "react";
import { notFound } from "next/navigation";

export default function ShowcasePage() {
  const params = useParams();
  const slug = params.slug as string;
  const company = companies.find(c => c.slug === slug);
  const [current, setCurrent] = useState(1);
  const total = 8;

  if (!company) {
    return (
      <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',background:'#f8fafc',fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif'}}>
        <h1 style={{fontSize:'2rem',color:'#1a202c',marginBottom:'1rem'}}>Showcase Not Found</h1>
        <p style={{color:'#718096'}}>This company doesn&apos;t have a showcase yet.</p>
        <a href="/" style={{marginTop:'2rem',color:'#2B4DAF'}}>← View all showcases</a>
      </div>
    );
  }

  const domain = company.website.replace(/https?:\/\//, '').replace(/\/$/, '');

  const goTo = (n: number) => setCurrent(Math.min(total, Math.max(1, n)));

  return (
    <div style={{fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',background:'linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)',minHeight:'100vh'}}
      onTouchStart={(e) => { (window as any)._touchX = e.touches[0].clientX; }}
      onTouchEnd={(e) => { const d = ((window as any)._touchX || 0) - e.changedTouches[0].clientX; if (Math.abs(d) > 50) goTo(current + (d > 0 ? 1 : -1)); }}
    >
      {/* Slides */}
      {current === 1 && (
        <Slide brand>
          <h1 style={h1Style}>What if AI could transform<br/>{company.name}?</h1>
          <p style={pStyle}>We built this sample use case to show what&apos;s possible. Tap through to explore.</p>
          <button style={btnStyle} onClick={() => goTo(2)}>See What&apos;s Possible →</button>
        </Slide>
      )}
      {current === 2 && (
        <Slide brand>
          <h2 style={h2Style}>Your Current Digital Score</h2>
          <div style={{width:150,height:150,borderRadius:'50%',background:'conic-gradient(#FF4520 126deg,#e2e8f0 0deg)',display:'flex',alignItems:'center',justifyContent:'center',margin:'2rem auto'}}>
            <div style={{width:120,height:120,borderRadius:'50%',background:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.5rem',fontWeight:700,color:'#FF4520'}}>35</div>
          </div>
          <p style={pStyle}>We audited <strong>{domain}</strong> and found significant opportunities for AI-powered improvement.</p>
          <MetricGrid metrics={[{v:'35/100',l:'SEO Score'},{v:'2.8s',l:'Page Load'},{v:'12',l:'Keywords'},{v:'Low',l:'Local Visibility'}]} />
        </Slide>
      )}
      {current === 3 && (
        <Slide brand>
          <h2 style={h2Style}>What We&apos;d Fix First</h2>
          <Improvement before="Limited local search presence" after="Ranking for 50+ local keywords within 90 days" />
          <Improvement before="No automated lead capture" after="AI chatbot qualifying leads 24/7" />
          <Improvement before="Manual content creation" after="AI-generated blog content driving organic traffic" />
        </Slide>
      )}
      {current === 4 && (
        <Slide brand>
          <h2 style={h2Style}>AI Assistant for {company.name}</h2>
          <p style={pStyle}>Imagine an AI assistant on your website, handling enquiries instantly:</p>
          <div style={{background:'white',borderRadius:16,padding:'1.5rem',maxWidth:400,width:'100%',margin:'1.5rem auto',boxShadow:'0 4px 15px rgba(0,0,0,0.1)',textAlign:'left'}}>
            <ChatMsg user>Hi, I&apos;d like to learn more about your services</ChatMsg>
            <ChatMsg>Welcome! I&apos;d be happy to help. What specifically are you looking for?</ChatMsg>
            <ChatMsg user>What are your prices?</ChatMsg>
            <ChatMsg>Great question! I can arrange a free consultation. Shall I book that in?</ChatMsg>
          </div>
        </Slide>
      )}
      {current === 5 && (
        <Slide brand>
          <h2 style={h2Style}>Your Projected Score</h2>
          <div style={{width:150,height:150,borderRadius:'50%',background:'conic-gradient(#38a169 302deg,#e2e8f0 0deg)',display:'flex',alignItems:'center',justifyContent:'center',margin:'2rem auto'}}>
            <div style={{width:120,height:120,borderRadius:'50%',background:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.5rem',fontWeight:700,color:'#38a169'}}>84</div>
          </div>
          <p style={pStyle}>With AI-powered SEO, content, and automation, we project <strong>{company.name}</strong> could achieve an 84/100 digital score.</p>
          <MetricGrid metrics={[{v:'84/100',l:'SEO Score',g:true},{v:'1.2s',l:'Page Load',g:true},{v:'95+',l:'Keywords',g:true},{v:'High',l:'Local Visibility',g:true}]} />
        </Slide>
      )}
      {current === 6 && (
        <Slide brand>
          <h2 style={h2Style}>What Blue Canvas Does</h2>
          <p style={pStyle}>AI-powered tools built for businesses like yours:</p>
          <div style={{maxWidth:500,display:'flex',flexWrap:'wrap',gap:8,justifyContent:'center'}}>
            {['🔍 SEO','🤖 AI Chatbots','📝 Content','📊 Analytics','📧 Email Automation','🎯 Lead Gen','💻 Web Design','📱 Mobile'].map(t => (
              <span key={t} style={{background:'#ebf4ff',color:'#2B4DAF',padding:'0.3rem 0.8rem',borderRadius:20,fontSize:'0.85rem',fontWeight:500}}>{t}</span>
            ))}
          </div>
        </Slide>
      )}
      {current === 7 && (
        <Slide brand>
          <h2 style={h2Style}>Trusted by NI Businesses</h2>
          <MetricGrid metrics={[{v:'12+',l:'Active Clients'},{v:'250%',l:'Avg Traffic Increase'},{v:'Derry',l:'Based Locally'},{v:'24/7',l:'AI-Powered'}]} />
          <p style={{fontStyle:'italic',color:'#718096',maxWidth:500,margin:'1rem auto',fontSize:'1rem'}}>&quot;Blue Canvas transformed our online presence. The AI tools they built save us hours every week.&quot;</p>
        </Slide>
      )}
      {current === 8 && (
        <Slide brand>
          <h1 style={h1Style}>Ready to Transform<br/>{company.name}?</h1>
          <p style={pStyle}>Let&apos;s chat about how AI can grow your business. No obligation, no jargon.</p>
          <a href={`mailto:contact@bluecanvas.ai?subject=AI%20Consultation%20-%20${encodeURIComponent(company.name)}`} style={{...btnStyle,textDecoration:'none',display:'inline-block'}}>Book a Free Consultation →</a>
          <p style={{marginTop:'2rem',fontSize:'0.9rem',color:'#a0aec0'}}>contact@bluecanvas.ai | bluecanvas.ai | Derry, Northern Ireland</p>
        </Slide>
      )}

      {/* Navigation dots */}
      <div style={{position:'fixed',bottom:'2rem',left:'50%',transform:'translateX(-50%)',display:'flex',gap:8,zIndex:100}}>
        {Array.from({length:total},(_,i)=>(
          <button key={i} onClick={()=>goTo(i+1)} style={{width:10,height:10,borderRadius:'50%',background:current===i+1?'#2B4DAF':'#cbd5e0',border:'none',cursor:'pointer',transition:'all 0.3s',transform:current===i+1?'scale(1.3)':'scale(1)'}} />
        ))}
      </div>
    </div>
  );
}

function Slide({ children, brand }: { children: React.ReactNode; brand?: boolean }) {
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'2rem',textAlign:'center',position:'relative'}}>
      {brand && <div style={{position:'absolute',top:'2rem',left:'2rem',fontSize:'1rem',fontWeight:600,color:'#2B4DAF'}}>Blue Canvas AI</div>}
      {children}
    </div>
  );
}

function MetricGrid({ metrics }: { metrics: {v:string;l:string;g?:boolean}[] }) {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:'1.5rem',maxWidth:600,margin:'2rem auto',width:'100%'}}>
      {metrics.map(m => (
        <div key={m.l} style={{background:'white',padding:'1.5rem',borderRadius:12,boxShadow:'0 2px 10px rgba(0,0,0,0.08)'}}>
          <div style={{fontSize:'1.8rem',fontWeight:700,color:m.g?'#38a169':'#2B4DAF'}}>{m.v}</div>
          <div style={{fontSize:'0.85rem',color:'#718096',marginTop:'0.3rem'}}>{m.l}</div>
        </div>
      ))}
    </div>
  );
}

function Improvement({ before, after }: { before: string; after: string }) {
  return (
    <div style={{background:'white',padding:'1.5rem',borderRadius:12,margin:'0.5rem 0',maxWidth:500,width:'100%',textAlign:'left',boxShadow:'0 2px 10px rgba(0,0,0,0.06)'}}>
      <p><span style={{color:'#e53e3e',fontWeight:600}}>❌ Before:</span> {before}</p>
      <p><span style={{color:'#38a169',fontWeight:600}}>✅ After:</span> {after}</p>
    </div>
  );
}

function ChatMsg({ children, user }: { children: React.ReactNode; user?: boolean }) {
  return (
    <div style={{padding:'0.8rem 1rem',borderRadius:12,margin:'0.5rem 0',fontSize:'0.95rem',lineHeight:1.4,...(user?{background:'#2B4DAF',color:'white',marginLeft:'2rem',borderBottomRightRadius:4}:{background:'#f1f5f9',color:'#2d3748',marginRight:'2rem',borderBottomLeftRadius:4})}}>
      {children}
    </div>
  );
}

const h1Style: React.CSSProperties = {fontSize:'2.5rem',fontWeight:700,color:'#1a202c',marginBottom:'1rem',lineHeight:1.2};
const h2Style: React.CSSProperties = {fontSize:'1.8rem',fontWeight:600,color:'#2d3748',marginBottom:'1.5rem'};
const pStyle: React.CSSProperties = {fontSize:'1.1rem',color:'#4a5568',maxWidth:600,margin:'0 auto 2rem',lineHeight:1.6};
const btnStyle: React.CSSProperties = {background:'linear-gradient(135deg,#2B4DAF 0%,#1e3a8a 100%)',color:'white',padding:'1rem 2rem',border:'none',borderRadius:50,fontSize:'1.1rem',fontWeight:600,cursor:'pointer',boxShadow:'0 4px 15px rgba(43,77,175,0.3)'};
