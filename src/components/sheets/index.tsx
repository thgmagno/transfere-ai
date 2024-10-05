import { DepositSheet } from './Deposit'
import { TransferSheet } from './Transfer'
import { WithdrawSheet } from './Withdraw'

export function Sheets() {
  return (
    <div className="flex flex-wrap justify-between gap-3 sm:justify-start">
      <DepositSheet />
      <WithdrawSheet />
      <TransferSheet />
    </div>
  )
}
