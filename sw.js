// Service Worker Básico v2
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fw-v2').then((cache) => cache.addAll([
      './index.html',
      './manifest.json',
      'https://cdn.tailwindcss.com',
      'https://unpkg.com/lucide@latest'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
