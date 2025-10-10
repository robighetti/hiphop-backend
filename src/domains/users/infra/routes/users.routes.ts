import type { FastifyInstance } from "fastify"
import {
  createUser,
  deleteUser,
  updateUser,
} from "../controllers/users.controller"

export async function usersRoutes(app: FastifyInstance) {
  app.post("/", createUser)

  app.put("/", updateUser)

  app.delete("/", deleteUser)
}
