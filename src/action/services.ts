'use server'

import { pool } from '@/database'
import { TransactionSchema } from '@/lib/schemas'
import { ActionsDBFormState } from '@/lib/states'
import { revalidatePath } from 'next/cache'

export async function deposit(
  formState: ActionsDBFormState,
  formData: FormData,
): Promise<ActionsDBFormState> {
  const parsed = TransactionSchema.safeParse({
    amount: formData.get('amount'),
    receiver: formData.get('receiver'),
  })

  if (!parsed.success) {
    return { success: false, message: parsed.error.errors[0].message }
  }

  const query = `
    CALL trfa_deposit(${parsed.data.receiver}, ${parsed.data.amount});
  `

  try {
    await pool.query(query)
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message }
    } else {
      return { success: false, message: 'Erro interno do servidor.' }
    }
  }

  revalidatePath('/')
  return { success: true, message: 'Depósito realizado com sucesso.' }
}

export async function transfer(
  formState: ActionsDBFormState,
  formData: FormData,
): Promise<ActionsDBFormState> {
  const parsed = TransactionSchema.safeParse({
    amount: formData.get('amount'),
    sender: formData.get('sender'),
    receiver: formData.get('receiver'),
  })

  if (!parsed.success) {
    return { success: false, message: parsed.error.errors[0].message }
  }

  if (!parsed.data.sender || !parsed.data.receiver) {
    return {
      success: false,
      message:
        'É necessário informar usuário de destino e usuário de origem para realizar transferência.',
    }
  }

  const query = `
    CALL trfa_transfer(${parsed.data.sender}, ${parsed.data.receiver}, ${parsed.data.amount});
  `

  try {
    await pool.query(query)
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message }
    } else {
      return { success: false, message: 'Erro interno do servidor.' }
    }
  }

  revalidatePath('/')
  return { success: true, message: 'Transferência realizada com sucesso.' }
}

export async function withdraw(
  formState: ActionsDBFormState,
  formData: FormData,
): Promise<ActionsDBFormState> {
  const parsed = TransactionSchema.safeParse({
    amount: formData.get('amount'),
    sender: formData.get('sender'),
  })

  if (!parsed.success) {
    return { success: false, message: parsed.error.errors[0].message }
  }

  const query = `
    CALL trfa_withdraw(${parsed.data.sender}, ${parsed.data.amount});
  `

  try {
    await pool.query(query)
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message }
    } else {
      return { success: false, message: 'Erro interno do servidor.' }
    }
  }

  revalidatePath('/')
  return { success: true, message: 'Saque realizado com sucesso.' }
}
