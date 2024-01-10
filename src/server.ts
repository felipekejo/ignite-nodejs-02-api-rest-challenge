import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/users', async (request, reply) => {
  const users = await knex('users').select('*')
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is running!'))
