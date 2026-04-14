const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const context = browser.contexts()[0];
  const pages = context.pages().filter(p => p.url().includes('editor.wix.com/studio'));
  const page = pages[pages.length - 1];
  const data = await page.evaluate(() => ({
    topology: window.editorModel && window.editorModel.topology,
    serviceTopology: window.responsiveEditorModel && window.responsiveEditorModel.serviceTopology,
    configuration: window.responsiveEditorModel && window.responsiveEditorModel.configuration,
    environment: window.responsiveEditorModel && window.responsiveEditorModel.environment,
  }));
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
