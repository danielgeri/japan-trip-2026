const CACHE_NAME = 'japan-trip-2026-v29';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css?v=29',
  './app.js?v=29',
  './style.css',
  './app.js',
  './manifest.json',
  './robots.txt',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/icon.svg'
];

// Install Event: Pre-cache core shell
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
});

// Activate Event: Clean up outdated caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Listen for message to skip waiting directly if requested
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Helper: Fetch with timeout for smooth offline fallback on slow connections
function fetchWithTimeout(request, timeoutMs = 3500) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Network request timed out'));
    }, timeoutMs);

    fetch(request, { cache: 'no-cache' }).then(
      (response) => {
        clearTimeout(timer);
        resolve(response);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
}

// Fetch Event:
// - HTML, CSS, JS: Network-First (always fresh when online, instant offline fallback)
// - Images, Fonts, Icons: Stale-While-Revalidate
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const isCoreCode =
    request.mode === 'navigate' ||
    request.headers.get('accept')?.includes('text/html') ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css');

  // 1. HTML / JS / CSS requests: Network-First
  if (isCoreCode) {
    event.respondWith(
      fetchWithTimeout(request, 3500)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request, { ignoreSearch: true }).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            return caches.match('./index.html');
          });
        })
    );
    return;
  }

  // 2. Static Media Assets (Fonts, Images, Icons): Stale-While-Revalidate
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Network failed, nothing to update in background
        });

      return cachedResponse || fetchPromise;
    })
  );
});
