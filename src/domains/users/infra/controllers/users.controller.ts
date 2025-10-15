import type { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"

import { makeCreateUser } from "../../use-cases/factories/make-create-user"

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  })

  const { name, email, password } = schema.parse(request.body)

  const createUser = makeCreateUser()

  await createUser.execute({ name, email, password })

  return reply.status(201).send({ message: "User created" })
}
