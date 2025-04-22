const CACHE_NAME = 'image-processor-cache-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './style.css',
  './main.js',
  './worker.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
