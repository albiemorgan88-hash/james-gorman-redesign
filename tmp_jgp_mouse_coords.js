const { chromium } = require('playwright-core');

async function getSelectionInfo(page) {
  return await page.evaluate(() => {
    const bc = Array.from(document.querySelectorAll('[data-hook="breadcrumbs"] [data-hook="Text"], [data-hook="breadcrumbs"] [data-hook="item"], [data-hook="breadcrumbs"] [data-hook="last-item"]')).map(el => el.textContent.trim()).filter(Boolean);
    return {
      breadcrumbs: bc,
      inspector: document.querySelector('[data-hook="responsive-inspector-breadcrumb-title"]')?.textContent?.trim() || '',
      label: document.querySelector('[data-hook="indication-layer-over-indicators"]')?.innerText?.trim().replace(/\s+/g,' ') || ''
    };
  });
}

(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const page = browser.contexts()[0].pages().filter(p=>p.url().includes('editor.wix.com/studio')).slice(-1)[0];
  const frame = page.frames().find(f => /editor\/web\/renderer\/render\/document/.test(f.url()));
  const iframeBox = await page.locator('iframe[name="preview-frame"]').boundingBox();
  const ids = ['comp-lwdtc78616','comp-lwdtc78314','comp-mdsoxoys'];
  const out = [];
  for (const id of ids) {
    const loc = frame.locator('#'+id);
    await loc.scrollIntoViewIfNeeded();
    const box = await loc.boundingBox();
    const points = [
      {name:'center', x:box.x + box.width/2, y:box.y + box.height/2},
      {name:'topLeft', x:box.x + 5, y:box.y + 5},
      {name:'midLeft', x:box.x + 5, y:box.y + box.height/2},
      {name:'textish', x:box.x + Math.min(30, box.width/2), y:box.y + Math.min(18, box.height/2)}
    ];
    const tries = [];
    for (const p of points) {
      for (const count of [1,2,3]) {
        try {
          const absx = iframeBox.x + p.x;
          const absy = iframeBox.y + p.y;
          await page.mouse.click(absx, absy, { clickCount: count, delay: 100 });
          await page.waitForTimeout(400);
          tries.push({point:p.name, clicks:count, selection: await getSelectionInfo(page)});
        } catch (e) {
          tries.push({point:p.name, clicks:count, error:String(e)});
        }
      }
    }
    out.push({id, box, tries});
  }
  console.log(JSON.stringify(out,null,2));
  await browser.close();
})();
