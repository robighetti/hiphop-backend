import knex, { type Knex } from "knex"

import { env } from "../shared/env/environments"

export const config: Knex.Config = {
  client: env.DB_CLIENT,
  pool: { min: env.DB_POOL_MIN, max: env.DB_POOL_MAX },
  connection: {
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_DATABASE,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/shared/database/migrations",
    extension: "ts",
  },
}

export const connection = knex(config)
