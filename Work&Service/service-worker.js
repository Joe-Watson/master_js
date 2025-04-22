const CACHE_NAME='v';
const urlsToCache=['/','/index.html','/index.js','/style.css'];

self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then(caches=>
            caches.addAll(urlsToCache)));
});

self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).then(response=>response||fetch(event.request))
    )
});
