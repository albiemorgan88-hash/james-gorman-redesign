const [,, wsUrl, url, waitMsArg, expr] = process.argv;
if (!wsUrl || !url || !expr) {
  console.error('usage: node tmp_cdp_nav_eval.js <wsUrl> <url> <waitMs> <expr>');
  process.exit(2);
}
const waitMs = Number(waitMsArg || 5000);
const ws = new WebSocket(wsUrl);
let id = 0;
const pending = new Map();
function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const msgId = ++id;
    pending.set(msgId, { resolve, reject, method });
    ws.send(JSON.stringify({ id: msgId, method, params }));
  });
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
ws.onmessage = ev => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    const p = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) p.reject(new Error(`${p.method}: ${JSON.stringify(msg.error)}`));
    else p.resolve(msg.result);
  }
};
ws.onopen = async () => {
  try {
    await send('Page.enable');
    await send('Runtime.enable');
    await send('Page.navigate', { url });
    await sleep(waitMs);
    const out = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    console.log(JSON.stringify(out.result.value ?? out.result, null, 2));
    ws.close();
  } catch (e) {
    console.error(String(e));
    process.exitCode = 1;
    ws.close();
  }
};
ws.onerror = err => {
  console.error(String(err?.message || err));
  process.exit(1);
};
