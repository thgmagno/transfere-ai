export interface Users {
  id: number
  name: string
  balance: number
  avatar_url: string
}

export interface Logs {
  id: number
  user_id: number
  user_name: string
  action: 'deposit' | 'transfer' | 'withdraw'
  amount: number
  receiver_id?: number
  receiver_name?: string
  created_at: Date
}
