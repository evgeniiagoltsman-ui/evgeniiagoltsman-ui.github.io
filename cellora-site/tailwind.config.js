/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './assets/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0EA5A4',
          dark: '#0B807F',
          light: '#14b8a6'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
