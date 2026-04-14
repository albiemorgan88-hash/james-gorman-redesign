const { chromium } = require('playwright-core');

async function getEditor(page) {
  const frameEl = page.frameLocator('iframe');
  return frameEl;
}

async function getSelectionInfo(page) {
  const info = await page.evaluate(() => {
    const bc = Array.from(document.querySelectorAll('[data-hook="breadcrumbs"] [data-hook="Text"], [data-hook="breadcrumbs"] [data-hook="item"], [data-hook="breadcrumbs"] [data-hook="last-item"]')).map(el => el.textContent.trim()).filter(Boolean);
    const inspector = document.querySelector('[data-hook="responsive-inspector-breadcrumb-title"]')?.textContent?.trim() || '';
    const label = document.querySelector('[data-hook="indication-layer-over-indicators"]')?.innerText?.trim().replace(/\s+/g,' ') || '';
    return { breadcrumbs: bc, inspector, label };
  });
  return info;
}

(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const page = browser.contexts()[0].pages().filter(p=>p.url().includes('editor.wix.com/studio')).slice(-1)[0];
  await page.bringToFront();
  const frame = page.frame({ url: /editor\/web\/renderer\/render\/document/ }) || page.frames().find(f => /editor\/web\/renderer\/render\/document/.test(f.url()));
  if (!frame) throw new Error('frame not found');
  const targets = [
    'comp-lwdtc78616',
    'comp-lwdtc78314',
    'comp-lwq3m8rr7',
    'comp-mdsoxoys'
  ];
  const results = [];
  for (const id of targets) {
    const loc = frame.locator('#' + id);
    const count = await loc.count();
    if (!count) { results.push({id, error:'not found'}); continue; }
    await loc.scrollIntoViewIfNeeded();
    const box = await loc.boundingBox();
    const text = await loc.innerText().catch(()=> '');
    const href = await loc.getAttribute('href').catch(()=> null);
    const tries = [];
    const attempts = [
      {name:'click-center', action: async()=> { await loc.click({timeout:5000}); }},
      {name:'dblclick-center', action: async()=> { await loc.dblclick({timeout:5000}); }},
      {name:'click-center-alt', action: async()=> { await loc.click({modifiers:['Alt'], timeout:5000}); }},
      {name:'click-center-meta', action: async()=> { await loc.click({modifiers:['Meta'], timeout:5000}); }},
      {name:'click-offset', action: async()=> { await loc.click({position:{x:10,y:10}, timeout:5000}); }},
    ];
    for (const a of attempts) {
      try {
        await a.action();
        await page.waitForTimeout(500);
        tries.push({attempt:a.name, selection: await getSelectionInfo(page)});
      } catch (e) {
        tries.push({attempt:a.name, error:String(e)});
      }
    }
    results.push({id, box, text:text.slice(0,120), href, tries});
  }
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})().catch(err=>{console.error(err); process.exit(1);});
