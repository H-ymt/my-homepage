import Header from '@/app/components/Header'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import Container from './components/Container'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], variable: '--font-noto-sans' })

export const metadata = {
  metadataBase: new URL('https://h-ymt.com/'),
  title: {
    template: '%s - Homepage',
    default: 'YH - Homepage',
  },
  description:
    'Next.jsとTailwind CSSを使用したホームページです。コンテンツ管理にmicroCMSを使用したJamstack構成で、ホスティングはCloudflare Pagesを使用しています。',
  twitter: {
    title: 'YH - Homepage',
    description:
      'Next.jsとTailwind CSSを使用したホームページです。コンテンツ管理にmicroCMSを使用したJamstack構成で、ホスティングはCloudflare Pagesを使用しています。',
    card: 'summary',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoSansJP.variable} bg-background text-foreground`}
      >
        <Providers>
          <Header />
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  )
}
