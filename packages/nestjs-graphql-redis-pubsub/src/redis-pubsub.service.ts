import type { OnApplicationBootstrap } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { RedisPubSub } from 'graphql-redis-subscriptions'
import type { Redis } from 'ioredis'

import { type RedisPubSubModuleOptions } from './redis-pubsub.interface'

@Injectable()
export class RedisPubSubService<RedisPubSubTopics extends string = string, RedisPubSubMap extends Record<RedisPubSubTopics, any> = any> implements OnApplicationBootstrap {
  private pubSub: RedisPubSub

  constructor (private options: RedisPubSubModuleOptions) {}

  public onApplicationBootstrap (): void {
    this.pubSub = new RedisPubSub(this.options.options)
  }

  public publish<Pattern extends RedisPubSubTopics, Data extends RedisPubSubMap[Pattern]>(pattern: Pattern, extensions: string | string[] = [], payload: Data): Promise<void> {
    if (!Array.isArray(extensions)) {
      extensions = [ extensions ]
    }

    return this.pubSub.publish(this.createTopic(pattern, ...extensions), payload)
  }

  public subscribe<Pattern extends RedisPubSubTopics, Data extends RedisPubSubMap[Pattern]>(
    pattern: Pattern,
    extensions: string | string[] = [],
    onMessage: (message: Data) => void
  ): Promise<number> {
    if (!Array.isArray(extensions)) {
      extensions = [ extensions ]
    }

    return this.pubSub.subscribe(this.createTopic(pattern, ...extensions), onMessage)
  }

  public unsubscribe (id: number): void {
    return this.pubSub.unsubscribe(id)
  }

  public getClient (): Redis {
    return this.pubSub.getPublisher() as Redis
  }

  public iterator<Pattern extends RedisPubSubTopics | string>(pattern: Pattern, extensions: string | string[] = []): AsyncIterator<any> {
    if (!Array.isArray(extensions)) {
      extensions = [ extensions ]
    }

    return this.pubSub.asyncIterator(this.createTopic(pattern, ...extensions))
  }

  public async getSubscriberCount<Pattern extends RedisPubSubTopics>(pattern: Pattern, extensions: string | string[] = []): Promise<number> {
    if (!Array.isArray(extensions)) {
      extensions = [ extensions ]
    }

    const topic = this.createTopic(pattern, ...extensions)
    const numberOfSubs = await this.getClient().call('PUBSUB', [ 'NUMSUB', topic ])

    if (Array.isArray(numberOfSubs) && numberOfSubs?.[1]) {
      return numberOfSubs[1]
    } else {
      return 0
    }
  }

  public createTopic (...pattern: string[]): string {
    return pattern.join(this.options.delimiter)
  }
}
