/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        hip: {
          navy: '#151B3D',
          ink: '#182033',
          teal: '#18A7A7',
          mint: '#EAF8F5',
          cream: '#FFF8ED',
          coral: '#F26C5B',
          gold: '#F4B43F',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(21, 27, 61, 0.10)',
      },
    },
  },
  plugins: [],
}
