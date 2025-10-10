import fastify from "fastify"

import { env } from "./shared/env/environments"
import { appRoutes } from "./shared/routes/app.routes"

const app = fastify()

// Exemplo de uma rota GET
// app.get("/hello", () => {
//   return "Bem Vindo"
// })

app.register(appRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP server running!")
  })
