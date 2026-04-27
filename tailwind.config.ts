import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg0: '#080A0E',
        bg1: '#0D1017',
        bg2: '#12161F',
        line: '#1E2535',
        line2: '#2E3D58',
        accent: {
          green: '#00FFA3',
          green2: '#00CC82',
          amber: '#F5A623',
          blue: '#4D9EFF',
          red: '#FF4D6A',
        },
        txt: '#E2EAF8',
        sub: '#A8B8D4',
        muted: '#6A7A9A',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      animation: {
        'pulse-dot': 'pulse 2.5s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'border-glow': 'border-glow 4s ease-in-out infinite alternate',
        'nav-drop': 'nav-drop 0.5s ease 0.2s forwards',
        'hero-slide': 'hero-slide-in 0.7s ease 0.3s forwards',
        'hero-child': 'hero-child-in 0.5s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'border-glow': {
          '0%': { opacity: '0.7' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(0,255,163,.35))' },
        },
        'nav-drop': {
          'to': { transform: 'translateY(0)' },
        },
        'hero-slide-in': {
          'to': { opacity: '1', transform: 'none' },
        },
        'hero-child-in': {
          'to': { opacity: '1', transform: 'none' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,255,163,.018) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,163,.018) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '44px 44px',
      },
    },
  },
  plugins: [],
};

export default config;
