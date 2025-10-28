import { genarateHash } from "../../../shared/utils/encrypt"
import type { UsersRepositoryInterface } from "../repositories/users.interface"

export class ResetPassword {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(token: string, password: string) {
    const user = await this.usersRepository.getUserByToken(token)
    if (!user) {
      throw new Error("User not found")
    }

    const passwordHashed = await genarateHash(password)

    await this.usersRepository.updateUserPassword(user.user_id, passwordHashed)
  }
}
