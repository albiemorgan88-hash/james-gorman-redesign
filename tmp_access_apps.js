(async()=>{
  const access = await fetch('https://www.jamesgormanproperty.com/_api/v1/access-tokens').then(r=>r.json());
  const apps = access.apps || {};
  console.log('app ids count', Object.keys(apps).length);
  for (const k of Object.keys(apps)) {
    const v = apps[k];
    const out = { id:k, keys:Object.keys(v) };
    if (v.instance) out.instancePrefix = String(v.instance).slice(0,60);
    console.log(JSON.stringify(out));
  }
})();
