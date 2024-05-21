'use client'

import { ZennArticle } from '@/app/types'
import { fadeUpStaggerAnimation } from '@/lib/motion'
import { motion } from 'framer-motion'
import ConvertDate from '../ConvertDate'

type BlogListItemProps = {
  posts: ZennArticle[]
}

export default function BlogListItem({ posts }: BlogListItemProps) {
  return (
    <motion.div
      variants={fadeUpStaggerAnimation()}
      initial="hidden"
      whileInView="visible"
      className="grid gap-8 sm:grid-cols-2"
    >
      {posts.map((post: ZennArticle) => (
        <motion.a
          variants={fadeUpStaggerAnimation()}
          key={post.id}
          href={`https://zenn.dev/${post.path}`}
          target="blank"
          className="flex gap-4 items-start rounded-lg group"
        >
          <span className="text-4xl bg-accent/50 rounded-lg p-7">{post.emoji}</span>
          <div className="flex flex-col gap-2 group-hover:[&>*]:text-primary [&>*]:duration-200">
            <h2 className="text-base line-clamp-2">{post.title}</h2>
            <ConvertDate
              convertDate={post.published_at}
              className="text-muted-foreground/85 text-xs"
            />
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}
