const http=require('http');
function get(path){return new Promise((resolve,reject)=>http.get('http://127.0.0.1:18801'+path,res=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>resolve(JSON.parse(d)));}).on('error',reject));}
(async()=>{
  const tabs=await get('/json/list');
  const page=tabs.find(t=>t.type==='page' && t.url.includes('ads.google.com/aw/campaigns')) || tabs.find(t=>t.type==='page');
  const ws=new WebSocket(page.webSocketDebuggerUrl); let id=0; const pending=new Map();
  function send(method,params={}){return new Promise((resolve,reject)=>{const msg={id:++id,method,params}; pending.set(id,{resolve,reject}); ws.send(JSON.stringify(msg));});}
  ws.onmessage=ev=>{const m=JSON.parse(ev.data); if(m.id&&pending.has(m.id)){pending.get(m.id).resolve(m); pending.delete(m.id);} };
  ws.onopen=async()=>{
    await send('Runtime.enable');
    const expr=`Array.from(document.querySelectorAll('button,[role="button"],a,[role="link"],material-button,material-fab')).map(el=>({text:(el.innerText||el.textContent||'').trim(), aria:el.getAttribute('aria-label')||'', tag:el.tagName, cls:el.className||''})).filter(x=>/date|range|apr|mar|show last|change date/i.test(x.text+' '+x.aria)).slice(0,80)`;
    const res=await send('Runtime.evaluate',{expression:expr,returnByValue:true});
    console.log(JSON.stringify(res.result.result.value,null,2));
    ws.close();
  };
})();
