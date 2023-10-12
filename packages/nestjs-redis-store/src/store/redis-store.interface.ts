import type { RedisOptions } from 'ioredis'

export interface RedisStoreModuleOptions {
  token?: string | symbol
  global?: boolean
  options?: RedisOptions
  delimiter?: string
}
