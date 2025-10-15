export interface UsersRepositoryInterface {
  create(data: any): Promise<void>
  getUserByEmail(email: string): Promise<any>
}
