import { Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import { Providers } from './utils/providers';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://h-ymt.com/'),
  title: {
    template: "%s - Yamato's Portfolio",
    default: "Yamato's Portfolio",
  },
  description:
    'Nest.jsとTailwind CSSを使用したポートフォリオWebサイトです。コンテンツ管理にmicroCMSを使用したJamstack構成で、ホスティングにはCloudflare Pagesを使用しています。',
  twitter: {
    title: "Yamato's Portfolio",
    description:
      'Nest.jsとTailwind CSSを使用したポートフォリオWebサイトです。コンテンツ管理にmicroCMSを使用したJamstack構成で、ホスティングにはCloudflare Pagesを使用しています。',
    card: 'summary_large_image',
  },
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
