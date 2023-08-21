/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#27272A',
      muted: '#52525B',
      extra: '#a1a1aa',
      blue: {
        50: '#f4f7fa',
        100: '#e5eaf4',
        200: '#d1dbec',
        300: '#b1c4df',
        400: '#8ba5cf',
        500: '#7089c1',
        600: '#5d72b3',
        700: '#5565aa',
        800: '#475186',
        900: '#3c456c',
        950: '#282c43',
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
