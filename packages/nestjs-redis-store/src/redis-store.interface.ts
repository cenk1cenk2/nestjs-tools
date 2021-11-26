import { RedisOptions } from 'ioredis'

export interface RedisPubSubModuleOptions {
  global?: boolean
  options?: RedisOptions
  delimiter?: string
}
