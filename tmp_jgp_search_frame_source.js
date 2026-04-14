const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  const frame = page.frame({ name: 'preview-frame' });
  await page.waitForTimeout(3000);
  const html = await frame.content();
  const ids = ['comp-lwdtc78616','comp-lwdtc78314','comp-lwq3m8rr7','comp-mdsoxoys'];
  for (const id of ids) {
    const idx = html.indexOf(id);
    console.log('\nID', id, 'idx', idx);
    if (idx >= 0) console.log(html.slice(Math.max(0, idx - 500), idx + 1500));
  }
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
