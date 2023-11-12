'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillGithub } from 'react-icons/ai';
import { SiZenn } from 'react-icons/si';
import { IoMdHome } from 'react-icons/io';
import { PiCodeDuotone } from 'react-icons/pi';
import DropDownMenu from '../HamburgerMenu';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      role="banner"
      className="sticky z-20 top-0 h-[64px] shadow-blue-20 bg-opacity-20 backdrop-blur-3xl backdrop-filter border-b border-[#0f172a1a] dark:border-[#cbd5e11a] dark:bg-[#4e4d4d30]"
    >
      <div className="flex justify-between items-center max-w-[1024px] mx-auto h-full px-4 lg:px-0">
        <Link
          href="/"
          className="flex items-center text-xl font-bold stroke-[5]"
          aria-label="トップへ戻る"
        >
          <Image src="/logo.webp" width={32} height={32} alt="Logo" />
        </Link>

        <nav role="navigation" className="hidden md:inline-block">
          <ul className="flex items-center gap-3.5 text-base [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 [&>li]:tracking-wider">
            <li
              className={`rounded-md relative after:absolute after:w-12 after:h-[2px] after:bottom-[-16px] after:left-1/2 after:-translate-x-1/2 hover:after:bg-accent/50 after:scale-y-0 hover:after:scale-y-100 after:transition-transform hover:after:transition-transform after:duration-300 hover:after:duration-300 ${
                pathname === '/'
                  ? 'after:bg-accent after:h-[2px] after:scale-y-100'
                  : ''
              }`}
            >
              <Link href="/" className="py-[5px] px-4">
                <IoMdHome color="" size="1.1em" />
                Home
                <span className="sr-only">ホームへ戻る</span>
              </Link>
            </li>
            <li
              className={`rounded-md relative after:absolute after:w-12 after:h-[2px] after:bottom-[-16px] after:left-1/2 after:-translate-x-1/2 hover:after:bg-accent/50 after:scale-y-0 hover:after:scale-y-100 after:transition-transform hover:after:transition-transform after:duration-300 hover:after:duration-300 ${
                pathname === '/works'
                  ? 'after:bg-accent after:h-[2px] after:scale-y-100'
                  : ''
              }`}
            >
              <Link href="/works" className="py-[5px] px-4">
                <PiCodeDuotone color="" size="1.2em" />
                Works
                <span className="sr-only">ワークスページへ移動する</span>
              </Link>
            </li>
            <li
              className={`rounded-md relative after:absolute after:w-12 after:h-[2px] after:bottom-[-16px] after:left-1/2 after:-translate-x-1/2 hover:after:bg-accent/50 after:scale-y-0 hover:after:scale-y-100 after:transition-transform hover:after:transition-transform after:duration-300 hover:after:duration-300 ${
                pathname === '/blog'
                  ? 'after:bg-accent after:h-[2px] after:scale-y-100'
                  : ''
              }`}
            >
              <Link href="/blog" className="py-[5px] px-4">
                <SiZenn color="" size="0.9em" />
                Blog
                <span className="sr-only">ブログページへ移動する</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center gap-2">
          <Link
            href="https://github.com/H-ymt/my-portfolio"
            target="blank"
            className="hidden md:inline-block hover:-translate-y-0.5 duration-300 ease"
          >
            <AiFillGithub
              color=""
              size="1.6em"
              aria-label="GitHub"
              aria-hidden="true"
            />
          </Link>
          <ThemeChanger />
          <DropDownMenu />
        </div>
      </div>
    </header>
  );
}
