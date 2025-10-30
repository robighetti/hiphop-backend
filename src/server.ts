import fastify from "fastify"

import fastifyJwt from "@fastify/jwt"

import { env } from "./shared/env/environments"
import { appRoutes } from "./shared/routes/app.routes"

const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(appRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP server running!")
  })
