importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "washman",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c6cbfa743aeb8a92bf06.js",
    "revision": "59922506a158909df95028e7f47471fd"
  },
  {
    "url": "/_nuxt/layouts/default.80654d9ea3e21106b0d2.js",
    "revision": "ed8eb84a0372f8e1fb0caa49f33f1ca5"
  },
  {
    "url": "/_nuxt/manifest.b93229e985d3b9dca542.js",
    "revision": "efe0ce396c7138308794953d59d5524a"
  },
  {
    "url": "/_nuxt/ons.40ac840e.js",
    "revision": "bdfc64563fadaafd6b988984058fefd9"
  },
  {
    "url": "/_nuxt/pages/index.da77cf5d337e804c64f3.js",
    "revision": "f2de82456669fc95fb7347c8fa573f94"
  },
  {
    "url": "/_nuxt/pages/inspire.e8c7deb238312fe5c53d.js",
    "revision": "e211ee07dce267171ac3a72c6f2cc6eb"
  },
  {
    "url": "/_nuxt/vendor.aaf56d3d00af684e2b31.js",
    "revision": "2169797a1b314d596039d2de7c6f0e6c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

