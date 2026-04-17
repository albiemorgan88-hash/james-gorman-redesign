const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  console.log(JSON.stringify(page.frames().map(f=>({name:f.name(), url:f.url()})), null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });