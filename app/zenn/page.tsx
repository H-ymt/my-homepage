import { ZennArticle } from '@/lib/zenn'
import { FaExternalLinkAlt } from 'react-icons/fa'
import ScrapList from '../components/ScrapList'

type Props = {
  posts: ZennArticle
}

// export const runtime = 'edge'

export default function ZennPage({ posts }: Props) {
  return (
    <div>
      <h1>Develop log</h1>
      <p className="pb-10">
        Webの技術・開発についての知見を
        <a
          href="https://zenn.dev/"
          className="inline-flex gap-1 items-center text-primary px-1"
        >
          Zenn
          <FaExternalLinkAlt size="12" />
        </a>
        に投稿しています。
      </p>

      <section>
        <h2>Articles</h2>
        <p>準備中です</p>
        {/* <BlogList posts={posts} /> */}
      </section>

      <section>
        <h2>Scraps</h2>
        <ScrapList />
      </section>
    </div>
  )
}
