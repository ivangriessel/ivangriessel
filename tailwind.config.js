/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require("tailwindcss/colors")

const translucent = {
  black1: 'rgba(0, 0, 0, 0.02)',
  black2: 'rgba(0, 0, 0, 0.04)',
  black3: 'rgba(0, 0, 0, 0.06)',
  black4: 'rgba(0, 0, 0, 0.12)',
  white1: 'rgba(255, 255, 255, 0.06)',
  white2: 'rgba(255, 255, 255, 0.08)',
  white3: 'rgba(255, 255, 255, 0.1)',
  white4: 'rgba(255, 255, 255, 0.16)'
};

module.exports = {
  content: ["./**/*.{html,js}"],
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
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        accent: {
            pale: {
              DEFAULT: '#EEEBFE',
              dark: '#3E3956'
            },
            tint: {
              DEFAULT: '#A99BFB',
              dark: '#9D8BFF'
            },
            base: {
              DEFAULT: '#7058F9',
              dark: '#8A76F9'
            },
            shade: {
              DEFAULT: '#4830D4',
              dark: '#5741D4'
            }
        },
        fg: {
            high: {
              DEFAULT: '#000',
              dark: colors.stone[100]
            },
            highAlt: {
              DEFAULT: colors.white,
              dark: colors.black
            },
            low: {
              DEFAULT: 'rgba(0, 0, 0, 0.76)',
              dark: colors.stone[300]
            },
        },
        surface: {
            DEFAULT: translucent.black2,
            dark: translucent.white2
        },
        background: {
            DEFAULT: 'F4F2F0',
            dark: '#212121'
        },
        warn: {
            base: {
              DEFAULT: colors.amber[500],
              dark: colors.amber[400]
            },
            fg: {
              DEFAULT: colors.amber[700],
              dark: colors.amber[700]
            },
            bg: {
              DEFAULT: colors.amber[50],
              dark: 'rgba(245, 158, 11, 0.2)'
            }
          },
        info: {
            base: {
              DEFAULT: colors.blue[500],
              dark: colors.blue[400]
            },
            fg: {
              DEFAULT: colors.blue[700],
              dark: colors.blue[700]
            },
            bg: {
              DEFAULT: colors.blue[50],
              dark: 'rgba(59, 130, 246, 0.2)'
            }
        },
        success: {
            base: {
              DEFAULT: colors.green[500],
              dark: colors.green[500]
            },
            fg: {
              DEFAULT: colors.green[700],
              dark: colors.green[700]
            },
            bg: {
              DEFAULT: colors.green[50],
              dark: 'rgba(34, 197, 94, 0.2)'
            }
        },
        crit: {
            base: {
              DEFAULT: colors.red[500],
              dark: colors.red[500]
            },
            fg: {
              DEFAULT: colors.red[700],
              dark: colors.red[700]
            },
            bg: {
              DEFAULT: colors.red[50],
              dark: 'rgba(239, 68, 68, 0.2)'
            }
        },
        translucent: {
            grey1: {
              DEFAULT: translucent.black1,
              dark: translucent.white1
            },
            grey2: {
              DEFAULT: translucent.black2,
              dark: translucent.white2
            },
            grey3: {
              DEFAULT: translucent.black3,
              dark: translucent.white3
            },
            grey4: {
              DEFAULT: translucent.black4,
              dark: translucent.white4
            }
        }
      }
    },
  },
  plugins: [],
}

