/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#08090C',
        charcoal: '#101114',
        carbon: '#1A1B21',
        crimson: {
          DEFAULT: '#DC143C',
          deep: '#8B001E',
          glow: '#FF2E56'
        },
        forest: {
          DEFAULT: '#123D2B',
          emerald: '#1FA66A',
          glow: '#2EE594'
        },
        electric: {
          DEFAULT: '#A879FF',
          violet: '#7549D6',
          glow: '#C49FFF'
        },
        titanium: '#C7CBD1',
        muted: '#85858F'
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
        display: ['Syncopate', 'Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'carbon-pattern': 'radial-gradient(#1A1B21 1px, transparent 1px)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
