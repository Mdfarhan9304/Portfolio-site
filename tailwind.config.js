/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': {
          200: '#1a1a1a',
          300: '#141414',
          DEFAULT: '#000000',
        },
        'primary': '#3B82F6',
        'accent': '#22D3EE',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'shine': 'shine var(--duration) linear infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0% 0%' },
          '25%': { backgroundPosition: '100% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '75%': { backgroundPosition: '0% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} 