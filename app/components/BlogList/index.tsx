import { ZennArticle } from '@/app/types'
import BlogListItem from '../BlogListItem'

export const runtime = 'edge'

export default async function BlogList() {
  const res = await fetch('https://zenn.dev/api/articles?username=h_ymt&order=latest', {})
  const data = await res.json()
  const posts: ZennArticle[] = data.articles

  if (!posts || posts.length === 0) {
    return <p>投稿がありません</p>
  }

  return (
    <>
      <BlogListItem posts={posts} />
    </>
  )
}
