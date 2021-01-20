import { Types } from '@graphql-codegen/plugin-helpers'

export interface Config {
  schema: ConfigSchema[]
  options?: ConfigOptions
}

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
