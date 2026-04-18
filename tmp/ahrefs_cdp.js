const http = require('http');

async function getTabs() {
  return await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:18800/json/list', res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function withTab(matchFn, fn) {
  const tabs = await getTabs();
  const tab = tabs.find(matchFn);
  if (!tab) throw new Error('tab not found');
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();

  ws.addEventListener('message', ev => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(JSON.stringify(msg.error)));
      else resolve(msg.result);
    }
  });

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const msgId = ++id;
    pending.set(msgId, { resolve, reject });
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });

  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve);
    ws.addEventListener('error', reject);
  });

  try {
    await send('Page.enable');
    await send('Runtime.enable');
    const result = await fn({ send, tab });
    ws.close();
    return result;
  } catch (err) {
    try { ws.close(); } catch {}
    throw err;
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const mode = process.argv[2];
  const arg = process.argv[3];

  if (mode === 'inspect') {
    const data = await withTab(t => t.id === arg || t.url === arg, async ({ send }) => {
      const out = await send('Runtime.evaluate', {
        expression: `({title: document.title, href: location.href, text: document.body.innerText.slice(0,12000)})`,
        returnByValue: true
      });
      return out.result.value;
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (mode === 'controls') {
    const data = await withTab(t => t.url.startsWith('https://app.ahrefs.com/site-explorer'), async ({ send }) => {
      const out = await send('Runtime.evaluate', {
        expression: `Array.from(document.querySelectorAll('input, textarea, button, [role="button"], select')).map((el,i)=>({i, tag: el.tagName, type: el.type || null, name: el.name || null, placeholder: el.placeholder || null, text: (el.innerText||el.textContent||'').trim().slice(0,120), value: el.value || null, outer: el.outerHTML.slice(0,300)}))`,
        returnByValue: true
      });
      return out.result.value;
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (mode === 'navigate') {
    const data = await withTab(t => t.id === arg || t.url.startsWith('https://app.ahrefs.com/site-explorer'), async ({ send }) => {
      await send('Page.navigate', { url: process.argv[4] });
      await sleep(Number(process.argv[5] || 5000));
      const out = await send('Runtime.evaluate', {
        expression: `({title: document.title, href: location.href, text: document.body.innerText.slice(0,12000)})`,
        returnByValue: true
      });
      return out.result.value;
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (mode === 'fillAndSubmit') {
    const target = arg;
    const data = await withTab(t => t.url.startsWith('https://app.ahrefs.com/site-explorer'), async ({ send }) => {
      const fill = await send('Runtime.evaluate', {
        expression: `(() => {
          const input = document.querySelector('input');
          if (!input) return {ok:false, reason:'no input'};
          input.focus();
          input.value = ${JSON.stringify(target)};
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
          const btns = Array.from(document.querySelectorAll('button, [role="button"]'));
          const submit = btns.find(b => /explore|search|show results|site explorer/i.test((b.innerText||b.textContent||''))) || btns.find(b => !b.disabled);
          if (submit) submit.click();
          else input.form && input.form.submit();
          return {ok:true, clicked: submit ? (submit.innerText||submit.textContent||'').trim() : null};
        })()`,
        returnByValue: true
      });
      await sleep(Number(process.argv[4] || 8000));
      const out = await send('Runtime.evaluate', {
        expression: `({title: document.title, href: location.href, text: document.body.innerText.slice(0,16000)})`,
        returnByValue: true
      });
      return { action: fill.result.value, page: out.result.value };
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (mode === 'eval') {
    const expr = process.argv.slice(3).join(' ');
    const data = await withTab(t => t.url.startsWith('https://app.ahrefs.com/site-explorer'), async ({ send }) => {
      const out = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
      return out.result.value;
    });
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  throw new Error('unknown mode');
}

main().catch(err => {
  console.error(err.stack || err.message || String(err));
  process.exit(1);
});