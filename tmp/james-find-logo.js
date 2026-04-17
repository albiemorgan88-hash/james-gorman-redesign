const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const frame = page.frames().find(f => f.name()==='preview-frame');
  const data = await frame.evaluate(() => {
    const els = Array.from(document.querySelectorAll('[id^="comp-"]')).map(el => {
      const t = (el.innerText||'').trim();
      const r = el.getBoundingClientRect();
      const bg = getComputedStyle(el).backgroundImage;
      const imgs = Array.from(el.querySelectorAll('img')).map(img => img.currentSrc || img.src);
      return {id:el.id, tag:el.tagName, text:t.slice(0,80), x:r.x, y:r.y, w:r.width, h:r.height, bg, imgs};
    });
    return els.filter(e => e.y >= 4700 && e.y <= 5300 || e.imgs.some(src => src.includes('client-money-protect')) || e.bg.includes('client-money-protect')).slice(0,60);
  });
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });