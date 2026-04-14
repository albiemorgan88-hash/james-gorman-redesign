const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  const entries = await page.evaluate(() => performance.getEntriesByType('resource').map(e => e.name));
  const filtered = entries.filter(x => /document|seo|update|component|html-editor|manage\.wix|editor\.wix|meta|page|site-properties/i.test(x));
  console.log(JSON.stringify(filtered, null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
