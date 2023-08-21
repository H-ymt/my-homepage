'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/Ai';
import { SiZenn } from 'react-icons/Si';
import { IoMdHome } from 'react-icons/Io';
import { PiCodeDuotone } from 'react-icons/Pi';
import DropDownMenu from '../DropDownMenu';

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      role="banner"
      className="h-[72px] border-b border-b-[#e4e4e7] shadow-blue-50 bg-opacity-50 backdrop-blur-md backdrop-filter"
      initial={{ opacity: 0, translateY: -15 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.4 }}
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
          <ul className="flex items-center gap-3.5 font-semibold [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2">
            <li
              className={`py-1 px-2.5 ${
                pathname === '/' ? 'bg-blue-200 rounded-md' : ''
              }`}
            >
              <Link href="/">
                <IoMdHome color="#3c456c" size="1.4em" />
                Home
              </Link>
            </li>
            <li
              className={`py-1 px-2.5 ${
                pathname === '/products' ? 'bg-blue-200 rounded-md' : ''
              }`}
            >
              <Link href="/products">
                <PiCodeDuotone color="#3c456c" size="1.4em" />
                Products
              </Link>
            </li>
            <li
              className={`py-1 px-2.5 ${
                pathname === '/blog' ? 'bg-blue-200 rounded-md' : ''
              }`}
            >
              <Link href="/blog">
                <SiZenn color="#3c456c" size="1em" />
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/H-ymt/my-portfolio"
                target="blank"
                className="px-2.5"
              >
                <AiFillGithub color="#3c456c" size="1.4em" />
                Source
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
