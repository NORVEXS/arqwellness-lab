import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2D5C88',
          'blue-deep': '#1E4365',
          'blue-soft': '#84A7C8',
          purple: '#3B3082',
          'purple-deep': '#2A2360',
          red: '#A20103',
          'red-soft': '#C7363A',
          cream: '#F7F4EE',
        },
        ink: {
          DEFAULT: '#101524',
          soft: '#3A4256',
          mute: '#6B7488',
          subtle: '#9099AC',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#EEF1F7',
          warm: '#F4EEDF',
          dark: '#0B0F1A',
          'dark-alt': '#141A2A',
        },
        line: {
          DEFAULT: '#E5E7EE',
          soft: '#EEF0F5',
          strong: '#CDD2DE',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Inter', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 5.5vw + 1rem, 4.75rem)', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2rem, 4vw + 0.5rem, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.625rem, 2.5vw + 0.5rem, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        eyebrow: ['0.7rem', { lineHeight: '1.2', letterSpacing: '0.22em' }],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16, 21, 36, 0.04), 0 2px 8px rgba(16, 21, 36, 0.04)',
        medium: '0 4px 12px rgba(16, 21, 36, 0.06), 0 12px 32px rgba(16, 21, 36, 0.06)',
        large: '0 12px 28px rgba(16, 21, 36, 0.08), 0 32px 64px rgba(16, 21, 36, 0.08)',
        glow: '0 0 0 1px rgba(45, 92, 136, 0.12), 0 18px 48px rgba(45, 92, 136, 0.18)',
        'glow-purple': '0 0 0 1px rgba(59, 48, 130, 0.16), 0 18px 48px rgba(59, 48, 130, 0.22)',
        'inner-soft': 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        '2xl': '28px',
        '3xl': '36px',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring-soft': 'cubic-bezier(0.34, 1.4, 0.64, 1)',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
        450: '450ms',
        600: '600ms',
        900: '900ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        marquee: 'marquee 32s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 18s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
      },
      backgroundImage: {
        'grid-soft':
          'linear-gradient(rgba(16,21,36,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,21,36,0.04) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        radial: 'radial-gradient(ellipse at center, var(--tw-gradient-from), var(--tw-gradient-to))',
      },
      backgroundSize: {
        'grid-24': '24px 24px',
        'grid-40': '40px 40px',
      },
      maxWidth: {
        'container': '1240px',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
