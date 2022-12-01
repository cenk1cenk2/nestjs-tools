import type{ DynamicModule } from '@nestjs/common'
import { Module } from '@nestjs/common'
import { DiscoveryModule } from '@nestjs/core'
import { EventEmitter2 } from '@nestjs/event-emitter'
import type{ EventEmitterModuleOptions } from '@nestjs/event-emitter/dist/interfaces/event-emitter-options.interface'

import { EventManagerModule } from './event-manager/event-manager.module'
import { EventMetadataAccessor } from './event-metadata.accessor'
import { EventSubscribersLoader } from './event-subscribers.loader'

@Module({})
export class EventEmitterModule {
  public static forRoot (options?: EventEmitterModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: EventEmitterModule,
      imports: [ DiscoveryModule, EventManagerModule ],
      providers: [
        EventSubscribersLoader,
        EventMetadataAccessor,
        {
          provide: EventEmitter2,
          useValue: new EventEmitter2(options)
        }
      ],
      exports: [ EventEmitter2 ]
    }
  }
}
