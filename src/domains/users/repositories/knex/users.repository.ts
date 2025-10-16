import { connection } from "../../../../config/database"
import type { UserCreateRequestDto } from "../../dtos/user/user-create-request.dto"
import type { UserCreateResponseDto } from "../../dtos/user/user-create-response.dto"
import type { UsersRepositoryInterface } from "../users.interface"

export class UsersRepository implements UsersRepositoryInterface {
  async create(data: UserCreateRequestDto): Promise<void> {
    await connection("users").insert(data)
  }

  async getUserByEmail(email: string): Promise<UserCreateResponseDto | null> {
    const user = await connection("users").where("email", email).first()

    return user
  }
}
