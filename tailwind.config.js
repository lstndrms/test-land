/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'stretch': '100% auto',
      'stretch2': 'auto 100%'
    },
    extend: {
      colors: {
        'dark-black': '#2b2b2b',
        'warm-red': '#FE5F5F',
        'royal-blue': '#3865A7'
      },
      fontFamily: {
        circe: ['Circe', 'sans-serif']
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

