const { chromium } = require('playwright-core');

function isObj(v){ return v && (typeof v === 'object' || typeof v === 'function'); }

(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  const result = await page.evaluate(() => {
    const hits = [];
    const seen = new WeakSet();
    function walk(obj, path, depth) {
      if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) return;
      if (seen.has(obj) || depth > 3) return;
      seen.add(obj);
      let keys = [];
      try { keys = Object.getOwnPropertyNames(obj); } catch(e) { return; }
      const keySet = new Set(keys);
      const looksInteresting = (
        keySet.has('documentManagement') ||
        keySet.has('pagesService') ||
        keySet.has('componentsPrivateService') ||
        (keySet.has('pages') && keySet.has('components')) ||
        (keySet.has('data') && keySet.has('get') && keySet.has('update'))
      );
      if (looksInteresting) {
        hits.push({ path, keys: keys.slice(0, 40) });
      }
      for (const k of keys.slice(0, 80)) {
        let v;
        try { v = obj[k]; } catch(e) { continue; }
        if (v && (typeof v === 'object' || typeof v === 'function')) {
          walk(v, path ? path + '.' + k : k, depth + 1);
        }
      }
    }
    walk(window, 'window', 0);
    return hits;
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
