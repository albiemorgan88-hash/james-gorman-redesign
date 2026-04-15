const { chromium } = require('playwright-core');
(async() => {
 const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
 const context = browser.contexts()[0];
 const page = await context.newPage();
 await page.goto('https://manage.wix.com/dashboard/4b8170fd-99cc-45e8-a4fb-e28bb7156d52/manage-apps', {waitUntil:'domcontentloaded', timeout: 60000});
 await page.waitForTimeout(8000);
 console.log('URL', page.url());
 console.log('TITLE', await page.title().catch(()=>''));
 const body = await page.locator('body').innerText().catch(e=>'ERR:'+e.message);
 console.log('BODY\n'+String(body).slice(0, 3000));
 process.exit(0);
})().catch(err => { console.error(err); process.exit(1); });
