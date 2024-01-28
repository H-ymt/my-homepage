import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import NextLink from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { IoMdHome } from 'react-icons/io'
import { PiCodeDuotone } from 'react-icons/pi'
import { SiZenn } from 'react-icons/si'

type Props = {
  href: string
  children?: React.ReactNode
}

const Link = ({ href, children, ...props }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link {...props}>{children}</NavigationMenu.Link>
    </NextLink>
  )
}

export default function HamburgerMenu() {
  return (
    <div className='h-[32px] md:hidden'>
      <NavigationMenu.Root orientation='vertical'>
        <NavigationMenu.List>
          <NavigationMenu.Item className='relative'>
            <NavigationMenu.Trigger className='outline-none' aria-label='メニューを開く'>
              <FiMenu size='32px' />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content className='absolute left-[-9rem] top-10 flex w-[11rem] flex-col gap-2 rounded-md bg-background px-4 py-3 shadow-outerXs ring-1 ring-black ring-opacity-5 focus:outline-none [&>a]:flex [&>a]:items-center [&>a]:gap-2'>
              <Link href='/'>
                <IoMdHome size='1.2em' />
                Home
              </Link>
              <Link href='/works'>
                <PiCodeDuotone size='1.2em' />
                Works
              </Link>
              <Link href='/blog'>
                <SiZenn size='1.2em' />
                Blog
              </Link>
              <Link href='https://github.com/H-ymt/my-portfolio/'>
                <AiFillGithub size='1.2em' />
                Source
              </Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  )
}
