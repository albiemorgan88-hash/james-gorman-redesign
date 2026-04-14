const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  const frame = page.frame({ name: 'preview-frame' });
  const html = await frame.content();
  const needles = [
    'mailto:james@jamesgormanproperty.co',
    'Lettings@jamesgormaproperty.com',
    'instagram.com/wix',
    'facebook.com/WixStudio',
    'SELL MY HOME'
  ];
  for (const needle of needles) {
    const idx = html.indexOf(needle);
    console.log('\nNEEDLE', needle, 'idx', idx);
    if (idx >= 0) console.log(html.slice(Math.max(0, idx - 1200), idx + 1800));
  }
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
