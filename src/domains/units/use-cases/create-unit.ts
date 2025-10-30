import { AppError } from "../../../shared/error/AppError"
import { ViaCepApi } from "../../../shared/services/via-cep/viaCepApi"
import type { CreateUnitRequestDto } from "../dtos/create-unit-request.dto"
import type { UnitsRepositoryInterface } from "../repositories/units.repository.interface"

export class CreateUnit {
  constructor(private unitsRepository: UnitsRepositoryInterface) {}

  async execute(data: CreateUnitRequestDto) {
    const unitExists = await this.unitsRepository.getUnitByCepAndNumber(
      data.cep,
      data.number,
    )

    if (unitExists) {
      throw new AppError("Unit already exists")
    }

    const address = await ViaCepApi.getAddressByCep(data.cep)

    Object.assign(data, {
      street: address.logradouro,
      neighborhood: address.bairro,
      city: address.localidade,
      state: address.estado,
    })

    await this.unitsRepository.create(data)
  }
}
