const { chromium } = require('playwright-core');
(async()=>{
 const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
 const page = browser.contexts()[0].pages().filter(p=>p.url().includes('editor.wix.com/studio')).slice(-1)[0];
 const ids=['comp-lwdtc78511','comp-lwdtc7835','comp-lwdtc781','comp-mdso5yy48','comp-mdsoxoys'];
 const res=await page.evaluate((ids)=>{
   const all=Array.from(document.querySelectorAll('*'));
   const out={};
   ids.forEach(id=>{
     out[id]=all.filter(el=>{
       const dh=el.getAttribute('data-hook')||''; const tid=el.getAttribute('data-testid')||''; const i=el.id||''; const cls=(el.className&&String(el.className))||'';
       return dh.includes(id)||tid.includes(id)||i.includes(id)||cls.includes(id);
     }).slice(0,50).map(el=>({tag:el.tagName,dataHook:el.getAttribute('data-hook'),id:el.id,cls:String(el.className).slice(0,120),text:(el.innerText||'').trim().slice(0,60)}));
   });
   return out;
 }, ids);
 console.log(JSON.stringify(res,null,2));
 await browser.close();
})().catch(err=>{console.error(err);process.exit(1);});
