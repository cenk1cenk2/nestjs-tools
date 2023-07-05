/* eslint-disable no-console */
import config from 'config'
import delay from 'delay'
import { join } from 'path'

import type { ConfigOptions, ConfigSchema, Status } from './run.interface'
import { getStatus } from './util'

export async function runGenerator (): Promise<unknown[]> {
  const { generate } = await import('@graphql-codegen/cli')
  const schema = config.get<ConfigSchema[]>('schema') ?? []
  const options = config.get<ConfigOptions>('options') ?? {}

  if (schema.length === 0) {
    console.error('No schema file defined. Aborting mission.')
    process.exit(127)
  }

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
              },
              ...s.options ?? {}
            }
          }
        },
        true
      )
    )
  )
}
