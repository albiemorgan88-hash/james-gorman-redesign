const [,, wsUrl, expr] = process.argv;
if (!wsUrl || !expr) {
  console.error('usage: node tmp_cdp_eval.js <wsUrl> <expr>');
  process.exit(2);
}
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
    await send('Runtime.enable');
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
