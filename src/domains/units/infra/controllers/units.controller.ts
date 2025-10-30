import type { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeCreateUnit } from "../../use-cases/factories/make-create-unit"

export async function createUnit(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    name: z.string(),
    description: z.string(),
    cep: z.string(),
    number: z.string(),
  })

  const { name, description, cep, number } = schema.parse(request.body)

  const createUnit = makeCreateUnit()

  await createUnit.execute({ name, description, cep, number })

  return reply.status(201).send({ message: "Unit created" })
}

export async function getUnits(request: FastifyRequest, reply: FastifyReply) {}
