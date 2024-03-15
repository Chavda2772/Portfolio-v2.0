/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        skin: {
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
          action: withOpacity('--color-action')
        },
      },
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
      // colors: {
      //   primary: '#CAF0F8',
      //   secondary: '#191645',
      //   action: '#43C6AC',
      // },
    },
  },
  plugins: [],
};
