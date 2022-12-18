/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          100: '#FEFEFE',
          200: '#EDEDED',
          300: '#BBBBBB',
          400: '#A1A1AA',
          500: '#2E2E2E',
          600: '#282828',
          700: '#232323',
          800: '#1C1C1C',
          900: '#040404',
          1000: '#00FFB7',
          1100: '#02EEAA',
          1200: '#00cc91',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
