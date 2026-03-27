import { Suspense } from "react";
import { companies } from "@/lib/companies";
import { Metadata } from "next";

interface PageProps {
  searchParams: { company?: string };
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const company = searchParams.company?.trim() || "Company";
  
  return {
    title: `AI Showcase for ${company} | Blue Canvas`,
    description: `See how AI could transform ${company}. Custom AI solutions, SEO optimization, and automation tools designed for your business.`,
    openGraph: {
      title: `AI Showcase for ${company}`,
      description: `See how AI could transform ${company}. Custom AI solutions, SEO optimization, and automation tools.`,
      type: 'website',
    },
  };
}

export default function FindPage({ searchParams }: PageProps) {
  const company = searchParams.company?.trim() || "";

  if (!company) {
    return (
      <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'-apple-system,sans-serif'}}>
        <p style={{color:'#718096'}}>No company specified</p>
      </div>
    );
  }

  return <ShowcasePage companyName={company} />;
}

function ShowcasePage({ companyName }: { companyName: string }) {
  // Try to find in existing companies first for any specific data
  const input = companyName.toLowerCase();
  
  // Check for exact match or alias
  const existingCompany = companies.find(c => 
    c.name.toLowerCase() === input || 
    c.aliases?.some(a => a.toLowerCase() === input)
  );

  // Use existing company data if found, otherwise create dynamic data
  const company = existingCompany || {
    name: companyName,
    website: `https://${companyName.toLowerCase().replace(/[^a-z0-9]+/g, '')}.com`,
    slug: companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    aliases: []
  };

  const domain = company.website.replace(/https?:\/\//, '').replace(/\/$/, '');

  return <DynamicShowcase company={company} domain={domain} />;
}

function DynamicShowcase({ company, domain }: { company: any; domain: string }) {
  return (
    <div style={{fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',background:'linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%)',minHeight:'100vh'}}>
      <ShowcaseContent company={company} domain={domain} />
    </div>
  );
}

function ShowcaseContent({ company, domain }: { company: any; domain: string }) {
  return (
    <div>
      {/* Slide 1 - Introduction */}
      <Slide brand>
        <h1 style={h1Style}>What if AI could transform<br/>{company.name}?</h1>
        <p style={pStyle}>We built this sample use case to show what's possible. Scroll down to explore.</p>
        <div style={{...btnStyle, cursor:'default', marginTop: '2rem'}}>Scroll to See What's Possible ↓</div>
      </Slide>

      {/* Slide 2 - Current Score */}
      <Slide brand>
        <h2 style={h2Style}>Your Current Digital Score</h2>
        <div style={{width:150,height:150,borderRadius:'50%',background:'conic-gradient(#FF4520 126deg,#e2e8f0 0deg)',display:'flex',alignItems:'center',justifyContent:'center',margin:'2rem auto'}}>
          <div style={{width:120,height:120,borderRadius:'50%',background:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.5rem',fontWeight:700,color:'#FF4520'}}>35</div>
        </div>
        <p style={pStyle}>We audited <strong>{domain}</strong> and found significant opportunities for AI-powered improvement.</p>
        <MetricGrid metrics={[{v:'35/100',l:'SEO Score'},{v:'2.8s',l:'Page Load'},{v:'12',l:'Keywords'},{v:'Low',l:'Local Visibility'}]} />
      </Slide>

      {/* Slide 3 - Improvements */}
      <Slide brand>
        <h2 style={h2Style}>What We'd Fix First</h2>
        <Improvement before="Limited local search presence" after="Ranking for 50+ local keywords within 90 days" />
        <Improvement before="No automated lead capture" after="AI chatbot qualifying leads 24/7" />
        <Improvement before="Manual content creation" after="AI-generated blog content driving organic traffic" />
      </Slide>

      {/* Slide 4 - AI Assistant */}
      <Slide brand>
        <h2 style={h2Style}>AI Assistant for {company.name}</h2>
        <p style={pStyle}>Imagine an AI assistant on your website, handling enquiries instantly:</p>
        <div style={{background:'white',borderRadius:16,padding:'1.5rem',maxWidth:400,width:'100%',margin:'1.5rem auto',boxShadow:'0 4px 15px rgba(0,0,0,0.1)',textAlign:'left'}}>
          <ChatMsg user>Hi, I'd like to learn more about your services</ChatMsg>
          <ChatMsg>Welcome! I'd be happy to help. What specifically are you looking for?</ChatMsg>
          <ChatMsg user>What are your prices?</ChatMsg>
          <ChatMsg>Great question! I can arrange a free consultation. Shall I book that in?</ChatMsg>
        </div>
      </Slide>

      {/* Slide 5 - Projected Score */}
      <Slide brand>
        <h2 style={h2Style}>Your Projected Score</h2>
        <div style={{width:150,height:150,borderRadius:'50%',background:'conic-gradient(#38a169 302deg,#e2e8f0 0deg)',display:'flex',alignItems:'center',justifyContent:'center',margin:'2rem auto'}}>
          <div style={{width:120,height:120,borderRadius:'50%',background:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'2.5rem',fontWeight:700,color:'#38a169'}}>84</div>
        </div>
        <p style={pStyle}>With AI-powered SEO, content, and automation, we project <strong>{company.name}</strong> could achieve an 84/100 digital score.</p>
        <MetricGrid metrics={[{v:'84/100',l:'SEO Score',g:true},{v:'1.2s',l:'Page Load',g:true},{v:'95+',l:'Keywords',g:true},{v:'High',l:'Local Visibility',g:true}]} />
      </Slide>

      {/* Slide 6 - Blue Canvas Services */}
      <Slide brand>
        <h2 style={h2Style}>What Blue Canvas Does</h2>
        <p style={pStyle}>AI-powered tools built for businesses like yours:</p>
        <div style={{maxWidth:500,display:'flex',flexWrap:'wrap',gap:8,justifyContent:'center'}}>
          {['🔍 SEO','🤖 AI Chatbots','📝 Content','📊 Analytics','📧 Email Automation','🎯 Lead Gen','💻 Web Design','📱 Mobile'].map(t => (
            <span key={t} style={{background:'#ebf4ff',color:'#2B4DAF',padding:'0.3rem 0.8rem',borderRadius:20,fontSize:'0.85rem',fontWeight:500}}>{t}</span>
          ))}
        </div>
      </Slide>

      {/* Slide 7 - Social Proof */}
      <Slide brand>
        <h2 style={h2Style}>Trusted by NI Businesses</h2>
        <MetricGrid metrics={[{v:'12+',l:'Active Clients'},{v:'250%',l:'Avg Traffic Increase'},{v:'Derry',l:'Based Locally'},{v:'24/7',l:'AI-Powered'}]} />
        <p style={{fontStyle:'italic',color:'#718096',maxWidth:500,margin:'1rem auto',fontSize:'1rem'}}>"Blue Canvas transformed our online presence. The AI tools they built save us hours every week."</p>
      </Slide>

      {/* Slide 8 - CTA */}
      <Slide brand>
        <h1 style={h1Style}>Ready to Transform<br/>{company.name}?</h1>
        <p style={pStyle}>Let's chat about how AI can grow your business. No obligation, no jargon.</p>
        <a href={`mailto:contact@bluecanvas.ai?subject=AI%20Consultation%20-%20${encodeURIComponent(company.name)}`} style={{...btnStyle,textDecoration:'none',display:'inline-block'}}>Book a Free Consultation →</a>
        <p style={{marginTop:'2rem',fontSize:'0.9rem',color:'#a0aec0'}}>contact@bluecanvas.ai | bluecanvas.ai | Derry, Northern Ireland</p>
      </Slide>
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
const btnStyle: React.CSSProperties = {background:'linear-gradient(135deg,#2B4DAF 0%,#1e3a8a 100%)',color:'white',padding:'1rem 2rem',border:'none',borderRadius:50,fontSize:'1.1rem',fontWeight:600,boxShadow:'0 4px 15px rgba(43,77,175,0.3)'};