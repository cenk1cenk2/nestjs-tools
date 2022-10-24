import type { OnModuleInit } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import type { Redis } from 'ioredis'
import RedisIO from 'ioredis'

import { RedisStoreModuleOptions } from './redis-store.interface'

@Injectable()
export class RedisStoreService implements OnModuleInit {
  public client: Redis

  constructor (public options: RedisStoreModuleOptions) {}

  public onModuleInit (): void {
    this.client = new RedisIO(this.options.options)
  }

  public createChild (): RedisStoreService {
    const service = new RedisStoreService(this.options)

    service.onModuleInit()

    return service
  }

  public createTopic (topic: string, ...extensions: string[]): string {
    return [ topic, ...extensions ?? [] ].join(this.options.delimiter)
  }
}
