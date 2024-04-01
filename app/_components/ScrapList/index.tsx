import ConvertDate from '../ConvertDate'

interface Scrap {
  id: number
  path: string
  emoji: string
  title: string
  created_at: string
  last_comment_created_at: string
  topics: {
    id: number
    name: string
    image_url: string
  }
}

export default async function ScrapList() {
  const res = await fetch(
    'https://zenn.dev/api/scraps?username=h_ymt&count=100&order=https://zenn.dev/api/scraps?username=h_ymt&count=100&order=published_at',
  )
  const data = await res.json()
  const scraps: Scrap[] = data.scraps.slice(0, 10)

  return (
    <>
      <ul className="grid place-items-start gap-4">
        {scraps.map(scrap => (
          <a
            key={scrap.id}
            className="py-3.5 border-b w-full hover:border-primary focus:outline-offset-2"
            target="_blank"
            href={`https://zenn.dev/${scrap.path}`}
            rel="noreferrer"
          >
            <li className="grid gap-2">
              <h3 className="text-lg font-bold line-clamp-1 overflow-hidden break-all pb-0">
                {scrap.title}
              </h3>
              <div className="text-xs text-muted-foreground flex items-center flex-wrap gap-3">
                <span className="flex items-center gap-1">
                  <p>最終更新日:</p>
                  <ConvertDate convertDate={scrap.last_comment_created_at} />
                </span>
                <p className="flex gap-1.5 flex-wrap">
                  {Array.isArray(scrap.topics) ? (
                    scrap.topics.map(topic => (
                      <span
                        key={topic.id}
                        className="inline-block rounded-full border px-2.5 py-1 text-xs font-medium before:content-['#'] before:mr-0.5 before:text-muted-foreground/80"
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
          </a>
        ))}
      </ul>
    </>
  )
}
