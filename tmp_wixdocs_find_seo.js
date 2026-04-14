async function main() {
  const html = await fetch('https://dev.wix.com/docs').then(r => r.text());
  const m = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  const data = JSON.parse(m[1]);
  const seen = new Set();
  function walk(node, path=[]) {
    if (node == null) return;
    if (typeof node === 'string') {
      if (node.toLowerCase().includes('seo')) {
        const key = path.join('.');
        if (!seen.has(key + '|' + node)) {
          seen.add(key + '|' + node);
          console.log(key + ' => ' + node);
        }
      }
      return;
    }
    if (Array.isArray(node)) {
      node.forEach((v,i)=>walk(v, path.concat('['+i+']')));
      return;
    }
    if (typeof node === 'object') {
      for (const [k,v] of Object.entries(node)) walk(v, path.concat(k));
    }
  }
  walk(data);
}
main();
