import WorksList from '@/app/_components/WorksList'
import { WORKS_LIST_LIMIT } from '../constants'
import { getWorksList } from '../libs/microcms'

export default async function Page() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  })

  return (
    <>
      <h1>Works</h1>
      <p className="pb-10">
        気になった技術のキャッチアップ・UI・表現などを織り交ぜて自主制作したWebサイトを掲載するページです。
      </p>

      <WorksList articles={data.contents} />
    </>
  )
}
