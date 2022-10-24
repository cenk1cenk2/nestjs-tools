import { ConfigService } from '@webundsoehne/nestjs-util/dist/provider/config/config.service'
import * as fs from 'fs-extra'
import type { ApplicationKeyOptions } from 'key.interface'
import { join } from 'path'
import type { GenerateResult } from 'selfsigned'
import selfsigned from 'selfsigned'

import { LoggerService } from '@cenk1cenk2/nestjs-utils/dist/utils/logger/logger.service'

export class ApplicationKey {
  static instance: ApplicationKey
  public keys: GenerateResult
  private logger: LoggerService

  constructor (private options?: Partial<ApplicationKeyOptions>) {
    if (!ApplicationKey.instance) {
      const configKey = options?.configKey ?? 'keys'
      const dir = join(process.cwd(), ConfigService.get<string>(`${configKey}.dir`, 'volumes/keys'))

      this.options = {
        dir,
        files: {
          public: join(dir, ConfigService.get<string>(`${configKey}.files.public`, 'pubcert.pem')),
          private: join(dir, ConfigService.get<string>(`${configKey}.files.private`, 'privkey.pem')),
          cert: join(dir, ConfigService.get<string>(`${configKey}.files.cert`, 'cert.pem'))
        },
        attributes: undefined,
        options: {
          days: 365,
          keySize: 2048,
          algorithm: 'sha256'
        },
        configKey,
        exitOnError: false,
        logger: LoggerService,
        ...options
      }

      this.logger = new this.options.logger('ApplicationKey')

      this.generateKeys()

      ApplicationKey.instance = this
    }

    return ApplicationKey.instance
  }

  private generateKeys (): void {
    try {
      this.keys = Object.entries(this.options.files).reduce<GenerateResult>(
        (o, [ type, path ]) => typeof type !== 'undefined' ? { ...o, [type]: fs.readFileSync(path, 'utf8') } : o,
        // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter
        {} as GenerateResult
      )

      this.logger.debug('Keypairs has been loaded.')
    } catch (e) {
      try {
        if (Object.values(this.options.files).some((key) => !fs.existsSync(key))) {
          this.logger.warn(`Keypairs are not found in the "${this.options.dir}" directory. Generating a new set of keys.`)

          this.keys = selfsigned.generate(this.options.attributes, this.options.options)

          fs.mkdirpSync(this.options.dir)

          Object.entries(this.options.files).forEach(([ type, path ]) => {
            if (typeof type !== 'undefined') {
              fs.writeFileSync(path, this.keys[type])
            }
          })
        }

        this.logger.debug('Keypairs has been generated.')
      } catch (e) {
        if (this.options?.exitOnError) {
          throw e
        } else {
          this.logger.error('Unable to generate application keypair.')
        }
      }
    }
  }
}
