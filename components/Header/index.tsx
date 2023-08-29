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
import ThemeChanger from '../ThemeChanger';

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      role="banner"
      className="sticky z-20 top-0 h-[72px] shadow-blue-20 bg-opacity-20 backdrop-blur-md backdrop-filter"
      initial={{ opacity: 0, translateY: -15 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center container mx-auto h-full px-4 lg:px-0">
        <Link href="/" className="flex items-center text-xl font-bold">
          <Image
            src="/logo.webp"
            width={48}
            height={20}
            alt="トップページに戻る"
            className="rotate-[5deg]"
          />
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
              <Link href="/products">
                <PiCodeDuotone color="" size="1em" />
                Products
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
            <AiFillGithub color="" size="1.4em" />
          </Link>
          <ThemeChanger />
          <DropDownMenu />
        </div>
      </div>
    </motion.header>
  );
}
