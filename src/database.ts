import pkg from 'pg'
import { env } from '../env'

const { Pool } = pkg

export const pool = new Pool({
  connectionString: env.POSTGRES_URL,
})
