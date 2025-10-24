import type { FastifyRequest, FastifyReply } from "fastify"

import { z } from "zod"
import { makeForgotPassword } from "../../use-cases/factories/make-forgot-password"

export async function forgotPassword(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const schema = z.object({
    email: z.string(),
  })

  const { email } = schema.parse(request.body)

  const forgotPassword = makeForgotPassword()

  await forgotPassword.execute(email)

  return reply.status(200).send({ message: "Email sent" })
}
