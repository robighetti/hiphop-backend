import type { FastifyInstance } from "fastify"

import { usersRoutes } from "../../domains/users/infra/routes/users.routes"
import { authRoutes } from "../../domains/users/infra/routes/auth.routes"
import { forgotPasswordRoutes } from "../../domains/users/infra/routes/forgot-password.routes"

export async function appRoutes(server: FastifyInstance) {
  server.register(usersRoutes, { prefix: "/users" })
  server.register(authRoutes, { prefix: "/login" })
  server.register(forgotPasswordRoutes, { prefix: "/forgot-password" })
}
