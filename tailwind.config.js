/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9eeff',
          500: '#4f8ef7',
          600: '#2d6cdf',
          700: '#2457b7',
        },
        accent: {
          500: '#8b5cf6',
        },
      },
    },
  },
  plugins: [],
};
