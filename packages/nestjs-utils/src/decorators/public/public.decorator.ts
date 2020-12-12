import { CustomDecorator, SetMetadata } from '@nestjs/common'

export const PublicDecorator = Symbol('isPublic')

export function Public (): CustomDecorator<typeof PublicDecorator> {
  return SetMetadata(PublicDecorator, true)
}
