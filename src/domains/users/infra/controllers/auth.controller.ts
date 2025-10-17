import type { FastifyRequest, FastifyReply } from "fastify"
import { z } from "zod"
import { makeLogin } from "../../use-cases/factories/make-login"

export async function auth(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    email: z.string(),
    password: z.string(),
  })

  const { email, password } = schema.parse(request.body)

  const auth = makeLogin()

  const data = await auth.execute({ email, password })

  return reply.status(200).send(data)
}
