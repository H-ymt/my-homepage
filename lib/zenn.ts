import { ZennArticle } from '@/app/types'

export const getZennArticles = async () => {
  const res = await fetch('https://zenn.dev/api/articles?username=h_ymt&order=latest', {})
  const data = await res.json()
  const posts: ZennArticle[] = data.articles

  return posts
}
