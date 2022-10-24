import type { pki } from 'node-forge'
import type { GenerateResult, SelfsignedOptions } from 'selfsigned'

import type { LoggerService } from '@cenk1cenk2/nestjs-utils'

export interface ApplicationKeyOptions {
  configKey?: string
  dir: string
  files: Partial<GenerateResult>
  attributes?: pki.CertificateField[]
  options?: Partial<SelfsignedOptions>
  exitOnError?: boolean
  logger?: new (...args: any[]) => LoggerService
}
