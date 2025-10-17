export interface UserCreateResponseDto {
  id: string
  name: string
  email: string
  status: boolean
  password?: string
  createdAt: Date
  updatedAt: Date
}
