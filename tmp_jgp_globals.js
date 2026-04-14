const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  await page.bringToFront();
  await page.waitForTimeout(2000);
  const result = await page.evaluate(() => {
    const keys = Object.getOwnPropertyNames(window);
    const interesting = keys.filter(k => /store|redux|editor|wix|state|model|document|site|meta/i.test(k)).sort();
    const samples = {};
    for (const k of interesting.slice(0, 200)) {
      try {
        const v = window[k];
        samples[k] = {
          type: typeof v,
          keys: v && typeof v === 'object' ? Object.keys(v).slice(0, 20) : undefined,
          str: typeof v === 'string' ? v.slice(0, 200) : undefined,
        };
      } catch (e) {
        samples[k] = { error: String(e) };
      }
    }
    return { interesting, samples };
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
