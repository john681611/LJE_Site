importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');



workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/style.min.css",
    "revision": "c43225a0557fac594976eb7a7154c0ef"
  },
  {
    "url": "img/about-img-min.jpg",
    "revision": "5b366f9a6c9b0d4f53dda1ade9fa40bc"
  },
  {
    "url": "img/favicon.png",
    "revision": "b7d780f8f25d5c7df5a671fd772135b0"
  },
  {
    "url": "img/hero-bg-min.jpg",
    "revision": "83d3405d5b462548a94c8774b950ab68"
  },
  {
    "url": "img/portfolio/arma3.png",
    "revision": "f40e71b5525d4ff3454ad3fb765067cb"
  },
  {
    "url": "img/portfolio/cfto.jpg",
    "revision": "cc021f7cb52711aa2b0add9b78bb0d06"
  },
  {
    "url": "img/portfolio/concourse.jpg",
    "revision": "e2aa52728b1a55818a37c2f63804c506"
  },
  {
    "url": "img/portfolio/inf-min.jpg",
    "revision": "d1e04e119b63e064d82cc3b0ac95288c"
  },
  {
    "url": "img/portfolio/mns.jpg",
    "revision": "1afa30fe29e116c37f6d90907827dc50"
  },
  {
    "url": "img/portfolio/mnsfood.jpg",
    "revision": "dba907dad29df3ffc7e65a8594822245"
  },
  {
    "url": "img/portfolio/npm.png",
    "revision": "1f740bdb32c2f64d046b287d1ec63645"
  },
  {
    "url": "img/portfolio/relpath-min.jpg",
    "revision": "67448579139757b43d883f854612b90a"
  },
  {
    "url": "img/portfolio/resistance-min.png",
    "revision": "34d3aa2c538e3175c540301c9a21755b"
  },
  {
    "url": "img/portfolio/sass.jpg",
    "revision": "d3508e8de09cf1b4731186d289dcaf3e"
  },
  {
    "url": "img/portfolio/shedditor.png",
    "revision": "523eaaddccc0dfc265053fd0d4bf1caf"
  },
  {
    "url": "img/selfie-min.jpg",
    "revision": "ff0af91463b69e3cfa85c6f85cef3b2e"
  },
  {
    "url": "index.html",
    "revision": "f8287855f124991f8702e6a832694d10"
  },
  {
    "url": "js/manifest.json",
    "revision": "c4611801d79e313f8bb00f8ad8168d43"
  },
])