const http=require('http');
function get(path){return new Promise((resolve,reject)=>http.get('http://127.0.0.1:18801'+path,res=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>resolve(JSON.parse(d)));}).on('error',reject));}
(async()=>{
  const tabs=await get('/json/list');
  const page=tabs.find(t=>t.type==='page');
  const ws=new WebSocket(page.webSocketDebuggerUrl); let id=0; const pending=new Map();
  function send(method,params={}){return new Promise((resolve,reject)=>{const msg={id:++id,method,params}; pending.set(id,{resolve,reject}); ws.send(JSON.stringify(msg));});}
  ws.onmessage=ev=>{const m=JSON.parse(ev.data); if(m.id&&pending.has(m.id)){pending.get(m.id).resolve(m); pending.delete(m.id);} };
  ws.onopen=async()=>{
    await send('Page.enable'); await send('Runtime.enable');
    await send('Page.navigate',{url:'https://ads.google.com/nav/selectaccount?euid=1617881427&__u=7390566523&authuser=0&dst=/aw/campaigns'});
    await new Promise(r=>setTimeout(r,5000));
    const expr=`({url:location.href,title:document.title,text:document.body.innerText.slice(0,3000),html:document.body.innerHTML.slice(0,5000),scripts:Array.from(document.scripts).slice(0,10).map(s=>s.textContent.slice(0,500))})`;
    const res=await send('Runtime.evaluate',{expression:expr,returnByValue:true});
    console.log(JSON.stringify(res.result.result.value,null,2));
    ws.close();
  };
})();
