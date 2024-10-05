'use client'

import { Label } from '@/components/ui/label'
import { NumericFormat } from 'react-number-format'
import { Input } from '../ui/input'

export function MoneyInput() {
  return (
    <div className="grid items-center gap-2 md:grid-cols-4 md:gap-4">
      <Label htmlFor="amount" className="md:text-right">
        Valor
      </Label>
      <NumericFormat
        type="tel"
        prefix="R$ "
        customInput={Input}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
        fixedDecimalScale
        placeholder="R$ 0,00"
        name="amount"
        className="col-span-3"
      />
    </div>
  )
}
