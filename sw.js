// Service worker minimo: serve solo a rendere l'app installabile.
// Nessuna cache offline per ora: ogni richiesta va semplicemente in rete.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
