const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  if (!page) throw new Error('editor page not found');
  await page.mouse.click(20,62);
  await page.waitForTimeout(1000);
  const text = await page.evaluate(() => document.body.innerText.slice(0,3000));
  console.log(text);
  const matches = await page.evaluate(() => {
    const words=['HTML','Custom','Embed','IFrame'];
    return Array.from(document.querySelectorAll('*'))
      .map(el => ({t:(el.innerText||'').trim(), r:el.getBoundingClientRect()}))
      .filter(x => x.t && words.some(w => x.t===w || x.t.includes(w)))
      .slice(0,80)
      .map(x => ({t:x.t, x:x.r.x, y:x.r.y, w:x.r.width, h:x.r.height}));
  });
  console.log(JSON.stringify(matches, null, 2));
  await page.screenshot({path:'/Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/assets/compliance-logos/_add-panel-search.png'});
  console.log('saved');
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });