'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ArrowDown } from 'lucide-react'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { MoneyInput } from '@/components/common/MoneyInput'
import { UserSelect } from '@/components/common/UserSelect'
import { withdraw } from '@/action/services'

export function WithdrawSheet() {
  const [formState, action] = useFormState(withdraw, {
    success: false,
    message: '',
  })

  useEffect(() => {
    if (formState?.message) {
      formState.success
        ? toast.success(formState.message)
        : toast.error(formState.message)
    }
  }, [formState])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <ArrowDown className="mr-2 h-5 w-5" />
          Saque
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Efetuar Saque</SheetTitle>
          <SheetDescription>
            Insira os detalhes para realizar o saque da conta selecionada.
            Verifique as informações e clique em confirmar para concluir a
            operação.
          </SheetDescription>
        </SheetHeader>
        <form action={action}>
          <div className="grid gap-4 py-4">
            <MoneyInput />
            <UserSelect label="Origem" name="sender" />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Confirmar</Button>
            </SheetClose>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
