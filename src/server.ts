import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/users', async (request, reply) => {
  const users = await knex('users').select('*')
  return users
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => console.log('Server is running!'))
