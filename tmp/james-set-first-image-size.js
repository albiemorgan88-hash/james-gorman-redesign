const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const boxes = await page.locator('input').evaluateAll(inputs => inputs.map((i, idx) => ({idx, value:i.value, type:i.type, aria:i.getAttribute('aria-label'), name:i.getAttribute('name')})));
  console.log(JSON.stringify(boxes.slice(0,20), null, 2));
  const vals = ['250','26','300','58'];
  const loc = page.locator('input[type="text"], input:not([type])');
  for (let i=0;i<4;i++) {
    const el = loc.nth(i);
    await el.click({force:true});
    await page.keyboard.press(process.platform === 'darwin' ? 'Meta+A' : 'Control+A');
    await page.keyboard.type(vals[i]);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
  }
  await page.waitForTimeout(1500);
  console.log((await page.evaluate(() => document.body.innerText.slice(0,2000))));
  await page.screenshot({path:'/Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/assets/compliance-logos/_after-first-image-size.png'});
  console.log('saved');
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });