const { chromium } = require('/Users/philsagent/Projects/ardmore-cricket/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const SCREENSHOTS = '/Users/philsagent/.openclaw/workspace/projects/ardmore-site/screenshots';
const BASE = 'http://localhost:3000';
const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'draw', path: '/draw' },
  { name: 'sponsors', path: '/sponsors' },
  { name: 'login', path: '/login' },
  { name: 'signup', path: '/signup' },
];

async function run() {
  const browser = await chromium.launch({ headless: true });
  const results = { issues: [], consoleErrors: [], networkErrors: [], pageData: {} };

  // Phase 1: Visual screenshots at all viewports for all pages
  console.log('=== PHASE 1: Visual & Layout Audit ===');
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();
    
    for (const pg of PAGES) {
      console.log(`  Screenshot: ${pg.name} @ ${vp.name}`);
      try {
        const resp = await page.goto(`${BASE}${pg.path}`, { waitUntil: 'networkidle', timeout: 15000 });
        const status = resp ? resp.status() : 'no response';
        if (status !== 200) {
          results.issues.push({ page: pg.name, viewport: vp.name, severity: 'P0', issue: `HTTP ${status} on ${pg.path}` });
        }
        await page.waitForTimeout(1000);
        await page.screenshot({ path: `${SCREENSHOTS}/${pg.name}-${vp.name}.png`, fullPage: true });
      } catch (e) {
        console.log(`    ERROR: ${e.message.slice(0,150)}`);
        results.issues.push({ page: pg.name, viewport: vp.name, severity: 'P0', issue: `Page failed to load: ${e.message.slice(0,100)}` });
      }
    }
    await context.close();
  }

  // Phase 2-4: Content, flows, technical
  console.log('\n=== PHASE 2-4: Content, Flows, Technical ===');
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      results.consoleErrors.push({ url: page.url(), text: msg.text().slice(0, 200) });
    }
  });
  
  page.on('requestfailed', req => {
    results.networkErrors.push({ url: req.url(), failure: req.failure()?.errorText });
  });

  // Homepage
  console.log('  Checking homepage...');
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 15000 });
  const homeText = await page.textContent('body');
  results.pageData.home = {
    has1879: homeText.includes('1879'),
    hasBleachGreen: homeText.includes('Bleach Green'),
    hasDrawCTA: homeText.toLowerCase().includes('draw') || homeText.toLowerCase().includes('support'),
    hasArdmore: homeText.includes('Ardmore'),
  };

  // About
  console.log('  Checking about...');
  await page.goto(`${BASE}/about`, { waitUntil: 'networkidle', timeout: 15000 });
  const aboutText = await page.textContent('body');
  results.pageData.about = {
    has1879: aboutText.includes('1879'),
    hasBleachGreen: aboutText.includes('Bleach Green'),
    hasAddress: aboutText.includes('BT47 3RG') || aboutText.includes('10 Green Road'),
    hasCaptain: aboutText.includes('Rachit Gaur'),
    hasHonours: aboutText.includes('2023') && aboutText.includes('1994'),
    hasTeams: aboutText.includes('1st XI'),
    hasTraining: aboutText.includes('Tuesday') && aboutText.includes('Friday'),
    hasFacilities: aboutText.includes('Floodlit') || aboutText.includes('Function Room'),
  };

  // Draw page
  console.log('  Checking draw page...');
  await page.goto(`${BASE}/draw`, { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(2000);
  const drawText = await page.textContent('body');
  
  // Count grid items
  const gridItems = await page.$$eval('button, [class*="number"]', els => els.length);
  
  results.pageData.draw = {
    hasCountdown: drawText.toLowerCase().includes('next draw') || drawText.includes('Friday') || /\d+:\d+/.test(drawText),
    hasPrizeSplit25: drawText.includes('25%'),
    hasPrizeSplit15: drawText.includes('15%'),
    hasPrizeSplit10: drawText.includes('10%'),
    hasPrizeSplit40Club: drawText.includes('40%'),
    hasPrizeSplit75Platform: drawText.includes('7.5%'),
    hasPrizeSplit25Stripe: drawText.includes('2.5%'),
    has500: drawText.includes('500'),
    gridItemCount: gridItems,
    textSample: drawText.slice(0, 3000),
  };

  // Check for pagination
  const paginationEls = await page.$$('button:has-text("Next"), button:has-text("next"), [class*="pagina"], button:has-text("›"), button:has-text("»")');
  results.pageData.draw.hasPagination = paginationEls.length > 0;

  // Try to find and click a number
  const numberBtns = await page.$$('[data-number], button:not([disabled])');
  console.log(`  Found ${numberBtns.length} clickable elements on draw page`);
  
  if (numberBtns.length > 5) {
    try {
      await numberBtns[5].click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${SCREENSHOTS}/draw-number-selected.png`, fullPage: true });
    } catch(e) {}
  }

  // Check placeholder text across all pages
  console.log('  Checking for placeholders...');
  for (const pg of PAGES) {
    try {
      await page.goto(`${BASE}${pg.path}`, { waitUntil: 'networkidle', timeout: 15000 });
      const text = await page.textContent('body');
      for (const ph of ['Lorem ipsum', 'TODO', 'FIXME', 'example.com', 'your-']) {
        if (text.toLowerCase().includes(ph.toLowerCase())) {
          results.issues.push({ page: pg.name, severity: 'P1', issue: `Placeholder text: "${ph}"` });
        }
      }
    } catch(e) {}
  }

  // SEO basics
  console.log('  SEO checks...');
  for (const pg of PAGES) {
    try {
      await page.goto(`${BASE}${pg.path}`, { waitUntil: 'networkidle', timeout: 15000 });
      const title = await page.title();
      const metaDesc = await page.$eval('meta[name="description"]', el => el.content).catch(() => null);
      const h1s = await page.$$eval('h1', els => els.length);
      if (!title) results.issues.push({ page: pg.name, severity: 'P2', issue: 'Missing title' });
      if (!metaDesc) results.issues.push({ page: pg.name, severity: 'P2', issue: 'Missing meta description' });
      if (h1s === 0) results.issues.push({ page: pg.name, severity: 'P2', issue: 'No H1' });
      if (h1s > 1) results.issues.push({ page: pg.name, severity: 'P2', issue: `${h1s} H1 tags` });
    } catch(e) {}
  }

  // Auth pages
  console.log('  Auth checks...');
  await page.goto(`${BASE}/login`, { waitUntil: 'networkidle', timeout: 15000 });
  const loginHasEmail = await page.$('input[type="email"]') !== null;
  const loginHasPassword = await page.$('input[type="password"]') !== null;
  const loginText = await page.textContent('body');
  const loginHasGoogle = loginText.toLowerCase().includes('google');
  results.pageData.auth = { loginHasEmail, loginHasPassword, loginHasGoogle };

  // 404 check
  console.log('  404 check...');
  const resp404 = await page.goto(`${BASE}/nonexistent-xyz`, { waitUntil: 'networkidle', timeout: 15000 });
  await page.screenshot({ path: `${SCREENSHOTS}/404-page.png`, fullPage: true });

  // Social links
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 15000 });
  const allLinks = await page.$$eval('a', els => els.map(e => ({ href: e.href, target: e.target })));
  const socials = allLinks.filter(l => l.href.includes('instagram') || l.href.includes('facebook') || l.href.includes('twitter'));
  const externalNoTarget = allLinks.filter(l => (l.href.startsWith('http') && !l.href.includes('localhost')) && l.target !== '_blank');
  if (externalNoTarget.length > 0) {
    results.issues.push({ page: 'home', severity: 'P2', issue: `${externalNoTarget.length} external links without target="_blank"` });
  }
  results.pageData.socialLinks = socials;

  await context.close();
  await browser.close();

  console.log('\n=== RESULTS JSON ===');
  console.log(JSON.stringify(results, null, 2));
}

run().catch(e => console.error('FATAL:', e));
