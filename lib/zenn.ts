export type ZennArticle = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  map(arg0: (post: any) => import('react').JSX.Element): import('react').ReactNode
  id: number
  path: string
  emoji: string
  title: string
  published_at: string
}

export type ZennScraps = {
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

export const getZennArticles = async () => {
  const res = await fetch('https://zenn.dev/api/articles?username=h_ymt&order=latest', {})
  const data = await res.json()

  return data
}
