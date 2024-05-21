import { ZennArticle } from '@/app/types'
import BlogListItem from '../BlogListItem'

type Props = {
  posts: ZennArticle
}

export const runtime = 'edge'

export default function BlogList({ posts }: Props) {
  return (
    <>
      <BlogListItem posts={posts} />
    </>
  )
}
