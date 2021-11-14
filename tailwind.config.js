const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {},
    },
    // backgroundColor: (theme) => ({
    //   ...theme('colors'),
    //   secondary: '#4B5563',
    // }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      white: '#ffffff',
    },
  },
  variants: {},
  plugins: [],
}
