import type { CreateUnitRequestDto } from "../dtos/create-unit-request.dto"
import type { UnitResponseDto } from "../dtos/unit-response.dto"

export interface UnitsRepositoryInterface {
  create(data: CreateUnitRequestDto): Promise<void>
  getUnitByCepAndNumber(
    cep: string,
    number: string,
  ): Promise<UnitResponseDto | null>
}
