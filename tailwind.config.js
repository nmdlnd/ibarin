const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './pages/*.js',
    './pages/**/*.js',
    './components/*.js',
    './components/**/*.js',
  ],
  theme: {
    boxShadow: {
      DEFAULT: '#11130f 0px 14px 20px;',
    },
    maxWidth: {
      'screen-2xl': '1440px',
      'screen-xl': '1280px',
      'screen-lg': '1024px',
      'screen-md': '768px',
      'screen-sm': '640px',
    },
    extend: {
      colors: {
        'grey-chez': {
          300: '#CBCFCD',
          400: '#9BA19A',
          500: '#8D8B8C',
        },
        brown: {
          500: '#7E7464',
        },
        dark: {
          500: '#23261E',
          450: 'hsla(83,12%,13%,0.4)',
        },
      },
      gridTemplateRows: {
        // Simple 8 row grid

        7: 'repeat(7, minmax(0, 1fr))',
      },
    },
  },
  variants: {},
  plugins: [],
};
