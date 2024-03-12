import Header from '@/app/_components/Header'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://h-ymt.com/'),
  title: {
    template: '%s - Portfolio',
    default: 'Portfolio',
  },
  description:
    'Next.jsとTailwind CSSを使用したホームページです。コンテンツ管理にmicroCMSを使用したJamstack構成で、ホスティングにはCloudflare Pagesを使用しています。',
  twitter: {
    title: 'Portfolio',
    description:
      'Next.jsとTailwind CSSを使用したホームページです。コンテンツ管理にmicroCMSを使用したJamstack構成で、ホスティングにはCloudflare Pagesを使用しています。',
    card: 'summary',
  },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background bg-gradient-to-r from-background via-background to-transparent text-foreground`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
