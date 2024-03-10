/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      margin: {
        13: '3.2rem',
      },
      borderWidth: {
        15: '15px',
        30: '30px',
      },
      fontSize: {
        '24rem': '24rem',
      },
      colors: {
        primary: '#CAF0F8',
        secondary: '#191645',
        action: '#43C6AC',
      },
    },
  },
  plugins: [],
};
