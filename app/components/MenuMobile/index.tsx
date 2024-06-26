import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { IoMdHome } from 'react-icons/io'
import { PiCodeDuotone } from 'react-icons/pi'
import { SiZenn } from 'react-icons/si'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export default function MenuMobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden p-1">
        <FiMenu size="28px" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[180px] mr-4 py-1.5 bg-muted rounded-lg">
        <Link className="items-center py-1 w-full" href="/">
          <DropdownMenuItem className="flex gap-2 w-full py-2">
            <IoMdHome size="1.2em" />
            Home
          </DropdownMenuItem>
        </Link>

        <Link className="items-center py-1 w-full" href="/projects">
          <DropdownMenuItem className="flex gap-2 w-full py-2">
            <PiCodeDuotone size="1.2em" />
            Projects
          </DropdownMenuItem>
        </Link>

        <Link className="items-center py-1 w-full" href="/zenn">
          <DropdownMenuItem className="flex gap-2 w-full py-2">
            <SiZenn size="1.2em" />
            Zenn
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
