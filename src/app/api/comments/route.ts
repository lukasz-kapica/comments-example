import { createComment } from "@/db"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const { body } = await request.json()

  const comment = await createComment(body)

  return NextResponse.json(comment)
}
