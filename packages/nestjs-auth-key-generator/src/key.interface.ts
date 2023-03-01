import type { pki } from 'node-forge'
import type { GenerateResult, SelfsignedOptions } from 'selfsigned'

export interface ApplicationKeyOptions {
  configKey?: string
  dir: string
  files: Partial<GenerateResult>
  attributes?: pki.CertificateField[]
  options?: Partial<SelfsignedOptions>
  exitOnError?: boolean
}
