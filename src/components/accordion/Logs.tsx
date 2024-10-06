import clsx from 'clsx'
import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Logs as LogsType } from '@/lib/dto'

export function Logs({ logs }: { logs: LogsType[] }) {
  const actionMapping = {
    transfer: 'Transferência',
    withdraw: 'Saque',
    deposit: 'Depósito',
  }

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Histórico de transações</AccordionTrigger>
        <AccordionContent>
          <h1 className="mb-4 text-3xl font-bold">
            Visualize as últimas transações
          </h1>
          {logs.map((log) => (
            <div
              key={log.id}
              className="mb-3 rounded-lg border bg-zinc-950/10 p-4 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="font-semibold">
                    {log.action === 'transfer'
                      ? log.receiver_name
                      : log.user_name}
                  </h2>
                  <p className="w-[90%] text-sm text-muted-foreground">
                    {actionMapping[log.action]} -{' '}
                    {new Date(log.created_at).toLocaleDateString('pt-BR')}{' '}
                    {new Date(log.created_at).toLocaleTimeString('pt-BR')}
                  </p>
                </div>
                <span
                  className={clsx(
                    'min-w-fit text-end font-bold',
                    log.action === 'withdraw'
                      ? 'text-red-500'
                      : 'text-green-500',
                  )}
                >
                  {log.action === 'withdraw' ? '-' : '+'} R${' '}
                  {log.amount.toFixed(2).replace('.', ',')}
                </span>
              </div>
              {log.action === 'transfer' && (
                <p className="text-sm text-gray-500">
                  Remetente: {log.user_name}
                </p>
              )}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
