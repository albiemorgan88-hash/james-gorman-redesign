"use strict";(()=>{var e={};e.id=3703,e.ids=[3703],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},68823:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>d,patchFetch:()=>x,requestAsyncStorage:()=>l,routeModule:()=>i,serverHooks:()=>c,staticGenerationAsyncStorage:()=>u});var r={};o.r(r),o.d(r,{GET:()=>p});var n=o(49303),a=o(88716),s=o(60670);async function p(){return new Response(`User-agent: *
Allow: /

# Block admin/internal paths
Disallow: /api/
Disallow: /_next/
Disallow: /.well-known/

# Sitemap
Sitemap: https://openclawconsultant.co.uk/sitemap.xml
`,{headers:{"Content-Type":"text/plain"}})}let i=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/robots.txt/route",pathname:"/robots.txt",filename:"route",bundlePath:"app/robots.txt/route"},resolvedPagePath:"/Users/philsagent/.openclaw/workspace/projects/openclaw-consultant/app/robots.txt/route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:l,staticGenerationAsyncStorage:u,serverHooks:c}=i,d="/robots.txt/route";function x(){return(0,s.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:u})}},49303:(e,t,o)=>{e.exports=o(30517)}};var t=require("../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[8948],()=>o(68823));module.exports=r})();