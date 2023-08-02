import type { OnModuleInit } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import type { Redis } from 'ioredis'

import { type RedisStoreModuleOptions } from './redis-store.interface'

@Injectable()
export class RedisStoreService implements OnModuleInit {
  public client: Redis
  public adapter: typeof Redis

  constructor (public options: RedisStoreModuleOptions) {}

  public async onModuleInit (): Promise<void> {
    const { default: RedisIO } = await import('ioredis')

    this.adapter = RedisIO

    this.initClient()
  }

  public initClient (adapter: typeof Redis = this.adapter): void {
    this.client = new adapter(this.options.options)
  }

  public createChild (): RedisStoreService {
    const service = new RedisStoreService(this.options)

    // to not break compatibility with the older versions creating a child will still be sync
    // therefore we can pass the adapter of the current instance to the child instead
    service.initClient(this.adapter)

    return service
  }

  public createTopic (...topic: string[]): string {
    return topic.join(this.options.delimiter)
  }
}
