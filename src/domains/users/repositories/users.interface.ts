import type { UserCreateRequestDto } from "../dtos/user/user-create-request.dto"
import type { UserCreateResponseDto } from "../dtos/user/user-create-response.dto"

export interface UsersRepositoryInterface {
  create(data: UserCreateRequestDto): Promise<void>
  getUserByEmail(email: string): Promise<UserCreateResponseDto | null>
}
