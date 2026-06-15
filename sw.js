const CACHE_NAME = 'fricalitas-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/prod_alitas_tray.jpg',
  './assets/prod_fricapollo.jpg',
  './assets/prod_fricaburger.jpg',
  './assets/prod_tenders.jpg',
  './assets/prod_fricacrush.jpg',
  './assets/prod_ramo.jpg',
  './assets/acomp_francesa.jpg',
  './assets/acomp_criolla.jpg',
  './assets/acomp_yucas.jpg'
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

