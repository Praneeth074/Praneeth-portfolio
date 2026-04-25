import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#0052CC',
        'accent-light': '#1a6fe8',
        background: '#FFFFFF',
        foreground: '#000000',
        muted: '#6b7280',
        'muted-foreground': '#9ca3af',
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'line-draw': 'lineDraw 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(60px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        lineDraw: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'noise': "url('/images/noise.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
