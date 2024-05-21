type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto w-[calc(100%-48px)] max-w-[700px] py-16 md:w-[calc(100%-100px)]">
      {children}
    </div>
  )
}
