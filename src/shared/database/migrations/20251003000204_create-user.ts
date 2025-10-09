import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  // Habilita a extensão uuid-ossp para gerar UUIDs
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

  await knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"))
    table.string("name").notNullable()
    table.string("email").notNullable()
    table.string("password").notNullable()
    table.boolean("status").defaultTo(true).notNullable()
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
    table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("users")
}
