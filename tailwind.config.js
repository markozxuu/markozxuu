module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-vercel': '#131415',
        'gray-vercel': '#666',
        'accent-2': '#333',
        'accent-3': '#eaeaea',
        'accent-4': '#888',
        'accent-5': '#A1A1AA',
        'red-light': '#FF1A1A',
        'red-dark': '#C50000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
