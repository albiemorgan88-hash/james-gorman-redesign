const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const all = page.locator('input');
  for (const [idx, val] of [[10,'0'], [11,'100']]) {
    const el = all.nth(idx);
    await el.click({ force: true });
    await page.keyboard.press('Meta+A');
    await page.keyboard.type(val);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(500);
  }
  console.log(await page.evaluate(() => Array.from(document.querySelectorAll('input')).map((i,idx)=>({idx,type:i.type,value:i.value})).slice(0,18)));
  await page.screenshot({path:'/Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/assets/compliance-logos/_after-fix-opacity.png'});
  console.log('saved');
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });