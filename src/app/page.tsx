import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Comments App</h1>
      <ul>
        <li>
          <Link href={`/comments`}>View Comments</Link>
        </li>
        <li>
          <Link href={`/comments/new`}>Post new comment</Link>
        </li>
      </ul>
    </main>
  )
}
