const fs = require('fs');
const { chromium } = require('playwright-core');

(async() => {
  const src = '/Users/philsagent/.openclaw/workspace/openclaw';
  const dst = '/Users/philsagent/.openclaw/workspace/tmp/seo-browser/openclaw-copy-signin';
  fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(src, dst, { recursive: true });
  const context = await chromium.launchPersistentContext(dst, {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
    args: ['--profile-directory=Default', '--disable-blink-features=AutomationControlled'],
    viewport: { width: 1440, height: 1200 },
  });
  const page = context.pages()[0] || await context.newPage();
  await page.goto('https://ahrefs.com/site-explorer', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForTimeout(5000);
  const accept = page.getByRole('button', { name: /accept all/i });
  if (await accept.count()) await accept.first().click().catch(() => {});
  await page.waitForTimeout(1000);
  const signInLink = page.getByRole('link', { name: /^sign in$/i }).first();
  if (await signInLink.count()) {
    await signInLink.click();
  } else {
    const signInBtn = page.getByRole('button', { name: /sign in/i }).first();
    if (await signInBtn.count()) await signInBtn.click();
  }
  await page.waitForTimeout(10000);
  const out = {
    url: page.url(),
    title: await page.title(),
    body: (await page.locator('body').innerText()).slice(0, 10000),
  };
  console.log(JSON.stringify(out, null, 2));
  await page.screenshot({ path: '/Users/philsagent/.openclaw/workspace/tmp/seo-browser/ahrefs-click-signin.png', fullPage: true });
  await context.close();
})().catch(err => { console.error(err); process.exit(1); });
