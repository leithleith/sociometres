const CACHE_NAME = 'sociometres-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon.svg'
];

self.addEventListener('install', event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=> cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event=>{
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event=>{
  const request = event.request;
  // For navigation requests, try network first, fallback to cache
  if(request.mode === 'navigate'){
    event.respondWith(
      fetch(request).then(resp=>{
        // update cache cache with latest HTML
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(c=> c.put('./', copy));
        return resp;
      }).catch(()=> caches.match('./'))
    );
    return;
  }

  // For other requests, try cache first
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).catch(()=> caches.match('./')))
  );
});