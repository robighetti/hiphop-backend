import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("tokens", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"))
    table.string("token").notNullable()
    table.string("user_id").notNullable()
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
    table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("tokens")
}
