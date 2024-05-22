import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'

export default function Menu() {
  return (
    <nav aria-label="global navigation" className="hidden md:inline-block">
      <div className="text-foreground flex items-center text-sm [&>*]:leading-[var(--header-height)] [&>*]:px-3.5 [&>*]:duration-200">
        <Link href="/projects" className="flex items-center gap-1 hover:text-primary">
          Projects
        </Link>
        <Link href="/zenn" className="flex items-center gap-1 hover:text-primary">
          Zenn
        </Link>
        <Link
          href="https://devlog-xk2.pages.dev/"
          target="blank"
          className="relative flex items-start gap-1 hover:text-primary mr-3.5"
        >
          Blog
          <GoArrowUpRight
            size="0.6em"
            strokeWidth={1}
            className="absolute right-[5px] border-0 top-[26px]"
          />
        </Link>
      </div>
    </nav>
  )
}
