import type { FastifyRequest, FastifyReply } from "fastify"

import { z } from "zod"

import { makeResetPassword } from "../../use-cases/factories/make-reset-password"

export async function resetPassword(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const schemaBody = z.object({
    password: z.string(),
  })

  const schemaToken = z.object({
    token: z.string(),
  })

  const { password } = schemaBody.parse(request.body)
  const { token } = schemaToken.parse(request.params)

  const resetPassword = makeResetPassword()

  await resetPassword.execute(token, password)

  return reply.status(200).send({ message: "Password reset" })
}
