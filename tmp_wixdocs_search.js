async function main() {
  const html = await fetch('https://dev.wix.com/docs?q=seo').then(r => r.text());
  const m = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  const data = JSON.parse(m[1]);
  const s = JSON.stringify(data);
  const matches = new Set();
  const re = /\/docs[^"'\\\s]{0,180}seo[^"'\\\s]{0,180}/ig;
  let mm;
  while ((mm = re.exec(s))) matches.add(mm[0]);
  const re2 = /\/docs[^"'\\\s]{0,180}(page|pages|metadata)[^"'\\\s]{0,180}/ig;
  while ((mm = re2.exec(s))) matches.add(mm[0]);
  console.log([...matches].sort().join('\n'));
}
main();
