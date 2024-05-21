import { Metadata } from 'next'

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Zenn',
  description: 'Zennに投稿している記事をまとめているページです。',
}

export default function ZennLayout({ children }: Props) {
  return <>{children}</>
}
