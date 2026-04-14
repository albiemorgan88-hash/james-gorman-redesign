const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  await page.bringToFront();
  await page.waitForTimeout(15000);
  console.log('URL', page.url());
  console.log('TITLE', await page.title());
  console.log('FRAMES', JSON.stringify(page.frames().map(f => ({ name: f.name(), url: f.url() })), null, 2));
  let body = 'NO BODY';
  try { body = await page.locator('body').innerText(); } catch {}
  console.log('BODY\n' + body.slice(0, 5000));
  await page.screenshot({ path: '/Users/philsagent/.openclaw/workspace/tmp-jgp-editor.png' });
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
