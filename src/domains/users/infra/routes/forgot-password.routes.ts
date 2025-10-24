import type { FastifyInstance } from "fastify"

import { forgotPassword } from "../controllers/forgot-password.controller"

export async function forgotPasswordRoutes(app: FastifyInstance) {
  app.post("/", forgotPassword)
}
