'use client'

import { deposit } from '@/action/services'
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
import { ArrowUpIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { MoneyInput } from '../common/MoneyInput'
import { UserSelect } from '../common/UserSelect'

export function DepositSheet() {
  const [formState, action] = useFormState(deposit, {
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
          <ArrowUpIcon className="mr-2 h-5 w-5" />
          Depósito
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Depósito em Conta</SheetTitle>
          <SheetDescription>
            Insira os detalhes para realizar o depósito na conta selecionada.
            Confirme as informações e clique em confirmar para concluir.
          </SheetDescription>
        </SheetHeader>
        <form action={action}>
          <div className="grid gap-4 py-4">
            <MoneyInput />
            <UserSelect label="Destino" name="receiver" />
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
