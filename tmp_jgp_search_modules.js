const { chromium } = require('playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
  const page = browser.contexts()[0].pages().filter(p=>p.url().includes('editor.wix.com/studio')).slice(-1)[0];
  const patterns = [
    'rich text', 'RichText', 'richText', 'CKEDITOR', 'startEditing', 'editMode', 'save', 'publish', 'command', 'selectionModel', 'selectComponent', 'pages.data.update', 'components.layout.update'
  ];
  const result = await page.evaluate((patterns) => {
    const chunk = window.webpackChunk_wix_responsive_editor_packages; let req; chunk.push([[Symbol('probe-search')], {}, r => req = r]);
    const ids = Object.keys(req.m || {});
    const out = {};
    for (const pat of patterns) {
      const re = new RegExp(pat.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      out[pat] = [];
      for (const id of ids) {
        let src=''; try { src=String(req.m[id]); } catch(e) { continue; }
        if (re.test(src)) {
          out[pat].push({id, snippet: src.slice(0,500)});
          if (out[pat].length >= 12) break;
        }
      }
    }
    return out;
  }, patterns);
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch(err=>{console.error(err);process.exit(1);});
