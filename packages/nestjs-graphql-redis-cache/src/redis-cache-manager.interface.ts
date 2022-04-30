import type { Cache, CacheOptions } from 'cache-manager'

export type RedisCacheManagerProvider = Cache

export interface RedisCacheManagerOptions {
  global?: boolean
  options?: CacheOptions
}
