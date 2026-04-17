const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const data = await page.evaluate(() => Array.from(document.querySelectorAll('button,[role="button"]')).map((el,i)=>{
    const r = el.getBoundingClientRect();
    const txt = (el.innerText||'').trim();
    if (r.width===0||r.height===0||r.y<0||r.y>900) return null;
    return {i,tag:el.tagName,text:txt,aria:el.getAttribute('aria-label'),title:el.getAttribute('title'),class:el.className,x:r.x,y:r.y,w:r.width,h:r.height};
  }).filter(Boolean));
  console.log(JSON.stringify(data,null,2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });