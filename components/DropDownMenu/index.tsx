import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import NextLink from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { SiZenn } from 'react-icons/si';
import { IoMdHome } from 'react-icons/io';
import { FiMenu } from 'react-icons/fi';
import { PiCodeDuotone } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

type Props = {
  href: string;
  children?: React.ReactNode;
};

const Link = ({ href, children, ...props }: Props) => {
  const router = useRouter();

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link {...props}>{children}</NavigationMenu.Link>
    </NextLink>
  );
};

export default function DropDownMenu() {
  return (
    <div className="md:hidden h-[32px]">
      <NavigationMenu.Root orientation="vertical">
        <NavigationMenu.List>
          <NavigationMenu.Item className="relative">
            <NavigationMenu.Trigger className="outline-none">
              <FiMenu size="32px" />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content className="flex flex-col gap-2 absolute top-10 left-[-9rem] w-[11rem] py-3 px-4 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none [&>a]:flex [&>a]:items-center [&>a]:gap-2 [&>a]:dark:text-primaryDark bg-[#F7F7F7]">
              <Link href="/">
                <IoMdHome size="1.2em" />
                Home
              </Link>
              <Link href="/works">
                <PiCodeDuotone size="1.2em" />
                Works
              </Link>
              <Link href="/blog">
                <SiZenn size="1.2em" />
                Blog
              </Link>
              <Link href="https://github.com/H-ymt/my-portfolio/">
                <AiFillGithub size="1.2em" />
                Source
              </Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
