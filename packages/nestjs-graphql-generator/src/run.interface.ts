import { Types } from '@graphql-codegen/plugin-helpers'

export interface ConfigSchema {
  from: string
  to: string
}

export type ConfigOptions = Types.Config

export interface Status {
  from: string
  status: boolean
}
