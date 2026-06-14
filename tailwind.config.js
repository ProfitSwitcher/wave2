/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FAF3E8',
          brown: '#2C1810',
          green: '#1B4332',
          'green-light': '#2D6A4F',
          gold: '#D4A017',
          rust: '#C1440E',
          sky: '#87CEEB',
          'rust-light': '#E07B37',
          'cream-dark': '#EDE0CC',
        }
      },
      fontFamily: {
        display: ['"Clash Display"', '"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Instrument Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-4xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '900' }],
        'display-3xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '900' }],
        'display-2xl': ['2.75rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '800' }],
        'mega': ['7rem', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '900' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'hero': '0 25px 60px -12px rgba(44, 24, 16, 0.25)',
        'card': '0 4px 20px -2px rgba(44, 24, 16, 0.08)',
        'elevated': '0 20px 40px -8px rgba(44, 24, 16, 0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}
