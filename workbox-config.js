module.exports = {
    globDirectory: 'build/',
    globPatterns: [
        '**/*.{js,css,html,png,ico,svg,json,txt}'
    ],
    swDest: 'build/service-worker.js',
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/api\.aviationstack\.com\/v1\/flights.*$/,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'flight-api-cache',
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 30 // 30 minutes
                }
            }
        },
        {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\//,
            handler: 'CacheFirst',
            options: {
                cacheName: 'google-fonts',
                expiration: {
                    maxAgeSeconds: 60 * 60 * 24 * 30
                }
            }
        }
    ]
};
