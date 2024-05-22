/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    'app/**/*.{ts,tsx}', 
    'components/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    data: {
      open: 'state="open"',
      closed: 'state="closed"',
      active: 'state="active"',
      selected: 'state="selected"'
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          foreground: 'hsl(var(--brand-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      }
    },
    keyframes: {
      'accordion-down': {
        from: {height: 0},
        to: {height: 'var(--radix-accordion-content-height)'},
      },
      'accordion-up': {
        from: {height: 'var(--radix-accordion-content-height)'},
        to: {height: 0},
      },
      'spin': {
        from: {transform: 'rotate(0deg)'},
        to: {transform: 'rotate(360deg)'}
      }
    },
    animation: {
      'accordion-down': 'accordion-down 150ms ease-out',
      'accordion-up': 'accordion-up 150ms ease-out',
      'spin': 'spin 1s linear infinite'
    }
  },
  plugins: [
    require('autoprefixer'),
    require('tailwindcss-animate'),
    require('@tailwindcss/container-queries'),
    require('tailwind-scrollbar')({nocompatible: true})
  ],
}