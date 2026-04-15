const { chromium } = require('playwright-core');

(async() => {
  const userDataDir = '/Users/philsagent/.openclaw/workspace/tmp/chrome-gsc-profile';
  const browser = await chromium.launchPersistentContext(userDataDir, {
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--profile-directory=Default','--no-first-run','--no-default-browser-check']
  });
  const page = browser.pages()[0] || await browser.newPage();
  await page.goto('https://search.google.com/search-console?resource_id=sc-domain:bluecanvas.ai', { waitUntil: 'networkidle', timeout: 90000 });
  console.log('TITLE=' + await page.title());
  console.log('URL=' + page.url());
  const bodyText = (await page.locator('body').innerText()).slice(0, 4000);
  console.log('BODY_START\n' + bodyText + '\nBODY_END');
  await page.screenshot({ path: '/Users/philsagent/.openclaw/workspace/tmp/check_gsc_page.png', fullPage: true });
  await browser.close();
})();
