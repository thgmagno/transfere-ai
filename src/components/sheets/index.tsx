import { DepositSheet } from './Deposit'
import { TransferSheet } from './Transfer'
import { WithdrawSheet } from './Withdraw'

export function Sheets() {
  return (
    <div className="flex flex-wrap gap-3">
      <DepositSheet />
      <WithdrawSheet />
      <TransferSheet />
    </div>
  )
}
