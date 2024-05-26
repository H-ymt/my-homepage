'use client'

import { ZennArticle } from '@/lib/zenn'
import ConvertDate from '../ConvertDate'

type BlogListItemProps = {
  posts?: ZennArticle
}

export default function BlogListItem({ posts }: BlogListItemProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <a
        key={posts?.id}
        href={`https://zenn.dev/${posts?.path}`}
        target="blank"
        className="flex gap-4 items-start rounded-lg group"
      >
        <span className="text-4xl bg-accent/50 rounded-lg p-7">{posts?.emoji}</span>
        <div className="flex flex-col gap-2 group-hover:[&>*]:text-primary [&>*]:duration-200">
          <h2 className="text-base line-clamp-2">{posts?.title}</h2>
          <ConvertDate
            convertDate={posts?.published_at ?? ''}
            className="text-muted-foreground/85 text-xs"
          />
        </div>
      </a>
    </div>
  )
}
