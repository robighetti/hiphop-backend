import type { FastifyRequest, FastifyReply } from "fastify"

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  return reply.status(201).send({ message: "User created" })
}

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  return reply.status(201).send({ message: "User updated" })
}

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  return reply.status(201).send({ message: "User deleted" })
}
