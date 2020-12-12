import { Global, Module } from '@nestjs/common'

import { TransactionsManager } from './transactions-manager.service'

// iam testing this
@Global()
@Module({
  providers: [ TransactionsManager ],
  exports: [ TransactionsManager ]
})
export class TransactionManagerModule {}
