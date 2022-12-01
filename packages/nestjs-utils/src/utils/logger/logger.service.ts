import type{ LoggerService as LoggerServiceCommon } from '@nestjs/common'
import { Configurable, ConfigParam } from '@webundsoehne/nestjs-util/dist/provider/config'
import * as colorette from 'colorette'
import winston, { format } from 'winston'

import { LogType, LogLevel } from './logger.constants'
import type{ LoggerOptions } from './logger.interface'

let logger: winston.Logger

export class LoggerService implements LoggerServiceCommon {
  protected color: Record<LogType, (message: string) => string> = {
    [LogType.silent]: (message) => message,
    [LogType.error]: colorette.red,
    [LogType.warn]: colorette.yellow,
    [LogType.log]: colorette.green,
    [LogType.verbose]: colorette.dim,
    [LogType.debug]: colorette.cyan
  }

  constructor (private readonly options?: LoggerOptions) {}

  public error (message: string | string[], trace?: string, context?: string): void {
    this.logMessage({
      type: LogType.error,
      message,
      context,
      trace
    })
  }

  public log (message: string | string[], context?: string): void {
    this.logMessage({
      type: LogType.log,
      message,
      context
    })
  }

  public warn (message: string | string[], context?: string): void {
    this.logMessage({
      type: LogType.warn,
      message,
      context
    })
  }

  public debug (message: string | string[], context?: string): void {
    this.logMessage({
      type: LogType.debug,
      message,
      context
    })
  }

  public verbose (message: string | string[], context?: string): void {
    this.logMessage({
      type: LogType.verbose,
      message,
      context
    })
  }

  private coloring (level: LogType, message: string): string {
    return this.color[level](message)
  }

  private logMessage ({ type, message: rawMessage, context, trace }: { type: string, message: string | string[], context?: string, trace?: any, ms?: string }): void {
    const [ message, ...splat ] = Array.isArray(rawMessage) ? rawMessage : [ rawMessage ]

    const sharedOptions = {
      context: context || this.options?.context || this.constructor.name,
      splat
    }

    this.getLogger()[type]({
      ...sharedOptions,
      message
    })

    if (trace) {
      this.getLogger()[LogType.verbose]({
        ...sharedOptions,
        message: trace
      })
    }
  }

  @Configurable()
  private getLogger (@ConfigParam('logLevel', LogLevel) level?: string): winston.Logger {
    if (!logger) {
      const printf = format.printf((data: winston.Logform.TransformableInfo) => {
        let message = `[${data.timestamp}]`

        message += this.coloring(data.level as LogType, ` [${data.level}] [${data.context}]`)

        message += ` - ${data.message}`

        if (data.ms) {
          message += ` ${colorette.dim(data.ms)}`
        }

        return message
      })

      logger = winston.createLogger({
        level,
        levels: {
          [LogType.silent]: 0,
          [LogType.error]: 1,
          [LogType.warn]: 2,
          [LogType.log]: 3,
          [LogType.verbose]: 4,
          [LogType.debug]: 5
        },
        transports: [
          new winston.transports.Console({
            silent: level.toLowerCase() === LogType.silent,
            stderrLevels: [ 'error' ]
          })
        ],
        format: format.combine(
          format.timestamp({
            format: 'YYYYMMDD-HH:mm:ss'
          }),
          format.ms(),
          format.splat(),
          format.errors(),
          format.prettyPrint(),
          printf
        )
      })
    }

    return logger
  }
}
