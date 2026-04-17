const fs = require('fs');
const { chromium } = require('playwright-core');

(async() => {
  const src = '/Users/philsagent/.openclaw/workspace/openclaw';
  const dst = '/Users/philsagent/.openclaw/workspace/tmp/seo-browser/openclaw-copy';
  fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(src, dst, { recursive: true });
  const browser = await chromium.launchPersistentContext(dst, {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
    args: ['--profile-directory=Default', '--disable-blink-features=AutomationControlled'],
    viewport: { width: 1440, height: 1200 },
  });
  const page = browser.pages()[0] || await browser.newPage();
  await page.goto('https://app.ahrefs.com/site-explorer/overview?target=bluecanvas.ai&mode=subdomains', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForTimeout(8000);
  const out = {
    url: page.url(),
    title: await page.title(),
    body: (await page.locator('body').innerText()).slice(0, 5000),
  };
  console.log(JSON.stringify(out, null, 2));
  await page.screenshot({ path: '/Users/philsagent/.openclaw/workspace/tmp/seo-browser/ahrefs-test.png', fullPage: true });
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
