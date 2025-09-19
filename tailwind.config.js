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
        primary: {
          50: '#F0F7FF',
          100: '#F0F7FF',
          200: '#F0F7FF',
          300: '#D8E3FF',
          400: '#D8E3FF',
          500: '#3F72AF',
          600: '#3F72AF',
          700: '#112D4E',
          800: '#112D4E',
          900: '#112D4E',
        },
        secondary: {
          50: '#F0F7FF',
          100: '#D8E3FF',
          200: '#D8E3FF',
          300: '#D8E3FF',
          400: '#3F72AF',
          500: '#3F72AF',
          600: '#3F72AF',
          700: '#112D4E',
          800: '#112D4E',
          900: '#112D4E',
        },
        accent: {
          50: '#F0F7FF',
          100: '#D8E3FF',
          200: '#D8E3FF',
          300: '#3F72AF',
          400: '#3F72AF',
          500: '#112D4E',
          600: '#112D4E',
          700: '#112D4E',
          800: '#112D4E',
          900: '#112D4E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
