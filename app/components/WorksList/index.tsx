'use client'

import { Article } from '@/lib/microcms'
import { fadeUpStaggerAnimation } from '@/lib/motion'
import { motion } from 'framer-motion'
import WorksListItem from '../WorksListItem'

type Props = {
  articles?: Article[]
}

export default function WorksList({ articles }: Props) {
  if (!articles) {
    return null
  }

  if (articles.length === 0) {
    return <p>準備中です</p>
  }

  return (
    <motion.ul
      variants={fadeUpStaggerAnimation(0, 0, 0, 1, 0.5, 0.1)}
      initial="hidden"
      animate="visible"
      className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8"
    >
      {articles.map(article => (
        <WorksListItem key={article.id} works={article} />
      ))}
    </motion.ul>
  )
}
