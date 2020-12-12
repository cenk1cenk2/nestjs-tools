export enum LogType {
  silent = 'silent',
  error = 'error',
  log = 'info',
  warn = 'warn',
  debug = 'debug',
  verbose = 'verbose'
}

export const LogLevel: string = LogType.verbose
