const CACHE='tryout-ready-v4-1';
const CORE=['./','./index.html','./style.css','./script.js','./manifest.webmanifest','./offline.html','./icons/icon-192.png','./icons/icon-512.png'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  // Do not cache YouTube/video requests.
  if(url.hostname.includes('youtube') || url.hostname.includes('googlevideo')) return;

  if(event.request.mode==='navigate'){
    event.respondWith(
      fetch(event.request).then(r=>{
        const copy=r.clone();
        caches.open(CACHE).then(c=>c.put(event.request,copy));
        return r;
      }).catch(()=>caches.match(event.request).then(r=>r||caches.match('./index.html')).catch(()=>caches.match('./offline.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached=>cached || fetch(event.request).then(r=>{
      if(r && r.status===200 && r.type==='basic'){
        const copy=r.clone();
        caches.open(CACHE).then(c=>c.put(event.request,copy));
      }
      return r;
    }))
  );
});
