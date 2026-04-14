(async()=>{
  const urls = process.argv.slice(2);
  for (const url of urls) {
    const html = await fetch(url).then(r=>r.text());
    const title = (html.match(/<title>(.*?)<\/title>/i)||[])[1] || '';
    const desc = (html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)||[])[1] || '';
    const ogTitle = (html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]*)"/i)||[])[1] || '';
    const ogSite = (html.match(/<meta[^>]+property="og:site_name"[^>]+content="([^"]*)"/i)||[])[1] || '';
    const mailtos = [...new Set([...html.matchAll(/mailto:[^"'\s<)]+/gi)].map(m=>m[0]))];
    const socials = [...new Set([...html.matchAll(/https?:\/\/www\.(instagram|facebook)\.com[^"'\s<)]+/gi)].map(m=>m[0]))];
    console.log('\n=== '+url+' ===');
    console.log('TITLE:', title);
    console.log('DESC:', desc);
    console.log('OG_TITLE:', ogTitle);
    console.log('OG_SITE:', ogSite);
    console.log('MAILTOS:', JSON.stringify(mailtos));
    console.log('SOCIALS:', JSON.stringify(socials));
  }
})();
