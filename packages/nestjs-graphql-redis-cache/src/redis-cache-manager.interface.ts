import type { Cache, Config } from 'cache-manager'

export type RedisCacheManagerProvider = Cache

export interface RedisCacheManagerOptions {
  global?: boolean
  options?: Config
}
