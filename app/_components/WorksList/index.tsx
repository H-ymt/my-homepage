import { Article } from '@/app/libs/microcms'
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
    <ul className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
      {articles.map(article => (
        <WorksListItem key={article.id} works={article} />
      ))}
    </ul>
  )
}
