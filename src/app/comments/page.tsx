import Link from "next/link"
import { getAllComments } from "../../db"

export default async function CommentsPage() {
  const comments = await getAllComments()

  return (
    <div>
      <h1>Comments Page</h1>
      <Link href={`/comments/new`}>New Comment</Link>
      {comments.length === 0 && <p>No Comments</p>}
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ol>
    </div>
  )
}
