// CachingService.js
import { LRUCache } from 'lru-cache'

// Create a cache with a maximum size and 5-minute expiration
const cache = new LRUCache({ max: 100, maxAge: 5 * 60 * 1000 });

function getCachedData(key) {
  return cache.get(key);
}

function cacheData(key, data) {
  cache.set(key, data);
}

export { getCachedData, cacheData };
