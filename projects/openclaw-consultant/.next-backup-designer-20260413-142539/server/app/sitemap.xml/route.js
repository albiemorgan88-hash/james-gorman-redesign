"use strict";(()=>{var e={};e.id=6717,e.ids=[6717],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},55315:e=>{e.exports=require("path")},52377:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>h,patchFetch:()=>y,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>d,staticGenerationAsyncStorage:()=>m});var a={};t.r(a),t.d(a,{GET:()=>c});var o=t(49303),s=t(88716),i=t(60670);let l=require("fs");var n=t(55315);async function c(){let e="https://openclawconsultant.co.uk",r=new Date().toISOString(),t=[];try{let e=(0,n.join)(process.cwd(),"app","guides");t=(0,l.readdirSync)(e,{withFileTypes:!0}).filter(e=>e.isDirectory()&&!e.name.startsWith("[")&&!e.name.startsWith(".")).map(e=>e.name).sort()}catch{t=[]}let a=[];try{let e=(0,n.join)(process.cwd(),"app","services");(0,l.readdirSync)(e,{withFileTypes:!0}).filter(e=>e.isDirectory()&&!e.name.startsWith("[")&&!e.name.startsWith(".")).forEach(e=>a.push(e.name))}catch{}let o=[];try{let e=(0,n.join)(process.cwd(),"app","case-studies");(0,l.readdirSync)(e,{withFileTypes:!0}).filter(e=>e.isDirectory()&&!e.name.startsWith("[")&&!e.name.startsWith(".")).forEach(e=>o.push(e.name))}catch{}return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${e}</loc>
    <lastmod>${r}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${e}/pricing</loc>
    <lastmod>${r}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${e}/guides</loc>
    <lastmod>${r}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${e}/case-studies</loc>
    <lastmod>${r}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${t.map(t=>`  <url>
    <loc>${e}/guides/${t}</loc>
    <lastmod>${r}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join("\n")}
${a.map(t=>`  <url>
    <loc>${e}/services/${t}</loc>
    <lastmod>${r}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join("\n")}
${o.map(t=>`  <url>
    <loc>${e}/case-studies/${t}</loc>
    <lastmod>${r}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join("\n")}
</urlset>`,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=3600"}})}let p=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"route",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"/Users/philsagent/.openclaw/workspace/projects/openclaw-consultant/app/sitemap.xml/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:u,staticGenerationAsyncStorage:m,serverHooks:d}=p,h="/sitemap.xml/route";function y(){return(0,i.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:m})}},49303:(e,r,t)=>{e.exports=t(30517)}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[8948],()=>t(52377));module.exports=a})();