/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      boxShadow: {
        '3xl': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      letterSpacing:{
        tightest: '-0.625px'
      },
      colors: {
        'darkBlue': '#3A4562',
        'lightGrey': '#878D9D',
        'border': '#55699E',
        'bgColor': '#a1b1db51',
        'bgYellow': '#ffcf0026',
        'yelow': '#988B49',
        'yBorder': '#FFCF00',
        'btn': '#3845641a',
        'mapColor':'#202336'
      },
      width: {
        '85': '85px',
        '1400': '1400px',
        '1070': '1070px',
        '720': '720px',
        '480': '480px'
      },
      height: {
        '85': '85px',
      }
    },
  },
  plugins: [],
}
