import { ForgotPassword } from "../forgot-password"
import { UsersRepository } from "../../repositories/knex/users.repository"

export function makeForgotPassword() {
  const usersRepository = new UsersRepository()
  const forgotPassword = new ForgotPassword(usersRepository)

  return forgotPassword
}
