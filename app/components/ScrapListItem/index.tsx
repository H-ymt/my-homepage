'use client'

import { fadeUpStaggerAnimation } from '@/lib/motion'
import { ZennScraps } from '@/lib/zenn'
import { motion } from 'framer-motion'
import ConvertDate from '../ConvertDate'

type ScrapListItemProps = {
  scraps: ZennScraps[]
}

export default function ScrapListItem({ scraps }: ScrapListItemProps) {
  return (
    <motion.ul
      variants={fadeUpStaggerAnimation(0, 0, 0, 1, 0.5, 0.1)}
      initial="hidden"
      whileInView="visible"
      className="grid place-items-start"
    >
      {scraps.map(scrap => (
        <motion.a
          key={scrap.id}
          variants={fadeUpStaggerAnimation(0, 0, 0, 1, 0.5, 0.1)}
          className="pt-4 pb-2 shadow-border w-full shadow-[0_1px_0_0] duration-300 focus-visible:outline-offset-2 group hover:bg-muted focus-visible:bg-muted"
          target="_blank"
          href={`https://zenn.dev/${scrap.path}`}
          rel="noreferrer"
        >
          <li className="grid gap-1 pl-1.5">
            <h3 className="line-clamp-1 overflow-hidden break-all pb-0">{scrap.title}</h3>
            <div className="text-[10px] text-muted-foreground flex items-center flex-wrap gap-3">
              <span className="flex items-center gap-1 text-muted-foreground/85 text-xs">
                最終更新日:
                <ConvertDate convertDate={scrap.last_comment_created_at} />
              </span>
              <p className="flex gap-1.5 flex-wrap">
                {Array.isArray(scrap.topics) ? (
                  scrap.topics.map(topic => (
                    <span
                      key={topic.id}
                      className="inline-block rounded-full border px-2.5 py-1 text-xs before:content-['#'] before:mr-0.5 before:text-muted-foreground/80"
                    >
                      {topic.name}
                    </span>
                  ))
                ) : (
                  <span>{scrap.topics.name}</span>
                )}
              </p>
            </div>
          </li>
        </motion.a>
      ))}
    </motion.ul>
  )
}
