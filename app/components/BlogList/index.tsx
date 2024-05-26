import { ZennArticle } from '@/lib/zenn'
import BlogListItem from '../BlogListItem'

type Props = {
  posts: ZennArticle
}

export const runtime = 'edge'

export default function BlogList({ posts }: Props) {
  if (!posts) {
    return null
  }

  return (
    <>
      {posts.map(post => (
        <BlogListItem key={post.id} posts={post} />
      ))}
    </>
  )
}
