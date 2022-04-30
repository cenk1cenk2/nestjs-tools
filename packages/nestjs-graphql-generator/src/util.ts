import * as fs from 'fs'

import type { ConfigSchema, Status } from './run.interface'

export function getStatus (schema: ConfigSchema[]): Status[] {
  return schema.map((s) => ({ from: s.from, status: fs.existsSync(s.from) }))
}
