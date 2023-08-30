"use client"

import { useRouter } from "next/navigation"
import { FormEventHandler, useRef } from "react"

export default function NewCommentForm() {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    const comment = inputRef.current!.value

    await fetch(`/api/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: comment,
      }),
    })

    router.push(`/comments`)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="comment">Comment:</label>
      <br />
      <input type="text" name="comment" id="comment" required ref={inputRef} />
      <input type="submit" />
    </form>
  )
}
