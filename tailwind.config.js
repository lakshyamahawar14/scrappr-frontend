/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['Inter']
      },
      screens: {
      'md': '640px',
      'lg': '950px',
    },
    },
  },
  plugins: [],
}

