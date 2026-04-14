const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  await page.bringToFront();
  await page.waitForTimeout(5000);
  const frame = page.frame({ name: 'preview-frame' });
  console.log('FRAME URL', frame && frame.url());
  const ids = ['comp-lwdtc78616','comp-lwdtc78314','comp-lwq3m8rr7','comp-mdsoxoys'];
  for (const id of ids) {
    const count = frame ? await frame.locator('#' + id).count().catch(() => -1) : -1;
    console.log(id, 'count', count);
    if (count > 0) {
      const html = await frame.locator('#' + id).first().evaluate(el => el.outerHTML.slice(0, 1000)).catch(() => 'ERR');
      console.log(id, html);
    }
  }
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
