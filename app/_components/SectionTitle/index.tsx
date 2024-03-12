type Props = {
  children: string
  sub: string
}

export default function SectionTitle({ children, sub }: Props) {
  return (
    <div className="text-center">
      <h2 className="inline-flex flex-col pb-6 tracking-wider lg:pb-8">
        {children}
        <span className="text-center text-[12px] leading-5 tracking-normal text-muted-foreground">
          {sub}
        </span>
      </h2>
    </div>
  )
}
