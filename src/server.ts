import fastify from "fastify"

import { env } from "./shared/env/environments"

const app = fastify()

// Exemplo de uma rota GET
// app.get("/hello", () => {
//   return "Bem Vindo"
// })

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP server running!")
  })
