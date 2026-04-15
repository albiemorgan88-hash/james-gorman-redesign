const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const page = context.pages().find(p => p.url().includes('manage.wix.com/dashboard/4b8170fd-99cc-45e8-a4fb-e28bb7156d52/manage-apps'));
  if (!page) throw new Error('manage page not found');
  await page.bringToFront();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(()=>{});
  const before = new Set(context.pages().map(p => p.url()));
  await page.getByRole('button', { name: 'Edit Site' }).click();
  await page.waitForTimeout(7000);
  const pages = context.pages();
  console.log('PAGES AFTER CLICK');
  for (const [i,p] of pages.entries()) {
    console.log(i, p.url());
  }
  const editor = pages.find(p => /editor\.wix\.com|manage\.wix\.com\/website-editor/.test(p.url()));
  if (editor) {
    await editor.bringToFront();
    await editor.waitForLoadState('domcontentloaded', { timeout: 30000 }).catch(()=>{});
    console.log('EDITOR URL', editor.url());
    console.log('EDITOR TITLE', await editor.title().catch(()=>''));
    await editor.screenshot({ path: '/Users/philsagent/.openclaw/workspace/tmp-editor-open.png', fullPage: false }).catch(()=>{});
    const body = await editor.locator('body').innerText().catch(e => 'ERR:' + e.message);
    console.log('BODY\n' + String(body).slice(0, 5000));
  } else {
    console.log('NO EDITOR PAGE FOUND');
  }
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
