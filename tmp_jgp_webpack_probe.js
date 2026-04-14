const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const page = browser.contexts()[0].pages().filter(p=>p.url().includes('editor.wix.com/studio')).slice(-1)[0];
  const result = await page.evaluate(() => {
    const chunk = window.webpackChunk_wix_responsive_editor_packages;
    if (!chunk || typeof chunk.push !== 'function') return { error: 'no chunk' };
    let req;
    try {
      chunk.push([[Symbol('probe')], {}, r => { req = r; }]);
    } catch (e) {
      return { error: 'push failed', message: String(e) };
    }
    if (!req) return { error: 'no require' };
    const ids = Object.keys(req.m || {});
    const hits = [];
    for (const id of ids.slice(0, 50000)) {
      let fn;
      try { fn = req.m[id]; } catch(e) { continue; }
      const src = String(fn);
      if (/documentManagement|componentsPrivateService|pagesService|pages\.data\.update|components\.layout\.update|documentOverridesAPI/.test(src)) {
        hits.push({ id, snippet: src.slice(0, 500) });
        if (hits.length >= 30) break;
      }
    }
    return { moduleCount: ids.length, hits };
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
