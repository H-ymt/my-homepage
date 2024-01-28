type Props = {
  children: React.ReactNode
}

export default function Sheet({ children }: Props) {
  return (
    <div className='mx-auto w-[calc(100%-40px)] max-w-[640px] py-16 md:w-[calc(100%-100px)] md:py-20'>
      {children}
    </div>
  )
}
