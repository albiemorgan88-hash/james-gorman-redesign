const { chromium } = require('playwright-core');
(async() => {
 const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
 browser.contexts()[0].pages().forEach((p,i)=>console.log(i,p.url()));
 process.exit(0);
})().catch(err => { console.error(err); process.exit(1); });
