import { DynamicModule, Module } from '@nestjs/common'
import { DiscoveryModule } from '@nestjs/core'
import { EventEmitterModuleOptions } from '@nestjs/event-emitter/dist/interfaces/event-emitter-options.interface'
import { EventEmitter2 } from 'eventemitter2'

import { EventMetadataAccessor } from './event-metadata.accessor'
import { EventSubscribersLoader } from './event-subscribers.loader'

@Module({})
export class EventEmitterModule {
  static forRoot (options?: EventEmitterModuleOptions): DynamicModule {
    return {
      global: options?.global ?? true,
      module: EventEmitterModule,
      imports: [ DiscoveryModule ],
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
