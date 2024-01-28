type Props = {
  children: React.ReactNode
}

export default function AnimationWrapper({ children }: Props) {
  return <div className='animate-fade-in-bottom'>{children}</div>
}
