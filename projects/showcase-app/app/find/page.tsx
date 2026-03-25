"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { companies } from "@/lib/companies";

function FindRedirect() {
  const params = useSearchParams();
  const company = params.get("company") || "";

  useEffect(() => {
    if (!company) return;
    
    // Try exact match first
    const exact = companies.find(c => c.name.toLowerCase() === company.toLowerCase());
    if (exact) { window.location.href = `/${exact.slug}`; return; }
    
    // Try fuzzy match - company name contains or is contained
    const fuzzy = companies.find(c => 
      c.name.toLowerCase().includes(company.toLowerCase()) ||
      company.toLowerCase().includes(c.name.toLowerCase())
    );
    if (fuzzy) { window.location.href = `/${fuzzy.slug}`; return; }

    // Try matching by slug-ified version
    const slugified = company.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const bySlug = companies.find(c => c.slug === slugified || c.slug.includes(slugified) || slugified.includes(c.slug));
    if (bySlug) { window.location.href = `/${bySlug.slug}`; return; }

    // No match - show homepage
    window.location.href = "/";
  }, [company]);

  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'-apple-system,sans-serif'}}>
      <p style={{color:'#718096'}}>Finding your showcase...</p>
    </div>
  );
}

export default function FindPage() {
  return (
    <Suspense fallback={<div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}><p>Loading...</p></div>}>
      <FindRedirect />
    </Suspense>
  );
}
