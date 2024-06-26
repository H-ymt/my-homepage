import { getZennArticles } from '@/lib/zenn'
import { FaExternalLinkAlt } from 'react-icons/fa'
import BlogList from '../components/BlogList'
import ScrapList from '../components/ScrapList'

export const runtime = 'edge'

export default async function ZennPage() {
  const data = await getZennArticles()

  return (
    <div>
      <h1>Develop log</h1>
      <p className="pb-10">
        Webの技術・開発についての知見を
        <a
          href="https://zenn.dev/"
          className="inline-flex gap-1 items-center text-primary px-1 hover:underline"
        >
          Zenn
          <FaExternalLinkAlt size="12" />
        </a>
        に投稿しています。
      </p>

      <section>
        <h2>Articles</h2>
        <BlogList posts={data.articles} />
      </section>

      <section>
        <h2>Scraps</h2>
        <ScrapList />
      </section>
    </div>
  )
}
