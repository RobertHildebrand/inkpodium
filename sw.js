/* InkPodium service worker — offline cache, network-first HTML so new builds always win */
const CACHE='inkpodium-v1';
const CORE=['./','index.html','favicon.svg','apple-touch-icon.png','manifest.json',
            'vendor/pdf.min.js','vendor/pdf-lib.min.js','vendor/pdf.worker.min.js','vendor/tex-svg.js'];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(ks=>Promise.all(ks.filter(k=>k.startsWith('inkpodium-')&&k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==location.origin)return;
  const isHTML=req.mode==='navigate'||url.pathname.endsWith('/')||url.pathname.endsWith('index.html');
  if(isHTML){
    e.respondWith(
      fetch(req).then(r=>{
        const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));
        return r;
      }).catch(()=>caches.match(req).then(m=>m||caches.match('index.html')))
    );
  }else{
    e.respondWith(
      caches.match(req).then(m=>m||fetch(req).then(r=>{
        if(r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));}
        return r;
      }))
    );
  }
});
