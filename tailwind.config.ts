import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium dark theme
        'dark-base': '#070A0F',
        'dark-elevated': '#0B1020',
        'dark-surface': 'rgba(255, 255, 255, 0.04)',
        'dark-border': 'rgba(255, 255, 255, 0.08)',
        'dark-hover': 'rgba(255, 255, 255, 0.06)',
        
        // Text colors
        'text-primary': 'rgba(255, 255, 255, 0.92)',
        'text-secondary': 'rgba(255, 255, 255, 0.70)',
        'text-tertiary': 'rgba(255, 255, 255, 0.50)',
        
        // Accent colors
        'accent-cyan': '#4CC9F0',
        'accent-violet': '#8B5CF6',
        'accent-success': '#22C55E',
        'accent-warning': '#F59E0B',
        
        // Legacy support
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        border: 'rgba(255, 255, 255, 0.08)',
        primary: {
          DEFAULT: '#4CC9F0',
          dark: '#3BA8CC',
          light: '#6DD4F5',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED',
          light: '#A78BFA',
        },
        accent: {
          DEFAULT: '#4CC9F0',
          dark: '#3BA8CC',
          light: '#6DD4F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-xl': ['44px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-lg': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-md': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      borderRadius: {
        'premium': '24px',
        'card': '20px',
        'button': '12px',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px rgba(76, 201, 240, 0.15)',
        'glow-violet': '0 0 40px rgba(139, 92, 246, 0.15)',
        'premium': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.2)',
      },
      backdropBlur: {
        'premium': '20px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
