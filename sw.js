self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('gold-calc').then(c => c.addAll(['./']))
  );
});
