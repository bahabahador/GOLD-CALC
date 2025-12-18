// service-worker.js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('gold-pwa-v1').then(cache =>
      cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/css/style.css',
        '/js/app.js',
        '/icons/icon-192.png',
        '/icons/icon-512.png'
      ])
    )
  );
});
