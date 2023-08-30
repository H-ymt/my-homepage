import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Products',
};

export default function RootLayout({ children }: Props) {
  return <div>{children}</div>;
}
