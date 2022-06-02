/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
import { registerRoute, Route } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate, CacheOnly } from 'workbox-strategies';
import FootballDataApi from '../data/FootballDataApi';

const CacheHelper = {
  networkFirst() {
    const route = new Route(({ request }) => request.mode === 'cors'
          || request.mode === 'no-cors'
          || request.mode === 'navigate'
          || request.destination === 'image'
          || request.destination === 'script'
          || request.destination === 'style', new NetworkFirst({
      cacheName: FootballDataApi.PRECACHE_PREFIX,
    }));
    registerRoute(route);
  },

  staleWhileRevalidate() {
    const route = new Route(({ request }) => request.mode === 'cors'
          || request.mode === 'no-cors'
          || request.mode === 'navigate'
          || request.destination === 'image'
          || request.destination === 'script'
          || request.destination === 'style', new StaleWhileRevalidate({
      cacheName: FootballDataApi.PRECACHE_PREFIX,
    }));
    registerRoute(route);
  },

  cacheOnly() {
    const route = new Route(({ request }) => request.destination === 'image', new CacheOnly({
      cacheName: FootballDataApi.IMAGE_CACHE_NAME,
    }));
    registerRoute(route);
  },
};

export default CacheHelper;
