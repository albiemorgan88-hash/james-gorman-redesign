const { chromium } = require('/opt/homebrew/lib/node_modules/openclaw/node_modules/playwright-core');
(async() => {
  const browser = await chromium.connectOverCDP('http://127.0.0.1:18800');
  const ctx = browser.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('editor.wix.com/studio') && p.url().includes('4b8170fd-99cc-45e8-a4fb-e28bb7156d52'));
  const frame = page.frames().find(f => f.name()==='preview-frame');
  const data = await frame.evaluate(() => {
    const el = document.getElementById('comp-mo2yt2yy');
    const img = el && el.querySelector('img');
    const inner = img && img.parentElement;
    function info(node){ if(!node) return null; const r=node.getBoundingClientRect(); const cs=getComputedStyle(node); return {tag:node.tagName,id:node.id||null,class:node.className||null,rect:{x:r.x,y:r.y,w:r.width,h:r.height},objectFit:cs.objectFit,objectPosition:cs.objectPosition,backgroundSize:cs.backgroundSize,transform:cs.transform,overflow:cs.overflow,position:cs.position,left:cs.left,top:cs.top,width:cs.width,height:cs.height,src:node.currentSrc||node.src||null}; }
    return {el:info(el), inner:info(inner), img:info(img), outer: el ? el.outerHTML.slice(0,1200) : null};
  });
  console.log(JSON.stringify(data,null,2));
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });