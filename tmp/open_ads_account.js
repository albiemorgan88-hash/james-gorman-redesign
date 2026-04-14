const http=require('http');
function get(path){return new Promise((resolve,reject)=>http.get('http://127.0.0.1:18801'+path,res=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>resolve(JSON.parse(d)));}).on('error',reject));}
(async()=>{
  const tabs=await get('/json/list');
  const page=tabs.find(t=>t.type==='page');
  const ws=new WebSocket(page.webSocketDebuggerUrl); let id=0; const pending=new Map();
  function send(method,params={}){return new Promise((resolve,reject)=>{const msg={id:++id,method,params}; pending.set(id,{resolve,reject}); ws.send(JSON.stringify(msg));});}
  ws.onmessage=ev=>{const m=JSON.parse(ev.data); if(m.id&&pending.has(m.id)){pending.get(m.id).resolve(m); pending.delete(m.id);} };
  ws.onerror=e=>console.error('ws error',e.message||e);
  ws.onopen=async()=>{
    await send('Page.enable'); await send('Runtime.enable');
    await send('Page.navigate',{url:'https://ads.google.com/nav/selectaccount?euid=1617881427&__u=7390566523&authuser=0&dst=/aw/campaigns'});
    await new Promise(r=>setTimeout(r,5000));
    let res=await send('Runtime.evaluate',{expression:`(()=>{const items=[...document.querySelectorAll('material-list-item')]; const el=items.find(x=>x.innerText.includes('801-851-4760'))||items[0]; if(!el)return 'no-item'; el.click(); return {clicked:el.innerText};})()`,returnByValue:true});
    console.log('click', JSON.stringify(res.result.result.value));
    await new Promise(r=>setTimeout(r,8000));
    res=await send('Runtime.evaluate',{expression:'({title:document.title,url:location.href,text:document.body.innerText.slice(0,4000)})',returnByValue:true});
    console.log(JSON.stringify(res.result.result.value,null,2));
    ws.close();
  };
})();
