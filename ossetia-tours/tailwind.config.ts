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
        night: {
          DEFAULT: '#16222E',
          light: '#1F2F3D',
          dark: '#0E1822',
        },
        ice: {
          DEFAULT: '#4C8C9B',
          light: '#6FA9B6',
          dark: '#356C79',
        },
        amber: {
          DEFAULT: '#E0863C',
          light: '#EDA059',
          dark: '#BE6B27',
        },
        sand: {
          50: '#F7F4EE',
          100: '#EFEAE0',
          200: '#E2DACB',
          300: '#CDC1A9',
          400: '#AE9F80',
        },
        fog: '#8DA0AA',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.05em' }],
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
