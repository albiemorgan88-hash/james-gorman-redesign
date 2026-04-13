const { chromium } = require('playwright');
const pages = [
  { name: 'learn-home', url: 'http://127.0.0.1:3010/' },
  { name: 'learn-guides', url: 'http://127.0.0.1:3010/guides' },
  { name: 'uktj-home', url: 'http://127.0.0.1:3002/' },
  { name: 'uktj-careers', url: 'http://127.0.0.1:3002/careers' },
  { name: 'occ-home', url: 'http://127.0.0.1:3003/' },
  { name: 'occ-guides', url: 'http://127.0.0.1:3003/guides' },
];
const viewports = [
  { label: 'mobile', width: 375, height: 812, mobile: true },
  { label: 'tablet', width: 768, height: 1024, mobile: false },
  { label: 'desktop', width: 1440, height: 1200, mobile: false },
];
(async() => {
  const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
  for (const p of pages) {
    for (const vp of viewports) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height }, isMobile: vp.mobile, hasTouch: vp.mobile, deviceScaleFactor: 1 });
      try {
        await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
        const metrics = await page.evaluate(() => {
          const q = (s) => Array.from(document.querySelectorAll(s));
          const allTap = q('a, button, summary, input, textarea, select');
          const smallTap = allTap.map(el => {
            const r = el.getBoundingClientRect();
            const text = (el.textContent || el.getAttribute('aria-label') || el.getAttribute('placeholder') || '').trim().replace(/\s+/g, ' ').slice(0, 80);
            return { text, width: Math.round(r.width), height: Math.round(r.height), tag: el.tagName.toLowerCase() };
          }).filter(x => x.width > 0 && x.height > 0 && (x.width < 44 || x.height < 44)).slice(0, 10);
          const fixedEls = q('*').filter(el => {
            const cs = getComputedStyle(el);
            return (cs.position === 'fixed' || cs.position === 'sticky') && el.getBoundingClientRect().width > 0 && el.getBoundingClientRect().height > 0;
          }).slice(0, 10).map(el => ({ tag: el.tagName.toLowerCase(), cls: (el.className||'').toString().slice(0,80), text: (el.textContent||'').trim().replace(/\s+/g,' ').slice(0,40) }));
          return {
            title: document.title,
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
            hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 2,
            smallTap,
            fixedEls,
            h1: document.querySelector('h1')?.textContent?.trim() || null,
            sections: Array.from(document.querySelectorAll('section h2')).slice(0,8).map(el => el.textContent?.trim()),
          };
        });
        console.log(JSON.stringify({ page: p.name, viewport: vp.label, ...metrics }));
      } catch (e) {
        console.log(JSON.stringify({ page: p.name, viewport: vp.label, error: String(e) }));
      } finally {
        await page.close();
      }
    }
  }
  await browser.close();
})();
