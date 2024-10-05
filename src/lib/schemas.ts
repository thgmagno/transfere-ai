import { z } from 'zod'

export const TransactionSchema = z
  .object({
    amount: z.preprocess(
      (val) => {
        if (typeof val === 'string') {
          const clearedValue = val
            .replace('R$ ', '')
            .replaceAll('.', '')
            .replace(',', '.')
          return parseFloat(clearedValue)
        }
        return val
      },
      z.number().min(0.01, 'O valor deve ser maior que zero.'),
    ),

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
