import type { FastifyInstance } from "fastify"
import { auth } from "../controllers/auth.controller"

export function authRoutes(app: FastifyInstance) {
  app.post("/", auth)
}
