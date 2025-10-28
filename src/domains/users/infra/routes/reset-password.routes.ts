import type { FastifyInstance } from "fastify"
import { resetPassword } from "../controllers/reset-password.controller"

export async function resetPasswordRoutes(app: FastifyInstance) {
  app.patch("/:token", resetPassword)
}
