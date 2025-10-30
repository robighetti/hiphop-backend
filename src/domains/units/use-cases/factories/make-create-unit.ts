import { UnitsRepository } from "../../repositories/knex/units.repository"
import { CreateUnit } from "../create-unit"

export function makeCreateUnit() {
  const unitsRepository = new UnitsRepository()
  const createUnit = new CreateUnit(unitsRepository)

  return createUnit
}
