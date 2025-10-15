import { connection } from "../../../../config/database"
import type { UsersRepositoryInterface } from "../users.interface"

export class UsersRepository implements UsersRepositoryInterface {
  async create(data: any): Promise<void> {
    await connection("users").insert(data)
  }

  async getUserByEmail(email: string): Promise<any> {
    const user = await connection("users").where("email", email).first()

    return user
  }
}
