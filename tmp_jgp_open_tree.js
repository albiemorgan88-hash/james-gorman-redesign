const { chromium } = require('playwright-core');
(async()=>{
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const page = browser.contexts()[0].pages().filter(p=>p.url().includes('editor.wix.com/studio')).slice(-1)[0];
  await page.bringToFront();
  await page.locator('[data-hook="secondary-bar-command-button-treeViewPane/toggle"]').click({timeout:10000});
  await page.waitForTimeout(1500);
  const data = await page.evaluate(() => {
    const texts = Array.from(document.querySelectorAll('body *')).map(el => ({dh:el.getAttribute('data-hook'), txt:(el.innerText||'').trim()})).filter(x => x.txt && /layers|tree|page|section|cell|stack|text|button|social|contact|comp-/i.test(x.txt) || (x.dh && /tree|layers|pane|panel/i.test(x.dh)));
    return texts.slice(0,300);
  });
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})().catch(err=>{console.error(err);process.exit(1);});
