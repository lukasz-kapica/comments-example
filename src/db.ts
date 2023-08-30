import { Comment, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getAllComments(): Promise<Comment[]> {
  return prisma.comment.findMany()
}

export async function createComment(body: string) {
  return prisma.comment.create({
    data: {
      body,
    },
  })
}
