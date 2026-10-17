/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        'bg-navy': '#060B12',
        surface: '#111110',
        'surface-elevated': '#161615',
        'surface-card': '#141413',
        'surface-cyan': 'rgba(6, 26, 38, 0.6)',
        'champagne-gold': {
          DEFAULT: '#C6A15B',
          light: '#E2C27F',
          dark: '#A6843D',
          muted: 'rgba(198, 161, 91, 0.15)',
        },
        'neon-cyan': {
          DEFAULT: '#00F0FF',
          glow: 'rgba(0, 240, 255, 0.35)',
          muted: 'rgba(0, 240, 255, 0.15)',
        },
        'electric-blue': {
          DEFAULT: '#0088FF',
          dark: '#0055B3',
        },
        'solana-purple': '#9945FF',
        'polygon-purple': '#8247E5',
        'chrome': '#E2E8F0',
        'primary-text': '#F5F2EB',
        'secondary-text': '#AAA69D',
        'gold-border': 'rgba(198, 161, 91, 0.24)',
        'gold-border-bright': 'rgba(198, 161, 91, 0.48)',
        'cyan-border': 'rgba(0, 240, 255, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Cinzel', 'Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-subtle': '0 4px 20px -2px rgba(198, 161, 91, 0.12)',
        'gold-glow': '0 0 30px rgba(198, 161, 91, 0.25)',
        'gold-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(198, 161, 91, 0.24)',
        'cyan-glow': '0 0 30px rgba(0, 240, 255, 0.2)',
        'cyan-card': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(0, 240, 255, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E2C27F 0%, #C6A15B 50%, #A6843D 100%)',
        'gold-subtle-gradient': 'linear-gradient(180deg, rgba(198, 161, 91, 0.08) 0%, rgba(17, 17, 16, 0.8) 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #00F0FF 0%, #0088FF 100%)',
        'hero-radial': 'radial-gradient(circle at 50% 30%, rgba(198, 161, 91, 0.12) 0%, rgba(0, 240, 255, 0.05) 40%, rgba(8, 8, 8, 0) 70%)',
      }
    },
  },
  plugins: [],
}
