import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C1121F',
          redMuted: '#8A0E16',
        },
        dark: {
          950: '#0B0D10',
          900: '#111318',
          850: '#161A20',
          800: '#1D222A',
          700: '#2A2F38',
        },
        text: {
          primary: '#E5E7EB',
          secondary: '#9CA3AF',
          disabled: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 20px rgba(0,0,0,0.45)',
      },
    },
  },
  plugins: [],
}

export default config
