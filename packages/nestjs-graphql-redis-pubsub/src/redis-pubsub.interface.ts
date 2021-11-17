import { RedisPubSub } from 'graphql-redis-subscriptions'
import { PubSubRedisOptions } from 'graphql-redis-subscriptions/dist/redis-pubsub'

export type RedisPubSubService = RedisPubSub

export interface RedisPubSubModuleOptions {
  global?: boolean
  options?: PubSubRedisOptions
  delimiter?: string
}
