const { chromium } = require('playwright-core');

(async() => {
  const userDataDir = '/Users/philsagent/.openclaw/workspace/tmp/chrome-gsc-profile';
  const browser = await chromium.launchPersistentContext(userDataDir, {
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--profile-directory=Default','--no-first-run','--no-default-browser-check']
  });
  const page = browser.pages()[0] || await browser.newPage();
  await page.goto('https://search.google.com/search-console/about', { waitUntil: 'networkidle', timeout: 90000 });
  const links = await page.evaluate(() => Array.from(document.querySelectorAll('a')).map(a => ({text:(a.innerText||'').trim(), href:a.href})).filter(x => x.text || x.href).slice(0,100));
  console.log(JSON.stringify(links, null, 2));
  await browser.close();
})();
