'use client'

import { fadeUpStaggerAnimation } from '@/lib/motion'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}

export default function RootTemplate({ children }: Props) {
  return (
    <motion.div variants={fadeUpStaggerAnimation()} initial="hidden" animate="visible">
      {children}
    </motion.div>
  )
}
