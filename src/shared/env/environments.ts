import "dotenv/config"

import { z } from "zod"

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(["local", "production"]).default("local"),
  DB_CLIENT: z.string(),
  DB_POOL_MIN: z.coerce.number().default(1),
  DB_POOL_MAX: z.coerce.number().default(100),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().default(5432),
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_DATABASE: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error("Invalid environment variables", _env.error.format())
  throw new Error("Invalid environment variables")
}

export const env = _env.data
