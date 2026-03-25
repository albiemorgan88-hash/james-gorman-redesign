"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import { companies } from "@/lib/companies";

function FindRedirect() {
  const params = useSearchParams();
  const company = (params.get("company") || "").trim();

  useEffect(() => {
    if (!company) { window.location.href = "/"; return; }
    
    const input = company.toLowerCase();
    
    // 1. Exact name match
    const exact = companies.find(c => c.name.toLowerCase() === input);
    if (exact) { window.location.href = `/${exact.slug}`; return; }
    
    // 2. Alias match (Company Name for Emails)
    const alias = companies.find(c => 
      c.aliases?.some(a => a.toLowerCase() === input)
    );
    if (alias) { window.location.href = `/${alias.slug}`; return; }
    
    // 3. Slugify input and match against slugs
    const slugified = input
      .replace(/[&]/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
      .replace(/-+/g, '-');
    
    const bySlug = companies.find(c => c.slug === slugified);
    if (bySlug) { window.location.href = `/${bySlug.slug}`; return; }
    
    // 4. Slugify alias and match
    const byAliasSlug = companies.find(c => 
      c.aliases?.some(a => {
        const s = a.toLowerCase().replace(/[&]/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').replace(/-+/g, '-');
        return s === slugified;
      })
    );
    if (byAliasSlug) { window.location.href = `/${byAliasSlug.slug}`; return; }

    // 5. startsWith match on name or alias
    const startMatch = companies.find(c => {
      const cLower = c.name.toLowerCase();
      if (cLower.startsWith(input) || input.startsWith(cLower)) return true;
      return c.aliases?.some(a => {
        const aLower = a.toLowerCase();
        return aLower.startsWith(input) || input.startsWith(aLower);
      });
    });
    if (startMatch) { window.location.href = `/${startMatch.slug}`; return; }

    // No match
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
