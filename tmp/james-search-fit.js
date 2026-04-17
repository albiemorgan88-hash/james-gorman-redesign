const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const hits = await page.evaluate(() => {
    const words = ['fit','fill','display mode','cropping','crop','proportions'];
    return Array.from(document.querySelectorAll('*')).map(el => {
      const t=(el.innerText||'').trim();
      const r=el.getBoundingClientRect();
      if(!t || r.width===0 || r.height===0) return null;
      const lower=t.toLowerCase();
      if(words.some(w => lower===w || lower.includes(w))) return {tag:el.tagName,text:t.slice(0,80),x:r.x,y:r.y,w:r.width,h:r.height};
      return null;
    }).filter(Boolean).slice(0,200);
  });
  console.log(JSON.stringify(hits,null,2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });