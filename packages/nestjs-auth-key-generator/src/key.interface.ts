import type { KeypairOptions, KeypairResults } from './keypair.interface'
import type { LoggerService } from '@cenk1cenk2/nestjs-utils'

export interface ApplicationKeyOptions {
  configKey?: string
  dir: string
  files: KeypairResults
  attributes?: Record<string, any>
  options?: Partial<KeypairOptions>
  exitOnError?: boolean
  logger?: new (...args: any[]) => LoggerService
}
