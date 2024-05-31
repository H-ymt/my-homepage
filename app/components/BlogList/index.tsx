'use client'

import { fadeUpStaggerAnimation } from '@/lib/motion'
import { ZennArticle } from '@/lib/zenn'
import { motion } from 'framer-motion'
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
    <motion.div
      variants={fadeUpStaggerAnimation(0, 0, 0, 1, 0.5, 0.1)}
      initial="hidden"
      animate="visible"
      className="grid sm:grid-cols-2 gap-y-7 gap-x-8"
    >
      {posts.map(post => (
        <BlogListItem key={post.id} posts={post} />
      ))}
    </motion.div>
  )
}
