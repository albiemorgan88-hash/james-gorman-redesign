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
  ws.onopen=async()=>{
    try {
      await send('Page.enable'); await send('Runtime.enable');
      let res=await send('Runtime.evaluate',{expression:`(()=>{
        const el=[...document.querySelectorAll('material-list-item')].find(el=>el.innerText.includes('801-851-4760'));
        if(!el) return {ok:false};
        el.scrollIntoView(); el.focus();
        ['pointerdown','mousedown','mouseup','click'].forEach(type=>el.dispatchEvent(new MouseEvent(type,{bubbles:true,cancelable:true,view:window})));
        el.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',code:'Enter',bubbles:true}));
        el.dispatchEvent(new KeyboardEvent('keyup',{key:'Enter',code:'Enter',bubbles:true}));
        return {ok:true, active:document.activeElement===el, text:el.innerText};
      })()`,returnByValue:true});
      console.log('SELECT', JSON.stringify(res.result.result.value));
      await new Promise(r=>setTimeout(r,10000));
      res=await send('Runtime.evaluate',{expression:`(()=>({title:document.title,url:location.href,text:document.body.innerText.slice(0,12000)}))()`,returnByValue:true});
      console.log(JSON.stringify(res.result.result.value,null,2));
    } catch(e){ console.error(String(e)); process.exitCode=1; }
    ws.close();
  };
})();
