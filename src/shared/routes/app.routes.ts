import type { FastifyInstance } from "fastify"

import { usersRoutes } from "../../domains/users/infra/routes/users.routes"
import { authRoutes } from "../../domains/users/infra/routes/auth.routes"

export async function appRoutes(server: FastifyInstance) {
  server.register(usersRoutes, { prefix: "/users" })
  server.register(authRoutes, { prefix: "/login" })
}
