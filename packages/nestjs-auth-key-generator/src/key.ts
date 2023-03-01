import { Logger } from '@nestjs/common'
import * as fs from 'fs-extra'
import type { ApplicationKeyOptions } from 'key.interface'
import { join } from 'path'
import type { GenerateResult } from 'selfsigned'
import selfsigned from 'selfsigned'

export class ApplicationKey {
  static instance: ApplicationKey
  public keys: GenerateResult
  private logger = new Logger(this.constructor.name)

  constructor (private options?: ApplicationKeyOptions) {
    if (!ApplicationKey.instance) {
      const configKey = options?.configKey ?? 'keys'

      this.options = {
        files: {
          public: join(options.dir, 'pubcert.pem'),
          private: join(options.dir, 'privkey.pem'),
          cert: join(options.dir, 'cert.pem')
        },
        attributes: undefined,
        options: {
          days: 365,
          keySize: 2048,
          algorithm: 'sha256'
        },
        configKey,
        exitOnError: false,
        ...options
      }

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
