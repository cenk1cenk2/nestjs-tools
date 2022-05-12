import type { S3 } from 'aws-sdk'

export type S3Provider = S3

export interface S3ModuleOptions {
  global?: boolean
  options?: S3.Types.ClientConfiguration
}
