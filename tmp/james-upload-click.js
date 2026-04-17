const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const frame = page.frames().find(f => f.name()==='mediaGalleryFrame');
  if (!frame) throw new Error('mediaGalleryFrame not found');
  const [chooser] = await Promise.all([
    page.waitForEvent('filechooser', { timeout: 5000 }).catch(() => null),
    frame.getByText('Upload Media', { exact: true }).click({ force: true })
  ]);
  console.log('filechooser', !!chooser);
  const count = await frame.locator('input[type="file"]').count();
  console.log('fileInputsAfter', count);
  if (count) {
    const els = await frame.locator('input[type="file"]').evaluateAll(nodes => nodes.map((n,i)=>({i,multiple:n.multiple,accept:n.accept}))); 
    console.log(JSON.stringify(els,null,2));
  }
  await page.waitForTimeout(1000);
  console.log((await frame.evaluate(() => document.body.innerText.slice(0,3000))));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });