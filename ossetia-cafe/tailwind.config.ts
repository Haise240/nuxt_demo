import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          DEFAULT: '#B0492B',
          light: '#C75E3E',
          dark: '#8A3720',
        },
        wine: {
          DEFAULT: '#4A1D1A',
          light: '#5E2622',
          dark: '#321311',
        },
        cream: {
          50: '#FBF7EF',
          100: '#F6EFE3',
          200: '#EDE1CC',
          300: '#DFCFB1',
          400: '#CBB489',
        },
        saffron: {
          DEFAULT: '#CD9A4E',
          light: '#DCB270',
          dark: '#A87B36',
        },
        cocoa: '#2A1B16',
        olive: '#7A7148',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      backgroundImage: {
        'grain':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
