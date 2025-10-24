import { env } from "process"
import { MailProvider } from "../../../shared/providers/email/nodemailer/nodemailerMailProvider"
import type { UsersRepositoryInterface } from "../repositories/users.interface"
import { randomUUID } from "crypto"

export class ForgotPassword {
  constructor(private usersRepository: UsersRepositoryInterface) {}

  async execute(email: string) {
    const user = await this.usersRepository.getUserByEmail(email)
    if (!user) {
      throw new Error("User not found")
    }

    const token = randomUUID()

    await this.usersRepository.createToken(user.id, token)

    const mailProvider = new MailProvider()

    await mailProvider.sendMail({
      to: email,
      subject: "Recuperação de senha",
      template: `
        <p>Olá, Rodrigo</p>
        <p>Clique no link abaixo para recuperar sua senha:</p>
        <a href="${env.FRONTEND_URL}/reset-password?token=${1234}">Recuperar senha</a>
      `,
    })

    return email
  }
}
