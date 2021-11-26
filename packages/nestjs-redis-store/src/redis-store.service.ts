import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import RedisIO from 'ioredis'
import { RedisIOSetOptions } from 'redis-io-compatability.interface'

import { RedisPubSubModuleOptions } from './redis-store.interface'

@Injectable()
export class RedisStoreService<RedisStoreTopics extends string, RedisStoreMap extends Record<RedisStoreTopics, any> = any> implements OnApplicationBootstrap {
  public client: RedisIO.Redis

  constructor (private options: RedisPubSubModuleOptions) {}

  public onApplicationBootstrap (): void {
    this.client = new RedisIO(this.options.options)
  }

  public async set<Pattern extends RedisStoreTopics, Data extends RedisStoreMap[Pattern]>(
    pattern: Pattern,
    extensions: string | string[] = [],
    payload: Data,
    options?: RedisIOSetOptions
  ): Promise<void> {
    const topic = this.createTopic(pattern, extensions)

    const result = await this.client.set(topic, payload, options?.expiryMode, options?.time, options?.setMode)

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

  public getClient (): RedisIO.Redis {
    return this.client
  }

  public createTopic (pattern: string, extensions: string | string[]): string {
    return [ pattern, ...extensions ].join(this.options.delimiter)
  }
}
