const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  await page.bringToFront();
  const frame = page.frame({ name: 'preview-frame' });
  const locator = frame.locator('#comp-lwdtc78616 a', { hasText: 'Contact' });
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await locator.dblclick({ force: true });
  await page.waitForTimeout(4000);
  console.log((await page.locator('body').innerText()).slice(0, 9000));
  await page.screenshot({ path: '/Users/philsagent/.openclaw/workspace/tmp-jgp-doubleclick.png' });
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
