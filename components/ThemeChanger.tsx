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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // マウントされた後にテーマの状態を取得してアイコンを表示
  const Icon = mounted
    ? theme === 'light'
      ? MdOutlineDarkMode
      : MdOutlineLightMode
    : null;

  return (
    <div className="inline-block h-[1.6em]">
      <button type="button" onClick={toggleTheme}>
        {Icon && <Icon size="1.6em" />}
      </button>
    </div>
  );
}
