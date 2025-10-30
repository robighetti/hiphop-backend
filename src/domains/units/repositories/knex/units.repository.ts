import { connection } from "../../../../config/database"
import type { CreateUnitRequestDto } from "../../dtos/create-unit-request.dto"
import type { UnitResponseDto } from "../../dtos/unit-response.dto"
import type { UnitsRepositoryInterface } from "../units.repository.interface"

export class UnitsRepository implements UnitsRepositoryInterface {
  async create(data: CreateUnitRequestDto): Promise<void> {
    await connection("units").insert(data)
  }

  async getUnitByCepAndNumber(
    cep: string,
    number: string,
  ): Promise<UnitResponseDto | null> {
    const unit = await connection("units")
      .where("cep", cep)
      .where("number", number)
      .first()

    return unit
  }
}
