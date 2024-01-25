import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { knex } from "../database"
import { randomUUID } from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {

  app.get('/', async () => {
    const transactions = await knex('transactions').select()

    return {
      transactions
    }
  })

  app.get('/:id', async (request) => {
    const getTransactionParmsSchema = z.object({
      id: z.string().uuid()
    })

    const { id } = getTransactionParmsSchema.parse(request.params)

    const transaction = await knex('transactions').where('id', id).first()

    return {
      transaction
    }
  })

  app.get('/summary', async (request) => {
    const summary = await knex('transactions').sum('amount', { as: 'amount' }).first()

    return {
      summary
    }
  })

  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit'])
    })

    const { title, amount, type } = createTransactionBodySchema.parse(request.body)

    const transaction = await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1
    })

    reply.status(201).send()
  
    return transaction
  })

}