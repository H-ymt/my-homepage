'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineDarkMode } from 'react-icons/md'

export default function ThemeChanger() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[38px] w-[38px] inline-flex items-center justify-center" />
  }

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  // マウントされた後にテーマの状態を取得してアイコンを表示
  const Icon = mounted
    ? resolvedTheme === 'light'
      ? MdOutlineDarkMode
      : MdOutlineLightMode
    : null

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      className="inline-flex items-center justify-center md:hover:bg-muted rounded-md p-1.5"
    >
      {Icon && <Icon size="1.4em" aria-hidden="true" />}
    </button>
  )
}
