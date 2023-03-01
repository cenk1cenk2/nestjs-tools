import type { S3Client, S3ClientConfig } from '@aws-sdk/client-s3'

export type S3Provider = S3Client

export interface S3ModuleOptions {
  global?: boolean
  options?: S3ClientConfig
}
