import { CreateUser } from "../create-user"
import { UsersRepository } from "../../repositories/knex/users.repository"

export function makeCreateUser() {
  const usersRepository = new UsersRepository()
  const createUser = new CreateUser(usersRepository)

  return createUser
}
