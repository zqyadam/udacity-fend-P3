let cacheName = 'mws-static-v1'


self.addEventListener('install', function (event) {
    let urlsToCache = [
        '/',
        'restaurant.html',
        'js/dbhelper.js',
        'js/main.js',
        'js/restaurant_info.js',
        'css/responsive.css',
        'css/styles.css',
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpg',
        'img/8.jpg',
        'img/9.jpg',
        'img/10.jpg',
        'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
        'data/restaurants.json'
    ];

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(urlsToCache);
        })

    )
});


self.addEventListener('fetch',function(event) {
    
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            } 
            return fetch(event.request);
        })
    )
})