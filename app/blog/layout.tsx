import { Metadata } from 'next'
import Container from '../_components/Container'

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Blog',
  description:
    '私はフロントエンド開発に関する情報を中心にZennで技術記事を投稿しており、クリックするとZennの記事ページへ移動します。私の記事があなたのプロジェクトやスキル向上にお役立ていただければ幸いです。',
}

export default function RootLayout({ children }: Props) {
  return <Container>{children}</Container>
}
