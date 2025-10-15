import type { UserCreateDto } from "../dtos/user-create.dto"
import type { UsersRepositoryInterface } from "../repositories/users.interface"

export class CreateUser {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(data: UserCreateDto) {
    const userExists = await this.usersRepository.getUserByEmail(data.email)

    if (userExists) {
      throw new Error("User already exists")
    }

    await this.usersRepository.create(data)
  }
}
