const { chromium } = require('playwright-core');
(async() => {
 const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
 const page = browser.contexts()[0].pages().find(p => p.url().includes('manage.wix.com/dashboard/4b8170fd-99cc-45e8-a4fb-e28bb7156d52/manage-apps'));
 await page.bringToFront();
 await page.waitForTimeout(2000);
 const btn = page.getByRole('button', { name: 'Edit Site' });
 console.log('count', await btn.count());
 console.log('html', await btn.first().evaluate(el => el.outerHTML));
 console.log('onclick', await btn.first().evaluate(el => ({onclick: el.getAttribute('onclick'), dataset:{...el.dataset}, aria: el.getAttribute('aria-label'), cls: el.className})));
 await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
