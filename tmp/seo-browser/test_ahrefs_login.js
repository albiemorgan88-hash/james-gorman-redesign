const fs = require('fs');
const { chromium } = require('playwright-core');

(async() => {
  const email = process.env.AHREFS_EMAIL;
  const password = process.env.AHREFS_PASSWORD;
  if (!email || !password) throw new Error('Missing AHREFS_EMAIL or AHREFS_PASSWORD');
  const src = '/Users/philsagent/.openclaw/workspace/openclaw';
  const dst = '/Users/philsagent/.openclaw/workspace/tmp/seo-browser/openclaw-copy-login';
  fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(src, dst, { recursive: true });
  const context = await chromium.launchPersistentContext(dst, {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
    args: ['--profile-directory=Default', '--disable-blink-features=AutomationControlled'],
    viewport: { width: 1440, height: 1200 },
  });
  const page = context.pages()[0] || await context.newPage();
  await page.goto('https://app.ahrefs.com/user/login', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForTimeout(5000);

  const body1 = await page.locator('body').innerText();
  if (body1.includes('Accept All')) {
    const btn = page.getByRole('button', { name: /accept all/i });
    if (await btn.count()) await btn.first().click().catch(() => {});
  }

  await page.waitForTimeout(2000);
  const emailInput = page.locator('input[type="email"], input[name="email"]');
  if (await emailInput.count()) {
    await emailInput.first().fill(email);
  }
  const passwordInput = page.locator('input[type="password"], input[name="password"]');
  if (await passwordInput.count()) {
    await passwordInput.first().fill(password);
  }
  const signInBtn = page.getByRole('button', { name: /sign in|log in/i });
  if (await signInBtn.count()) {
    await signInBtn.first().click();
  }
  await page.waitForTimeout(12000);

  await page.goto('https://app.ahrefs.com/site-explorer/overview?target=bluecanvas.ai&mode=subdomains', { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForTimeout(12000);
  const out = {
    url: page.url(),
    title: await page.title(),
    body: (await page.locator('body').innerText()).slice(0, 8000),
  };
  console.log(JSON.stringify(out, null, 2));
  await page.screenshot({ path: '/Users/philsagent/.openclaw/workspace/tmp/seo-browser/ahrefs-login-test.png', fullPage: true });
  await context.close();
})().catch(err => { console.error(err); process.exit(1); });
