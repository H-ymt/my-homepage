/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
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
        background: 'hsla(var(--color-background))',
        primary: 'rgb(var(--color-text-primary))',
        accent: 'hsla(var(--color-accent))',
        muted: 'rgba(var(--color-muted))',
        buttonHover: 'rgb(var(--color-button-hover))',
        twitter: '#1DA1F2',
      },
      boxShadow: {
        outerXs: 'var(--box-shadow-outer-xs)',
        outerSm: 'var(--box-shadow-outer-sm)',
      },
    },
  },
  plugins: [require('tailwind-clip-path')],
};
