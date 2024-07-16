/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Roboto"',
          '"Segoe UI"',
          'sans-serif',
          ...fontFamily.sans,
        ],
      },
      screens : {
        'sm' : '450px',
        'md': '650px',
        'lg': '1024px',
      }
    },
  },
  plugins: [],
}

