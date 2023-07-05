/* eslint-disable no-console */
import config from 'config'

import type { ConfigOptions, ConfigSchema, Status } from './run.interface'
import { getStatus } from './util'

export async function runGenerator (): Promise<unknown[]> {
  const { generate, CodegenContext } = await import('@graphql-codegen/cli')
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
    await new Promise((resolve) => setTimeout(resolve, 5000))
    status = getStatus(schema)
  }

  // https://github.com/dotansimha/graphql-code-generator/issues/9490
  return Promise.all(
    schema.map((s) =>
      generate(
        new CodegenContext({
          config: {
            watch: true,
            ...options,
            schema: s.from,
            generates: {
              [s.to]: {
                plugins: [ 'typescript' ],
                hooks: {
                  afterOneFileWrite: [ 'prettier --write', 'eslint --fix' ]
                },
                ...s.options ?? {}
              }
            }
          },
          filepath: s.to
        }),
        true
      )
    )
  )
}
