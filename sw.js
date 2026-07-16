const CACHE_NAME = 'muneer-cache-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت ملفات الكاش الأساسية
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// تشغيل الطلبات حتى لو كان بدون إنترنت
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});