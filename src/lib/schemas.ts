import { z } from 'zod'

const clearValue = (val: string) =>
  val.slice(2).replaceAll('.', '').replace(',', '.')

export const TransactionSchema = z
  .object({
    amount: z
      .string()
      .refine((val) => val.trim() !== '', 'O campo valor é obrigatório.')
      .refine((val) => {
        const clearedValue = clearValue(val)
        const parsedValue = parseFloat(clearedValue)
        return !isNaN(parsedValue) && parsedValue >= 0.01
      }, 'O valor deve ser maior que zero.')
      .transform((val) => clearValue(val)),

    sender: z
      .string()
      .optional()
      .nullable()
      .transform((val) => (val ? parseInt(val) : undefined)),

    receiver: z
      .string()
      .optional()
      .nullable()
      .transform((val) => (val ? parseInt(val) : undefined)),
  })
  .refine((data) => data.sender || data.receiver, {
    message: 'Informe ao menos o usuário de origem ou destino.',
    path: ['sender', 'receiver'],
  })
  .refine((data) => data.sender !== data.receiver, {
    message: 'O usuário de destino deve ser diferente do usuário de origem.',
    path: ['sender', 'receiver'],
  })
