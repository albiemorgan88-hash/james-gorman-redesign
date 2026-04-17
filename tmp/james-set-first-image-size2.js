const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const vals = ['130','15','520','100'];
  const indices = [4,5,6,7];
  const all = page.locator('input');
  for (let i=0;i<4;i++) {
    const el = all.nth(indices[i]);
    await el.click({force:true});
    await page.keyboard.press('Meta+A');
    await page.keyboard.type(vals[i]);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
  }
  await page.waitForTimeout(1500);
  await page.screenshot({path:'/Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/assets/compliance-logos/_after-first-image-size2.png'});
  console.log('saved');
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });