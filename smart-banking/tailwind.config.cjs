/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '578px' },
      'md': { 'max': '768px' },
      'lg': { 'max': '992px' },
    },


    extend: {
      colors: {
        primaryBg: '#F2F9FE',
        secondaryBg: '#CFEDFE',
        thirdBg: '#41B3F4',
        primaryText: '#5F5F64',
        secondaryText: '#535354'
      },

      boxShadow: {
        'primary': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
