const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  const scripts = await page.locator('script[src]').evaluateAll(ss => ss.map(s => s.src));
  console.log(JSON.stringify(scripts.filter(s => /document|editor|responsive/i.test(s)), null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
