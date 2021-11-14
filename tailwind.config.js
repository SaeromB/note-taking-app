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
    spacing: {
      sm: '9px',
      md: '16px',
    },
  },
  variants: {
    // extend: { backgroundColor: ['active'], padding: ['hover', 'focus'] },
    extend: { padding: ['hover', 'focus'] },
  },
  plugins: [],
}
