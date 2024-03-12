import Container from '../_components/Container'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return <Container>{children}</Container>
}
