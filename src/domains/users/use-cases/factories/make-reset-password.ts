import { ResetPassword } from "../reset-password"
import { UsersRepository } from "../../repositories/knex/users.repository"

export function makeResetPassword() {
  const usersRepository = new UsersRepository()

  const resetPassword = new ResetPassword(usersRepository)

  return resetPassword
}
