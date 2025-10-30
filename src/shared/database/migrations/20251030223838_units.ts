import type { Knex } from "knex"

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("units", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"))
    table.string("name").notNullable()
    table.string("description").notNullable()
    table.string("cep").notNullable()
    table.string("street").notNullable()
    table.string("number").notNullable()
    table.string("neighborhood").notNullable()
    table.string("city").notNullable()
    table.string("state").notNullable()
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
    table.timestamp("updated_at").defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("units")
}
