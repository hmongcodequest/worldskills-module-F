const CACHE_NAME = 'react-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/logo192.png',
  '/vite.svg',
  '/assets/index-BbS77Fy_.js',
  '/assets/index-CyGY-Uu_.css',
  '/videos/lyon.mp4',
  '/images/all-attractions-low-res.jpg',
  '/images/all-attractions.jpg',
  '/images/attraction-a-low-res.jpg',
  '/images/attraction-a.jpg',
  '/images/attraction-b-low-res.jpg',
  '/images/attraction-b.jpg',
  '/images/attraction-c-low-res.jpg',
  '/images/attraction-c.jpg',
  '/images/cover-low-res.jpg',
  '/images/cover.jpg',
  '/images/lyon-map-low-res.jpg',
  '/images/lyon-map.jpg',
  '/latest-events-images/fda-p-low-res.jpg',
  '/latest-events-images/fda-p.jpg',
  '/latest-events-images/journees_portes_ouvertes_entreprises_2023_p-low-res.jpg',
  '/latest-events-images/journees_portes_ouvertes_entreprises_2023_p.jpg',
  '/latest-events-images/lyon-kayak-p-0-low-res.jpg',
  '/latest-events-images/lyon-kayak-p-0.jpg',
  '/latest-events-images/semaine-bleue-2024-p-low-res.jpg',
  '/latest-events-images/semaine-bleue-2024-p.jpg',
  '/latest-events-images/village-des-metiers-p-low-res.jpg',
  '/latest-events-images/village-des-metiers-p.jpg',
  '/latest-events-images/worldskills-2024-p-low-res.png',
  '/latest-events-images/worldskills-2024-p.png',
];

// Install and cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

// Handle fetch requests
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() => {
          // Fallback for navigation requests
          return caches.match('/index.html');
          // if (event.request.mode === 'navigate') {
          // }
        })
      );
    })
  );
});
