import type { UsersRepositoryInterface } from "../repositories/users.interface"
import { genarateHash } from "../../../shared/utils/encrypt"
import type { UserCreateRequestDto } from "../dtos/user/user-create-request.dto"
import { AppError } from "../../../shared/error/AppError"

export class CreateUser {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(data: UserCreateRequestDto) {
    const userExists = await this.usersRepository.getUserByEmail(data.email)

    if (userExists) {
      throw new AppError("User already exists")
    }

    const passwordHash = await genarateHash(data.password)

    Object.assign(data, { password: passwordHash })

    await this.usersRepository.create(data)
  }
}
