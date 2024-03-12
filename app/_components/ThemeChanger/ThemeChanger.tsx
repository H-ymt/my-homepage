"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MdOutlineLightMode } from "react-icons/md"
import { MdOutlineDarkMode } from "react-icons/md"

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-[1.6em] w-[1.6em] inline-flex items-center justify-center">
        <div className="h-[18px] w-[18px] animate-spin rounded-full border-[1.6px] border-y-muted-foreground border-x-muted-foreground/80" />
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // マウントされた後にテーマの状態を取得してアイコンを表示
  const Icon = mounted
    ? theme === "light"
      ? MdOutlineDarkMode
      : MdOutlineLightMode
    : null

  return (
    <div className="inline-flex items-center justify-center md:hover:bg-muted rounded-md p-1.5">
      <button type="button" onClick={toggleTheme} aria-label="テーマを変更する">
        {Icon && <Icon size="1.6em" aria-hidden="true" />}
      </button>
    </div>
  )
}
