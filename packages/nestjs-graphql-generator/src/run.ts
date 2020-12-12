/* eslint-disable no-console */
import { generate } from '@graphql-codegen/cli'
import config from 'config'
import delay from 'delay'
import * as fs from 'fs'
import { join } from 'path'

import { ConfigOptions, ConfigSchema, Status } from './run.interface'

export async function runGenerator (): Promise<unknown[]> {
  const schema = config.get<ConfigSchema[]>('schema')
  const options = config.get<ConfigOptions>('options')
  let status: Status[] = getStatus(schema)

  while (status.some((v) => v.status === false)) {
    console.error(
      `Schema files is not generated yet: ${status
        .filter((s) => !s.status)
        .map((s) => s.from)
        .join(', ')}`
    )
    await delay(5000)
    status = getStatus(schema)
  }

  return Promise.all(
    schema.map((s) =>
      generate(
        {
          ...options,
          watch: true,
          schema: s.from,
          generates: {
            [join('src', s.to)]: {
              plugins: [ 'typescript' ],
              hooks: {
                afterOneFileWrite: [ 'prettier --write', 'eslint --fix' ]
              }
            }
          }
        },
        true
      )
    )
  )
}

function getStatus (schema: ConfigSchema[]): Status[] {
  return schema.map((s) => ({ from: s.from, status: fs.existsSync(s.from) }))
}
