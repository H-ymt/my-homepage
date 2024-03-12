import Link from 'next/link'
import ConvertDate from '../ConvertDate'

interface Post {
  id: number
  path: string
  emoji: string
  title: string
  published_at: string
}

export default async function BlogList() {
  const res = await fetch('https://zenn.dev/api/articles?username=h_ymt&order=latest')
  const data = await res.json()
  const posts: Post[] = data.articles.slice(0, 10)

  return (
    <>
      <ul className="grid place-items-center gap-7 items-stretch grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        {posts.map(post => (
          <li key={post.id} className="w-full">
            <Link
              href={`https://zenn.dev/${post.path}`}
              target="blank"
              className="flex aspect-[4/3] w-full h-full flex-col items-center justify-center gap-4 bg-background p-6 border rounded-3xl hover:outline-primary hover:outline-2 hover:outline-double hover:bg-muted/60"
            >
              <span className="text-6xl">{post.emoji}</span>
              <p className="line-clamp-2 overflow-hidden break-all text-left font-medium">
                {post.title}
              </p>
              <p className="text-muted-foreground text-xs tracking-widest">
                <ConvertDate convertDate={post.published_at} />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
