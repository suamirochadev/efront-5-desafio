/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      fill: ({ theme }) => ({
        gray: theme('colors.gray')
      }),
      colors: {
       'verde-esc': '#1A4855',
        'verde-clr': '#628E75',
        'branco-txt': '#F9F9F9'
      },
      screens: {
        '3xl': '1440px', // Adds a new `3xl:` screen variant
      },
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      letterSpacing: {
        'letra-esp': '0.54px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}