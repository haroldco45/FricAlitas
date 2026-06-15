const CACHE_NAME = 'fricalitas-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './prod_alitas_tray.jpg',
  './prod_fricapollo.jpg',
  './prod_fricaburger.jpg',
  './prod_tenders.jpg',
  './prod_fricacrush.jpg',
  './prod_ramo.jpg',
  './acomp_francesa.jpg',
  './acomp_criolla.jpg',
  './acomp_yucas.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).catch(()=>cached))
  );
});
