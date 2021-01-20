import { Types } from '@graphql-codegen/plugin-helpers'

export type Config = ConfigSchema[] & ConfigOptions

export interface ConfigSchema {
  from: string
  to: string
  options?: Types.ConfiguredOutput
}

export type ConfigOptions = Types.Config

export interface Status {
  from: string
  status: boolean
}
