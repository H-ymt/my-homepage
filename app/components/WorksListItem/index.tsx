'use client'

import { Article } from '@/lib/microcms'
import { fadeUpStaggerAnimation } from '@/lib/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  works: Article
}

export default function WorksListItem({ works }: Props) {
  return (
    <>
      <motion.li
         variants={fadeUpStaggerAnimation(0, 0, 0, 1, 0.5, 0.1)}
        className="group grid rounded-3xl border-none transition-[transform] duration-300 hover:scale-[1.02]"
      >
        <Link href={`/projects/${works.id}`}>
          {works.thumbnail ? (
            <Image
              src={`${works.thumbnail?.url}?w=800&h=640&format=webp`}
              alt=""
              width={works.thumbnail.width}
              height={works.thumbnail?.height}
              className="aspect-[4/3] w-full rounded-xl object-cover"
              sizes="(min-width: 640px) 296px, 100vw"
              loading="eager"
            />
          ) : (
            <Image src="" alt="No Image" width={800} height={800} />
          )}

          <dl className="mt-3 inline-flex flex-col gap-2 pl-1">
            <dt className="line-clamp-2 overflow-ellipsis break-all text-base font-semibold">
              {works.title}
            </dt>
            <dd className="flex flex-wrap gap-2.5">
              {works.category.map((data: { id: string; name: string }) => (
                <div key={data.id} className="rounded-sm bg-muted px-2.5 py-1.5 text-xs">
                  {data.name}
                </div>
              ))}
            </dd>
          </dl>
        </Link>
      </motion.li>
    </>
  )
}
