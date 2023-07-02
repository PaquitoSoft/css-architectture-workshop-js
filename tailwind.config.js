const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.jsx',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.emerald,
        tertiary: colors.slate,
        critical: colors.rose,

        info: colors.sky,
        success: colors.emerald,
        warning: colors.amber,
        error: colors.rose
      }
    },
  },
  plugins: [],
}

