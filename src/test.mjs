import pkg from 'pg'

const { Pool } = pkg

export const pool = new Pool({
  connectionString:
    'postgresql://postgres:oUckMhb7hYTP2oEV@insistently-legal-lagomorph.data-1.use1.tembo.io:5432/postgres?sslmode=verify-full&ssl=-----BEGIN CERTIFICATE-----MIICAzCCAamgAwIBAgIRAIcDAq50I2MGN7Ex+2N8RSkwCgYIKoZIzj0EAwIwRTEOMAwGA1UEChMFdGVtYm8xFDASBgNVBAsTC2VuZ2luZWVyaW5nMR0wGwYDVQQDExRkYXRhLTEudXNlMS50ZW1iby5pbzAeFw0yNDA4MTUxODMxMjVaFw0yNDExMTMxODMxMjVaMEUxDjAMBgNVBAoTBXRlbWJvMRQwEgYDVQQLEwtlbmdpbmVlcmluZzEdMBsGA1UEAxMUZGF0YS0xLnVzZTEudGVtYm8uaW8wWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAARtP1Kx2rxDmGkwWFmqw0snJZyMfrBs1Fejhsg+3X+qQGFHmFJ4rKrKbpt/uqF4GTbryQNtCfG8o86oZGglMLsjo3oweDAOBgNVHQ8BAf8EBAMCAqQwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUqTbXl+W22irBuFjMkT5HYIB5CtowNgYDVR0RBC8wLYIVZGF0YS0xLnVzZTEuY29yZWRiLmlvghRkYXRhLTEudXNlMS50ZW1iby5pbzAKBggqhkjOPQQDAgNIADBFAiEAoPZDfXI3hj17fd2WvR2dHZc02+OQFcDSb4B83v/L+24CIGn2vqoFP/Tis9udM/oz2hBg59BMZbWb4hNDO23PdJ8q-----END CERTIFICATE-----',
})

const testConnection = async () => {
  try {
    const client = await pool.connect()
    console.log('Conexão bem-sucedida ao banco de dados!')
    client.release() // Libera o cliente após a conexão
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error.message)
  }
}

testConnection()
