/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      clipPath: {
        perfectCircle: 'circle(50% at 50% 50%)',
      },
      colors: {
        primaryDark: '#27272a',
        primaryLight: '#f4f4f4',
        mutedGray: '#f2f4ffcc',
        mutedBlack: '#414145',
        orange: {
          50: '#fff4e5',
          100: '#ffeed5',
          200: '#fed9aa',
          300: '#fdbd74',
          400: '#fb963c',
          500: '#f97816',
          600: '#ea5d0c',
          700: '#c2450c',
          800: '#9a3712',
          900: '#7c2f12',
          950: '#431507',
        },
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
