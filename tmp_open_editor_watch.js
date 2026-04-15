const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  context.on('page', p => console.log('NEW_PAGE', p.url()));
  const page = context.pages().find(p => p.url().includes('manage.wix.com/dashboard/4b8170fd-99cc-45e8-a4fb-e28bb7156d52/manage-apps'));
  page.on('popup', p => console.log('POPUP', p.url()));
  await page.bringToFront();
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(()=>{});
  const btn = page.getByRole('button', { name: 'Edit Site' });
  console.log('before url', page.url());
  await btn.click({ force: true });
  console.log('clicked');
  await page.waitForTimeout(15000);
  console.log('after current url', page.url());
  const pages = context.pages();
  for (const [i,p] of pages.entries()) console.log('PAGE', i, p.url());
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
