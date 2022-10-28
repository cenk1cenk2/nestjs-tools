import type { OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { Logger, Injectable } from '@nestjs/common'
import { Client } from 'redis-om'

import { RedisOmModuleOptions } from './redis-om.interface'

@Injectable()
export class RedisOmService implements OnModuleInit, OnModuleDestroy {
  public client = new Client()
  private logger = new Logger(this.constructor.name)

  constructor (public options: RedisOmModuleOptions) {
    this.options = {
      healthCheckInterval: 10000,
      ...options
    }
  }

  public async onModuleInit (): Promise<void> {
    await this.open()

    setInterval(async () => {
      if (!this.client.isOpen()) {
        this.logger.warn('Connection to Redis was closed, reinitiating it.')

        return this.open()
      }
    }, this.options.healthCheckInterval)
  }

  public async open (): Promise<void> {
    await this.client.open(this.options.url)
  }

  public async onModuleDestroy (): Promise<void> {
    await this.client.close()
  }
}
