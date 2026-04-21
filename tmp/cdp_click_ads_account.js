const http=require('http');
const tabId=process.argv[2];
function get(path){return new Promise((resolve,reject)=>http.get('http://127.0.0.1:18800'+path,res=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>resolve(JSON.parse(d)));}).on('error',reject));}
(async()=>{
  const tabs=await get('/json/list');
  const page=tabs.find(t=>t.id===tabId);
  if(!page) throw new Error('tab not found');
  const ws=new WebSocket(page.webSocketDebuggerUrl); let id=0; const pending=new Map();
  function send(method,params={}){return new Promise((resolve,reject)=>{const msg={id:++id,method,params}; pending.set(id,{resolve,reject}); ws.send(JSON.stringify(msg));});}
  ws.onmessage=ev=>{const m=JSON.parse(ev.data); if(m.id&&pending.has(m.id)){pending.get(m.id).resolve(m); pending.delete(m.id);} };
  ws.onerror=e=>console.error('ws error',e.message||e);
  ws.onopen=async()=>{
    try {
      await send('Page.enable'); await send('Runtime.enable');
      let res=await send('Runtime.evaluate',{expression:`(()=>{
        const needle='801-851-4760';
        const els=[...document.querySelectorAll('*')].filter(el=>el.innerText && el.innerText.includes(needle));
        const el=els.find(el=>['A','BUTTON','MATERIAL-LIST-ITEM','DIV'].includes(el.tagName)) || els[0];
        if(!el) return {ok:false, found:0};
        el.click();
        return {ok:true, tag:el.tagName, text:el.innerText.slice(0,200), href:el.href||null, found:els.length};
      })()`,returnByValue:true});
      console.log('CLICK', JSON.stringify(res.result.result.value));
      await new Promise(r=>setTimeout(r,8000));
      res=await send('Runtime.evaluate',{expression:`(()=>({title:document.title,url:location.href,text:document.body.innerText.slice(0,12000)}))()`,returnByValue:true});
      console.log(JSON.stringify(res.result.result.value,null,2));
    } catch(e){ console.error(String(e)); process.exitCode=1; }
    ws.close();
  };
})();
