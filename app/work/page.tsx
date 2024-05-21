import WorksList from '@/app/components/WorksList'
import { getWorksList } from '../../lib/microcms'
import { WORKS_LIST_LIMIT } from '../constants'

export default async function Page() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  })

  return (
    <>
      <h1>Work</h1>
      <p className="pb-10">
        気になった技術のキャッチアップ・UI・表現などを織り交ぜて自主制作したWebサイトを掲載するページです。
      </p>

      <WorksList articles={data.contents} />
    </>
  )
}
