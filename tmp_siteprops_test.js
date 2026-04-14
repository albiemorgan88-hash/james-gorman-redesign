(async()=>{
  const access = await fetch('https://www.jamesgormanproperty.com/_api/v1/access-tokens').then(r=>r.json());
  const headers = {
    'Authorization': access.ctToken,
    'wix-site-id': access.metaSiteId
  };
  const r = await fetch('https://www.wixapis.com/site-properties/v4/properties', { headers });
  console.log('status', r.status, r.headers.get('content-type'));
  const t = await r.text();
  console.log(t.slice(0,4000));
})();
