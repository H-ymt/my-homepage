import { AiFillGithub } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { IoMdHome } from 'react-icons/io'
import { PiCodeDuotone } from 'react-icons/pi'
import { SiZenn } from 'react-icons/si'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export default function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden p-1">
        <FiMenu size="28px" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[200px] mr-4 py-1.5">
        <Link className="items-center w-full" href="/">
          <DropdownMenuItem className="flex gap-2 w-full py-2">
            <IoMdHome size="1.2em" />
            Home
          </DropdownMenuItem>
        </Link>

        <Link className="items-center w-full" href="/work">
          <DropdownMenuItem className="flex gap-2 w-full py-2">
            <PiCodeDuotone size="1.2em" />
            Work
          </DropdownMenuItem>
        </Link>

        <Link className="items-center w-full" href="/blog">
          <DropdownMenuItem className="flex gap-2 w-full py-2">
            <SiZenn size="1.2em" />
            Blog
          </DropdownMenuItem>
        </Link>

        <Link
          className="items-center w-full"
          href="https://github.com/H-ymt/my-portfolio/"
        >
          <DropdownMenuItem className="flex gap-2 w-full py-2">
            <AiFillGithub size="1.2em" />
            Source
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
