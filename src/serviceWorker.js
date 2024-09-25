// src/serviceWorker.js
self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('https://dummyjson.com/todos')) {
      event.respondWith(
        caches.open('tasks-cache').then((cache) => {
          return cache.match(event.request).then((response) => {
            return (
              response ||
              fetch(event.request).then((response) => {
                cache.put(event.request, response.clone());
                return response;
              })
            );
          });
        })
      );
    }
  });
  