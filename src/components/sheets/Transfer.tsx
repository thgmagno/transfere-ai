'use client'

import { transfer } from '@/action/services'
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
import { ArrowLeftRight } from 'lucide-react'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { MoneyInput } from '../common/MoneyInput'
import { UserSelect } from '../common/UserSelect'
import { toast } from 'sonner'

export function TransferSheet() {
  const [formState, action] = useFormState(transfer, {
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
        <Button variant="outline">
          <ArrowLeftRight className="mr-2 h-5 w-5" />
          Transferência
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Transferência entre Contas</SheetTitle>
          <SheetDescription>
            Insira os detalhes para realizar a transferência entre as contas
            selecionadas. Verifique as informações e clique em confirmar para
            concluir a operação.
          </SheetDescription>
        </SheetHeader>
        <form action={action}>
          <div className="grid gap-4 py-4">
            <MoneyInput />
            <UserSelect label="Origem" name="sender" />
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
