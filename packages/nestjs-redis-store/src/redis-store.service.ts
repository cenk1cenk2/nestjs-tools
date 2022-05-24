import type { OnModuleInit } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import type { Redis } from 'ioredis'
import RedisIO from 'ioredis'

import type { RedisIOSetOptions } from './redis-io-compatability.interface'
import { RedisPubSubModuleOptions } from './redis-store.interface'

@Injectable()
export class RedisStoreService<RedisStoreTopics extends string = string, RedisStoreMap extends Record<RedisStoreTopics, any> = any> implements OnModuleInit {
  public client: Redis

  constructor (private options: RedisPubSubModuleOptions) {}

  public onModuleInit (): void {
    this.client = new RedisIO(this.options.options)
  }

  public createChild<T extends RedisStoreTopics = RedisStoreTopics, K extends Record<T, any> = RedisStoreMap>(): RedisStoreService<T, K> {
    return new RedisStoreService(this.options)
  }

  public async set<Pattern extends RedisStoreTopics, Data extends RedisStoreMap[Pattern]>(
    pattern: Pattern,
    extensions: string | string[] = [],
    payload: Data,
    options?: RedisIOSetOptions
  ): Promise<void> {
    const topic = this.createTopic(pattern, extensions)

    let result: string

    if (options?.ttl) {
      result = await this.client.setex(topic, options.ttl, payload)
    } else {
      result = await this.client.set(topic, payload)
    }

    if (result !== 'OK') {
      throw new Error(`Can not set store key: ${topic}`)
    }
  }

  public async get<Pattern extends RedisStoreTopics, Data extends RedisStoreMap[Pattern]>(pattern: Pattern, extensions: string | string[] = []): Promise<Data> {
    const topic = this.createTopic(pattern, extensions)

    const result = await this.client.get(topic)

    return result as RedisStoreMap[Pattern]
  }

  public async rename<Pattern extends RedisStoreTopics>(
    pattern: Pattern,
    extensions: string | string[] = [],
    newPattern: Pattern,
    newExtensions: string | string[] = []
  ): Promise<void> {
    const topic = this.createTopic(pattern, extensions)
    const newTopic = this.createTopic(newPattern, newExtensions)

    const result = await this.client.rename(topic, newTopic)

    if (result !== 'OK') {
      throw new Error(`Can not rename store key: ${topic} -> ${newTopic}`)
    }
  }

  public del<Pattern extends RedisStoreTopics>(pattern: Pattern, extensions: string | string[] = []): Promise<number> {
    const topic = this.createTopic(pattern, extensions)

    return this.client.del(topic)
  }

  public getClient (): Redis {
    return this.client
  }

  public createTopic (pattern: string, extensions: string | string[]): string {
    return [ pattern, ...extensions ].join(this.options.delimiter)
  }
}
