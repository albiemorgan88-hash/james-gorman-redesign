import { chromium } from '/Users/philsagent/Projects/ardmore-cricket/node_modules/playwright/index.mjs';

const SCREENS_DIR = '/Users/philsagent/.openclaw/workspace/projects/ardmore-site/ship-screenshots';
const BASE = 'https://ardmorecricket.com';

const pages = ['/', '/about', '/committee', '/news', '/draw', '/sponsors', '/login', '/signup'];

async function run() {
  const browser = await chromium.launch();
  
  for (const path of pages) {
    const name = path === '/' ? 'home' : path.replace(/\//g, '');
    
    // Mobile 375px
    const mobile = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const mPage = await mobile.newPage();
    try {
      await mPage.goto(BASE + path, { waitUntil: 'networkidle', timeout: 15000 });
    } catch(e) {
      await mPage.goto(BASE + path, { waitUntil: 'load', timeout: 15000 });
    }
    await mPage.screenshot({ path: `${SCREENS_DIR}/${name}-mobile.png`, fullPage: true });
    await mobile.close();
    
    // Desktop 1440px
    const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const dPage = await desktop.newPage();
    try {
      await dPage.goto(BASE + path, { waitUntil: 'networkidle', timeout: 15000 });
    } catch(e) {
      await dPage.goto(BASE + path, { waitUntil: 'load', timeout: 15000 });
    }
    await dPage.screenshot({ path: `${SCREENS_DIR}/${name}-desktop.png`, fullPage: true });
    await desktop.close();
    
    console.log(`✓ ${name}`);
  }
  
  // Mobile menu test
  const mctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const mp = await mctx.newPage();
  await mp.goto(BASE, { waitUntil: 'load', timeout: 15000 });
  const hamburger = mp.locator('details summary');
  if (await hamburger.count() > 0) {
    await hamburger.click();
    await mp.waitForTimeout(500);
    await mp.screenshot({ path: `${SCREENS_DIR}/mobile-menu-open.png` });
    console.log('✓ mobile menu');
  }
  await mctx.close();
  
  await browser.close();
  console.log('Done!');
}

run().catch(console.error);
