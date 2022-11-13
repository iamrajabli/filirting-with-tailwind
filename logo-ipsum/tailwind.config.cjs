/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'lg': { 'max': '992px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '576px' },
    },

    container: {
      center: true,
      padding: '20px'
    },

    extend: {
      colors: {
        lightblack: '#4d4244',
        lightred: '#ff0d38',
        darkred: '#d70026',
        lightgray: '#747474',
        mediumgray: '#454545',
        darkgray: '#272727'
      },

      boxShadow: {
        customRedShadow: '0px 0px 30px rgba(255, 13, 56, 0.21);'
      }
    },
    plugins: [],
  }
}