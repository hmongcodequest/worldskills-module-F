const CACHE_NAME = 'react-app-v1';
const BASE_URL = '/ws01_module_c';
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.json',
  '/manifest.webmanifest',
  '/registerSW.js',
  '/workbox.js',
  '/favicon.ico',
  '/logo192.png',
  '/assets/index.js',
  '/assets/index.css',
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
].map(path => BASE_URL + path);

// Install and cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache.map(async (url) => {
          try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Bad response for ${url}`);
            await cache.put(url, response.clone());
          } catch (err) {
            console.error(`❌ Failed to cache ${url}:`, err);
          }
        })
      );
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
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).catch((error) => {
        // Only fallback to index.html for navigation (i.e., page loads)
        if (event.request.mode === 'navigate') {
          return caches.match(BASE_URL + '/index.html');
        }

        // Otherwise: don't return anything (let it fail)
        return new Response(null, {
          status: 404,
          statusText: 'Not found in cache',
        });
      });
    })
  );
});
