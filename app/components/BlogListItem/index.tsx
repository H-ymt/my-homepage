'use client'

import { fadeUpStaggerAnimation } from '@/lib/motion'
import { ZennArticle } from '@/lib/zenn'
import { motion } from 'framer-motion'
import ConvertDate from '../ConvertDate'

type BlogListItemProps = {
  posts?: ZennArticle
}

export default function BlogListItem({ posts }: BlogListItemProps) {
  return (
    <motion.a
      key={posts?.id}
      variants={fadeUpStaggerAnimation(0, 0, 0, 1, 0.5, 0.1)}
      href={`https://zenn.dev/${posts?.path}`}
      target="blank"
      className="flex gap-4 items-start rounded-lg group"
    >
      <span className="text-[46px] w-24 h-24 flex items-center justify-center bg-accent/50 rounded-lg p-7">
        {posts?.emoji}
      </span>
      <div className="flex flex-col gap-2 group-hover:[&>*]:text-primary [&>*]:duration-200">
        <h2 className="text-base line-clamp-2">{posts?.title}</h2>
        <ConvertDate
          convertDate={posts?.published_at ?? ''}
          className="text-muted-foreground/85 text-xs"
        />
      </div>
    </motion.a>
  )
}
