import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
import CacheHelper from './utils/cache-helper';
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntil(CacheHelper.networkFirst());
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntil(CacheHelper.networkFirst());
});

self.addEventListener('fetch', (event) => {
  event.waitUntil(CacheHelper.staleWhileRevalidate());
  event.waitUntil(CacheHelper.cacheOnly());
});
