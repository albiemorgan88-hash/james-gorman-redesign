const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const frame = page.frames().find(f => f.name()==='mediaGalleryFrame');
  if (!frame) throw new Error('mediaGalleryFrame not found');
  await frame.waitForLoadState('domcontentloaded');
  const text = await frame.evaluate(() => document.body.innerText.slice(0,5000));
  console.log(text);
  const inputs = await frame.locator('input[type="file"]').count();
  console.log('fileInputs', inputs);
  const buttons = await frame.evaluate(() => Array.from(document.querySelectorAll('button')).slice(0,120).map((b,i)=>({i,text:(b.innerText||'').trim(),aria:b.getAttribute('aria-label')})).filter(x=>x.text||x.aria));
  console.log(JSON.stringify(buttons.slice(0,80), null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });