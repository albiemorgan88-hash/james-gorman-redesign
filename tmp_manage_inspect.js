const { chromium } = require('playwright-core');
(async() => {
 const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
 const page = browser.contexts()[0].pages().find(p => p.url().includes('manage.wix.com/dashboard/4b8170fd-99cc-45e8-a4fb-e28bb7156d52/manage-apps'));
 await page.bringToFront();
 await page.waitForTimeout(3000);
 const buttons = await page.locator('button').evaluateAll(els => els.map((b,i)=>({i,text:(b.innerText||'').trim(),aria:b.getAttribute('aria-label'),testid:b.getAttribute('data-testid')})));
 console.log(JSON.stringify({buttons:buttons.filter(b=>b.text||b.aria||b.testid)}, null, 2));
 const editMatches = await page.locator('text=/Edit Site|Open in Editor/i').evaluateAll(els => els.map(el => ({text:(el.innerText||'').trim(), tag:el.tagName, href:el.href || null, html:el.outerHTML.slice(0,400)}))).catch(e=>[]);
 console.log('MATCHES ' + JSON.stringify(editMatches, null, 2));
 await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
