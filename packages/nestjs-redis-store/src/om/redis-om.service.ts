import type { OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { Injectable } from '@nestjs/common'
import { Client } from 'redis-om'

import { RedisOmModuleOptions } from './redis-om.interface'

@Injectable()
export class RedisOmService implements OnModuleInit, OnModuleDestroy {
  public client = new Client()

  constructor (public options: RedisOmModuleOptions) {}

  public async onModuleInit (): Promise<void> {
    await this.client.open(this.options.url)
  }

  public async onModuleDestroy (): Promise<void> {
    await this.client.close()
  }
}
