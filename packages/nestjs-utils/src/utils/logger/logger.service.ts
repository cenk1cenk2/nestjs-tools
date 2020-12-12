import { LoggerService as LoggerServiceCommon } from '@nestjs/common'
import { Configurable, ConfigParam } from '@webundsoehne/nestjs-util/dist/provider/config'
import winston, { format } from 'winston'

import { LogType, LogLevel } from './logger.constants'
import { LoggerOptions } from './logger.interface'

let logger: winston.Logger

export class LoggerService implements LoggerServiceCommon {
  constructor (private readonly options?: LoggerOptions) {}

  @Configurable()
  private getLogger (@ConfigParam('logLevel', LogLevel) level?: string): winston.Logger {
    if (!logger) {
      const colorize = format.colorize({
        all: true,
        level: true,
        colors: {
          [LogType.error]: 'red',
          [LogType.warn]: 'yellow',
          [LogType.log]: 'green',
          [LogType.verbose]: 'gray',
          [LogType.debug]: 'cyan'
        }
      })

      const printf = format.printf((data: winston.Logform.TransformableInfo) => {
        return `[${data.timestamp}] [${data.level}] [${data.context}] - ${data.message}`
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
          colorize,
          format.splat(),
          format.json(),
          format.prettyPrint(),
          printf
        )
      })
    }

    return logger
  }

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

  private logMessage ({ type, message: rawMessage, context, trace }: { type: string, message: string | string[], context?: string, trace?: any }): void {
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
}
