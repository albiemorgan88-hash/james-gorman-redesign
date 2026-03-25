import { businesses } from "@/lib/companies";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{fontFamily:'-apple-system,sans-serif',background:'#0f172a',minHeight:'100vh',padding:'2rem',color:'white'}}>
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'3rem'}}>
          <h1 style={{fontSize:'2rem',fontWeight:700,marginBottom:'0.5rem'}}>Blue Canvas AI — Sample Websites</h1>
          <p style={{color:'#94a3b8'}}>{businesses.length} sample websites for local businesses</p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))',gap:'1rem'}}>
          {businesses.map(b => (
            <Link key={b.slug} href={`/${b.slug}`} style={{background:'#1e293b',padding:'1.5rem',borderRadius:12,textDecoration:'none',display:'block',border:'1px solid #334155'}}>
              <div style={{fontWeight:600,color:'white',marginBottom:'0.3rem'}}>{b.name}</div>
              <div style={{fontSize:'0.85rem',color:'#f59e0b'}}>{b.category}</div>
              <div style={{fontSize:'0.8rem',color:'#64748b',marginTop:'0.3rem'}}>{b.phone}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
