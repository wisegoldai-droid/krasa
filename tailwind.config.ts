import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf4ff',
          100: '#f9e8ff',
          200: '#f3d0fe',
          300: '#e9aafb',
          400: '#d975f6',
          500: '#c44de8',
          600: '#a62ecb',
          700: '#8a22a8',
          800: '#721d8a',
          900: '#5e1b6e',
          950: '#3e0849',
        },
        gold: {
          400: '#f5c842',
          500: '#e8b020',
          600: '#c8900f',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
