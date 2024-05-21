'use client'

import { slideBlock } from '@/lib/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'
import Menu from '../Menu'
import MenuMobile from '../MenuMobile'
import ThemeChanger from '../ThemeChanger'

export default function Header() {
  return (
    <motion.header
      variants={slideBlock(-100, 0)}
      initial="hidden"
      animate="visible"
      className="sticky top-0 bg-background/70 z-20 h-[var(--header-height)] shadow-[0_0_0_1px] shadow-border backdrop-blur backdrop-filter"
    >
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-4">
        <Link
          href="/"
          className="ease flex w-8 items-center stroke-[5] text-xl font-bold duration-300 hover:-translate-y-0.5"
        >
          <Image
            src="/logo.png"
            width={64}
            height={64}
            alt="Logo"
            className="rounded-full"
            loading="eager"
          />
        </Link>

        <div className="flex items-center justify-center">
          <Menu />
          <Link
            href="https://github.com/H-ymt/my-portfolio"
            target="blank"
            className="hidden md:inline-flex items-center justify-center md:hover:bg-muted rounded-md p-1.5"
          >
            <AiFillGithub size="1.4em" aria-label="Source Code" />
          </Link>
          <ThemeChanger />
          <MenuMobile />
        </div>
      </div>
    </motion.header>
  )
}
