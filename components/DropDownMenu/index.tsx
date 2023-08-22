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
    <div className="md:hidden">
      <NavigationMenu.Root orientation="vertical">
        <NavigationMenu.List>
          <NavigationMenu.Item className="relative">
            <NavigationMenu.Trigger className="outline-none">
              <FiMenu size="2em" />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content className="flex flex-col gap-2 absolute top-10 left-[-112px] w-[9rem] py-2 px-4 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none [&>a]:flex [&>a]:items-center [&>a]:gap-2 bg-[#F7F7F7]">
              <Link href="/">
                <IoMdHome />
                Home
              </Link>
              <Link href="/products">
                <PiCodeDuotone />
                Products
              </Link>
              <Link href="/blog">
                <SiZenn />
                Blog
              </Link>
              <Link href="https://github.com/H-ymt/my-portfolio/">
                <AiFillGithub />
                Source
              </Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
