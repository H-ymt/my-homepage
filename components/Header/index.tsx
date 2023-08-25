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

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      role="banner"
      className="sticky z-50 top-0 h-[72px] shadow-blue-50 bg-opacity-50 backdrop-blur-md backdrop-filter"
      initial={{ opacity: 0, translateY: -15 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center container mx-auto h-full px-4 lg:px-0">
        <Link href="/" className="flex items-center text-xl font-bold">
          <Image
            src="/logo.webp"
            width={40}
            height={43}
            alt="トップページに戻る"
            className="rotate-[10deg]"
          />
          <span className="italic">Portfolio</span>
        </Link>

        <DropDownMenu />

        <nav role="navigation" className="hidden md:inline-block">
          <ul className="flex items-center gap-3.5 text-sm font-medium [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2">
            <li
              className={`py-[2.5px] px-[8px] rounded-md  ${
                pathname === '/' ? 'bg-blue-300 ' : 'hover:bg-blue-100'
              }`}
            >
              <Link href="/">
                <IoMdHome color="#3c456c" size="1em" />
                Home
              </Link>
            </li>
            <li
              className={`py-[2.5px] px-[8px] rounded-md ${
                pathname === '/products' ? 'bg-blue-300 ' : 'hover:bg-blue-100'
              }`}
            >
              <Link href="/products">
                <PiCodeDuotone color="#3c456c" size="1.1em" />
                Products
              </Link>
            </li>
            <li
              className={`py-[2.5px] px-[8px] rounded-md ${
                pathname === '/blog' ? 'bg-blue-300 ' : 'hover:bg-blue-100'
              }`}
            >
              <Link href="/blog">
                <SiZenn color="#3c456c" size="0.9em" />
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          href="https://github.com/H-ymt/my-portfolio"
          target="blank"
          className="hidden md:inline-block px-2.5"
        >
          <AiFillGithub color="#3c456c" size="1.8em" />
        </Link>
      </div>
    </motion.header>
  );
}
