import jwt from "jsonwebtoken"

import { compareHash } from "../../../shared/utils/encrypt"
import type { AuthRequestDto } from "../dtos/auth/auth.request"
import type { UsersRepositoryInterface } from "../repositories/users.interface"
import { env } from "../../../shared/env/environments"
import { AppError } from "../../../shared/error/AppError"

export class Login {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(data: AuthRequestDto) {
    const user = await this.usersRepository.getUserByEmail(data.email)

    if (!user || !user.password) {
      throw new AppError("User not found", 404)
    }

    const passwordMatch = await compareHash(data.password, user.password)

    if (!passwordMatch) {
      throw new AppError("Invalid credentials", 401)
    }

    const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN,
    } as any)

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        status: user.status,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      token,
    }
  }
}
