async function show(url, patterns) {
  const html = await fetch(url).then(r => r.text());
  const m = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  console.log('\nURL', url, 'match', !!m);
  if (!m) return;
  const s = JSON.stringify(JSON.parse(m[1]));
  for (const pat of patterns) {
    const i = s.indexOf(pat);
    console.log('PATTERN', pat, 'INDEX', i);
    if (i >= 0) console.log(s.slice(i, i + 8000));
  }
}

(async () => {
  await show('https://dev.wix.com/docs/api-reference/business-management/site-properties/properties/update-business-contact', [
    'BusinessContactData","description":"","type":"object","properties"',
    'BusinessContactData',
    'bodyParameters',
    'requestBody',
    'operationId'
  ]);
  await show('https://dev.wix.com/docs/api-reference/business-management/site-properties/properties/update-business-profile', [
    'BusinessProfileData","description":"","type":"object","properties"',
    'BusinessProfileData',
    'bodyParameters',
    'requestBody',
    'operationId'
  ]);
})();
