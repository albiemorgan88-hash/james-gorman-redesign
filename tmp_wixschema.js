(async()=>{
  const url='https://dev.wix.com/docs/api-reference/business-management/site-properties/properties/update-business-contact';
  const html=await fetch(url).then(r=>r.text());
  const m=html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  const data=JSON.parse(m[1]);
  const s=JSON.stringify(data);
  const pats=[
    'BusinessContactData","description":"","type":"object","properties"',
    'BusinessContactData',
    'Address',
    'hint'
  ];
  for(const pat of pats){
    const i=s.indexOf(pat);
    console.log('\nPATTERN',pat,'INDEX',i);
    if(i>=0) console.log(s.slice(i, i+5000));
  }
})();
