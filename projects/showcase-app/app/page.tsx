import { companies } from "@/lib/companies";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{fontFamily:'-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',background:'#f8fafc',minHeight:'100vh',padding:'2rem'}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'3rem'}}>
          <h1 style={{fontSize:'2rem',fontWeight:700,color:'#1a202c',marginBottom:'0.5rem'}}>Blue Canvas AI — Showcases</h1>
          <p style={{color:'#718096'}}>{companies.length} personalised AI showcases for Northern Ireland businesses</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))',gap:'1rem'}}>
          {companies.map(c => (
            <Link key={c.slug} href={`/${c.slug}`} style={{background:'white',padding:'1.5rem',borderRadius:12,boxShadow:'0 2px 8px rgba(0,0,0,0.06)',textDecoration:'none',transition:'transform 0.2s',display:'block'}}>
              <div style={{fontWeight:600,color:'#1a202c',marginBottom:'0.3rem'}}>{c.name}</div>
              <div style={{fontSize:'0.85rem',color:'#718096'}}>{c.website.replace(/https?:\/\//,'')}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
