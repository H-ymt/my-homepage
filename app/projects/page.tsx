import { getWorksList } from '@/lib/microcms'
import WorksList from '../components/WorksList'
import { WORKS_LIST_LIMIT } from '../constants'

export default async function ProjectsPage() {
  const data = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  })

  return (
    <>
      <h1>Projects</h1>

      <div className="mt-10">
        <WorksList articles={data.contents} />
      </div>
    </>
  )
}
