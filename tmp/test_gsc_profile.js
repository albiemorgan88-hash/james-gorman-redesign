const fs = require('fs');
const { chromium } = require('playwright-core');

(async() => {
  const userDataDir = '/Users/philsagent/.openclaw/workspace/tmp/chrome-gsc-profile';
  const browser = await chromium.launchPersistentContext(userDataDir, {
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--profile-directory=Default','--no-first-run','--no-default-browser-check']
  });
  const page = browser.pages()[0] || await browser.newPage();
  await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded', timeout: 60000 });
  console.log('TITLE=' + await page.title());
  console.log('URL=' + page.url());
  await page.screenshot({ path: '/Users/philsagent/.openclaw/workspace/tmp/test_gsc_profile.png', fullPage: true });
  await browser.close();
})();
