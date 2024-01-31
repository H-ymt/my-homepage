"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiFillGithub } from "react-icons/ai"
import { IoMdHome } from "react-icons/io"
import { PiCodeDuotone } from "react-icons/pi"
import { SiZenn } from "react-icons/si"
import DropDownMenu from "../HamburgerMenu"
import ThemeChanger from "../ThemeChanger/ThemeChanger"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="shadow-blue-20 backdrop-blur-sm sticky top-0 z-20 h-[64px] border-b border-[#0f172a1a] bg-background/90 bg-opacity-20 backdrop-filter dark:border-[#cbd5e11a] dark:bg-[#4f4e4e10]">
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-4">
        <Link
          href="/"
          className="ease flex w-8 items-center stroke-[5] text-xl font-bold duration-300 clip-path-perfectCircle hover:-translate-y-0.5"
          aria-label="トップへ戻る"
        >
          <Image src="/logo.png" width={64} height={64} alt="Logo" />
        </Link>

        <nav className="hidden md:inline-block">
          <ul className="flex items-center gap-3.5 text-base [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 [&>li]:tracking-wider">
            <li
              className={`relative rounded-md after:absolute after:bottom-[-16px] after:left-1/2 after:h-[2px] after:w-12 after:-translate-x-1/2 after:scale-y-0 after:transition-transform after:duration-300 hover:after:scale-y-100 hover:after:bg-accent/50 hover:after:transition-transform hover:after:duration-300 ${
                pathname === "/" ? "after:h-[2px] after:scale-y-100 after:bg-accent" : ""
              }`}
            >
              <Link href="/" className="px-4 py-[5px]">
                <IoMdHome color="" size="1.1em" />
                Home
                <span className="sr-only">ホームへ戻る</span>
              </Link>
            </li>
            <li
              className={`relative rounded-md after:absolute after:bottom-[-16px] after:left-1/2 after:h-[2px] after:w-12 after:-translate-x-1/2 after:scale-y-0 after:transition-transform after:duration-300 hover:after:scale-y-100 hover:after:bg-accent/50 hover:after:transition-transform hover:after:duration-300 ${
                pathname === "/works"
                  ? "after:h-[2px] after:scale-y-100 after:bg-accent"
                  : ""
              }`}
            >
              <Link href="/works" className="px-4 py-[5px]">
                <PiCodeDuotone color="" size="1.2em" />
                Works
                <span className="sr-only">ワークスページへ移動する</span>
              </Link>
            </li>
            <li
              className={`relative rounded-md after:absolute after:bottom-[-16px] after:left-1/2 after:h-[2px] after:w-12 after:-translate-x-1/2 after:scale-y-0 after:transition-transform after:duration-300 hover:after:scale-y-100 hover:after:bg-accent/50 hover:after:transition-transform hover:after:duration-300 ${
                pathname === "/blog"
                  ? "after:h-[2px] after:scale-y-100 after:bg-accent"
                  : ""
              }`}
            >
              <Link href="/blog" className="px-4 py-[5px]">
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
            className="ease hidden duration-300 hover:-translate-y-0.5 md:inline-block"
          >
            <AiFillGithub color="" size="1.6em" aria-label="GitHub" aria-hidden="true" />
          </Link>
          <ThemeChanger />
          <DropDownMenu />
        </div>
      </div>
    </header>
  )
}
