const { chromium } = require('/Users/philsagent/Projects/ardmore-cricket/node_modules/playwright');
const SCREENSHOTS = '/Users/philsagent/.openclaw/workspace/projects/ardmore-site/screenshots';
const BASE = 'http://localhost:3000';

async function run() {
  const browser = await chromium.launch({ headless: true });
  
  // Wait for dev server to pick up changes
  await new Promise(r => setTimeout(r, 3000));
  
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  
  // About page - verify captain fix
  await page.goto(`${BASE}/about`, { waitUntil: 'networkidle', timeout: 15000 });
  const aboutText = await page.textContent('body');
  console.log('Captain Rachit Gaur present:', aboutText.includes('Rachit Gaur'));
  console.log('Old captain removed:', !aboutText.includes('Harry Zimmerman'));
  await page.screenshot({ path: `${SCREENSHOTS}/about-mobile-fixed.png`, fullPage: true });
  
  // Draw page - verify prize breakdown
  await page.goto(`${BASE}/draw`, { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  const drawText = await page.textContent('body');
  console.log('Has 40% club:', drawText.includes('40%'));
  console.log('Has "Where Your Money Goes":', drawText.includes('Where Your Money Goes'));
  console.log('Has Club Funds:', drawText.includes('Club Funds'));
  await page.screenshot({ path: `${SCREENSHOTS}/draw-mobile-fixed.png`, fullPage: true });
  
  // Check all 5 tabs are visible on mobile
  const tabs = await page.$$('button:has-text("–")');
  console.log('Number of range tabs:', tabs.length);
  for (const tab of tabs) {
    const text = await tab.textContent();
    console.log('  Tab:', text);
  }
  
  // Click 401-500 tab
  const tab5 = tabs.find(async t => (await t.textContent()).includes('401'));
  if (tabs.length >= 5) {
    await tabs[4].click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${SCREENSHOTS}/draw-mobile-tab5.png`, fullPage: true });
    const gridText = await page.textContent('body');
    console.log('Has number 401:', gridText.includes('401'));
    console.log('Has number 500:', gridText.includes('500'));
  }
  
  // Desktop draw
  await ctx.close();
  const ctx2 = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page2 = await ctx2.newPage();
  await page2.goto(`${BASE}/draw`, { waitUntil: 'networkidle', timeout: 15000 });
  await page2.waitForTimeout(1000);
  await page2.screenshot({ path: `${SCREENSHOTS}/draw-desktop-fixed.png`, fullPage: true });
  
  await browser.close();
  console.log('DONE');
}
run().catch(e => console.error('FATAL:', e));
