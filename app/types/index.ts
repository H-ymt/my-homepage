export type ZennArticle = {
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
