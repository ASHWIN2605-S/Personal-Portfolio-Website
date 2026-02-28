/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        ember: {
          50:  '#fff8f1',
          100: '#ffecd6',
          200: '#ffd4a8',
          300: '#ffb570',
          400: '#ff8c38',
          500: '#f96b10',
          600: '#ea5005',
          700: '#c23a06',
          800: '#9a2f0c',
          900: '#7c280d',
        },
        ink: {
          50:  '#f5f5f0',
          100: '#e8e8e0',
          200: '#d0d0c4',
          300: '#b0b09e',
          400: '#888876',
          500: '#6b6b58',
          600: '#545444',
          700: '#3d3d30',
          800: '#28281e',
          900: '#16160f',
          950: '#0c0c07',
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(249,107,16,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,107,16,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
