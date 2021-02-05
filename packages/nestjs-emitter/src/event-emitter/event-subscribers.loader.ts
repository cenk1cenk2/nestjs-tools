import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common'
import { DiscoveryService, MetadataScanner } from '@nestjs/core'
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper'
import { EventEmitter2 } from 'eventemitter2'

import { EventMetadataAccessor } from './event-metadata.accessor'

@Injectable()
export class EventSubscribersLoader implements OnApplicationBootstrap, OnApplicationShutdown {
  constructor (
    private readonly discoveryService: DiscoveryService,
    private readonly eventEmitter: EventEmitter2,
    private readonly metadataAccessor: EventMetadataAccessor,
    private readonly metadataScanner: MetadataScanner
  ) {}

  public onApplicationBootstrap (): void {
    this.loadEventListeners()
  }

  public onApplicationShutdown (): void {
    this.eventEmitter.removeAllListeners()
  }

  public loadEventListeners (): void {
    const providers = this.discoveryService.getProviders()
    providers
      .filter((wrapper) => wrapper.isDependencyTreeStatic())
      .filter((wrapper) => wrapper.instance)
      .forEach((wrapper: InstanceWrapper) => {
        const { instance } = wrapper

        const prototype = Object.getPrototypeOf(instance)

        this.metadataScanner.scanFromPrototype(instance, prototype, (methodKey: string) => this.subscribeToEvent(instance, methodKey))
        this.metadataScanner.scanFromPrototype(instance, prototype, (methodKey: string) => this.subscribeToMultipleEvents(instance, methodKey))
      })
  }

  private subscribeToEvent (instance: Record<string, any>, methodKey: string): void {
    const eventListenerMetadata = this.metadataAccessor.getOnEventMetadata(instance[methodKey])

    if (!eventListenerMetadata) {
      return
    }

    const { event, options } = eventListenerMetadata

    this.eventEmitter.on(event, (...args: unknown[]) => instance[methodKey].call(instance, ...args), options)
  }

  private subscribeToMultipleEvents (instance: Record<string, any>, methodKey: string): void {
    const eventListenerMetadata = this.metadataAccessor.getOnEventsMetadata(instance[methodKey])

    if (!eventListenerMetadata) {
      return
    }

    const { event, options } = eventListenerMetadata

    event.forEach((e) => this.eventEmitter.on(e, (...args: unknown[]) => instance[methodKey].call(instance, ...args), options))
  }
}
