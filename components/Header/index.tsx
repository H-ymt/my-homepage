'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { SiZenn } from 'react-icons/si';
import { IoMdHome } from 'react-icons/io';
import { PiCodeDuotone } from 'react-icons/pi';
import DropDownMenu from '../DropDownMenu';
import ThemeChanger from '../ThemeChanger/ThemeChanger';

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      role="banner"
      className="sticky z-20 top-0 h-[72px] shadow-blue-20 bg-opacity-20 backdrop-blur-xl backdrop-filter border-b border-[#0f172a1a] dark:border-[#cbd5e11a]"
    >
      <div className="flex justify-between items-center container mx-auto h-full px-4 lg:px-0">
        <Link
          href="/"
          className="flex items-center text-xl font-bold stroke-[5]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            className="stroke-primaryDark dark:stroke-primaryLight hover:rotate-[8deg] duration-300"
          >
            <path d="M50,0 L50,100 L0,50 L100,50 Z" fill="none" />
          </svg>
        </Link>

        <nav role="navigation" className="hidden md:inline-block">
          <ul className="flex items-center gap-3.5 text-sm font-medium [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-1">
            <li
              className={`py-[4px] px-[8px] rounded-md  ${
                pathname === '/'
                  ? 'bg-orange-300 dark:bg-blue-600/60'
                  : 'hover:bg-orange-200 dark:hover:bg-blue-300/20  duration-400'
              }`}
            >
              <Link href="/">
                <IoMdHome color="" size="1em" />
                Home
              </Link>
            </li>
            <li
              className={`py-[2.5px] px-[8px] rounded-md ${
                pathname === '/products'
                  ? 'bg-orange-300 dark:bg-blue-600/60'
                  : 'hover:bg-orange-200 dark:hover:bg-blue-300/20  duration-400'
              }`}
            >
              <Link href="/works">
                <PiCodeDuotone color="" size="1em" />
                Works
              </Link>
            </li>
            <li
              className={`py-[2.5px] px-[8px] rounded-md ${
                pathname === '/blog'
                  ? 'bg-orange-300 dark:bg-blue-600/60'
                  : 'hover:bg-orange-200 dark:hover:bg-blue-300/20 duration-400'
              }`}
            >
              <Link href="/blog">
                <SiZenn color="" size="1em" />
                Blog
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
            <AiFillGithub color="" size="1.6em" />
          </Link>
          <ThemeChanger />
          <DropDownMenu />
        </div>
      </div>
    </header>
  );
}
