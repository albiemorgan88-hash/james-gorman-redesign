const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  await page.bringToFront();
  const frame = page.frame({ name: 'preview-frame' });
  await page.waitForTimeout(4000);
  const locator = frame.locator('#comp-lwdtc78616');
  await locator.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await locator.click({ force: true });
  await page.waitForTimeout(5000);
  console.log('BODY\n' + (await page.locator('body').innerText()).slice(0, 7000));
  await page.screenshot({ path: '/Users/philsagent/.openclaw/workspace/tmp-jgp-after-click.png' });
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
