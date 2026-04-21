const http=require('http');
const tabId=process.argv[2];
const url=process.argv[3];
const waitMs=Number(process.argv[4]||12000);
function get(path){return new Promise((resolve,reject)=>http.get('http://127.0.0.1:18800'+path,res=>{let d='';res.on('data',c=>d+=c);res.on('end',()=>resolve(JSON.parse(d)));}).on('error',reject));}
(async()=>{
  const tabs=await get('/json/list');
  const page=tabs.find(t=>t.id===tabId);
  if(!page) throw new Error('tab not found');
  const ws=new WebSocket(page.webSocketDebuggerUrl); let id=0; const pending=new Map();
  function send(method,params={}){return new Promise((resolve,reject)=>{const msg={id:++id,method,params}; pending.set(id,{resolve,reject}); ws.send(JSON.stringify(msg));});}
  ws.onmessage=ev=>{const m=JSON.parse(ev.data); if(m.id&&pending.has(m.id)){pending.get(m.id).resolve(m); pending.delete(m.id);} };
  ws.onopen=async()=>{
    try {
      await send('Page.enable'); await send('Runtime.enable');
      await send('Page.navigate',{url});
      await new Promise(r=>setTimeout(r,waitMs));
      const expr=`(()=>({title:document.title,url:location.href,text:document.body.innerText.slice(0,20000)}))()`;
      const res=await send('Runtime.evaluate',{expression:expr,returnByValue:true});
      console.log(JSON.stringify(res.result.result.value,null,2));
    } catch(e){ console.error(String(e)); process.exitCode=1; }
    ws.close();
  };
})();
