const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const frame = page.frames().find(f => f.name()==='preview-frame');
  const el = frame.locator('#comp-mo2ys3g4');
  await el.screenshot({path:'/Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/assets/compliance-logos/_preview-section.png'});
  console.log('saved');
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });