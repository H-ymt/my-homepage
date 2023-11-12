'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // マウントされた後にテーマの状態を取得してアイコンを表示
  const Icon = mounted
    ? theme === 'light'
      ? MdOutlineDarkMode
      : MdOutlineLightMode
    : null;

  return (
    <div className="inline-block h-[1.6em]">
      <button
        className="hover:-translate-y-0.5 duration-300 ease"
        type="button"
        onClick={toggleTheme}
        aria-label="テーマを変更する"
        aria-hidden="true"
      >
        {Icon && <Icon size="1.6em" />}
      </button>
    </div>
  );
}
