const CACHE_NAME = 'mood-treehole-v1';
const ASSETS = [
  './',
  './index.html',
  './icon.png',
  './manifest.json'
];

// 安裝時快取檔案
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 攔截請求，有快取就用快取
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});