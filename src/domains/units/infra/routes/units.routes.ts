import type { FastifyInstance } from "fastify"
import { createUnit, getUnits } from "../controllers/units.controller"
import { ensureAuthentication } from "../../../../shared/middlewares/ensure-authentication"

export async function unitsRoutes(app: FastifyInstance) {
  app.post("/", { onRequest: [ensureAuthentication] }, createUnit)
  app.get("/", { onRequest: [ensureAuthentication] }, getUnits)
}
