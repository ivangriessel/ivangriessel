const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1.5'],
      sm: ['0.875rem', '1.5'],
      base: ['1rem', '1.5'],
      lg: ['1.125rem', '1.5'],
      xl: ['1.25rem', '1.5'],
      '2xl': ['1.5rem', '1.25'],
      '3xl': ['1.75rem', '1.25'],
      '4xl': ['2rem', '1.25'],
      '5xl': ['2.25rem', '1.25'],
      '6xl': ['2.625rem', '1.25'],
      '7xl': ['3rem', '1.25'],
      '8xl': ['3.375rem', '1.2'],
      '9xl': ['3.75rem', '1.2']
    },
    extend: {
      fontFamily: {
        sans: ['Avenir Next', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        fg: {
          high: {
            DEFAULT: colors.black,
            dark: colors.stone[100]
          },
          highAlt: {
            DEFAULT: colors.white,
            dark: colors.black
          },
          low: {
            DEFAULT: colors.stone[600],
            dark: colors.stone[300]
          },
        },
        background: {
        DEFAULT: '#F4F2F0',
        dark: '#212121'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
