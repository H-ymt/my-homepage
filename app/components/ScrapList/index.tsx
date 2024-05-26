
import { ZennScraps } from '@/lib/zenn'
import ScrapListItem from '../ScrapListItem'

export default async function ScrapList() {
  const res = await fetch(
    'https://zenn.dev/api/scraps?username=h_ymt&count=100&order=last_comment_created_at',
    { cache: 'no-store' },
  )
  const data = await res.json()
  const scraps: ZennScraps[] = data.scraps.slice(0, 10)

  return (
    <>
      <ScrapListItem scraps={scraps} />
    </>
  )
}
