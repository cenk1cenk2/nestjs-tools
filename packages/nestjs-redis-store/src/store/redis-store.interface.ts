import type { RedisOptions } from 'ioredis'

export interface RedisStoreModuleOptions {
  global?: boolean
  options?: RedisOptions
  delimiter?: string
}
